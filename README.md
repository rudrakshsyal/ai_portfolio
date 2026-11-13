# Rudraksh Syal — AI Portfolio

Public portfolio for Rudraksh Syal, Data Science Lead. It is the page a
recruiter or hiring manager should open first: who he is, what he has shipped,
what he is building, and how to reach him.

**Live site:** [rudraksh-syal-portfolio.glasnost.chatgpt.site](https://rudraksh-syal-portfolio.glasnost.chatgpt.site)

The live site is updated only by a manual publish in ChatGPT Sites. This
repository does not deploy itself. See [Publish](#publish-to-chatgpt-sites).

## What it is for

- A 10-second read for someone hiring: name, current title, 11+ years,
  target roles, availability, and three proof points.
- Evidence behind the work: pricing, measurement, retrieval, and the live
  agentic pricing layer.
- A dated list of public repositories, kept separate from production claims.
- A single place to download the résumé.

He is actively looking and available now, in San Jose, CA or remote. The site
does not mention visa status or work authorization.

Target roles:

- Staff / Principal Data Scientist
- AI / Agentic Engineer
- Forward Deployed Engineer
- DS / AI Tech Lead or Manager

## Pages

| Route | What a visitor gets |
| --- | --- |
| `/` | Hero, proof metrics, contact actions, selected work, skills, journey, and a short Building now preview |
| `/work` | Work library and the patent |
| `/work/dynamic-pricing-engine` | Dynamic Pricing Engine and EU Light Jet pricing |
| `/work/agentic-pricing` | LLM tool-calling pricing layer on Claude via AWS Bedrock |
| `/work/contract-intelligence` | Chamomile retrieval across 4,000+ contracts |
| `/work/cancellation-policy-badging` | Cancellation badges for ~600 operators, ~85% badge-ready |
| `/work/measurement-experimentation` | Experimentation and causal measurement |
| `/journey` | Recent-first roles. Hana E Solutions is current. Vista ends July 2026 |
| `/now` | Every public GitHub repository pushed since 12 June 2026 |
| `/future` | Target roles and the next steps already named in READMEs |
| `/about` | Positioning, role fit, and contact |
| `/resume` | Default résumé and three role-specific PDFs |

Canonical public figures, used everywhere they appear:

- 11+ years
- 7 U.S. regions
- ~600 operators, about 85% badge-ready, uncertain cases reviewed by a person
- Chamomile: 4,000+ contracts

## Where the words come from

Three sources, and nothing invented past them:

1. **Résumés.** The default download is the technical-lead résumé, served at
   `/resume.pdf`. Role variants live under `/resumes/`. The contract résumé
   that contains work-authorization details is not in this repository. If a
   variant disagrees with the site, the site follows the default résumé and
   [the claims ledger](docs/CLAIMS_LEDGER.md).
2. **This repository.** Case studies, the journey, and approved claims already
   published here. Newer résumé dates win when they conflict. Vista on the
   site ends July 2026 because every current résumé says July, not August.
3. **Public GitHub.** [github.com/rudrakshsyal](https://github.com/rudrakshsyal).
   Repository cards use that repo’s README for the description. A README that
   does not report a result is not given one.

`lib/site.ts` holds the public site URL, availability line, target roles, and
the analytics switch. Canonical links, Open Graph, `robots.txt`, and
`sitemap.xml` all read that URL.

## Run and test locally

Requirements: Node.js 22.13 or later, and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
pnpm test
pnpm lint
```

`pnpm test` builds the site and checks the rendered routes, résumé downloads,
canonical URL, and that retired figures stay out of the copy.

## Publish to ChatGPT Sites

Do this only after the pull request is reviewed and merged to `main`. Publish
that merged revision. Do not publish a side branch.

1. Merge the reviewed pull request into `main`.
2. Open the ChatGPT Sites project for this repo. The project id is in
   `.openai/hosting.json`. It is not a secret. Credentials stay in the hosting
   environment, not in git.
3. In that project, publish the `main` revision manually. The live URL today
   is `https://rudraksh-syal-portfolio.glasnost.chatgpt.site`.
4. Check these URLs on the live host:
   - `/`
   - `/journey`
   - `/now`
   - `/resume` and `/resume.pdf`
   - `/work/agentic-pricing`
   - `/robots.txt` and `/sitemap.xml`
5. Confirm the canonical link and `og:url` use the URL in `lib/site.ts`.

Generated build output is not committed. The Sites project builds from the
published source.

### Custom domain, later

Keep the glasnost URL until the domain actually answers. Then:

1. In the same Sites project, add the custom domain and create the DNS records
   the project shows. Wait until the project reports the domain as connected.
2. Change only `siteConfig.url` in `lib/site.ts` to `https://` plus that
   domain. If analytics is turned on, point its domain at the new host too.
3. Merge that commit to `main` and publish the same revision.
4. Re-check canonical, `og:url`, `robots.txt`, and `sitemap.xml`. They should
   all use the new origin.

Analytics stays off until `siteConfig.analytics.enabled` is set to `true` and
one provider (Plausible, Umami, or Cloudflare Web Analytics) is filled in.
Republish after that change. See [Maintenance](docs/MAINTENANCE.md).

## Design principles

1. **Evidence before adjectives.** A claim needs a result, a system behavior,
   or a label that says the number is illustrative.
2. **Scan first, depth second.** The first screen is for a recruiter. Case
   studies hold the architecture.
3. **Visual explanation.** A diagram should be readable in a few seconds and
   must have a text alternative.
4. **Light and quiet.** Tonal surfaces, whitespace, and short sentences.
5. **Public-safe.** No contracts, prompts, credentials, customer data, or
   work-authorization details.

## Maintaining it

1. Record the public-safe change.
2. Update the page and, when a number changes, the claims ledger and changelog.
3. Run `pnpm test`.
4. Review desktop and mobile.
5. Merge, then publish that same revision.

See [Maintenance](docs/MAINTENANCE.md), [Claims Ledger](docs/CLAIMS_LEDGER.md),
[Content and Privacy](docs/CONTENT_AND_PRIVACY.md), and the
[Case Study Template](docs/CASE_STUDY_TEMPLATE.md).

## License

Application code is Apache License 2.0. Portfolio copy, case studies, branding,
résumé text, and original visuals are not granted for reuse by that license.
See [NOTICE](NOTICE).
