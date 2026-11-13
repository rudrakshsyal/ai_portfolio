import type { Metadata } from "next";
import Link from "next/link";
import { featuredBuilds, formatUpdated, otherBuilds } from "../../lib/building-now";
import { pageMetadata } from "../../lib/metadata";
import { siteConfig, targetRoles } from "../../lib/site";

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
          <a href="#direction">Where I’m headed</a>
          <Link href="/journey">Journey</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="now-hero">
        <p className="case-chapter">Building now · 2026</p>
        <h1>Public repositories from the last four months.</h1>
        <p>
          Every public, non-fork repository with a push since 13 July 2026.
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

      <section className="future-scope" id="direction" aria-labelledby="direction-title">
        <p className="case-chapter">Where I’m headed</p>
        <h2 id="direction-title">Agentic systems, in the roles I’m looking for.</h2>
        <p>
          I am actively looking and available now. The roles I want next are
          the ones where a tool-using system has to survive contact with a real
          decision: a pricing manager, a client, or a team that will inherit
          the code.
        </p>
        <ul className="role-chips future-roles" aria-label="Target roles">
          {targetRoles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
        <div className="future-columns">
          <article>
            <h3>At work</h3>
            <p>
              Data Science Lead at Hana E Solutions since October 2026. The
              current scope is agentic AI workflows for two clients, mainly in
              pricing, both at proof of concept.
            </p>
          </article>
          <article>
            <h3>In public</h3>
            <p>
              The 2026 repositories are where orchestration, evaluation, and
              interfaces get exercised before they are described as production
              systems. EvidentML still says modeling and agents are not
              implemented. Sidekick is a local prototype. The trading-floor
              README does not report results.
            </p>
          </article>
          <article>
            <h3>The pattern I want to keep</h3>
            <p>
              The Vista pricing layer is the reference: custom tools, a parallel
              run, human approval, and an acceptance rate someone can audit.
              That is the standard I want in a staff, principal, forward-deployed,
              or tech-lead seat.
            </p>
          </article>
        </div>
        <p className="availability-line future-availability">{siteConfig.availability}</p>
      </section>

      <footer className="case-footer">
        <Link href="/">← Back to portfolio</Link>
        <a href={`mailto:${siteConfig.email}`}>Email</a>
      </footer>
    </main>
  );
}
