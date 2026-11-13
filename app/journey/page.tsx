import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Journey · Rudraksh Syal",
  description:
    "Rudraksh Syal's roles from Practo and 84.51° through Vista to Data Science Lead at Hana E Solutions, including the dates and titles on his current résumé.",
  path: "/journey",
});

const chapters = [
  {
    number: "01",
    years: "Oct 2026—Present",
    place: "Hana E Solutions",
    role: "Data Science Lead · Remote, San Jose, CA",
    question: "How does an agentic workflow start from a blank page for a client?",
    narrative:
      "Founding data science contributor. Leading agentic AI workflow design from scratch for two clients, mainly in pricing. Both engagements are at proof of concept, so this chapter has no production outcome yet.",
    metrics: [
      ["2", "client engagements"],
      ["Pricing", "first focus"],
      ["POC", "current stage"],
    ],
    evidence: [
      "The work is agentic AI decision workflows, built from scratch rather than extended from an existing platform.",
      "No adoption, accuracy, or revenue figure is claimed for these engagements.",
    ],
    signal: "Current role",
  },
  {
    number: "02",
    years: "May 2024—Jul 2026",
    place: "Vista",
    role: "Data Science Lead · San Jose, CA (Remote)",
    question: "How do we put an LLM on top of a pricing system without hiding the decision?",
    narrative:
      "Led two data scientists, set technical direction, reviewed code and model designs, and owned architecture for pricing and agentic AI systems.",
    metrics: [
      ["7", "U.S. regions"],
      ["~240", "requests/day"],
      ["85–90%", "acceptance"],
    ],
    evidence: [
      "Led a custom Python LLM tool-calling layer on Claude via AWS Bedrock, on top of the Dynamic Pricing Engine. A pricing manager approves or rejects each recommendation.",
      "A six-quarter program reached a parallel run, then went live. Rejections fell from ~30% to 10–15% across 3 fleets.",
      "Built hybrid retrieval over 4,000+ contracts. One 43-aircraft fleet saw 28% fewer off-fleet bookings in the first month of the pricing engine.",
    ],
    signal: "Lead · systems",
  },
  {
    number: "03",
    years: "Oct 2021—Apr 2024",
    place: "Vista",
    role: "Senior Data Scientist · San Jose, CA (Remote)",
    question: "How do forecasts, costs, and contract language become something operators can use?",
    narrative:
      "Senior data scientist work on cancellation-policy extraction, the EU cost model, booking forecasts, and lead propensity before the Data Science Lead chapter.",
    metrics: [
      ["~600", "operators"],
      ["~85%", "badge-ready"],
      ["−8% → +17%", "EU margin"],
    ],
    evidence: [
      "Structured refund terms for ~600 operators into cancellation-policy badges with product and engineering. About 85% were badge-ready automatically; uncertain cases went to manual review.",
      "Built a gradient-boosted EU cost model, validated in shadow mode before relaunch. Loss-making bookings fell from 55% to 20%.",
      "Raised booking forecast accuracy for 14 fleet categories from 71% to 78%, and built XGBoost lead-propensity scores integrated into Salesforce.",
    ],
    signal: "Models → production",
  },
  {
    number: "04",
    years: "Jul 2019—Oct 2021",
    place: "84.51° · Kroger",
    role: "Senior Data Scientist · Cincinnati, OH",
    question: "What caused the outcome—and what should we optimize next?",
    narrative: "Combined causal inference and optimization for merchandising and space-planning decisions.",
    metrics: [
      ["10%", "observed benchmark"],
      ["4%", "estimated lift"],
      ["26", "store features"],
    ],
    evidence: [
      "Used BSTS and synthetic control for Quaker endcaps. The estimated 4% lift, against a 10% general-endcap benchmark, informed the decision to pause an Eastern-division rollout.",
      "Optimized bakery footage with Random Forest and integer programming. Nine pilot stores recorded 14% higher early sales, treated as directional.",
    ],
    signal: "Prediction → causality",
  },
  {
    number: "05",
    years: "2019",
    place: "Purdue University",
    role: "M.S. · Business Analytics & Data Science",
    question: "How do we reason rigorously about decisions?",
    narrative: "M.S. in Business Analytics and Data Science, completed in 2019.",
    metrics: [
      ["M.S.", "degree"],
      ["2019", "graduated"],
      ["BA + DS", "focus"],
    ],
    evidence: [
      "Formal training in analytics and data science between Practo and 84.51°.",
      "BITS Pilani, B.E. (Hons.) and M.Sc. in Applied Mathematics, 2015, is the undergraduate foundation.",
    ],
    signal: "Foundations",
  },
  {
    number: "06",
    years: "Jun 2015—Apr 2018",
    place: "Practo Technologies",
    role: "Data Scientist · Bangalore, India",
    question: "How do we make product and sales data usable?",
    narrative: "Built internal analytics applications and used NLP plus experiments to find conversion drop-offs.",
    metrics: [
      ["$4K", "monthly vendor cost"],
      ["R/Shiny", "and Flask"],
      ["A/B", "and sentiment NLP"],
    ],
    evidence: [
      "Built R/Shiny and Flask reporting apps that replaced a $4K/month-per-person vendor.",
      "Used sentiment NLP and A/B tests to find conversion drop-offs.",
    ],
    signal: "Reporting → diagnosis",
  },
];

