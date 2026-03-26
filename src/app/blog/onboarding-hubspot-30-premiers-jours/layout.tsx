import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding HubSpot : les 30 premiers jours pour bien demarrer",
  description:
    "Guide d'onboarding HubSpot semaine par semaine. Checklist des 30 premiers jours : configuration pipeline, import de donnees, automatisation et reporting CRM.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
