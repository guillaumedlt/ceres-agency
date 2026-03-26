import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence RevOps en France | Revenue Operations | Ceres",
  description: "Ceres est l'agence RevOps de reference en France. On aligne marketing, sales et CS pour creer un revenue engine previsible. 250+ clients, 9 ans d'experience.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
