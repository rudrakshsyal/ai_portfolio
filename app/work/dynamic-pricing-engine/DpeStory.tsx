"use client";

import { useState } from "react";
import Link from "next/link";

type LabKey = "supply" | "demand" | "solver";
type SolverKey = "base" | "peak" | "floor";

const supplyDays = [
  ...Array(16).fill("dnq"),
  ...Array(10).fill("solved"),
  ...Array(5).fill("floor"),
] as string[];

const waterfall = [
  ["Raw capacity", "12.7", 100, "positive"],
  ["Scheduled maintenance", "−2.4", 19, "negative"],
  ["AOG", "−0.5", 4, "negative"],
  ["Unscheduled maintenance", "−0.8", 6, "negative"],
  ["Crew unavailable", "−0.2", 2, "negative"],
  ["Program commitment", "−5.8", 46, "program"],
  ["Non-program legs", "−0.7", 6, "negative"],
  ["Cancellation adjustment", "−0.4", 3, "negative"],
  ["Open-demand supply", "1.9", 15, "result"],
];

const modelChoices = [
  {
    component: "Every supply series",
    model: "ACF / PACF first",
    reason: "Diagnose trend, lag structure, and seasonality before selecting a forecasting method.",
    outcome: "Diagnosis before tooling",
  },
  {
    component: "Stable weekly seasonality",
    model: "Prophet",
    reason: "The workhorse where diagnostics showed a genuine, repeatable weekly pattern.",
    outcome: "Complexity earned",
  },
  {
    component: "Simple lag-1 series",
    model: "Baseline over SARIMA",
    reason: "SARIMA barely improved the forecast and did not justify added operating complexity.",
    outcome: "Baseline retained",
  },
  {
    component: "Weekly + annual candidate",
    model: "Baseline over TBATS",
    reason: "One year of history could not support a dependable annual pattern; the constraint was data, not tooling.",
    outcome: "Data limit made visible",
  },
];

const researchBenchmarks = [
  {
    name: "Current ML",
    value: "3.594",
    width: "76.5%",
    note: "Lowest supply RMSE",
    className: "benchmark-current",
  },
  {
    name: "Agent-directed ML",
    value: "3.634",
    width: "77.4%",
    note: "+1.1% vs current",
    className: "benchmark-agent",
  },
  {
    name: "Direct GPT-5.5",
    value: "4.696",
    width: "100%",
    note: "+30.7% vs current",
    className: "benchmark-direct",
  },
];

const solverScenarios: Record<
  SolverKey,
  {
    label: string;
    eyebrow: string;
    title: string;
    copy: string;
    metric: string;
    metricLabel: string;
    className: string;
  }
> = {
  base: {
    label: "Base",
    eyebrow: "Representative solved day",
    title: "Match expected demand to usable supply.",
    copy: "At roughly 1.9 open-demand legs, the demand curve intersects supply near a $12.7k yield.",
    metric: "$12.7k",
    metricLabel: "equilibrium yield",
    className: "solver-base",
  },
  peak: {
    label: "Peak",
    eyebrow: "Seasonal demand pressure",
    title: "Re-solve as the decision boundary tightens.",
    copy: "A 23% seasonal lift changes expected bookings. The system moves up the operating range—and can withhold a quote when supply disappears.",
    metric: "+23%",
    metricLabel: "demand signal",
    className: "solver-peak",
  },
  floor: {
    label: "Price Floor",
    eyebrow: "High-supply day",
    title: "Protect the lower bound without forcing equilibrium.",
    copy: "When roughly six legs exceed modeled demand across the range, the engine holds the $7k floor to capture available demand.",
    metric: "$7k",
    metricLabel: "price floor",
    className: "solver-floor",
  },
};

