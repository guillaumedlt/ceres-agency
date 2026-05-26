import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM Manager : fiche metier et competences en 2026 | Ceres",
  description:
    "Fiche metier CRM Manager 2026 : missions, competences HubSpot/Salesforce, outils, evolution de carriere. Le guide complet en France.",
  keywords: ["crm manager", "fiche metier crm manager", "crm administrator", "hubspot admin", "missions crm manager"],
  alternates: { canonical: "https://ceres.agency/metier/crm-manager" },
  openGraph: {
    title: "CRM Manager : fiche metier et competences en 2026 | Ceres",
    description: "Missions, competences, certifications et evolution du CRM Manager en France en 2026.",
    url: "https://ceres.agency/metier/crm-manager",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
