import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence HubSpot | Setup, migration et optimisation | Ceres",
  description: "On configure, migre et optimise votre HubSpot. Setup en 4 semaines, migration sans perte de donnees. Partenaire certifie. 250+ clients.",
  robots: "noindex",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
