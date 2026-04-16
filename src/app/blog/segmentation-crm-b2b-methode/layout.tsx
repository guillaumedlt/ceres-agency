import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Segmentation CRM en B2B : la methode complete | Ceres",
  description:
    "Les 4 types de segmentation (firmographique, comportementale, intent, lifecycle). Comment segmenter dans HubSpot.",
  keywords: [
    "segmentation CRM",
    "segmentation HubSpot",
    "segmentation B2B",
    "ICP segmentation",
    "listes HubSpot",
  ],
  openGraph: {
    title: "Segmentation CRM en B2B : la methode complete | Ceres",
    description:
      "Les 4 types de segmentation (firmographique, comportementale, intent, lifecycle). Comment segmenter dans HubSpot.",
    url: "https://ceres.agency/blog/segmentation-crm-b2b-methode",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/segmentation-crm-b2b-methode",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
