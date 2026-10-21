# Content and Privacy

## Public-content standard

Content may be committed when it is:

- approved for public use;
- accurate enough to defend in an interview;
- expressed at an architectural or aggregated level;
- free of customer, employee, operator, and visitor identifiers;
- supported by a known source or explicitly labeled as illustrative.

## Never commit

- contracts, invoices, customer records, or extracted proprietary clauses;
- production prompts, API keys, access tokens, endpoints, or credentials;
- visitor conversations, email addresses, analytics exports, or contact logs;
- private interview experiences or personal notes;
- internal screenshots, dashboards, or documents without explicit approval;
- local databases, model caches, generated build output, or deployment logs;
- a metric whose definition or publication status is uncertain.

## Metric handling

Every material metric should be recorded in the public claims ledger before
publication. The ledger stores the claim, scope, and public-approval status—not
the confidential source evidence itself.

Representative or reconstructed data must be labeled. Aggregated operational
data may be used only when it cannot identify a customer, operator, employee,
or proprietary transaction.

## Case-study boundaries

Public case studies can explain:

- scale and user workflow;
- architecture and model classes;
- evaluation methodology;
- decision tradeoffs;
- aggregated outcomes;
- Rudraksh's role and cross-functional collaboration.

They should omit:

- proprietary source content;
- operational thresholds that expose business rules;
- exact prompts or sensitive metadata schemas;
- infrastructure details that create security risk;
- claims that cannot be confidently reconstructed.

## Résumé and personal documents

The repository may link to a public résumé, but source résumés and personal
documents are not committed by default. A future public résumé artifact
requires its own review.

## AI Digital Twin

The public assistant must retrieve only from an approved index of public
content. Private notes and interview-preparation material require a separate,
access-controlled system and must never enter the public retrieval corpus.
