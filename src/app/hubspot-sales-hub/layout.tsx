import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot Sales Hub : guide complet et prix | Ceres",
  description:
    "Guide complet HubSpot Sales Hub : pipeline, sequences, meetings, devis, playbooks, forecasting. Plans, prix et deploiement par Ceres.",
  keywords: [
    "hubspot sales hub",
    "sales hub hubspot",
    "hubspot sales",
    "hubspot crm commercial",
    "hubspot pipeline",
    "hubspot sequences",
    "sales hub prix",
    "hubspot forecasting",
  ],
  alternates: {
    canonical: "https://ceres.agency/hubspot-sales-hub",
  },
  openGraph: {
    title: "HubSpot Sales Hub : guide complet et prix | Ceres",
    description: "Guide complet HubSpot Sales Hub : pipeline, sequences, meetings, devis, playbooks, forecasting. Plans, prix et deploiement par Ceres.",
    url: "https://ceres.agency/hubspot-sales-hub",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
