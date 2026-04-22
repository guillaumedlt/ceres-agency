import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Elax Energie : audit RevOps | Ceres",
  description:
    "Cas client Elax Energie : audit HubSpot complet et remise a plat des processus RevOps pour ameliorer la gestion commerciale de la startup de l'energie verte.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/elax-energie",
  },
  openGraph: {
    title: "Cas client Elax Energie : audit RevOps | Ceres",
    description: "Cas client Elax Energie : audit HubSpot complet et remise a plat des processus RevOps pour ameliorer la gestion commerciale de la startup de l'energie verte.",
    url: "https://ceres.agency/cas-clients/elax-energie",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
