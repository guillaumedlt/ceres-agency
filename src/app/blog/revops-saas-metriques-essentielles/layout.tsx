import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Metriques essentielles du RevOps SaaS en 2026 | Ceres",
  description:
    "MRR, ARR, NRR, GRR, CAC, LTV, Payback, Magic Number, Pipeline Coverage. Dashboard SaaS complet.",
  keywords: [
    "metriques SaaS",
    "KPI SaaS",
    "RevOps SaaS",
    "MRR ARR",
    "metriques revenue",
  ],
  openGraph: {
    title: "Metriques essentielles du RevOps SaaS en 2026 | Ceres",
    description:
      "MRR, ARR, NRR, GRR, CAC, LTV, Payback, Magic Number, Pipeline Coverage. Dashboard SaaS complet.",
    url: "https://ceres.agency/blog/revops-saas-metriques-essentielles",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/revops-saas-metriques-essentielles",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
