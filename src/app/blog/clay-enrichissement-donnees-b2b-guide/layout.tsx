import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clay : le guide complet de l'enrichissement de donnees B2B",
  description:
    "Guide complet Clay : waterfall enrichment, 75+ providers, AI columns, integration HubSpot, use cases concrets, pricing et comparatif Apollo/Clearbit.",
  openGraph: {
    title: "Clay : le guide complet de l'enrichissement de donnees B2B",
    description:
      "Guide complet Clay : waterfall enrichment, 75+ providers, AI columns, integration HubSpot, use cases concrets, pricing et comparatif Apollo/Clearbit.",
    url: "https://ceres.agency/blog/clay-enrichissement-donnees-b2b-guide",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/clay-enrichissement-donnees-b2b-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
