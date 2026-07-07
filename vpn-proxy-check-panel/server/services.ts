import type { GroupId, ServiceConfig } from "./types.js";

export const GROUP_NAMES: Record<GroupId, string> = {
  ai: "AI",
  social: "Social",
  forums: "Forums",
  search: "Search",
  dev: "Dev",
  media: "Media",
};

const ok: [number, number] = [200, 399];
const reachable: [number, number] = [200, 499];

export const SERVICES: ServiceConfig[] = [
  { id: "openai", name: "OpenAI", group: "ai", url: "https://chat.openai.com/", method: "GET", expectedStatus: reachable },
  { id: "claude", name: "Claude", group: "ai", url: "https://claude.ai/", method: "GET", expectedStatus: reachable },
  { id: "gemini", name: "Gemini", group: "ai", url: "https://gemini.google.com/", method: "GET", expectedStatus: reachable },
  { id: "perplexity", name: "Perplexity", group: "ai", url: "https://www.perplexity.ai/", method: "GET", expectedStatus: reachable },
  { id: "copilot", name: "Copilot", group: "ai", url: "https://copilot.microsoft.com/", method: "GET", expectedStatus: reachable },
  { id: "huggingface", name: "Hugging Face", group: "ai", url: "https://huggingface.co/", method: "GET", expectedStatus: ok },
  { id: "mistral", name: "Mistral", group: "ai", url: "https://chat.mistral.ai/", method: "GET", expectedStatus: reachable },
  { id: "deepseek", name: "DeepSeek", group: "ai", url: "https://chat.deepseek.com/", method: "GET", expectedStatus: reachable },
  { id: "meta-ai", name: "Meta AI", group: "ai", url: "https://www.meta.ai/", method: "GET", expectedStatus: reachable },

  { id: "x", name: "X", group: "social", url: "https://x.com/", method: "GET", expectedStatus: reachable },
  { id: "instagram", name: "Instagram", group: "social", url: "https://www.instagram.com/", method: "GET", expectedStatus: reachable },
  { id: "facebook", name: "Facebook", group: "social", url: "https://www.facebook.com/", method: "GET", expectedStatus: reachable },
  { id: "tiktok", name: "TikTok", group: "social", url: "https://www.tiktok.com/", method: "GET", expectedStatus: reachable },
  { id: "threads", name: "Threads", group: "social", url: "https://www.threads.net/", method: "GET", expectedStatus: reachable },
  { id: "pinterest", name: "Pinterest", group: "social", url: "https://www.pinterest.com/", method: "GET", expectedStatus: reachable },
  { id: "telegram", name: "Telegram", group: "social", url: "https://web.telegram.org/", method: "GET", expectedStatus: reachable },
  { id: "discord", name: "Discord", group: "social", url: "https://discord.com/", method: "GET", expectedStatus: reachable },

  { id: "reddit", name: "Reddit", group: "forums", url: "https://www.reddit.com/", method: "GET", expectedStatus: reachable },
  { id: "stackoverflow", name: "Stack Overflow", group: "forums", url: "https://stackoverflow.com/", method: "GET", expectedStatus: ok },
  { id: "hackernews", name: "Hacker News", group: "forums", url: "https://news.ycombinator.com/", method: "GET", expectedStatus: ok },
  { id: "quora", name: "Quora", group: "forums", url: "https://www.quora.com/", method: "GET", expectedStatus: reachable },
  { id: "medium", name: "Medium", group: "forums", url: "https://medium.com/", method: "GET", expectedStatus: reachable },
  { id: "devto", name: "DEV", group: "forums", url: "https://dev.to/", method: "GET", expectedStatus: ok },
  { id: "producthunt", name: "Product Hunt", group: "forums", url: "https://www.producthunt.com/", method: "GET", expectedStatus: reachable },

  { id: "google", name: "Google", group: "search", url: "https://www.google.com/generate_204", method: "GET", expectedStatus: [204, 204] },
  { id: "duckduckgo", name: "DuckDuckGo", group: "search", url: "https://duckduckgo.com/", method: "GET", expectedStatus: ok },
  { id: "brave", name: "Brave Search", group: "search", url: "https://search.brave.com/", method: "GET", expectedStatus: ok },
  { id: "kagi", name: "Kagi", group: "search", url: "https://kagi.com/", method: "GET", expectedStatus: ok },
  { id: "ecosia", name: "Ecosia", group: "search", url: "https://www.ecosia.org/", method: "GET", expectedStatus: ok },
  { id: "qwant", name: "Qwant", group: "search", url: "https://www.qwant.com/", method: "GET", expectedStatus: reachable },
  { id: "yandex", name: "Yandex", group: "search", url: "https://yandex.com/", method: "GET", expectedStatus: reachable },

  { id: "github", name: "GitHub", group: "dev", url: "https://github.com/", method: "GET", expectedStatus: ok },
  { id: "gitlab", name: "GitLab", group: "dev", url: "https://gitlab.com/", method: "GET", expectedStatus: ok },
  { id: "npm", name: "npm", group: "dev", url: "https://www.npmjs.com/", method: "GET", expectedStatus: ok },
  { id: "pypi", name: "PyPI", group: "dev", url: "https://pypi.org/", method: "GET", expectedStatus: ok },
  { id: "dockerhub", name: "Docker Hub", group: "dev", url: "https://hub.docker.com/", method: "GET", expectedStatus: reachable },
  { id: "cloudflare", name: "Cloudflare", group: "dev", url: "https://www.cloudflare.com/", method: "GET", expectedStatus: reachable },
  { id: "vercel", name: "Vercel", group: "dev", url: "https://vercel.com/", method: "GET", expectedStatus: reachable },
  { id: "netlify", name: "Netlify", group: "dev", url: "https://www.netlify.com/", method: "GET", expectedStatus: ok },
  { id: "aws", name: "AWS", group: "dev", url: "https://aws.amazon.com/", method: "GET", expectedStatus: reachable },
  { id: "azure", name: "Azure", group: "dev", url: "https://azure.microsoft.com/", method: "GET", expectedStatus: reachable },

  { id: "youtube", name: "YouTube", group: "media", url: "https://www.youtube.com/", method: "GET", expectedStatus: reachable },
  { id: "netflix", name: "Netflix", group: "media", url: "https://www.netflix.com/", method: "GET", expectedStatus: reachable },
  { id: "spotify", name: "Spotify", group: "media", url: "https://open.spotify.com/", method: "GET", expectedStatus: reachable },
  { id: "twitch", name: "Twitch", group: "media", url: "https://www.twitch.tv/", method: "GET", expectedStatus: reachable },
  { id: "primevideo", name: "Prime Video", group: "media", url: "https://www.primevideo.com/", method: "GET", expectedStatus: reachable },
  { id: "disney", name: "Disney+", group: "media", url: "https://www.disneyplus.com/", method: "GET", expectedStatus: reachable },
  { id: "bbc", name: "BBC", group: "media", url: "https://www.bbc.com/", method: "GET", expectedStatus: ok },
  { id: "wikipedia", name: "Wikipedia", group: "media", url: "https://www.wikipedia.org/", method: "GET", expectedStatus: ok },
];
