import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glossaire RevOps : 80+ termes CRM, Sales, Marketing et IA",
  description:
    "Glossaire RevOps complet : plus de 80 definitions claires des termes CRM, Sales Ops, Marketing Ops et IA. Ideal pour les equipes revenue operations en B2B.",
  alternates: {
    canonical: "https://ceres.agency/glossaire",
  },
  openGraph: {
    title: "Glossaire RevOps : 80+ termes CRM, Sales, Marketing et IA",
    description:
      "Glossaire RevOps complet : plus de 80 definitions claires des termes CRM, Sales Ops, Marketing Ops et IA.",
    url: "https://ceres.agency/glossaire",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
