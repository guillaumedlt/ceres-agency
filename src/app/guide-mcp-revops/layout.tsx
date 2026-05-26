import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Guide MCP pour le RevOps : Claude, ChatGPT et votre CRM",
  description:
    "65 pages pour deployer Model Context Protocol dans votre revenue engine. Architecture, HubSpot MCP server, 12 cas d'usage, securite, plan 90 jours. Mai 2026.",
  alternates: {
    canonical: "https://ceres.agency/guide-mcp-revops",
  },
  openGraph: {
    title: "Le Guide MCP pour le RevOps : Claude, ChatGPT et votre CRM",
    description:
      "65 pages pour deployer Model Context Protocol dans votre revenue engine. Architecture, HubSpot MCP server, 12 cas d'usage, securite, plan 90 jours.",
    url: "https://ceres.agency/guide-mcp-revops",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
