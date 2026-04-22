import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analyser vos calls commerciaux avec l'IA | Ceres",
  description:
    "Ce que l'IA extrait d'un call commercial : resume, objections, next steps et sentiment. Le workflow complet d'analyse pour equipes de vente B2B.",
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
      "Ce que l'IA extrait d'un call commercial : resume, objections, next steps et sentiment. Le workflow complet d'analyse pour equipes de vente B2B.",
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
