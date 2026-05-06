import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude et le reporting automatise en RevOps | Ceres",
  description:
    "Comment Claude genere un rapport hebdo complet en 30 secondes. KPIs par silo, alertes, actions recommandees. Workflow RevOps automatise.",
  keywords: [
    "reporting IA",
    "Claude reporting",
    "automatisation reporting",
    "dashboard IA",
    "KPI RevOps",
  ],
  openGraph: {
    title: "Claude et le reporting automatise en RevOps | Ceres",
    description:
      "Comment Claude genere un rapport hebdo complet en 30 secondes. KPIs par silo, alertes, actions recommandees. Workflow RevOps automatise.",
    url: "https://ceres.agency/blog/claude-reporting-automatise-revops",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/claude-reporting-automatise-revops",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
