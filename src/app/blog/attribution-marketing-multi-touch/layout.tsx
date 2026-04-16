import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Attribution marketing multi-touch : guide B2B 2026 | Ceres",
  description:
    "Les 6 modeles d'attribution, configuration HubSpot, UTM, attribution et IA. Le guide complet pour les equipes B2B.",
  keywords: [
    "attribution marketing",
    "attribution multi-touch",
    "attribution HubSpot",
    "marketing B2B",
    "UTM tracking",
  ],
  openGraph: {
    title: "Attribution marketing multi-touch : guide B2B 2026 | Ceres",
    description:
      "Les 6 modeles d'attribution, configuration HubSpot, UTM, attribution et IA. Le guide complet pour les equipes B2B.",
    url: "https://ceres.agency/blog/attribution-marketing-multi-touch",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/attribution-marketing-multi-touch",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
