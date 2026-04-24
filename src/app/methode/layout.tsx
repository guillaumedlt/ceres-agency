import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre methode RevOps augmentee par l'IA | Ceres",
  description: "La methodologie Ceres : structurer vos operations RevOps, nettoyer vos donnees, aligner vos KPIs, puis deployer l'IA comme accelerateur. 250+ entreprises B2B.",
  keywords: ["methode revops", "methodologie revops", "revops ia", "framework revenue operations", "data revops", "audit revops methode", "revops augmente ia"],
  alternates: {
    canonical: "https://ceres.agency/methode",
  },
  openGraph: {
    title: "Notre methode RevOps augmentee par l'IA | Ceres",
    description: "La methodologie Ceres : structurer vos operations RevOps, nettoyer vos donnees, aligner vos KPIs, puis deployer l'IA comme accelerateur.",
    url: "https://ceres.agency/methode",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
