import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps externalise vs internalise : decision CRO en 2026 | Ceres",
  description:
    "Externaliser ou internaliser son RevOps en 2026 ? Criteres de decision pour CRO et founders : couts reels, vitesse, controle, scalabilite. Modele hybride recommande.",
  keywords: ["revops externalise", "revops internalise", "externaliser revops", "fractional revops", "revops part time"],
  alternates: { canonical: "https://ceres.agency/blog/revops-externalise-vs-internalise-cro" },
  openGraph: {
    title: "RevOps externalise vs internalise : decision CRO en 2026 | Ceres",
    description: "Criteres de decision pour CRO : couts, vitesse, controle, scalabilite. Modele hybride recommande.",
    url: "https://ceres.agency/blog/revops-externalise-vs-internalise-cro",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) { return children; }
