import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enrichissement de leads B2B automatique avec l'IA | Ceres",
  description:
    "L'IA a 50 EUR/mois vs les outils a 500 EUR. Workflow automatique, sources de donnees, resultats mesures.",
  keywords: [
    "enrichissement leads",
    "enrichissement IA",
    "leads B2B",
    "enrichissement automatique",
    "IA enrichissement",
  ],
  openGraph: {
    title: "Enrichissement de leads B2B automatique avec l'IA | Ceres",
    description:
      "L'IA a 50 EUR/mois vs les outils a 500 EUR. Workflow automatique, sources de donnees, resultats mesures.",
    url: "https://ceres.agency/blog/enrichissement-leads-b2b-automatique",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/enrichissement-leads-b2b-automatique",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
