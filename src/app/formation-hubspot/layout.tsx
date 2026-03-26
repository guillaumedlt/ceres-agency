import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formation HubSpot : programmes sur mesure pour vos equipes | Ceres",
  description:
    "Formation HubSpot sur mesure a Paris et en remote. Programmes par role : admin, commercial, marketing, manager. 1 journee, 3 jours ou programme personnalise.",
  keywords: [
    "formation hubspot",
    "formation crm",
    "formation hubspot paris",
    "formation hubspot en ligne",
    "formation hubspot sales",
    "formation hubspot marketing",
    "formation crm commercial",
    "certification hubspot",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
