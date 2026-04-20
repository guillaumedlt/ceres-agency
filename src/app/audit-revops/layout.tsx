import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit RevOps — Diagnostic CRM, Process & Data | Ceres",
  description:
    "Audit complet RevOps : CRM, process commerciaux, data quality, integrations. Rapport actionnable avec plan d'action priorise. Resultats en 2 semaines.",
  keywords: [
    "audit revops",
    "audit crm",
    "audit hubspot",
    "diagnostic commercial",
    "data quality crm",
    "audit process commercial",
    "optimisation pipeline",
    "consultant revops",
    "audit salesforce",
    "revops diagnostic",
    "audit ops commerciales",
    "revops france",
  ],
  alternates: {
    canonical: "https://ceres.agency/audit-revops",
  },
  openGraph: {
    title: "Audit RevOps — Diagnostic CRM, Process & Data | Ceres",
    description:
      "Audit complet RevOps : CRM, process commerciaux, data quality, integrations. Rapport actionnable avec plan d'action priorise.",
    url: "https://ceres.agency/audit-revops",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
