import type { Metadata } from "next";
import Link from "next/link";
import { CaseFooter } from "../../components/CaseFooter";
import { pageMetadata } from "../../../lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Agentic Pricing Layer · Rudraksh Syal",
  description:
    "An LLM tool-calling pricing layer on Claude via AWS Bedrock. Parallel run to live use across 7 U.S. regions, about 240 requests a day, with 85–90% of recommendations accepted.",
  path: "/work/agentic-pricing",
});

const steps = [
  { number: "01", label: "Ask", detail: "Pricing question" },
  { number: "02", label: "Call tools", detail: "Forecasts · Snowflake" },
  { number: "03", label: "Explain", detail: "Pricing drivers" },
  { number: "04", label: "Approve", detail: "Manager decision" },
  { number: "05", label: "Trace", detail: "LangSmith" },
];

export default function AgenticPricingPage() {
  return (
    <main className="case-study ci-case">
      <header className="case-header" aria-label="Agentic pricing navigation">
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
          <p className="case-chapter">02 · Agentic pricing layer</p>
          <h1>A recommendation the pricing manager can accept or reject.</h1>
          <p>
            On top of the Dynamic Pricing Engine, a custom Python tool-calling
            layer lets Claude call forecasting and Snowflake tools, explain the
            pricing drivers, and wait for a person. It moved from a parallel run
            to live use across 7 U.S. regions.
          </p>
        </div>
        <dl className="ci-proof" aria-label="Agentic pricing layer outcomes">
          <div>
            <dt>U.S. regions</dt>
            <dd>7</dd>
          </div>
          <div>
            <dt>Live volume</dt>
            <dd>~240/day</dd>
          </div>
          <div>
            <dt>Accepted</dt>
            <dd>85–90%</dd>
          </div>
        </dl>
      </section>

      <section className="ci-system" id="system" aria-labelledby="agent-system-title">
        <header>
          <p className="case-chapter">System view</p>
          <h2 id="agent-system-title">Tools first. An explanation second. A person last.</h2>
        </header>
        <div
          className="ci-pipeline ci-policy-pipeline"
          role="img"
          aria-label="A pricing question calls forecasting and Snowflake tools, explains drivers, waits for manager approval, and is traced in LangSmith"
        >
          {steps.map((step, index) => (
            <div className="ci-pipeline-group" key={step.number}>
              <article>
                <span>{step.number}</span>
                <strong>{step.label}</strong>
                <small>{step.detail}</small>
              </article>
              {index < steps.length - 1 ? <i aria-hidden="true">→</i> : null}
            </div>
          ))}
        </div>
        <p className="ci-system-note">
          The layer runs on Claude Sonnet, Haiku, and Opus through AWS Bedrock,
          in custom Python with no agent framework. The public record names
          those three models and does not specify a separate job for each one.
        </p>
      </section>

      <section className="ci-pipelines" aria-labelledby="agent-decisions-title">
        <header>
          <p className="case-chapter">Decisions that were explicit</p>
          <h2 id="agent-decisions-title">Adoption depended on a parallel run and a visible veto.</h2>
        </header>
        <div className="ci-pipeline-cards">
          <article>
            <div className="ci-card-heading">
              <span>01</span>
              <p>Human approval</p>
            </div>
            <h3>Every recommendation is accepted or rejected by a pricing manager.</h3>
            <p>
              The model explains drivers from the structured tool results. It
              does not publish a price on its own. That approve-or-reject action
              is also the outcome the evaluation watches.
            </p>
          </article>
          <article>
            <div className="ci-card-heading">
              <span>02</span>
              <p>Parallel run, then live</p>
            </div>
            <h3>Six quarters with the people who would have to use it.</h3>
            <p>
              The program covered 7 U.S. regions, with 5–8 fleet pricing managers
              and 2 revenue leaders in each region, reporting up to the COO and
              CPO. A parallel run in quarter six won buy-in. The layer went live
              in quarter seven.
            </p>
          </article>
        </div>
      </section>

      <section className="ci-product" id="evaluation" aria-labelledby="agent-evaluation-title">
        <div>
          <p className="case-chapter">Evaluation</p>
          <h2 id="agent-evaluation-title">Acceptance rate is the success metric.</h2>
        </div>
        <div className="ci-product-grid">
          <article>
            <span>01</span>
            <strong>Judge and outcome</strong>
            <p>
              LLM-as-a-judge evaluations were tied to approve and reject
              outcomes. Acceptance rate, not a model score alone, was the
              success metric.
            </p>
          </article>
          <article>
            <span>02</span>
            <strong>What changed</strong>
            <p>
              Rejections fell from about 30% to 10–15%, which is the same band
              as 85–90% acceptance. Live volume settled at about 240 requests a
              day across 3 fleets.
            </p>
          </article>
          <article>
            <span>03</span>
            <strong>Guardrails and traces</strong>
            <p>
              Guardrails were written in custom Python. Runs were traced with
              LangSmith. The public write-up does not list the individual
              guardrail rules.
            </p>
          </article>
        </div>
      </section>

      <section className="ci-role" id="role" aria-labelledby="agent-role-title">
        <div>
          <p className="case-chapter">My role</p>
          <h2 id="agent-role-title">Architecture, the service, and the dashboard other teams opened.</h2>
        </div>
        <ul>
          <li>
            <span>Lead</span>
            <p>
              As Data Science Lead at Vista from May 2024 to July 2026, led the
              design and the two data scientists on pricing and agentic AI
              architecture, including code and model review.
            </p>
          </li>
          <li>
            <span>Expose</span>
            <p>
              Exposed the layer as an API and service consumed by other teams.
              It feeds a live V1 dashboard that revenue leadership and fleet
              pricing managers monitor daily.
            </p>
          </li>
          <li>
            <span>Separate</span>
            <p>
              This layer calls the forecasting tools. It is not a claim that an
              LLM replaced them. A separate public comparison kept the
              production-style forecasts and is written up in the{" "}
              <Link href="/work/dynamic-pricing-engine">Dynamic Pricing Engine</Link> case study.
            </p>
          </li>
        </ul>
      </section>

      <section className="ci-disclosure" aria-labelledby="agent-disclosure-title">
        <p className="case-chapter">Public case-study boundary</p>
        <div>
          <h2 id="agent-disclosure-title">Adoption is public. Prompts and business rules are not.</h2>
          <p>
            Scale, models, the approval loop, and the acceptance rate are
            public. Prompts, guardrail thresholds, customer records, and
            region-level prices are not. No revenue figure is claimed for the
            language layer itself. The 28% off-fleet result belongs to the
            pricing engine, not to this page.
          </p>
        </div>
      </section>

      <CaseFooter backHref="/work/dynamic-pricing-engine" backLabel="← Dynamic Pricing Engine" nextHref="/work" nextLabel="All work →" />
    </main>
  );
}
