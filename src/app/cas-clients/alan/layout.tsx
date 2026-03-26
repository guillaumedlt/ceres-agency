import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Alan : tracking marketing multi-touch dans HubSpot",
  description:
    "Cas client Alan : mise en place du tracking marketing multi-touch dans HubSpot pour mesurer l'impact de chaque canal sur la generation de leads qualifies.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
