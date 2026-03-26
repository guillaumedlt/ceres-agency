import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour startups : par ou commencer quand on est petit",
  description:
    "Guide pratique du RevOps pour startups de 5 a 50 personnes. Quoi prioriser, budget, recruter ou externaliser, roadmap par phase de croissance avec stack adapte.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
