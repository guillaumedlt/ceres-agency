import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metriques de l'IA en RevOps : KPI a suivre | Ceres",
  description:
    "KPIs d'efficacite, de qualite et d'impact business. Dashboard IA recommande, formule ROI, pieges de la mesure.",
  keywords: [
    "metriques IA",
    "KPI IA",
    "mesurer IA",
    "ROI IA",
    "metriques RevOps",
  ],
  openGraph: {
    title: "Metriques de l'IA en RevOps : KPI a suivre | Ceres",
    description:
      "KPIs d'efficacite, de qualite et d'impact business. Dashboard IA recommande, formule ROI, pieges de la mesure.",
    url: "https://ceres.agency/blog/metriques-ia-revops-kpi",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/metriques-ia-revops-kpi",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
