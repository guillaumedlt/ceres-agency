import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude vs ChatGPT pour les equipes commerciales : comparatif 2026",
  description:
    "Comparaison detaillee de Claude et ChatGPT pour les equipes de vente B2B : emails, analyse CRM, resume de calls, coaching commercial, API, prix et retour terrain.",
  openGraph: {
    title: "Claude vs ChatGPT pour les equipes commerciales : comparatif 2026",
    description:
      "Comparaison detaillee de Claude et ChatGPT pour les equipes de vente B2B : emails, analyse CRM, resume de calls, coaching commercial, API, prix et retour terrain.",
    url: "https://ceres.agency/blog/claude-vs-chatgpt-equipes-commerciales",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/claude-vs-chatgpt-equipes-commerciales",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
