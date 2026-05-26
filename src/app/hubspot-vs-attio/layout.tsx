import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot vs Attio : quel CRM choisir en 2026 ? | Ceres",
  description:
    "Comparatif HubSpot vs Attio : prix, UX, automatisation, scalabilite, IA et integrations. Le verdict honnete pour startups, scale-ups et SaaS B2B en 2026.",
  keywords: ["hubspot vs attio", "attio vs hubspot", "comparatif crm hubspot attio", "attio avis", "attio crm"],
  alternates: { canonical: "https://ceres.agency/hubspot-vs-attio" },
  openGraph: {
    title: "HubSpot vs Attio : quel CRM choisir en 2026 ? | Ceres",
    description: "Comparatif HubSpot vs Attio : prix, UX, automatisation, scalabilite, IA et integrations.",
    url: "https://ceres.agency/hubspot-vs-attio",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
