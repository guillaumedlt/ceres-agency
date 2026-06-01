import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz Maturite RevOps : auto-evaluation framework SCORE | Ceres",
  description:
    "Quiz interactif gratuit : 15 questions pour evaluer votre maturite RevOps sur les 5 piliers du framework SCORE (Strategie, CRM, Operations, Reporting, Equipes). Score /20.",
  keywords: ["quiz revops", "maturite revops", "auto evaluation revops", "framework score", "audit revops gratuit"],
  alternates: { canonical: "https://ceres.agency/outils/quiz-maturite-revops" },
  openGraph: {
    title: "Quiz Maturite RevOps : auto-evaluation framework SCORE | Ceres",
    description: "15 questions pour evaluer votre maturite RevOps. Score sur 20 + recommandations personnalisees.",
    url: "https://ceres.agency/outils/quiz-maturite-revops",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
