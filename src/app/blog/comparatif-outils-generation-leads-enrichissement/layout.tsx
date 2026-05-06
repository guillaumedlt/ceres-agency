import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparatif outils de generation de leads B2B en 2026",
  description:
    "Comparaison de 12 outils de generation de leads B2B : Clay, Apollo, Dropcontact, Kaspr, Phantombuster, Cognism, ZoomInfo et plus. Prix et recommandations.",
  openGraph: {
    title: "Comparatif outils de generation de leads B2B en 2026",
    description:
      "Comparaison de 12 outils de generation de leads B2B : Clay, Apollo, Dropcontact, Kaspr, Phantombuster, Cognism, ZoomInfo et plus. Prix et recommandations.",
    url: "https://ceres.agency/blog/comparatif-outils-generation-leads-enrichissement",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/comparatif-outils-generation-leads-enrichissement",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
