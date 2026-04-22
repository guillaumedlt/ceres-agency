import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot IA : toutes les fonctionnalites intelligentes en 2026",
  description:
    "Guide complet des fonctionnalites IA de HubSpot (Breeze). Copilot, agents, scoring predictif, resume de calls, enrichissement, chatbot IA. Tour d'horizon et avis honnete.",
  openGraph: {
    title: "HubSpot IA : toutes les fonctionnalites intelligentes en 2026",
    description:
      "Guide complet des fonctionnalites IA de HubSpot (Breeze). Copilot, agents, scoring predictif, resume de calls, enrichissement, chatbot IA. Tour d'horizon et avis honnete.",
    url: "https://ceres.agency/blog/hubspot-ia-fonctionnalites",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/hubspot-ia-fonctionnalites",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
