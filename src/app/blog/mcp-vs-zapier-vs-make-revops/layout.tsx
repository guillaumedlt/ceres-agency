import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MCP vs Zapier vs Make : qui gagne en RevOps en 2026 ? | Ceres",
  description:
    "Comparatif MCP, Zapier et Make pour le RevOps : quand utiliser quoi. Cas d'usage, couts, complementarite. Le verdict honnete 2026.",
  keywords: ["mcp vs zapier", "mcp vs make", "mcp ipaas comparison", "model context protocol zapier", "automation revops"],
  alternates: { canonical: "https://ceres.agency/blog/mcp-vs-zapier-vs-make-revops" },
  openGraph: {
    title: "MCP vs Zapier vs Make : qui gagne en RevOps en 2026 ? | Ceres",
    description: "Comparatif MCP, Zapier et Make pour le RevOps. Cas d'usage, couts, complementarite.",
    url: "https://ceres.agency/blog/mcp-vs-zapier-vs-make-revops",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
