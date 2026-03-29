import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Ops : definition, missions et mise en place",
  description:
    "Guide complet du Marketing Ops : definition, difference avec marketing manager et RevOps, les 6 missions cles, competences requises, stack marketing ops (HubSpot, GA4, Looker Studio, Make) et quand recruter.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
