import type { Metadata } from "next";
import Link from "next/link";
import { CaseFooter } from "../components/CaseFooter";
import { pageMetadata } from "../../lib/metadata";
import { siteConfig, sitePath, targetRoles } from "../../lib/site";

export const dynamic = "force-static";

export const metadata: Metadata = pageMetadata({
  title: "About · Rudraksh Syal",
  description:
    "About Rudraksh Syal, Data Science Lead. 11+ years across measurement, pricing, and applied AI. Open to staff, principal, agentic, forward-deployed, and tech-lead roles.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="case-study about-page">
      <header className="case-header" aria-label="About navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span>
          <strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#positioning">Positioning</a>
          <a href="#approach">Approach</a>
          <Link href="/work">Work</Link>
          <Link href="/resume">Resume</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="about-hero">
        <p className="case-chapter">About</p>
        <h1>Hands-on lead. Still shipping.</h1>
        <p>
          11+ years turning product and operating problems into measurement,
          pricing, forecasting, and applied AI that people use.
        </p>
        <p className="availability-line about-availability">{siteConfig.availability}</p>
      </section>

      <section className="about-triad" id="positioning" aria-labelledby="triad-title">
        <header>
          <p className="case-chapter">Positioning</p>
          <h2 id="triad-title">Three parts of the profile.</h2>
        </header>
        <div
          className="about-triad-map"
          role="img"
          aria-label="Applied technical depth, cross-functional problem ownership, and technical leadership combine into hands-on technical leadership"
        >
          <div className="triad-node depth">
            <span>01</span>
            <strong>Applied technical depth</strong>
            <small>ML · experimentation · AI</small>
          </div>
          <i>+</i>
          <div className="triad-node ownership">
            <span>02</span>
            <strong>Problem ownership</strong>
            <small>Product · ops · economics</small>
          </div>
          <i>+</i>
          <div className="triad-node multiplier">
            <span>03</span>
            <strong>Technical multiplier</strong>
            <small>Mentorship · review · learning</small>
          </div>
          <div className="triad-result">
            <span>Result</span>
            <strong>Hands-on technical leader</strong>
          </div>
        </div>
      </section>

      <section className="about-fit" aria-labelledby="fit-title">
        <div>
          <p className="case-chapter">Role fit</p>
          <h2 id="fit-title">Roles I’m pursuing.</h2>
          <p>Implementation plus ownership of the decision.</p>
        </div>
        <div className="about-role-grid">
          {targetRoles.map((role) => (
            <article key={role}>
              <strong>{role}</strong>
              <span>Open · available now</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-approach" id="approach" aria-labelledby="approach-title">
        <header>
          <p className="case-chapter">How I work</p>
          <h2 id="approach-title">From ambiguity to operation.</h2>
        </header>
        <ol className="about-loop" aria-label="Working approach">
          <li>
            <span>01</span>
            <strong>Frame</strong>
            <small>Define the behavior and decision.</small>
          </li>
          <li>
            <span>02</span>
            <strong>Measure</strong>
            <small>Choose outcomes, baselines, and guardrails.</small>
          </li>
          <li>
            <span>03</span>
            <strong>Test / Model</strong>
            <small>Use the right method for the question.</small>
          </li>
          <li>
            <span>04</span>
            <strong>Ship</strong>
            <small>Connect evidence to real workflows.</small>
          </li>
          <li>
            <span>05</span>
            <strong>Learn</strong>
            <small>Improve the next iteration.</small>
          </li>
        </ol>
      </section>

      <section className="about-proof" aria-labelledby="proof-title">
        <header>
          <p className="case-chapter">Evidence</p>
          <h2 id="proof-title">Proof, at a glance.</h2>
        </header>
        <div className="about-proof-grid">
          <article>
            <strong>11+</strong>
            <span>years across DS and ML</span>
          </article>
          <article>
            <strong>7</strong>
            <span>U.S. regions in the pricing layer</span>
          </article>
          <article>
            <strong>~600</strong>
            <span>operators, ~85% badge-ready</span>
          </article>
          <article>
            <strong>4,000+</strong>
            <span>contracts in hybrid RAG</span>
          </article>
          <article>
            <strong>2</strong>
            <span>data scientists led, 2024–2026</span>
          </article>
          <article>
            <strong>1</strong>
            <span>US patent as co-inventor</span>
          </article>
        </div>
      </section>

      <section className="about-foundations" aria-labelledby="foundations-title">
        <div>
          <p className="case-chapter">Foundations</p>
          <h2 id="foundations-title">Education and patent.</h2>
        </div>
        <ol>
          <li>
            <time>2019</time>
            <strong>Purdue University</strong>
            <span>M.S. · Business Analytics &amp; Data Science</span>
          </li>
          <li>
            <time>2015</time>
            <strong>BITS Pilani</strong>
            <span>B.E. (Hons.) · M.Sc. Applied Mathematics</span>
          </li>
          <li>
            <time>2025</time>
            <strong>US 12,314,757 B1</strong>
            <span>Named co-inventor · Adaptive resource scheduling</span>
          </li>
        </ol>
      </section>

      <section className="about-contact" aria-labelledby="contact-title">
        <p className="case-chapter">Contact</p>
        <h2 id="contact-title">{siteConfig.availability}</h2>
        <nav aria-label="Contact links">
          <a href={sitePath("/resume.pdf")}>Download resume →</a>
          <a href={`mailto:${siteConfig.email}`}>Email →</a>
          <a href={siteConfig.sameAs[0]} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={siteConfig.sameAs[1]} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
      </section>

      <CaseFooter backHref="/" backLabel="← Portfolio" nextHref="/journey" nextLabel="Journey →" />
    </main>
  );
}
