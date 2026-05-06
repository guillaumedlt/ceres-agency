import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Alan : tracking marketing HubSpot | Ceres",
  description:
    "Cas client Alan : mise en place du tracking marketing multi-touch dans HubSpot pour mesurer l'impact de chaque canal sur la generation de leads qualifies.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/alan",
  },
  openGraph: {
    title: "Cas client Alan : tracking marketing HubSpot | Ceres",
    description: "Cas client Alan : mise en place du tracking marketing multi-touch dans HubSpot pour mesurer l'impact de chaque canal sur la generation de leads qualifies.",
    url: "https://ceres.agency/cas-clients/alan",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
