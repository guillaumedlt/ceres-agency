import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps : guide Revenue Operations complet | Ceres",
  description:
    "Le RevOps aligne Sales, Marketing et CS autour de process, outils et donnees communs. Definition, enjeux et mise en place pour les entreprises B2B.",
  keywords: [
    "revops",
    "revenue operations",
    "qu'est-ce que le revops",
    "revops définition",
    "revenue operations définition",
    "revops c'est quoi",
    "revops explication",
    "revops guide",
    "alignement sales marketing",
    "operations commerciales",
    "revops vs sales ops",
    "revops france",
    "revops b2b",
  ],
  alternates: {
    canonical: "https://ceres.agency/revops",
  },
  openGraph: {
    title: "RevOps : guide Revenue Operations complet | Ceres",
    description:
      "Le RevOps aligne Sales, Marketing et CS autour de process, outils et donnees communs. Definition, enjeux et mise en place pour les entreprises B2B.",
    url: "https://ceres.agency/revops",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
