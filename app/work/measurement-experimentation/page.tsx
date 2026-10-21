import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Measurement & Experimentation · Rudraksh Syal",
  description:
    "A product-focused case study spanning experimentation, causal measurement, self-serve analytics, and decision support.",
};

const decisionLoop = [
  ["01", "Instrument", "Make the behavior visible."],
  ["02", "Compare", "Choose an honest baseline."],
  ["03", "Measure", "Separate signal from movement."],
  ["04", "Decide", "Turn evidence into action."],
];

export default function MeasurementExperimentationPage() {
  return (
    <main className="case-study mx-case">
      <header className="case-header" aria-label="Measurement and experimentation navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span>
          <strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#measurement">Measurement</a>
          <a href="#product">Product analytics</a>
          <a href="#approach">Approach</a>
          <Link href="/work">All work</Link>
        </nav>
      </header>

      <section className="mx-hero">
        <p className="case-chapter">04 · Product Measurement &amp; Experimentation</p>
        <h1>Measure the change. Isolate what caused it. Decide what to do next.</h1>
        <p>
          A product-focused thread across experimentation, causal inference,
          behavioral analytics, and self-serve measurement—from diagnosing
          customer-journey drop-offs to giving merchandising leaders a go/no-go signal.
        </p>
        <dl className="mx-hero-proof">
          <div><dt>Observed endcap lift</dt><dd>10%</dd></div>
          <div><dt>True incremental lift</dt><dd>4%</dd></div>
          <div><dt>Impact lens</dt><dd>4 KPI families</dd></div>
        </dl>
      </section>

      <section className="mx-loop" aria-labelledby="loop-title">
        <header>
          <p className="case-chapter">The product loop</p>
          <h2 id="loop-title">Analytics earns its place when it changes the next decision.</h2>
        </header>
        <ol>
          {decisionLoop.map(([number, title, detail], index) => (
            <li key={number}>
              <article>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{detail}</p>
              </article>
              {index < decisionLoop.length - 1 ? <i aria-hidden="true">→</i> : null}
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-measurement" id="measurement" aria-labelledby="measurement-title">
        <div className="mx-measurement-copy">
          <p className="case-chapter">Causal measurement · 84.51°</p>
          <h2 id="measurement-title">The headline moved. The counterfactual changed the story.</h2>
          <p>
            For a Quaker endcap in-store test, Bayesian Structural Time Series
            compared the observed outcome with a synthetic control. A 10% sales
            uplift contained only 4% true incremental sales—turning an attractive
            headline into a more useful merchandising decision.
          </p>
          <div className="mx-decision">
            <span>Product outcome</span>
            <strong>Evidence for a go / no-go decision</strong>
          </div>
        </div>

        <figure className="mx-lift-chart" aria-labelledby="lift-caption">
          <div className="mx-chart-grid" aria-hidden="true">
            <div className="mx-observed">
              <span>10%</span>
              <i />
              <small>Observed lift</small>
            </div>
            <div className="mx-incremental">
              <span>4%</span>
              <i />
              <small>Incremental lift</small>
            </div>
          </div>
          <figcaption id="lift-caption">
            Observed movement is not automatically caused movement.
          </figcaption>
        </figure>
      </section>

      <section className="mx-product" id="product" aria-labelledby="product-title">
        <header>
          <p className="case-chapter">Product analytics · Practo + 84.51°</p>
          <h2 id="product-title">Three ways measurement became part of the product workflow.</h2>
        </header>

        <div className="mx-product-grid">
          <article>
            <div className="mx-card-number">01</div>
            <h3>Self-serve visibility</h3>
            <p>
              Built a real-time R/Shiny application consolidating key Search
              platform metrics, replacing a costly third-party SQL tool and
              enabling teams to answer recurring questions directly.
            </p>
            <div className="mx-mini-viz dashboard" aria-label="Product metrics become a self-serve dashboard">
              <span>Search metrics</span><i>→</i><strong>Self-serve view</strong>
            </div>
          </article>

          <article>
            <div className="mx-card-number">02</div>
            <h3>Journey experimentation</h3>
            <p>
              Designed and ran A/B tests to evaluate conversion drop-offs across
              customer journeys, pairing behavioral evidence with product-feedback
              and interaction text analysis.
            </p>
            <div className="mx-mini-viz experiment" aria-label="A and B experiences are compared on customer journey conversion">
              <span>A</span><span>B</span><i /><strong>Conversion</strong>
            </div>
          </article>

          <article>
            <div className="mx-card-number">03</div>
            <h3>Multi-KPI impact</h3>
            <p>
              Measured the effect of merchandising changes across Sales, Visits,
              Units, and Households—keeping a single favorable metric from defining
              the whole decision.
            </p>
            <div className="mx-mini-viz kpis" aria-label="Impact is measured across Sales, Visits, Units, and Households">
              <span>Sales</span><span>Visits</span><span>Units</span><span>Households</span>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-approach" id="approach" aria-labelledby="approach-title">
        <div>
          <p className="case-chapter">Product-minded data science</p>
          <h2 id="approach-title">Start with the behavior and the decision—not the technique.</h2>
        </div>
        <ul>
          <li><span>Question</span><p>What user or business behavior should change?</p></li>
          <li><span>Baseline</span><p>What would have happened without the intervention?</p></li>
          <li><span>Measure</span><p>Which primary and guardrail metrics tell the full story?</p></li>
          <li><span>Decision</span><p>What will the team do differently if the evidence changes?</p></li>
          <li><span>Learning</span><p>How does the result improve the next test or product iteration?</p></li>
        </ul>
      </section>

      <section className="mx-boundary" aria-labelledby="boundary-title">
        <p className="case-chapter">What this case demonstrates</p>
        <div>
          <h2 id="boundary-title">A broader profile than pricing or model building alone.</h2>
          <p>
            The common thread is product judgment: instrumenting behavior,
            designing comparisons, measuring incrementality, interpreting multiple
            KPIs, and translating evidence into a decision that product, commercial,
            and operating teams can use.
          </p>
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/work">← All work</Link>
        <a href="mailto:rudrakshsyal@gmail.com">Discuss the work</a>
      </footer>
    </main>
  );
}
