{
  "log": {
    "loglevel": "debug"
  },
  "inbounds": [
    {
      "tag": "WHL-I",
      "port": 21443,
      "listen": "0.0.0.0",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls",
          "quic"
        ]
      },
      "streamSettings": {
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "apiok.ru"
        },
        "realitySettings": {
          "dest": "apiok.ru:443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "2af52c3c24f972c7",
            "6e722f346b89922b",
            "fba920f890f1b6bd"
          ],
          "publicKey": "fw5r8WM8ErNwJMfELhVZgANS6TnyAvHUN2c7Odn_HEA",
          "privateKey": "2M-oCCg9OLYvlhsDnHYzuQ2Z4OuwYZCbARL9ot2UtdU",
          "serverNames": [
            "apiok.ru"
          ]
        }
      }
    },
    {
      "tag": "WHL-II",
      "port": 22443,
      "listen": "0.0.0.0",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls",
          "quic"
        ]
      },
      "streamSettings": {
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "ads.x5.ru"
        },
        "realitySettings": {
          "dest": "ads.x5.ru:443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "2af52c3c24f972c7",
            "6e722f346b89922b",
            "fba920f890f1b6bd"
          ],
          "publicKey": "fw5r8WM8ErNwJMfELhVZgANS6TnyAvHUN2c7Odn_HEA",
          "privateKey": "2M-oCCg9OLYvlhsDnHYzuQ2Z4OuwYZCbARL9ot2UtdU",
          "serverNames": [
            "ads.x5.ru"
          ]
        }
      }
    },
    {
      "tag": "WHL-III",
      "port": 23443,
      "listen": "0.0.0.0",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "sniffing": {
        "enabled": true,
        "routeOnly": true,
        "destOverride": [
          "http",
          "tls",
          "quic"
        ]
      },
      "streamSettings": {
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "eh1.vk.com"
        },
        "realitySettings": {
          "dest": "eh1.vk.com:443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "2af52c3c24f972c7",
            "6e722f346b89922b",
            "fba920f890f1b6bd"
          ],
          "publicKey": "fw5r8WM8ErNwJMfELhVZgANS6TnyAvHUN2c7Odn_HEA",
          "privateKey": "2M-oCCg9OLYvlhsDnHYzuQ2Z4OuwYZCbARL9ot2UtdU",
          "serverNames": [
            "eh1.vk.com"
          ]
        }
      }
    },
    {
      "tag": "WHL-IV",
      "port": 24443,
      "listen": "0.0.0.0",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "sniffing": {
        "enabled": true,
        "routeOnly": true,
        "destOverride": [
          "http",
          "tls",
          "quic"
        ]
      },
      "streamSettings": {
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "api.okko.sport"
        },
        "realitySettings": {
          "dest": "api.okko.sport:443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "26e453941a1122be",
            "bfdf1757c233671c",
            "3a6db152aa2c21df"
          ],
          "publicKey": "nBqd6YwjPkdBnjJJeCMdLar2Ka_DzT89d_MIHxyvI1s",
          "privateKey": "SC-PBCI2VsgVIVR3X-Cj-nHpmSVNUqlFAG98OmbjNUc",
          "serverNames": [
            "api.okko.sport"
          ]
        }
      }
    },
    {
      "tag": "WHL-V",
      "port": 25443,
      "listen": "0.0.0.0",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "sniffing": {
        "enabled": true,
        "routeOnly": true,
        "destOverride": [
          "http",
          "tls",
          "quic"
        ]
      },
      "streamSettings": {
        "network": "xhttp",
        "security": "reality",
        "xhttpSettings": {
          "path": "/api/v2/updates/whl-v"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "stats.vk-portal.net:443",
          "spiderX": "/",
          "shortIds": [
            "26e453941a1122be",
            "bfdf1757c233671c",
            "3a6db152aa2c21df"
          ],
          "publicKey": "oVL6b2El5iDaLH-VuBMrPKHp-BSnXJCYFZhQu1bHUBQ",
          "privateKey": "2Zx_dO93zEtcsZPHAaJnfdF9wQdFU5QmCI5UNMcFX7E",
          "serverNames": [
            "stats.vk-portal.net"
          ]
        }
      }
    },
    {
      "tag": "WHL-VI",
      "port": 26443,
      "listen": "0.0.0.0",
      "protocol": "vless",
      "settings": {
        "clients": [],
        "decryption": "none"
      },
      "sniffing": {
        "enabled": true,
        "routeOnly": true,
        "destOverride": [
          "http",
          "tls",
          "quic"
        ]
      },
      "streamSettings": {
        "network": "xhttp",
        "security": "reality",
        "xhttpSettings": {
          "path": "/api/v2/updates/whl-vi"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "sun6-20.userapi.com:443",
          "spiderX": "/",
          "shortIds": [
            "26e453941a1122be",
            "bfdf1757c233671c",
            "3a6db152aa2c21df"
          ],
          "publicKey": "HZT9N9M9CopPE8w4mJow1X0JVqtLs3joO21ebF15mVk",
          "privateKey": "cja2jGckNKyNwnzFJu8TWSn8MIc-On64ampa3kJzwME",
          "serverNames": [
            "sun6-20.userapi.com"
          ]
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
      "tag": "WHL-OUT",
      "protocol": "freedom",
      "settings": {
        "domainStrategy": "UseIPv4"
      }
    },
    {
      "tag": "DBL-LITVA",
      "protocol": "vless",
      "settings": {
        "id": "15e9eb90-958b-46d6-8dfb-e2774cc54dc3",
        "flow": "xtls-rprx-vision",
        "port": 443,
        "level": 0,
        "address": "nlt2.prsta.xyz",
        "encryption": "none"
      },
      "streamSettings": {
        "network": "tcp",
        "security": "reality",
        "realitySettings": {
          "shortId": "e5c06fa86753723e",
          "publicKey": "m7cMoJTPVAIkmzWPpYfZF-nK3Xj4MvD_cNlEyFEs9As",
          "serverName": "nlt2.prsta.xyz",
          "fingerprint": "chrome"
        }
      }
    },
    {
      "tag": "DBL-POLAND",
      "protocol": "vless",
      "settings": {
        "id": "58014e09-afba-4218-bbd4-079d57eddf90",
        "flow": "xtls-rprx-vision",
        "port": 443,
        "level": 0,
        "address": "npl.prsta.xyz",
        "encryption": "none"
      },
      "streamSettings": {
        "network": "tcp",
        "security": "reality",
        "realitySettings": {
          "shortId": "533ac2853e2faec3",
          "publicKey": "5QauTyjkbHVuluHQMdR0rR1GrIEFgKy1Mhyu37KX8j8",
          "serverName": "npl.prsta.xyz",
          "fingerprint": "firefox"
        }
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
          "WHL-I",
          "WHL-II",
          "WHL-III",
          "WHL-IV",
          "WHL-V",
          "WHL-VI"
        ],
        "outboundTag": "DBL-POLAND"
      },
      {
        "ip": [
          "geoip:telegram"
        ],
        "type": "field",
        "inboundTag": [
          "WHL-I",
          "WHL-II",
          "WHL-III",
          "WHL-IV",
          "WHL-V",
          "WHL-VI"
        ],
        "outboundTag": "DBL-POLAND"
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
          "WHL-I",
          "WHL-II",
          "WHL-III",
          "WHL-IV",
          "WHL-V",
          "WHL-VI"
        ],
        "outboundTag": "WHL-OUT"
      },
      {
        "ip": [
          "geoip:ru"
        ],
        "type": "field",
        "inboundTag": [
          "WHL-I",
          "WHL-II",
          "WHL-III",
          "WHL-IV",
          "WHL-V",
          "WHL-VI"
        ],
        "outboundTag": "WHL-OUT"
      },
      {
        "port": "443",
        "type": "field",
        "network": "udp",
        "inboundTag": [
          "WHL-I",
          "WHL-II",
          "WHL-III",
          "WHL-IV",
          "WHL-V",
          "WHL-VI"
        ],
        "outboundTag": "DBL-POLAND"
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
          "domain:gstatic.com",
          "geosite:discord",
          "domain:discord.com",
          "domain:discord.gg",
          "domain:discordapp.com",
          "domain:discordapp.net",
          "domain:discord.media",
          "domain:discordcdn.com",
          "domain:discord.co",
          "domain:discord.dev",
          "domain:discord.gift",
          "domain:discord.app",
          "domain:discordstatus.com",
          "domain:dis.gd",
          "domain:discord-activities.com",
          "domain:discordactivities.com",
          "domain:discordsays.com"
        ],
        "outboundTag": "DIRECT"
      },
      {
        "type": "field",
        "inboundTag": [
          "WHL-I",
          "WHL-II",
          "WHL-III",
          "WHL-IV",
          "WHL-V",
          "WHL-VI"
        ],
        "outboundTag": "DBL-POLAND"
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
      }
    ],
    "domainStrategy": "IPIfNonMatch"
  }
}
