import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps Manager : fiche de poste, salaire et competences en 2026",
  description:
    "Guide complet du metier de RevOps Manager en France : fiche de poste, salaire par experience et region, competences, outils, parcours de carriere et externalisation.",
  openGraph: {
    title: "RevOps Manager : fiche de poste, salaire et competences en 2026",
    description:
      "Guide complet du metier de RevOps Manager en France : fiche de poste, salaire par experience et region, competences, outils, parcours de carriere et externalisation.",
    url: "https://ceres.agency/blog/revops-manager-fiche-poste-salaire-competences",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/revops-manager-fiche-poste-salaire-competences",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
