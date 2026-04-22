import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot vs Salesforce : le comparatif honnete en 2026",
  description:
    "Comparaison detaillee HubSpot vs Salesforce : interface, CRM, marketing automation, reporting, workflows, integrations, prix et scalabilite. 20+ criteres compares.",
  openGraph: {
    title: "HubSpot vs Salesforce : le comparatif honnete en 2026",
    description:
      "Comparaison detaillee HubSpot vs Salesforce : interface, CRM, marketing automation, reporting, workflows, integrations, prix et scalabilite. 20+ criteres compares.",
    url: "https://ceres.agency/blog/hubspot-vs-salesforce-comparatif",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/hubspot-vs-salesforce-comparatif",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
