import { ClickTracker } from "./ClickTracker";
import { siteConfig } from "../../lib/site";

/**
 * GoatCounter is on when siteConfig.goatcounterCode is non-empty.
 * The default code is rudrakshsyal. NEXT_PUBLIC_GOATCOUNTER_CODE overrides it;
 * "off" disables the script. ClickTracker sends résumé, email, LinkedIn, and
 * GitHub clicks as events. The older provider block stays off unless
 * siteConfig.analytics.enabled is true.
 */
export function Analytics() {
  const { analytics, goatcounterCode } = siteConfig;
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
