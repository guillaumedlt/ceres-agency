import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs et prix | Agence RevOps & IA | Ceres",
  description: "Tarifs transparents pour nos services RevOps et IA : diagnostic, Fondation Data, deploiement IA et accompagnement continu. Devis sur mesure.",
  keywords: ["tarif agence revops", "prix consultant revops", "tarif agence hubspot", "prix audit crm", "cout deploiement ia", "tarif consultant hubspot", "prix revops part time", "devis revops"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
