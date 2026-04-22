import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualification automatique des leads avec l'IA | Ceres",
  description:
    "Comment l'IA qualifie vos leads (comportement + firmographie + intent data). Taux MQL vers SQL de 15% a 35%. Methode et resultats concrets.",
  keywords: [
    "qualification leads IA",
    "lead scoring IA",
    "MQL SQL IA",
    "qualification automatique",
    "IA qualification",
  ],
  openGraph: {
    title: "Qualification automatique des leads avec l'IA | Ceres",
    description:
      "Comment l'IA qualifie vos leads (comportement + firmographie + intent data). Taux MQL vers SQL de 15% a 35%. Methode et resultats concrets.",
    url: "https://ceres.agency/blog/ia-qualification-leads-automatique",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-qualification-leads-automatique",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
