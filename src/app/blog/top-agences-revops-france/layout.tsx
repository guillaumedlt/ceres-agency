import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 des agences RevOps en France en 2026",
  description:
    "Comparatif detaille des 10 meilleures agences RevOps en France en 2026. Criteres de selection, tarifs, specialites, forces et faiblesses de chaque agence.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
