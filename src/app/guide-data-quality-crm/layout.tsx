import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guide Data Quality CRM : audit et nettoyage | Ceres",
  description: "Guide data quality CRM complet. 50 pages : audit 5 dimensions, deduplication, enrichissement Clay et Claude, maintenance et scoring qualite.",
  alternates: {
    canonical: "https://ceres.agency/guide-data-quality-crm",
  },
  openGraph: {
    title: "Guide Data Quality CRM : audit et nettoyage | Ceres",
    description: "Guide data quality CRM complet. 50 pages : audit 5 dimensions, deduplication, enrichissement Clay et Claude, maintenance et scoring qualite.",
    url: "https://ceres.agency/guide-data-quality-crm",
    type: "article",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
