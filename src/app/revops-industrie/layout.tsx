import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour l'industrie et manufacturing | Ceres",
  description:
    "RevOps specialise industrie. Pipeline devis/commandes, CRM connecte ERP, cycle de vente technique, multi-sites.",
  keywords: [
    "revops industrie",
    "crm industrie",
    "crm manufacturing",
    "hubspot industrie",
    "crm usine",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
