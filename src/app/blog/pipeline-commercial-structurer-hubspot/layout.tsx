import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pipeline commercial : structurer dans HubSpot | Ceres",
  description:
    "Les 5-7 etapes qui marchent, criteres de passage, proprietes obligatoires, velocite. Template pret a copier.",
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
      "Les 5-7 etapes qui marchent, criteres de passage, proprietes obligatoires, velocite. Template pret a copier.",
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
