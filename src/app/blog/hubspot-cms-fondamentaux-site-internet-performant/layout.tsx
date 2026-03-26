import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot CMS : les fondamentaux pour un site internet performant",
  description:
    "Guide complet du HubSpot CMS Hub : fonctionnalites, comparatif avec WordPress et Webflow, smart content, SEO natif et integration CRM pour un site B2B performant.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
