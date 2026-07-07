import { ChevronDown, ExternalLink } from "lucide-react";
import type { GroupResult } from "../types/checks";

type GroupCardProps = {
  group: GroupResult;
  expanded: boolean;
  onToggle: () => void;
};

const GROUP_NAMES: Record<string, string> = {
  ai: "Нейросети",
  social: "Соцсети",
  forums: "Форумы",
  search: "Поиск",
  dev: "Разработка",
  media: "Медиа",
};

const GROUP_COPY = {
  good: "Доступ стабилен",
  partial: "Частичный доступ",
  blocked: "Проблемный доступ",
};

const GROUP_LEVEL = {
  good: "высокая",
  partial: "средняя",
  blocked: "низкая",
};

export function GroupCard({ group, expanded, onToggle }: GroupCardProps) {
  return (
    <article className={`group-card status-${group.status}`}>
      <button
        className="group-toggle"
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`group-services-${group.id}`}
      >
        <span className="group-main">
          <span className="status-dot" aria-hidden="true" />
          <span>
            <span className="group-title">{GROUP_NAMES[group.id] ?? group.name}</span>
            <span className="group-subtitle">{GROUP_COPY[group.status]}</span>
          </span>
        </span>

        <span className="group-metrics">
          <span className="availability-indicator" aria-label={`Доступность: ${GROUP_LEVEL[group.status]}`}>
            <span className="signal-bars" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span>{GROUP_LEVEL[group.status]}</span>
          </span>
          <span className="group-count">
            {group.available}/{group.total}
          </span>
          <ChevronDown className={expanded ? "chevron expanded" : "chevron"} size={18} aria-hidden="true" />
        </span>
      </button>

      <div id={`group-services-${group.id}`} className={expanded ? "service-list expanded" : "service-list"}>
        {group.services.map((service) => (
          <div className="service-row" key={service.id}>
            <div className="service-name-cell">
              <span className={`mini-dot ${service.status}`} aria-hidden="true" />
              <span>
                <span className="service-name">{service.name}</span>
                <a className="service-url" href={service.url} target="_blank" rel="noreferrer">
                  {new URL(service.url).hostname}
                  <ExternalLink size={12} aria-hidden="true" />
                </a>
              </span>
            </div>

            <div className="service-meta">
              <span className={`service-pill ${service.status}`}>
                {service.status === "available" ? "доступен" : "нет доступа"}
              </span>
              <span className="latency">{service.latencyMs == null ? "нет данных" : `${service.latencyMs} мс`}</span>
              <span className="reason">{service.reason}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
