{
  "log": {
    "loglevel": "warning"
  },
  "policy": {
    "levels": {
      "0": {
        "handshake": 60,
        "connIdle": 600,
        "uplinkOnly": 1,
        "downlinkOnly": 1,
        "statsUserUplink": false,
        "statsUserDownlink": false,
        "statsUserOnline": false,
        "bufferSize": 16
      }
    },
    "system": {
      "statsInboundUplink": false,
      "statsInboundDownlink": false,
      "statsOutboundUplink": false,
      "statsOutboundDownlink": false
    }
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
      "tag": "WARP",
      "protocol": "socks",
      "settings": {
        "address": "127.0.0.1",
        "port": 40000
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
      },
      {
        "type": "field",
        "domain": [
          "domain:deepmind.com",
          "domain:deepmind.google",
          "domain:geller-pa.googleapis.com",
          "domain:generativelanguage.googleapis.com",
          "domain:proactivebackend-pa.googleapis.com",
          "domain:robinfrontend-pa.googleapis.com",
          "full:ai.google.dev",
          "full:alkalicore-pa.clients6.google.com",
          "full:alkalimakersuite-pa.clients6.google.com",
          "full:webchannel-alkalimakersuite-pa.clients6.google.com",
          "domain:generativeai.google",
          "domain:makersuite.google.com",
          "domain:ai.studio",
          "domain:aistudio.google.com",
          "domain:bard.google.com",
          "domain:gemini.google",
          "domain:gemini.google.com",
          "domain:gemini.gstatic.com",
          "full:cloudaicompanion.googleapis.com",
          "full:cloudcode-pa.googleapis.com",
          "full:daily-cloudcode-pa.googleapis.com",
          "full:notebooklm-pa.googleapis.com",
          "full:notebooklm.googleapis.com",
          "domain:notebook.google.com",
          "domain:notebooklm.google",
          "domain:notebooklm.google.com",
          "domain:jules.google",
          "domain:jules.google.com",
          "domain:labs.google",
          "domain:labs.google.com",
          "domain:flow.google",
          "domain:aisandbox-pa.googleapis.com",
          "domain:aicode.googleapis.com",
          "domain:aida.googleapis.com",
          "domain:opal.google",
          "domain:opal.google.com",
          "full:antigravity-pa.googleapis.com",
          "full:antigravity.googleapis.com",
          "domain:antigravity.google",
          "domain:antigravity-unleash.goog",
          "domain:stitch.withgoogle.com"
        ],
        "outboundTag": "WARP"
      }
    ],
    "domainStrategy": "IPIfNonMatch"
  }
}
