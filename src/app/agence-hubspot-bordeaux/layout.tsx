import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence HubSpot Bordeaux | Optimisation CRM | Ceres",
  description:
    "Agence HubSpot a Bordeaux. Configuration, migration et optimisation CRM pour entreprises de Nouvelle-Aquitaine. Partenaire certifie.",
  keywords: [
    "agence hubspot bordeaux",
    "hubspot bordeaux",
    "consultant hubspot bordeaux",
    "crm bordeaux",
  ],
  alternates: {
    canonical: "https://ceres.agency/agence-hubspot-bordeaux",
  },
  openGraph: {
    title: "Agence HubSpot Bordeaux | Optimisation CRM | Ceres",
    description:
      "Agence HubSpot a Bordeaux. Configuration, migration et optimisation CRM pour entreprises de Nouvelle-Aquitaine.",
    url: "https://ceres.agency/agence-hubspot-bordeaux",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
