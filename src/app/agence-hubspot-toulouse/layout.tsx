import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence HubSpot Toulouse | Optimisation CRM | Ceres",
  description:
    "Agence HubSpot a Toulouse. Configuration, migration et optimisation CRM pour entreprises d'Occitanie. Partenaire certifie.",
  keywords: [
    "agence hubspot toulouse",
    "hubspot toulouse",
    "consultant hubspot toulouse",
    "crm toulouse",
  ],
  alternates: {
    canonical: "https://ceres.agency/agence-hubspot-toulouse",
  },
  openGraph: {
    title: "Agence HubSpot Toulouse | Optimisation CRM | Ceres",
    description:
      "Agence HubSpot a Toulouse. Configuration, migration et optimisation CRM pour entreprises d'Occitanie.",
    url: "https://ceres.agency/agence-hubspot-toulouse",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
