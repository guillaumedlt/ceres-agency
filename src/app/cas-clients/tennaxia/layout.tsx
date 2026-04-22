import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Tennaxia : RevOps Part-Time 6 mois",
  description:
    "Cas client Tennaxia : mission RevOps Part-Time de 6 mois pour structurer HubSpot, automatiser le reporting et aligner les equipes sales et marketing RSE.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/tennaxia",
  },
  openGraph: {
    title: "Cas client Tennaxia : RevOps Part-Time 6 mois",
    description: "Cas client Tennaxia : mission RevOps Part-Time de 6 mois pour structurer HubSpot, automatiser le reporting et aligner les equipes sales et marketing RSE.",
    url: "https://ceres.agency/cas-clients/tennaxia",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
