import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation Claude et Claude Code pour equipes B2B | Ceres",
  description: "Formation pratique Claude et Claude Code pour equipes marketing, sales et CS. Cas d'usage concrets, prompts, workflows, MCP. 0.5 a 1 jour.",
  keywords: ["formation claude", "formation claude code", "formation ia entreprise", "formation claude b2b", "apprendre claude code", "formation anthropic", "formation ia commerciale", "formation claude marketing", "formation claude sales"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
