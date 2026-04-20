import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Onboarding HubSpot | Deploiement et configuration | Ceres",
  description: "Onboarding HubSpot professionnel. Configuration, import donnees, workflows, dashboards et formation en 4 semaines. Partenaire certifie, 250+ clients.",
  alternates: {
    canonical: "https://ceres.agency/onboarding-hubspot",
  },
  openGraph: {
    title: "Onboarding HubSpot | Deploiement et configuration | Ceres",
    description: "Onboarding HubSpot professionnel. Configuration, import donnees, workflows, dashboards et formation en 4 semaines.",
    url: "https://ceres.agency/onboarding-hubspot",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
