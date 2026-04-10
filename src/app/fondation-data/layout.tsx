import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fondation Data : nettoyage CRM et gouvernance | Ceres",
  description:
    "On nettoie votre CRM, standardise vos donnees et definit les KPIs par silo. Prerequis a toute initiative IA. Deduplication et gouvernance.",
  keywords: [
    "fondation data",
    "nettoyage crm",
    "data quality crm",
    "deduplication crm",
    "gouvernance donnees",
    "enrichissement crm",
    "kpi crm",
    "standardisation donnees",
    "qualite donnees crm",
    "nettoyage base crm",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
