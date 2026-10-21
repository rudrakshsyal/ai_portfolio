import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Now & Lab · Rudraksh Syal",
  description:
    "Current interests, learning directions, and open questions across agentic AI, evaluation, deep learning, and reliable ML systems.",
};

const explorations = [
  {
    number: "01",
    status: "Active focus",
    title: "Agentic AI",
    copy: "Moving beyond demos toward systems with explicit tools, bounded autonomy, observable state, and recoverable failure modes.",
    questions: ["Tool-use reliability", "Planning vs workflows", "Human checkpoints"],
    visual: ["Goal", "Tools", "Check", "Act"],
  },
  {
    number: "02",
    status: "Active focus",
    title: "Evaluation",
    copy: "Designing evidence for multi-step AI behavior: task success, trajectory quality, groundedness, cost, latency, and operational risk.",
    questions: ["Agent trajectories", "Failure taxonomies", "Production feedback"],
    visual: ["Task", "Trace", "Score", "Learn"],
  },
  {
    number: "03",
    status: "Deepening",
    title: "Deep Learning",
    copy: "Revisiting representation learning and modern architectures to strengthen the bridge between applied ML experience and emerging AI systems.",
    questions: ["Transformers", "Representation learning", "Fine-tuning choices"],
    visual: ["Input", "Representation", "Task"],
  },
  {
    number: "04",
    status: "Continuing practice",
    title: "Reliable ML Systems",
    copy: "Keeping the production fundamentals visible: monitoring, feedback loops, baseline comparisons, deployment constraints, and explainable guardrails.",
    questions: ["MLOps", "Drift", "Decision interfaces"],
    visual: ["Train", "Deploy", "Monitor", "Improve"],
  },
];

export default function NowPage() {
  return (
    <main className="case-study now-page">
      <header className="case-header" aria-label="Now and Lab navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span><strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#explorations">Explorations</a>
          <a href="#questions">Questions</a>
          <Link href="/journey">Journey</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="now-hero">
        <p className="case-chapter">Now &amp; Lab</p>
        <h1>Learning in public, without pretending the work is finished.</h1>
        <p>
          A living view of the ideas I am studying, testing, and connecting to
          a decade of practical data-science and ML experience.
        </p>
      </section>

      <section className="now-thesis">
        <p className="case-chapter">Current thesis</p>
        <blockquote>
          Intelligent systems become useful when their behavior is observable,
          evaluable, and bounded by the decision they serve.
        </blockquote>
      </section>

      <section className="now-explorations" id="explorations" aria-labelledby="explorations-title">
        <header>
          <p className="case-chapter">Current explorations</p>
          <h2 id="explorations-title">Four threads I’m actively connecting.</h2>
        </header>
        <div>
          {explorations.map((item) => (
            <article key={item.number}>
              <div className="now-exploration-top">
                <span>{item.number}</span><small>{item.status}</small>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="now-mini-flow" aria-label={`${item.title} exploration flow`}>
                {item.visual.map((step, index) => <span key={step}>{step}{index < item.visual.length - 1 && <i>→</i>}</span>)}
              </div>
              <ul>{item.questions.map((question) => <li key={question}>{question}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="now-questions" id="questions" aria-labelledby="questions-title">
        <header>
          <p className="case-chapter">Open questions</p>
          <h2 id="questions-title">The lab begins with questions worth testing.</h2>
        </header>
        <ol>
          <li><span>01</span><p>How should multi-step agents be evaluated when the final answer hides a poor trajectory?</p></li>
          <li><span>02</span><p>Where should deterministic workflows end and agent autonomy begin?</p></li>
          <li><span>03</span><p>How can LLM interfaces make pricing and optimization systems easier to use without hiding their constraints?</p></li>
          <li><span>04</span><p>How can product design make complex technical reasoning easier to inspect and trust?</p></li>
        </ol>
      </section>

      <section className="now-boundary">
        <p className="case-chapter">What this page is—and is not</p>
        <div>
          <h2>A record of direction, not a claim of mastery.</h2>
          <p>
            Mature work belongs in the portfolio. Early experiments, reading
            notes, design sketches, and hypotheses belong here. As projects
            become substantive, they can graduate into full case studies.
          </p>
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/">← Back to portfolio</Link>
        <a href="mailto:rudrakshsyal@gmail.com">Exchange ideas</a>
      </footer>
    </main>
  );
}
