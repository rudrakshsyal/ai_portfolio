import { siteConfig } from "../../lib/site";

/**
 * Renders one privacy-friendly analytics snippet when siteConfig.analytics.enabled
 * is true. The default configuration renders nothing.
 */
export function Analytics() {
  const { analytics } = siteConfig;
  if (!analytics.enabled) return null;

  if (analytics.provider === "plausible" && analytics.plausible.domain && analytics.plausible.src) {
    return <script defer data-domain={analytics.plausible.domain} src={analytics.plausible.src} />;
  }

  if (analytics.provider === "umami" && analytics.umami.src && analytics.umami.websiteId) {
    return <script defer src={analytics.umami.src} data-website-id={analytics.umami.websiteId} />;
  }

  if (analytics.provider === "cloudflare" && analytics.cloudflare.token) {
    return (
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={JSON.stringify({ token: analytics.cloudflare.token })}
      />
    );
  }

  return null;
}
