import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le meilleur CRM B2B en France en 2026",
  description:
    "Comparatif des 7 meilleurs CRM B2B en France : HubSpot, Salesforce, Pipedrive, Microsoft Dynamics, Sellsy, Axonaut et Zoho CRM. Prix et recommandations detaillees.",
  openGraph: {
    title: "Le meilleur CRM B2B en France en 2026",
    description:
      "Comparatif des 7 meilleurs CRM B2B en France : HubSpot, Salesforce, Pipedrive, Microsoft Dynamics, Sellsy, Axonaut et Zoho CRM. Prix et recommandations detaillees.",
    url: "https://ceres.agency/blog/meilleur-crm-b2b-france",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/meilleur-crm-b2b-france",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
