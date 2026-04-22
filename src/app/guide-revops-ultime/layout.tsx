import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le Guide RevOps Ultime : 62 pages de frameworks et templates",
  description:
    "Le Guide RevOps Ultime : 62 pages de frameworks, templates et methodes pour structurer vos revenue operations. Audit, KPIs, stack techno et organisation.",
  alternates: {
    canonical: "https://ceres.agency/guide-revops-ultime",
  },
  openGraph: {
    title: "Le Guide RevOps Ultime : 62 pages de frameworks et templates",
    description: "Le Guide RevOps Ultime : 62 pages de frameworks, templates et methodes pour structurer vos revenue operations. Audit, KPIs, stack techno et organisation.",
    url: "https://ceres.agency/guide-revops-ultime",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
