import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intent data B2B : capter les signaux d\u2019achat",
  description:
    "Guide intent data B2B : signaux first-party et third-party, outils (Warmly, Koala, Clay, 6sense), integration HubSpot et scoring.",
  openGraph: {
    title: "Intent data B2B : capter les signaux d\u2019achat",
    description:
      "Guide intent data B2B : signaux first-party et third-party, outils (Warmly, Koala, Clay, 6sense), integration HubSpot et scoring.",
    url: "https://ceres.agency/blog/intent-data-signaux-achat-b2b",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/intent-data-signaux-achat-b2b",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
