export type PublicBuild = {
  date: string;
  repo: string;
  href: string;
  title: string;
  summary: string;
};

/**
 * Dated public repositories. Dates are GitHub creation months.
 * Descriptions are limited to what each repository README states.
 */
export const publicBuilds: PublicBuild[] = [
  {
    date: "Nov 2026",
    repo: "autonomous_trading_floor",
    href: "https://github.com/rudrakshsyal/autonomous_trading_floor",
    title: "Autonomous trading floor",
    summary:
      "Trading-floor orchestration with four trader agents, Accounts, Market, and Push MCP servers, a researcher integration, a trust and safety agent, a backend API, and a frontend. The README does not report trading results.",
  },
  {
    date: "Oct 2026",
    repo: "grokbot_tv_launcher",
    href: "https://github.com/rudrakshsyal/grokbot_tv_launcher",
    title: "Glass Home TV launcher",
    summary:
      "A plain HTML, CSS, and JavaScript launcher for Samsung Tizen TVs: a clock, weather, scenic photos, and a glass dock of streaming apps. Discover ranks shows and movies, and an optional Yo-Yo voice assistant answers from an iPhone onto the TV.",
  },
  {
    date: "Oct 2026",
    repo: "the_sidekick_agent",
    href: "https://github.com/rudrakshsyal/the_sidekick_agent",
    title: "Sidekick agent",
    summary:
      "A local Gradio assistant that turns a request and explicit success criteria into a tool-using workflow. A LangChain worker can search, browse with Playwright MCP, and use a sandboxed filesystem; a separate evaluator can send the work back for up to three attempts, with human-in-the-loop approval. It is a learning prototype, not a production automation service.",
  },
  {
    date: "Oct 2026",
    repo: "deep_research_agent",
    href: "https://github.com/rudrakshsyal/deep_research_agent",
    title: "Deep research agent",
    summary:
      "A cross-business research assistant built with the OpenAI Agents SDK and Gradio. It plans searches, runs them concurrently, writes a Markdown report, and delivers that report by email or Pushover.",
  },
  {
    date: "Oct 2026",
    repo: "evidentML",
    href: "https://github.com/rudrakshsyal/evidentML",
    title: "EvidentML",
    summary:
      "Evidence-driven autonomous data science. v0.1 is a tabular benchmark whose working slice profiles a dataset and runs a deterministic data-quality audit with a terminal report. Cleaning, modeling, benchmark scoring, and agent orchestration are not implemented yet.",
  },
  {
    date: "Sep 2026",
    repo: "ai-digital-twin",
    href: "https://github.com/rudrakshsyal/ai-digital-twin",
    title: "AI digital twin",
    summary:
      "The repository README describes this as Rudraksh Syal's AI Digital Twin covering his professional work.",
  },
];
