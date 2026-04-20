import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CRM HubSpot : pourquoi le choisir | Ceres",
  description: "Guide complet du CRM HubSpot. Fonctionnalites, prix, avantages, comparaison et deploiement. Partenaire certifie HubSpot, 250+ clients accompagnes.",
  alternates: {
    canonical: "https://ceres.agency/crm-hubspot",
  },
  openGraph: {
    title: "CRM HubSpot : pourquoi le choisir | Ceres",
    description: "Guide complet du CRM HubSpot. Fonctionnalites, prix, avantages, comparaison et deploiement.",
    url: "https://ceres.agency/crm-hubspot",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
