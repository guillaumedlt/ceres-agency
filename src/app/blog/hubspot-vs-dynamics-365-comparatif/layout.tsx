import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot vs Dynamics 365 : comparatif complet en 2026",
  description:
    "Comparaison detaillee HubSpot vs Dynamics 365 : UX, CRM, marketing, IA (Copilot vs Breeze), pricing, integrations, implementation. 20+ criteres compares.",
  openGraph: {
    title: "HubSpot vs Dynamics 365 : comparatif complet en 2026",
    description:
      "Comparaison detaillee HubSpot vs Dynamics 365 : UX, CRM, marketing, IA (Copilot vs Breeze), pricing, integrations, implementation. 20+ criteres compares.",
    url: "https://ceres.agency/blog/hubspot-vs-dynamics-365-comparatif",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/hubspot-vs-dynamics-365-comparatif",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
