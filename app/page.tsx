"use client";

import { useState } from "react";
import Link from "next/link";

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
    title: "Chamomile Contract Intelligence",
    copy: "Clause-aware hybrid retrieval that made a 4,000+ contract corpus queryable by regional sales teams.",
    proof: "Bedrock · OpenSearch · Llama 3.1 8B",
    visual: "documents",
    href: "/work/contract-intelligence",
  },
  {
    number: "02",
    title: "EU Light Jet Pricing",
    copy: "A deployed pricing model that reversed loss-making economics while improving the quality of instant-booking decisions.",
    proof: "−8% → +17% margin",
    visual: "margin",
    href: "/work/dynamic-pricing-engine#eu-light-jet",
  },
  {
    number: "03",
    title: "Product Measurement",
    copy: "Experimentation, causal inference, and self-serve analytics for customer journeys and merchandising decisions.",
    proof: "10% observed → 4% incremental",
    visual: "causal",
    href: "/work/measurement-experimentation",
  },
];

const journey = [
  ["2015", "Practo", "Making data usable"],
  ["2019", "Purdue", "Deepening foundations"],
  ["2019", "84.51°", "Decision science at scale"],
  ["2021", "Vista", "Production pricing & ML"],
  ["Now", "Applied AI", "Reliable intelligent systems"],
];

export default function Home() {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("base");
  const scenario = scenarios[activeScenario];

  return (
    <main className="site-shell">
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Rudraksh Syal, home">
          <span className="brand-mark" aria-hidden="true">
            RS
          </span>
          <span>Rudraksh Syal</span>
        </a>
        <span className="header-note">Portfolio · 2015—Now</span>
        <nav className="primary-nav" aria-label="Portfolio sections">
          <Link href="/work">Work</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/now">Now &amp; Lab</Link>
          <Link href="/about">About</Link>
        </nav>
        <button
          className="studio-lock"
          type="button"
          disabled
          aria-label="Career Studio, private workspace planned for a later release"
        >
          <span aria-hidden="true">▢</span> Career Studio
        </button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="role-line">Data scientist · ML engineer · Product-minded technical leader</p>
          <h1 id="hero-title">
            Building practical data, ML, and AI systems for{" "}
            <em>complex decisions.</em>
          </h1>
          <p className="hero-summary">
            I’m a hands-on technical leader with 10+ years across data science,
            machine learning, product measurement, experimentation, pricing,
            and applied AI—turning ambiguous problems into systems and evidence
            people can understand, trust, and use.
          </p>
          <div className="hero-actions" aria-label="Explore the portfolio">
            <a className="text-action" href="#work">
              Explore selected work <span aria-hidden="true">↘</span>
            </a>
            <Link className="quiet-action" href="/journey">
              View my journey
            </Link>
          </div>
          <div className="hero-credential-line" aria-label="Career highlights">
            <span>10+ years</span>
            <span>Measurement → models → products</span>
            <span>Production ML &amp; AI</span>
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
            Aggregated, representative operational data from one fleet.
          </p>
        </article>
      </section>

      <section className="section-block selected-work" id="work" aria-labelledby="work-title">
        <header className="section-heading">
          <p className="section-kicker">Selected work</p>
          <h2 id="work-title">Three other ways the work became useful.</h2>
          <p>Focused evidence, with the full technical stories reserved for deeper case studies.</p>
        </header>
        <div className="work-list">
          {selectedWork.map((project) => (
            <article key={project.number}>
              <span className="project-number">{project.number}</span>
              <h3>{project.title}</h3>
              <p>{project.copy}</p>
              <div className={`home-project-viz ${project.visual}`} aria-hidden="true">
                {project.visual === "documents" && <><i /><i /><i /><span>Structured</span></>}
                {project.visual === "margin" && <><span>−8%</span><i /><i /><span>+17%</span></>}
                {project.visual === "causal" && <><i><b>10%</b></i><i><b>4%</b></i><span>Observed → incremental</span></>}
              </div>
              <strong>{project.proof}</strong>
              <Link className="home-project-link" href={project.href}>View project →</Link>
            </article>
          ))}
        </div>
        <Link className="coming-note" href="/work">Explore the complete work library →</Link>
      </section>

      <section className="section-block journey-section" id="journey" aria-labelledby="journey-title">
        <header className="section-heading compact-heading">
          <p className="section-kicker">Journey</p>
          <h2 id="journey-title">A decade of expanding the decision surface.</h2>
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
        <Link className="section-route-link" href="/journey">Read the full journey →</Link>
      </section>

      <section className="section-block now-section" id="now" aria-labelledby="now-title">
        <div>
          <p className="section-kicker">Now &amp; Lab</p>
          <h2 id="now-title">Learning in public, without pretending the work is finished.</h2>
          <p>
            Exploring reliable Agentic AI systems, deep learning, evaluation,
            and the transition from promising experiments to dependable applications.
          </p>
          <div className="topic-line" aria-label="Current areas of interest">
            <span>Agentic AI</span>
            <span>Evaluation</span>
            <span>Deep learning</span>
          </div>
          <Link className="section-route-link align-left" href="/now">Open Now &amp; Lab →</Link>
        </div>
        <div className="multiplier-note">
          <p className="section-kicker">Technical multiplier</p>
          <blockquote>
            Remaining hands-on while helping other practitioners reason,
            review, and grow.
          </blockquote>
          <p>
            Mentored junior data-science talent for 2+ years and founded
            Knowledge Café—eight learning sessions reaching 60+ colleagues
            across product, engineering, and operations.
          </p>
        </div>
      </section>

      <footer className="site-footer" id="about">
        <div>
          <p className="section-kicker">About the work</p>
          <h2>
            Interested in difficult problems at the intersection of data,
            ML, AI, product measurement, decisions, and real-world execution.
          </h2>
        </div>
        <nav aria-label="Contact and profiles">
          <a href="mailto:rudrakshsyal@gmail.com">Email</a>
          <a href="https://github.com/rudrakshsyal/" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rudraksh-syal/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="#top">Back to top ↑</a>
        </nav>
        <p className="footer-note">Public portfolio foundation · Career Studio remains private.</p>
      </footer>
    </main>
  );
}
