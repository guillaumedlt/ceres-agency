import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRO Chief Revenue Officer : fiche metier et salaire 2026 | Ceres",
  description:
    "Fiche metier Chief Revenue Officer (CRO) 2026 : missions, salaire (130-250k€), competences, evolution. Le poste cle du comex en SaaS B2B.",
  keywords: ["chief revenue officer", "cro", "fiche metier cro", "salaire cro france", "directeur revenue"],
  alternates: { canonical: "https://ceres.agency/metier/cro-chief-revenue-officer" },
  openGraph: {
    title: "Chief Revenue Officer (CRO) : fiche metier 2026 | Ceres",
    description: "Missions, salaire, competences et evolution du CRO en France en 2026.",
    url: "https://ceres.agency/metier/cro-chief-revenue-officer",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
