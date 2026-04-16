import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gouvernance des donnees CRM : guide complet | Ceres",
  description:
    "Les 4 piliers : champs obligatoires, validation rules, workflows de standardisation, audits automatises.",
  keywords: [
    "gouvernance donnees",
    "gouvernance CRM",
    "data governance",
    "qualite donnees",
    "gouvernance HubSpot",
  ],
  openGraph: {
    title: "Gouvernance des donnees CRM : guide complet | Ceres",
    description:
      "Les 4 piliers : champs obligatoires, validation rules, workflows de standardisation, audits automatises.",
    url: "https://ceres.agency/blog/gouvernance-donnees-crm-guide",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/gouvernance-donnees-crm-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
