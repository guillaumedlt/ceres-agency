import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketing Ops : definition, missions et mise en place",
  description:
    "Guide du Marketing Ops : definition, difference avec RevOps, 6 missions cles, competences, stack (HubSpot, GA4, Make) et recrutement.",
  openGraph: {
    title: "Marketing Ops : definition, missions et mise en place",
    description:
      "Guide du Marketing Ops : definition, difference avec RevOps, 6 missions cles, competences, stack (HubSpot, GA4, Make) et recrutement.",
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