export default function JourneyPage() {
  return (
    <main className="case-study journey-page">
      <header className="case-header" aria-label="Journey navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span>
          <strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#chapters">Chapters</a>
          <Link href="/work">Work</Link>
          <Link href="/now">Building now</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="journey-hero">
        <p className="case-chapter">Journey · 2015—Present</p>
        <h1>Roles, recent first.</h1>
        <p>
          Vista ends July 2026. Data Science Lead at Hana E Solutions starts
          October 2026. I am also available now.
        </p>
      </section>

      <section className="journey-progression" aria-label="Career progression">
        <span>Visibility</span>
        <i>→</i>
        <span>Prediction</span>
        <i>→</i>
        <span>Causality</span>
        <i>→</i>
        <span>Optimization</span>
        <i>→</i>
        <span>Production systems</span>
      </section>

      <section className="journey-chapters" id="chapters" aria-label="Career chapters">
        {chapters.map((chapter) => (
          <article key={chapter.number}>
            <aside>
              <span>{chapter.number}</span>
              <time>{chapter.years}</time>
              <small>{chapter.signal}</small>
            </aside>
            <div className="journey-chapter-main">
              <p className="case-chapter">{chapter.role}</p>
              <h2>{chapter.place}</h2>
              <blockquote>{chapter.question}</blockquote>
              <p>{chapter.narrative}</p>
              <dl className="journey-metrics">
                {chapter.metrics.map(([value, label]) => (
                  <div key={label}>
                    <dd>{value}</dd>
                    <dt>{label}</dt>
                  </div>
                ))}
              </dl>
              <ul>
                {chapter.evidence.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="journey-leadership">
        <p className="case-chapter">The leadership transition</p>
        <div>
          <h2>Still hands-on. Also a multiplier.</h2>
          <p>
            May 2024–July 2026 at Vista: led two data scientists, reviewed code
            and models, and owned pricing and agentic architecture. Knowledge
            Café was eight sessions for 60+ colleagues.
          </p>
          <dl>
            <div>
              <dt>Mentorship</dt>
              <dd>May 2024—Jul 2026</dd>
            </div>
            <div>
              <dt>Knowledge Café</dt>
              <dd>8 sessions</dd>
            </div>
            <div>
              <dt>Reach</dt>
              <dd>60+ colleagues</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/">← Back to portfolio</Link>
        <Link href="/now">What I’m building now →</Link>
      </footer>
    </main>
  );
}
