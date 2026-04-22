import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot vs Pipedrive : comparatif prix et features 2026",
  description:
    "Comparaison HubSpot vs Pipedrive : prix par plan, fonctionnalites CRM, marketing, automatisation, reporting et integrations.",
  openGraph: {
    title: "HubSpot vs Pipedrive : comparatif prix et features 2026",
    description:
      "Comparaison HubSpot vs Pipedrive : prix par plan, fonctionnalites CRM, marketing, automatisation, reporting et integrations.",
    url: "https://ceres.agency/blog/hubspot-vs-pipedrive-comparatif-prix-fonctionnalites",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/hubspot-vs-pipedrive-comparatif-prix-fonctionnalites",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
