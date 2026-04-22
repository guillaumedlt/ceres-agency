import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot CMS : les fondamentaux pour un site internet performant",
  description:
    "Guide complet du HubSpot CMS Hub : fonctionnalites, comparatif avec WordPress et Webflow, smart content, SEO natif et integration CRM pour un site B2B performant.",
  openGraph: {
    title: "HubSpot CMS : les fondamentaux pour un site internet performant",
    description:
      "Guide complet du HubSpot CMS Hub : fonctionnalites, comparatif avec WordPress et Webflow, smart content, SEO natif et integration CRM pour un site B2B performant.",
    url: "https://ceres.agency/blog/hubspot-cms-fondamentaux-site-internet-performant",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/hubspot-cms-fondamentaux-site-internet-performant",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
