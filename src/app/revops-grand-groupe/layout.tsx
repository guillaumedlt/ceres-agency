import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour Grands Groupes : migrations CRM et unification multi-instances",
  description:
    "Accompagnement RevOps grands comptes. Migration Dynamics et Salesforce vers HubSpot, multi-regions, RGPD. Cas client TotalEnergies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
