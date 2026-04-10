import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deploiement IA : agents et scoring RevOps | Ceres",
  description:
    "On deploie l'IA silo par silo dans vos operations commerciales. Agents IA sur le CRM, scoring, enrichissement, reporting automatise.",
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
