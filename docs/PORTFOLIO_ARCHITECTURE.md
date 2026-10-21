# Portfolio Architecture

## Purpose

The portfolio is a presentation layer for professional evidence. It is not a
replacement for LinkedIn, a résumé, or the underlying technical repositories.
It connects those artifacts by explaining the problem, system, decisions,
evaluation, outcome, and personal contribution behind each project.

## Primary audiences

1. Recruiters evaluating profile fit in under a minute.
2. Hiring managers comparing scope, ownership, and business outcomes.
3. Technical interviewers exploring architecture and tradeoffs.
4. Product and cross-functional leaders evaluating decision quality.
5. Rudraksh preparing for interviews and maintaining a long-term career record.

## Visitor progression

The homepage establishes positioning and offers a small number of strong proof
points. The Work library separates flagship case studies from supporting work.
Case-study pages progressively disclose implementation and evaluation details.
Journey is recent-first, while Now & Lab clearly distinguishes current learning
from established production experience.

## Application structure

| Route | Responsibility |
| --- | --- |
| `/` | Positioning, flagship system, selected work, journey, current interests |
| `/work` | Work library, patent, and project navigation |
| `/work/dynamic-pricing-engine` | DPE and EU Light Jet pricing case studies |
| `/work/contract-intelligence` | Chamomile parsing and corpus-scale RAG |
| `/work/cancellation-policy-badging` | Policy extraction, routing, and marketplace badging |
| `/work/measurement-experimentation` | Experimentation and causal measurement |
| `/journey` | Recent-first career timeline |
| `/now` | Active learning, prototypes, and open questions |
| `/about` | Technical depth, product judgment, and leadership profile |

## Content layers

Each flagship case study should expose four layers:

1. **Ten-second view:** problem, result, and compact visualization.
2. **Product view:** user, decision, workflow, and organizational value.
3. **Technical view:** architecture, modeling or retrieval choices, evaluation,
   failure handling, and tradeoffs.
4. **Interview view:** personal contribution and defensible follow-up details.

Only the first three are public. Private interview notes remain outside this
repository.

## Source and publishing model

GitHub is the durable, public source record. The production website is hosted
through Sites. A release should publish the same reviewed source state that was
merged into `main`; generated deployment artifacts are never committed.

The tracked `.openai/hosting.json` contains deployment configuration and a
project identifier, but no credential. Runtime secrets must remain in the
hosting environment.

## Future AI Digital Twin

The Digital Twin will appear as a compact homepage entry point rather than a
large embedded chat surface. Its public scope is limited to approved portfolio
content. It should:

- identify itself as an AI assistant;
- cite the portfolio evidence used in each substantive answer;
- decline when approved evidence is insufficient;
- avoid automatic email or personal-data collection;
- require an explicit contact action before transmitting visitor information;
- use rate limits, cost controls, minimal logs, and prompt-injection defenses.

The current portfolio remains fully useful without the assistant.
