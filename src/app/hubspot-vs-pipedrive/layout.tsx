import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot vs Pipedrive : quel CRM choisir en 2026 ? | Ceres",
  description:
    "Comparatif HubSpot vs Pipedrive : prix, UX, pipeline, automations, IA et integrations. Le verdict honnete pour PME et scale-ups B2B en 2026.",
  keywords: ["hubspot vs pipedrive", "pipedrive vs hubspot", "comparatif pipedrive hubspot", "pipedrive avis", "pipedrive crm"],
  alternates: { canonical: "https://ceres.agency/hubspot-vs-pipedrive" },
  openGraph: {
    title: "HubSpot vs Pipedrive : quel CRM choisir en 2026 ? | Ceres",
    description: "Comparatif HubSpot vs Pipedrive : prix, UX, pipeline, automations, IA et integrations.",
    url: "https://ceres.agency/hubspot-vs-pipedrive",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
