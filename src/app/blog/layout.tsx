import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog RevOps, CRM et IA : 74+ articles pour equipes B2B | Ceres",
  description:
    "74+ articles sur le RevOps, le CRM, la data quality et l'IA. Guides, analyses et cas d'usage pour structurer vos operations commerciales B2B.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
