import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Iroko : agents IA Claude pour accelerer les ventes",
  description:
    "Cas client Iroko : deploiement d'agents IA Claude pour automatiser la prospection, qualifier les leads et accelerer les ventes de la fintech immobiliere.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
