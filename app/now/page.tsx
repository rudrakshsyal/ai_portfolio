import type { Metadata } from "next";
import Link from "next/link";
import { CaseFooter } from "../components/CaseFooter";
import { featuredBuilds, formatUpdated, otherBuilds } from "../../lib/building-now";
import { pageMetadata } from "../../lib/metadata";

export const dynamic = "force-static";

export const metadata: Metadata = pageMetadata({
  title: "Building now · Rudraksh Syal",
  description:
    "Dated 2026 public repositories by Rudraksh Syal, plus the roles he is aiming at in agentic AI, data science, and forward-deployed work.",
  path: "/now",
});

export default function NowPage() {
  return (
    <main className="case-study now-page">
      <header className="case-header" aria-label="Building now navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span>
          <strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#builds">Repositories</a>
          <Link href="/future">Where I’m headed</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="now-hero">
        <p className="case-chapter">Building now · 2026</p>
        <h1>Every public repository pushed since June 2026.</h1>
        <p>
          Ten public, non-fork repositories with a push since 12 June 2026.
          One line each, from that README. Not client work, and not production claims.
        </p>
      </section>

      <section className="build-list" id="builds" aria-labelledby="builds-title">
        <header>
          <p className="case-chapter">Repositories</p>
          <h2 id="builds-title">Four to open first.</h2>
        </header>
        <div>
          {featuredBuilds.map((build) => (
            <article key={build.repo}>
              <div className="build-card-top">
                <time dateTime={build.updated}>{`Updated ${formatUpdated(build.updated)}`}</time>
                <code>{build.repo}</code>
              </div>
              <h3>{build.title}</h3>
              <p>{build.summary}</p>
              <ul className="stack-tags" aria-label={`${build.title} stack`}>
                {build.stack.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a href={build.href} target="_blank" rel="noreferrer">
                View on GitHub ↗
              </a>
            </article>
          ))}
        </div>
        <div className="build-compact">
          <h3>Also updated in this window</h3>
          {otherBuilds.map((build) => (
            <a key={build.repo} href={build.href} target="_blank" rel="noreferrer">
              <time dateTime={build.updated}>{formatUpdated(build.updated)}</time>
              <span>
                <strong>{build.title}</strong>
                <small>{build.repo}</small>
                <p>{build.summary}</p>
                <ul className="stack-tags" aria-label={`${build.title} stack`}>
                  {build.stack.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </span>
            </a>
          ))}
        </div>
      </section>

      <CaseFooter backHref="/future" backLabel="Where I’m headed →" />
    </main>
  );
}
