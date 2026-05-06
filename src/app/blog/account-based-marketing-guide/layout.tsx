import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account-Based Marketing : le guide complet ABM",
  description:
    "Guide complet pour deployer une strategie ABM en B2B. De la definition de l'ICP a la mesure du ROI, orchestration multi-canal et alignement marketing-sales.",
  openGraph: {
    title: "Account-Based Marketing : le guide complet ABM",
    description:
      "Guide complet pour deployer une strategie ABM en B2B. De la definition de l'ICP a la mesure du ROI, orchestration multi-canal et alignement marketing-sales.",
    url: "https://ceres.agency/blog/account-based-marketing-guide",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/account-based-marketing-guide",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
