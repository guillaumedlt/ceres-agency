import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Lead Scoring HubSpot : mise en place et optimisation | Ceres",
  description: "Mettez en place un lead scoring HubSpot efficace : demographique, comportemental et predictif. Guide de configuration pas a pas.",
  alternates: {
    canonical: "https://ceres.agency/lead-scoring-hubspot",
  },
  openGraph: {
    title: "Lead Scoring HubSpot : mise en place et optimisation | Ceres",
    description: "Mettez en place un lead scoring HubSpot efficace : demographique, comportemental et predictif. Guide de configuration et bonnes pratiques.",
    url: "https://ceres.agency/lead-scoring-hubspot",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
