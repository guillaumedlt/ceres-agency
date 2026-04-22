import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP : connecter Claude a votre CRM et vos outils | Ceres",
  description:
    "Model Context Protocol (MCP) : connecter Claude a HubSpot, Slack, Notion et vos outils metier. Guide complet avec cas d'usage et setup.",
  keywords: [
    "MCP Claude",
    "Model Context Protocol",
    "Claude CRM",
    "Claude HubSpot",
    "integration Claude",
  ],
  openGraph: {
    title: "MCP : connecter Claude a votre CRM et vos outils | Ceres",
    description:
      "Model Context Protocol (MCP) : connecter Claude a HubSpot, Slack, Notion et vos outils metier. Guide complet avec cas d'usage et setup.",
    url: "https://ceres.agency/blog/mcp-connecter-claude-crm-outils",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/mcp-connecter-claude-crm-outils",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
