import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le cimetiere des startups : les modeles SaaS B2B qui ne marchent pas",
  description:
    "Analyse des patterns recurrents d'echec dans les startups SaaS B2B : pricing, go-to-market, product-market fit, silos marketing-sales et burn-rate.",
  openGraph: {
    title: "Le cimetiere des startups : les modeles SaaS B2B qui ne marchent pas",
    description:
      "Analyse des patterns recurrents d'echec dans les startups SaaS B2B : pricing, go-to-market, product-market fit, silos marketing-sales et burn-rate.",
    url: "https://ceres.agency/blog/cimetieres-startups-modeles-saas-b2b",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/cimetieres-startups-modeles-saas-b2b",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
