import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cas client HiPay : migration vers HubSpot | Ceres",
  description:
    "Cas client HiPay : double migration Pardot et Salesforce vers HubSpot. Unification du CRM et du marketing automation pour le specialiste du paiement en ligne.",
  alternates: {
    canonical: "https://ceres.agency/cas-clients/hipay",
  },
  openGraph: {
    title: "Cas client HiPay : migration vers HubSpot | Ceres",
    description: "Cas client HiPay : double migration Pardot et Salesforce vers HubSpot. Unification du CRM et du marketing automation pour le specialiste du paiement en ligne.",
    url: "https://ceres.agency/cas-clients/hipay",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
