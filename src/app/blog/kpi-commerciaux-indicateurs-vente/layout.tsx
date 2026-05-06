import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KPI commerciaux : 25 indicateurs de vente a suivre 2026",
  description:
    "Guide des 25 KPI commerciaux essentiels : definition, formule de calcul, benchmark marche et configuration HubSpot. Pipeline, activite, revenue et productivite.",
  openGraph: {
    title: "KPI commerciaux : 25 indicateurs de vente a suivre 2026",
    description:
      "Guide des 25 KPI commerciaux essentiels : definition, formule de calcul, benchmark marche et configuration HubSpot. Pipeline, activite, revenue et productivite.",
    url: "https://ceres.agency/blog/kpi-commerciaux-indicateurs-vente",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/kpi-commerciaux-indicateurs-vente",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
