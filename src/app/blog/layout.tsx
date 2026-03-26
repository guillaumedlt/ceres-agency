import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog RevOps, CRM et IA : articles, guides et analyses",
  description:
    "Blog Ceres : articles, guides et analyses sur le RevOps, le CRM HubSpot et l'IA commerciale. Conseils actionables pour les equipes B2B SaaS en croissance.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
