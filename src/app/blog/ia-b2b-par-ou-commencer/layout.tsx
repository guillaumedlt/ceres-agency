import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA en B2B : par ou commencer quand on n'a rien fait | Ceres",
  description:
    "Les 3 prerequis avant de deployer l'IA, les 3 premiers use cases (enrichissement, reporting, emails) et ce qu'il ne faut PAS faire en premier.",
  keywords: [
    "IA B2B debutant",
    "commencer IA",
    "premier projet IA",
    "IA entreprise",
    "IA pour commencer",
  ],
  openGraph: {
    title: "IA en B2B : par ou commencer quand on n'a rien fait | Ceres",
    description:
      "Les 3 prerequis avant de deployer l'IA, les 3 premiers use cases (enrichissement, reporting, emails) et ce qu'il ne faut PAS faire en premier.",
    url: "https://ceres.agency/blog/ia-b2b-par-ou-commencer",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-b2b-par-ou-commencer",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
