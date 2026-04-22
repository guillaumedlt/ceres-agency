import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing automation : 7 workflows HubSpot essentiels",
  description:
    "Decouvrez les 7 workflows HubSpot essentiels pour automatiser votre marketing B2B : welcome series, lead scoring, nurturing, attribution et re-engagement.",
  openGraph: {
    title: "Marketing automation : 7 workflows HubSpot essentiels",
    description:
      "Decouvrez les 7 workflows HubSpot essentiels pour automatiser votre marketing B2B : welcome series, lead scoring, nurturing, attribution et re-engagement.",
    url: "https://ceres.agency/blog/marketing-automation-7-workflows-hubspot",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/marketing-automation-7-workflows-hubspot",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
