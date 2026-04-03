import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deploiement IA : optimiser chaque silo RevOps avec l'intelligence artificielle | Ceres",
  description:
    "On deploie l'IA silo par silo dans vos operations commerciales. Audit des taches remplacables, agents IA sur le CRM, scoring, enrichissement, reporting automatise. De la donnee propre a l'intelligence operationnelle.",
  keywords: [
    "deploiement ia revops",
    "ia operations commerciales",
    "agents ia crm",
    "scoring ia",
    "enrichissement ia",
    "automatisation ia",
    "audit ia silos",
    "ia marketing sales cs",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
