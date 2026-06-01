import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEDDIC vs MEDDPICC vs BANT : quel framework de qualification en 2026 | Ceres",
  description:
    "Comparatif MEDDIC, MEDDPICC et BANT : framework de qualification a choisir selon ton ACV, cycle de vente, equipe. Cas d'usage concrets B2B 2026.",
  keywords: ["meddic vs meddpicc", "bant vs meddic", "framework qualification sales", "meddic b2b", "qualification commerciale 2026"],
  alternates: { canonical: "https://ceres.agency/blog/meddic-vs-meddpicc-vs-bant-qualification" },
  openGraph: {
    title: "MEDDIC vs MEDDPICC vs BANT : quel framework de qualification en 2026 | Ceres",
    description: "Comparatif MEDDIC, MEDDPICC et BANT. Choisir selon ACV, cycle de vente, equipe.",
    url: "https://ceres.agency/blog/meddic-vs-meddpicc-vs-bant-qualification",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
