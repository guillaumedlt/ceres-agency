import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qualification automatique des leads avec l'IA | Ceres",
  description:
    "Comment l'IA qualifie (comportement + firmographie + intent). MQL>SQL de 15% a 35%. Methode et resultats.",
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
      "Comment l'IA qualifie (comportement + firmographie + intent). MQL>SQL de 15% a 35%. Methode et resultats.",
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
