import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Guide HubSpot Ultime 2026 : contenu complet (80 pages)",
  description:
    "Lecture en ligne du Guide HubSpot Ultime. 12 chapitres : choix edition, setup, lead routing, Marketing/Sales/Service Hub, Breeze AI, MCP, reporting, integrations, migration, plan 90 jours.",
  alternates: { canonical: "https://ceres.agency/guide-hubspot-ultime/contenu" },
  openGraph: {
    title: "Le Guide HubSpot Ultime 2026 : contenu complet",
    description:
      "12 chapitres pour maitriser HubSpot. Choix edition, setup, automations, Breeze AI, MCP, migration, plan 90 jours.",
    url: "https://ceres.agency/guide-hubspot-ultime/contenu",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
