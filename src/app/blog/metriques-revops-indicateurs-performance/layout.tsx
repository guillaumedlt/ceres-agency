import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Les metriques RevOps : 30 indicateurs pour piloter votre revenue engine",
  description:
    "Guide des 30 metriques RevOps essentielles : acquisition, pipeline, closing, revenue, retention et efficacite operationnelle. Formules, benchmarks et dashboard.",
  openGraph: {
    title: "Les metriques RevOps : 30 indicateurs pour piloter votre revenue engine",
    description:
      "Guide des 30 metriques RevOps essentielles : acquisition, pipeline, closing, revenue, retention et efficacite operationnelle. Formules, benchmarks et dashboard.",
    url: "https://ceres.agency/blog/metriques-revops-indicateurs-performance",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/metriques-revops-indicateurs-performance",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
