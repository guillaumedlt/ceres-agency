import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide RevOps Ultime : contenu complet des 9 chapitres",
  description:
    "Contenu complet du Guide RevOps Ultime : 9 chapitres couvrant audit, KPIs, stack techno, alignement equipes, automatisation et gouvernance des donnees CRM.",
  alternates: {
    canonical: "https://ceres.agency/guide-revops-ultime/contenu",
  },
  openGraph: {
    title: "Guide RevOps Ultime : contenu complet des 9 chapitres",
    description: "Contenu complet du Guide RevOps Ultime : 9 chapitres couvrant audit, KPIs, stack techno, alignement equipes, automatisation et gouvernance des donnees CRM.",
    url: "https://ceres.agency/guide-revops-ultime/contenu",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
