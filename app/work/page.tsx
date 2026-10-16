import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work · Rudraksh Syal",
  description:
    "Selected product measurement, experimentation, data science, machine learning, pricing, and applied AI work by Rudraksh Syal.",
};

const systems = [
  {
    number: "02",
    category: "Applied AI · RAG · Retrieval",
    title: "Chamomile Contract Intelligence",
    summary:
      "A contract-parsing foundation extended into clause-aware hybrid retrieval and corpus-wide question answering for sales.",
    evidence: ["1,100+ contracts", "Hybrid search", "Bedrock + OpenSearch"],
    visual: "documents",
    href: "/work/contract-intelligence",
  },
  {
    number: "03",
    category: "Applied AI · Product intelligence",
    title: "Cancellation Policy Intelligence",
    summary:
      "A confidence-routed extraction workflow that translated operator contract language into marketplace trust signals.",
    evidence: ["532 operators", "84.7% badge-ready", "Haiku → Sonnet"],
    visual: "documents",
    href: "/work/cancellation-policy-badging",
  },
  {
    number: "04",
    category: "Pricing · Machine learning",
    title: "EU Light Jet Pricing",
    summary:
      "A deployed pricing model designed around operating economics and instant-booking decisions in a difficult market.",
    evidence: ["−8% → +17% margin", "55% → 20% loss-making", "~$7M / quarter"],
    visual: "margin",
    href: "/work/dynamic-pricing-engine#eu-light-jet",
  },
  {
    number: "05",
    category: "Product · Measurement · Experimentation",
    title: "Product Measurement",
    summary:
      "Causal inference, A/B testing, self-serve analytics, and multi-KPI measurement supporting product and merchandising decisions.",
    evidence: ["10% → 4% incremental", "A/B tests", "Self-serve analytics"],
    visual: "causal",
    href: "/work/measurement-experimentation",
  },
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "documents") {
    return <div className="library-project-viz documents" aria-label="Documents flow through an LLM pipeline into structured product information"><span>PDFs</span><i /><i /><b>LLM</b><i /><strong>Structured data</strong></div>;
  }
  if (type === "margin") {
    return <div className="library-project-viz margin" aria-label="Margin improved from negative eight percent to positive seventeen percent"><span>−8%</span><i className="loss" /><i className="gain" /><strong>+17%</strong></div>;
  }
  return <div className="library-project-viz causal" aria-label="Observed ten percent lift separated into four percent incremental sales"><i style={{ height: "80%" }}><b>10%</b></i><i style={{ height: "34%" }}><b>4%</b></i><span>Observed</span><span>Incremental</span></div>;
}

