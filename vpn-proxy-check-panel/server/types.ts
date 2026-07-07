export type GroupId = "ai" | "social" | "forums" | "search" | "dev" | "media";

export type ServiceConfig = {
  id: string;
  name: string;
  group: GroupId;
  url: string;
  method: "GET" | "HEAD";
  expectedStatus: [number, number];
};

export type ServiceResult = ServiceConfig & {
  status: "available" | "unavailable";
  latencyMs: number | null;
  httpStatus: number | null;
  reason: string;
};

export type GroupResult = {
  id: GroupId;
  name: string;
  status: "good" | "partial" | "blocked";
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
