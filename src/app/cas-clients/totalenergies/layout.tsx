import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client TotalEnergies : migration Dynamics vers HubSpot",
  description:
    "Cas client TotalEnergies : decouvrez comment Ceres a pilote la migration de Microsoft Dynamics vers HubSpot pour une business unit du groupe energetique.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/totalenergies",
  },
  openGraph: {
    title: "Cas client TotalEnergies : migration Dynamics vers HubSpot",
    description: "Cas client TotalEnergies : decouvrez comment Ceres a pilote la migration de Microsoft Dynamics vers HubSpot pour une business unit du groupe energetique.",
    url: "https://ceres.agency/cas-clients/totalenergies",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
