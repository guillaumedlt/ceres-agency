import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultants RevOps a Paris 8e | Ateliers sur site | Ceres",
  description:
    "Consultants RevOps a Paris 8e. On aligne Marketing, Sales et CS dans vos locaux. Expertise scale-ups et SaaS. Audit 87 points + agents IA.",
  alternates: {
    canonical: "https://ceres.agency/agence-revops-paris",
  },
  openGraph: {
    title: "Consultants RevOps a Paris 8e | Ateliers sur site | Ceres",
    description: "Consultants RevOps a Paris 8e. On aligne Marketing, Sales et CS dans vos locaux. Expertise scale-ups et SaaS. Audit 87 points + agents IA.",
    url: "https://ceres.agency/agence-revops-paris",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
