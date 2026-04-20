import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Automatisation commerciale : guide et deploiement | Ceres",
  description: "Automatisez vos processus commerciaux : attribution leads, relances, scoring, reporting. Deploiement HubSpot workflows, Make, n8n et agents IA. Guide complet.",
  alternates: {
    canonical: "https://ceres.agency/automatisation-commerciale",
  },
  openGraph: {
    title: "Automatisation commerciale : guide et deploiement | Ceres",
    description: "Automatisez vos processus commerciaux : attribution leads, relances, scoring, reporting. Deploiement HubSpot workflows, Make, n8n et agents IA.",
    url: "https://ceres.agency/automatisation-commerciale",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
