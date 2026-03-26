import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agence RevOps Paris | Revenue Operations a Paris | Ceres",
  description:
    "Agence RevOps a Paris, 8eme arrondissement. Audit, accompagnement et deploiement RevOps + IA. 250+ clients, partenaire HubSpot. Rendez-vous sur site ou remote.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
