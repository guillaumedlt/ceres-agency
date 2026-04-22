import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracker les soumissions de formulaire HubSpot dans Google Analytics via GTM",
  description:
    "Guide pas a pas pour tracker les soumissions de formulaires HubSpot dans Google Analytics 4 via Google Tag Manager. Configuration, declencheurs et verification.",
  openGraph: {
    title: "Tracker les soumissions de formulaire HubSpot dans Google Analytics via GTM",
    description:
      "Guide pas a pas pour tracker les soumissions de formulaires HubSpot dans Google Analytics 4 via Google Tag Manager. Configuration, declencheurs et verification.",
    url: "https://ceres.agency/blog/tracker-soumissions-formulaire-hubspot-google-analytics-google-tag-manager",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/tracker-soumissions-formulaire-hubspot-google-analytics-google-tag-manager",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
