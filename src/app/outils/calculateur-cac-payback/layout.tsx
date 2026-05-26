import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur CAC Payback Period gratuit | Ceres",
  description:
    "Calculateur CAC Payback gratuit. Combien de mois pour rentabiliser un client SaaS B2B ? Formule + benchmark 2026. Resultat instantane sans inscription.",
  keywords: ["calculateur cac payback", "cac payback period", "formule cac payback", "saas cac calculator", "delai rentabilisation client"],
  alternates: { canonical: "https://ceres.agency/outils/calculateur-cac-payback" },
  openGraph: {
    title: "Calculateur CAC Payback Period gratuit | Ceres",
    description: "Combien de mois pour rentabiliser un client SaaS ? Formule + benchmark 2026.",
    url: "https://ceres.agency/outils/calculateur-cac-payback",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
