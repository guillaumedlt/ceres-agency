import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre methode : Data, IA et Revenue Operations | Ceres",
  description: "La methodologie Ceres pour integrer l'IA dans vos operations commerciales. Donnees propres, KPIs alignes, IA par silo. 250+ entreprises B2B.",
  keywords: ["methode revops ia", "methodologie ia operations", "data ia revops", "deploiement ia b2b", "framework revenue operations", "audit silos ia", "fondation data ia"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
