/**
 * Public site origin. Canonical, Open Graph, robots, and sitemap all read
 * `url`. Set NEXT_PUBLIC_SITE_URL to switch hosts (GitHub Pages or a custom
 * domain). The ChatGPT Sites build leaves it unset and keeps the default.
 *
 * NEXT_PUBLIC_BASE_PATH is the path prefix for a GitHub project site
 * (`/ai_portfolio`). Leave it empty for ChatGPT Sites and for a custom domain.
 */
const defaultUrl = "https://rudraksh-syal-portfolio.glasnost.chatgpt.site";

export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

export const siteConfig = {
  url: (process.env.NEXT_PUBLIC_SITE_URL || defaultUrl).replace(/\/$/, ""),
  name: "Rudraksh Syal",
  jobTitle: "Data Science Lead",
  email: "rudrakshsyal@gmail.com",
  availability: "Open to roles · available now · San Jose, CA / remote",
  location: {
    locality: "San Jose",
    region: "CA",
  },
  sameAs: [
    "https://linkedin.com/in/rudraksh-syal",
    "https://github.com/rudrakshsyal",
  ],
  /**
   * Optional extra analytics providers. Nothing is injected while `enabled`
   * is false.
   */
  analytics: {
    enabled: false,
    provider: "plausible" as "plausible" | "umami" | "cloudflare",
    plausible: {
      domain: "rudraksh-syal-portfolio.glasnost.chatgpt.site",
      src: "https://plausible.io/js/script.js",
    },
    umami: {
      src: "",
      websiteId: "",
    },
    cloudflare: {
      token: "",
    },
  },
} as const;

/** Absolute URL that keeps a base path such as /ai_portfolio. */
export function absoluteUrl(path = "/") {
  const suffix = path.startsWith("/") ? path : `/${path}`;
  if (suffix === "/") return siteConfig.url;
  return `${siteConfig.url}${suffix}`;
}

/** Root-relative href with the Pages base path, if any. */
export function sitePath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export const targetRoles = [
  "Staff / Principal Data Scientist",
  "AI / Agentic Engineer",
  "Forward Deployed Engineer",
  "DS / AI Tech Lead or Manager",
] as const;

export const publicRoutes = [
  "/",
  "/work",
  "/work/dynamic-pricing-engine",
  "/work/agentic-pricing",
  "/work/contract-intelligence",
  "/work/cancellation-policy-badging",
  "/work/measurement-experimentation",
  "/journey",
  "/now",
  "/future",
  "/about",
  "/resume",
] as const;
