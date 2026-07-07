# VPN Proxy Check Panel

Локальная web-панель для проверки доступности популярных сервисов через маршрут машины, где запущен backend. Если VPN работает на уровне системы, проверки идут через него. Если используется `HTTP_PROXY`, `HTTPS_PROXY` или `ALL_PROXY`, backend применит этот proxy для исходящих запросов.

## Запуск

```powershell
npm install
npm run dev
```

Панель: http://localhost:5173  
API: http://localhost:3001

## API

- `GET /api/ip` - внешний IP, страна, город, координаты.
- `GET /api/checks` - разовая проверка всех групп сервисов.
- `GET /api/stream` - live-обновления через SSE каждые 15 секунд.

## Ограничения

Проверки выполняются из Node.js backend, а не из вкладки браузера. Browser-only VPN extensions не меняют маршрут backend-запросов.
