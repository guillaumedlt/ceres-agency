import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps & IA Part-Time | Expert dedie mensuel | Ceres",
  description:
    "Un expert RevOps & IA integre a votre equipe chaque mois. CRM, agents IA, process et nouvelles briques. Sans engagement.",
  keywords: [
    "revops part time",
    "revops externalise",
    "accompagnement revops",
    "revops as a service",
    "consultant revops mensuel",
    "revops ia",
    "accompagnement ia entreprise",
    "revenue operations france",
  ],
  alternates: {
    canonical: "https://ceres.agency/revops-part-time",
  },
  openGraph: {
    title: "RevOps & IA Part-Time | Expert dedie mensuel | Ceres",
    description:
      "Un expert RevOps & IA integre a votre equipe chaque mois. CRM, agents IA, process et nouvelles briques. Sans engagement.",
    url: "https://ceres.agency/revops-part-time",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
