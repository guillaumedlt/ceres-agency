import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour startups : par ou commencer quand on est petit",
  description:
    "Guide pratique du RevOps pour startups de 5 a 50 personnes. Quoi prioriser, budget, recruter ou externaliser, roadmap par phase de croissance avec stack adapte.",
  openGraph: {
    title: "RevOps pour startups : par ou commencer quand on est petit",
    description:
      "Guide pratique du RevOps pour startups de 5 a 50 personnes. Quoi prioriser, budget, recruter ou externaliser, roadmap par phase de croissance avec stack adapte.",
    url: "https://ceres.agency/blog/revops-startups-par-ou-commencer",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/revops-startups-par-ou-commencer",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
