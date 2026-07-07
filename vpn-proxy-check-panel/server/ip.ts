import type { IpInfo } from "./types.js";

type IpApiResponse = {
  ip?: string;
  country_name?: string;
  country_code?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
};

type IpWhoResponse = {
  success?: boolean;
  ip?: string;
  country?: string;
  country_code?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
};

type IpApiComResponse = {
  status?: "success" | "fail";
  message?: string;
  query?: string;
  country?: string;
  countryCode?: string;
  city?: string;
  lat?: number;
  lon?: number;
};

type IpifyResponse = {
  ip?: string;
};

type IpResolver = {
  name: string;
  resolve: () => Promise<IpInfo>;
};

const timeoutSignal = (timeoutMs: number) => AbortSignal.timeout(timeoutMs);
const checkedAt = () => new Date().toISOString();
const headers = { "user-agent": "vpn-proxy-check-panel/0.1" };

function normalizeNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

async function readJson<T>(url: string, timeoutMs = 4500): Promise<T> {
  const response = await fetch(url, {
    signal: timeoutSignal(timeoutMs),
    headers,
  });
  if (!response.ok) {
    throw new Error(`${new URL(url).hostname} returned ${response.status}`);
  }
  return response.json() as Promise<T>;
}

const resolvers: IpResolver[] = [
  {
    name: "ipapi.co",
    resolve: async () => {
      const data = await readJson<IpApiResponse>("https://ipapi.co/json/");
      if (!data.ip) {
        throw new Error("ipapi.co response did not include ip");
      }
      return {
        ip: data.ip,
        country: data.country_name ?? "Unknown",
        countryCode: data.country_code ?? "",
        city: data.city ?? "Unknown",
        latitude: normalizeNumber(data.latitude),
        longitude: normalizeNumber(data.longitude),
        source: "ipapi.co",
        checkedAt: checkedAt(),
      };
    },
  },
  {
    name: "ip-api.com",
    resolve: async () => {
      const data = await readJson<IpApiComResponse>(
        "http://ip-api.com/json/?fields=status,message,query,country,countryCode,city,lat,lon",
      );
      if (data.status === "fail" || !data.query) {
        throw new Error(data.message ?? "ip-api.com response did not include ip");
      }
      return {
        ip: data.query,
        country: data.country ?? "Unknown",
        countryCode: data.countryCode ?? "",
        city: data.city ?? "Unknown",
        latitude: normalizeNumber(data.lat),
        longitude: normalizeNumber(data.lon),
        source: "ip-api.com",
        checkedAt: checkedAt(),
      };
    },
  },
  {
    name: "ipwho.is",
    resolve: async () => {
      const data = await readJson<IpWhoResponse>("https://ipwho.is/");
      if (!data.ip || data.success === false) {
        throw new Error("ipwho.is response did not include ip");
      }
      return {
        ip: data.ip,
        country: data.country ?? "Unknown",
        countryCode: data.country_code ?? "",
        city: data.city ?? "Unknown",
        latitude: normalizeNumber(data.latitude),
        longitude: normalizeNumber(data.longitude),
        source: "ipwho.is",
        checkedAt: checkedAt(),
      };
    },
  },
  {
    name: "api.ipify.org",
    resolve: async () => {
      const data = await readJson<IpifyResponse>("https://api.ipify.org?format=json", 3500);
      if (!data.ip) {
        throw new Error("api.ipify.org response did not include ip");
      }
      return {
        ip: data.ip,
        country: "Unknown",
        countryCode: "",
        city: "Unknown",
        latitude: null,
        longitude: null,
        source: "api.ipify.org",
        checkedAt: checkedAt(),
      };
    },
  },
];

export async function getIpInfo(): Promise<IpInfo> {
  const errors: string[] = [];

  for (const resolver of resolvers) {
    try {
      return await resolver.resolve();
    } catch (error) {
      errors.push(`${resolver.name}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }

  throw new Error(errors.join("; "));
}
