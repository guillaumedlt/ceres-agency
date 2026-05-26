import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Ops Manager : fiche metier et competences en 2026 | Ceres",
  description:
    "Fiche metier Sales Ops Manager 2026 : missions, competences requises, outils, evolution de carriere. Le guide complet en France.",
  keywords: ["sales ops manager", "fiche metier sales ops", "sales operations metier", "sales ops competences", "missions sales ops"],
  alternates: { canonical: "https://ceres.agency/metier/sales-ops-manager" },
  openGraph: {
    title: "Sales Ops Manager : fiche metier et competences en 2026 | Ceres",
    description: "Tout sur le metier Sales Ops Manager en France en 2026 : missions, competences, evolution de carriere.",
    url: "https://ceres.agency/metier/sales-ops-manager",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
