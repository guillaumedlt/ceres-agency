import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Le stack technologique RevOps ideal en 2026",
  description:
    "Guide du stack technologique RevOps 2026 : les 7 couches essentielles (CRM, automation, enrichissement, analytics, IA, integration), budgets et erreurs a eviter.",
  openGraph: {
    title: "Le stack technologique RevOps ideal en 2026",
    description:
      "Guide du stack technologique RevOps 2026 : les 7 couches essentielles (CRM, automation, enrichissement, analytics, IA, integration), budgets et erreurs a eviter.",
    url: "https://ceres.agency/blog/stack-technologique-revops-2026",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/stack-technologique-revops-2026",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
