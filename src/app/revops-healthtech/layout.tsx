import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour Healthtech et medtech | Ceres",
  description:
    "RevOps specialise sante et medtech. Cycles de vente longs, multi-decideurs, compliance RGPD sante, pipeline complexe.",
  keywords: [
    "revops healthtech",
    "crm sante",
    "revops medtech",
    "hubspot sante",
    "crm medical",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
