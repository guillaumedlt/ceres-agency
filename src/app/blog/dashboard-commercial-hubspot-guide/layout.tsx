import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard commercial HubSpot : guide 2026 | Ceres",
  description:
    "Les 5 dashboards commerciaux qui comptent : pipeline, activite, forecast, conversion et performance. Templates prets a copier pour HubSpot.",
  keywords: [
    "dashboard HubSpot",
    "dashboard commercial",
    "reporting HubSpot",
    "pipeline dashboard",
    "sales dashboard",
  ],
  openGraph: {
    title: "Dashboard commercial HubSpot : guide 2026 | Ceres",
    description:
      "Les 5 dashboards commerciaux qui comptent : pipeline, activite, forecast, conversion et performance. Templates prets a copier pour HubSpot.",
    url: "https://ceres.agency/blog/dashboard-commercial-hubspot-guide",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/dashboard-commercial-hubspot-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
