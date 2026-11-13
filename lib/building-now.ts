export type PublicBuild = {
  /** Last push date on the public GitHub repository, YYYY-MM-DD. */
  updated: string;
  repo: string;
  href: string;
  title: string;
  /** One line taken from that repository's README. */
  summary: string;
  /** Tools named in the README, or the repository language when the README names none. */
  stack: string[];
  featured: boolean;
};

/**
 * Every public, non-fork repository with a push on or after 12 June 2026.
 * That is the full 2026 public set. Repos last pushed in 2019 or earlier are omitted.
 */
export const publicBuilds: PublicBuild[] = [
  {
    updated: "2026-10-26",
    repo: "dynamic_pricing_engine",
    href: "https://github.com/rudrakshsyal/dynamic_pricing_engine",
    title: "Dynamic Pricing Engine",
    summary:
      "A notebook prototype of a supply–demand equilibrium pricing engine for one fleet, using anonymised data.",
    stack: ["Python", "Jupyter", "Streamlit", "OpenAI Agents SDK"],
    featured: true,
  },
  {
    updated: "2026-10-27",
    repo: "the_sidekick_agent",
    href: "https://github.com/rudrakshsyal/the_sidekick_agent",
    title: "Sidekick",
    summary:
      "A local Gradio app that turns a request and success criteria into a tool-using workflow, with an evaluator and human approval.",
    stack: ["Python", "Gradio", "LangChain", "LangGraph", "MCP"],
    featured: true,
  },
  {
    updated: "2026-10-08",
    repo: "evidentML",
    href: "https://github.com/rudrakshsyal/evidentML",
    title: "EvidentML",
    summary:
      "Evidence-driven autonomous data science. v0.1 profiles a dataset and audits quality; modeling and agents are not implemented.",
    stack: ["Python"],
    featured: true,
  },
  {
    updated: "2026-10-13",
    repo: "deep_research_agent",
    href: "https://github.com/rudrakshsyal/deep_research_agent",
    title: "Deep research",
    summary:
      "A research assistant that plans web searches, writes a Markdown report, and delivers it by email or Pushover.",
    stack: ["Python", "OpenAI Agents SDK", "Gradio"],
    featured: true,
  },
  {
    updated: "2026-11-13",
    repo: "autonomous_trading_floor",
    href: "https://github.com/rudrakshsyal/autonomous_trading_floor",
    title: "Autonomous trading floor",
    summary:
      "Trading-floor orchestration with four trader agents, MCP servers, a trust and safety agent, a backend API, and a frontend. No results are reported.",
    stack: ["Jupyter", "MCP"],
    featured: false,
  },
  {
    updated: "2026-11-09",
    repo: "grokbot_tv_launcher",
    href: "https://github.com/rudrakshsyal/grokbot_tv_launcher",
    title: "Glass Home",
    summary:
      "A plain HTML, CSS, and JavaScript launcher for Samsung Tizen TVs, with a dock of streaming apps and an optional voice assistant.",
    stack: ["HTML", "CSS", "JavaScript", "Tizen"],
    featured: false,
  },
  {
    updated: "2026-10-16",
    repo: "ai-digital-twin",
    href: "https://github.com/rudrakshsyal/ai-digital-twin",
    title: "AI digital twin",
    summary: "Rudraksh Syal's AI Digital Twin covering his professional work.",
    stack: ["Python"],
    featured: false,
  },
  {
    updated: "2026-11-13",
    repo: "ai_portfolio",
    href: "https://github.com/rudrakshsyal/ai_portfolio",
    title: "This portfolio",
    summary:
      "The public portfolio between LinkedIn and GitHub: decisions, tradeoffs, evidence, and product outcomes.",
    stack: ["TypeScript", "React"],
    featured: false,
  },
  {
    updated: "2026-06-30",
    repo: "neetcode-submissions",
    href: "https://github.com/rudrakshsyal/neetcode-submissions",
    title: "NeetCode submissions",
    summary:
      "NeetCode.io solutions synced into topic folders. The README does not list which problems were solved.",
    stack: ["Python"],
    featured: false,
  },
  {
    updated: "2026-06-12",
    repo: "opportunities_scoring_analytics",
    href: "https://github.com/rudrakshsyal/opportunities_scoring_analytics",
    title: "Opportunity scoring",
    summary:
      "Scoring intent-bound Salesforce opportunities to improve the lead conversion funnel.",
    stack: ["Salesforce"],
    featured: false,
  },
];

export const featuredBuilds = publicBuilds.filter((build) => build.featured);
export const otherBuilds = publicBuilds.filter((build) => !build.featured);

export function formatUpdated(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${day} ${months[month - 1]} ${year}`;
}
