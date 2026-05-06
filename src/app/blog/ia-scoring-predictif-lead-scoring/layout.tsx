import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scoring predictif IA : remplacer le lead scoring manuel",
  description:
    "Lead scoring classique vs scoring predictif par IA : comment le machine learning analyse vos deals CRM. Implementation et resultats.",
  openGraph: {
    title: "Scoring predictif IA : remplacer le lead scoring manuel",
    description:
      "Lead scoring classique vs scoring predictif par IA : comment le machine learning analyse vos deals CRM. Implementation et resultats.",
    url: "https://ceres.agency/blog/ia-scoring-predictif-lead-scoring",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-scoring-predictif-lead-scoring",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
