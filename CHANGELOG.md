# Changelog

Meaningful portfolio changes are recorded here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and releases use
semantic versioning when a stable public milestone is tagged.

## [Unreleased]

### Added

- README sections for the purpose of the site, the page map, where copy is
  sourced, local test commands, and the manual ChatGPT Sites publish path,
  including the later custom-domain cutover.
- Recruiter-first homepage: availability, target roles, 11+ years, proof
  metrics, and résumé / email / LinkedIn / GitHub actions.
- Agentic pricing-layer case study and a `/resume` page with the default
  technical-lead PDF plus three role-specific variants.
- Skills section, dated Building now page for 2026 public repositories, and a
  short "where I'm headed" section.
- Canonical URL, Open Graph URL, robots, sitemap, favicon, apple touch icon,
  Person JSON-LD, and an analytics snippet that stays off until configured.
- Hana E Solutions on the journey, with Vista closed in July 2026.

### Changed

- Public résumé PDFs no longer include a phone number. Email and LinkedIn stay.
  The contract résumé is still not in the repository.
- The site can be built as a static export for GitHub Pages without changing
  the ChatGPT Sites worker build. The public URL is `NEXT_PUBLIC_SITE_URL`.
  A `CNAME` file is written only when the `PAGES_DOMAIN` variable is set.
- GoatCounter loads only when `NEXT_PUBLIC_GOATCOUNTER_CODE` is set. It does
  not use cookies. Pageviews are counted, and résumé, email, LinkedIn, and
  GitHub clicks are events. The default build includes no analytics script.

- Building now lists every public repository pushed since 12 June 2026,
  including NeetCode submissions and opportunity scoring. Four are featured.
  The rest are a compact list with a README line, stack tags, and the last push date.
- Shared Open Graph image is a 28 KB card: name, Data Science Lead, and “Open to roles.”
- `/future` is the page for target roles and the README roadmap.
- Shorter headlines and section intros on the homepage, journey, about, work library, and case-study openings.
- Case-study navigation wraps on a phone instead of hiding every link but the last.
- Draft GitHub profile README at `docs/github-profile-README.md`, for copying into `rudrakshsyal/rudrakshsyal`. It is not published to that profile from this repo.
- Every page footer has “Ask me about”, email, and LinkedIn.
- Career length is 11+ years. Cancellation policy scale is ~600 operators and
  ~85% badge-ready. Regional scope is 7 U.S. regions. Chamomile remains
  4,000+ contracts.
- Removed the disabled Career Studio header control.
- Corrected the Chamomile searchable contract corpus to 4,000+ across the
  homepage, Work index, detailed case study, and claims documentation.
- Updated the quality workflow to the current Node 24-based GitHub Actions.
- Repository structure now separates public site source from private career
  notes, interview preparation, proprietary evidence, and future Career Studio
  data.
