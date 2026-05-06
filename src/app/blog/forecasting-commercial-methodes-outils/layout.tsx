import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forecasting commercial : methodes, outils et pratiques",
  description:
    "Guide du forecasting commercial : 5 methodes de prevision (bottom-up, pipeline weighted, IA predictive), outils et biais a eviter.",
  openGraph: {
    title: "Forecasting commercial : methodes, outils et pratiques",
    description:
      "Guide du forecasting commercial : 5 methodes de prevision (bottom-up, pipeline weighted, IA predictive), outils et biais a eviter.",
    url: "https://ceres.agency/blog/forecasting-commercial-methodes-outils",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/forecasting-commercial-methodes-outils",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
