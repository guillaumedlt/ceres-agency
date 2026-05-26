import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salesforce vs Pipedrive : quel CRM choisir en 2026 ? | Ceres",
  description:
    "Comparatif Salesforce vs Pipedrive : prix, UX, scalabilite, IA, integrations. Enterprise vs PME, le verdict honnete pour B2B en 2026.",
  keywords: ["salesforce vs pipedrive", "pipedrive vs salesforce", "comparatif salesforce pipedrive", "salesforce pme"],
  alternates: { canonical: "https://ceres.agency/salesforce-vs-pipedrive" },
  openGraph: {
    title: "Salesforce vs Pipedrive : quel CRM choisir en 2026 ? | Ceres",
    description: "Enterprise vs PME : comparatif Salesforce vs Pipedrive.",
    url: "https://ceres.agency/salesforce-vs-pipedrive",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
