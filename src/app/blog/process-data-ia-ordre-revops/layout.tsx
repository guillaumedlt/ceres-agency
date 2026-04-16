import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process, Data, IA : pourquoi l'ordre compte | Ceres",
  description:
    "L'IA ne compense pas une fondation bancale. La sequence : structurer les process, normaliser les donnees, deployer l'IA.",
  keywords: [
    "process data IA",
    "RevOps methodologie",
    "IA RevOps",
    "fondation IA",
    "methode RevOps",
  ],
  openGraph: {
    title: "Process, Data, IA : pourquoi l'ordre compte | Ceres",
    description:
      "L'IA ne compense pas une fondation bancale. La sequence : structurer les process, normaliser les donnees, deployer l'IA.",
    url: "https://ceres.agency/blog/process-data-ia-ordre-revops",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/process-data-ia-ordre-revops",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
