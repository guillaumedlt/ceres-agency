import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'IA remplace quoi dans une equipe commerciale ? | Ceres",
  description:
    "La matrice complete : ce que l'IA remplace a 100%, partiellement, assiste ou ne peut pas remplacer dans une equipe commerciale B2B.",
  keywords: [
    "IA remplace commerciaux",
    "IA equipe commerciale",
    "IA remplacement humain",
    "IA sales",
    "automatisation sales",
  ],
  openGraph: {
    title: "L'IA remplace quoi dans une equipe commerciale ? | Ceres",
    description:
      "La matrice complete : ce que l'IA remplace a 100%, partiellement, assiste ou ne peut pas remplacer dans une equipe commerciale B2B.",
    url: "https://ceres.agency/blog/ia-remplace-quoi-equipe-commerciale",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-remplace-quoi-equipe-commerciale",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
