import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const publicDir = new URL("../public/", import.meta.url);

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async (request) => {
          const assetUrl = new URL(request.url);
          const relative = assetUrl.pathname.replace(/^\/+/, "");
          try {
            const bytes = await readFile(new URL(relative, publicDir));
            const type = relative.endsWith(".pdf")
              ? "application/pdf"
              : relative.endsWith(".png")
                ? "image/png"
                : "application/octet-stream";
            return new Response(bytes, {
              status: 200,
              headers: { "content-type": type },
            });
          } catch {
            return new Response("Not found", { status: 404 });
          }
        },
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
  assert.match(html, /Data Science Lead/);
  assert.match(html, /Open to roles/);
  assert.match(html, /available now/);
  assert.match(html, /11\+ years/);
  assert.match(html, /7 U\.S\. regions/);
  assert.match(html, /~600 operators/);
  assert.match(html, /~85% badge-ready/);
  assert.match(html, /Staff \/ Principal Data Scientist/);
  assert.match(html, /Forward Deployed Engineer/);
  assert.match(html, /href="\/resume\.pdf"/);
  assert.match(html, /mailto:rudrakshsyal@gmail\.com/);
  assert.match(html, /linkedin\.com\/in\/rudraksh-syal/);
  assert.match(html, /github\.com\/rudrakshsyal/);
  assert.match(html, /Dynamic Pricing Engine/);
  assert.match(html, /Base/);
  assert.match(html, /Peak/);
  assert.match(html, /Price Floor/);
  assert.match(html, /Aggregated, representative operational data/);
  assert.match(html, /Agentic pricing layer/);
  assert.match(html, /4,000\+/);
  assert.doesNotMatch(html, /Career Studio/);
  assert.doesNotMatch(html, /10\+ years/);
});

test("keeps the approved homepage scope and removes starter artifacts", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /type ScenarioKey = "base" \| "peak" \| "floor"/);
  assert.match(page, /Open to roles/);
  assert.match(page, /hero-metrics/);
  assert.match(page, /Download resume/);
  assert.match(layout, /Data Science Lead, Agentic AI & Applied ML/);
  assert.match(layout, /siteConfig\.url/);
  assert.doesNotMatch(page, /Career Studio/);
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
  assert.match(html, /Agentic pricing layer/);
  assert.match(html, /85–90% accepted/);
  assert.match(html, /Chamomile Contract Intelligence/);
  assert.match(html, /Cancellation Policy Intelligence/);
  assert.match(html, /~600 operators/);
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
  assert.match(html, /4,000\+/);
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
  assert.match(html, /~600/);
  assert.match(html, /~85%/);
  assert.match(html, /Human review/);
  assert.match(html, /Haiku/);
  assert.match(html, /Sonnet/);
  assert.match(html, /XO marketplace/);
  assert.doesNotMatch(html, /84\.7%/);
  assert.doesNotMatch(html, /15\.3%/);
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
  assert.match(html, /Hana E Solutions/);
  assert.match(html, /Oct 2026—Present/);
  assert.match(html, /May 2024—Jul 2026/);
  assert.match(html, /Oct 2021—Apr 2024/);
  assert.match(html, /Practo Technologies/);
  assert.match(html, /Purdue University/);
  assert.match(html, /84\.51/);
  assert.match(html, /Vista/);
  assert.match(html, /Still hands-on\. Increasingly a multiplier/);
  assert.doesNotMatch(html, /2021—Now/);
  assert.ok(html.indexOf("Hana E Solutions") < html.indexOf("Practo Technologies"));
});

test("server-renders Building now", async () => {
  const response = await render("/now");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Public repositories from the last four months/);
  assert.match(html, /evidentML/);
  assert.match(html, /deep_research_agent/);
  assert.match(html, /ai-digital-twin/);
  assert.match(html, /the_sidekick_agent/);
  assert.match(html, /grokbot_tv_launcher/);
  assert.match(html, /autonomous_trading_floor/);
  assert.match(html, /dynamic_pricing_engine/);
  assert.match(html, /ai_portfolio/);
  assert.match(html, /Four to open first/);
  assert.match(html, /Also updated in this window/);
  assert.match(html, /OpenAI Agents SDK/);
  assert.match(html, /Updated 26 Oct 2026/);
  assert.match(html, /Where I’m headed/);
  assert.match(html, /github\.com\/rudrakshsyal\/evidentML/);
});

test("server-renders Where I'm headed", async () => {
  const response = await render("/future");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Agentic systems, with a person still in the loop/);
  assert.match(html, /Staff \/ Principal Data Scientist/);
  assert.match(html, /Forward Deployed Engineer/);
  assert.match(html, /Next steps the READMEs already name/);
  assert.match(html, /evidentML/);
  assert.match(html, /the_sidekick_agent/);
  assert.match(html, /dynamic_pricing_engine/);
  assert.match(html, /Hana E Solutions/);
  assert.match(html, /proof of concept/i);
  const sitemap = await render("/sitemap.xml");
  const xml = await sitemap.text();
  assert.match(xml, /\/future/);
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
  assert.match(html, /Forward Deployed Engineer/);
  assert.match(html, /11\+/);
  assert.match(html, /Frame/);
  assert.match(html, /Ship/);
  assert.match(html, /Purdue University/);
  assert.match(html, /US 12,314,757 B1/);
  assert.match(html, /Open to roles/);
  assert.doesNotMatch(html, /10\+ years/);
});

