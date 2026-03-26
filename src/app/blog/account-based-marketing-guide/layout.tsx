import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account-Based Marketing : le guide complet ABM",
  description:
    "Guide complet pour deployer une strategie ABM en B2B. De la definition de l'ICP a la mesure du ROI, orchestration multi-canal et alignement marketing-sales.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
