import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Methode RevOps : Audit, Design, Build, Run | Ceres",
  description:
    "La methode Ceres pour transformer votre revenue engine en 4 phases : Audit (72h), Design (2 sem), Build (4-8 sem), Run (continu). +250 missions SaaS B2B.",
  alternates: { canonical: "/methode" },
  keywords: [
    "methode revops",
    "methodologie revenue operations",
    "audit revops",
    "implementation revops",
    "revops part-time",
    "framework revops",
    "agence revops methode",
  ],
  openGraph: {
    title: "Methode RevOps : Audit, Design, Build, Run | Ceres",
    description:
      "La methode Ceres pour transformer votre revenue engine en 4 phases. +250 missions SaaS B2B.",
    url: "https://ceres.agency/methode",
    type: "article",
    locale: "fr_FR",
    siteName: "Ceres",
  },
  twitter: {
    card: "summary_large_image",
    title: "Methode RevOps : Audit, Design, Build, Run | Ceres",
    description:
      "Audit, Design, Build, Run. La methode Ceres pour transformer votre revenue engine.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
