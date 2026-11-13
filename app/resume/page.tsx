import type { Metadata } from "next";
import Link from "next/link";
import { CaseFooter } from "../components/CaseFooter";
import { pageMetadata } from "../../lib/metadata";
import { siteConfig } from "../../lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Resume · Rudraksh Syal",
  description:
    "Download Rudraksh Syal's résumé. The default is the technical-lead agentic AI version, with role-specific variants for LLM systems, forward-deployed engineering, and product decision science.",
  path: "/resume",
});

const variants = [
  {
    href: "/resume.pdf",
    label: "Default",
    title: "Technical Lead · Agentic AI & LLM Platforms",
    detail:
      "The résumé linked from the homepage. Team leadership, the live pricing layer, hybrid RAG over 4,000+ contracts, and production ML.",
  },
  {
    href: "/resumes/agentic-ai-llm.pdf",
    label: "Agentic AI & LLM",
    title: "Data Science Lead · Agentic AI & LLM Systems",
    detail:
      "The same production systems, framed for agentic and LLM roles: tool calling, parallel-run adoption, RAG, and human review.",
  },
  {
    href: "/resumes/forward-deployed-engineer.pdf",
    label: "Forward deployed",
    title: "Forward Deployed Agentic AI & LLM Systems",
    detail:
      "Framed around shipping with pricing managers, revenue leaders, and executive stakeholders, from a parallel run through go-live.",
  },
  {
    href: "/resumes/product-decision-science.pdf",
    label: "Product & decision science",
    title: "Product & Decision Science",
    detail:
      "Framed around causal measurement, marketplace pricing, forecasting, and the operating decision. Figures quoted on this site follow the default résumé.",
  },
];

export default function ResumePage() {
  return (
    <main className="case-study resume-page">
      <header className="case-header" aria-label="Resume navigation">
        <Link className="case-brand" href="/" aria-label="Rudraksh Syal portfolio home">
          <span>RS</span>
          <strong>Rudraksh Syal</strong>
        </Link>
        <nav>
          <Link href="/work">Work</Link>
          <Link href="/journey">Journey</Link>
          <Link href="/about">About</Link>
          <Link href="/">Home</Link>
        </nav>
      </header>

      <section className="resume-hero">
        <p className="case-chapter">Resume</p>
        <h1>Download the résumé that matches the role.</h1>
        <p className="availability-line about-availability">{siteConfig.availability}</p>
        <p>Default file: technical-lead résumé. Three role variants are below.</p>
        <a className="download-resume resume-primary" href="/resume.pdf">
          Download resume
        </a>
      </section>

      <section className="resume-variants" aria-label="Résumé variants">
        {variants.map((variant) => (
          <article key={variant.href}>
            <span>{variant.label}</span>
            <h2>{variant.title}</h2>
            <p>{variant.detail}</p>
            <a href={variant.href}>Download PDF →</a>
          </article>
        ))}
      </section>

      <CaseFooter backHref="/" backLabel="← Portfolio" />
    </main>
  );
}
