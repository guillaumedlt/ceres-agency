import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps Director : fiche metier, salaire et competences en 2026 | Ceres",
  description:
    "Fiche metier RevOps Director 2026 : missions, salaire (90-160k€), competences, evolution. Le profil cle pour les scale-ups B2B en hyper-croissance.",
  keywords: ["revops director", "head of revops", "director of revops", "salaire revops director", "directeur revops"],
  alternates: { canonical: "https://ceres.agency/metier/revops-director" },
  openGraph: {
    title: "RevOps Director : fiche metier, salaire et competences en 2026 | Ceres",
    description: "Missions, salaire, competences et evolution du RevOps Director en France en 2026.",
    url: "https://ceres.agency/metier/revops-director",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
