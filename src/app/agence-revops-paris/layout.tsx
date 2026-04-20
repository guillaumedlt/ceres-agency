import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence RevOps Paris | Revenue Operations a Paris | Ceres",
  description:
    "Agence RevOps a Paris, 8eme arrondissement. Audit, accompagnement et deploiement RevOps + IA. 250+ clients, partenaire HubSpot. Rendez-vous sur site ou remote.",
  alternates: {
    canonical: "https://ceres.agency/agence-revops-paris",
  },
  openGraph: {
    title: "Agence RevOps Paris | Revenue Operations a Paris | Ceres",
    description:
      "Agence RevOps a Paris. Audit, accompagnement et deploiement RevOps + IA. 250+ clients, partenaire HubSpot.",
    url: "https://ceres.agency/agence-revops-paris",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
