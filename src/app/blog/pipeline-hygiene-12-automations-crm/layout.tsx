import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline hygiene : 12 automations CRM a mettre en place | Ceres",
  description:
    "Pipeline hygiene en 2026 : 12 automations CRM concretes pour nettoyer, monitorer et optimiser votre pipeline. Templates HubSpot et Salesforce.",
  keywords: ["pipeline hygiene", "automations crm", "nettoyer pipeline hubspot", "deals fantomes", "pipeline cleanup"],
  alternates: { canonical: "https://ceres.agency/blog/pipeline-hygiene-12-automations-crm" },
  openGraph: {
    title: "Pipeline hygiene : 12 automations CRM a mettre en place | Ceres",
    description: "12 automations CRM concretes pour nettoyer et monitorer votre pipeline. Templates HubSpot et Salesforce.",
    url: "https://ceres.agency/blog/pipeline-hygiene-12-automations-crm",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
