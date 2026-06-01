import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forecast accuracy : passer de 35% a 88% en 6 mois (framework) | Ceres",
  description:
    "Framework complet pour faire passer le forecast accuracy d'un SaaS B2B de 35% a 88% en 6 mois. 7 leviers, stage criteria, IA, rituels.",
  keywords: ["forecast accuracy", "ameliorer forecast saas", "framework forecasting revops", "previsions ventes precises", "forecast b2b"],
  alternates: { canonical: "https://ceres.agency/blog/forecast-accuracy-35-vers-88-framework" },
  openGraph: {
    title: "Forecast accuracy : passer de 35% a 88% en 6 mois | Ceres",
    description: "Framework complet pour faire passer le forecast accuracy de 35% a 88% en 6 mois.",
    url: "https://ceres.agency/blog/forecast-accuracy-35-vers-88-framework",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
