import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour Grands Groupes : migrations CRM | Ceres",
  description:
    "Accompagnement RevOps grands comptes. Migration Dynamics et Salesforce vers HubSpot, multi-regions, RGPD. Cas client TotalEnergies.",
  alternates: {
    canonical: "https://ceres.agency/revops-grand-groupe",
  },
  openGraph: {
    title: "RevOps pour Grands Groupes : migrations CRM | Ceres",
    description: "Accompagnement RevOps grands comptes. Migration Dynamics et Salesforce vers HubSpot, multi-regions, RGPD. Cas client TotalEnergies.",
    url: "https://ceres.agency/revops-grand-groupe",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