function SupplyPanel() {
  return (
    <div className="case-lab-panel" role="tabpanel" id="panel-supply">
      <div className="case-lab-copy">
        <p className="case-eyebrow">Supply signal</p>
        <h3>Start with what can actually be sold.</h3>
        <p>
          Gross fleet capacity is not open-demand capacity. Maintenance,
          program commitments, existing legs, and expected cancellations all
          change the usable supply for each departure date.
        </p>
        <div className="case-inline-stats">
          <div><strong>16</strong><span>do-not-quote days</span></div>
          <div><strong>10</strong><span>equilibrium days</span></div>
          <div><strong>5</strong><span>floor days</span></div>
        </div>
      </div>
      <div className="case-supply-visual" aria-label="January decision states and representative supply waterfall">
        <div className="case-state-strip" aria-label="31 January departure-day states">
          {supplyDays.map((state, index) => (
            <span key={`${state}-${index}`} className={state} title={`Day ${index + 1}: ${state}`} />
          ))}
        </div>
        <div className="case-state-legend" aria-hidden="true">
          <span><i className="dnq" />Do not quote</span>
          <span><i className="solved" />Solve</span>
          <span><i className="floor" />Floor</span>
        </div>
        <div className="case-waterfall">
          {waterfall.map(([label, value, width, kind]) => (
            <div key={label}>
              <span>{label}</span>
              <i className={kind} style={{ width: `${width}%` }} />
              <strong>{value}</strong>
            </div>
          ))}
        </div>
        <p className="case-chart-note">Representative solved day · legs</p>
      </div>
    </div>
  );
}

function DemandPanel() {
  const conversion = [
    ["$7.5k", "6.3%", 92],
    ["$9.5k", "4.5%", 68],
    ["$11.5k", "3.2%", 49],
    ["$13.5k", "2.2%", 34],
    ["$15k", "<2%", 26],
  ];

  return (
    <div className="case-lab-panel" role="tabpanel" id="panel-demand">
      <div className="case-lab-copy">
        <p className="case-eyebrow">Demand response</p>
        <h3>Price changes the booking, not the need to travel.</h3>
        <p>
          Quote volume remained comparatively stable across the operating
          range. Conversion did not: it fell sharply as yield increased,
          making booking probability the solver’s most useful demand lever.
        </p>
        <div className="case-inline-stats">
          <div><strong>~80</strong><span>forecast quotes / day</span></div>
          <div><strong>~79</strong><span>prior-year actual</span></div>
          <div><strong>≈0.97</strong><span>conversion-fit R²</span></div>
        </div>
      </div>
      <div className="case-demand-visual" aria-label="Conversion response by yield">
        <div className="case-demand-heading">
          <span>Conversion response</span>
          <strong>Yield ↑ · booking probability ↓</strong>
        </div>
        <div className="case-conversion-bars">
          {conversion.map(([yieldValue, rate, height]) => (
            <div key={yieldValue}>
              <strong>{rate}</strong>
              <i style={{ height: `${height}%` }} />
              <span>{yieldValue}</span>
            </div>
          ))}
        </div>
        <p className="case-chart-note">Observed bins with exponential fit · representative data</p>
      </div>
    </div>
  );
}

function SolverPanel() {
  const [scenarioKey, setScenarioKey] = useState<SolverKey>("base");
  const scenario = solverScenarios[scenarioKey];

  return (
    <div className="case-lab-panel case-solver-panel" role="tabpanel" id="panel-solver">
      <div className="case-lab-copy">
        <p className="case-eyebrow">Decision explorer</p>
        <h3>One curve. Three operating realities.</h3>
        <p>
          The last step compares expected bookings at each yield with usable
          supply. Select a state to see how the same system changes its answer.
        </p>
        <div className="case-solver-tabs" role="tablist" aria-label="Solver scenario">
          {(Object.keys(solverScenarios) as SolverKey[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={scenarioKey === key}
              onClick={() => setScenarioKey(key)}
            >
              {solverScenarios[key].label}
            </button>
          ))}
        </div>
        <div className="case-solver-reading" aria-live="polite">
          <span>{scenario.eyebrow}</span>
          <h4>{scenario.title}</h4>
          <p>{scenario.copy}</p>
          <strong>{scenario.metric}</strong>
          <small>{scenario.metricLabel}</small>
        </div>
      </div>
      <div
        className={`case-solver-chart ${scenario.className}`}
        role="img"
        aria-label={`${scenario.label}: ${scenario.title}`}
      >
        <span className="solver-y-label">Expected bookings</span>
        <span className="solver-x-label">Yield</span>
        <i className="solver-demand-line" aria-hidden="true" />
        <i className="solver-supply-line" aria-hidden="true" />
        <i className="solver-point" aria-hidden="true" />
        <span className="solver-demand-label">Demand D(Y)</span>
        <span className="solver-supply-label">Usable supply</span>
        <span className="solver-floor-label">$7k floor</span>
        <span className="solver-ceiling-label">$15k ceiling</span>
      </div>
    </div>
  );
}

