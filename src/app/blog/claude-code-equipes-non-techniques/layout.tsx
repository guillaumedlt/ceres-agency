import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code pour les equipes non-techniques | Ceres",
  description:
    "Claude Code n'est pas un outil de dev. C'est un environnement ou Claude agit dans vos outils metier. Guide pratique pour equipes non techniques.",
  keywords: [
    "Claude Code",
    "IA non technique",
    "automatisation IA",
    "Claude Code entreprise",
    "IA marketing",
  ],
  openGraph: {
    title: "Claude Code pour les equipes non-techniques | Ceres",
    description:
      "Claude Code n'est pas un outil de dev. C'est un environnement ou Claude agit dans vos outils metier. Guide pratique pour equipes non techniques.",
    url: "https://ceres.agency/blog/claude-code-equipes-non-techniques",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/claude-code-equipes-non-techniques",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
