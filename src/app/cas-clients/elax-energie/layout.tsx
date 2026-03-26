import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Elax Energie : audit HubSpot et remise a plat RevOps",
  description:
    "Cas client Elax Energie : audit HubSpot complet et remise a plat des processus RevOps pour ameliorer la gestion commerciale de la startup de l'energie verte.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
