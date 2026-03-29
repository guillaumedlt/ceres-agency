import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Success et RevOps : aligner la retention sur le revenue",
  description:
    "Guide complet du Customer Success dans le RevOps : metriques (NRR, GRR, churn, NPS, CSAT), health scoring, playbooks, outils (Vitally, ChurnZero, Gainsight, HubSpot Service Hub) et IA pour predire le churn.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
