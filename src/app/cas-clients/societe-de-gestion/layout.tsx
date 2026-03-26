import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client : IA Claude pour societe de gestion",
  description:
    "Cas client IA : deploiement d'agents Claude pour automatiser l'analyse documentaire et accelerer les processus internes d'une societe de gestion d'actifs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
