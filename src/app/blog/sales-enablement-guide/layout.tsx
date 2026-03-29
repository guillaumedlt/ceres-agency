import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales enablement : definition, mise en place et outils 2026",
  description:
    "Guide complet du sales enablement : definition, difference avec sales ops et RevOps, les 4 piliers, mise en place en 5 etapes, outils (Seismic, Showpad, HubSpot), playbooks, templates et mesure du ROI.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
