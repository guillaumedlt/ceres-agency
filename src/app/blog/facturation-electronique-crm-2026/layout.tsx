import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facturation electronique 2026 : comment connecter votre CRM",
  description:
    "Facturation electronique 2026 : obligation legale, formats Factur-X et UBL, PDP, connexion HubSpot et Sellsy. Workflow actionnable.",
  openGraph: {
    title: "Facturation electronique 2026 : comment connecter votre CRM",
    description:
      "Facturation electronique 2026 : obligation legale, formats Factur-X et UBL, PDP, connexion HubSpot et Sellsy. Workflow actionnable.",
    url: "https://ceres.agency/blog/facturation-electronique-crm-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/facturation-electronique-crm-2026",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
