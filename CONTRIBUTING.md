# Maintaining This Portfolio

This is a personal portfolio rather than a general-purpose open-source product.
Contributions should improve accuracy, clarity, accessibility, maintainability,
or the faithful presentation of Rudraksh Syal's work.

## Routine update workflow

1. Open a career-update issue or write a short public-safe update brief.
2. Create a focused branch such as `content/chamomile-evaluation` or
   `feature/ai-digital-twin`.
3. Update the relevant page and, when needed, the claims ledger and changelog.
4. Keep private evidence, interview notes, customer data, credentials, and
   proprietary implementation details outside the repository.
5. Run `pnpm test` and review every affected route at desktop and mobile sizes.
6. Open a pull request using the repository checklist.
7. Merge only after the content, links, claims, and privacy boundaries are
   reviewed.
8. Publish the same reviewed revision to the live Site.

## Commit style

Use small, descriptive commits:

- `content: add evaluation detail to Chamomile`
- `feat: add an interactive project diagram`
- `fix: repair mobile project navigation`
- `docs: record a new public claim`
- `chore: update dependencies`

## Content standard

Each case study should make five things easy to find:

1. The business or product decision.
2. The system and technical architecture.
3. The most important tradeoff.
4. The validation or measurement method.
5. The outcome and its level of certainty.

Use [the case-study template](docs/CASE_STUDY_TEMPLATE.md) and check numerical
claims against [the claims ledger](docs/CLAIMS_LEDGER.md).

## External corrections

Corrections to broken links, accessibility problems, typographical errors, or
public technical descriptions are welcome through an issue. Do not submit or
request confidential supporting material.
