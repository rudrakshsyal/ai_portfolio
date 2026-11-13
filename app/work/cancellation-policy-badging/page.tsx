import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "../../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Cancellation Policy Intelligence · Rudraksh Syal",
  description:
    "A production LLM workflow that converted refund terms for about 600 operators into customer-readable marketplace trust signals. About 85% were badge-ready automatically.",
  path: "/work/cancellation-policy-badging",
});

const policySteps = [
  { number: "01", label: "Contracts", detail: "~600 operators" },
  { number: "02", label: "Extract", detail: "Policy language" },
  { number: "03", label: "Route", detail: "Haiku → Sonnet" },
  { number: "04", label: "Validate", detail: "Human fallback" },
  { number: "05", label: "Publish", detail: "XO marketplace" },
];

export default function CancellationPolicyBadgingPage() {
  return (
    <main className="case-study ci-case">
      <header className="case-header" aria-label="Cancellation Policy Intelligence navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span>
          <strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#system">System</a>
          <a href="#evaluation">Evaluation</a>
          <a href="#role">My role</a>
          <Link href="/work">All work</Link>
          <Link href="/resume">Resume</Link>
        </nav>
      </header>

      <section className="ci-hero" id="overview">
        <div className="ci-hero-copy">
          <p className="case-chapter">03 · Cancellation Policy Intelligence</p>
          <h1>From cancellation clauses to customer-ready policy.</h1>
          <p>LLM extraction of operator refund terms into badges a customer can read before booking.</p>
        </div>
        <dl className="ci-proof" aria-label="Cancellation policy project scale">
          <div>
            <dt>Operators</dt>
            <dd>~600</dd>
          </div>
          <div>
            <dt>Badge-ready automatically</dt>
            <dd>~85%</dd>
          </div>
          <div>
            <dt>Uncertain cases</dt>
            <dd>Human review</dd>
          </div>
        </dl>
      </section>

      <section className="ci-system" id="system" aria-labelledby="policy-system-title">
        <header>
          <p className="case-chapter">System view</p>
          <h2 id="policy-system-title">Use the smaller model first. Escalate ambiguity deliberately.</h2>
        </header>
        <div
          className="ci-pipeline ci-policy-pipeline"
          role="img"
          aria-label="Operator contracts are extracted, routed through Haiku and Sonnet according to ambiguity, validated with human fallback, and published as marketplace policy badges"
        >
          {policySteps.map((step, index) => (
            <div className="ci-pipeline-group" key={step.number}>
              <article>
                <span>{step.number}</span>
                <strong>{step.label}</strong>
                <small>{step.detail}</small>
              </article>
              {index < policySteps.length - 1 ? <i aria-hidden="true">→</i> : null}
            </div>
          ))}
        </div>
        <p className="ci-system-note">
          Clear policies followed the inexpensive first-pass path. Ambiguous
          language received additional reasoning, and unresolved source
          ambiguity was deferred to human review rather than disguised as model
          confidence.
        </p>
      </section>

      <section className="ci-pipelines" aria-labelledby="policy-decisions-title">
        <header>
          <p className="case-chapter">Two product decisions</p>
          <h2 id="policy-decisions-title">The output had to be both operationally efficient and safe to show customers.</h2>
        </header>
        <div className="ci-pipeline-cards">
          <article>
            <div className="ci-card-heading">
              <span>01</span>
              <p>Cost-aware inference</p>
            </div>
            <h3>Reserve deeper reasoning for the policies that need it.</h3>
            <p>
              Claude Haiku handled the fast, inexpensive first pass. Policies
              that could not be converted confidently into the required
              structure were escalated to Claude Sonnet instead of paying the
              larger-model cost for every document.
            </p>
            <div className="ci-policy-viz" aria-label="Policies are routed from Haiku to Sonnet when additional reasoning is required">
              <div className="ci-policy-docs">
                <span />
                <span />
                <span />
                <b>~600 operators</b>
              </div>
              <i>→</i>
              <div className="ci-badges">
                <span>Haiku · first pass</span>
                <span>Sonnet · escalation</span>
                <span>Human · unresolved</span>
              </div>
            </div>
          </article>

          <article>
            <div className="ci-card-heading">
              <span>02</span>
              <p>Product semantics</p>
            </div>
            <h3>Translate legal clauses into a consistent customer decision.</h3>
            <p>
              I worked with product to define the flexibility tiers and
              refund-eligibility windows the interface could show consistently.
              The pipeline produced structured outputs against that shared
              vocabulary rather than presenting free-form model summaries.
            </p>
            <div className="ci-route-map" aria-label="Policy clauses become structured flexibility tiers and refund windows">
              <div><b>Clause</b><small>Source evidence</small></div>
              <i>→</i>
              <div><b>Schema</b><small>Structured fields</small></div>
              <i>→</i>
              <div><b>Tier</b><small>Flexibility</small></div>
              <i>→</i>
              <div className="ci-route-result"><b>Badge</b><small>Marketplace</small></div>
            </div>
          </article>
        </div>
      </section>

      <section className="ci-product" id="evaluation" aria-labelledby="policy-evaluation-title">
        <div>
          <p className="case-chapter">Evaluation &amp; fallback</p>
          <h2 id="policy-evaluation-title">Uncertainty became a workflow state—not a hidden error.</h2>
        </div>
        <div className="ci-product-grid">
          <article>
            <span>01</span>
            <strong>Validate</strong>
            <p>Checked structured policy outputs against source language and the customer-facing definitions agreed with product.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Escalate</strong>
            <p>Routed difficult policies to a stronger model only when the first pass could not resolve the required fields.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Defer</strong>
            <p>Cases that were not badge-ready went to manual review instead of being shown as confident policy.</p>
          </article>
        </div>
      </section>

      <section className="ci-role" id="role" aria-labelledby="policy-role-title">
        <div>
          <p className="case-chapter">My role</p>
          <h2 id="policy-role-title">Applied AI connected directly to a customer trust decision.</h2>
        </div>
        <ul>
          <li>
            <span>Build</span>
            <p>Built the production policy-extraction and structured-output workflow.</p>
          </li>
          <li>
            <span>Route</span>
            <p>Designed the Haiku-first, Sonnet-escalation pattern around ambiguity, cost, and review risk.</p>
          </li>
          <li>
            <span>Define</span>
            <p>Worked with product to convert policy language into stable flexibility tiers and refund-window definitions.</p>
          </li>
          <li>
            <span>Ship</span>
            <p>Turned the structured outputs into live trust signals within the XO marketplace experience.</p>
          </li>
        </ul>
      </section>

      <section className="ci-disclosure" aria-labelledby="policy-disclosure-title">
        <p className="case-chapter">Public case-study boundary</p>
        <div>
          <h2 id="policy-disclosure-title">System behavior is public. Operator contract language is not.</h2>
          <p>
            This case study describes scale, model routing, evaluation, and
            product use. Proprietary policies, prompts, customer information,
            and operator-specific outputs are intentionally omitted.
          </p>
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/work/contract-intelligence">← Chamomile Contract Intelligence</Link>
        <Link href="/work">All work →</Link>
      </footer>
    </main>
  );
}
