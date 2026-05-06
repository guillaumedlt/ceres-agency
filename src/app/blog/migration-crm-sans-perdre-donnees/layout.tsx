import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migration CRM : migrer sans perdre de donnees | Ceres",
  description:
    "L'audit pre-migration, le mapping des champs, le nettoyage avant, la migration technique, les tests et le go-live. Guide anti-perte de donnees.",
  keywords: [
    "migration CRM",
    "migration HubSpot",
    "migration sans perte",
    "migration Salesforce",
    "mapping CRM",
  ],
  openGraph: {
    title: "Migration CRM : migrer sans perdre de donnees | Ceres",
    description:
      "L'audit pre-migration, le mapping des champs, le nettoyage avant, la migration technique, les tests et le go-live. Guide anti-perte de donnees.",
    url: "https://ceres.agency/blog/migration-crm-sans-perdre-donnees",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/migration-crm-sans-perdre-donnees",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
