import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps et facturation : connecter CRM et ERP en 2026",
  description:
    "Comment connecter votre CRM a votre ERP en 2026 : architectures, workflows devis-commande-facture, obligation facturation electronique, outils Make, n8n, Fivetran. Guide complet.",
  openGraph: {
    title: "RevOps et facturation : connecter CRM et ERP en 2026",
    description:
      "Comment connecter votre CRM a votre ERP en 2026 : architectures, workflows devis-commande-facture, obligation facturation electronique, outils Make, n8n, Fivetran. Guide complet.",
    url: "https://ceres.agency/blog/revops-facturation-crm-erp",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/revops-facturation-crm-erp",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
