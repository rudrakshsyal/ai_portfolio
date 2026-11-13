import { ClickTracker } from "./ClickTracker";
import { siteConfig } from "../../lib/site";

/**
 * GoatCounter loads only when NEXT_PUBLIC_GOATCOUNTER_CODE is set at build time.
 * The script counts pageviews. ClickTracker sends résumé, email, LinkedIn, and
 * GitHub clicks as events. The older provider block stays off unless
 * siteConfig.analytics.enabled is true.
 */
const goatcounterCode = process.env.NEXT_PUBLIC_GOATCOUNTER_CODE?.trim() || "";

export function Analytics() {
  const { analytics } = siteConfig;
  const legacy =
    analytics.enabled && analytics.provider === "plausible" && analytics.plausible.domain && analytics.plausible.src ? (
      <script defer data-domain={analytics.plausible.domain} src={analytics.plausible.src} />
    ) : analytics.enabled && analytics.provider === "umami" && analytics.umami.src && analytics.umami.websiteId ? (
      <script defer src={analytics.umami.src} data-website-id={analytics.umami.websiteId} />
    ) : analytics.enabled && analytics.provider === "cloudflare" && analytics.cloudflare.token ? (
      <script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon={JSON.stringify({ token: analytics.cloudflare.token })}
      />
    ) : null;

  if (!goatcounterCode) return legacy;

  return (
    <>
      <script
        data-goatcounter={`https://${goatcounterCode}.goatcounter.com/count`}
        async
        src="https://gc.zgo.at/count.js"
      />
      <ClickTracker />
      {legacy}
    </>
  );
}
