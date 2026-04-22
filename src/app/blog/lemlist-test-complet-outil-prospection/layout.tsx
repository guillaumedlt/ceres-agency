import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lemlist : test complet de l'outil de prospection 2026",
  description:
    "Test de Lemlist en 2026 : email, LinkedIn, cold calling. Fonctionnalites, tarifs, delivrabilite, limites et comparaison alternatives.",
  openGraph: {
    title: "Lemlist : test complet de l'outil de prospection 2026",
    description:
      "Test de Lemlist en 2026 : email, LinkedIn, cold calling. Fonctionnalites, tarifs, delivrabilite, limites et comparaison alternatives.",
    url: "https://ceres.agency/blog/lemlist-test-complet-outil-prospection",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/lemlist-test-complet-outil-prospection",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
