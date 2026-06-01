import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'erreur #1 des founders en RevOps : penser outil avant process | Ceres",
  description:
    "L'erreur la plus frequente des founders early-stage : acheter HubSpot Enterprise avant d'avoir un process commercial. Pourquoi c'est un piege, et la sequence correcte.",
  keywords: ["erreur revops", "founders revops", "process avant outil", "hubspot trop tot", "revops early stage"],
  alternates: { canonical: "https://ceres.agency/blog/erreur-1-revops-outil-avant-process" },
  openGraph: {
    title: "L'erreur #1 des founders en RevOps : penser outil avant process | Ceres",
    description: "L'erreur la plus frequente : acheter le CRM avant d'avoir un process. La sequence correcte.",
    url: "https://ceres.agency/blog/erreur-1-revops-outil-avant-process",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
