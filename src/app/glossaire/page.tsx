"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import { terms, type Term, categories, catColors } from "./terms-data";

/* ------------------------------------------------------------------ */
/*  JSON-LD                                                            */
/* ------------------------------------------------------------------ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "Glossaire RevOps",
  description: "Tous les termes essentiels du RevOps, CRM, Sales, Marketing et IA expliques simplement.",
  url: "https://ceres.agency/glossaire",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};


/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function GlossairePage() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("all");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = terms;
    if (cat !== "all") result = result.filter((t) => t.category === cat);
    if (search) {
      const q = search.toLowerCase();
      result = result.filter((t) => t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q));
    }
    if (activeLetter) result = result.filter((t) => t.term[0].toUpperCase() === activeLetter);
    return result;
  }, [search, cat, activeLetter]);

  const letters = useMemo(() => {
    const available = new Set(terms.map((t) => t.term[0].toUpperCase()));
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => ({ letter: l, available: available.has(l) }));
  }, []);

  const grouped = useMemo(() => {
    const map: Record<string, Term[]> = {};
    filtered.forEach((t) => {
      const l = t.term[0].toUpperCase();
      if (!map[l]) map[l] = [];
      map[l].push(t);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "45%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "60%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "78%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <section className="text-center mb-12">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
            <span className="text-[#666]">Glossaire</span>
          </nav>
          <div className="mb-4"><Badge>Glossaire</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Glossaire RevOps
          </h1>
          <p className="text-[17px] text-[#666] max-w-[520px] mx-auto leading-[1.7] mb-8">
            {terms.length} termes essentiels du RevOps, CRM, Marketing, Data et IA expliques simplement. Avec des liens vers nos guides detailles.
          </p>

          {/* Search */}
          <div className="max-w-[440px] mx-auto relative mb-8">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#CCC]" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            <input
              type="text"
              placeholder="Rechercher un terme..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setActiveLetter(null); }}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8E8E8] bg-white text-[13px] text-[#111] placeholder:text-[#CCC] focus:outline-none focus:border-[#DDD] shadow-[0_2px_8px_-4px_rgba(0,0,0,0.06)]"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#CCC] hover:text-[#999]">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg>
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => { setCat(c.key); setActiveLetter(null); }}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all ${
                  cat === c.key
                    ? "text-white shadow-sm"
                    : "text-[#999] bg-white border border-[#F2F2F2] hover:border-[#DDD] hover:text-[#666]"
                }`}
                style={cat === c.key ? { background: c.color } : {}}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Alphabet nav */}
          <div className="flex flex-wrap justify-center gap-1">
            {letters.map((l) => (
              <button
                key={l.letter}
                onClick={() => {
                  if (l.available) setActiveLetter(activeLetter === l.letter ? null : l.letter);
                }}
                disabled={!l.available}
                className={`w-8 h-8 rounded-lg text-[12px] font-semibold transition-all ${
                  activeLetter === l.letter
                    ? "bg-[#111] text-white"
                    : l.available
                    ? "bg-white border border-[#F2F2F2] text-[#666] hover:border-[#DDD] hover:text-[#111] cursor-pointer"
                    : "bg-[#FAFAFA] text-[#DDD] cursor-not-allowed"
                }`}
              >
                {l.letter}
              </button>
            ))}
            {activeLetter && (
              <button onClick={() => setActiveLetter(null)} className="ml-2 px-3 h-8 rounded-lg bg-white border border-[#F2F2F2] text-[11px] text-[#999] hover:text-[#666] hover:border-[#DDD]">
                Tout afficher
              </button>
            )}
          </div>
        </section>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-[12px] text-[#999]">
            {filtered.length} terme{filtered.length > 1 ? "s" : ""}{cat !== "all" ? ` en ${categories.find((c) => c.key === cat)?.label}` : ""}{activeLetter ? ` commencant par ${activeLetter}` : ""}
          </p>
        </div>

        {/* Terms grouped by letter */}
        {grouped.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[15px] text-[#999] mb-2">Aucun terme trouve</p>
            <p className="text-[12px] text-[#CCC]">Essayez un autre terme ou une autre categorie</p>
          </div>
        ) : (
          <div className="space-y-10">
            {grouped.map(([letter, letterTerms]) => (
              <section key={letter} id={`letter-${letter}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[#111] text-white flex items-center justify-center text-[16px] font-bold">{letter}</span>
                  <div className="flex-1 h-px bg-[#F2F2F2]" />
                  <span className="text-[11px] text-[#CCC]">{letterTerms.length} terme{letterTerms.length > 1 ? "s" : ""}</span>
                </div>
                <div className="space-y-3">
                  {letterTerms.map((t) => (
                    <div key={t.slug} id={t.slug} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h2 className="text-[15px] font-semibold text-[#111]">{t.term}</h2>
                        <span
                          className="shrink-0 px-2 py-0.5 rounded text-[9px] font-semibold text-white"
                          style={{ background: catColors[t.category] || "#999" }}
                        >
                          {categories.find((c) => c.key === t.category)?.label || t.category}
                        </span>
                      </div>
                      <p className="text-[13px] text-[#555] leading-[1.75] mb-3">{t.definition}</p>
                      <div className="flex flex-wrap items-center gap-2">
                        {t.related?.map((r) => (
                          <button
                            key={r}
                            onClick={() => {
                              const target = terms.find((tt) => tt.term.includes(r));
                              if (target) {
                                setSearch("");
                                setCat("all");
                                setActiveLetter(null);
                                setTimeout(() => {
                                  document.getElementById(target.slug)?.scrollIntoView({ behavior: "smooth", block: "center" });
                                }, 100);
                              }
                            }}
                            className="text-[10px] px-2 py-0.5 rounded-md border border-[#F2F2F2] text-[#999] hover:text-[#666] hover:border-[#DDD] transition-colors cursor-pointer"
                          >
                            {r}
                          </button>
                        ))}
                        {t.blogLink && (
                          <Link href={t.blogLink} className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-md bg-[#F5F5F5] text-[#666] hover:text-[#111] hover:bg-[#EEE] transition-colors">
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 3h7v7M13 3L6 10" /></svg>
                            Lire le guide
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Stats */}
        <section className="mt-16 mb-8">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {[
                { value: terms.length.toString(), label: "Termes definis" },
                { value: terms.filter((t) => t.blogLink).length.toString(), label: "Avec guide detaille" },
                { value: new Set(terms.map((t) => t.category)).size.toString(), label: "Categories" },
                { value: letters.filter((l) => l.available).length.toString(), label: "Lettres couvertes" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[24px] font-bold text-white">{s.value}</div>
                  <div className="text-[11px] text-white/50">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-white/50 leading-[1.7] text-center max-w-[500px] mx-auto">
              Ce glossaire est maintenu par l&apos;equipe Ceres et mis a jour regulierement. Chaque terme est relie a nos guides et articles pour aller plus loin.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Un terme vous manque ?</h2>
            <p className="text-[13px] text-[#999] mb-6 max-w-[400px] mx-auto">Dites-nous quel terme ajouter ou posez-nous directement votre question RevOps.</p>
            <div className="flex items-center justify-center gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
              </a>
              <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                Lire le blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
