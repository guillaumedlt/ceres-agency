import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ROI du RevOps : comment le calculer et le defendre au board | Ceres",
  description:
    "Framework complet pour calculer le ROI d'une fonction RevOps : leviers, formules, benchmarks 2026. Avec un slide template pour le board.",
  keywords: ["roi revops", "calculer roi revops", "roi revenue operations", "revops board reporting", "revops business case"],
  alternates: { canonical: "https://ceres.agency/blog/roi-revops-calculer-defendre-board" },
  openGraph: {
    title: "ROI du RevOps : comment le calculer et le defendre au board | Ceres",
    description: "Framework complet pour calculer le ROI d'une fonction RevOps. Formules, benchmarks, slide template.",
    url: "https://ceres.agency/blog/roi-revops-calculer-defendre-board",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
