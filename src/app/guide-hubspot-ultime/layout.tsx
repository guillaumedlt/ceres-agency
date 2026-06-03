import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Guide HubSpot Ultime 2026 : 80 pages pour tout maitriser | Ceres",
  description:
    "Le guide HubSpot le plus complet en francais. 12 chapitres, 80 pages : choix d'edition, setup, automations, Sales/Marketing/Service Hub, Breeze AI, MCP, migration. 250+ deploiements Ceres condenses.",
  alternates: { canonical: "https://ceres.agency/guide-hubspot-ultime" },
  keywords: [
    "guide hubspot",
    "guide hubspot ultime",
    "guide hubspot 2026",
    "guide hubspot pdf",
    "guide hubspot francais",
    "tutoriel hubspot complet",
    "hubspot diamond partner",
    "guide hubspot breeze ai",
  ],
  openGraph: {
    title: "Le Guide HubSpot Ultime 2026 : 80 pages pour tout maitriser | Ceres",
    description:
      "Le guide HubSpot le plus complet en francais. 12 chapitres, 80 pages : choix, setup, automations, Sales/Marketing/Service Hub, Breeze AI, MCP, migration.",
    url: "https://ceres.agency/guide-hubspot-ultime",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
