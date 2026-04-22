import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TOFU, MOFU, BOFU : comprendre et optimiser votre strategie inbound",
  description:
    "Guide complet du funnel inbound marketing : TOFU, MOFU, BOFU. Contenus, KPIs, outils et alignement RevOps pour chaque etape du parcours d'achat B2B en 2026.",
  openGraph: {
    title: "TOFU, MOFU, BOFU : comprendre et optimiser votre strategie inbound",
    description:
      "Guide complet du funnel inbound marketing : TOFU, MOFU, BOFU. Contenus, KPIs, outils et alignement RevOps pour chaque etape du parcours d'achat B2B en 2026.",
    url: "https://ceres.agency/blog/tofu-mofu-bofu-strategie-inbound",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/tofu-mofu-bofu-strategie-inbound",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
