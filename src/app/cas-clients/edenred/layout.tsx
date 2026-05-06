import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Edenred : HubSpot et Salesforce | Ceres",
  description:
    "Cas client Edenred : optimisation de la connexion HubSpot-Salesforce pour fiabiliser la synchronisation des donnees entre marketing et ventes du groupe mondial.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/edenred",
  },
  openGraph: {
    title: "Cas client Edenred : HubSpot et Salesforce | Ceres",
    description: "Cas client Edenred : optimisation de la connexion HubSpot-Salesforce pour fiabiliser la synchronisation des donnees entre marketing et ventes du groupe mondial.",
    url: "https://ceres.agency/cas-clients/edenred",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
