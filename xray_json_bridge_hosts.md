{
  "remnawave": {
    "injectHosts": [
      {
        "selector": {
          "type": "sameTagAsRecipient"
        },
        "tagPrefix": "bridge",
        "selectFrom": "HIDDEN"
      }
    ]
  },
  "dns": {
    "hosts": {
      "one.one.one.one": [
        "8.8.8.8",
        "8.8.4.4"
      ]
    },
    "servers": [
      "https://dns.google/dns-query"
    ],
    "queryStrategy": "UseIPv4"
  },
  "log": {
    "error": "",
    "access": "",
    "loglevel": "warning"
  },
  "routing": {
    "domainMatcher": "hybrid",
    "domainStrategy": "IPOnDemand",
    "rules": [
      {
        "type": "field",
        "protocol": [
          "bittorrent"
        ],
        "outboundTag": "block"
      },
      {
        "type": "field",
        "ip": [
          "geoip:private"
        ],
        "outboundTag": "direct"
      },
      {
        "type": "field",
        "domain": [
          "geosite:private",
          "geosite:category-gov-ru",
          "geosite:category-ru",
          "geosite:mailru",
          "geosite:yandex",
          "geosite:apple",
          "geosite:vk",
          "regexp:^([\\w\\-\\.]+\\.)ru$",
          "regexp:^([\\w\\-\\.]+\\.)xn--p1ai$",
          "regexp:^([\\w\\-\\.]+\\.)xn--p1acf$",
          "regexp:^([\\w\\-\\.]+\\.)xn--80asehdb$",
          "regexp:^([\\w\\-\\.]+\\.)xn--c1avg$",
          "regexp:^([\\w\\-\\.]+\\.)xn--80aswg$",
          "regexp:^([\\w\\-\\.]+\\.)xn--80adxhks$",
          "regexp:^([\\w\\-\\.]+\\.)moscow$",
          "regexp:^([\\w\\-\\.]+\\.)xn--d1acj3b$"
        ],
        "outboundTag": "direct"
      },
      {
        "type": "field",
        "domain": [
          "geosite:google",
          "geosite:youtube",
          "geosite:telegram",
          "geosite:discord",
          "domain:autodesk.com",
          "domain:anthropic.com",
          "domain:chatgpt.com",
          "domain:claude.ai",
          "domain:deepmind.com",
          "domain:gemini.google",
          "domain:gemini.google.com",
          "domain:openai.com",
          "domain:oaistatic.com",
          "domain:oaiusercontent.com",
          "domain:sora.com",
          "domain:sora.chatgpt.com"
        ],
        "network": "tcp,udp",
        "outboundTag": "bridge"
      },
      {
        "type": "field",
        "ip": [
          "geoip:telegram"
        ],
        "network": "tcp,udp",
        "outboundTag": "bridge"
      },
      {
        "type": "field",
        "network": "tcp,udp",
        "outboundTag": "bridge"
      }
    ]
  },
  "inbounds": [
    {
      "tag": "socks",
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "socks",
      "settings": {
        "udp": true,
        "auth": "noauth",
        "allowTransparent": false
      },
      "sniffing": {
        "enabled": true,
        "routeOnly": true,
        "destOverride": [
          "http",
          "tls"
        ]
      }
    },
    {
      "tag": "http",
      "port": 10809,
      "listen": "127.0.0.1",
      "protocol": "http",
      "settings": {
        "allowTransparent": false
      },
      "sniffing": {
        "enabled": true,
        "routeOnly": true,
        "destOverride": [
          "http",
          "tls"
        ]
      }
    }
  ],
  "outbounds": [
    {
      "tag": "direct",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIPv4"
      }
    },
    {
      "tag": "block",
      "protocol": "blackhole"
    }
  ]
}
