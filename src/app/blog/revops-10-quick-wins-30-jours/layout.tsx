import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps : 10 quick wins a implementer en 30 jours",
  description:
    "10 actions RevOps concretes a mettre en place en moins de 30 jours. Matrice effort/impact, setup pas a pas et resultats mesurables sur vos operations revenue.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
