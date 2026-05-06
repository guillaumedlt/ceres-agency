import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integration HubSpot x Calendly : guide complet",
  description:
    "Guide complet pour connecter Calendly a HubSpot. Integration native, workflows, automatisation post-RDV, comparaison avec HubSpot Meetings et bonnes pratiques.",
  openGraph: {
    title: "Integration HubSpot x Calendly : guide complet",
    description:
      "Guide complet pour connecter Calendly a HubSpot. Integration native, workflows, automatisation post-RDV, comparaison avec HubSpot Meetings et bonnes pratiques.",
    url: "https://ceres.agency/blog/integration-hubspot-calendly",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/integration-hubspot-calendly",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
