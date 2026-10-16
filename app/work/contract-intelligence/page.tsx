import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chamomile Contract Intelligence · Rudraksh Syal",
  description:
    "How Rudraksh Syal evolved Chamomile from contract parsing into a corpus-scale RAG system using Amazon Bedrock Knowledge Bases, OpenSearch Serverless hybrid search, and a SageMaker-hosted Llama endpoint.",
};

const ragSteps = [
  { number: "01", label: "Contracts", detail: "Batch upload" },
  { number: "02", label: "Parse", detail: "Clause boundaries" },
  { number: "03", label: "Index", detail: "Bedrock KB" },
  { number: "04", label: "Retrieve", detail: "Hybrid search" },
  { number: "05", label: "Generate", detail: "Llama 3.1 8B" },
  { number: "06", label: "Answer", detail: "Grounded in clauses" },
];

export default function ContractIntelligencePage() {
  return (
    <main className="case-study ci-case">
      <header className="case-header" aria-label="Chamomile Contract Intelligence navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span>
          <strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#architecture">Architecture</a>
          <a href="#evaluation">Evaluation</a>
          <a href="#role">My role</a>
          <Link href="/work">All work</Link>
        </nav>
      </header>

      <section className="ci-hero" id="overview">
        <div className="ci-hero-copy">
          <p className="case-chapter">02 · Chamomile Contract Intelligence</p>
          <h1>From contract parsing to corpus-wide answers.</h1>
          <p>
            Chamomile began by turning difficult aviation contracts into
            structured modules and Snowflake data. In 2024, I extended that
            foundation into a RAG system so sales could ask natural-language
            questions across the full contract corpus—not one uploaded document
            at a time.
          </p>
        </div>
        <dl className="ci-proof" aria-label="Chamomile project scale">
          <div>
            <dt>Contract corpus</dt>
            <dd>1,100+</dd>
          </div>
          <div>
            <dt>Retrieval strategy</dt>
            <dd>Hybrid</dd>
          </div>
          <div>
            <dt>Retrieval grain</dt>
            <dd>Clause-level</dd>
          </div>
        </dl>
      </section>

      <section className="ci-system" id="architecture" aria-labelledby="system-title">
        <header>
          <p className="case-chapter">RAG architecture · 2024</p>
          <h2 id="system-title">Managed retrieval. Custom generation. Legal context preserved.</h2>
        </header>
        <div
          className="ci-pipeline ci-rag-pipeline"
          role="img"
          aria-label="Contracts are segmented at clause boundaries, indexed with Amazon Bedrock Knowledge Bases and OpenSearch Serverless, retrieved with hybrid search, and sent to a SageMaker-hosted Llama 3.1 8B endpoint for grounded generation"
        >
          {ragSteps.map((step, index) => (
            <div className="ci-pipeline-group" key={step.number}>
              <article>
                <span>{step.number}</span>
                <strong>{step.label}</strong>
                <small>{step.detail}</small>
              </article>
              {index < ragSteps.length - 1 ? <i aria-hidden="true">→</i> : null}
            </div>
          ))}
        </div>
        <p className="ci-system-note">
          Amazon Bedrock Knowledge Bases managed the retrieval layer, with
          OpenSearch Serverless as the vector store. I used Bedrock&apos;s
          retrieval-only API, then constructed the generation prompt myself so
          the retrieved clauses could be answered by the existing Llama 3.1 8B
          endpoint hosted on SageMaker.
        </p>
      </section>

      <section className="ci-pipelines" aria-labelledby="decisions-title">
        <header>
          <p className="case-chapter">Key technical decisions</p>
          <h2 id="decisions-title">The document structure shaped the retrieval design.</h2>
        </header>

        <div className="ci-pipeline-cards">
          <article>
            <div className="ci-card-heading">
              <span>01</span>
              <p>Clause-aware ingestion</p>
            </div>
            <h3>No arbitrary fixed-size chunks.</h3>
            <p>
              The original regex pipeline had already separated contracts at
              meaningful clause boundaries. I preserved those boundaries and
              used a no-chunking strategy in Bedrock: one indexed unit per
              clause. That avoided splitting a legal condition from its
              qualifying language or combining unrelated provisions.
            </p>
            <div className="ci-route-map" aria-label="A contract is parsed into complete clause-level retrieval units">
              <div><b>Contract</b><small>Source</small></div>
              <i>→</i>
              <div><b>Regex</b><small>Segment</small></div>
              <i>→</i>
              <div><b>Clause</b><small>One unit</small></div>
              <i>→</i>
              <div className="ci-route-result"><b>Index</b><small>Preserved context</small></div>
            </div>
          </article>

          <article>
            <div className="ci-card-heading">
              <span>02</span>
              <p>Hybrid retrieval</p>
            </div>
            <h3>Meaning and exact legal language both mattered.</h3>
            <p>
              Bedrock ran semantic vector search and keyword/full-text search
              together, then fused the results. Semantic retrieval handled
              paraphrased questions, while keyword retrieval protected recall
              for exact-sensitive evidence such as dollar amounts, named
              clauses, and terms like “Early Exit Fee.”
            </p>
            <div className="ci-policy-viz" aria-label="Semantic and keyword search combine into fused hybrid retrieval">
              <div className="ci-badges">
                <span>Semantic vectors</span>
                <span>Keyword / full text</span>
              </div>
              <i>→</i>
              <div className="ci-badges">
                <span>Result fusion</span>
                <span>Top-k clauses</span>
                <span>Grounded context</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="ci-evolution" aria-labelledby="evolution-title">
        <header>
          <p className="case-chapter">Architecture evolution</p>
          <h2 id="evolution-title">The system grew from useful extraction into reusable intelligence.</h2>
          <p>
            Each phase solved the next constraint instead of rebuilding the
            system around a fashionable pattern.
          </p>
        </header>
        <ol>
          <li>
            <span>01</span>
            <small>2023 · Parsing foundation</small>
            <strong>Contracts became structured modules</strong>
            <p>Regex-based clause extraction converted difficult source documents into reusable contract fields and Snowflake data.</p>
          </li>
          <li>
            <span>02</span>
            <small>Original chatbot constraint</small>
            <strong>One uploaded contract at a time</strong>
            <p>The hackathon interface proved the interaction, but it could not answer questions across the entire portfolio.</p>
          </li>
          <li>
            <span>03</span>
            <small>2024 · RAG extension</small>
            <strong>Search and answer across 1,100+ contracts</strong>
            <p>Clause-level hybrid retrieval made the accumulated contract corpus queryable through a region-level sales chatbot.</p>
          </li>
        </ol>
      </section>

      <section className="ci-product" id="evaluation" aria-labelledby="evaluation-title">
        <div>
          <p className="case-chapter">Retrieval evaluation</p>
          <h2 id="evaluation-title">Evaluate the evidence before judging the prose.</h2>
        </div>
        <div className="ci-product-grid">
          <article>
            <span>01</span>
            <strong>Golden set</strong>
            <p>Built a test set of real sales questions mapped to the contract clauses that should be retrieved.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Recall@k</strong>
            <p>Measured whether the required clause appeared within the retrieved context supplied to the generator.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Precision@k</strong>
            <p>Checked how much of the retrieved context was relevant, then tuned retrieval depth against noise.</p>
          </article>
        </div>
      </section>

      <section className="ci-pipelines" aria-labelledby="boundary-title">
        <header>
          <p className="case-chapter">API boundary</p>
          <h2 id="boundary-title">Retrieve with Bedrock. Generate outside Bedrock.</h2>
        </header>
        <div className="ci-pipeline-cards">
          <article>
            <div className="ci-card-heading">
              <span>01</span>
              <p>Constraint</p>
            </div>
            <h3>The built-in generation path did not fit the deployed model.</h3>
            <p>
              Bedrock&apos;s RetrieveAndGenerate path generated with
              Bedrock-hosted models, while Chamomile already used a Llama 3.1
              8B endpoint hosted in SageMaker. Replacing the working generation
              service solely to fit the managed API would have added unnecessary
              migration work.
            </p>
            <div className="ci-route-map" aria-label="The default Bedrock generation route did not connect to the existing SageMaker endpoint">
              <div><b>Bedrock KB</b><small>Retrieve</small></div>
              <i>→</i>
              <div><b>Managed path</b><small>Boundary</small></div>
              <i>×</i>
              <div><b>SageMaker</b><small>Existing Llama</small></div>
              <i>→</i>
              <div className="ci-route-result"><b>Preserve</b><small>Deployed model</small></div>
            </div>
          </article>
          <article>
            <div className="ci-card-heading">
              <span>02</span>
              <p>Resolution</p>
            </div>
            <h3>A custom orchestration layer joined the two services.</h3>
            <p>
              I called Bedrock&apos;s Retrieve API for the top-k clauses,
              assembled those clauses into a controlled prompt, and sent that
              prompt to the SageMaker endpoint. The result retained managed
              hybrid retrieval without giving up the existing generation model.
            </p>
            <div className="ci-route-map" aria-label="Retrieve-only results are assembled into a prompt and sent to the SageMaker generation endpoint">
              <div><b>Retrieve</b><small>Top-k clauses</small></div>
              <i>→</i>
              <div><b>Prompt</b><small>Custom context</small></div>
              <i>→</i>
              <div><b>Llama</b><small>SageMaker</small></div>
              <i>→</i>
              <div className="ci-route-result"><b>Answer</b><small>Clause-grounded</small></div>
            </div>
          </article>
        </div>
      </section>

      <section className="ci-role" id="role" aria-labelledby="role-title">
        <div>
          <p className="case-chapter">My role</p>
          <h2 id="role-title">Hands-on retrieval architecture, designed around the user workflow.</h2>
        </div>
        <ul>
          <li>
            <span>Architect</span>
            <p>Selected the managed vector store and designed the hybrid retrieval architecture.</p>
          </li>
          <li>
            <span>Engineer</span>
            <p>Preserved clause boundaries, wired Bedrock retrieval to the SageMaker Llama endpoint, and built the custom prompt path.</p>
          </li>
          <li>
            <span>Evaluate</span>
            <p>Created the golden question-to-clause test set and used precision and recall at k to tune retrieval.</p>
          </li>
          <li>
            <span>Deliver</span>
            <p>Enabled sales teams to upload hundreds of contracts to an EC2-hosted regional chatbot and query the batch in natural language.</p>
          </li>
        </ul>
      </section>

      <section className="ci-product" aria-labelledby="tradeoffs-title">
        <div>
          <p className="case-chapter">Tradeoffs</p>
          <h2 id="tradeoffs-title">The production choice optimized for relevance and delivery speed.</h2>
        </div>
        <div className="ci-product-grid">
          <article>
            <span>01</span>
            <strong>Relevance</strong>
            <p>Hybrid search added retrieval work and latency, but materially improved exact-match coverage for legal language and figures.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Operations</strong>
            <p>OpenSearch Serverless carried an always-on cost floor in exchange for managed scaling and native hybrid retrieval.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Control</strong>
            <p>Bedrock accelerated delivery, while a fully custom pipeline would have offered more direct control over portfolio metadata filtering.</p>
          </article>
        </div>
      </section>

      <section className="ci-disclosure" aria-labelledby="disclosure-title">
        <p className="case-chapter">Public case-study boundary</p>
        <div>
          <h2 id="disclosure-title">Enough detail to explain the system. No contract content exposed.</h2>
          <p>
            This case study describes architecture, evaluation choices, scale,
            and workflow outcomes. Proprietary contracts, retrieved clauses,
            prompts, credentials, and customer information are intentionally
            omitted.
          </p>
        </div>
      </section>

      <footer className="case-footer">
        <Link href="/work">← All work</Link>
        <Link href="/work/cancellation-policy-badging">Next: Cancellation Policy Badging →</Link>
      </footer>
    </main>
  );
}
