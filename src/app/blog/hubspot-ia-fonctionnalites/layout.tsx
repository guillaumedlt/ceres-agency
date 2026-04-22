import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot IA : les fonctionnalites intelligentes en 2026",
  description:
    "Fonctionnalites IA de HubSpot (Breeze) : Copilot, agents, scoring predictif, resume de calls, enrichissement et chatbot IA. Avis honnete.",
  openGraph: {
    title: "HubSpot IA : les fonctionnalites intelligentes en 2026",
    description:
      "Fonctionnalites IA de HubSpot (Breeze) : Copilot, agents, scoring predictif, resume de calls, enrichissement et chatbot IA. Avis honnete.",
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
