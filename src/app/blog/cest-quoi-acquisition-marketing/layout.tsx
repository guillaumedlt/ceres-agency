import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "C'est quoi l'acquisition en marketing ? Guide complet",
  description:
    "Guide complet sur l'acquisition marketing : definition, canaux (SEO, SEA, outbound, referral), metriques cles (CAC, LTV) et strategie de croissance structuree.",
  openGraph: {
    title: "C'est quoi l'acquisition en marketing ? Guide complet",
    description:
      "Guide complet sur l'acquisition marketing : definition, canaux (SEO, SEA, outbound, referral), metriques cles (CAC, LTV) et strategie de croissance structuree.",
    url: "https://ceres.agency/blog/cest-quoi-acquisition-marketing",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/cest-quoi-acquisition-marketing",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
