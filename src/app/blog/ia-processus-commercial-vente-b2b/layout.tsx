import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment utiliser l'IA dans votre processus commercial B2B",
  description:
    "L'IA dans la vente B2B : 8 cas d'usage concrets (scoring, emails, resume de calls, prevision, coaching). Stack IA 2026 et ROI mesurable.",
  openGraph: {
    title: "Comment utiliser l'IA dans votre processus commercial B2B",
    description:
      "L'IA dans la vente B2B : 8 cas d'usage concrets (scoring, emails, resume de calls, prevision, coaching). Stack IA 2026 et ROI mesurable.",
    url: "https://ceres.agency/blog/ia-processus-commercial-vente-b2b",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-processus-commercial-vente-b2b",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
