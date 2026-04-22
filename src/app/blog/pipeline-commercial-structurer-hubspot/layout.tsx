import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline commercial : structurer dans HubSpot | Ceres",
  description:
    "Les 5 a 7 etapes de pipeline qui marchent, criteres de passage, proprietes obligatoires et velocite. Template pret a copier pour HubSpot.",
  keywords: [
    "pipeline commercial",
    "pipeline HubSpot",
    "deal stages",
    "structure pipeline",
    "sales pipeline",
  ],
  openGraph: {
    title: "Pipeline commercial : structurer dans HubSpot | Ceres",
    description:
      "Les 5 a 7 etapes de pipeline qui marchent, criteres de passage, proprietes obligatoires et velocite. Template pret a copier pour HubSpot.",
    url: "https://ceres.agency/blog/pipeline-commercial-structurer-hubspot",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/pipeline-commercial-structurer-hubspot",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
