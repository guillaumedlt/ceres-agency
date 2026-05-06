import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Onboarding HubSpot | Deploiement et configuration | Ceres",
  description: "Onboarding HubSpot : configuration, import donnees, workflows, dashboards et formation en 4 semaines. Deploiement cle en main.",
  alternates: {
    canonical: "https://ceres.agency/onboarding-hubspot",
  },
  openGraph: {
    title: "Onboarding HubSpot | Deploiement et configuration | Ceres",
    description: "Onboarding HubSpot professionnel : configuration, import donnees, workflows, dashboards et formation en 4 semaines. Deploiement cle en main.",
    url: "https://ceres.agency/onboarding-hubspot",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
