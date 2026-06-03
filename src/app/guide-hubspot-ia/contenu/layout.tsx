import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide HubSpot + IA 2026 : contenu integral (75 pages) | Ceres",
  description:
    "Le contenu integral du Guide HubSpot + IA 2026. 12 chapitres : Breeze AI, agents, Studio, Marketplace, MCP server, Claude, AEO, Smart Deal Progression, audit cards, outcome pricing, cas d'usage avec prompts, plan 90 jours.",
  alternates: { canonical: "https://ceres.agency/guide-hubspot-ia/contenu" },
  openGraph: {
    title: "Guide HubSpot + IA 2026 : contenu integral",
    description:
      "12 chapitres denses sur HubSpot + IA en 2026. Breeze Agents, MCP, Claude, AEO et 15 cas d'usage avec prompts prets a coller.",
    url: "https://ceres.agency/guide-hubspot-ia/contenu",
    siteName: "Ceres",
    locale: "fr_FR",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
