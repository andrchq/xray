import { Clock3, Moon, Pause, Play, RefreshCw, ShieldCheck, Sun, Wifi } from "lucide-react";
import type { CheckReport, IpInfo } from "../types/checks";

type SummaryPanelProps = {
  ipInfo: IpInfo | null;
  report: CheckReport | null;
  connected: boolean;
  paused: boolean;
  loading: boolean;
  onRefresh: () => void;
  onTogglePause: () => void;
  onToggleTheme: () => void;
  theme: "light" | "dark";
};

const formatTime = (value?: string) => {
  if (!value) {
    return "нет данных";
  }

  return new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date(value));
};

export function SummaryPanel({
  ipInfo,
  report,
  connected,
  paused,
  loading,
  onRefresh,
  onTogglePause,
  onToggleTheme,
  theme,
}: SummaryPanelProps) {
  return (
    <section className="summary-panel" aria-label="Сводка проверки">
      <div className="summary-topline">
        <div>
          <p className="eyebrow">Проверка VPN и прокси в реальном времени</p>
          <h1>Маршрут доступа</h1>
        </div>

        <div className="actions">
          <button className="icon-button" type="button" onClick={onToggleTheme} aria-label="Переключить тему">
            {theme === "dark" ? <Moon size={17} /> : <Sun size={17} />}
            <span>{theme === "dark" ? "Темная" : "Светлая"}</span>
          </button>
          <button className="icon-button" type="button" onClick={onTogglePause} aria-label={paused ? "Возобновить live-режим" : "Поставить live-режим на паузу"}>
            {paused ? <Play size={17} /> : <Pause size={17} />}
            <span>{paused ? "Продолжить" : "Пауза"}</span>
          </button>
          <button className="primary-button" type="button" onClick={onRefresh} disabled={loading}>
            <RefreshCw className={loading ? "spin" : ""} size={17} />
            <span>Проверить</span>
          </button>
        </div>
      </div>

      <div className="summary-grid">
        <div className="metric-block">
          <span className="metric-icon" aria-hidden="true">
            <Wifi size={18} />
          </span>
          <span className="metric-label">Внешний IP</span>
          <strong>{ipInfo?.ip ?? "определяется"}</strong>
          <span className="metric-note">{ipInfo ? `${ipInfo.city}, ${ipInfo.country}` : "ожидается ответ API"}</span>
        </div>

        <div className="metric-block">
          <span className="metric-icon" aria-hidden="true">
            <ShieldCheck size={18} />
          </span>
          <span className="metric-label">Общая доступность</span>
          <strong>{report ? `${report.score}%` : "--"}</strong>
          <span className="metric-note">{report ? `${report.available}/${report.total} сервисов` : "нет результатов"}</span>
        </div>

        <div className="metric-block">
          <span className="metric-icon live" aria-hidden="true" />
          <span className="metric-label">Live-режим</span>
          <strong>{paused ? "пауза" : connected ? "онлайн" : "офлайн"}</strong>
          <span className="metric-note">обновление 10-15 сек</span>
        </div>

        <div className="metric-block">
          <span className="metric-icon" aria-hidden="true">
            <Clock3 size={18} />
          </span>
          <span className="metric-label">Последняя проверка</span>
          <strong>{formatTime(report?.generatedAt)}</strong>
          <span className="metric-note">источник IP: {ipInfo?.source ?? "нет данных"}</span>
        </div>
      </div>
    </section>
  );
}
