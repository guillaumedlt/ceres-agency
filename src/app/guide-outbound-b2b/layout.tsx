import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide Outbound B2B : cold email, LinkedIn et IA en 2026",
  description: "Le guide outbound le plus complet en francais. 55 pages : cold email, LinkedIn, Clay, Lemlist, Claude, enrichissement IA, warm-up et sequences multicanal.",
  alternates: {
    canonical: "https://ceres.agency/guide-outbound-b2b",
  },
  openGraph: {
    title: "Guide Outbound B2B : cold email, LinkedIn et IA en 2026",
    description: "Le guide outbound le plus complet en francais. 55 pages : cold email, LinkedIn, Clay, Lemlist, Claude, enrichissement IA, warm-up et sequences multicanal.",
    url: "https://ceres.agency/guide-outbound-b2b",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
