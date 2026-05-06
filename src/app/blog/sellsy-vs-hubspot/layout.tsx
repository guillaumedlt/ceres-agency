import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sellsy vs HubSpot : comparatif CRM francais 2026",
  description:
    "Comparaison Sellsy vs HubSpot en 2026 : prix, CRM, facturation, marketing, reporting, integrations et support. 15+ criteres compares.",
  openGraph: {
    title: "Sellsy vs HubSpot : comparatif CRM francais 2026",
    description:
      "Comparaison Sellsy vs HubSpot en 2026 : prix, CRM, facturation, marketing, reporting, integrations et support. 15+ criteres compares.",
    url: "https://ceres.agency/blog/sellsy-vs-hubspot",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/sellsy-vs-hubspot",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
