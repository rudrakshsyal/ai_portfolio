# Rudraksh Syal — AI Portfolio

An evidence-led portfolio of data science, machine learning, product
measurement, pricing, and applied AI systems built across 11+ years of
hands-on work.

**Live portfolio:** [rudraksh-syal-portfolio.glasnost.chatgpt.site](https://rudraksh-syal-portfolio.glasnost.chatgpt.site)

## Why this repository exists

LinkedIn is useful for chronology and GitHub is useful for code. This portfolio
is designed for the space between them: the decisions, tradeoffs, evidence, and
product outcomes behind the work.

The repository is also intended to be a durable career record. It will evolve
as new systems are built, older projects are revisited, and current interests
move from experiments into production practice.

## What the portfolio covers

- **Dynamic Pricing Engine** — forecasting, demand response, optimization, and
  production decision systems.
- **EU Light Jet Pricing** — a cost-to-serve model with directly auditable
  margin outcomes.
- **Agentic pricing layer** — a custom Python tool-calling layer on Claude via
  AWS Bedrock, live across 7 U.S. regions at about 240 requests a day, with
  85–90% of recommendations accepted by a pricing manager.
- **Chamomile Contract Intelligence** — clause-aware RAG across 4,000+ aviation
  contracts using Amazon Bedrock Knowledge Bases, OpenSearch Serverless hybrid
  retrieval, and a SageMaker-hosted Llama 3.1 8B model.
- **Cancellation Policy Intelligence** — confidence-aware model routing that
  translated refund terms for ~600 operators into customer-readable marketplace
  signals, with about 85% badge-ready and uncertain cases held for review.
- **Product Measurement** — experimentation, causal inference, and self-serve
  analytics supporting product and merchandising decisions.
- **Journey, Building now, and About** — the progression from analytics to
  production ML and applied AI, plus dated public repositories.

## Information architecture

```text
Homepage
├── positioning and flagship DPE instrument
├── selected work
├── recent-first career journey
├── current interests and lab
└── contact

Work
├── Dynamic Pricing Engine
├── Agentic pricing layer
├── Chamomile Contract Intelligence
├── Cancellation Policy Intelligence
├── EU Light Jet Pricing
├── Product Measurement
└── Patent

Supporting pages
├── Journey
├── Building now
├── About
└── Resume
```

## Design principles

1. **Evidence before adjectives.** Important claims should be supported by a
   result, system behavior, or clearly labeled public reconstruction.
2. **Progressive disclosure.** Recruiters can understand the profile quickly;
   technical readers can continue into architecture and evaluation details.
3. **Visual explanation.** Diagrams and compact instruments should communicate
   the system before long-form text is required.
4. **Light, restrained presentation.** The interface uses tonal surfaces,
   whitespace, and measured typography instead of mixing dark and light themes.
5. **Public-safe by construction.** Proprietary data, contracts, prompts,
   credentials, and customer information are not committed.

## Technology

- Next.js-compatible application structure
- React and TypeScript
- Vinext and Vite
- Cloudflare Worker runtime
- pnpm
- Node test runner for rendered-route checks

## Local development

Requirements:

- Node.js 22.13 or later
- pnpm

```bash
pnpm install
pnpm dev
```

Run the complete build and rendered-page test suite:

```bash
pnpm test
```

## Long-term maintenance

Portfolio updates use focused branches and pull requests. A normal update
includes:

1. Record the public-safe career change.
2. Identify the pages and claims affected.
3. Update the site and claims ledger.
4. Run the build and route tests.
5. Review links, responsive layouts, and privacy boundaries.
6. Merge the PR and publish the same approved source to the live Site.

See [Maintenance](docs/MAINTENANCE.md), [Claims Ledger](docs/CLAIMS_LEDGER.md),
and the [Case Study Template](docs/CASE_STUDY_TEMPLATE.md).

## Public and private boundaries

This repository contains the public portfolio only. Interview notes, private
career preparation, personal records, proprietary source documents, and future
Career Studio data remain outside the repository.

See [Content and Privacy](docs/CONTENT_AND_PRIVACY.md) for the full policy.

## License

The application code is available under the Apache License 2.0. Personal
portfolio copy, case-study narratives, personal branding, résumé information,
and original visual content are not granted for reuse by that code license.
See [NOTICE](NOTICE).
