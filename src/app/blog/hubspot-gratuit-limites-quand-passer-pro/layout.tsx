import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot gratuit : limites et quand passer en Pro | Ceres",
  description:
    "Les 5 limites qui bloquent en HubSpot Free. A quel moment passer en Starter ou Pro. Le cout reel et la migration.",
  keywords: [
    "HubSpot gratuit",
    "HubSpot Free",
    "HubSpot Pro",
    "HubSpot Starter",
    "HubSpot prix",
  ],
  openGraph: {
    title: "HubSpot gratuit : limites et quand passer en Pro | Ceres",
    description:
      "Les 5 limites qui bloquent en HubSpot Free. A quel moment passer en Starter ou Pro. Le cout reel et la migration.",
    url: "https://ceres.agency/blog/hubspot-gratuit-limites-quand-passer-pro",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/hubspot-gratuit-limites-quand-passer-pro",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
