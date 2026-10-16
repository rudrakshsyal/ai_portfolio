import type { Metadata } from "next";
import DpeStory from "./DpeStory";

export const metadata: Metadata = {
  title: "Dynamic Pricing Engine · Rudraksh Syal",
  description:
    "A pricing case study spanning supply-demand modeling, the EU Light Jet cost-to-serve GBM, and a controlled comparison of conventional ML, direct GPT-5.5 forecasts, and agent-directed research.",
};

export default function DynamicPricingEnginePage() {
  return <DpeStory />;
}
