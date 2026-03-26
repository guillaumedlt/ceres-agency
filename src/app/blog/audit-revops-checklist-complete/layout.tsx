import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit RevOps : la checklist complete (80 points)",
  description:
    "Checklist d'audit RevOps la plus complete en francais. 80 points de controle, 8 categories, scoring sur 100 et quick wins par niveau de maturite.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
