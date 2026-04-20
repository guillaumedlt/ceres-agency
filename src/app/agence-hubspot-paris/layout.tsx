import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence HubSpot Paris | Partenaire certifie | Ceres",
  description:
    "Agence HubSpot a Paris. Setup, migration, optimisation et formation. Partenaire certifie, 250+ clients, 9 ans d'experience. Devis gratuit.",
  alternates: {
    canonical: "https://ceres.agency/agence-hubspot-paris",
  },
  openGraph: {
    title: "Agence HubSpot Paris | Partenaire certifie | Ceres",
    description:
      "Agence HubSpot a Paris. Setup, migration, optimisation et formation. Partenaire certifie, 250+ clients.",
    url: "https://ceres.agency/agence-hubspot-paris",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
