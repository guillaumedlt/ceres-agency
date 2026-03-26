import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracking des conversions HubSpot : le guide complet",
  description:
    "Guide complet du tracking de conversions dans HubSpot : UTM, attribution multi-touch, formulaires, events personnalises, connexion GA4 et dashboard de conversion.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
