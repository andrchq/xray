# CDN transport recommendation for Xray

Дата анализа: 2026-05-26.

## Короткий вывод

Для обычного CDN/reverse proxy, особенно Cloudflare, лучший основной вариант сейчас не "что-то вместо XHTTP", а более чистая сборка:

```text
Client -> CDN HTTPS/H2 -> Caddy TLS/H2 -> Xray loopback VLESS + XHTTP
```

Основной профиль: **VLESS + XHTTP + TLS на Caddy**, Xray слушает только `127.0.0.1`.

Режим XHTTP:

- `auto` как дефолт для живой эксплуатации.
- `stream-up` если клиент и CDN нормально держат H2/gRPC-like streaming.
- `packet-up` как fallback максимальной совместимости, но не как главный быстрый режим.
- `stream-one` годится для прямого H3/H2 и некоторых reverse proxy, но хуже как универсальный CDN-профиль.

Fallback-профили, которые стоит держать рядом:

- **VLESS + gRPC + TLS/Caddy**: совместимость с HTTP/2, но Xray-документация прямо рекомендует переходить на XHTTP.
- **VLESS + WebSocket + TLS/Caddy**: самый совместимый аварийный вариант.
- **VLESS + HTTPUpgrade + TLS/Caddy**: эффективнее WebSocket, но с более заметным HTTP/1.1 ALPN-профилем; Xray-документация тоже рекомендует XHTTP вместо него.

Для direct/non-CDN узлов лучше оставить отдельный профиль **VLESS + REALITY + Vision/raw**. Через CDN он не заменяет XHTTP, потому что обычный CDN проксирует HTTP(S), а не произвольный TCP/REALITY-трафик.

## Почему не gRPC/WebSocket вместо XHTTP

Xray официально перечисляет актуальные транспорты: RAW, XHTTP, mKCP, gRPC, WebSocket, HTTPUpgrade, Hysteria. В документации gRPC сказано, что он основан на HTTP/2, но рекомендуется переходить на XHTTP; также отмечены риски active probing и необходимость reverse proxy для разделения по path. Для HTTPUpgrade документация тоже рекомендует XHTTP, чтобы не упираться в заметный профиль HTTP/1.1.

Cloudflare поддерживает gRPC только при выполнении условий: endpoint на `443`, TLS, HTTP/2 и ALPN `h2`. HTTP/2 to Origin у Cloudflare включен по умолчанию, а HTTP/3 у Cloudflare работает между клиентом и edge, но не до origin. Поэтому для Cloudflare практичный origin-транспорт это H2 до Caddy, далее h2c до Xray.

## Что меняем относительно текущего `xray_core_cdn.md`

Текущий CDN-конфиг использует несколько loopback XHTTP inbound на `packet-up` и дополнительные нестандартные `extra` для GET/header uplink. Это может давать совместимость, но не выглядит как лучший дефолт под текущий Xray.

Рекомендуемый профиль:

- один основной XHTTP inbound на `127.0.0.1:10443`;
- `mode: auto`;
- включенный gRPC-like header по умолчанию (`noGRPCHeader: false`);
- Caddy как внешний TLS/H2 reverse proxy;
- fallback gRPC/WebSocket/HTTPUpgrade на отдельных loopback-портах;
- публично открыт только `80/tcp` для ACME и выбранный HTTPS-порт, обычно `443/tcp`;
- если нужен gRPC fallback через Cloudflare, лучше оставаться на `443`, потому что официальные требования Cloudflare для gRPC привязаны к `443`;
- UDP 443 открывать только если нужен прямой HTTP/3 к Caddy или CDN реально ходит к origin по H3. Для Cloudflare это не нужно, потому что HTTP/3 to origin не поддерживается.

## Скрипт

Файл: `setup_xray_cdn_caddy.sh`.

Пример запуска:

```bash
sudo bash setup_xray_cdn_caddy.sh \
  --domain cdn.example.com \
  --email admin@example.com \
  --public-port 443 \
  --xhttp-mode auto
```

Что делает скрипт:

- ставит Caddy из официального репозитория;
- не ставит Xray и не меняет Remnawave Node;
- создает backup существующего `/etc/caddy/Caddyfile`;
- пишет Caddyfile с TLS, reverse_proxy и h2c до loopback-inbound'ов Remnawave/Xray;
- открывает `80/tcp` и выбранный HTTPS-порт через `ufw` или `firewalld`, если они активны;
- валидирует `caddy validate` и перезапускает Caddy.

## Источники

- Xray transport list: https://xtls.github.io/en/config/transports/
- XHTTP discussion and operational notes: https://github.com/XTLS/Xray-core/discussions/4113
- Xray gRPC transport notes: https://xtls.github.io/en/config/transports/grpc.html
- Xray HTTPUpgrade notes: https://xtls.github.io/en/config/transports/httpupgrade.html
- Xray official install script: https://github.com/XTLS/Xray-install
- Cloudflare proxied ports: https://developers.cloudflare.com/fundamentals/reference/network-ports/
- Cloudflare gRPC requirements: https://developers.cloudflare.com/network/grpc-connections/
- Cloudflare HTTP/2 to Origin: https://developers.cloudflare.com/speed/optimization/protocol/http2-to-origin/
- Cloudflare HTTP/3 limitation to origin: https://developers.cloudflare.com/speed/optimization/protocol/http3/
- Caddy reverse_proxy and h2c: https://caddyserver.com/docs/caddyfile/directives/reverse_proxy
- Caddy automatic HTTPS requirements: https://caddyserver.com/docs/automatic-https
