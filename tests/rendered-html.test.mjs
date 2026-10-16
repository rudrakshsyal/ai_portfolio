import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Rudraksh Syal portfolio homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Rudraksh Syal/);
  assert.match(html, /Building practical data, ML, and AI systems/);
  assert.match(html, /Dynamic Pricing Engine/);
  assert.match(html, /Base/);
  assert.match(html, /Peak/);
  assert.match(html, /Price Floor/);
  assert.match(html, /Aggregated, representative operational data/);
  assert.match(html, /Career Studio/);
  assert.match(html, /Product Measurement/);
  assert.match(html, /10% observed → 4% incremental/);
});

test("keeps the approved homepage scope and removes starter artifacts", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /type ScenarioKey = "base" \| "peak" \| "floor"/);
  assert.match(page, /Learning in public/);
  assert.match(page, /hero-credential-line/);
  assert.match(layout, /Data Science, ML, Product & Applied AI/);
  assert.doesNotMatch(page, /evidence-ledger|pillar-row/);
  assert.doesNotMatch(page, /SkeletonPreview|react-loading-skeleton/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});

test("server-renders the Dynamic Pricing Engine case study", async () => {
  const response = await render("/work/dynamic-pricing-engine");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /When capacity changes daily, price should too/);
  assert.match(html, /Three models become one decision/);
  assert.match(html, /Choose your level of depth/);
  assert.match(html, /Supply/);
  assert.match(html, /Demand/);
  assert.match(html, /Decision/);
  assert.match(html, /We tested whether an LLM should replace the forecasting engine/);
  assert.match(html, /3\.594/);
  assert.match(html, /3\.634/);
  assert.match(html, /4\.696/);
  assert.match(html, /24/);
  assert.match(html, /47/);
  assert.match(html, /Keep production unchanged/);
  assert.match(html, /Better evidence, not a forced AI win/);
  assert.match(html, /AGENTIC_RESEARCH\.md/);
  assert.match(html, /synthetic_three_way_v1\/EXECUTIVE_SUMMARY\.md/);
  assert.match(html, /aggregated, representative operational data/i);
  assert.match(html, /public reconstruction/i);
});

test("server-renders the Work library and patent treatment", async () => {
  const response = await render("/work");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Systems, models, and decisions/);
  assert.match(html, /Dynamic Pricing Engine/);
  assert.match(html, /Chamomile Contract Intelligence/);
  assert.match(html, /Cancellation Policy Intelligence/);
  assert.match(html, /EU Light Jet Pricing/);
  assert.match(html, /Product Measurement/);
  assert.match(html, /US 12,314,757 B1/);
  assert.match(html, /Named co-inventor/);
  assert.match(html, /How the invention works/);
  assert.match(html, /Measure utilization/);
  assert.match(html, /Adapt criteria/);
  assert.match(html, /\/work\/contract-intelligence/);
});

test("server-renders the Contract Intelligence case study", async () => {
  const response = await render("/work/contract-intelligence");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /From contract parsing to corpus-wide answers/);
  assert.match(html, /1,100\+/);
  assert.match(html, /Amazon Bedrock Knowledge Bases/);
  assert.match(html, /OpenSearch Serverless/);
  assert.match(html, /Llama 3.1 8B/);
  assert.match(html, /Snowflake/);
  assert.match(html, /Hybrid retrieval/);
  assert.match(html, /Recall@k/);
  assert.match(html, /Precision@k/);
  assert.match(html, /RetrieveAndGenerate/);
  assert.match(html, /No contract content exposed/);
});

test("server-renders Cancellation Policy Intelligence as a separate case study", async () => {
  const response = await render("/work/cancellation-policy-badging");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /From cancellation clauses to customer-ready policy/);
  assert.match(html, /532/);
  assert.match(html, /84.7%/);
  assert.match(html, /15.3%/);
  assert.match(html, /Haiku/);
  assert.match(html, /Sonnet/);
  assert.match(html, /XO marketplace/);
});

test("server-renders the Product Measurement and Experimentation case study", async () => {
  const response = await render("/work/measurement-experimentation");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Measure the change\. Isolate what caused it/);
  assert.match(html, /Bayesian Structural Time Series/);
  assert.match(html, /A\/B tests/);
  assert.match(html, /Sales, Visits, Units, and Households/);
  assert.match(html, /self-serve measurement/i);
});

test("server-renders the career Journey", async () => {
  const response = await render("/journey");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /From making data visible to making systems dependable/);
  assert.match(html, /Practo Technologies/);
  assert.match(html, /Purdue University/);
  assert.match(html, /84\.51/);
  assert.match(html, /Vista Tech/);
  assert.match(html, /Still hands-on\. Increasingly a multiplier/);
  assert.ok(html.indexOf("Vista Tech") < html.indexOf("Practo Technologies"));
});

test("server-renders Now & Lab", async () => {
  const response = await render("/now");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Learning in public/);
  assert.match(html, /Agentic AI/);
  assert.match(html, /Evaluation/);
  assert.match(html, /Deep Learning/);
  assert.match(html, /Open questions/);
  assert.match(html, /not a claim of mastery/i);
  assert.match(html, /Goal/);
  assert.match(html, /Monitor/);
});

test("uses the light-only visual system and compact diagrams", async () => {
  const [css, home, work] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/work/page.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(css, /Replace mixed dark panels with light tonal surfaces/);
  assert.match(css, /\.home-project-viz/);
  assert.match(home, /home-project-viz/);
  assert.match(work, /library-patent-flow/);
  assert.match(work, /library-project-viz/);
});

test("server-renders the visual About page", async () => {
  const response = await render("/about");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Technical depth\. Product judgment\. People leadership/);
  assert.match(html, /Hands-on technical leader/);
  assert.match(html, /Senior · Staff · Principal/);
  assert.match(html, /Frame/);
  assert.match(html, /Ship/);
  assert.match(html, /Purdue University/);
  assert.match(html, /US 12,314,757 B1/);
});
