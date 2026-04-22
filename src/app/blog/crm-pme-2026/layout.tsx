import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM pour PME en 2026 : le guide pour bien choisir",
  description:
    "Guide complet pour choisir le meilleur CRM pour votre PME en 2026. Comparatif HubSpot, Pipedrive, Salesforce, Zoho, Monday CRM, Folk et noCRM avec prix.",
  openGraph: {
    title: "CRM pour PME en 2026 : le guide pour bien choisir",
    description:
      "Guide complet pour choisir le meilleur CRM pour votre PME en 2026. Comparatif HubSpot, Pipedrive, Salesforce, Zoho, Monday CRM, Folk et noCRM avec prix.",
    url: "https://ceres.agency/blog/crm-pme-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/crm-pme-2026",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
