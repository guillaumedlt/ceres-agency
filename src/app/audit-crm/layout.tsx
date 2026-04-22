import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit CRM | Diagnostic complet de votre CRM | Ceres",
  description:
    "Audit CRM complet en 80 points. Diagnostic HubSpot, Salesforce ou Pipedrive. Score de maturite, plan d\u2019action priorise, quick wins. A partir de 2 500 EUR.",
  keywords: [
    "audit crm",
    "audit hubspot",
    "diagnostic crm",
    "audit salesforce",
    "audit crm gratuit",
    "diagnostic hubspot",
    "audit crm france",
    "evaluation crm",
    "audit donnees crm",
    "optimisation crm",
  ],
  alternates: {
    canonical: "https://ceres.agency/audit-crm",
  },
  openGraph: {
    title: "Audit CRM | Diagnostic complet de votre CRM | Ceres",
    description: "Audit CRM complet en 80 points. Diagnostic HubSpot, Salesforce ou Pipedrive. Score de maturite, plan d\u2019action priorise, quick wins. A partir de 2 500 EUR.",
    url: "https://ceres.agency/audit-crm",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
