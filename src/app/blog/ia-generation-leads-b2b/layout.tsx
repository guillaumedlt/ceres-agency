import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generation de leads B2B avec l'IA : methodes 2026 | Ceres",
  description:
    "Identifier l'ICP avec l'IA, enrichissement automatique, scoring predictif, personnalisation, chatbots IA.",
  keywords: [
    "generation leads IA",
    "leads B2B IA",
    "IA generation leads",
    "scoring IA leads",
    "ICP IA",
  ],
  openGraph: {
    title: "Generation de leads B2B avec l'IA : methodes 2026 | Ceres",
    description:
      "Identifier l'ICP avec l'IA, enrichissement automatique, scoring predictif, personnalisation, chatbots IA.",
    url: "https://ceres.agency/blog/ia-generation-leads-b2b",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-generation-leads-b2b",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
