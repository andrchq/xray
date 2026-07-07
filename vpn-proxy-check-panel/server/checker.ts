import { GROUP_NAMES, SERVICES } from "./services.js";
import type { CheckReport, GroupId, GroupResult, ServiceConfig, ServiceResult } from "./types.js";

const CHECK_TIMEOUT_MS = 5000;
const CONCURRENCY = 8;

let inFlightReport: Promise<CheckReport> | null = null;
let lastReport: CheckReport | null = null;

const isExpected = (status: number, range: [number, number]) => status >= range[0] && status <= range[1];

const statusReason = (status: number, range: [number, number]) => {
  if (isExpected(status, range)) {
    return `HTTP ${status}`;
  }
  return `HTTP ${status}, expected ${range[0]}-${range[1]}`;
};

async function checkService(service: ServiceConfig): Promise<ServiceResult> {
  const started = performance.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), CHECK_TIMEOUT_MS);

  try {
    const response = await fetch(service.url, {
      method: service.method,
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "cache-control": "no-cache",
        "user-agent": "Mozilla/5.0 vpn-proxy-check-panel/0.1",
      },
    });
    const latencyMs = Math.round(performance.now() - started);
    const available = isExpected(response.status, service.expectedStatus);

    return {
      ...service,
      status: available ? "available" : "unavailable",
      latencyMs,
      httpStatus: response.status,
      reason: statusReason(response.status, service.expectedStatus),
    };
  } catch (error) {
    const latencyMs = Math.round(performance.now() - started);
    const isTimeout = error instanceof Error && error.name === "AbortError";

    return {
      ...service,
      status: "unavailable",
      latencyMs,
      httpStatus: null,
      reason: isTimeout ? "Timeout 5s" : error instanceof Error ? error.message : "Network error",
    };
  } finally {
    clearTimeout(timeout);
  }
}

async function mapWithConcurrency<T, R>(
  items: T[],
  limit: number,
  mapper: (item: T) => Promise<R>,
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const current = index;
      index += 1;
      results[current] = await mapper(items[current]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function groupResults(results: ServiceResult[]): GroupResult[] {
  return (Object.keys(GROUP_NAMES) as GroupId[]).map((groupId) => {
    const services = results.filter((service) => service.group === groupId);
    const available = services.filter((service) => service.status === "available").length;
    const score = services.length === 0 ? 0 : Math.round((available / services.length) * 100);
    const status = score >= 80 ? "good" : score >= 40 ? "partial" : "blocked";

    return {
      id: groupId,
      name: GROUP_NAMES[groupId],
      status,
      score,
      available,
      total: services.length,
      services,
    };
  });
}

async function createReport(): Promise<CheckReport> {
  const results = await mapWithConcurrency(SERVICES, CONCURRENCY, checkService);
  const groups = groupResults(results);
  const available = results.filter((service) => service.status === "available").length;
  const score = Math.round((available / results.length) * 100);

  return {
    generatedAt: new Date().toISOString(),
    score,
    available,
    total: results.length,
    groups,
  };
}

export function getLastReport() {
  return lastReport;
}

export async function runChecks(): Promise<CheckReport> {
  if (inFlightReport) {
    return inFlightReport;
  }

  inFlightReport = createReport()
    .then((report) => {
      lastReport = report;
      return report;
    })
    .finally(() => {
      inFlightReport = null;
    });

  return inFlightReport;
}
