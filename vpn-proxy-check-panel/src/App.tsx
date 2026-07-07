import "leaflet/dist/leaflet.css";
import { AlertTriangle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { GroupCard } from "./components/GroupCard";
import { MapPanel } from "./components/MapPanel";
import { SummaryPanel } from "./components/SummaryPanel";
import type { CheckReport, IpInfo } from "./types/checks";
import "./styles.css";

type Theme = "light" | "dark";

const LOADING_GROUPS = ["Нейросети", "Соцсети", "Форумы", "Поиск", "Разработка", "Медиа"];

const readTheme = (): Theme => {
  const stored = window.localStorage.getItem("vpn-check-theme");
  if (stored === "light" || stored === "dark") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

async function getJson<T>(url: string): Promise<T> {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`${url} returned ${response.status}`);
  }
  return response.json() as Promise<T>;
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(readTheme);
  const [ipInfo, setIpInfo] = useState<IpInfo | null>(null);
  const [report, setReport] = useState<CheckReport | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set());
  const [paused, setPaused] = useState(false);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("vpn-check-theme", theme);
  }, [theme]);

  const refresh = async () => {
    setLoading(true);
    setError(null);

    const [ipResult, reportResult] = await Promise.allSettled([
      getJson<IpInfo>("/api/ip"),
      getJson<CheckReport>("/api/checks"),
    ]);

    if (ipResult.status === "fulfilled") {
      setIpInfo(ipResult.value);
    }

    if (reportResult.status === "fulfilled") {
      setReport(reportResult.value);
    }

    if (ipResult.status === "rejected" || reportResult.status === "rejected") {
      const failed = reportResult.status === "rejected" ? reportResult.reason : ipResult.status === "rejected" ? ipResult.reason : null;
      setError(failed instanceof Error ? failed.message : "Часть данных временно недоступна");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (paused) {
      setConnected(false);
      return;
    }

    const source = new EventSource("/api/stream");

    source.addEventListener("connected", () => {
      setConnected(true);
      setError(null);
    });

    source.addEventListener("ip", (event) => {
      setIpInfo(JSON.parse((event as MessageEvent).data) as IpInfo);
    });

    source.addEventListener("ip-error", (event) => {
      const payload = JSON.parse((event as MessageEvent).data) as { message?: string };
      setError(payload.message ? `IP: ${payload.message}` : "IP временно не определен");
    });

    source.addEventListener("checks", (event) => {
      setReport(JSON.parse((event as MessageEvent).data) as CheckReport);
      setLoading(false);
      setError(null);
    });

    source.addEventListener("error", (event) => {
      if ("data" in event && event.data) {
        const payload = JSON.parse(event.data as string) as { message?: string };
        setError(payload.message ?? "Ошибка live-обновления");
      } else {
        setError("Live-соединение потеряно");
      }
      setConnected(false);
    });

    return () => {
      source.close();
      setConnected(false);
    };
  }, [paused]);

  const groups = useMemo(() => report?.groups ?? [], [report]);

  const toggleGroup = (groupId: string) => {
    setExpandedGroups((current) => {
      const next = new Set(current);
      if (next.has(groupId)) {
        next.delete(groupId);
      } else {
        next.add(groupId);
      }
      return next;
    });
  };

  return (
    <main className="app-shell">
      <SummaryPanel
        ipInfo={ipInfo}
        report={report}
        connected={connected}
        paused={paused}
        loading={loading}
        onRefresh={refresh}
        onTogglePause={() => setPaused((value) => !value)}
        onToggleTheme={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
        theme={theme}
      />

      {error && (
        <div className="error-banner" role="status">
          <AlertTriangle size={17} />
          <span>{error}</span>
        </div>
      )}

      <div className="main-grid">
        <MapPanel ipInfo={ipInfo} />

        <section className="groups-panel" aria-label="Группы сервисов">
          <div className="panel-heading groups-heading">
            <div>
              <h2>Доступность сервисов</h2>
              <p>Группы раскрываются до отдельных проверок.</p>
            </div>
          </div>

          {groups.length > 0 ? (
            <div className="group-list">
              {groups.map((group) => (
                <GroupCard
                  key={group.id}
                  group={group}
                  expanded={expandedGroups.has(group.id)}
                  onToggle={() => toggleGroup(group.id)}
                />
              ))}
            </div>
          ) : (
            <div className="group-list" aria-label="Загрузка результатов">
              {LOADING_GROUPS.map((groupName) => (
                <article className="group-card loading-card" key={groupName} aria-hidden="true">
                  <div className="group-toggle skeleton-toggle">
                    <span className="group-main">
                      <span className="status-dot loading-dot" />
                      <span>
                        <span className="group-title">{groupName}</span>
                        <span className="group-subtitle">ожидается проверка</span>
                      </span>
                    </span>

                    <span className="group-metrics">
                      <span className="availability-indicator loading-indicator">
                        <span className="signal-bars" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </span>
                        <span>проверка</span>
                      </span>
                      <span className="group-count">--/--</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
