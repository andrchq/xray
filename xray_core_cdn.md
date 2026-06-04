{
  "log": {
    "loglevel": "warning"
  },
  "inbounds": [
    {
      "tag": "[XHTTP-CDN]",
      "port": 10443,
      "listen": "127.0.0.1",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "streamSettings": {
        "network": "xhttp",
        "security": "none",
        "xhttpSettings": {
          "mode": "packet-up",
          "path": "/api/v2/updates",
          "extra": {
            "noSSEHeader": true,
            "noGRPCHeader": true,
            "uplinkHTTPMethod": "GET",
            "uplinkDataPlacement": "header",
            "uplinkDataKey": "X-Data",
            "uplinkChunkSize": "700-1200",
            "serverMaxHeaderBytes": 32768,
            "xPaddingKey": "cb",
            "xPaddingBytes": "20-80",
            "xPaddingHeader": "X-Cache-Key",
            "xPaddingMethod": "tokenish",
            "xPaddingObfsMode": true,
            "xPaddingPlacement": "queryInHeader"
          }
        }
      }
    },
    {
      "tag": "[XHTTP-CDN-II]",
      "port": 11443,
      "listen": "127.0.0.1",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "streamSettings": {
        "network": "xhttp",
        "security": "none",
        "xhttpSettings": {
          "mode": "packet-up",
          "path": "/api/v2/updates/p1",
          "extra": {
            "noSSEHeader": true,
            "noGRPCHeader": true,
            "uplinkHTTPMethod": "GET",
            "uplinkDataPlacement": "header",
            "uplinkDataKey": "X-Data",
            "uplinkChunkSize": "700-1200",
            "serverMaxHeaderBytes": 32768,
            "xPaddingKey": "cb",
            "xPaddingBytes": "20-80",
            "xPaddingHeader": "X-Cache-Key",
            "xPaddingMethod": "tokenish",
            "xPaddingObfsMode": true,
            "xPaddingPlacement": "queryInHeader"
          }
        }
      }
    },
    {
      "tag": "[XHTTP-CDN-III]",
      "port": 12443,
      "listen": "127.0.0.1",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "streamSettings": {
        "network": "xhttp",
        "security": "none",
        "xhttpSettings": {
          "mode": "packet-up",
          "path": "/api/v2/updates/put",
          "extra": {
            "noSSEHeader": true,
            "noGRPCHeader": true,
            "uplinkHTTPMethod": "GET",
            "uplinkDataPlacement": "header",
            "uplinkDataKey": "X-Data",
            "uplinkChunkSize": "700-1200",
            "serverMaxHeaderBytes": 32768,
            "xPaddingKey": "cb",
            "xPaddingBytes": "20-80",
            "xPaddingHeader": "X-Cache-Key",
            "xPaddingMethod": "tokenish",
            "xPaddingObfsMode": true,
            "xPaddingPlacement": "queryInHeader"
          }
        }
      }
    },
    {
      "tag": "[XHTTP-CDN-IV]",
      "port": 13443,
      "listen": "127.0.0.1",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "streamSettings": {
        "network": "xhttp",
        "security": "none",
        "xhttpSettings": {
          "mode": "packet-up",
          "path": "/api/v2/updates/stream",
          "extra": {
            "noSSEHeader": true,
            "noGRPCHeader": true,
            "uplinkHTTPMethod": "GET",
            "uplinkDataPlacement": "header",
            "uplinkDataKey": "X-Data",
            "uplinkChunkSize": "700-1200",
            "serverMaxHeaderBytes": 32768,
            "xPaddingKey": "cb",
            "xPaddingBytes": "20-80",
            "xPaddingHeader": "X-Cache-Key",
            "xPaddingMethod": "tokenish",
            "xPaddingObfsMode": true,
            "xPaddingPlacement": "queryInHeader"
          }
        }
      }
    },
    {
      "tag": "[XHTTP-CDN-V]",
      "port": 14443,
      "listen": "127.0.0.1",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "streamSettings": {
        "network": "xhttp",
        "security": "none",
        "xhttpSettings": {
          "mode": "packet-up",
          "path": "/api/v2/updates/stream-lite",
          "extra": {
            "noSSEHeader": true,
            "noGRPCHeader": true,
            "uplinkHTTPMethod": "GET",
            "uplinkDataPlacement": "header",
            "uplinkDataKey": "X-Data",
            "uplinkChunkSize": "700-1200",
            "serverMaxHeaderBytes": 32768,
            "xPaddingKey": "cb",
            "xPaddingBytes": "20-80",
            "xPaddingHeader": "X-Cache-Key",
            "xPaddingMethod": "tokenish",
            "xPaddingObfsMode": true,
            "xPaddingPlacement": "queryInHeader"
          }
        }
      }
    },
    {
      "tag": "[XHTTP-CDN-VI]",
      "port": 15443,
      "listen": "127.0.0.1",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "streamSettings": {
        "network": "xhttp",
        "security": "none",
        "xhttpSettings": {
          "mode": "packet-up",
          "path": "/api/v2/updates/one",
          "extra": {
            "noSSEHeader": true,
            "noGRPCHeader": true,
            "uplinkHTTPMethod": "GET",
            "uplinkDataPlacement": "header",
            "uplinkDataKey": "X-Data",
            "uplinkChunkSize": "700-1200",
            "serverMaxHeaderBytes": 32768,
            "xPaddingKey": "cb",
            "xPaddingBytes": "20-80",
            "xPaddingHeader": "X-Cache-Key",
            "xPaddingMethod": "tokenish",
            "xPaddingObfsMode": true,
            "xPaddingPlacement": "queryInHeader"
          }
        }
      }
    }
  ],
  "outbounds": [
    {
      "tag": "DIRECT",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIPv4"
      }
    },
    {
      "tag": "BLOCK",
      "protocol": "blackhole"
    }
  ],
  "routing": {
    "rules": [
      {
        "type": "field",
        "domain": [
          "geosite:telegram"
        ],
        "inboundTag": [
          "[XHTTP-CDN]",
          "[XHTTP-CDN-II]",
          "[XHTTP-CDN-III]",
          "[XHTTP-CDN-IV]",
          "[XHTTP-CDN-V]",
          "[XHTTP-CDN-VI]"
        ],
        "outboundTag": "DIRECT"
      },
      {
        "ip": [
          "geoip:telegram"
        ],
        "type": "field",
        "inboundTag": [
          "[XHTTP-CDN]",
          "[XHTTP-CDN-II]",
          "[XHTTP-CDN-III]",
          "[XHTTP-CDN-IV]",
          "[XHTTP-CDN-V]",
          "[XHTTP-CDN-VI]"
        ],
        "outboundTag": "DIRECT"
      },
      {
        "type": "field",
        "protocol": [
          "bittorrent"
        ],
        "outboundTag": "BLOCK"
      },
      {
        "ip": [
          "geoip:private"
        ],
        "type": "field",
        "outboundTag": "BLOCK"
      },
      {
        "type": "field",
        "domain": [
          "geosite:vk",
          "domain:mvk.com",
          "domain:vk.cc",
          "domain:vk.com",
          "domain:vk.design",
          "domain:vk.link",
          "domain:vk.ru",
          "domain:vkontakte.com",
          "domain:vkontakte.ru",
          "domain:cdn-vk.net",
          "domain:cdn-vk.ru",
          "domain:userapi.com",
          "domain:userapi.ru",
          "domain:vk-cdn.me",
          "domain:vk-cdn.net",
          "domain:vk-portal.net",
          "domain:vkcache.com",
          "domain:vkcdnservice.com",
          "domain:vkcloud-static.ru",
          "domain:vktech-static.ru",
          "domain:vkuser.net",
          "domain:vkusercdn.ru",
          "domain:vkuserphoto.ru",
          "domain:vkuseraudio.com",
          "domain:vkuseraudio.net",
          "domain:vkuseraudio.ru",
          "domain:vkuserlive.com",
          "domain:vkuserlive.net",
          "domain:vkuservideo.com",
          "domain:vkuservideo.net",
          "domain:vkuservideo.ru",
          "domain:vk.me",
          "domain:vkmessenger.app",
          "domain:vkmessenger.com",
          "domain:vkpay.app",
          "domain:vkpay.com",
          "domain:vkpay.io",
          "domain:vkpay.ru",
          "domain:vk-apps.com",
          "domain:vk-apps.ru",
          "domain:vk-records.ru",
          "domain:vk-stadium.ru",
          "domain:vk.company",
          "domain:vk.team",
          "domain:vkclips.app",
          "domain:vkcs.cloud",
          "domain:vkfest.ru",
          "domain:vkgo.app",
          "domain:vklive.app",
          "domain:vkvideo.ru",
          "domain:vkplay-arena.ru",
          "domain:vkplay.ru",
          "domain:vkplay.live",
          "geosite:category-gov-ru",
          "geosite:category-ru",
          "geosite:mailru",
          "geosite:yandex",
          "geosite:apple"
        ],
        "inboundTag": [
          "[XHTTP-CDN]",
          "[XHTTP-CDN-II]",
          "[XHTTP-CDN-III]",
          "[XHTTP-CDN-IV]",
          "[XHTTP-CDN-V]",
          "[XHTTP-CDN-VI]"
        ],
        "outboundTag": "DIRECT"
      },
      {
        "ip": [
          "geoip:ru"
        ],
        "type": "field",
        "inboundTag": [
          "[XHTTP-CDN]",
          "[XHTTP-CDN-II]",
          "[XHTTP-CDN-III]",
          "[XHTTP-CDN-IV]",
          "[XHTTP-CDN-V]",
          "[XHTTP-CDN-VI]"
        ],
        "outboundTag": "DIRECT"
      },
      {
        "port": "443",
        "type": "field",
        "network": "udp",
        "inboundTag": [
          "[XHTTP-CDN]",
          "[XHTTP-CDN-II]",
          "[XHTTP-CDN-III]",
          "[XHTTP-CDN-IV]",
          "[XHTTP-CDN-V]",
          "[XHTTP-CDN-VI]"
        ],
        "outboundTag": "DIRECT"
      },
      {
        "type": "field",
        "domain": [
          "full:cloudflare.com",
          "domain:msftconnecttest.com",
          "domain:msftncsi.com",
          "domain:connectivitycheck.gstatic.com",
          "domain:captive.apple.com",
          "full:detectportal.firefox.com",
          "domain:networkcheck.kde.org",
          "full:*.gstatic.com",
          "domain:gstatic.com"
        ],
        "outboundTag": "DIRECT"
      },
      {
        "type": "field",
        "inboundTag": [
          "[XHTTP-CDN]",
          "[XHTTP-CDN-II]",
          "[XHTTP-CDN-III]",
          "[XHTTP-CDN-IV]",
          "[XHTTP-CDN-V]",
          "[XHTTP-CDN-VI]"
        ],
        "outboundTag": "DIRECT"
      }
    ],
    "domainStrategy": "IPIfNonMatch"
  }
}
