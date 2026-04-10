import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps Startups : structurez vos operations | Ceres",
  description:
    "Accompagnement RevOps adapte aux startups. Setup CRM, pipeline, scoring et dashboards en 2 semaines. A partir de 0 EUR/mois de stack.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
