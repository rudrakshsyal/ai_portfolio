import { mkdirSync, writeFileSync } from "node:fs";

const site = (process.env.NEXT_PUBLIC_SITE_URL || "https://rudraksh-syal-portfolio.glasnost.chatgpt.site").replace(/\/$/, "");
const routes = [
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
];

const urls = routes.map((path) => (path === "/" ? `${site}/` : `${site}${path}`));
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${url}</loc></url>`).join("\n")}
</urlset>
`;
const robots = `User-Agent: *
Allow: /

Host: ${site}
Sitemap: ${site}/sitemap.xml
`;

mkdirSync("dist/client", { recursive: true });
writeFileSync("dist/client/sitemap.xml", sitemap);
writeFileSync("dist/client/robots.txt", robots);
console.log(`Wrote dist/client/robots.txt and sitemap.xml for ${site}`);
