import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracking des conversions HubSpot : le guide complet",
  description:
    "Tracking de conversions dans HubSpot : UTM, attribution multi-touch, formulaires, events personnalises, GA4 et dashboards.",
  openGraph: {
    title: "Tracking des conversions HubSpot : le guide complet",
    description:
      "Tracking de conversions dans HubSpot : UTM, attribution multi-touch, formulaires, events personnalises, GA4 et dashboards.",
    url: "https://ceres.agency/blog/tracking-conversions-hubspot-guide-complet",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/tracking-conversions-hubspot-guide-complet",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
