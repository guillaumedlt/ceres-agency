import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 agents IA deployes chez nos clients B2B | Ceres",
  description:
    "Enrichissement, scoring, reporting, detection churn. 5 agents IA en production chez nos clients B2B avec resultats mesures.",
  keywords: [
    "agents IA",
    "deploiement IA",
    "IA B2B",
    "scoring IA",
    "automatisation IA",
  ],
  openGraph: {
    title: "5 agents IA deployes chez nos clients B2B | Ceres",
    description:
      "Enrichissement, scoring, reporting, detection churn. 5 agents IA en production chez nos clients B2B avec resultats mesures.",
    url: "https://ceres.agency/blog/agents-ia-deployes-clients-b2b",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/agents-ia-deployes-clients-b2b",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
