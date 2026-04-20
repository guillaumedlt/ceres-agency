import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence HubSpot Nantes | Optimisation CRM | Ceres",
  description:
    "Agence HubSpot a Nantes. Configuration, migration et optimisation CRM pour entreprises du Grand Ouest. Partenaire certifie.",
  keywords: [
    "agence hubspot nantes",
    "hubspot nantes",
    "consultant hubspot nantes",
    "crm nantes",
  ],
  alternates: {
    canonical: "https://ceres.agency/agence-hubspot-nantes",
  },
  openGraph: {
    title: "Agence HubSpot Nantes | Optimisation CRM | Ceres",
    description:
      "Agence HubSpot a Nantes. Configuration, migration et optimisation CRM pour entreprises du Grand Ouest.",
    url: "https://ceres.agency/agence-hubspot-nantes",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
