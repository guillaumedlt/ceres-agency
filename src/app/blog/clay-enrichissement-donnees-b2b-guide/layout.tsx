import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clay : le guide complet de l'enrichissement de donnees B2B",
  description:
    "Guide complet Clay : waterfall enrichment, 75+ providers, AI columns, integration HubSpot, use cases concrets, pricing et comparatif Apollo/Clearbit.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
