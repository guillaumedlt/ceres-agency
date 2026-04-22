import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "9 actions commerciales a automatiser avec HubSpot",
  description:
    "Decouvrez 9 taches commerciales repetitives a automatiser dans HubSpot : attribution de leads, relances, devis et plus. Gagnez 12h par semaine.",
  openGraph: {
    title: "9 actions commerciales a automatiser avec HubSpot",
    description:
      "Decouvrez 9 taches commerciales repetitives a automatiser dans HubSpot : attribution de leads, relances, devis et plus. Gagnez 12h par semaine.",
    url: "https://ceres.agency/blog/9-actions-commerciales-automatiser-hubspot",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/9-actions-commerciales-automatiser-hubspot",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
