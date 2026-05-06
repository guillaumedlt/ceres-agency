import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing SaaS B2B : 15 questions strategiques inevitables",
  description:
    "Les 15 questions fondamentales avant de construire sa strategie marketing SaaS B2B. Positionnement, ICP, canaux d'acquisition, budget, metriques et equipe.",
  openGraph: {
    title: "Marketing SaaS B2B : 15 questions strategiques inevitables",
    description:
      "Les 15 questions fondamentales avant de construire sa strategie marketing SaaS B2B. Positionnement, ICP, canaux d'acquisition, budget, metriques et equipe.",
    url: "https://ceres.agency/blog/marketing-saas-b2b-15-questions-strategiques",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/marketing-saas-b2b-15-questions-strategiques",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
