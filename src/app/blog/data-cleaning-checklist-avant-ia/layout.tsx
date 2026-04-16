import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data cleaning avant l'IA : checklist en 30 points | Ceres",
  description:
    "30 points de verification sur contacts, entreprises et deals avant de deployer l'IA. Methodes HubSpot et automatisation.",
  keywords: [
    "data cleaning",
    "nettoyage CRM",
    "data quality",
    "checklist CRM",
    "prerequis IA",
  ],
  openGraph: {
    title: "Data cleaning avant l'IA : checklist en 30 points | Ceres",
    description:
      "30 points de verification sur contacts, entreprises et deals avant de deployer l'IA. Methodes HubSpot et automatisation.",
    url: "https://ceres.agency/blog/data-cleaning-checklist-avant-ia",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/data-cleaning-checklist-avant-ia",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
