import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot vs Zoho CRM : comparatif honnete en 2026",
  description:
    "Comparatif complet HubSpot vs Zoho CRM : prix, fonctionnalites, UX, automatisation, IA (Zia vs Breeze), integrations et verdict selon votre profil.",
  openGraph: {
    title: "HubSpot vs Zoho CRM : comparatif honnete en 2026",
    description:
      "Comparatif complet HubSpot vs Zoho CRM : prix, fonctionnalites, UX, automatisation, IA (Zia vs Breeze), integrations et verdict selon votre profil.",
    url: "https://ceres.agency/blog/hubspot-vs-zoho-comparatif",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/hubspot-vs-zoho-comparatif",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
