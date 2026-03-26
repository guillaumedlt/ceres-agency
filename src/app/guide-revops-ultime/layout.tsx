import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Guide RevOps Ultime : 62 pages de frameworks et templates",
  description:
    "Le Guide RevOps Ultime : 62 pages de frameworks, templates et methodes pour structurer vos revenue operations. Audit, KPIs, stack techno et organisation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
