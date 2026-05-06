import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence HubSpot Paris 8e | Rendez-vous sur site | Ceres",
  description:
    "Agence HubSpot a Paris 8e, rue La Boetie. Expertise fintech et SaaS. Setup, migration, formation sur site. 250+ clients accompagnes.",
  alternates: {
    canonical: "https://ceres.agency/agence-hubspot-paris",
  },
  openGraph: {
    title: "Agence HubSpot Paris 8e | Rendez-vous sur site | Ceres",
    description: "Agence HubSpot a Paris 8e, rue La Boetie. Expertise fintech et SaaS. Setup, migration, formation sur site. 250+ clients accompagnes.",
    url: "https://ceres.agency/agence-hubspot-paris",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
