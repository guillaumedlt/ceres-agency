import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "10 workflows HubSpot indispensables pour le B2B | Ceres",
  description:
    "Lead nurturing, scoring, MQL notification, deal automation, onboarding, churn alert. 10 workflows complets.",
  keywords: [
    "workflows HubSpot",
    "automation HubSpot",
    "marketing automation",
    "workflow B2B",
    "HubSpot workflows",
  ],
  openGraph: {
    title: "10 workflows HubSpot indispensables pour le B2B | Ceres",
    description:
      "Lead nurturing, scoring, MQL notification, deal automation, onboarding, churn alert. 10 workflows complets.",
    url: "https://ceres.agency/blog/workflows-hubspot-indispensables-b2b",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/workflows-hubspot-indispensables-b2b",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
