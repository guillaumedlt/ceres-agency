import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hublead : connecter LinkedIn a HubSpot pour ne plus perdre de leads",
  description:
    "Test complet de Hublead, l'extension qui synchronise LinkedIn et HubSpot. Fonctionnalites, configuration, prix et comparaison avec Surfe et LinkMatch.",
  openGraph: {
    title: "Hublead : connecter LinkedIn a HubSpot pour ne plus perdre de leads",
    description:
      "Test complet de Hublead, l'extension qui synchronise LinkedIn et HubSpot. Fonctionnalites, configuration, prix et comparaison avec Surfe et LinkMatch.",
    url: "https://ceres.agency/blog/hublead-linkedin-hubspot",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/hublead-linkedin-hubspot",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
