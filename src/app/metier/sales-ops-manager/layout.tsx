import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Ops Manager : fiche metier, salaire et competences en 2026 | Ceres",
  description:
    "Fiche metier Sales Ops Manager 2026 : missions, salaire (45-90k€), competences requises, outils, evolution de carriere. Le guide complet en France.",
  keywords: ["sales ops manager", "fiche metier sales ops", "salaire sales ops manager", "sales operations metier", "sales ops competences"],
  alternates: { canonical: "https://ceres.agency/metier/sales-ops-manager" },
  openGraph: {
    title: "Sales Ops Manager : fiche metier, salaire et competences en 2026 | Ceres",
    description: "Tout sur le metier Sales Ops Manager en France en 2026 : missions, salaire, competences, evolution.",
    url: "https://ceres.agency/metier/sales-ops-manager",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