test("server-renders the résumé page and downloads the PDFs", async () => {
  const response = await render("/resume");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Download the résumé that matches the role/);
  assert.match(html, /href="\/resume\.pdf"/);
  assert.match(html, /href="\/resumes\/agentic-ai-llm\.pdf"/);
  assert.match(html, /href="\/resumes\/forward-deployed-engineer\.pdf"/);
  assert.match(html, /href="\/resumes\/product-decision-science\.pdf"/);
  assert.doesNotMatch(html, /visa|H-1B|work authorization/i);

  for (const pathname of [
    "/resume.pdf",
    "/resumes/agentic-ai-llm.pdf",
    "/resumes/forward-deployed-engineer.pdf",
    "/resumes/product-decision-science.pdf",
  ]) {
    const pdf = await render(pathname);
    assert.equal(pdf.status, 200, pathname);
    assert.match(pdf.headers.get("content-type") ?? "", /application\/pdf/);
    const bytes = Buffer.from(await pdf.arrayBuffer());
    assert.equal(bytes.subarray(0, 4).toString(), "%PDF");
  }
});

test("server-renders the agentic pricing case study", async () => {
  const response = await render("/work/agentic-pricing");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /A recommendation the pricing manager can accept or reject/);
  assert.match(html, /AWS Bedrock/);
  assert.match(html, /7/);
  assert.match(html, /~240\/day/);
  assert.match(html, /85–90%/);
  assert.match(html, /parallel run/i);
  assert.match(html, /LangSmith/);
  assert.match(html, /no agent framework/i);
  assert.doesNotMatch(html, /10\+ years/);
});

test("publishes canonical URL, social URL, icons, and Person JSON-LD", async () => {
  const response = await render("/");
  const html = await response.text();
  const origin = "https://rudraksh-syal-portfolio.glasnost.chatgpt.site";
  assert.match(html, new RegExp(`rel="canonical" href="${origin}"`));
  assert.match(html, new RegExp(`property="og:url" content="${origin}"`));
  assert.match(html, new RegExp(`rel="icon" href="${origin}/favicon\\.png"`));
  assert.match(html, new RegExp(`rel="apple-touch-icon" href="${origin}/apple-touch-icon\\.png"`));
  assert.match(html, /"@type":"Person"/);
  assert.match(html, /"addressLocality":"San Jose"/);
  assert.match(html, /"jobTitle":"Data Science Lead"/);
  assert.match(html, /https:\/\/linkedin\.com\/in\/rudraksh-syal/);
  assert.match(html, /https:\/\/github\.com\/rudrakshsyal/);
  assert.doesNotMatch(html, /plausible\.io|cloudflareinsights|umami/);

  const resume = await render("/resume");
  const resumeHtml = await resume.text();
  assert.match(resumeHtml, new RegExp(`rel="canonical" href="${origin}/resume"`));
  assert.match(resumeHtml, new RegExp(`property="og:url" content="${origin}/resume"`));
});

test("serves robots.txt and sitemap.xml from the configured origin", async () => {
  const robots = await render("/robots.txt");
  assert.equal(robots.status, 200);
  const robotsText = await robots.text();
  assert.match(robotsText, /User-Agent: \*/);
  assert.match(robotsText, /Sitemap: https:\/\/rudraksh-syal-portfolio\.glasnost\.chatgpt\.site\/sitemap\.xml/);

  const sitemap = await render("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert.match(xml, /https:\/\/rudraksh-syal-portfolio\.glasnost\.chatgpt\.site\/work\/agentic-pricing/);
  assert.match(xml, /https:\/\/rudraksh-syal-portfolio\.glasnost\.chatgpt\.site\/resume/);
  assert.match(xml, /https:\/\/rudraksh-syal-portfolio\.glasnost\.chatgpt\.site\/now/);
});

test("keeps conflicting career figures out of site copy", async () => {
  const files = [
    "../app/page.tsx",
    "../app/layout.tsx",
    "../app/about/page.tsx",
    "../app/journey/page.tsx",
    "../app/now/page.tsx",
    "../app/resume/page.tsx",
    "../app/work/page.tsx",
    "../app/work/agentic-pricing/page.tsx",
    "../app/work/cancellation-policy-badging/page.tsx",
    "../README.md",
    "../CHANGELOG.md",
    "../docs/CLAIMS_LEDGER.md",
  ];
  const forbidden = [/10\+ years/i, /84\.7%/, /15\.3%/, /\b532\b/, /1,100\+/, /9 U\.S\. regions/, /9 US regions/];
  for (const file of files) {
    const source = await readFile(new URL(file, import.meta.url), "utf8");
    for (const pattern of forbidden) {
      assert.doesNotMatch(source, pattern, `${file} matches ${pattern}`);
    }
  }
});
