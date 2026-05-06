import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment gerer votre MRR dans HubSpot : le guide complet",
  description:
    "Guide complet pour configurer le suivi du MRR dans HubSpot. Proprietes de deal, champs calcules, dashboards de revenu recurrent, forecasting et automatisations.",
  openGraph: {
    title: "Comment gerer votre MRR dans HubSpot : le guide complet",
    description:
      "Guide complet pour configurer le suivi du MRR dans HubSpot. Proprietes de deal, champs calcules, dashboards de revenu recurrent, forecasting et automatisations.",
    url: "https://ceres.agency/blog/gerer-mrr-revenu-recurrent-hubspot",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/gerer-mrr-revenu-recurrent-hubspot",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
