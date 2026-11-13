import Link from "next/link";
import { siteConfig } from "../../lib/site";

export function CaseFooter({
  backHref,
  backLabel,
  nextHref,
  nextLabel,
}: {
  backHref: string;
  backLabel: string;
  nextHref?: string;
  nextLabel?: string;
}) {
  return (
    <footer className="case-footer">
      <div className="case-footer-nav">
        <Link href={backHref}>{backLabel}</Link>
        {nextHref && nextLabel ? <Link href={nextHref}>{nextLabel}</Link> : null}
      </div>
      <p className="ask-line">Ask me about pricing, measurement, or agentic systems.</p>
      <div className="case-footer-contact">
        <a href={`mailto:${siteConfig.email}`}>Email</a>
        <a href={siteConfig.sameAs[0]} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
