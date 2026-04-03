import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fondation Data : nettoyage CRM, KPIs et gouvernance des donnees | Ceres",
  description:
    "On nettoie votre base CRM, standardise vos donnees, unifie les flux entre vos outils et definit les KPIs par silo. Le prerequis a toute initiative IA. Deduplication, enrichissement, gouvernance automatisee.",
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
