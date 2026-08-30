# Gemini через Cloudflare WARP

## Назначение конфигураций

`xray_core_prod.md`, `xray_core_cdn.md` и `xray_core_bridges.md` направляют
явный список доменов Google DeepMind в SOCKS5 outbound `WARP`. Широкое правило
`geosite:google` не используется.

`xray_core_whl.md` — входной профиль. Его трафик доходит до конечного
польского bridge-узла через `DBL-POLAND`. В нём намеренно отсутствует локальный
outbound `WARP`: Gemini обрабатывается `xray_core_bridges.md` на этом конечном
узле.

Все Remnanode в этом развёртывании используют Docker host networking. Установи
и подключи Cloudflare WARP на каждой физической Node с профилем `prod`, `cdn`
или `bridges`; для `whl` устанавливай его на конечной польской bridge-ноде.
Адрес для Xray: `127.0.0.1:40000`.

`xray_core_prod.md` используется нодами LT, LT #2, FL, GE, GE #2, SW, SW #2 и
US. Пока на ноде WARP не подключён, Gemini на ней намеренно не работает, а не
переключается на публичный IP VPS.

## Установка и проверка WARP на Node

Для Ubuntu/Debian добавь официальный репозиторий Cloudflare и включи только
proxy mode:

```bash
curl -fsSL https://pkg.cloudflareclient.com/pubkey.gpg |
  sudo gpg --yes --dearmor --output /usr/share/keyrings/cloudflare-warp-archive-keyring.gpg

echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp-archive-keyring.gpg] https://pkg.cloudflareclient.com/ $(lsb_release -cs) main" |
  sudo tee /etc/apt/sources.list.d/cloudflare-client.list

sudo apt-get update
sudo apt-get install -y cloudflare-warp
sudo systemctl enable --now warp-svc

warp-cli registration new
warp-cli mode proxy
warp-cli proxy port 40000
warp-cli connect
sleep 15
warp-cli status

curl -fsS --proxy socks5h://127.0.0.1:40000 \
  https://www.cloudflare.com/cdn-cgi/trace | grep -E '^(ip|warp)='
```

Последняя команда должна вывести `warp=on`. Не включай `warp+doh`: тогда через
WARP будет маршрутизироваться весь сервер, а не только соединения, отправленные
Xray в SOCKS5 outbound.

## Применение и проверка Config Profile

1. Сохрани копию текущего профиля в Remnawave.
2. Замени его содержимое соответствующим файлом из этой директории.
3. Перед reload выполни проверку итогового конфига ноды. Определи путь к нему
   из команды запуска Remnanode, затем выполни:

   ```bash
   docker exec remnanode xray run -test -config /path/to/config.json
   ```

4. Примени профиль штатным способом через Remnawave.
5. Проверь ошибки запуска Xray и outbound:

   ```bash
   docker logs --tail 100 remnanode
   ```

6. Проверь Gemini в клиенте: открой `gemini.google.com`, войди в аккаунт,
   создай диалог, отправь сообщение и дождись потокового ответа. Отдельно
   проверь обычный сайт, чтобы убедиться в сохранении прежней маршрутизации.

`xray_core_prod.md` применяй после проверки WARP на всех восьми нодах либо
учитывай, что Gemini на неподготовленных нодах не будет работать.

## Откат

Восстанови сохранённый Config Profile в Remnawave, проверь его и примени тем же
штатным способом. WARP можно оставить установленным: без правила маршрутизации
на `WARP` Xray не отправляет в него трафик.
