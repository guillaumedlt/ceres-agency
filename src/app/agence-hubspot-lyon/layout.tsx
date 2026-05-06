import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence HubSpot Lyon | Optimisation CRM | Ceres",
  description:
    "Agence HubSpot a Lyon. Configuration, migration, optimisation CRM pour startups et PME de la region Auvergne-Rhone-Alpes. Partenaire certifie.",
  keywords: [
    "agence hubspot lyon",
    "hubspot lyon",
    "consultant hubspot lyon",
    "crm lyon",
    "migration hubspot lyon",
  ],
  alternates: {
    canonical: "https://ceres.agency/agence-hubspot-lyon",
  },
  openGraph: {
    title: "Agence HubSpot Lyon | Optimisation CRM | Ceres",
    description:
      "Agence HubSpot a Lyon. Configuration, migration, optimisation CRM pour startups et PME de la region Auvergne-Rhone-Alpes.",
    url: "https://ceres.agency/agence-hubspot-lyon",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
