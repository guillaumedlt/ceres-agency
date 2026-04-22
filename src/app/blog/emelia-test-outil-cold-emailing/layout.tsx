import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emelia : notre test complet de l'outil de cold emailing en 2026",
  description:
    "Test detaille d'Emelia, outil de cold emailing francais. Fonctionnalites, delivrabilite, tarifs, limites et comparaison avec Lemlist et La Growth Machine.",
  openGraph: {
    title: "Emelia : notre test complet de l'outil de cold emailing en 2026",
    description:
      "Test detaille d'Emelia, outil de cold emailing francais. Fonctionnalites, delivrabilite, tarifs, limites et comparaison avec Lemlist et La Growth Machine.",
    url: "https://ceres.agency/blog/emelia-test-outil-cold-emailing",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/emelia-test-outil-cold-emailing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
