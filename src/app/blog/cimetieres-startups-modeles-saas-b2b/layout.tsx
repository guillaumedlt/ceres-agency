import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le cimetiere des startups : les modeles SaaS B2B qui ne marchent pas",
  description:
    "Analyse des patterns recurrents d'echec dans les startups SaaS B2B : pricing, go-to-market, product-market fit, silos marketing-sales et burn-rate.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
