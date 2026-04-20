import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Lead Scoring HubSpot : mise en place et optimisation | Ceres",
  description: "Mettez en place un lead scoring HubSpot efficace : demographique, comportemental, predictif. Configuration pas a pas et resultats concrets.",
  alternates: {
    canonical: "https://ceres.agency/lead-scoring-hubspot",
  },
  openGraph: {
    title: "Lead Scoring HubSpot : mise en place et optimisation | Ceres",
    description: "Mettez en place un lead scoring HubSpot efficace : demographique, comportemental, predictif.",
    url: "https://ceres.agency/lead-scoring-hubspot",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
