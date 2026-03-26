import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead scoring : le guide complet pour qualifier vos leads B2B",
  description:
    "Guide complet du lead scoring B2B : modeles de scoring fit et engagement, implementation dans HubSpot, predictive scoring IA, erreurs a eviter et methode Ceres.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
