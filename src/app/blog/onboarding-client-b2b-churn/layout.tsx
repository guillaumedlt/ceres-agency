import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding client B2B : reduire le churn en 30 jours",
  description:
    "Les 7 etapes d\u2019un onboarding client B2B reussi : kick-off, setup, formation, adoption, quick win, review et handoff via HubSpot.",
  openGraph: {
    title: "Onboarding client B2B : reduire le churn en 30 jours",
    description:
      "Les 7 etapes d\u2019un onboarding client B2B reussi : kick-off, setup, formation, adoption, quick win, review et handoff via HubSpot.",
    url: "https://ceres.agency/blog/onboarding-client-b2b-churn",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/onboarding-client-b2b-churn",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
