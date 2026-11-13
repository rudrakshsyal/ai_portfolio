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

`lib/site.ts` holds the public site URL, availability line, and target roles.
Set `NEXT_PUBLIC_SITE_URL` to change the origin. Canonical links, Open Graph,
`robots.txt`, and `sitemap.xml` all read that URL.

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

## Hosting

Two hosts can serve the same source. ChatGPT Sites stays the current live
path. GitHub Pages is the open path, and a custom domain is a one-line change.

The public origin is `NEXT_PUBLIC_SITE_URL`. When that variable is unset, the
site uses `https://rudraksh-syal-portfolio.glasnost.chatgpt.site`. Canonical
links, Open Graph, `robots.txt`, and `sitemap.xml` all read that one value
through `lib/site.ts`.

### ChatGPT Sites

Do this only after a pull request is reviewed and merged to `main`. Publish
that merged revision. Do not publish a side branch.

1. Merge the reviewed pull request into `main`.
2. Open the ChatGPT Sites project for this repo. The project id is in
   `.openai/hosting.json`. It is not a secret. Credentials stay in the hosting
   environment, not in git.
3. In that project, publish the `main` revision manually.
4. Check `/`, `/journey`, `/now`, `/future`, `/resume`, `/resume.pdf`,
   `/work/agentic-pricing`, `/robots.txt`, and `/sitemap.xml`.
5. Confirm the canonical link and `og:url` use the configured origin.

The Sites build is `pnpm build` with `STATIC_EXPORT` unset. It produces the
Cloudflare Worker in `dist/`. Generated output is not committed.

### GitHub Pages

A push to `main` runs `.github/workflows/pages.yml`. It builds a static export
(`STATIC_EXPORT=1`) and deploys that folder with GitHub Actions. The Worker
build is unchanged.

Enable it once, in the GitHub repo:

1. Settings → Pages.
2. Build and deployment → Source: **GitHub Actions**.

Until a domain is set, the workflow publishes a static site whose canonical
URL is `https://rudrakshsyal.github.io/ai_portfolio/`. It does **not** set
`basePath`. Vinext 0.0.50’s static export asks the built server for `/` and
gets a 404 when `basePath` is `/ai_portfolio`, so the export cannot be
prefixed. Root-absolute links (`/assets/...`, `/work/`) therefore miss the
project path. The homepage will not load its CSS on that project URL until
one of these is true:

- `PAGES_DOMAIN` is set and the domain answers at the site root, or
- vinext’s prerender requests `` `${basePath}${path}` `` instead of `path`
  (`node_modules/vinext/dist/build/prerender.js`, `renderUrl`). That is the
  smallest code fix. This repo does not patch vinext.

The ChatGPT Sites build does not use `basePath`, so it is unaffected.

To attach a domain later, set the repository variable `PAGES_DOMAIN` to the
apex, for example `rudrakshsyal.com`. The next push to `main` then:

- sets `NEXT_PUBLIC_SITE_URL` to `https://rudrakshsyal.com`
- clears the base path
- writes `CNAME` into the Pages artifact only (it is not committed)

DNS for GitHub Pages, after the domain is registered:

| Host | Type | Value |
| --- | --- | --- |
| `@` (apex) | A | `185.199.108.153` |
| `@` | A | `185.199.109.153` |
| `@` | A | `185.199.110.153` |
| `@` | A | `185.199.111.153` |
| `www` | CNAME | `rudrakshsyal.github.io` |

Use either the apex or `www` as `PAGES_DOMAIN`, not both. Point the other host
at the one you chose if you want both names to answer. GitHub Pages will ask
you to verify the domain in the Pages settings.

Build the static site locally the same way:

```bash
STATIC_EXPORT=1 pnpm build
```

The HTML is in `dist/client`. Add `NEXT_PUBLIC_SITE_URL` and
`NEXT_PUBLIC_BASE_PATH` when you want to preview the Pages URLs.

## Analytics

GoatCounter is off until you set `NEXT_PUBLIC_GOATCOUNTER_CODE` to the site
code from your GoatCounter account (the subdomain in
`https://<code>.goatcounter.com`). Rebuild and publish after setting it.
Nothing is sent before that. The script is cookie-less. It counts pageviews,
and clicks on a résumé PDF, email, LinkedIn, or GitHub are events.

For ChatGPT Sites, set that variable in the hosting environment before
publishing. For GitHub Pages, add it as a repository variable or secret named
`GOATCOUNTER_CODE` (see the Pages workflow) and push `main` again.

The older Plausible, Umami, and Cloudflare snippet stays off unless
`siteConfig.analytics.enabled` is edited to `true`. GoatCounter is the
supported path.

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
