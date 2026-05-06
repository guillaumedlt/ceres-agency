import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps Manager : fiche de poste, salaire et competences",
  description:
    "Le metier de RevOps Manager en France : fiche de poste, salaire par experience, competences, outils et parcours de carriere.",
  openGraph: {
    title: "RevOps Manager : fiche de poste, salaire et competences",
    description:
      "Le metier de RevOps Manager en France : fiche de poste, salaire par experience, competences, outils et parcours de carriere.",
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
