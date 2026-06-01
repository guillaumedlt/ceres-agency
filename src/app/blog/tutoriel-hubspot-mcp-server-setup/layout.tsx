import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutoriel HubSpot MCP server : setup pas-a-pas en 30 min | Ceres",
  description:
    "Setup du HubSpot MCP server officiel (GA avril 2026). OAuth, scopes, configuration Claude Desktop, premiers prompts. Tutoriel pratique RevOps.",
  keywords: ["hubspot mcp server", "hubspot mcp tutoriel", "configurer hubspot mcp", "mcp.hubspot.com setup", "claude hubspot mcp"],
  alternates: { canonical: "https://ceres.agency/blog/tutoriel-hubspot-mcp-server-setup" },
  openGraph: {
    title: "Tutoriel HubSpot MCP server : setup pas-a-pas en 30 min | Ceres",
    description: "Tutoriel complet du HubSpot MCP server. OAuth, scopes, configuration Claude, premiers prompts.",
    url: "https://ceres.agency/blog/tutoriel-hubspot-mcp-server-setup",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