export default function DpeStory() {
  const [activeLab, setActiveLab] = useState<LabKey>("supply");

  return (
    <main className="case-study">
      <header className="case-header" aria-label="Case study navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span>
          <strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#eu-light-jet">EU Light Jet</a>
          <a href="#evidence">Evidence</a>
          <a href="#research-extension">Research</a>
          <Link href="/work">All work</Link>
        </nav>
      </header>

      <section className="case-hero" id="top">
        <p className="case-chapter">01 · Dynamic Pricing Engine</p>
        <h1>When capacity changes daily, price should too.</h1>
        <p className="case-lede">
          A fleet-wide pricing system that estimates sellable capacity,
          models price-sensitive booking behavior, and solves for a yield on
          every departure date—including when the right answer is not to quote.
        </p>
        <div className="case-hero-actions">
          <a href="#system">Explore the system ↓</a>
          <a href="https://github.com/rudrakshsyal/dynamic_pricing_engine" target="_blank" rel="noreferrer">
            View public reconstruction ↗
          </a>
        </div>
      </section>

      <section className="case-proof" aria-label="Project summary">
        <div><span>Context</span><strong>Vista · Private aviation</strong></div>
        <div><span>Pilot</span><strong>One 43-jet fleet</strong></div>
        <div><span>Outcome</span><strong>−28% off-fleeting · month one</strong></div>
        <div><span>My role</span><strong>Hands-on data science lead</strong></div>
      </section>

      <section className="case-section case-problem" id="system">
        <p className="case-chapter">The problem</p>
        <div>
          <h2>Static pricing sees a product. Dynamic pricing sees a system.</h2>
          <p>
            Private-aviation capacity is perishable and constrained. A tail can
            be unavailable, committed to a program member, consumed by another
            trip, or likely to cancel. At the same time, higher yield changes
            the probability that a quote becomes a booking.
          </p>
          <p>
            The task was not simply to predict a price. It was to make supply
            and demand comparable enough to support an operational decision.
          </p>
        </div>
      </section>

      <section className="case-lineage" aria-labelledby="lineage-title">
        <header>
          <p className="case-chapter">Model lineage</p>
          <h2 id="lineage-title">The third generation changed the question—not just the algorithm.</h2>
        </header>
        <ol>
          <li>
            <span>01</span>
            <small>Ensemble</small>
            <strong>Underperforming model</strong>
            <p>A first-generation pricing model that did not produce dependable operational decisions.</p>
          </li>
          <li>
            <span>02</span>
            <small>AutoML</small>
            <strong>Better accuracy, incomplete decision</strong>
            <p>Accuracy improved 71% → 78% and RMSE 1.9 → 1.4, but the black box still lacked a supply–demand clearing mechanism.</p>
          </li>
          <li className="lineage-current">
            <span>03</span>
            <small>Dynamic Pricing Engine</small>
            <strong>A different architecture</strong>
            <p>Forecast supply, model price response, then solve the operating decision with visible guardrails and human override.</p>
          </li>
        </ol>
        <p className="case-lineage-note">Generation two was a more accurate answer to the wrong question.</p>
      </section>

      <section className="case-system" aria-labelledby="system-title">
        <div className="case-system-heading">
          <p className="case-chapter">The system</p>
          <h2 id="system-title">Three models become one decision.</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <h3>Estimate supply</h3>
            <p>Six component forecasts at region × fleet × 7/14/21-day windows, then subtract operational and contractual commitments.</p>
          </li>
          <li>
            <span>02</span>
            <h3>Model demand</h3>
            <p>Use LOWESS to discover the shape, then fit exponential conversion decay after quote volume proves comparatively flat.</p>
          </li>
          <li>
            <span>03</span>
            <h3>Solve the decision</h3>
            <p>Use bounded Brent root-finding to clear demand against supply across a 7 × 7 route grid, with floor, ceiling, and no-quote states.</p>
          </li>
        </ol>
      </section>

      <section className="case-eu-jet" id="eu-light-jet" aria-labelledby="eu-jet-title">
        <header className="case-eu-heading">
          <div>
            <p className="case-chapter">Applied case · EU Light Jet</p>
            <h2 id="eu-jet-title">The pricing fix that made instant booking viable again.</h2>
          </div>
          <p>
            A cost-to-serve model for Vista’s entry-level EU product line,
            where every booking depended on a third-party operator and the
            guaranteed quote had to absorb fulfillment risk before the
            customer ever saw a price.
          </p>
        </header>

        <div className="eu-jet-metrics" aria-label="EU Light Jet project results">
          <div>
            <span>Margin</span>
            <strong>−8% <i>→</i> +17%</strong>
            <small>25-point swing</small>
          </div>
          <div>
            <span>Loss-making bookings</span>
            <strong>55% <i>→</i> 20%</strong>
            <small>full-quarter outcome</small>
          </div>
          <div>
            <span>Fulfillment model</span>
            <strong>100% off-fleet</strong>
            <small>third-party operators</small>
          </div>
          <div>
            <span>Incremental margin</span>
            <strong>~$7M / quarter</strong>
            <small>directional estimate</small>
          </div>
        </div>

        <div className="eu-jet-flow" role="img" aria-label="EU Light Jet pricing project from problem through result">
          <div className="eu-flow-stage eu-flow-problem">
            <span>01</span>
            <div>
              <strong>Pricing drift surfaced in finance</strong>
              <p>Stale bands missed EU positioning cost. 55% of bookings were loss-making; average margin was −8%.</p>
            </div>
          </div>
          <i className="eu-flow-arrow" aria-hidden="true">↓</i>
          <div className="eu-flow-stage eu-flow-data">
            <span>02</span>
            <div>
              <strong>~1,800 historical bookings</strong>
              <p>Quote-time features—origin, route, lead time, and day of week—with eventual invoiced fulfillment cost as the label.</p>
            </div>
          </div>
          <i className="eu-flow-arrow" aria-hidden="true">↓</i>
          <div className="eu-flow-stage eu-flow-model">
            <span>03</span>
            <div>
              <strong>Gradient-boosted cost model</strong>
              <p>Shallow trees, low learning rate, early stopping, and per-quote SHAP explanations kept a small-data model controlled and reviewable.</p>
            </div>
          </div>
          <i className="eu-flow-arrow" aria-hidden="true">↓</i>
          <div className="eu-flow-stage eu-flow-validation">
            <span>04</span>
            <div>
              <strong>Validation matched the relaunch risk</strong>
              <p>Shadow mode against incoming invoices, plus a backtest against the spontaneous demand pattern from the prior instant-booking period.</p>
            </div>
          </div>
          <i className="eu-flow-arrow" aria-hidden="true">↓</i>
          <div className="eu-flow-stage eu-flow-result">
            <span>05</span>
            <div>
              <strong>Instant booking returned with cost built in</strong>
              <p>Margin reached +17%, loss-making bookings fell to 20%, and predicted cost remained auditable against real operator invoices.</p>
            </div>
          </div>
        </div>

        <div className="eu-jet-story" aria-label="EU Light Jet project narrative">
          <article>
            <span>Why the product broke</span>
            <h3>The customer promise was instant. The cost truth arrived months later.</h3>
            <p>
              The issue surfaced reactively in a quarterly business review.
              Vista owned no Light Jet tails in the EU, so every guaranteed
              booking was fulfilled through a volatile external operator
              network. Pricing bands inherited some US logic and had not kept
              pace with EU costs—especially positioning and ferry expense in a
              thinner operator network.
            </p>
            <p>
              Because true fulfillment cost appeared only after operator
              invoices arrived, the drift was invisible in day-to-day quoting.
              A quarter of invoices made the pattern undeniable: more than half
              of bookings were losing money.
            </p>
          </article>

          <article>
            <span>How the decision changed</span>
            <h3>Pause the exposure, then price the uncertainty at quote time.</h3>
            <p>
              Engineering temporarily replaced guaranteed instant booking with
              request-based booking so losses would not keep compounding. Over
              roughly six weeks in Q3, I built a GBM to predict expected
              fulfillment cost using only information known when the quote was
              requested.
            </p>
            <p>
              The prediction grain mattered: expected cost across the likely
              operator pool, not a specific operator’s price, because operator
              assignment happens after booking. The model scored synchronously
              inside the pricing engine, so it stayed deliberately lean.
            </p>
          </article>

          <article>
            <span>How we earned the relaunch</span>
            <h3>Validate against invoices—and against the demand that would return.</h3>
            <p>
              During the request-based window, shadow predictions were compared
              with real incoming invoices. I also backtested against invoices
              from the earlier instant-booking period: request-based customers
              skew toward more plannable trips, so shadow validation alone would
              not represent the spontaneous demand expected after relaunch.
            </p>
            <p>
              Once both views held, engineering restored instant booking in Q4
              with the GBM embedded in the pricing engine. Every guaranteed
              quote now accounted for expected fulfillment and positioning cost
              before it reached the customer.
            </p>
          </article>

          <article className="eu-story-outcome">
            <span>What changed</span>
            <h3>A model with a direct, auditable P&amp;L.</h3>
            <p>
              Over the first full quarter after relaunch, margin moved from −8%
              to +17% and loss-making bookings fell from 55% to 20%. On the
              fleet’s revenue base, the 25-point swing translates directionally
              to roughly $7M per quarter in incremental margin.
            </p>
            <p>
              The outcome was not a proxy metric: predicted cost could be
              reconciled with real operator invoices. The model did more than
              improve pricing—it created the evidence needed for the product to
              operate safely.
            </p>
          </article>
        </div>

        <aside className="eu-jet-notes" aria-labelledby="eu-notes-title">
          <div>
            <p className="case-chapter">Technical judgment</p>
            <h3 id="eu-notes-title">Why this model held up.</h3>
          </div>
          <dl>
            <div>
              <dt>Why GBM</dt>
              <dd>Small, tabular data with a non-linear cost curve and meaningful distance × lead-time × day-of-week interactions.</dd>
            </div>
            <div>
              <dt>Bias–variance</dt>
              <dd>With only ~1,800 observations, overfitting was the main risk: shallow trees, slow learning, early stopping, then invoice-based shadow validation.</dd>
            </div>
            <div>
              <dt>Prediction grain</dt>
              <dd>Expected fulfillment cost marginalized over the likely operator pool—not a named operator’s future invoice.</dd>
            </div>
            <div>
              <dt>Production constraint</dt>
              <dd>Real-time scoring at quote time, with SHAP making each guaranteed price explainable and reviewable.</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="case-lab" id="evidence" aria-labelledby="lab-title">
        <header>
          <p className="case-chapter">Interactive evidence</p>
          <h2 id="lab-title">Choose your level of depth.</h2>
          <p>Each view reconstructs a key idea from the project’s public HTML dashboards.</p>
        </header>
        <div className="case-lab-tabs" role="tablist" aria-label="Technical evidence view">
          {(["supply", "demand", "solver"] as LabKey[]).map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={activeLab === key}
              aria-controls={`panel-${key}`}
              onClick={() => setActiveLab(key)}
            >
              <span>{key === "supply" ? "01" : key === "demand" ? "02" : "03"}</span>
              {key === "solver" ? "Decision" : key[0].toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>
        {activeLab === "supply" && <SupplyPanel />}
        {activeLab === "demand" && <DemandPanel />}
        {activeLab === "solver" && <SolverPanel />}
      </section>

      <section className="case-section case-insight">
        <p className="case-chapter">The core insight</p>
        <blockquote>
          Inquiry was comparatively stable. Conversion was the real pricing lever.
        </blockquote>
        <p>
          Travelers still inquire when they need to travel. Price primarily
          changes whether that inquiry converts—so the solver focuses on the
          booking decision, not a simplistic assumption that demand disappears.
          LOWESS exposed the shape before an exponential curve was fitted
          (R² 0.973).
        </p>
      </section>

      <section className="case-models" id="judgment" aria-labelledby="models-title">
        <header>
          <p className="case-chapter">Modeling judgment</p>
          <h2 id="models-title">Use complexity only where it earns its place.</h2>
          <p>
            The architecture remains composable: each operational signal can
            use the simplest approach its data supports.
          </p>
        </header>
        <div className="case-model-list">
          {modelChoices.map((choice) => (
            <article key={choice.component}>
              <div>
                <span>{choice.component}</span>
                <strong>{choice.model}</strong>
              </div>
              <p>{choice.reason}</p>
              <small>{choice.outcome}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section case-contribution">
        <p className="case-chapter">My contribution</p>
        <div>
          <h2>Hands-on modeling with operational ownership.</h2>
          <p>
            My work connected supply forecasting, demand elasticity, model
            selection, and solver behavior into a decision product that could
            be explained to product, engineering, and operational partners.
          </p>
          <ul>
            <li>Rejected an end-to-end price model that would learn legacy MSRP rules and human overrides instead of true elasticity.</li>
            <li>Framed the pricing decision around usable capacity, not gross fleet size.</li>
            <li>Selected models component by component against transparent baselines.</li>
            <li>Made guardrails—including floor, ceiling, and do-not-quote states—visible.</li>
            <li>Kept every route-grid cell overridable by revenue managers and monitored the override gap as a trust signal.</li>
          </ul>
        </div>
      </section>

      <section className="case-validation" aria-labelledby="validation-title">
        <header>
          <p className="case-chapter">Validation</p>
          <h2 id="validation-title">Three levels of evidence, one operating outcome.</h2>
        </header>
        <div className="case-validation-levels">
          <article>
            <span>01</span>
            <h3>Components</h3>
            <p>MAE, median absolute percentage error, and forecast bias—reviewed by fleet, region, and time window.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Full pipeline</h3>
            <p>End-to-end historical backtests compared the complete pricing decision with realized capacity.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Human alignment</h3>
            <p>The override gap between engine recommendation and revenue manager choice surfaced trust, missing signals, and model weakness.</p>
          </article>
        </div>
        <div className="case-validation-result">
          <div>
            <span>First month · one 43-jet fleet</span>
            <strong>−28%</strong>
            <small>off-fleeting</small>
          </div>
          <p>
            The north-star metric tracked accepted bookings that ultimately had
            to be fulfilled externally at a loss. Override gap remained the
            secondary operating signal, monitored by region.
          </p>
        </div>
      </section>

      <section
        className="case-research-extension"
        id="research-extension"
        aria-labelledby="research-extension-title"
      >
        <header>
          <div>
            <p className="case-chapter">2026 research extension · Public reconstruction</p>
            <h2 id="research-extension-title">
              We tested whether an LLM should replace the forecasting engine. It shouldn’t.
            </h2>
          </div>
          <p>
            The rebuilt project became a controlled research environment for
            comparing the existing forecasting recipes with direct GPT-5.5
            forecasts and an agent that could plan, run, and evaluate bounded
            model experiments.
          </p>
        </header>

        <div className="research-benchmark" aria-label="Synthetic three-way supply RMSE comparison; lower is better">
          <div className="research-benchmark-heading">
            <div>
              <span>Synthetic three-way comparison</span>
              <strong>Supply RMSE · lower is better</strong>
            </div>
            <small>270 simulated final-test days · 14 / 28 / 90-day horizons</small>
          </div>
          <div className="research-benchmark-bars">
            {researchBenchmarks.map((benchmark) => (
              <div className={benchmark.className} key={benchmark.name}>
                <span>{benchmark.name}</span>
                <i aria-hidden="true"><b style={{ width: benchmark.width }} /></i>
                <strong>{benchmark.value}</strong>
                <small>{benchmark.note}</small>
              </div>
            ))}
          </div>
          <p>
            The current ML system also produced the lowest diagnostic price
            error across all three horizons. These simulator results test
            forecasting behavior—not real-world revenue impact.
          </p>
        </div>

        <div className="research-agent-story">
          <article>
            <span>01 · Hypothesis</span>
            <h3>Could an agent discover a better forecasting recipe?</h3>
            <p>
              GPT-5.5 could inspect training summaries, choose models, tune
              parameters, test ensembles, and record a reason for each final
              selection.
            </p>
          </article>
          <article>
            <span>02 · Guardrails</span>
            <h3>Let the agent experiment—without letting it move the goalposts.</h3>
            <p>
              Local tools enforced trial bounds, kept final-test observations
              outside the workbench, recorded every action, and reserved spend
              before each model request.
            </p>
            <dl>
              <div><dt>Trials</dt><dd>24</dd></div>
              <div><dt>Model requests</dt><dd>47</dd></div>
              <div><dt>Cost</dt><dd>$2.86 / $4 cap</dd></div>
            </dl>
          </article>
          <article className="research-agent-decision">
            <span>03 · Decision</span>
            <h3>Keep production unchanged.</h3>
            <p>
              Some component forecasts improved, but remaining-supply error and
              do-not-quote disagreement worsened. The evidence supported the
              existing forecasting engine, with LLMs retained for explanation
              and carefully bounded research—not as an automatic replacement.
            </p>
            <strong>Better evidence, not a forced AI win.</strong>
          </article>
        </div>

        <p className="research-boundary">
          This extension is a portfolio experiment using retrospective and
          synthetic evaluation. It does not claim production deployment,
          untouched holdout performance, or measured revenue uplift.
        </p>
      </section>

      <section className="case-sources" aria-labelledby="sources-title">
        <div>
          <p className="case-chapter">Public artifacts</p>
          <h2 id="sources-title">Inspect the reconstruction.</h2>
        </div>
        <nav aria-label="Dynamic Pricing Engine project sources">
          <a href="https://github.com/rudrakshsyal/dynamic_pricing_engine" target="_blank" rel="noreferrer">
            Repository <span>↗</span>
          </a>
          <a href="https://github.com/rudrakshsyal/dynamic_pricing_engine/blob/main/supply_dashboard.html" target="_blank" rel="noreferrer">
            Supply dashboard source <span>↗</span>
          </a>
          <a href="https://github.com/rudrakshsyal/dynamic_pricing_engine/blob/main/demand_side_dashboard.html" target="_blank" rel="noreferrer">
            Demand dashboard source <span>↗</span>
          </a>
          <a href="https://github.com/rudrakshsyal/dynamic_pricing_engine/blob/main/docs/AGENTIC_RESEARCH.md" target="_blank" rel="noreferrer">
            Agentic research methodology <span>↗</span>
          </a>
          <a href="https://github.com/rudrakshsyal/dynamic_pricing_engine/blob/main/experiments/synthetic_three_way_v1/EXECUTIVE_SUMMARY.md" target="_blank" rel="noreferrer">
            Synthetic benchmark results <span>↗</span>
          </a>
        </nav>
        <p className="case-disclosure">
          This public reconstruction uses aggregated, representative operational
          data from one fleet. It communicates the system’s modeling logic and
          decision behavior without reproducing every production detail.
        </p>
      </section>

      <footer className="case-footer">
        <Link href="/">← Back to portfolio</Link>
        <a href="mailto:rudrakshsyal@gmail.com">Discuss the work</a>
      </footer>
    </main>
  );
}
