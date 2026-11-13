"use client";

import { useState } from "react";
import Link from "next/link";
import { featuredBuilds } from "../lib/building-now";
import { siteConfig, targetRoles } from "../lib/site";

type ScenarioKey = "base" | "peak" | "floor";

const scenarios: Record<
  ScenarioKey,
  {
    tab: string;
    eyebrow: string;
    title: string;
    summary: string;
    metricOne: string;
    metricOneLabel: string;
    metricTwo: string;
    metricTwoLabel: string;
    markerClass: string;
  }
> = {
  base: {
    tab: "Base",
    eyebrow: "Representative solved day",
    title: "Supply and demand meet at equilibrium.",
    summary:
      "The system reconciles usable fleet capacity with demand response to recommend a market-clearing yield.",
    metricOne: "~1.9",
    metricOneLabel: "available legs",
    metricTwo: "$12.7k",
    metricTwoLabel: "illustrative yield",
    markerClass: "marker-base",
  },
  peak: {
    tab: "Peak",
    eyebrow: "Demand surge",
    title: "The model re-solves as constraints tighten.",
    summary:
      "Elevated demand and reduced flexibility shift the decision toward the upper operating range without relying on a static seasonal rule.",
    metricOne: "+23%",
    metricOneLabel: "demand signal",
    metricTwo: "Daily",
    metricTwoLabel: "adaptive re-solve",
    markerClass: "marker-peak",
  },
  floor: {
    tab: "Price Floor",
    eyebrow: "High-supply day",
    title: "The floor protects the decision boundary.",
    summary:
      "When available supply exceeds modeled demand across the operating range, the engine holds the minimum acceptable yield.",
    metricOne: "~6",
    metricOneLabel: "available legs",
    metricTwo: "$7.0k",
    metricTwoLabel: "price floor",
    markerClass: "marker-floor",
  },
};

const selectedWork = [
  {
    number: "01",
    title: "Agentic pricing layer",
    copy: "A custom Python tool-calling layer on Claude via AWS Bedrock. It explains pricing drivers, and a manager approves or rejects each recommendation.",
    proof: "7 regions · ~240 requests/day · 85–90% accepted",
    visual: "agent",
    href: "/work/agentic-pricing",
  },
  {
    number: "02",
    title: "Chamomile Contract Intelligence",
    copy: "Clause-aware hybrid retrieval that made a 4,000+ contract corpus queryable by regional sales teams.",
    proof: "Bedrock · OpenSearch · Llama 3.1 8B",
    visual: "documents",
    href: "/work/contract-intelligence",
  },
  {
    number: "03",
    title: "Cancellation policy badges",
    copy: "Structured refund terms for ~600 operators into marketplace badges, with uncertain cases held for human review.",
    proof: "~600 operators · ~85% badge-ready",
    visual: "documents",
    href: "/work/cancellation-policy-badging",
  },
];

const journey = [
  ["2026", "Hana E Solutions", "Agentic AI, from scratch"],
  ["2024", "Vista · DS Lead", "Pricing systems & agentic AI"],
  ["2021", "Vista", "Production pricing & ML"],
  ["2019", "84.51°", "Decision science at scale"],
  ["2015", "Practo", "Making data usable"],
];

