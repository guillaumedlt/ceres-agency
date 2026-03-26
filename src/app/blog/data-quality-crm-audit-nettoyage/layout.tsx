import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data quality CRM : audit et nettoyage en 5 etapes",
  description:
    "Guide complet pour auditer et nettoyer les donnees de votre CRM. Checklist 50 points, deduplication, standardisation, enrichissement et maintenance automatisee.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
