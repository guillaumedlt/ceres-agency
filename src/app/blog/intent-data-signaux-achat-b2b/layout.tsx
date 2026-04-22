import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intent data B2B : capter les signaux d\u2019achat au bon moment",
  description:
    "Guide complet intent data B2B : signaux first-party et third-party, outils (Warmly, Koala, RB2B, Clay, 6sense), integration HubSpot, scoring et workflows. Methode actionnable.",
  openGraph: {
    title: "Intent data B2B : capter les signaux d\u2019achat au bon moment",
    description:
      "Guide complet intent data B2B : signaux first-party et third-party, outils (Warmly, Koala, RB2B, Clay, 6sense), integration HubSpot, scoring et workflows. Methode actionnable.",
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
