import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Migration Salesforce vers HubSpot | Guide | Ceres",
  description: "Migrez de Salesforce vers HubSpot sans perte de donnees. Mapping, nettoyage, migration, formation. 30K+ contacts migres. Cas clients Dougs, HiPay.",
  alternates: {
    canonical: "https://ceres.agency/migration-salesforce-hubspot",
  },
  openGraph: {
    title: "Migration Salesforce vers HubSpot | Guide | Ceres",
    description: "Migrez de Salesforce vers HubSpot sans perte de donnees. Mapping, nettoyage, migration, formation. 30K+ contacts migres. Cas clients Dougs, HiPay.",
    url: "https://ceres.agency/migration-salesforce-hubspot",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
