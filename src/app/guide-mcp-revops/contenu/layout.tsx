import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Guide MCP pour le RevOps : contenu complet (65 pages)",
  description:
    "Lecture en ligne du Guide MCP pour le RevOps. 11 chapitres, 12 cas d'usage, plan 90 jours. HubSpot MCP server, securite, build vs buy, multi-CRM. A jour mai 2026.",
  alternates: {
    canonical: "https://ceres.agency/guide-mcp-revops/contenu",
  },
  openGraph: {
    title: "Le Guide MCP pour le RevOps : contenu complet",
    description:
      "11 chapitres pour deployer Model Context Protocol dans votre revenue engine. HubSpot MCP, securite, 12 cas d'usage, plan 90 jours.",
    url: "https://ceres.agency/guide-mcp-revops/contenu",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
