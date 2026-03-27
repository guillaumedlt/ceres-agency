import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence RevOps | Audit gratuit en 48h | Ceres",
  description: "Structurez vos operations commerciales avec Ceres. Audit RevOps gratuit, resultats en 2 semaines. 250+ clients, partenaire HubSpot.",
  robots: "noindex",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
