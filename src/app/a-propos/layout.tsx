import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A propos de Ceres : agence RevOps et IA, 250+ clients, 9 ans",
  description:
    "Decouvrez Ceres, agence RevOps et IA basee a Paris. Plus de 250 clients accompagnes en 9 ans sur HubSpot, migrations CRM, automatisation et agents IA.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
