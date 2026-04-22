import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guide Migration CRM : la methode complete | Ceres",
  description: "Guide migration CRM complet, 50 pages : comparatif 7 CRM (HubSpot, Salesforce, Attio, Folk, Pipedrive), methodologie et cas clients.",
  alternates: {
    canonical: "https://ceres.agency/guide-migration-crm",
  },
  openGraph: {
    title: "Guide Migration CRM : la methode complete | Ceres",
    description: "Guide migration CRM complet, 50 pages : comparatif 7 CRM (HubSpot, Salesforce, Attio, Folk, Pipedrive), methodologie et cas clients.",
    url: "https://ceres.agency/guide-migration-crm",
    type: "article",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
