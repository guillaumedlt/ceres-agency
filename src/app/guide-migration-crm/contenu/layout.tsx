import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Guide Migration CRM : contenu complet des 10 chapitres",
  description: "Guide migration CRM complet. Comparatif 7 CRM 2026, methodologie, mapping, nettoyage, tests et adoption. Cas TotalEnergies, Dougs, HiPay.",
  alternates: {
    canonical: "https://ceres.agency/guide-migration-crm/contenu",
  },
  openGraph: {
    title: "Guide Migration CRM : contenu complet des 10 chapitres",
    description: "Guide migration CRM complet. Comparatif 7 CRM 2026, methodologie, mapping, nettoyage, tests et adoption. Cas TotalEnergies, Dougs, HiPay.",
    url: "https://ceres.agency/guide-migration-crm/contenu",
    type: "article",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
