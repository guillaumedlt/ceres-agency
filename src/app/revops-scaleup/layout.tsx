import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour Scale-ups : professionnalisez votre revenue engine",
  description:
    "RevOps pour scale-ups de 200 a 1000 personnes. Migration CRM, IA, forecasting predictif, dashboards avances. Cas clients : Alan, Ringover, Dougs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