export default function WorkPage() {
  return (
    <main className="case-study work-library">
      <header className="case-header" aria-label="Work navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span>
          <strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#systems">Systems</a>
          <a href="#patent">Patent</a>
          <Link href="/#journey">Journey</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="library-hero">
        <p className="case-chapter">Work · 2015—Now</p>
        <h1>Systems, models, and decisions.</h1>
        <p>
          Selected work across product measurement, experimentation, pricing,
          machine learning, applied AI, causal inference, and optimization—organized
          around the decisions it made possible.
        </p>
      </section>

      <section className="library-feature" aria-labelledby="feature-title">
        <div className="library-feature-copy">
          <p className="case-chapter">01 · Flagship case study</p>
          <h2 id="feature-title">Dynamic Pricing Engine</h2>
          <p>
            A fleet-wide system that estimates sellable capacity, models
            price-sensitive booking behavior, and solves for a yield on every
            departure date.
          </p>
          <div className="library-tags" aria-label="Dynamic Pricing Engine disciplines">
            <span>Forecasting</span>
            <span>Elasticity</span>
            <span>Optimization</span>
          </div>
          <Link href="/work/dynamic-pricing-engine">Read the full case study →</Link>
        </div>
        <div className="library-system-map" aria-label="Supply and demand combine in a pricing decision">
          <div><span>Supply</span><strong>Usable capacity</strong></div>
          <i aria-hidden="true">+</i>
          <div><span>Demand</span><strong>Booking response</strong></div>
          <i aria-hidden="true">→</i>
          <div className="decision-node"><span>Decision</span><strong>Yield</strong></div>
        </div>
        <dl className="library-feature-proof">
          <div><dt>Pilot</dt><dd>One 43-jet fleet</dd></div>
          <div><dt>First-month outcome</dt><dd>−28% off-fleeting</dd></div>
          <div><dt>Decision surface</dt><dd>7 × 7 route grid</dd></div>
        </dl>
      </section>

      <section className="library-section" id="systems" aria-labelledby="systems-title">
        <header>
          <p className="case-chapter">Selected systems</p>
          <h2 id="systems-title">Different methods. The same standard: useful in practice.</h2>
        </header>
        <div className="library-grid">
          {systems.map((system) => (
            <article key={system.number}>
              <div className="library-card-top">
                <span>{system.number}</span>
                <small>{system.category}</small>
              </div>
              <h3>{system.title}</h3>
              <p>{system.summary}</p>
              <ProjectVisual type={system.visual} />
              <div className="library-evidence">
                {system.evidence.map((item) => <span key={item}>{item}</span>)}
              </div>
              {system.href ? (
                <Link className="library-card-link" href={system.href}>
                  Read the case study →
                </Link>
              ) : (
                <small className="library-coming">Detailed case study planned</small>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="library-patent" id="patent" aria-labelledby="patent-title">
        <div className="library-patent-heading">
          <p className="case-chapter">06 · Intellectual property</p>
          <span>US 12,314,757 B1</span>
        </div>
        <div className="library-patent-main">
          <p>Named co-inventor</p>
          <h2 id="patent-title">Efficient resource scheduling using adaptive scheduling criteria.</h2>
          <p className="library-patent-summary">
            A feedback-based approach that compares actual resource utilization
            with a target, detects meaningful deviation, and adapts the criteria
            applied to subsequent resource requests.
          </p>
          <a
            href="https://patents.google.com/patent/US12314757B1/en"
            target="_blank"
            rel="noreferrer"
          >
            View the patent record ↗
          </a>
        </div>
        <div className="library-patent-flow" role="img" aria-label="Resource requests are measured against utilization targets, causing scheduling criteria to adapt for subsequent requests">
          <div><span>01</span><strong>Resource requests</strong></div><i>→</i>
          <div><span>02</span><strong>Measure utilization</strong></div><i>→</i>
          <div><span>03</span><strong>Compare with target</strong></div><i>→</i>
          <div><span>04</span><strong>Adapt criteria</strong></div>
        </div>
        <details className="library-patent-detail">
          <summary>How the invention works</summary>
          <ol>
            <li><span>01</span><p>Receive requests from multiple consumers competing for a shared set of resources.</p></li>
            <li><span>02</span><p>Compare actual utilization for each usage period with its target utilization.</p></li>
            <li><span>03</span><p>When deviation crosses a threshold, adjust a scheduling criterion for future requests.</p></li>
          </ol>
          <p>
            Public contribution language is deliberately conservative: Rudraksh
            is a named co-inventor on the team’s patented adaptive scheduling approach.
          </p>
        </details>
      </section>

      <section className="library-principles" aria-labelledby="principles-title">
        <p className="case-chapter">Across the portfolio</p>
        <div>
          <h2 id="principles-title">The recurring pattern.</h2>
          <ol>
            <li><span>01</span><strong>Start with the decision, not the model.</strong></li>
            <li><span>02</span><strong>Define how success will be measured before building.</strong></li>
            <li><span>03</span><strong>Use complexity only where it earns its place.</strong></li>
            <li><span>04</span><strong>Make the output explainable to the people using it.</strong></li>
          </ol>
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/">← Back to portfolio</Link>
        <a href="mailto:rudrakshsyal@gmail.com">Discuss the work</a>
      </footer>
    </main>
  );
}
