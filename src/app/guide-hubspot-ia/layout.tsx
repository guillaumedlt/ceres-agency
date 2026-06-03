import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Guide HubSpot + IA 2026 : Breeze, Claude, MCP, agents autonomes | Ceres",
  description:
    "Le guide le plus complet en francais sur HubSpot + IA en 2026. Breeze AI (20+ agents, Studio, Marketplace), HubSpot MCP server, integration Claude / ChatGPT, Smart Deal Progression, AEO HubSpot, outcome-based pricing, 15 cas d'usage avec prompts et plan 90 jours. 75 pages.",
  keywords: [
    "guide hubspot ia",
    "breeze ai",
    "breeze agents",
    "breeze studio",
    "breeze marketplace",
    "hubspot mcp",
    "claude hubspot",
    "hubspot ai 2026",
    "customer agent hubspot",
    "prospecting agent hubspot",
    "smart deal progression",
    "aeo hubspot",
    "audit cards hubspot",
    "agents ia hubspot",
    "automatiser hubspot ia",
  ],
  alternates: { canonical: "https://ceres.agency/guide-hubspot-ia" },
  openGraph: {
    title: "Le Guide HubSpot + IA 2026 : Breeze, Claude, MCP, agents autonomes",
    description:
      "Tout HubSpot + IA en 2026 : Breeze Agents, Studio, Marketplace, MCP server, Claude integration, AEO, Smart Deal Progression et 15 cas d'usage avec prompts. 75 pages. A jour mai 2026.",
    url: "https://ceres.agency/guide-hubspot-ia",
    siteName: "Ceres",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Guide HubSpot + IA 2026",
    description:
      "Breeze AI, MCP server, Claude integration, AEO, Smart Deal Progression. 75 pages, 15 cas d'usage, plan 90 jours.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
