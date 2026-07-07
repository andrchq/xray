export type ServiceStatus = "available" | "unavailable";
export type GroupStatus = "good" | "partial" | "blocked";

export type ServiceResult = {
  id: string;
  name: string;
  group: string;
  url: string;
  method: "GET" | "HEAD";
  expectedStatus: [number, number];
  status: ServiceStatus;
  latencyMs: number | null;
  httpStatus: number | null;
  reason: string;
};

export type GroupResult = {
  id: string;
  name: string;
  status: GroupStatus;
  score: number;
  available: number;
  total: number;
  services: ServiceResult[];
};

export type CheckReport = {
  generatedAt: string;
  score: number;
  available: number;
  total: number;
  groups: GroupResult[];
};

export type IpInfo = {
  ip: string;
  country: string;
  countryCode: string;
  city: string;
  latitude: number | null;
  longitude: number | null;
  source: string;
  checkedAt: string;
};
