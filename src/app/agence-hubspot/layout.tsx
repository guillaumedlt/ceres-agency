import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence HubSpot — Setup, Migration & Optimisation | Ceres",
  description:
    "Agence HubSpot specialisee RevOps & IA en France. Configuration, migration, optimisation CRM. Sales Hub, Marketing Hub, Operations Hub.",
  keywords: [
    "agence hubspot",
    "agence hubspot france",
    "partenaire hubspot",
    "intégration hubspot",
    "migration hubspot",
    "migration salesforce hubspot",
    "configuration hubspot",
    "hubspot sales hub",
    "hubspot marketing hub",
    "consultant hubspot",
    "optimisation hubspot",
    "hubspot crm",
    "hubspot vs salesforce",
    "admin hubspot externalisé",
  ],
  alternates: {
    canonical: "https://ceres.agency/agence-hubspot",
  },
  openGraph: {
    title: "Agence HubSpot — Setup, Migration & Optimisation | Ceres",
    description:
      "Agence HubSpot specialisee RevOps & IA en France. Configuration, migration, optimisation CRM. Sales Hub, Marketing Hub, Operations Hub.",
    url: "https://ceres.agency/agence-hubspot",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
