import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Externaliser son RevOps : guide complet | Ceres",
  description:
    "Guide complet pour externaliser votre RevOps. Comparaison interne vs externe, modeles part-time/projet/full, cas clients Ringover et Tennaxia, tarifs.",
  keywords: [
    "externaliser revops",
    "revops externalise",
    "revops part time",
    "revops as a service",
    "externalisation revenue operations",
    "revops freelance",
    "consultant revops externe",
    "revops outsourcing",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
