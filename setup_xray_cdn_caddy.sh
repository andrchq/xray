#!/usr/bin/env bash
set -Eeuo pipefail

SCRIPT_NAME="$(basename "$0")"

DOMAIN=""
EMAIL=""
CDN_PROVIDER="cloudflare"
PUBLIC_PORT="443"
TLS_MODE="acme"
ENABLE_HTTP_ORIGIN=0
OPEN_HTTP3_UDP=0
CONFIGURE_FIREWALL=1
INSTALL_CADDY=1
DRY_RUN=0

XHTTP_PATH="/api/v2/updates"
XHTTP_UPSTREAM="127.0.0.1:10443"

ENABLE_GRPC=1
GRPC_SERVICE="cdnsvc"
GRPC_UPSTREAM="127.0.0.1:11443"

ENABLE_WS=1
WS_PATH="/ws"
WS_UPSTREAM="127.0.0.1:12443"

ENABLE_HTTPUPGRADE=1
HTTPUPGRADE_PATH="/upgrade"
HTTPUPGRADE_UPSTREAM="127.0.0.1:13443"

CADDYFILE="/etc/caddy/Caddyfile"
FAKE_SITE_ROOT="/var/www/cdn-origin"

CF_HTTPS_PORTS=(443 2053 2083 2087 2096 8443)

