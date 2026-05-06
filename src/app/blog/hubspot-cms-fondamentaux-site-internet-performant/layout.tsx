import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot CMS : fondamentaux pour un site web performant",
  description:
    "Guide du HubSpot CMS Hub : fonctionnalites, comparatif WordPress et Webflow, smart content, SEO natif et integration CRM pour le B2B.",
  openGraph: {
    title: "HubSpot CMS : fondamentaux pour un site web performant",
    description:
      "Guide du HubSpot CMS Hub : fonctionnalites, comparatif WordPress et Webflow, smart content, SEO natif et integration CRM pour le B2B.",
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
