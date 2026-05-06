import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import Blobs from "@/components/marketing/Blobs";
import GuidePopup from "@/components/marketing/GuidePopup";
// import ClaudeBanner from "@/components/marketing/ClaudeBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://ceres.agency"),
  title: {
    default: "Ceres | Agence RevOps & IA",
    template: "%s",
  },
  description:
    "Ceres est l'agence RevOps & IA qui structure et automatise vos operations commerciales. Audit HubSpot, automatisation, IA appliquee aux ventes.",
  authors: [
    { name: "Guillaume Delachet" },
    { name: "Simon Toussaint" },
  ],
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
    images: [{ url: "https://ceres.agency/opengraph-image", width: 1200, height: 630, alt: "Ceres - Agence RevOps & IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceres | Agence RevOps & IA",
    description: "Structurez, automatisez et optimisez vos operations commerciales avec le RevOps et l'IA. Audit CRM, automatisation et agents IA.",
  },
  category: "technology",
};

const ORG_ID = "https://ceres.agency/#organization";
const PERSON_IDS = {
  guillaume: "https://ceres.agency/#person-guillaume-delachet",
  simon: "https://ceres.agency/#person-simon-toussaint",
  bruno: "https://ceres.agency/#person-bruno-teixeira",
  stephane: "https://ceres.agency/#person-stephane-morel",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
      "@id": ORG_ID,
      name: "Ceres",
      legalName: "Ceres Agency",
      alternateName: ["Ceres RevOps", "Ceres Agency"],
      url: "https://ceres.agency",
      logo: {
        "@type": "ImageObject",
        url: "https://ceres.agency/favicon.svg",
        width: 512,
        height: 512,
      },
      image: "https://ceres.agency/opengraph-image",
      description: "Agence RevOps & IA specialisee dans la structuration, l'automatisation et l'optimisation des operations commerciales B2B en France.",
      slogan: "Le RevOps livre, pas un slide deck.",
      foundingDate: "2017",
      numberOfEmployees: { "@type": "QuantitativeValue", value: 4 },
      areaServed: [
        { "@type": "Country", name: "France" },
        { "@type": "Country", name: "Belgique" },
        { "@type": "Country", name: "Suisse" },
        { "@type": "Country", name: "Luxembourg" },
        { "@type": "Country", name: "Canada" },
      ],
      serviceType: [
        "Revenue Operations",
        "Audit RevOps",
        "Implementation HubSpot",
        "Migration CRM",
        "Automatisation commerciale",
        "Deploiement IA",
        "Formation Claude AI",
        "RevOps externalise",
      ],
      knowsAbout: [
        "Revenue Operations",
        "Intelligence Artificielle",
        "CRM Automation",
        "HubSpot",
        "Salesforce",
        "Pipedrive",
        "Attio",
        "Sales Analytics",
        "Pipeline Management",
        "Data Quality",
        "Claude AI",
        "MCP (Model Context Protocol)",
        "Lead Scoring",
        "Sales Forecasting",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "128 rue La Boetie",
        addressLocality: "Paris",
        postalCode: "75008",
        addressRegion: "Ile-de-France",
        addressCountry: "FR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "guillaume@ceres.agency",
        contactType: "customer support",
        areaServed: "FR",
        availableLanguage: ["French", "English"],
      },
      email: "guillaume@ceres.agency",
      openingHours: "Mo-Fr 09:00-19:00",
      priceRange: "$$",
      founder: [
        { "@id": PERSON_IDS.guillaume },
        { "@id": PERSON_IDS.simon },
      ],
      employee: [
        { "@id": PERSON_IDS.guillaume },
        { "@id": PERSON_IDS.simon },
        { "@id": PERSON_IDS.bruno },
        { "@id": PERSON_IDS.stephane },
      ],
      sameAs: [
        "https://www.linkedin.com/company/ceres-revops-ops/",
      ],
    },
    {
      "@type": "Person",
      "@id": PERSON_IDS.guillaume,
      name: "Guillaume Delachet",
      givenName: "Guillaume",
      familyName: "Delachet",
      jobTitle: "Co-fondateur",
      image: "https://ceres.agency/team/guillaume.jpg",
      worksFor: { "@id": ORG_ID },
      knowsAbout: ["Revenue Operations", "HubSpot", "Clay", "Claude AI", "Marketing-Sales Alignment"],
      email: "guillaume@ceres.agency",
      sameAs: ["https://www.linkedin.com/in/delachetguillaume/"],
    },
    {
      "@type": "Person",
      "@id": PERSON_IDS.simon,
      name: "Simon Toussaint",
      givenName: "Simon",
      familyName: "Toussaint",
      jobTitle: "Co-fondateur",
      image: "https://ceres.agency/team/simon.jpg",
      worksFor: { "@id": ORG_ID },
      knowsAbout: ["Sales Operations", "Revenue Operations", "Salesforce", "HubSpot", "Sales Process Design"],
      sameAs: ["https://www.linkedin.com/in/simontoussaint/"],
    },
    {
      "@type": "Person",
      "@id": PERSON_IDS.bruno,
      name: "Bruno Teixeira",
      givenName: "Bruno",
      familyName: "Teixeira",
      jobTitle: "Partner",
      image: "https://ceres.agency/team/bruno.jpg",
      worksFor: { "@id": ORG_ID },
      knowsAbout: ["CRM Migration", "HubSpot", "Salesforce", "CRM Integrations", "Data Architecture"],
      sameAs: ["https://www.linkedin.com/in/brunolt1/"],
    },
    {
      "@type": "Person",
      "@id": PERSON_IDS.stephane,
      name: "Stephane Morel",
      givenName: "Stephane",
      familyName: "Morel",
      jobTitle: "COO",
      image: "https://ceres.agency/team/stephane.png",
      worksFor: { "@id": ORG_ID },
      knowsAbout: ["Operations", "Project Delivery", "Quality Management"],
      sameAs: ["https://www.linkedin.com/in/stephane-morel-revops/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://ceres.agency/#website",
      url: "https://ceres.agency",
      name: "Ceres — Agence RevOps & IA",
      description: "Agence RevOps & IA pour entreprises B2B. Audit, implementation HubSpot, automatisation, IA appliquee aux ventes.",
      publisher: { "@id": ORG_ID },
      inLanguage: "fr-FR",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://ceres.agency/blog?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T5B9QRB');` }} />
      </head>
      <body className="antialiased relative overflow-x-hidden">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5B9QRB" height="0" width="0" style={{ display: "none", visibility: "hidden" }} /></noscript>
        <Blobs />
        <Navbar />
        {/* ClaudeBanner removed */}
        {children}
        <Footer />
        <GuidePopup />
      </body>
    </html>
  );
}
