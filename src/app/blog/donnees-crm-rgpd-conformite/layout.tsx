import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donnees CRM et RGPD : guide de conformite B2B | Ceres",
  description:
    "Bases legales pour la prospection B2B, duree de conservation, droits des personnes et configuration HubSpot RGPD. Le guide de conformite complet.",
  keywords: [
    "RGPD CRM",
    "RGPD HubSpot",
    "conformite RGPD",
    "prospection RGPD",
    "donnees CRM",
  ],
  openGraph: {
    title: "Donnees CRM et RGPD : guide de conformite B2B | Ceres",
    description:
      "Bases legales pour la prospection B2B, duree de conservation, droits des personnes et configuration HubSpot RGPD. Le guide de conformite complet.",
    url: "https://ceres.agency/blog/donnees-crm-rgpd-conformite",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/donnees-crm-rgpd-conformite",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
