import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Migration Pipedrive vers HubSpot | Ceres",
  description: "Migrez de Pipedrive vers HubSpot en 4 a 8 semaines. Methodologie en 6 etapes, migration complete des donnees, formation equipes. A partir de 5 000 EUR.",
  alternates: {
    canonical: "https://ceres.agency/migration-pipedrive-hubspot",
  },
  openGraph: {
    title: "Migration Pipedrive vers HubSpot | Ceres",
    description: "Migrez de Pipedrive vers HubSpot en 4 a 8 semaines. Methodologie en 6 etapes, migration complete des donnees, formation equipes. A partir de 5 000 EUR.",
    url: "https://ceres.agency/migration-pipedrive-hubspot",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
