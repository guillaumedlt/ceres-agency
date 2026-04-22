import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultant RevOps | Expert Revenue Operations France | Ceres",
  description:
    "Consultant RevOps en Revenue Operations. Alignement Sales, Marketing et CS. Audit CRM, automatisation et deploiement IA. 250+ clients.",
  keywords: [
    "consultant revops",
    "consultant revops france",
    "expert revops",
    "revenue operations consultant",
    "consultant revenue operations",
    "revops freelance",
    "revops externalise",
    "consultant ops commercial",
    "expert revenue operations france",
    "cabinet revops",
  ],
  alternates: {
    canonical: "https://ceres.agency/consultant-revops",
  },
  openGraph: {
    title: "Consultant RevOps | Expert Revenue Operations France | Ceres",
    description:
      "Consultant RevOps specialise en Revenue Operations. Alignement Sales, Marketing et CS. Audit CRM, automatisation des process et deploiement IA.",
    url: "https://ceres.agency/consultant-revops",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
