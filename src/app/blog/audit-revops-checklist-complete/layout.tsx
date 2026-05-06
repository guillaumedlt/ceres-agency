import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit RevOps : la checklist complete (80 points)",
  description:
    "Checklist d'audit RevOps la plus complete en francais. 80 points de controle, 8 categories, scoring sur 100 et quick wins par niveau de maturite.",
  openGraph: {
    title: "Audit RevOps : la checklist complete (80 points)",
    description:
      "Checklist d'audit RevOps la plus complete en francais. 80 points de controle, 8 categories, scoring sur 100 et quick wins par niveau de maturite.",
    url: "https://ceres.agency/blog/audit-revops-checklist-complete",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/audit-revops-checklist-complete",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
