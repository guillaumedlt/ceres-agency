import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiches metier RevOps : tous les roles, salaires et evolution | Ceres",
  description:
    "Tous les metiers RevOps en France : Sales Ops, CRM Manager, RevOps Director, CRO. Missions, salaires 2026, competences, evolution de carriere.",
  keywords: ["fiches metier revops", "metiers revenue operations", "roles revops", "salaires revops france"],
  alternates: { canonical: "https://ceres.agency/metier" },
  openGraph: {
    title: "Fiches metier RevOps : tous les roles, salaires et evolution | Ceres",
    description: "Tous les metiers RevOps en France : Sales Ops, CRM Manager, RevOps Director, CRO.",
    url: "https://ceres.agency/metier",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
