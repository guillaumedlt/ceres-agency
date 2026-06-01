import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 MCP servers RevOps en 2026 | Ceres",
  description:
    "Les 10 MCP servers indispensables pour le RevOps en 2026 : HubSpot, Salesforce, Attio, Notion, Slack, BigQuery, Merge.dev. Officiels vs community.",
  keywords: ["mcp servers", "top mcp servers", "mcp revops", "mcp hubspot salesforce attio", "best mcp servers 2026"],
  alternates: { canonical: "https://ceres.agency/blog/top-mcp-servers-revops-2026" },
  openGraph: {
    title: "Top 10 MCP servers RevOps en 2026 | Ceres",
    description: "Les 10 MCP servers indispensables pour le RevOps en 2026 : HubSpot, Salesforce, Attio, Notion...",
    url: "https://ceres.agency/blog/top-mcp-servers-revops-2026",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
