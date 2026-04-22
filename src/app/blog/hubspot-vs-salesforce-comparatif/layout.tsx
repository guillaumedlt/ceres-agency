import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot vs Salesforce : le comparatif honnete en 2026",
  description:
    "Comparaison HubSpot vs Salesforce : interface, CRM, marketing automation, reporting, workflows, integrations et prix. 20+ criteres.",
  openGraph: {
    title: "HubSpot vs Salesforce : le comparatif honnete en 2026",
    description:
      "Comparaison HubSpot vs Salesforce : interface, CRM, marketing automation, reporting, workflows, integrations et prix. 20+ criteres.",
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
