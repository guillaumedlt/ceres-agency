import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Les meilleurs outils RevOps en 2026 | Ceres",
  description: "Annuaire de 100+ outils pour equipes commerciales et marketing B2B. CRM, enrichissement, outbound, automatisation, IA. Notes, prix et avis.",
  alternates: {
    canonical: "https://ceres.agency/outils",
  },
  openGraph: {
    title: "Les meilleurs outils RevOps en 2026 | Ceres",
    description: "Annuaire de 100+ outils pour equipes commerciales et marketing B2B. CRM, enrichissement, outbound, automatisation, IA. Notes, prix et avis.",
    url: "https://ceres.agency/outils",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
