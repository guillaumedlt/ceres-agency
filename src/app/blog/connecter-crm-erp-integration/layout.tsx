import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connecter CRM et ERP : guide d'integration B2B | Ceres",
  description:
    "Les flux a synchroniser entre CRM et ERP, les architectures, les outils (Make, n8n) et les erreurs classiques. Guide complet pour PME B2B.",
  keywords: [
    "integration CRM ERP",
    "CRM ERP",
    "connecter CRM",
    "integration HubSpot ERP",
    "Make iPaaS",
  ],
  openGraph: {
    title: "Connecter CRM et ERP : guide d'integration B2B | Ceres",
    description:
      "Les flux a synchroniser entre CRM et ERP, les architectures, les outils (Make, n8n) et les erreurs classiques. Guide complet pour PME B2B.",
    url: "https://ceres.agency/blog/connecter-crm-erp-integration",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/connecter-crm-erp-integration",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
