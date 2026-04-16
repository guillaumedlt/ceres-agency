import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adoption CRM : faire utiliser HubSpot a vos commerciaux | Ceres",
  description:
    "Les 5 raisons reelles du rejet, simplifier l'interface, montrer la valeur, former, mesurer l'adoption CRM.",
  keywords: [
    "adoption CRM",
    "adoption HubSpot",
    "formation CRM",
    "utilisation CRM",
    "commerciaux CRM",
  ],
  openGraph: {
    title: "Adoption CRM : faire utiliser HubSpot a vos commerciaux | Ceres",
    description:
      "Les 5 raisons reelles du rejet, simplifier l'interface, montrer la valeur, former, mesurer l'adoption CRM.",
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
