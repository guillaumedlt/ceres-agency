import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HubSpot vs Folk CRM : quel CRM choisir ? | Ceres",
  description: "Comparatif HubSpot vs Folk CRM : interface, prix, scalabilite, automatisation et integrations. Le verdict honnete pour startups et PME.",
  keywords: ["hubspot vs folk", "folk crm vs hubspot", "comparatif folk hubspot", "folk crm avis"],
  alternates: {
    canonical: "https://ceres.agency/hubspot-vs-folk",
  },
  openGraph: {
    title: "HubSpot vs Folk CRM : quel CRM choisir ? | Ceres",
    description: "Comparatif HubSpot vs Folk CRM : interface, prix, scalabilite, automatisation et integrations. Le verdict honnete pour startups et PME.",
    url: "https://ceres.agency/hubspot-vs-folk",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
