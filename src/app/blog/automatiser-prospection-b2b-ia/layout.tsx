import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatiser sa prospection B2B avec l'IA | Ceres",
  description:
    "Les 4 etapes pour automatiser : ICP, enrichissement, personnalisation, sequences. Workflow IA complet sans spammer.",
  keywords: [
    "prospection B2B",
    "automatisation prospection",
    "IA prospection",
    "cold email IA",
    "sequences IA",
  ],
  openGraph: {
    title: "Automatiser sa prospection B2B avec l'IA | Ceres",
    description:
      "Les 4 etapes pour automatiser : ICP, enrichissement, personnalisation, sequences. Workflow IA complet sans spammer.",
    url: "https://ceres.agency/blog/automatiser-prospection-b2b-ia",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/automatiser-prospection-b2b-ia",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
