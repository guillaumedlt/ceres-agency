import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence Attio — Setup, Migration & Optimisation CRM | Ceres",
  description:
    "Agence Attio en France. Configuration, migration, personnalisation et optimisation du CRM AI-native pour startups et scale-ups B2B. Partenaire officiel.",
  keywords: [
    "agence attio",
    "attio crm",
    "attio france",
    "attio vs hubspot",
    "crm startup",
    "crm ia",
    "attio migration",
    "attio configuration",
    "attio integration",
    "crm moderne",
    "crm ai-native",
    "alternative hubspot",
    "alternative salesforce",
    "attio partenaire",
  ],
  alternates: {
    canonical: "https://ceres.agency/agence-attio",
  },
  openGraph: {
    title: "Agence Attio — Setup, Migration & Optimisation CRM | Ceres",
    description:
      "Agence Attio en France. Configuration, migration, personnalisation et optimisation du CRM AI-native pour startups et scale-ups B2B.",
    url: "https://ceres.agency/agence-attio",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
