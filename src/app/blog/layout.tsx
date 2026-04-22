import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog RevOps, CRM et IA pour equipes B2B | Ceres",
  description:
    "100+ articles sur le RevOps, le CRM, la data quality et l'IA. Guides, analyses et cas d'usage pour structurer vos operations commerciales B2B.",
  keywords: ["blog revops", "blog crm", "blog ia b2b", "articles revops", "articles hubspot", "guides crm", "blog data quality"],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://ceres.agency/blog#blog",
  name: "Blog Ceres : RevOps, CRM et IA",
  description: "100+ articles sur le RevOps, le CRM, la data quality et l'IA pour les equipes B2B. Guides, comparatifs et methodes actionnables.",
  url: "https://ceres.agency/blog",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  inLanguage: "fr-FR",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
