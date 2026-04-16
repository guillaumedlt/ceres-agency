import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emails personnalises a grande echelle avec l'IA | Ceres",
  description:
    "Le dilemme volume vs personnalisation. Workflow IA complet (CRM > enrichissement > IA > validation). De 3% a 11%.",
  keywords: [
    "emails personnalises IA",
    "cold email IA",
    "prospection IA",
    "personnalisation emails",
    "IA prospection",
  ],
  openGraph: {
    title: "Emails personnalises a grande echelle avec l'IA | Ceres",
    description:
      "Le dilemme volume vs personnalisation. Workflow IA complet (CRM > enrichissement > IA > validation). De 3% a 11%.",
    url: "https://ceres.agency/blog/ia-email-personnalise-scale",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/ia-email-personnalise-scale",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
