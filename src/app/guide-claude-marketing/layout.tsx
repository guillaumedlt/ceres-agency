import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide Claude & Claude Code pour le Marketing B2B | Ceres",
  description: "Le guide le plus complet en francais sur Claude et Claude Code pour le marketing B2B. 55 pages : 20+ prompts, 15 cas d'usage, scripts Claude Code, MCP, workflows Make.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
