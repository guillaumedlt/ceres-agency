import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quanta : on ouvre notre agence IA a Monaco | Ceres",
  description:
    "Ceres lance Quanta, son agence IA a Monaco. Deploiement d'agents IA pour les entreprises monegasques et de la Cote d'Azur. Automatisation et CRM.",
  keywords: [
    "agence IA Monaco",
    "Quanta Monaco",
    "intelligence artificielle Monaco",
    "deploiement IA",
    "Cote d'Azur",
  ],
  openGraph: {
    title: "Quanta : on ouvre notre agence IA a Monaco | Ceres",
    description:
      "Ceres lance Quanta, son agence IA a Monaco. Deploiement d'agents IA pour les entreprises monegasques et de la Cote d'Azur. Automatisation et CRM.",
    url: "https://ceres.agency/blog/agence-ia-monaco-quanta",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/agence-ia-monaco-quanta",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
