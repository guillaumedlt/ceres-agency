import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analyser vos calls commerciaux avec l'IA | Ceres",
  description:
    "Ce que l'IA extrait d'un call : resume, objections, next steps, sentiment. Le workflow complet d'analyse.",
  keywords: [
    "analyse calls IA",
    "IA calls commerciaux",
    "resume call IA",
    "Claap IA",
    "Gong alternatives",
  ],
  openGraph: {
    title: "Analyser vos calls commerciaux avec l'IA | Ceres",
    description:
      "Ce que l'IA extrait d'un call : resume, objections, next steps, sentiment. Le workflow complet d'analyse.",
    url: "https://ceres.agency/blog/ia-analyse-calls-commerciaux",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-analyse-calls-commerciaux",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
