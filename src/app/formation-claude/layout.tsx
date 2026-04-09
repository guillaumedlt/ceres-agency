import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation Claude et Claude Code pour equipes B2B | Ceres",
  description: "Formation pratique Claude et Claude Code pour les equipes marketing, sales et CS. Pas de theorie. Des cas d'usage appliques a votre metier. Prompts, workflows, MCP, agents. 0.5 a 1 jour.",
  keywords: ["formation claude", "formation claude code", "formation ia entreprise", "formation claude b2b", "apprendre claude code", "formation anthropic", "formation ia commerciale", "formation claude marketing", "formation claude sales"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
