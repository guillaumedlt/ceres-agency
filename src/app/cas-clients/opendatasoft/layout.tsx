import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Opendatasoft : HubSpot Admin externalise",
  description:
    "Cas client Opendatasoft : administration HubSpot externalisee pour maintenir un CRM performant, automatiser les processus et former les equipes en continu.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/opendatasoft",
  },
  openGraph: {
    title: "Cas client Opendatasoft : HubSpot Admin externalise",
    description: "Cas client Opendatasoft : administration HubSpot externalisee pour maintenir un CRM performant, automatiser les processus et former les equipes en continu.",
    url: "https://ceres.agency/cas-clients/opendatasoft",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
