# Maintenance

This repository is intended to remain useful throughout Rudraksh's career. The
process favors small, well-evidenced updates over infrequent rewrites.

## Weekly review

A weekly review may produce no code change. Record only material progress:

- a project entering or leaving active development;
- a verified result or adoption signal;
- a new responsibility, talk, mentoring contribution, publication, or patent;
- a meaningful architecture or evaluation improvement;
- a repository that is ready to move from Lab into selected work.

Use the **Career update** issue template to capture the change before editing.

## Branch naming

- `content/<topic>` — case-study, career, or metric updates
- `feat/<topic>` — new capability or interaction
- `design/<topic>` — visual-system or layout changes
- `fix/<topic>` — defects, broken links, or accessibility repairs
- `docs/<topic>` — repository documentation

## Commit conventions

- `feat:` new visitor-facing behavior
- `content:` professional narrative or verified claim
- `design:` presentation-system change
- `fix:` correction
- `test:` verification coverage
- `docs:` repository documentation
- `chore:` maintenance without visitor-facing impact

Commits should explain one coherent change. Do not manufacture historical
commits for work completed before the repository existed.

## Pull-request checklist

1. Explain the professional or visitor need.
2. List pages and claims changed.
3. Include screenshots for visible changes.
4. Update the claims ledger.
5. Confirm no sensitive files are present.
6. Run `pnpm test`.
7. Check internal links and primary external links.
8. Review desktop and mobile layouts.
9. Merge only when the narrative and evidence are approved.

## Release rhythm

Use a release only for a meaningful portfolio milestone, not every weekly
commit. Suggested milestones:

- new flagship case study;
- major redesign;
- public AI Digital Twin beta;
- significant role or career transition.

## Annual review

Once per year:

- verify every external link;
- review every quantitative claim;
- archive stale Lab work;
- confirm role targeting and positioning;
- refresh dependencies;
- evaluate accessibility and performance;
- review the public/private boundary.
