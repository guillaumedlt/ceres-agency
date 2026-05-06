import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cold email B2B : 15 templates de prospection efficaces",
  description:
    "15 templates de cold email B2B classes par cas d'usage : intro, follow-up, referral, social proof, break-up. Objets, corps, personnalisation et outils.",
  openGraph: {
    title: "Cold email B2B : 15 templates de prospection efficaces",
    description:
      "15 templates de cold email B2B classes par cas d'usage : intro, follow-up, referral, social proof, break-up. Objets, corps, personnalisation et outils.",
    url: "https://ceres.agency/blog/cold-email-b2b-templates",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/cold-email-b2b-templates",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
