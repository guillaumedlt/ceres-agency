import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment structurer une equipe RevOps selon votre taille",
  description:
    "Structurer votre equipe RevOps de 0 a 200+ personnes. Organigrammes, roles, ordre de recrutement et profils types detailles.",
  openGraph: {
    title: "Comment structurer une equipe RevOps selon votre taille",
    description:
      "Structurer votre equipe RevOps de 0 a 200+ personnes. Organigrammes, roles, ordre de recrutement et profils types detailles.",
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
