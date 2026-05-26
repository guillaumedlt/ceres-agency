import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Badge from "@/components/marketing/Badge";
import { terms, catColors, categoryLabels, type Term } from "../terms-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return terms.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = terms.find((t) => t.slug === slug);
  if (!term) return { title: "Terme non trouve | Glossaire Ceres" };

  const title = `${term.term} : definition RevOps | Glossaire Ceres`;
  const description = term.definition.length > 155 ? term.definition.slice(0, 152) + "..." : term.definition;
  return {
    title,
    description,
    alternates: { canonical: `https://ceres.agency/glossaire/${term.slug}` },
    openGraph: {
      title,
      description,
      url: `https://ceres.agency/glossaire/${term.slug}`,
      type: "article",
    },
  };
}

export default async function GlossaireTermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = terms.find((t) => t.slug === slug);
  if (!term) notFound();

  // Find related term objects from the related slugs/names
  const relatedTerms: Term[] = (term.related || [])
    .map((r) => {
      const lower = r.toLowerCase();
      return terms.find(
        (t) => t.slug === lower.replace(/[^a-z0-9-]/g, "-") || t.term.toLowerCase().startsWith(lower)
      );
    })
    .filter((t): t is Term => Boolean(t));

  // Find 3 other terms in the same category as suggestion
  const sameCategoryTerms = terms.filter((t) => t.category === term.category && t.slug !== term.slug).slice(0, 6);

  const categoryColor = catColors[term.category] || "#111";
  const categoryLabel = categoryLabels[term.category] || term.category;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTerm",
        "@id": `https://ceres.agency/glossaire/${term.slug}#definition`,
        name: term.term,
        description: term.definition,
        url: `https://ceres.agency/glossaire/${term.slug}`,
        inDefinedTermSet: {
          "@type": "DefinedTermSet",
          "@id": "https://ceres.agency/glossaire#set",
          name: "Glossaire RevOps Ceres",
          url: "https://ceres.agency/glossaire",
        },
        termCode: term.slug,
      },
      {
        "@type": "Article",
        headline: `${term.term} : definition`,
        description: term.definition,
        author: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
        publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
        datePublished: "2026-05-26",
        mainEntityOfPage: { "@type": "WebPage", "@id": `https://ceres.agency/glossaire/${term.slug}` },
        articleSection: categoryLabel,
        inLanguage: "fr",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" },
          { "@type": "ListItem", position: 2, name: "Glossaire", item: "https://ceres.agency/glossaire" },
          { "@type": "ListItem", position: 3, name: term.term, item: `https://ceres.agency/glossaire/${term.slug}` },
        ],
      },
    ],
  };

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 280, height: 280, borderRadius: "50%", background: categoryColor, opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
          <Link href="/glossaire" className="hover:text-[#111] transition-colors">Glossaire</Link><span>/</span>
          <span className="text-[#666]">{term.term}</span>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[12px] font-medium" style={{ background: `${categoryColor}15`, color: categoryColor }}>{categoryLabel}</span>
            <Badge>Definition</Badge>
          </div>
          <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">{term.term}</h1>
        </div>

        {/* Definition principale */}
        <section className="mb-8">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Definition</p>
            <p className="text-[16px] text-[#333] leading-[1.75]">{term.definition}</p>
            {term.blogLink && (
              <div className="mt-5 pt-5 border-t border-[#F2F2F2]">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-2">Pour aller plus loin</p>
                <Link href={term.blogLink} className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4B5EFC] hover:text-[#3A4DE0] transition-colors">
                  Lire notre article detaille sur {term.term}
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Termes lies */}
        {relatedTerms.length > 0 && (
          <section className="mb-8">
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
              <h2 className="text-[16px] font-semibold text-[#111] mb-4">Termes lies</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedTerms.map((rt) => (
                  <Link key={rt.slug} href={`/glossaire/${rt.slug}`} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2 h-2 rounded-sm" style={{ background: catColors[rt.category] || "#111" }} />
                      <span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{categoryLabels[rt.category] || rt.category}</span>
                    </div>
                    <h3 className="text-[13px] font-semibold text-[#111] mb-1">{rt.term}</h3>
                    <p className="text-[11px] text-[#777] leading-[1.5] line-clamp-2">{rt.definition.slice(0, 120)}...</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Autres termes de la categorie */}
        {sameCategoryTerms.length > 0 && (
          <section className="mb-8">
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
              <h2 className="text-[16px] font-semibold text-[#111] mb-4">Autres termes en {categoryLabel}</h2>
              <div className="flex flex-wrap gap-2">
                {sameCategoryTerms.map((sct) => (
                  <Link key={sct.slug} href={`/glossaire/${sct.slug}`} className="inline-flex items-center px-3 py-1.5 rounded-md text-[12px] font-medium border border-[#E8E8E8] text-[#555] hover:border-[#DDD] hover:bg-[#FAFAFA] transition-all">
                    {sct.term}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="mb-8">
          <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
            <h2 className="text-[22px] font-semibold text-white tracking-[-0.02em] mb-3">Besoin d&apos;appliquer {term.term} dans votre RevOps ?</h2>
            <p className="text-[14px] text-white/70 mb-5 max-w-[460px] mx-auto">Audit RevOps de 72h. Diagnostic complet et plan d&apos;action chiffre.</p>
            <Link href="/audit-revops" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Decouvrir l&apos;audit RevOps
            </Link>
          </div>
        </section>

        {/* Back to glossary */}
        <section>
          <Link href="/glossaire" className="inline-flex items-center gap-2 text-[13px] font-medium text-[#4B5EFC] hover:text-[#3A4DE0] transition-colors">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Retour au glossaire complet ({terms.length} termes)
          </Link>
        </section>
      </div>
    </div>
  );
}
