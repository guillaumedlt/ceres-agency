import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "HubSpot vs Notion comme CRM : le comparatif | Ceres",
  description: "Peut-on utiliser Notion comme CRM ? Comparatif avec HubSpot : limites, cas ou Notion suffit, quand migrer vers un vrai CRM.",
  keywords: ["notion crm", "hubspot vs notion", "notion comme crm", "alternative notion crm"],
  alternates: {
    canonical: "https://ceres.agency/hubspot-vs-notion-crm",
  },
  openGraph: {
    title: "HubSpot vs Notion comme CRM : le comparatif | Ceres",
    description: "Peut-on utiliser Notion comme CRM ? Comparatif avec HubSpot : limites, cas ou Notion suffit, quand migrer vers un vrai CRM.",
    url: "https://ceres.agency/hubspot-vs-notion-crm",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