const skillGroups = [
  {
    title: "Agentic AI & LLMs",
    items: [
      "Tool / function calling",
      "Multi-step orchestration",
      "RAG & hybrid search",
      "Claude on AWS Bedrock",
      "LangChain / LangGraph",
      "OpenAI Agents SDK",
      "MCP",
      "Llama 3.1 8B",
    ],
  },
  {
    title: "Evaluation",
    items: [
      "LLM-as-a-judge",
      "Golden sets",
      "Precision@K / Recall@K",
      "Human-in-the-loop review",
      "Guardrails",
      "LangSmith",
      "Parallel-run validation",
    ],
  },
  {
    title: "Cloud, data & platform",
    items: [
      "Python",
      "SQL",
      "AWS Bedrock",
      "SageMaker",
      "OpenSearch Serverless",
      "Snowflake",
      "Databricks",
      "Spark",
      "MLflow",
      "Airflow",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    title: "ML & statistics",
    items: [
      "XGBoost",
      "Random Forest",
      "Forecasting",
      "Optimization",
      "BSTS & synthetic control",
      "A/B testing",
      "NLP",
    ],
  },
];

const proof = [
  { value: "11+ years", label: "Python, ML, and data science" },
  { value: "7 U.S. regions", label: "Pricing layer live after a parallel run" },
  { value: "~600 operators", label: "~85% badge-ready, rest reviewed" },
];

export default function Home() {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("base");
  const scenario = scenarios[activeScenario];
  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Rudraksh Syal, home">
          <span className="brand-mark" aria-hidden="true">
            RS
          </span>
          <span>Rudraksh Syal</span>
        </Link>
        <span className="header-note">Open to roles · San Jose / remote</span>
        <nav className="primary-nav" aria-label="Portfolio sections">
          <Link href="/work">Work</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/now">Building now</Link>
          <Link href="/future">Where I’m headed</Link>
          <Link href="/about">About</Link>
          <Link href="/resume">Resume</Link>
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="availability-line">{siteConfig.availability}</p>
          <h1 id="hero-title">Rudraksh Syal</h1>
          <p className="hero-title-line">Data Science Lead</p>
          <p className="hero-summary">
            11+ years in Python, ML, and data science. I ship pricing, retrieval,
            and agentic systems a person can check.
          </p>
          <ul className="role-chips" aria-label="Target roles">
            {targetRoles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>
          <dl className="hero-metrics">
            {proof.map((item) => (
              <div key={item.value}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="hero-actions" aria-label="Contact and résumé">
            <a className="download-resume" href="/resume.pdf">
              Download resume
            </a>
            <a className="quiet-action" href={`mailto:${siteConfig.email}`}>
              Email
            </a>
            <a className="quiet-action" href={siteConfig.sameAs[0]} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="quiet-action" href={siteConfig.sameAs[1]} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <article className="dpe-instrument" aria-labelledby="dpe-title">
          <div className="instrument-heading">
            <div className="instrument-title-row">
              <p>Flagship system · Dynamic Pricing Engine</p>
              <Link href="/work/dynamic-pricing-engine">Full case study ↗</Link>
            </div>
            <h2 id="dpe-title">Supply → demand → equilibrium</h2>
          </div>
          <div className="scenario-tabs" role="tablist" aria-label="DPE scenario">
            {(Object.keys(scenarios) as ScenarioKey[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={activeScenario === key}
                onClick={() => setActiveScenario(key)}
              >
                {scenarios[key].tab}
              </button>
            ))}
          </div>
          <div
            className={`instrument-chart ${scenario.markerClass}`}
            role="img"
            aria-label={`${scenario.tab} scenario: ${scenario.title}`}
          >
            <span className="chart-axis chart-axis-y">Capacity</span>
            <span className="chart-axis chart-axis-x">Yield</span>
            <span className="chart-line supply-line" aria-hidden="true" />
            <span className="chart-line demand-line" aria-hidden="true" />
            <span className="chart-label supply-label">Supply</span>
            <span className="chart-label demand-label">Demand</span>
            <span className="equilibrium-dot" aria-hidden="true" />
          </div>
          <div className="instrument-reading" aria-live="polite">
            <div className="reading-copy">
              <span>{scenario.eyebrow}</span>
              <h3>{scenario.title}</h3>
              <p>{scenario.summary}</p>
            </div>
            <dl>
              <div>
                <dt>{scenario.metricOneLabel}</dt>
                <dd>{scenario.metricOne}</dd>
              </div>
              <div>
                <dt>{scenario.metricTwoLabel}</dt>
                <dd>{scenario.metricTwo}</dd>
              </div>
            </dl>
          </div>
          <p className="data-note">
            Aggregated, representative operational data from one fleet. One
            43-aircraft fleet saw 28% fewer off-fleet bookings in month one.
          </p>
        </article>
      </section>

      <section className="section-block selected-work" id="work" aria-labelledby="work-title">
        <header className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2 id="work-title">Selected systems.</h2>
          <p>Agentic pricing, contracts, and policy badges. Pricing and measurement are in the library.</p>
        </header>
        <div className="work-list">
          {selectedWork.map((project) => (
            <article key={project.number}>
              <span className="project-number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <div className={`home-project-viz ${project.visual}`} aria-hidden="true">
                {project.visual === "documents" && (
                  <>
                    <i />
                    <i />
                    <i />
                    <span>Structured</span>
                  </>
                )}
                {project.visual === "agent" && (
                  <>
                    <span>Tools</span>
                    <i />
                    <span>Explain</span>
                    <i />
                    <span>Approve</span>
                  </>
                )}
              </div>
              <strong>{project.proof}</strong>
              <Link className="home-project-link" href={project.href}>
                View project →
              </Link>
            </article>
          ))}
        </div>
        <Link className="coming-note" href="/work">
          EU Light Jet, product measurement, and the full library →
        </Link>
      </section>

      <section className="section-block skills-section" id="skills" aria-labelledby="skills-title">
        <header className="section-heading compact-heading">
          <p className="section-kicker">Skills</p>
          <h2 id="skills-title">Stack.</h2>
        </header>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block journey-section" id="journey" aria-labelledby="journey-title">
        <header className="section-heading compact-heading">
          <p className="section-kicker">Journey</p>
          <h2 id="journey-title">Recent roles.</h2>
        </header>
        <ol className="journey-line">
          {journey.map(([year, place, theme], index) => (
            <li key={`${year}-${place}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <time>{year}</time>
              <strong>{place}</strong>
              <p>{theme}</p>
            </li>
          ))}
        </ol>
        <Link className="section-route-link" href="/journey">
          Read the full journey →
        </Link>
      </section>

      <section className="section-block now-section" id="now" aria-labelledby="now-title">
        <div>
          <p className="section-kicker">Building now</p>
          <h2 id="now-title">Public repos.</h2>
          <p>Last four months on GitHub. Current job is Data Science Lead at Hana E Solutions.</p>
          <div className="build-preview">
            {featuredBuilds.map((build) => (
              <a key={build.repo} href={build.href} target="_blank" rel="noreferrer">
                <time dateTime={build.updated}>{build.updated}</time>
                <strong>{build.title}</strong>
                <span>{build.repo}</span>
              </a>
            ))}
          </div>
          <Link className="section-route-link align-left" href="/now">
            Open Building now →
          </Link>
          <Link className="section-route-link align-left" href="/future">
            Where I’m headed →
          </Link>
        </div>
        <div className="multiplier-note">
          <p className="section-kicker">Technical multiplier</p>
          <blockquote>
            Led two data scientists at Vista from May 2024 through July 2026,
            and kept reviewing the work directly.
          </blockquote>
          <p>
            Founded Knowledge Café — eight learning sessions reaching 60+
            colleagues across product, engineering, and operations.
          </p>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <div>
            <h2>Open to roles. Available now.</h2>
            <p className="availability-line footer-availability">{siteConfig.availability}</p>
          </div>
        </div>
        <nav aria-label="Contact and profiles">
          <a href="/resume.pdf">Download resume</a>
          <a href={`mailto:${siteConfig.email}`}>Email</a>
          <a href={siteConfig.sameAs[1]} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={siteConfig.sameAs[0]} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
        <p className="footer-note">
          Data Science Lead, Hana E Solutions · San Jose, CA / remote
        </p>
      </footer>
    </main>
  );
}
