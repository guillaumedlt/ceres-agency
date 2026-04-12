import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour Fintech : CRM et IA | Ceres",
  description:
    "RevOps specialise fintech. Compliance, KYC, pipeline deals complexes, multi-produits. Data quality critique pour la reglementation.",
  keywords: [
    "revops fintech",
    "crm fintech",
    "revenue operations fintech",
    "hubspot fintech",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
