import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur LTV / CAC ratio gratuit | Ceres",
  description:
    "Calculateur LTV/CAC gratuit. Mesurer la rentabilite unitaire SaaS B2B : LTV, CAC, ratio, benchmark 2026. Resultat instantane.",
  keywords: ["calculateur ltv cac", "ratio ltv cac", "lifetime value calculator", "ltv saas formule", "unit economics saas"],
  alternates: { canonical: "https://ceres.agency/outils/calculateur-ltv-cac" },
  openGraph: {
    title: "Calculateur LTV / CAC ratio gratuit | Ceres",
    description: "Mesurer la rentabilite unitaire SaaS B2B : LTV, CAC, ratio, benchmark 2026.",
    url: "https://ceres.agency/outils/calculateur-ltv-cac",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
