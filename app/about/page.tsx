import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About · Rudraksh Syal",
  description:
    "About Rudraksh Syal: a product-minded data science and ML leader working across measurement, experimentation, pricing, applied AI, and technical mentorship.",
};

const roleFits = [
  ["DS / Product DS", "Senior · Staff · Principal"],
  ["MLE", "Senior · Staff"],
  ["AI Engineer", "Applied systems"],
  ["FDE", "Technical + customer context"],
];

export default function AboutPage() {
  return (
    <main className="case-study about-page">
      <header className="case-header" aria-label="About navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span><strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#positioning">Positioning</a>
          <a href="#approach">Approach</a>
          <Link href="/work">Work</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="about-hero">
        <p className="case-chapter">About</p>
        <h1>Technical depth. Product judgment. People leadership.</h1>
        <p>
          I’m a hands-on data-science and ML leader with 10+ years of experience
          turning ambiguous product and operational problems into measurement,
          experimentation, pricing, forecasting, and applied-AI systems people can use.
        </p>
      </section>

      <section className="about-triad" id="positioning" aria-labelledby="triad-title">
        <header>
          <p className="case-chapter">Positioning</p>
          <h2 id="triad-title">The profile sits at the intersection.</h2>
        </header>
        <div className="about-triad-map" role="img" aria-label="Applied technical depth, cross-functional problem ownership, and technical leadership combine into hands-on technical leadership">
          <div className="triad-node depth"><span>01</span><strong>Applied technical depth</strong><small>ML · experimentation · AI</small></div>
          <i>+</i>
          <div className="triad-node ownership"><span>02</span><strong>Problem ownership</strong><small>Product · ops · economics</small></div>
          <i>+</i>
          <div className="triad-node multiplier"><span>03</span><strong>Technical multiplier</strong><small>Mentorship · review · learning</small></div>
          <div className="triad-result"><span>Result</span><strong>Hands-on technical leader</strong></div>
        </div>
      </section>

      <section className="about-fit" aria-labelledby="fit-title">
        <div>
          <p className="case-chapter">Role fit</p>
          <h2 id="fit-title">Best where systems and decisions meet.</h2>
          <p>
            The strongest fit is a senior individual-contributor or technical-lead
            role with meaningful implementation, broad problem ownership, and room
            to raise the quality of the surrounding team.
          </p>
        </div>
        <div className="about-role-grid">
          {roleFits.map(([role, level]) => (
            <article key={role}><strong>{role}</strong><span>{level}</span></article>
          ))}
        </div>
        <div className="about-role-map" role="img" aria-label="Preferred roles combine high hands-on depth with broad system ownership">
          <span className="map-y-top">Technical leadership</span>
          <span className="map-y-bottom">Individual execution</span>
          <span className="map-x-left">Model</span>
          <span className="map-x-right">System</span>
          <i className="role-zone" />
          <b>Best fit</b>
        </div>
      </section>

      <section className="about-approach" id="approach" aria-labelledby="approach-title">
        <header>
          <p className="case-chapter">How I work</p>
          <h2 id="approach-title">A repeatable path from ambiguity to operation.</h2>
        </header>
        <ol className="about-loop" aria-label="Working approach">
          <li><span>01</span><strong>Frame</strong><small>Define the behavior and decision.</small></li>
          <li><span>02</span><strong>Measure</strong><small>Choose outcomes, baselines, and guardrails.</small></li>
          <li><span>03</span><strong>Test / Model</strong><small>Use the right method for the question.</small></li>
          <li><span>04</span><strong>Ship</strong><small>Connect evidence to real workflows.</small></li>
          <li><span>05</span><strong>Learn</strong><small>Improve the next iteration.</small></li>
        </ol>
      </section>

      <section className="about-proof" aria-labelledby="proof-title">
        <header>
          <p className="case-chapter">Evidence</p>
          <h2 id="proof-title">A profile built across scales.</h2>
        </header>
        <div className="about-proof-grid">
          <article><strong>10+</strong><span>years across DS and ML</span></article>
          <article><strong>2,100+</strong><span>aircraft network</span></article>
          <article><strong>2</strong><span>production LLM pipelines</span></article>
          <article><strong>2+ yrs</strong><span>technical mentorship</span></article>
          <article><strong>10% → 4%</strong><span>observed to incremental lift</span></article>
          <article><strong>1</strong><span>US patent as co-inventor</span></article>
        </div>
      </section>

      <section className="about-foundations" aria-labelledby="foundations-title">
        <div>
          <p className="case-chapter">Foundations</p>
          <h2 id="foundations-title">Formal rigor, practical bias.</h2>
        </div>
        <ol>
          <li><time>2019</time><strong>Purdue University</strong><span>MS · Business Analytics &amp; Data Science</span></li>
          <li><time>2015</time><strong>BITS Pilani</strong><span>BE (Hons.) · MSc Applied Mathematics</span></li>
          <li><time>2025</time><strong>US 12,314,757 B1</strong><span>Named co-inventor · Adaptive resource scheduling</span></li>
        </ol>
      </section>

      <section className="about-contact" aria-labelledby="contact-title">
        <p className="case-chapter">Contact</p>
        <h2 id="contact-title">Interested in difficult systems and the decisions behind them.</h2>
        <nav aria-label="Contact links">
          <a href="mailto:rudrakshsyal@gmail.com">Email →</a>
          <a href="https://www.linkedin.com/in/rudraksh-syal/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/rudrakshsyal/" target="_blank" rel="noreferrer">GitHub ↗</a>
        </nav>
      </section>

      <footer className="case-footer">
        <Link href="/">← Back to portfolio</Link>
        <Link href="/journey">View the journey →</Link>
      </footer>
    </main>
  );
}