usage() {
  cat <<EOF
Usage:
  sudo ./${SCRIPT_NAME} --domain cdn.example.com --email admin@example.com [options]

This script prepares only the CDN origin layer:
  - installs Caddy if needed;
  - writes /etc/caddy/Caddyfile;
  - opens public firewall ports via ufw/firewalld if active.

It does NOT install Xray, does NOT install Remnawave Node, and does NOT write Xray config.

Required:
  --domain <name>                    Public CDN hostname routed to this server.
  --email <email>                    ACME email for Caddy certificates. Required only with --tls-mode acme.

CDN/Caddy:
  --cdn <cloudflare|beeline|generic> Default: cloudflare.
  --public-port <port>               Public HTTPS port for Caddy. Default: 443.
                                     Cloudflare HTTPS ports: 443, 2053, 2083, 2087, 2096, 8443.
  --tls-mode <acme|internal>         acme uses a public certificate. internal uses Caddy's local CA
                                     and requires origin certificate verification to be disabled in CDN.
                                     Default: acme.
  --enable-http-origin               Also serve the same CDN routes over plain HTTP on port 80.
                                     Use this if the CDN cannot connect to internal/self-signed origin TLS.
  --open-http3-udp                   Also open the HTTPS port over UDP.
  --no-install-caddy                 Skip Caddy package installation.
  --no-firewall                      Do not change ufw/firewalld rules.
  --dry-run                          Print mutating commands instead of running them.

Primary XHTTP route:
  --xhttp-path <path>                Default: /api/v2/updates
  --xhttp-upstream <host:port>       Remnawave/Xray loopback inbound. Default: 127.0.0.1:10443

Fallback routes:
  --grpc-service <name>              Default: cdnsvc. Public route is /<service>/*
  --grpc-upstream <host:port>        Default: 127.0.0.1:11443
  --disable-grpc
  --ws-path <path>                   Default: /ws
  --ws-upstream <host:port>          Default: 127.0.0.1:12443
  --disable-ws
  --httpupgrade-path <path>          Default: /upgrade
  --httpupgrade-upstream <host:port> Default: 127.0.0.1:13443
  --disable-httpupgrade
  -h, --help                         Show this help.
EOF
}

log() { printf '[+] %s\n' "$*"; }
warn() { printf '[!] %s\n' "$*" >&2; }
die() { printf '[x] %s\n' "$*" >&2; exit 1; }

run() {
  if [[ "$DRY_RUN" -eq 1 ]]; then
    printf 'DRY-RUN:'
    printf ' %q' "$@"
    printf '\n'
  else
    "$@"
  fi
}

need_root() {
  [[ "${EUID}" -eq 0 ]] || die "Run as root: sudo ./${SCRIPT_NAME} ..."
}

parse_args() {
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --domain) DOMAIN="${2:-}"; shift 2 ;;
      --email) EMAIL="${2:-}"; shift 2 ;;
      --cdn) CDN_PROVIDER="${2:-}"; shift 2 ;;
      --public-port) PUBLIC_PORT="${2:-}"; shift 2 ;;
      --tls-mode) TLS_MODE="${2:-}"; shift 2 ;;
      --enable-http-origin) ENABLE_HTTP_ORIGIN=1; shift ;;
      --open-http3-udp) OPEN_HTTP3_UDP=1; shift ;;
      --no-install-caddy) INSTALL_CADDY=0; shift ;;
      --no-firewall) CONFIGURE_FIREWALL=0; shift ;;
      --dry-run) DRY_RUN=1; shift ;;
      --xhttp-path) XHTTP_PATH="${2:-}"; shift 2 ;;
      --xhttp-upstream) XHTTP_UPSTREAM="${2:-}"; shift 2 ;;
      --grpc-service) GRPC_SERVICE="${2:-}"; shift 2 ;;
      --grpc-upstream) GRPC_UPSTREAM="${2:-}"; shift 2 ;;
      --disable-grpc) ENABLE_GRPC=0; shift ;;
      --ws-path) WS_PATH="${2:-}"; shift 2 ;;
      --ws-upstream) WS_UPSTREAM="${2:-}"; shift 2 ;;
      --disable-ws) ENABLE_WS=0; shift ;;
      --httpupgrade-path) HTTPUPGRADE_PATH="${2:-}"; shift 2 ;;
      --httpupgrade-upstream) HTTPUPGRADE_UPSTREAM="${2:-}"; shift 2 ;;
      --disable-httpupgrade) ENABLE_HTTPUPGRADE=0; shift ;;
      -h|--help) usage; exit 0 ;;
      *) die "Unknown option: $1" ;;
    esac
  done
}

validate_domain() {
  [[ "$DOMAIN" =~ ^([A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,63}$ ]] \
    || die "Invalid --domain value"
}

validate_port() {
  local value="$1"
  local name="$2"
  [[ "$value" =~ ^[0-9]+$ ]] || die "${name} must be a number"
  (( value >= 1 && value <= 65535 )) || die "${name} must be in range 1..65535"
}

validate_path() {
  local value="$1"
  local name="$2"
  [[ "$value" == /* ]] || die "${name} must start with /"
  [[ "$value" != "/" ]] || die "${name} must not be /"
  [[ "$value" =~ ^/[A-Za-z0-9._~%:@/+=,-]+$ ]] || die "${name} contains unsafe characters"
}

validate_upstream() {
  local value="$1"
  local name="$2"
  [[ "$value" =~ ^(\[[0-9A-Fa-f:.]+\]|[A-Za-z0-9_.-]+):[0-9]{1,5}$ ]] \
    || die "${name} must be host:port, for example 127.0.0.1:10443"
  validate_port "${value##*:}" "${name} port"
}

validate_inputs() {
  [[ -n "$DOMAIN" ]] || die "--domain is required"
  [[ "$CDN_PROVIDER" == "cloudflare" || "$CDN_PROVIDER" == "beeline" || "$CDN_PROVIDER" == "generic" ]] \
    || die "--cdn must be cloudflare, beeline, or generic"
  [[ "$TLS_MODE" == "acme" || "$TLS_MODE" == "internal" ]] || die "--tls-mode must be acme or internal"
  if [[ "$TLS_MODE" == "acme" ]]; then
    [[ -n "$EMAIL" ]] || die "--email is required with --tls-mode acme"
  fi

  validate_domain
  validate_port "$PUBLIC_PORT" "--public-port"
  validate_path "$XHTTP_PATH" "--xhttp-path"
  validate_upstream "$XHTTP_UPSTREAM" "--xhttp-upstream"

  if [[ "$ENABLE_GRPC" -eq 1 ]]; then
    [[ "$GRPC_SERVICE" =~ ^[A-Za-z0-9._-]{1,64}$ ]] || die "--grpc-service contains unsafe characters"
    validate_upstream "$GRPC_UPSTREAM" "--grpc-upstream"
  fi
  if [[ "$ENABLE_WS" -eq 1 ]]; then
    validate_path "$WS_PATH" "--ws-path"
    validate_upstream "$WS_UPSTREAM" "--ws-upstream"
  fi
  if [[ "$ENABLE_HTTPUPGRADE" -eq 1 ]]; then
    validate_path "$HTTPUPGRADE_PATH" "--httpupgrade-path"
    validate_upstream "$HTTPUPGRADE_UPSTREAM" "--httpupgrade-upstream"
  fi

  if [[ "$CDN_PROVIDER" == "cloudflare" ]]; then
    local allowed=0
    local port
    for port in "${CF_HTTPS_PORTS[@]}"; do
      [[ "$PUBLIC_PORT" == "$port" ]] && allowed=1
    done
    [[ "$allowed" -eq 1 ]] || die "Cloudflare only proxies HTTPS ports: ${CF_HTTPS_PORTS[*]}"
    if [[ "$ENABLE_GRPC" -eq 1 && "$PUBLIC_PORT" != "443" ]]; then
      warn "Cloudflare gRPC officially requires 443; gRPC fallback may not work on ${PUBLIC_PORT}."
    fi
  fi
}

backup_file() {
  local file="$1"
  [[ -f "$file" ]] || return 0
  local backup_dir="/root/caddy-cdn-backups/$(date -u +%Y%m%d-%H%M%S)"
  run install -d -m 0700 "$backup_dir"
  run cp -a "$file" "${backup_dir}/$(basename "$file")"
  log "Backed up ${file} to ${backup_dir}/$(basename "$file")"
}

install_base_packages() {
  if command -v apt-get >/dev/null 2>&1; then
    run apt-get update
    run apt-get install -y curl ca-certificates gnupg debian-keyring debian-archive-keyring apt-transport-https
  elif command -v dnf >/dev/null 2>&1; then
    run dnf install -y curl ca-certificates gnupg2
  elif command -v yum >/dev/null 2>&1; then
    run yum install -y curl ca-certificates gnupg2
  else
    die "Unsupported package manager. Install Caddy manually, then rerun with --no-install-caddy."
  fi
}

install_caddy() {
  [[ "$INSTALL_CADDY" -eq 1 ]] || return 0
  if command -v caddy >/dev/null 2>&1; then
    log "Caddy is already installed: $(caddy version 2>/dev/null || true)"
    return 0
  fi

  log "Installing Caddy"
  install_base_packages

  if command -v apt-get >/dev/null 2>&1; then
    run install -d -m 0755 /usr/share/keyrings
    if [[ "$DRY_RUN" -eq 1 ]]; then
      log "Would add official Caddy apt repository"
    else
      rm -f /usr/share/keyrings/caddy-stable-archive-keyring.gpg
      curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
        | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
      curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
        > /etc/apt/sources.list.d/caddy-stable.list
    fi
    run apt-get update
    run apt-get install -y caddy
  elif command -v dnf >/dev/null 2>&1; then
    run dnf install -y 'dnf-command(copr)'
    run dnf copr enable -y @caddy/caddy
    run dnf install -y caddy
  elif command -v yum >/dev/null 2>&1; then
    run yum install -y yum-plugin-copr
    run yum copr enable -y @caddy/caddy
    run yum install -y caddy
  fi
}

cloudflare_cidrs() {
  [[ "$CDN_PROVIDER" == "cloudflare" ]] || return 0
  local v4=""
  local v6=""
  v4="$(curl -fsSL https://www.cloudflare.com/ips-v4 2>/dev/null || true)"
  v6="$(curl -fsSL https://www.cloudflare.com/ips-v6 2>/dev/null || true)"
  printf '%s\n%s\n' "$v4" "$v6" | awk 'NF { printf "%s ", $1 }'
}

caddy_global_email() {
  [[ "$TLS_MODE" == "acme" ]] || return 0
  printf '\temail %s\n' "$EMAIL"
}

caddy_tls_directive() {
  [[ "$TLS_MODE" == "internal" ]] || return 0
  printf '\ttls internal\n'
}

caddy_http_origin_site() {
  [[ "$ENABLE_HTTP_ORIGIN" -eq 1 ]] || return 0
  cat <<EOF

http://${DOMAIN} {
	import cdn_routes
}
EOF
}

caddy_site_address() {
  if [[ "$PUBLIC_PORT" == "443" ]]; then
    printf 'https://%s\n' "$DOMAIN"
  else
    printf 'https://%s:%s\n' "$DOMAIN" "$PUBLIC_PORT"
  fi
}

caddy_grpc_route() {
  [[ "$ENABLE_GRPC" -eq 1 ]] || return 0
  cat <<EOF

	@grpc path /${GRPC_SERVICE} /${GRPC_SERVICE}/*
	header @grpc {
		Cache-Control "no-store, no-cache, max-age=0"
		Pragma "no-cache"
		X-Accel-Buffering "no"
	}
	reverse_proxy @grpc ${GRPC_UPSTREAM} {
		flush_interval -1
		transport http {
			versions h2c
			compression off
		}
	}
EOF
}

caddy_ws_route() {
  [[ "$ENABLE_WS" -eq 1 ]] || return 0
  cat <<EOF

	@ws path ${WS_PATH} ${WS_PATH}/*
	header @ws {
		Cache-Control "no-store, no-cache, max-age=0"
		Pragma "no-cache"
		X-Accel-Buffering "no"
	}
	reverse_proxy @ws ${WS_UPSTREAM} {
		flush_interval -1
		transport http {
			versions 1.1
			compression off
		}
	}
EOF
}

caddy_httpupgrade_route() {
  [[ "$ENABLE_HTTPUPGRADE" -eq 1 ]] || return 0
  cat <<EOF

	@httpupgrade path ${HTTPUPGRADE_PATH} ${HTTPUPGRADE_PATH}/*
	header @httpupgrade {
		Cache-Control "no-store, no-cache, max-age=0"
		Pragma "no-cache"
		X-Accel-Buffering "no"
	}
	reverse_proxy @httpupgrade ${HTTPUPGRADE_UPSTREAM} {
		flush_interval -1
		transport http {
			versions 1.1
			compression off
		}
	}
EOF
}

write_fake_site() {
  run install -d -m 0755 "$FAKE_SITE_ROOT"
  if [[ "$DRY_RUN" -eq 0 ]]; then
    cat > "${FAKE_SITE_ROOT}/index.html" <<EOF
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${DOMAIN}</title>
</head>
<body>
  <h1>${DOMAIN}</h1>
  <p>OK</p>
</body>
</html>
EOF
  fi
}

write_caddyfile() {
  log "Writing Caddyfile: ${CADDYFILE}"
  backup_file "$CADDYFILE"
  run install -d -m 0755 "$(dirname "$CADDYFILE")"

  if [[ "$DRY_RUN" -eq 1 ]]; then
    log "Would write ${CADDYFILE}"
    return 0
  fi

  local trusted=""
  local trusted_block=""
  trusted="$(cloudflare_cidrs)"
  if [[ -n "$trusted" ]]; then
    trusted_block=$'\t\ttrusted_proxies static '"${trusted}"$'\n\t\ttrusted_proxies_strict'
  fi

  local site
  site="$(caddy_site_address)"

  cat > "$CADDYFILE" <<EOF
{
$(caddy_global_email)
	servers {
		enable_full_duplex
		max_header_size 64KB
${trusted_block}
	}
}

(cdn_routes) {
	header {
		-Server
		X-Content-Type-Options nosniff
		Referrer-Policy no-referrer
	}

	@xhttp path ${XHTTP_PATH} ${XHTTP_PATH}/*
	header @xhttp {
		Cache-Control "no-store, no-cache, max-age=0"
		Pragma "no-cache"
		X-Accel-Buffering "no"
	}
	reverse_proxy @xhttp ${XHTTP_UPSTREAM} {
		flush_interval -1
		transport http {
			versions h2c
			compression off
		}
	}
$(caddy_grpc_route)
$(caddy_ws_route)
$(caddy_httpupgrade_route)

	@health path /healthz /cdn-cgi/trace
	respond @health 204

	root * ${FAKE_SITE_ROOT}
	file_server
}

${site} {
$(caddy_tls_directive)
	import cdn_routes
}
$(caddy_http_origin_site)
EOF

  caddy fmt --overwrite "$CADDYFILE" >/dev/null
}

open_firewall_port() {
  local port="$1"
  local proto="$2"

  [[ "$CONFIGURE_FIREWALL" -eq 1 ]] || return 0

  if command -v ufw >/dev/null 2>&1 && ufw status 2>/dev/null | grep -q "Status: active"; then
    log "Opening ${port}/${proto} in ufw"
    run ufw allow "${port}/${proto}"
    return 0
  fi

  if command -v firewall-cmd >/dev/null 2>&1 && systemctl is-active --quiet firewalld; then
    log "Opening ${port}/${proto} in firewalld"
    run firewall-cmd --permanent --add-port="${port}/${proto}"
    run firewall-cmd --reload
    return 0
  fi

  warn "No active ufw/firewalld detected. Open ${port}/${proto} in the provider firewall/security group if needed."
}

configure_firewall() {
  open_firewall_port 80 tcp
  open_firewall_port "$PUBLIC_PORT" tcp
  if [[ "$OPEN_HTTP3_UDP" -eq 1 ]]; then
    open_firewall_port "$PUBLIC_PORT" udp
  fi
}

validate_and_restart() {
  if [[ "$DRY_RUN" -eq 1 ]]; then
    log "Skipping validation and service restart in dry-run mode"
    return 0
  fi

  log "Validating Caddy config"
  caddy validate --config "$CADDYFILE"

  log "Restarting Caddy"
  systemctl enable caddy >/dev/null 2>&1 || true
  systemctl restart caddy
}

main() {
  parse_args "$@"
  need_root
  validate_inputs

  install_caddy
  write_fake_site
  write_caddyfile
  configure_firewall
  validate_and_restart

  log "Done"
  log "CDN origin: ${DOMAIN}:${PUBLIC_PORT}; XHTTP upstream: ${XHTTP_UPSTREAM}${XHTTP_PATH}"
}

main "$@"
