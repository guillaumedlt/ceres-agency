import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adoption CRM : faire utiliser HubSpot a vos commerciaux",
  description:
    "Les 5 raisons reelles du rejet CRM, simplifier l'interface, montrer la valeur aux commerciaux, former et mesurer l'adoption. Guide complet.",
  keywords: [
    "adoption CRM",
    "adoption HubSpot",
    "formation CRM",
    "utilisation CRM",
    "commerciaux CRM",
  ],
  openGraph: {
    title: "Adoption CRM : faire utiliser HubSpot a vos commerciaux",
    description:
      "Les 5 raisons reelles du rejet CRM, simplifier l'interface, montrer la valeur aux commerciaux, former et mesurer l'adoption. Guide complet.",
    url: "https://ceres.agency/blog/crm-adoption-equipe-commerciale",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/crm-adoption-equipe-commerciale",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
