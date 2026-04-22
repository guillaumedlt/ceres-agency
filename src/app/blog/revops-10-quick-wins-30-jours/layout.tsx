import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps : 10 quick wins a implementer en 30 jours",
  description:
    "10 actions RevOps concretes a mettre en place en moins de 30 jours. Matrice effort/impact, setup pas a pas et resultats mesurables sur vos operations revenue.",
  openGraph: {
    title: "RevOps : 10 quick wins a implementer en 30 jours",
    description:
      "10 actions RevOps concretes a mettre en place en moins de 30 jours. Matrice effort/impact, setup pas a pas et resultats mesurables sur vos operations revenue.",
    url: "https://ceres.agency/blog/revops-10-quick-wins-30-jours",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/revops-10-quick-wins-30-jours",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
