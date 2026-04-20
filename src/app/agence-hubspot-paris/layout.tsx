import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence HubSpot Paris 8e | Rendez-vous sur site | Ceres",
  description:
    "Agence HubSpot basee a Paris 8e, rue La Boetie. Rencontrez nos consultants en personne. Expertise fintech, SaaS et ecosysteme tech parisien. Setup, migration, formation sur site. 250+ clients.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
