import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Framework SCORE : evaluer votre revenue engine en 5 piliers | Ceres",
  description:
    "Le framework SCORE de Ceres : 5 piliers pour evaluer votre revenue engine (Strategie, CRM, Ops, Reporting, Equipes). Auto-diagnostic + grille de notation gratuite.",
  keywords: ["framework revops", "framework score ceres", "evaluer revenue engine", "audit revops methode", "scorecard revops"],
  alternates: { canonical: "https://ceres.agency/framework-score-revops" },
  openGraph: {
    title: "Framework SCORE : evaluer votre revenue engine en 5 piliers | Ceres",
    description: "Le framework SCORE de Ceres pour evaluer votre revenue engine : Strategie, CRM, Ops, Reporting, Equipes.",
    url: "https://ceres.agency/framework-score-revops",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
