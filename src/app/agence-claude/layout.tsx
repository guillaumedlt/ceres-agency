import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence Claude : IA Anthropic pour le B2B | Ceres",
  description: "Agence specialisee Claude et Claude Code pour entreprises B2B. Scoring, reporting, agents IA connectes a votre CRM. 250+ clients accompagnes.",
  keywords: ["agence claude", "agence claude ai", "expert claude", "deployer claude", "claude entreprise", "claude b2b", "consultant claude", "claude code entreprise", "anthropic agence", "ia anthropic b2b"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
