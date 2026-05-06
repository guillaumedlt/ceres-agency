import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Iroko : agents IA pour les ventes | Ceres",
  description:
    "Cas client Iroko : deploiement d'agents IA Claude pour automatiser la prospection, qualifier les leads et accelerer les ventes de la fintech immobiliere.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/iroko",
  },
  openGraph: {
    title: "Cas client Iroko : agents IA pour les ventes | Ceres",
    description: "Cas client Iroko : deploiement d'agents IA Claude pour automatiser la prospection, qualifier les leads et accelerer les ventes de la fintech immobiliere.",
    url: "https://ceres.agency/cas-clients/iroko",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
