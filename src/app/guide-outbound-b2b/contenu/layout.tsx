import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guide Outbound B2B : contenu complet des 10 chapitres",
  description: "Le guide outbound B2B le plus complet en francais. Cold email, LinkedIn, Clay, Lemlist AI enrichment, signaux d'achat, Claude, warm-up et sequences multicanal.",
  alternates: {
    canonical: "https://ceres.agency/guide-outbound-b2b/contenu",
  },
  openGraph: {
    title: "Guide Outbound B2B : contenu complet des 10 chapitres",
    description: "Le guide outbound B2B le plus complet en francais. Cold email, LinkedIn, Clay, Lemlist AI enrichment, signaux d'achat, Claude, warm-up et sequences multicanal.",
    url: "https://ceres.agency/guide-outbound-b2b/contenu",
    type: "article",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
