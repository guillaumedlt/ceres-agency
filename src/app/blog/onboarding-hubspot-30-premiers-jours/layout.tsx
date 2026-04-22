import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding HubSpot : les 30 premiers jours pour bien demarrer",
  description:
    "Guide d'onboarding HubSpot semaine par semaine. Checklist des 30 premiers jours : configuration pipeline, import de donnees, automatisation et reporting CRM.",
  openGraph: {
    title: "Onboarding HubSpot : les 30 premiers jours pour bien demarrer",
    description:
      "Guide d'onboarding HubSpot semaine par semaine. Checklist des 30 premiers jours : configuration pipeline, import de donnees, automatisation et reporting CRM.",
    url: "https://ceres.agency/blog/onboarding-hubspot-30-premiers-jours",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/onboarding-hubspot-30-premiers-jours",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
