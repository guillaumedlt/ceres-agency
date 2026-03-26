import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import Blobs from "@/components/marketing/Blobs";
import GuidePopup from "@/components/marketing/GuidePopup";

export const metadata: Metadata = {
  metadataBase: new URL("https://ceres.agency"),
  title: {
    default: "Ceres | Agence RevOps & IA",
    template: "%s | Ceres",
  },
  description:
    "Ceres est l'agence RevOps & IA qui structure, automatise et optimise vos operations commerciales. Audit HubSpot, automatisation des process, intelligence artificielle appliquee aux ventes. Basee en France.",
  keywords: [
    "agence RevOps",
    "agence RevOps France",
    "Revenue Operations",
    "consultant RevOps",
    "automatisation commerciale",
    "IA commerciale",
    "audit HubSpot",
    "integration CRM",
    "optimisation pipeline",
    "forecasting ventes",
    "data quality CRM",
    "ops commerciales",
    "HubSpot partner",
    "intelligence artificielle B2B",
    "consultant HubSpot France",
  ],
  authors: [{ name: "Ceres" }],
  creator: "Ceres",
  publisher: "Ceres",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Ceres",
    title: "Ceres | Agence RevOps & IA",
    description: "L'agence qui structure, automatise et optimise vos operations commerciales grace au RevOps et a l'intelligence artificielle.",
    url: "https://ceres.agency",
    images: [{ url: "https://ceres.agency/opengraph-image", width: 1200, height: 630, alt: "Ceres - Agence RevOps & IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceres | Agence RevOps & IA",
    description: "Structurez, automatisez et optimisez vos operations commerciales avec le RevOps et l'IA.",
  },
  alternates: {
    canonical: "https://ceres.agency",
    languages: { "fr-FR": "https://ceres.agency" },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://ceres.agency/#organization",
      name: "Ceres",
      url: "https://ceres.agency",
      description: "Agence RevOps & IA specialisee dans la structuration, l'automatisation et l'optimisation des operations commerciales B2B en France.",
      foundingDate: "2024",
      areaServed: { "@type": "Country", name: "France" },
      serviceType: ["Audit CRM", "Revenue Operations", "Automatisation commerciale", "Intelligence Artificielle appliquee aux ventes", "Integration HubSpot", "Optimisation pipeline commercial"],
      knowsAbout: ["Revenue Operations", "Intelligence Artificielle", "CRM Automation", "HubSpot", "Sales Analytics", "Pipeline Management", "Data Quality", "Sales Forecasting"],
    },
    {
      "@type": "WebSite",
      "@id": "https://ceres.agency/#website",
      url: "https://ceres.agency",
      name: "Ceres — Agence RevOps & IA",
      publisher: { "@id": "https://ceres.agency/#organization" },
      inLanguage: "fr-FR",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://ceres.agency/audit-revops" },
        { "@type": "ListItem", position: 3, name: "Blog", item: "https://ceres.agency/blog" },
        { "@type": "ListItem", position: 4, name: "Cas clients", item: "https://ceres.agency/cas-clients" },
        { "@type": "ListItem", position: 5, name: "Contact", item: "https://ceres.agency/contact" },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased relative overflow-x-hidden">
        <Blobs />
        <Navbar />
        {children}
        <Footer />
        <GuidePopup />
      </body>
    </html>
  );
}
