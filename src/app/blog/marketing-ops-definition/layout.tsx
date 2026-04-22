import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Ops : definition, missions et mise en place",
  description:
    "Guide complet du Marketing Ops : definition, difference avec marketing manager et RevOps, les 6 missions cles, competences requises, stack marketing ops (HubSpot, GA4, Looker Studio, Make) et quand recruter.",
  openGraph: {
    title: "Marketing Ops : definition, missions et mise en place",
    description:
      "Guide complet du Marketing Ops : definition, difference avec marketing manager et RevOps, les 6 missions cles, competences requises, stack marketing ops (HubSpot, GA4, Looker Studio, Make) et quand recruter.",
    url: "https://ceres.agency/blog/marketing-ops-definition",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/marketing-ops-definition",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
