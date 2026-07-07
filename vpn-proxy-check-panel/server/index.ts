import cors from "cors";
import express from "express";
import { ProxyAgent, setGlobalDispatcher } from "undici";
import { runChecks } from "./checker.js";
import { getIpInfo } from "./ip.js";

const PORT = Number(process.env.PORT ?? 3001);
const HOST = process.env.HOST ?? "0.0.0.0";
const STREAM_INTERVAL_MS = Number(process.env.STREAM_INTERVAL_MS ?? 15000);
const proxyUrl = process.env.HTTPS_PROXY ?? process.env.HTTP_PROXY ?? process.env.ALL_PROXY;

if (proxyUrl) {
  setGlobalDispatcher(new ProxyAgent(proxyUrl));
}

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({
    ok: true,
    proxyEnv: proxyUrl ? "enabled" : "not-set",
    streamIntervalMs: STREAM_INTERVAL_MS,
  });
});

app.get("/api/ip", async (_request, response) => {
  try {
    response.json(await getIpInfo());
  } catch (error) {
    response.status(502).json({
      error: "Unable to resolve public IP",
      detail: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.get("/api/checks", async (_request, response) => {
  try {
    response.json(await runChecks());
  } catch (error) {
    response.status(502).json({
      error: "Unable to run service checks",
      detail: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.get("/api/stream", async (request, response) => {
  response.writeHead(200, {
    "cache-control": "no-cache, no-transform",
    "connection": "keep-alive",
    "content-type": "text/event-stream",
    "x-accel-buffering": "no",
  });

  const send = (event: string, data: unknown) => {
    response.write(`event: ${event}\n`);
    response.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  const tick = async () => {
    const ipResult = await getIpInfo()
      .then((ip) => ({ ok: true as const, ip }))
      .catch((error) => ({ ok: false as const, error }));

    const checksResult = await runChecks()
      .then((checks) => ({ ok: true as const, checks }))
      .catch((error) => ({ ok: false as const, error }));

    if (ipResult.ok) {
      send("ip", ipResult.ip);
    } else {
      send("ip-error", {
        message: ipResult.error instanceof Error ? ipResult.error.message : "Unable to resolve public IP",
        checkedAt: new Date().toISOString(),
      });
    }

    if (checksResult.ok) {
      send("checks", checksResult.checks);
    } else {
      send("error", {
        message: checksResult.error instanceof Error ? checksResult.error.message : "Unable to run service checks",
        checkedAt: new Date().toISOString(),
      });
    }
  };

  send("connected", { intervalMs: STREAM_INTERVAL_MS });
  await tick();
  const timer = setInterval(tick, STREAM_INTERVAL_MS);

  request.on("close", () => {
    clearInterval(timer);
    response.end();
  });
});

app.listen(PORT, HOST, () => {
  console.log(`API listening on http://${HOST}:${PORT}`);
});
