import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM immobilier : HubSpot pour l'immobilier | Ceres",
  description:
    "CRM immobilier sur HubSpot. Gestion contacts acheteurs/vendeurs, pipeline mandats, suivi visites, relances automatisees.",
  keywords: [
    "crm immobilier",
    "hubspot immobilier",
    "logiciel immobilier",
    "crm agence immobiliere",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
