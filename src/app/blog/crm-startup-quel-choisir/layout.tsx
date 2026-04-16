import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM pour startup : lequel choisir en 2026 | Ceres",
  description:
    "Comparatif HubSpot Free, Pipedrive, Folk, Attio. Criteres, prix, scalabilite. Le guide pour choisir son premier CRM.",
  keywords: [
    "CRM startup",
    "meilleur CRM startup",
    "HubSpot Free",
    "Pipedrive vs Folk",
    "choisir CRM",
  ],
  openGraph: {
    title: "CRM pour startup : lequel choisir en 2026 | Ceres",
    description:
      "Comparatif HubSpot Free, Pipedrive, Folk, Attio. Criteres, prix, scalabilite. Le guide pour choisir son premier CRM.",
    url: "https://ceres.agency/blog/crm-startup-quel-choisir",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/crm-startup-quel-choisir",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
