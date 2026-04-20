import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour PME : alignez vos equipes | Ceres",
  description:
    "Consultant RevOps PME. Audit CRM, restructuration pipeline, SLA marketing-sales, lead scoring et automatisation. Accelerez sans recruter.",
  keywords: [
    "revops pme",
    "crm pme",
    "operations commerciales pme",
    "consultant revops pme",
    "revops externalisé pme",
    "crm hubspot pme",
    "alignement marketing sales pme",
    "audit crm pme",
  ],
  alternates: {
    canonical: "https://ceres.agency/revops-pme",
  },
  openGraph: {
    title: "RevOps pour PME : alignez vos equipes | Ceres",
    description:
      "Consultant RevOps PME. Audit CRM, restructuration pipeline, SLA marketing-sales, lead scoring et automatisation.",
    url: "https://ceres.agency/revops-pme",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
