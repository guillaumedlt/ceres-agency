import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps Startups : structurez vos operations | Ceres",
  description:
    "Accompagnement RevOps adapte aux startups. Setup CRM, pipeline, scoring et dashboards en 2 semaines. A partir de 0 EUR/mois de stack.",
  alternates: {
    canonical: "https://ceres.agency/revops-startup",
  },
  openGraph: {
    title: "RevOps Startups : structurez vos operations | Ceres",
    description: "Accompagnement RevOps adapte aux startups. Setup CRM, pipeline, scoring et dashboards en 2 semaines. A partir de 0 EUR/mois de stack.",
    url: "https://ceres.agency/revops-startup",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
