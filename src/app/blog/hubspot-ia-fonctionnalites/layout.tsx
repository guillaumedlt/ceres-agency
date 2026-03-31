import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot IA : toutes les fonctionnalites intelligentes en 2026",
  description:
    "Guide complet des fonctionnalites IA de HubSpot (Breeze). Copilot, agents, scoring predictif, resume de calls, enrichissement, chatbot IA. Tour d'horizon et avis honnete.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
