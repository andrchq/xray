{
  "log": {
    "loglevel": "debug"
  },
  "inbounds": [
    {
      "tag": "[BRIDGE]",
      "port": 443,
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
        "network": "raw",
        "security": "reality",
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "07ee5936d19736c3",
            "e5c06fa86753723e",
            "c915b57bf1a27918"
          ],
          "publicKey": "m7cMoJTPVAIkmzWPpYfZF-nK3Xj4MvD_cNlEyFEs9As",
          "privateKey": "l4IkB3YThiOnch9C1KSKVCsV75FVNZs4xagVmCO-Fmw",
          "serverNames": [
            "nlt2.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[BRIDGE II]",
      "port": 443,
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
        "network": "raw",
        "security": "reality",
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "23b9f631d38acf3a",
            "533ac2853e2faec3",
            "be5f265de84c1e85"
          ],
          "publicKey": "5QauTyjkbHVuluHQMdR0rR1GrIEFgKy1Mhyu37KX8j8",
          "privateKey": "YQCi_J47Y57yOpt3lDi9LxqeayJmguXCdixiIQrYZp4",
          "serverNames": [
            "npl.prsta.xyz"
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
      "tag": "BLOCK",
      "protocol": "blackhole"
    }
  ],
  "routing": {
    "rules": [
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
