import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead scoring : le guide complet pour qualifier vos leads B2B",
  description:
    "Guide complet du lead scoring B2B : modeles de scoring fit et engagement, implementation dans HubSpot, predictive scoring IA, erreurs a eviter et methode Ceres.",
  openGraph: {
    title: "Lead scoring : le guide complet pour qualifier vos leads B2B",
    description:
      "Guide complet du lead scoring B2B : modeles de scoring fit et engagement, implementation dans HubSpot, predictive scoring IA, erreurs a eviter et methode Ceres.",
    url: "https://ceres.agency/blog/lead-scoring-guide-complet",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/lead-scoring-guide-complet",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
