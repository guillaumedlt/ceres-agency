import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence HubSpot Marseille | Optimisation CRM | Ceres",
  description:
    "Agence HubSpot a Marseille. Configuration, migration et optimisation CRM pour entreprises de la region Sud. Partenaire certifie.",
  keywords: [
    "agence hubspot marseille",
    "hubspot marseille",
    "consultant hubspot marseille",
    "crm marseille",
  ],
  alternates: {
    canonical: "https://ceres.agency/agence-hubspot-marseille",
  },
  openGraph: {
    title: "Agence HubSpot Marseille | Optimisation CRM | Ceres",
    description:
      "Agence HubSpot a Marseille. Configuration, migration et optimisation CRM pour entreprises de la region Sud.",
    url: "https://ceres.agency/agence-hubspot-marseille",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
