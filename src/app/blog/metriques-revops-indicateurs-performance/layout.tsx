import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metriques RevOps : 30 indicateurs pour votre revenue",
  description:
    "Guide des 30 metriques RevOps essentielles : acquisition, pipeline, closing, revenue, retention et efficacite operationnelle. Formules, benchmarks et dashboard.",
  openGraph: {
    title: "Metriques RevOps : 30 indicateurs pour votre revenue",
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
