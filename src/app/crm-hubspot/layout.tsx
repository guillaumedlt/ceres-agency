import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CRM HubSpot : pourquoi le choisir | Ceres",
  description: "Guide du CRM HubSpot : fonctionnalites, prix par plan, avantages, comparaison avec les alternatives et deploiement. Partenaire certifie.",
  alternates: {
    canonical: "https://ceres.agency/crm-hubspot",
  },
  openGraph: {
    title: "CRM HubSpot : pourquoi le choisir | Ceres",
    description: "Guide complet du CRM HubSpot : fonctionnalites, prix par plan, avantages, comparaison avec les alternatives et guide de deploiement.",
    url: "https://ceres.agency/crm-hubspot",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
