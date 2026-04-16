import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prompt engineering pour equipes commerciales | Ceres",
  description:
    "5 prompts concrets pour les commerciaux : briefing, email, resume call, proposition, analyse win/loss.",
  keywords: [
    "prompt engineering",
    "prompt commercial",
    "prompt sales",
    "ChatGPT commercial",
    "Claude prompts",
  ],
  openGraph: {
    title: "Prompt engineering pour equipes commerciales | Ceres",
    description:
      "5 prompts concrets pour les commerciaux : briefing, email, resume call, proposition, analyse win/loss.",
    url: "https://ceres.agency/blog/prompt-engineering-equipes-commerciales",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/prompt-engineering-equipes-commerciales",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
