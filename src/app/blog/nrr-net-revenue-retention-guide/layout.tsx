import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NRR (Net Revenue Retention) : le KPI cle en SaaS | Ceres",
  description:
    "Comment calculer le NRR (Net Revenue Retention), benchmarks par secteur, leviers (churn, expansion) et comment le tracker dans HubSpot.",
  keywords: [
    "NRR",
    "Net Revenue Retention",
    "KPI SaaS",
    "retention SaaS",
    "expansion revenue",
  ],
  openGraph: {
    title: "NRR (Net Revenue Retention) : le KPI cle en SaaS | Ceres",
    description:
      "Comment calculer le NRR (Net Revenue Retention), benchmarks par secteur, leviers (churn, expansion) et comment le tracker dans HubSpot.",
    url: "https://ceres.agency/blog/nrr-net-revenue-retention-guide",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/nrr-net-revenue-retention-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
