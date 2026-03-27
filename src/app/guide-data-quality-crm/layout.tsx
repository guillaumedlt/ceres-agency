import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guide Data Quality CRM : audit, nettoyage et enrichissement IA | Ceres",
  description: "Le guide data quality le plus complet en francais. 50 pages : audit 5 dimensions, deduplication, enrichissement Clay + Lemlist + Claude, maintenance automatisee et scoring qualite.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
