{
  "log": {
    "loglevel": "warning"
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
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "stats.vk-portal.net"
        },
        "realitySettings": {
          "dest": "stats.vk-portal.net:443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "26e453941a1122be",
            "bfdf1757c233671c",
            "3a6db152aa2c21df"
          ],
          "publicKey": "SYX_xYWe6Xw1aZZyPhNrAi4XqGu753gx7Kj8J32G0F0",
          "privateKey": "47QC-z8AEqSOzy_jLuBCgFi2j-X_R1smEfRLPM0dR-A",
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
        "network": "grpc",
        "security": "reality",
        "grpcSettings": {
          "serviceName": "stats.vk-portal.net"
        },
        "realitySettings": {
          "dest": "stats.vk-portal.net:443",
          "show": false,
          "xver": 0,
          "shortIds": [
            "26e453941a1122be",
            "bfdf1757c233671c",
            "3a6db152aa2c21df"
          ],
          "publicKey": "aT9_4vsjfbMFiZNz6fDPLLtCLPLX3_rx5K9XraT8yTs",
          "privateKey": "mR8VzgqT0BxBw-dmBFspwvUf-CC4rnO2v9tPIAGT9Bk",
          "serverNames": [
            "stats.vk-portal.net"
          ]
        }
      }
    },
    {
      "tag": "WHL-VII",
      "port": 27443,
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
      "tag": "WHL-VIII",
      "port": 28443,
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
    },
    {
      "tag": "LOCAL-PROXY",
      "port": 10808,
      "listen": "127.0.0.1",
      "protocol": "mixed",
      "settings": {
        "udp": false,
        "auth": "noauth"
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
        "inboundTag": [
          "LOCAL-PROXY"
        ],
        "outboundTag": "DBL-POLAND"
      },
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
          "WHL-VI",
          "WHL-VII",
          "WHL-VIII"
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
          "WHL-VI",
          "WHL-VII",
          "WHL-VIII"
        ],
        "outboundTag": "DBL-POLAND"
      },
      {
        "type": "field",
        "domain": [
          "geosite:category-ru",
          "regexp:.*\\.ru$",
          "regexp:.*\\.su$",
          "regexp:.*\\.xn--p1ai$",
          "domain:mdm-print.ru",
          "full:mx1.mdm-print.ru",
          "domain:gosuslugi.ru",
          "domain:gu-st.ru",
          "domain:goskey.ru",
          "domain:ebs.ru",
          "domain:esia.gosuslugi.ru",
          "domain:pos.gosuslugi.ru",
          "domain:dom.gosuslugi.ru",
          "domain:lk.gosuslugi.ru",
          "domain:nalog.ru",
          "domain:service.nalog.ru",
          "domain:lknpd.nalog.ru",
          "domain:cbr.ru",
          "domain:gov.ru",
          "domain:government.ru",
          "domain:digital.gov.ru",
          "domain:mos.ru",
          "domain:mosreg.ru",
          "domain:ya.ru",
          "domain:yandex.ru",
          "domain:yandex.net",
          "domain:yandex.com",
          "domain:yandex.com.ru",
          "domain:yandex.by",
          "domain:yandex.kz",
          "domain:yandex.uz",
          "domain:yandex.tj",
          "domain:yandex.tm",
          "domain:yandex.kg",
          "domain:yandex.az",
          "domain:yandex.co.il",
          "domain:yandex.com.tr",
          "domain:yandex.tr",
          "domain:yandex.eu",
          "domain:yandex.st",
          "domain:yastatic.net",
          "domain:yastatic-net.ru",
          "domain:yastat.net",
          "domain:yccdn.ru",
          "domain:yandexcloud.net",
          "domain:yandexcloud.ru",
          "domain:yandexgo.com",
          "domain:yango.com",
          "domain:yango.taxi",
          "domain:yango.tech",
          "domain:yango-b2b.com",
          "domain:kinopoisk.ru",
          "domain:kinopoisk-ru.clstorage.net",
          "domain:clstorage.net",
          "domain:dzen.ru",
          "domain:dzeninfra.ru",
          "domain:adfox.ru",
          "domain:appmetrica.yandex.ru",
          "domain:appmetrica.yandex.net",
          "domain:metrika.yandex.ru",
          "domain:metrika.yandex.net",
          "domain:mc.yandex.ru",
          "domain:an.yandex.ru",
          "domain:vk.com",
          "domain:vk.ru",
          "domain:vk.cc",
          "domain:vk.link",
          "domain:vk.me",
          "domain:vkontakte.com",
          "domain:vkontakte.ru",
          "domain:vkvideo.ru",
          "domain:vkplay.ru",
          "domain:vkplay.live",
          "domain:vkplay-arena.ru",
          "domain:vk.company",
          "domain:vk.team",
          "domain:vkcs.cloud",
          "domain:cdn-vk.ru",
          "domain:cdn-vk.net",
          "domain:userapi.com",
          "domain:userapi.ru",
          "domain:vk-cdn.net",
          "domain:vk-cdn.me",
          "domain:vkuser.net",
          "domain:vkusercdn.ru",
          "domain:vkuservideo.com",
          "domain:vkuservideo.net",
          "domain:vkuservideo.ru",
          "domain:mail.ru",
          "domain:my.com",
          "domain:mycdn.me",
          "domain:cdnmail.ru",
          "domain:imgsmail.ru",
          "domain:smailru.net",
          "domain:mrgcdn.ru",
          "domain:staticmy.com",
          "domain:ok.ru",
          "domain:ok.me",
          "domain:odnoklassniki.ru",
          "domain:okcdn.ru",
          "domain:tamtam.chat",
          "domain:rustore.ru",
          "domain:youla.ru",
          "domain:youla.io",
          "domain:max.ru",
          "domain:oneme.ru",
          "domain:ozon.ru",
          "domain:ozone.ru",
          "domain:ozon.com",
          "domain:ozon.by",
          "domain:ozon.kz",
          "domain:ozon.com.by",
          "domain:ozon.com.kz",
          "domain:ozon.dev",
          "domain:ozon.tech",
          "domain:ozonusercontent.com",
          "domain:ozonru.me",
          "domain:ozonru.com",
          "domain:ozoncard.ru",
          "domain:ozon-dostavka.ru",
          "domain:ozon-credit.ru",
          "domain:ozonstatus.ru",
          "domain:wildberries.ru",
          "domain:wildberries.by",
          "domain:wildberries.kz",
          "domain:wildberries.am",
          "domain:wildberries.ge",
          "domain:wildberries.kg",
          "domain:wildberries.uz",
          "domain:wb.ru",
          "domain:wb.am",
          "domain:wb.kz",
          "domain:wb.kg",
          "domain:wbstatic.net",
          "domain:wbstatic.ru",
          "domain:wbbasket.ru",
          "domain:wb-basket.ru",
          "domain:wb-bank.ru",
          "domain:wbpay.ru",
          "domain:paywb.ru",
          "domain:paywb.com",
          "domain:geobasket.ru",
          "domain:rwb.ru",
          "domain:rwbgeo.ru",
          "domain:avito.ru",
          "domain:avito.st",
          "domain:5ka.ru",
          "domain:x5.ru",
          "domain:x5id.ru",
          "domain:x5club.ru",
          "domain:x5paket.ru",
          "domain:x5cashback.ru",
          "domain:abonementx5.ru",
          "domain:perekrestok.ru",
          "domain:vprok.ru",
          "domain:5post.ru",
          "domain:chizhik.club",
          "domain:myapelsin.ru",
          "domain:lamoda.ru",
          "domain:lamoda.by",
          "domain:lamoda.kz",
          "domain:megamarket.ru",
          "domain:sbermegamarket.ru",
          "domain:mironline.ru",
          "domain:nspk.ru",
          "domain:sbp.nspk.ru",
          "domain:yoomoney.ru",
          "domain:sber.ru",
          "domain:sberbank.ru",
          "domain:sberbank.com",
          "domain:sbrf.ru",
          "domain:online.sberbank.ru",
          "domain:id.ru",
          "domain:sberbank-insurance.ru",
          "domain:sberbankins.ru",
          "domain:sberhealth.ru",
          "domain:sbermobile.ru",
          "domain:sberdevices.ru",
          "domain:sbercloud.ru",
          "domain:sbercloud.tech",
          "domain:sberbankaktivno.ru",
          "domain:sberspasibo.ru",
          "domain:spasibosberbank.ru",
          "domain:spasibobonus.ru",
          "domain:tbank.ru",
          "domain:tbank-online.com",
          "domain:tinkoff.ru",
          "domain:tinkoff.com",
          "domain:tcsbank.ru",
          "domain:tinkoffbank.ru",
          "domain:tinkoffcapital.ru",
          "domain:tinkoffinsurance.ru",
          "domain:tinkoffmobile.com",
          "domain:cdn-tinkoff.ru",
          "domain:t-static.ru",
          "domain:t.finance",
          "domain:t-finance.ru",
          "domain:t-finance.group",
          "domain:alfabank.ru",
          "domain:alfabank.st",
          "domain:alfadirect.ru",
          "domain:vtb.ru",
          "domain:vtb.com",
          "domain:online.vtb.ru",
          "domain:gazprombank.ru",
          "domain:gazprombank.com",
          "domain:gazprombank.investments",
          "domain:gpb.ru",
          "domain:psb.ru",
          "domain:psbank.ru",
          "domain:mkb.ru",
          "domain:rshb.ru",
          "domain:bcs.ru",
          "domain:bcs-bank.ru",
          "domain:broker.ru",
          "domain:rosbank.ru",
          "domain:rusfinance.ru",
          "domain:rusfinancebank.ru",
          "domain:pochtabank.ru",
          "domain:raiffeisen.ru",
          "domain:raiffeisenbank.ru",
          "domain:sovcombank.ru",
          "domain:halvacard.ru",
          "domain:domrfbank.ru",
          "domain:domrf.ru",
          "domain:open.ru",
          "domain:otkritiefc.ru",
          "domain:uralsib.ru",
          "domain:akbars.ru",
          "domain:akbarsbank.ru",
          "domain:rncb.ru",
          "domain:genbank.ru",
          "domain:ubrr.ru",
          "domain:expobank.ru",
          "domain:otpbank.ru",
          "domain:mtsbank.ru",
          "domain:rencredit.ru",
          "domain:cetelem.ru",
          "domain:banki.ru",
          "domain:ngenix.net",
          "domain:cdnvideo.ru",
          "domain:cdnvideo.net",
          "domain:edgecenter.ru",
          "domain:edgecenter.io",
          "domain:qrator.net",
          "domain:qratorlabs.com",
          "domain:ddos-guard.net",
          "domain:ddos-guard.ru",
          "domain:stormwall.pro",
          "domain:stormwall.network",
          "domain:selectel.ru",
          "domain:selectel.com",
          "domain:timeweb.ru",
          "domain:reg.ru",
          "domain:beget.com",
          "domain:beget.ru",
          "domain:2gis.ru",
          "domain:2gis.com",
          "domain:2gis.kz",
          "domain:2gis.ae",
          "domain:okko.tv",
          "domain:okko.sport",
          "domain:ivi.ru",
          "domain:more.tv",
          "domain:premier.one",
          "domain:start.ru",
          "domain:beeline.ru",
          "domain:mts.ru",
          "domain:mymts.ru",
          "domain:megafon.ru",
          "domain:t2.ru",
          "domain:tele2.ru",
          "domain:yota.ru",
          "domain:rostelecom.ru",
          "domain:rt.ru",
          "domain:dom.ru",
          "domain:cloud.ru",
          "domain:bitrix24.ru",
          "domain:bitrix24.com",
          "domain:jivo.ru",
          "domain:jivo.chat",
          "domain:jivochat.com",
          "domain:jivosite.com",
          "domain:hh.ru",
          "domain:hhcdn.ru",
          "domain:superjob.ru",
          "domain:rabota.ru",
          "domain:prodoctorov.ru",
          "domain:emias.info",
          "geosite:vk",
          "domain:mvk.com",
          "domain:vk.design",
          "domain:vk-portal.net",
          "domain:vkcache.com",
          "domain:vkcdnservice.com",
          "domain:vkcloud-static.ru",
          "domain:vktech-static.ru",
          "domain:vkuserphoto.ru",
          "domain:vkuseraudio.com",
          "domain:vkuseraudio.net",
          "domain:vkuseraudio.ru",
          "domain:vkuserlive.com",
          "domain:vkuserlive.net",
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
          "domain:vkclips.app",
          "domain:vkfest.ru",
          "domain:vkgo.app",
          "domain:vklive.app",
          "geosite:category-gov-ru",
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
          "WHL-VI",
          "WHL-VII",
          "WHL-VIII"
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
          "WHL-VI",
          "WHL-VII",
          "WHL-VIII"
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
          "WHL-VI",
          "WHL-VII",
          "WHL-VIII"
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
          "WHL-VI",
          "WHL-VII",
          "WHL-VIII"
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
  },
  "policy": {
    "levels": {
      "0": {
        "connIdle": 600,
        "handshake": 60,
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
