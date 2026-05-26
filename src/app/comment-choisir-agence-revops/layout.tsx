import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment choisir une agence RevOps en 2026 ? 12 criteres | Ceres",
  description:
    "Le guide complet pour choisir une agence RevOps en France : 12 criteres d'evaluation, pieges a eviter, questions a poser, budget realiste. Mise a jour mai 2026.",
  keywords: ["comment choisir agence revops", "agence revops criteres", "selection agence revops", "comparer agences revops"],
  alternates: { canonical: "https://ceres.agency/comment-choisir-agence-revops" },
  openGraph: {
    title: "Comment choisir une agence RevOps en 2026 ? 12 criteres | Ceres",
    description: "12 criteres pour choisir une agence RevOps. Pieges a eviter, questions a poser, budget realiste.",
    url: "https://ceres.agency/comment-choisir-agence-revops",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
