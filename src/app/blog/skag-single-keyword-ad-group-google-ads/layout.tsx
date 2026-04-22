import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SKAG pour Google Ads : bonne idee ou pas ?",
  description:
    "Analyse complete de la strategie Single Keyword Ad Group (SKAG) pour Google Ads en 2026. Avantages, inconvenients, alternatives modernes et verdict final.",
  openGraph: {
    title: "SKAG pour Google Ads : bonne idee ou pas ?",
    description:
      "Analyse complete de la strategie Single Keyword Ad Group (SKAG) pour Google Ads en 2026. Avantages, inconvenients, alternatives modernes et verdict final.",
    url: "https://ceres.agency/blog/skag-single-keyword-ad-group-google-ads",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/skag-single-keyword-ad-group-google-ads",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
