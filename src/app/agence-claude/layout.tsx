import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence Claude : deployer l'IA d'Anthropic dans vos operations B2B",
  description: "Ceres est l'agence specialisee dans le deploiement de Claude et Claude Code pour les entreprises B2B. Enrichissement, scoring, reporting, agents IA connectes a votre CRM. 250+ clients accompagnes.",
  keywords: ["agence claude", "agence claude ai", "expert claude", "deployer claude", "claude entreprise", "claude b2b", "consultant claude", "claude code entreprise", "anthropic agence", "ia anthropic b2b"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
