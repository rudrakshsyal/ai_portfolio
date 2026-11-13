import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../lib/metadata";
import { siteConfig, targetRoles } from "../../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Where I’m headed · Rudraksh Syal",
  description:
    "Roles Rudraksh Syal is targeting, and the next build steps already written in his public repository READMEs.",
  path: "/future",
});

const roadmap = [
  {
    repo: "evidentML",
    href: "https://github.com/rudrakshsyal/evidentML",
    title: "EvidentML",
    items: [
      "Finish leakage checks and their tests.",
      "Add semantic validity checks, starting with age constraints.",
      "Score the benchmark against the evaluator-only answer key.",
      "Start the cleaning engine. It records each change. It does not drop rows on its own.",
    ],
    note: "The README says modeling and agent orchestration are not implemented.",
  },
  {
    repo: "the_sidekick_agent",
    href: "https://github.com/rudrakshsyal/the_sidekick_agent",
    title: "Sidekick",
    items: [
      "Check tool results, not only tool names, before calling a task done.",
      "Register the slide helper as a tool if slide creation should be part of the app.",
    ],
    note: "The README calls this a local prototype, not a production service.",
  },
  {
    repo: "dynamic_pricing_engine",
    href: "https://github.com/rudrakshsyal/dynamic_pricing_engine",
    title: "Dynamic Pricing Engine",
    items: [
      "Define the solve date, the departure horizon, and commitment categories that do not overlap.",
      "Map expected demand onto the departure date using booking lead time.",
    ],
    note: "The public model comparison kept the existing forecasts. The README does not claim a revenue change.",
  },
];

export default function FuturePage() {
  return (
    <main className="case-study now-page">
      <header className="case-header" aria-label="Where I'm headed navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span>
          <strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#roles">Roles</a>
          <a href="#roadmap">Roadmap</a>
          <Link href="/now">Building now</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="now-hero">
        <p className="case-chapter">Where I’m headed</p>
        <h1>Agentic systems, with a person still in the loop.</h1>
        <p className="availability-line about-availability">{siteConfig.availability}</p>
        <p>
          The direction is the same shape as the live pricing layer: tools with
          a boundary, a check against a human decision, and code a team can inherit.
        </p>
      </section>

      <section className="future-scope" id="roles" aria-labelledby="roles-title">
        <p className="case-chapter">Roles</p>
        <h2 id="roles-title">What I’m looking for.</h2>
        <ul className="role-chips" aria-label="Target roles">
          {targetRoles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
        <div className="future-columns">
          <article>
            <h3>At work now</h3>
            <p>
              Data Science Lead at Hana E Solutions since October 2026. Two
              client workflows, mainly pricing. Both are proof of concept. No
              outcome is claimed.
            </p>
          </article>
          <article>
            <h3>The pattern</h3>
            <p>
              Custom tools, a parallel run before go-live, and an acceptance
              rate a pricing manager can audit. That is the bar for the next role.
            </p>
          </article>
          <article>
            <h3>What is not a promise</h3>
            <p>
              Repositories with no “next” section are not given one here. Deep
              research, the trading floor, the TV launcher, and the digital twin
              stay descriptions, not a roadmap.
            </p>
          </article>
        </div>
      </section>

      <section className="build-list" id="roadmap" aria-labelledby="roadmap-title">
        <header>
          <p className="case-chapter">Roadmap</p>
          <h2 id="roadmap-title">Next steps the READMEs already name.</h2>
        </header>
        <div>
          {roadmap.map((item) => (
            <article key={item.repo}>
              <h3>{item.title}</h3>
              <ul>
                {item.items.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ul>
              <p>{item.note}</p>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.repo} ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/now">← Building now</Link>
        <a href={`mailto:${siteConfig.email}`}>Email</a>
        <a href={siteConfig.sameAs[0]} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </footer>
    </main>
  );
}
