import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultant HubSpot | Expert certifie en France | Ceres",
  description: "Consultant HubSpot certifie en France. Setup, migration, optimisation CRM, formation equipes. 250+ clients, 9 ans d'experience. Paris et remote.",
  keywords: ["consultant hubspot", "expert hubspot", "consultant hubspot france", "freelance hubspot", "consultant crm", "expert hubspot paris", "hubspot certifie", "consultant hubspot certifie", "aide hubspot", "integration hubspot"],
  openGraph: {
    title: "Consultant HubSpot | Expert certifie | Ceres",
    description: "Consultant HubSpot certifie en France. Setup, migration, optimisation CRM et formation sur mesure. Expert Sales, Marketing et Operations Hub.",
    url: "https://ceres.agency/consultant-hubspot",
    type: "website",
  },
  alternates: {
    canonical: "https://ceres.agency/consultant-hubspot",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
