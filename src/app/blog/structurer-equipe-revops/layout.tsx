import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment structurer une equipe RevOps selon votre taille",
  description:
    "Guide organisationnel pour structurer votre equipe RevOps de 0 a 200+ personnes. Organigrammes, roles, ordre de recrutement, lignes hierarchiques et profils types.",
  openGraph: {
    title: "Comment structurer une equipe RevOps selon votre taille",
    description:
      "Guide organisationnel pour structurer votre equipe RevOps de 0 a 200+ personnes. Organigrammes, roles, ordre de recrutement, lignes hierarchiques et profils types.",
    url: "https://ceres.agency/blog/structurer-equipe-revops",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/structurer-equipe-revops",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
