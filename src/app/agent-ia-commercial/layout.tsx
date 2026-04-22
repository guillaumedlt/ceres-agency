import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent IA commercial : automatiser la vente B2B | Ceres",
  description:
    "Deployez un agent IA commercial pour automatiser enrichissement, qualification, scoring, emails et coaching. Stack Claude + MCP + Make. ROI mesurable.",
  keywords: [
    "agent ia commercial",
    "ia commerciale",
    "agent ia vente",
    "ia vente b2b",
    "automatisation commerciale ia",
    "agent ia prospection",
    "ia scoring commercial",
    "claude mcp commercial",
  ],
  alternates: {
    canonical: "https://ceres.agency/agent-ia-commercial",
  },
  openGraph: {
    title: "Agent IA commercial : automatiser la vente B2B | Ceres",
    description: "Deployez un agent IA commercial pour automatiser enrichissement, qualification, scoring, emails et coaching. Stack Claude + MCP + Make. ROI mesurable.",
    url: "https://ceres.agency/agent-ia-commercial",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
