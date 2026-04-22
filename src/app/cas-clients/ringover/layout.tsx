import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Ringover : RevOps Part-Time sur 12 mois",
  description:
    "Cas client Ringover : accompagnement RevOps Part-Time sur 12 mois pour structurer les operations commerciales et optimiser HubSpot chez le leader de la VoIP.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/ringover",
  },
  openGraph: {
    title: "Cas client Ringover : RevOps Part-Time sur 12 mois",
    description: "Cas client Ringover : accompagnement RevOps Part-Time sur 12 mois pour structurer les operations commerciales et optimiser HubSpot chez le leader de la VoIP.",
    url: "https://ceres.agency/cas-clients/ringover",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
