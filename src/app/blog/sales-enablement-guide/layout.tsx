import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales enablement : definition, mise en place et outils 2026",
  description:
    "Guide du sales enablement : definition, 4 piliers, mise en place en 5 etapes, outils (Seismic, Showpad, HubSpot), playbooks et ROI.",
  openGraph: {
    title: "Sales enablement : definition, mise en place et outils 2026",
    description:
      "Guide du sales enablement : definition, 4 piliers, mise en place en 5 etapes, outils (Seismic, Showpad, HubSpot), playbooks et ROI.",
    url: "https://ceres.agency/blog/sales-enablement-guide",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/sales-enablement-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
