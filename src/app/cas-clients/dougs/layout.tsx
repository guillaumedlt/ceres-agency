import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Dougs : migration Salesforce vers HubSpot",
  description:
    "Cas client Dougs : migration complete de Salesforce vers HubSpot pour l'expert-comptable en ligne. Donnees, workflows et reporting migres sans interruption.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/dougs",
  },
  openGraph: {
    title: "Cas client Dougs : migration Salesforce vers HubSpot",
    description: "Cas client Dougs : migration complete de Salesforce vers HubSpot pour l'expert-comptable en ligne. Donnees, workflows et reporting migres sans interruption.",
    url: "https://ceres.agency/cas-clients/dougs",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
