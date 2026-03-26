import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot Sales Hub : fonctionnalites, prix et deploiement | Ceres",
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
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
