import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour l'industrie et manufacturing | Ceres",
  description:
    "RevOps specialise industrie et manufacturing. Pipeline devis/commandes, CRM connecte ERP, cycle de vente technique et multi-sites.",
  keywords: [
    "revops industrie",
    "crm industrie",
    "crm manufacturing",
    "hubspot industrie",
    "crm usine",
  ],
  alternates: {
    canonical: "https://ceres.agency/revops-industrie",
  },
  openGraph: {
    title: "RevOps pour l'industrie et manufacturing | Ceres",
    description: "RevOps specialise industrie et manufacturing. Pipeline devis/commandes, CRM connecte ERP, cycle de vente technique et multi-sites.",
    url: "https://ceres.agency/revops-industrie",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
