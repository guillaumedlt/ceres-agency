import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migration CRM : comment changer de CRM sans tout casser",
  description:
    "Guide complet pour reussir votre migration CRM : audit, nettoyage, mapping des champs, outils de migration, tests et adoption. Focus sur les migrations vers HubSpot.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
