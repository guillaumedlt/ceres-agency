import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forecasting commercial : methodes, outils et bonnes pratiques",
  description:
    "Guide complet du forecasting commercial : 5 methodes de prevision (bottom-up, pipeline weighted, IA predictive), outils (HubSpot, Clari, Gong) et biais a eviter.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
