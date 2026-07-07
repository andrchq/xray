{
  "log": {
    "loglevel": "warning"
  },
  "policy": {
    "levels": {
      "0": {
        "handshake": 4,
        "connIdle": 180,
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
      "tag": "[LITVA-GRPC]",
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
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "nlt.prsta.xyz"
        },
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "5a7cc3fcc878c75a",
            "ba567b9dc282c54a",
            "7584698175c7cdc3"
          ],
          "publicKey": "6bUu79qL80cAPk4b71uw4DqDZ9W3BX4CkDY95zc7AB0",
          "privateKey": "4wkGuZoP-29ADUJWgGvEvaoDqNyuyq03kYB3VT2U034",
          "serverNames": [
            "nlt.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[LITVA-XHTTP]",
      "port": 8443,
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
          "path": "/api/v2/updates/litva"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "127.0.0.1:9443",
          "spiderX": "/",
          "shortIds": [
            "5a7cc3fcc878c75a",
            "ba567b9dc282c54a",
            "7584698175c7cdc3"
          ],
          "publicKey": "6bUu79qL80cAPk4b71uw4DqDZ9W3BX4CkDY95zc7AB0",
          "privateKey": "4wkGuZoP-29ADUJWgGvEvaoDqNyuyq03kYB3VT2U034",
          "serverNames": [
            "nlt.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[LITVA-2-GRPC]",
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
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "nlt2.prsta.xyz"
        },
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "f86d40c776321c33",
            "33e99bb35c1b8561",
            "503221a95d069152"
          ],
          "publicKey": "9uhNUS_A2_RyQnrjAkL64_i36ShVGCwUhfjHxN7YQAQ",
          "privateKey": "YSzE5ksIMAh6u4pXnYO3aH61N36HEuoOogp6uwVAVZ0",
          "serverNames": [
            "nlt2.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[LITVA-2-XHTTP]",
      "port": 8443,
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
          "path": "/api/v2/updates/litva"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "127.0.0.1:9443",
          "spiderX": "/",
          "shortIds": [
            "f86d40c776321c33",
            "33e99bb35c1b8561",
            "503221a95d069152"
          ],
          "publicKey": "9uhNUS_A2_RyQnrjAkL64_i36ShVGCwUhfjHxN7YQAQ",
          "privateKey": "YSzE5ksIMAh6u4pXnYO3aH61N36HEuoOogp6uwVAVZ0",
          "serverNames": [
            "nlt2.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[GERMANY-GRPC]",
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
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "nge.prsta.xyz"
        },
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "f4797007216e44cd",
            "3fe45802632310c1",
            "3416682a410ba2f8"
          ],
          "publicKey": "ShyyvavKtRqrPfmr2fqSiHXvDpGR4wverIM4WDYFdwc",
          "privateKey": "7GWqHAyIIaCapSPllztzTYJYezKLzUT-X6It3VNg5CQ",
          "serverNames": [
            "nge.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[GERMANY-XHTTP]",
      "port": 8443,
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
          "path": "/api/v2/updates/germany"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "127.0.0.1:9443",
          "spiderX": "/",
          "shortIds": [
            "f4797007216e44cd",
            "3fe45802632310c1",
            "3416682a410ba2f8"
          ],
          "publicKey": "ShyyvavKtRqrPfmr2fqSiHXvDpGR4wverIM4WDYFdwc",
          "privateKey": "7GWqHAyIIaCapSPllztzTYJYezKLzUT-X6It3VNg5CQ",
          "serverNames": [
            "nge.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[SWEDEN-GRPC]",
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
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "nsw.prsta.xyz"
        },
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "6ca290039c5a599c",
            "ec0bd791e110b9a7",
            "38037b3d12b825a7"
          ],
          "publicKey": "p5Dn_kF0offtpmeHP9KNt14_ZSSO_ta3G4RJlqAXnHo",
          "privateKey": "p2U5ofMpXzLCLHda6vnDdxO9vtDdpMUQgVNee29wMtg",
          "serverNames": [
            "nsw.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[SWEDEN-XHTTP]",
      "port": 8443,
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
          "path": "/api/v2/updates/sweden"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "127.0.0.1:9443",
          "spiderX": "/",
          "shortIds": [
            "6ca290039c5a599c",
            "ec0bd791e110b9a7",
            "38037b3d12b825a7"
          ],
          "publicKey": "p5Dn_kF0offtpmeHP9KNt14_ZSSO_ta3G4RJlqAXnHo",
          "privateKey": "p2U5ofMpXzLCLHda6vnDdxO9vtDdpMUQgVNee29wMtg",
          "serverNames": [
            "nsw.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[SWEDEN-2-GRPC]",
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
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "nsw2.prsta.xyz"
        },
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "182b9f1abad097d5",
            "d7310c3fffc7a046",
            "25e58f412e5c82e8"
          ],
          "publicKey": "Siux5J6I8p7kClMvAVRkE1iKhnh3IDC6u-8yzzqQi0o",
          "privateKey": "-Pd2sotxYwpqxyAdSDQX3V8NjMcRICTlp4SRYYK_chE",
          "serverNames": [
            "nsw2.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[SWEDEN-2-XHTTP]",
      "port": 8443,
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
          "path": "/api/v2/updates/sweden"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "127.0.0.1:9443",
          "spiderX": "/",
          "shortIds": [
            "182b9f1abad097d5",
            "d7310c3fffc7a046",
            "25e58f412e5c82e8"
          ],
          "publicKey": "Siux5J6I8p7kClMvAVRkE1iKhnh3IDC6u-8yzzqQi0o",
          "privateKey": "-Pd2sotxYwpqxyAdSDQX3V8NjMcRICTlp4SRYYK_chE",
          "serverNames": [
            "nsw2.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[USA-GRPC]",
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
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "nus.prsta.xyz"
        },
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "6cb42004bd3ec5da",
            "46fccdf3f1f9a4fa",
            "4a3d8e127c5f74a6"
          ],
          "publicKey": "CMiIwmEkK039R0VL_IpQHeoIvpIxLSVwfeJxPH-rTFs",
          "privateKey": "4C-c5Tqd7kXXyAy4z7S3shi6ueCkOb0WAJrKF-lKjGA",
          "serverNames": [
            "nus.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[USA-XHTTP]",
      "port": 8443,
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
          "path": "/api/v2/updates/usa"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "127.0.0.1:9443",
          "spiderX": "/",
          "shortIds": [
            "6cb42004bd3ec5da",
            "46fccdf3f1f9a4fa",
            "4a3d8e127c5f74a6"
          ],
          "publicKey": "CMiIwmEkK039R0VL_IpQHeoIvpIxLSVwfeJxPH-rTFs",
          "privateKey": "4C-c5Tqd7kXXyAy4z7S3shi6ueCkOb0WAJrKF-lKjGA",
          "serverNames": [
            "nus.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[TG-ONLY]",
      "port": 31443,
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
            "38b8b6a2e4bc5479",
            "dd86666434d22064",
            "ce9a42c785240b2f"
          ],
          "publicKey": "6bUu79qL80cAPk4b71uw4DqDZ9W3BX4CkDY95zc7AB0",
          "privateKey": "4wkGuZoP-29ADUJWgGvEvaoDqNyuyq03kYB3VT2U034",
          "serverNames": [
            "nge.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[SS]",
      "port": 8581,
      "listen": "0.0.0.0",
      "protocol": "shadowsocks",
      "settings": {
        "clients": [],
        "network": "tcp,udp"
      },
      "sniffing": {
        "enabled": true,
        "routeOnly": true,
        "destOverride": [
          "http",
          "tls",
          "quic"
        ]
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
      "tag": "SS_OUT",
      "protocol": "shadowsocks",
      "settings": {
        "servers": [
          {
            "uot": true,
            "port": 8581,
            "email": "internal_socks",
            "level": 0,
            "method": "chacha20-ietf-poly1305",
            "address": "147.45.44.83",
            "password": "9fjMJxSW1MPDH-AGrAYWxqKFG_qEf8Bz"
          }
        ]
      },
      "streamSettings": {
        "sockopt": {
          "network": "tcp,udp",
          "tcpFastOpen": true,
          "domainStrategy": "ForceIPv4"
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
          "geosite:telegram",
          "domain:prsta.xyz"
        ],
        "inboundTag": [
          "[TG-ONLY]"
        ],
        "outboundTag": "DIRECT"
      },
      {
        "ip": [
          "geoip:telegram"
        ],
        "type": "field",
        "inboundTag": [
          "[TG-ONLY]"
        ],
        "outboundTag": "DIRECT"
      },
      {
        "type": "field",
        "inboundTag": [
          "[TG-ONLY]"
        ],
        "outboundTag": "BLOCK"
      },
      {
        "type": "field",
        "domain": [
          "geosite:telegram"
        ],
        "inboundTag": [
          "[LITVA-GRPC]",
          "[LITVA-XHTTP]",
          "[GERMANY-GRPC]",
          "[GERMANY-XHTTP]",
          "[SWEDEN-GRPC]",
          "[SWEDEN-XHTTP]",
          "[USA-GRPC]",
          "[USA-XHTTP]"
        ],
        "outboundTag": "DIRECT"
      },
      {
        "ip": [
          "geoip:telegram"
        ],
        "type": "field",
        "inboundTag": [
          "[LITVA-GRPC]",
          "[LITVA-XHTTP]",
          "[GERMANY-GRPC]",
          "[GERMANY-XHTTP]",
          "[SWEDEN-GRPC]",
          "[SWEDEN-XHTTP]",
          "[USA-GRPC]",
          "[USA-XHTTP]"
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
