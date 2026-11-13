/**
 * Public site origin. Canonical, Open Graph, robots, and sitemap all read
 * this value. When a custom domain is attached, change `url` and republish.
 */
export const siteConfig = {
  url: "https://rudraksh-syal-portfolio.glasnost.chatgpt.site",
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
   * Privacy-friendly analytics. Nothing is injected while `enabled` is false.
   * Set `enabled` to true and fill only the provider you use, then republish.
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
