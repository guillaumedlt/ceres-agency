import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Migration CRM : changer de CRM sans tout casser | Ceres",
  description: "Changez de CRM sans perte de donnees. Migrations Salesforce, Dynamics et Pipedrive vers HubSpot. Methodologie eprouvee, cas clients.",
  alternates: {
    canonical: "https://ceres.agency/migration-crm",
  },
  openGraph: {
    title: "Migration CRM : changer de CRM sans tout casser | Ceres",
    description: "Changez de CRM sans perte de donnees. Migrations depuis Salesforce, Dynamics et Pipedrive vers HubSpot. Audit, mapping et accompagnement.",
    url: "https://ceres.agency/migration-crm",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
