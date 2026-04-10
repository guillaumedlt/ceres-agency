import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deployer Claude en entreprise : guide complet | Ceres",
  description: "Guide pour deployer Claude et Claude Code en entreprise B2B. Prerequis, cas d'usage, MCP, couts, securite et pieges a eviter. Par Ceres.",
  keywords: ["deployer claude entreprise", "claude entreprise", "implementation claude", "claude code entreprise", "guide claude b2b", "claude en production", "comment utiliser claude", "claude pour les entreprises"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
