import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integration HubSpot x WhatsApp : guide pas a pas",
  description:
    "Guide complet pour connecter WhatsApp Business a HubSpot. Integration native, Make, Zapier, Twilio. Messages automatises, suivi des conversations et pipeline.",
  openGraph: {
    title: "Integration HubSpot x WhatsApp : guide pas a pas",
    description:
      "Guide complet pour connecter WhatsApp Business a HubSpot. Integration native, Make, Zapier, Twilio. Messages automatises, suivi des conversations et pipeline.",
    url: "https://ceres.agency/blog/integration-hubspot-whatsapp",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/integration-hubspot-whatsapp",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
