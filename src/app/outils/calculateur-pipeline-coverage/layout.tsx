import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur Pipeline Coverage gratuit | Ceres",
  description:
    "Calculateur Pipeline Coverage gratuit. Avez-vous assez de pipeline pour atteindre vos objectifs Q ? Formule + benchmark + recommandations 2026.",
  keywords: ["calculateur pipeline coverage", "pipeline coverage ratio", "saas pipeline calculator", "coverage commercial", "pipeline 3x 4x"],
  alternates: { canonical: "https://ceres.agency/outils/calculateur-pipeline-coverage" },
  openGraph: {
    title: "Calculateur Pipeline Coverage gratuit | Ceres",
    description: "Avez-vous assez de pipeline pour atteindre vos objectifs ? Formule + benchmark.",
    url: "https://ceres.agency/outils/calculateur-pipeline-coverage",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
