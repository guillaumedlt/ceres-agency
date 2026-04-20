import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence RevOps en France | Revenue Operations | Ceres",
  description: "Agence RevOps specialisee en France. On aligne marketing, sales et CS, on structure vos operations et on deploie l'IA. 250+ clients accompagnes.",
  keywords: ["agence revops", "agence revops france", "agence revenue operations", "consultant revops", "revops externalise", "revops france", "operations commerciales", "revops paris", "agence ops commerciales", "revenue operations france"],
  openGraph: {
    title: "Agence RevOps en France | Ceres",
    description: "Agence RevOps specialisee en France. On aligne marketing, sales et CS, on structure vos operations et on deploie l'IA.",
    url: "https://ceres.agency/agence-revops",
    type: "website",
  },
  alternates: {
    canonical: "https://ceres.agency/agence-revops",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
