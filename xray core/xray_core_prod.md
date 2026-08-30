{
  "log": {
    "loglevel": "info"
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
      "tag": "[FINLAND-GRPC]",
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
          "serviceName": "nfl.prsta.xyz"
        },
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "dff01a2a94e88950",
            "9eca122382fe8dc4",
            "130e2b612e34015f"
          ],
          "publicKey": "YcnwDUhI72ALlzlbTC9hhJHaLj2AoAg0KfDXjBNM8W4",
          "privateKey": "kwNjFWOVylvNMEh9GP-UKkzwjRMhKUWCsPcWD4hURBs",
          "serverNames": [
            "nfl.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[FINLAND-XHTTP]",
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
          "path": "/api/v2/updates/finland"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "127.0.0.1:9443",
          "spiderX": "/",
          "shortIds": [
            "dff01a2a94e88950",
            "9eca122382fe8dc4",
            "130e2b612e34015f"
          ],
          "publicKey": "OkE_mwJniCZp1fRjwTypraCpO9RZ9E5D5ccSBVukQlc",
          "privateKey": "o2j66dO5s1ceJgC-hUzW-tyYbfxTROf9VZbwKcgk3sk",
          "serverNames": [
            "nfl.prsta.xyz"
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
      "tag": "[GERMANY-2-GRPC]",
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
          "serviceName": "nge2.prsta.xyz"
        },
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "471aa1d03528cc9a",
            "8740f92393b86ee7",
            "684542ba0de599bb"
          ],
          "publicKey": "IboKBGPBo9weOy1oeNoMylq_fUcZ2sx-hoTY7omY5SQ",
          "privateKey": "3cUWQn-4U6j89rf_mteItOLtQEmUlKxy1Q4HhkdnzUM",
          "serverNames": [
            "nge2.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[GERMANY-2-XHTTP]",
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
          "path": "/api/v2/updates/germany-2"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "127.0.0.1:9443",
          "spiderX": "/",
          "shortIds": [
            "471aa1d03528cc9a",
            "8740f92393b86ee7",
            "684542ba0de599bb"
          ],
          "publicKey": "K2WgOSriDWibFvsUnL-pGAxLN6_cFsxfQh1mwlDJokg",
          "privateKey": "_qKWanLya4aeDoXSOs9S_IZ0axCuP8_1lF_P1-BJ4xs",
          "serverNames": [
            "nge2.prsta.xyz"
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
      "tag": "[RUSSIA-GRPC]",
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
          "serviceName": "nru.prsta.xyz"
        },
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "password": "ioj8LG9icY_xS3jtQcz14c6w1UhbR2xYWHVXEOSVeB8",
          "shortIds": [
            "a679c7529afb507b",
            "bebe20031b0fadee",
            "7a5f8d222c5f8556"
          ],
          "privateKey": "zpQojH687mYjS8weL5hYZU1QA4F3ibfh1WDcnCoH028",
          "serverNames": [
            "nru.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[RUSSIA-XHTTP]",
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
          "path": "/api/v2/updates/russia"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "127.0.0.1:9443",
          "spiderX": "/",
          "password": "ioj8LG9icY_xS3jtQcz14c6w1UhbR2xYWHVXEOSVeB8",
          "shortIds": [
            "a679c7529afb507b",
            "bebe20031b0fadee",
            "7a5f8d222c5f8556"
          ],
          "privateKey": "zpQojH687mYjS8weL5hYZU1QA4F3ibfh1WDcnCoH028",
          "serverNames": [
            "nru.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[RUSSIA-2-GRPC]",
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
          "serviceName": "nru2.prsta.xyz"
        },
        "realitySettings": {
          "dest": "127.0.0.1:9443",
          "show": false,
          "xver": 0,
          "password": "jc5DYqUk_-lB1wcg0mVlSYwJ27XR2pQUMz33lEeJGm8",
          "shortIds": [
            "f8991e0f84e7b425",
            "39498b932a6fcbc1",
            "e877db3b199f238d"
          ],
          "privateKey": "CoOV_nIpc6Ls9X2O2YacVqQdwWNjVA0BuxjBh-jJyro",
          "serverNames": [
            "nru2.prsta.xyz"
          ]
        }
      }
    },
    {
      "tag": "[RUSSIA-2-XHTTP]",
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
          "path": "/api/v2/updates/russia2"
        },
        "realitySettings": {
          "show": false,
          "xver": 0,
          "target": "127.0.0.1:9443",
          "spiderX": "/",
          "password": "jc5DYqUk_-lB1wcg0mVlSYwJ27XR2pQUMz33lEeJGm8",
          "shortIds": [
            "f8991e0f84e7b425",
            "39498b932a6fcbc1",
            "e877db3b199f238d"
          ],
          "privateKey": "CoOV_nIpc6Ls9X2O2YacVqQdwWNjVA0BuxjBh-jJyro",
          "serverNames": [
            "nru2.prsta.xyz"
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
      "tag": "WARP",
      "protocol": "socks",
      "settings": {
        "port": 40000,
        "address": "127.0.0.1"
      }
    },
    {
      "tag": "YOUTUBE-RU",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "nru2.prsta.xyz",
            "port": 443,
            "users": [
              {
                "id": "51e2536f-01f8-42f9-81e0-52dc3cf0784a",
                "encryption": "none"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "nru2.prsta.xyz",
          "authority": "nru2.prsta.xyz"
        },
        "realitySettings": {
          "fingerprint": "safari",
          "serverName": "nru2.prsta.xyz",
          "publicKey": "jc5DYqUk_-lB1wcg0mVlSYwJ27XR2pQUMz33lEeJGm8",
          "shortId": "f8991e0f84e7b425",
          "spiderX": ""
        }
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
          "domain:youtube.com",
          "domain:youtu.be",
          "domain:youtube-nocookie.com",
          "domain:ytimg.com",
          "domain:googlevideo.com",
          "domain:youtubei.googleapis.com",
          "domain:youtube.googleapis.com",
          "domain:ggpht.com"
        ],
        "inboundTag": [
          "[RUSSIA-2-GRPC]",
          "[RUSSIA-2-XHTTP]"
        ],
        "outboundTag": "DIRECT",
        "ruleTag": "youtube-ru2-exit"
      },
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
          "domain:youtube.com",
          "domain:youtu.be",
          "domain:youtube-nocookie.com",
          "domain:ytimg.com",
          "domain:googlevideo.com",
          "domain:youtubei.googleapis.com",
          "domain:youtube.googleapis.com",
          "domain:ggpht.com"
        ],
        "outboundTag": "YOUTUBE-RU",
        "ruleTag": "youtube-ru"
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
        "ruleTag": "gemini-warp",
        "outboundTag": "WARP"
      },
      {
        "type": "field",
        "domain": [
          "geosite:telegram"
        ],
        "inboundTag": [
          "[LITVA-GRPC]",
          "[LITVA-XHTTP]",
          "[LITVA-2-GRPC]",
          "[LITVA-2-XHTTP]",
          "[FINLAND-GRPC]",
          "[FINLAND-XHTTP]",
          "[GERMANY-GRPC]",
          "[GERMANY-XHTTP]",
          "[GERMANY-2-GRPC]",
          "[GERMANY-2-XHTTP]",
          "[SWEDEN-GRPC]",
          "[SWEDEN-XHTTP]",
          "[SWEDEN-2-GRPC]",
          "[SWEDEN-2-XHTTP]",
          "[USA-GRPC]",
          "[USA-XHTTP]",
          "[RUSSIA-GRPC]",
          "[RUSSIA-XHTTP]",
          "[RUSSIA-2-GRPC]",
          "[RUSSIA-2-XHTTP]"
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
          "[LITVA-2-GRPC]",
          "[LITVA-2-XHTTP]",
          "[FINLAND-GRPC]",
          "[FINLAND-XHTTP]",
          "[GERMANY-GRPC]",
          "[GERMANY-XHTTP]",
          "[GERMANY-2-GRPC]",
          "[GERMANY-2-XHTTP]",
          "[SWEDEN-GRPC]",
          "[SWEDEN-XHTTP]",
          "[SWEDEN-2-GRPC]",
          "[SWEDEN-2-XHTTP]",
          "[USA-GRPC]",
          "[USA-XHTTP]",
          "[RUSSIA-GRPC]",
          "[RUSSIA-XHTTP]",
          "[RUSSIA-2-GRPC]",
          "[RUSSIA-2-XHTTP]"
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
  },
  "policy": {
    "levels": {
      "0": {
        "connIdle": 180,
        "handshake": 4,
        "bufferSize": 16,
        "uplinkOnly": 1,
        "downlinkOnly": 1,
        "statsUserOnline": false,
        "statsUserUplink": false,
        "statsUserDownlink": false
      }
    },
    "system": {
      "statsInboundUplink": false,
      "statsOutboundUplink": false,
      "statsInboundDownlink": false,
      "statsOutboundDownlink": false
    }
  }
}
