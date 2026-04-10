import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integration HubSpot | Connectez vos outils | Ceres",
  description:
    "Integration HubSpot avec Salesforce, Slack, Make, Lemlist, Clay, ERP et +1500 outils. API, iPaaS, webhooks. Approche RevOps. Devis gratuit.",
  keywords: [
    "integration hubspot",
    "connecter hubspot",
    "hubspot api integration",
    "integration crm hubspot",
    "hubspot salesforce integration",
    "hubspot make integration",
    "hubspot api",
    "connecteur hubspot",
    "hubspot erp integration",
    "integration hubspot france",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
