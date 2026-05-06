import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client Kameleoon : audit RevOps et migration HubSpot",
  description:
    "Cas client Kameleoon : audit RevOps complet et migration vers HubSpot pour structurer les processus commerciaux et marketing de la scale-up d'A/B testing.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/kameleoon",
  },
  openGraph: {
    title: "Cas client Kameleoon : audit RevOps et migration HubSpot",
    description: "Cas client Kameleoon : audit RevOps complet et migration vers HubSpot pour structurer les processus commerciaux et marketing de la scale-up d'A/B testing.",
    url: "https://ceres.agency/cas-clients/kameleoon",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
