import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRO Chief Revenue Officer : fiche metier 2026 | Ceres",
  description:
    "Fiche metier Chief Revenue Officer (CRO) 2026 : missions, competences, evolution de carriere. Le poste cle du comex en SaaS B2B.",
  keywords: ["chief revenue officer", "cro", "fiche metier cro", "directeur revenue", "missions cro"],
  alternates: { canonical: "https://ceres.agency/metier/cro-chief-revenue-officer" },
  openGraph: {
    title: "Chief Revenue Officer (CRO) : fiche metier 2026 | Ceres",
    description: "Missions, competences et evolution du CRO en France en 2026.",
    url: "https://ceres.agency/metier/cro-chief-revenue-officer",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
