import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anthropic rachete Stainless : ce que ca change pour le RevOps | Ceres",
  description:
    "Anthropic a rachete Stainless le 18 mai 2026. Analyse de l'impact pour les equipes RevOps : MCP servers, SDK generation, tooling enterprise.",
  keywords: ["anthropic stainless", "stainless acquisition", "anthropic mcp", "stainless mcp sdk", "anthropic 2026"],
  alternates: { canonical: "https://ceres.agency/blog/anthropic-stainless-acquisition-revops" },
  openGraph: {
    title: "Anthropic rachete Stainless : ce que ca change pour le RevOps | Ceres",
    description: "Anthropic rachete Stainless. Impact pour le RevOps : MCP, SDK generation, tooling enterprise.",
    url: "https://ceres.agency/blog/anthropic-stainless-acquisition-revops",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
