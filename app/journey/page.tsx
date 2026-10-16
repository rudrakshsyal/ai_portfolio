import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journey · Rudraksh Syal",
  description:
    "Rudraksh Syal's progression from product analytics to decision science, production machine learning, pricing, and applied AI.",
};

const chapters = [
  {
    number: "01",
    years: "2021—Now",
    place: "Vista Tech · XO",
    role: "Senior Data Scientist · Remote",
    question: "How do we turn models into reliable operating systems?",
    narrative: "Ownership expanded across fleet-wide pricing, forecasting, production ML, and applied AI.",
    metrics: [["10+", "DPE models"], ["9", "US regions"], ["2", "LLM pipelines"]],
    evidence: [
      "Improved MSRP forecast accuracy from 71% to 78% and reversed EU Light Jet margin from −8% to +17%.",
      "Founded Knowledge Café and mentored junior data-science talent for more than two years.",
    ],
    signal: "Models → systems → multiplier",
  },
  {
    number: "02",
    years: "2019—2021",
    place: "84.51° · Kroger",
    role: "Senior Data Scientist · Cincinnati",
    question: "What caused the outcome—and what should we optimize next?",
    narrative: "Combined causal inference and optimization for merchandising and space-planning decisions.",
    metrics: [["10%", "observed lift"], ["4%", "true incremental"], ["26", "store variables"]],
    evidence: [
      "Used BSTS to separate observed endcap sales from true incremental impact.",
      "Applied integer optimization to new-store bakery shelf allocations.",
    ],
    signal: "Prediction → causality",
  },
  {
    number: "03",
    years: "2018—2019",
    place: "Purdue University",
    role: "MS · Business Analytics & Data Science",
    question: "How do we reason rigorously about decisions?",
    narrative: "Deepened the statistical and optimization foundations behind defensible decision systems.",
    metrics: [["MS", "graduate degree"], ["2019", "graduated"], ["BA + DS", "major"]],
    evidence: [
      "Connected modeling choices to business constraints and decision quality.",
      "Prepared for larger-scale causal and optimization work.",
    ],
    signal: "Intuition → rigor",
  },
  {
    number: "04",
    years: "2015—2018",
    place: "Practo Technologies",
    role: "Data Scientist · Bangalore",
    question: "How do we make product and sales data usable?",
    narrative: "Built the foundations in business intelligence, experimentation, predictive scoring, and NLP.",
    metrics: [["30%", "sales uplift"], ["$4k", "monthly tool cost"], ["Live", "self-serve BI"]],
    evidence: [
      "Built a real-time R/Shiny search-metrics application replacing a third-party SQL tool.",
      "Published buying-probability scores to Salesforce and used NLP plus A/B testing to diagnose friction.",
    ],
    signal: "Reporting → prediction",
  },
];

export default function JourneyPage() {
  return (
    <main className="case-study journey-page">
      <header className="case-header" aria-label="Journey navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span><strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#chapters">Chapters</a>
          <Link href="/work">Work</Link>
          <Link href="/now">Now &amp; Lab</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="journey-hero">
        <p className="case-chapter">Journey · 2015—Now</p>
        <h1>From making data visible to making systems dependable.</h1>
        <p>
          The through-line is not a particular model. It is an expanding level
          of responsibility for the decision—from understanding what happened
          to building the system that acts next.
        </p>
      </section>

      <section className="journey-progression" aria-label="Career progression">
        <span>Visibility</span><i>→</i><span>Prediction</span><i>→</i>
        <span>Causality</span><i>→</i><span>Optimization</span><i>→</i>
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
                {chapter.metrics.map(([value, label]) => <div key={label}><dd>{value}</dd><dt>{label}</dt></div>)}
              </dl>
              <ul>
                {chapter.evidence.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="journey-leadership">
        <p className="case-chapter">The leadership transition</p>
        <div>
          <h2>Still hands-on. Increasingly a multiplier.</h2>
          <p>
            Over the last two years, the role expanded beyond individual model
            delivery: mentoring junior talent, reviewing peer work, creating
            shared learning forums, and translating technical decisions across
            product, engineering, pricing, and operations.
          </p>
          <dl>
            <div><dt>Mentorship</dt><dd>2+ years</dd></div>
            <div><dt>Knowledge Café</dt><dd>8 sessions</dd></div>
            <div><dt>Reach</dt><dd>60+ colleagues</dd></div>
          </dl>
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/">← Back to portfolio</Link>
        <Link href="/now">What I’m exploring now →</Link>
      </footer>
    </main>
  );
}
