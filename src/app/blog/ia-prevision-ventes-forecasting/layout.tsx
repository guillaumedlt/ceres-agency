import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA et prevision des ventes : forecasting predictif | Ceres",
  description:
    "Pourquoi votre forecast est faux. Le forecasting IA, les signaux utilises, la precision attendue (35% a 85%+).",
  keywords: [
    "forecasting IA",
    "prevision ventes IA",
    "sales forecasting",
    "IA prediction ventes",
    "forecast HubSpot",
  ],
  openGraph: {
    title: "IA et prevision des ventes : forecasting predictif | Ceres",
    description:
      "Pourquoi votre forecast est faux. Le forecasting IA, les signaux utilises, la precision attendue (35% a 85%+).",
    url: "https://ceres.agency/blog/ia-prevision-ventes-forecasting",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-prevision-ventes-forecasting",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
