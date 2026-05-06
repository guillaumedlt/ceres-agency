import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Beedeez : RevOps et IA sur tout le cycle de vente",
  description:
    "Comment Ceres a deploye une strategie RevOps et IA chez Beedeez pour optimiser tout le cycle de vente, du lead au closing, avec HubSpot comme socle CRM.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/beedeez",
  },
  openGraph: {
    title: "Cas client Beedeez : RevOps et IA sur tout le cycle de vente",
    description: "Comment Ceres a deploye une strategie RevOps et IA chez Beedeez pour optimiser tout le cycle de vente, du lead au closing, avec HubSpot comme socle CRM.",
    url: "https://ceres.agency/cas-clients/beedeez",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
