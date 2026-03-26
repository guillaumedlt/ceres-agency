import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacter Ceres : reservez un appel decouverte",
  description:
    "Contactez Ceres pour discuter de votre projet RevOps, CRM ou IA. Reservez un appel decouverte gratuit de 30 minutes avec un consultant specialise HubSpot.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
