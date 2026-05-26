import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salesforce vs Attio : quel CRM choisir en 2026 ? | Ceres",
  description:
    "Comparatif Salesforce vs Attio : prix, UX, customisation, IA, integrations, scalabilite. Modern stack ou enterprise grade ? Le verdict honnete.",
  keywords: ["salesforce vs attio", "attio vs salesforce", "comparatif salesforce attio", "attio enterprise"],
  alternates: { canonical: "https://ceres.agency/salesforce-vs-attio" },
  openGraph: {
    title: "Salesforce vs Attio : quel CRM choisir en 2026 ? | Ceres",
    description: "Comparatif Salesforce vs Attio : modern stack vs enterprise grade.",
    url: "https://ceres.agency/salesforce-vs-attio",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
