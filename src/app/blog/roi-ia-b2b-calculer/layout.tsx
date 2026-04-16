import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI de l'IA en B2B : comment le calculer | Ceres",
  description:
    "La formule, les gains en temps, l'impact revenue, le cout reel. Exemple chiffre sur un SaaS B2B de 15 commerciaux.",
  keywords: [
    "ROI IA",
    "calculer ROI IA",
    "IA B2B ROI",
    "ROI deploiement IA",
    "IA revenue",
  ],
  openGraph: {
    title: "ROI de l'IA en B2B : comment le calculer | Ceres",
    description:
      "La formule, les gains en temps, l'impact revenue, le cout reel. Exemple chiffre sur un SaaS B2B de 15 commerciaux.",
    url: "https://ceres.agency/blog/roi-ia-b2b-calculer",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/roi-ia-b2b-calculer",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
