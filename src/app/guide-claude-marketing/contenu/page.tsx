"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

/* ------------------------------------------------------------------ */
/*  JSON-LD Article schema                                            */
/* ------------------------------------------------------------------ */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Guide Claude & Claude Code pour le Marketing B2B en 2026",
  description:
    "Le guide le plus complet en fran\u00e7ais sur Claude et Claude Code pour le marketing B2B. 10 chapitres, 55 pages, 20+ prompts, 15 cas d\u2019usage, scripts Claude Code, MCP, agents autonomes.",
  author: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  publisher: {
    "@type": "Organization",
    name: "Ceres",
    url: "https://ceres.agency",
    logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" },
  },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  inLanguage: "fr",
  mainEntityOfPage: "https://ceres.agency/guide-claude-marketing/contenu",
  articleSection: "IA & Marketing B2B",
  wordCount: 9500,
};

/* ------------------------------------------------------------------ */
/*  Chapters sidebar data                                             */
/* ------------------------------------------------------------------ */
const chapters = [
  { id: "ch1", num: "01", title: "Claude en 2026" },
  { id: "ch2", num: "02", title: "Pourquoi Claude pour le B2B" },
  { id: "ch3", num: "03", title: "15 cas d\u2019usage marketing" },
  { id: "ch4", num: "04", title: "Content marketing avec Claude" },
  { id: "ch5", num: "05", title: "Outbound et prospection" },
  { id: "ch6", num: "06", title: "CRM et op\u00e9rations" },
  { id: "ch7", num: "07", title: "Claude Code pour le marketing" },
  { id: "ch8", num: "08", title: "Connecter Claude \u00e0 votre stack" },
  { id: "ch9", num: "09", title: "Biblioth\u00e8que de 21 prompts" },
  { id: "ch10", num: "10", title: "Le futur du marketing IA" },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export default function GuideClaudeMarketingContenuPage() {
  const [activeSection, setActiveSection] = useState("ch1");
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docH > 0 ? Math.min(100, Math.round((scrollY / docH) * 100)) : 0);

      let current = "ch1";
      for (const ch of chapters) {
        const el = document.getElementById(ch.id);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = ch.id;
        }
      }
      setActiveSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "https://ceres.agency/guide-claude-marketing/contenu";
  const shareText = "Guide Claude & Claude Code pour le Marketing B2B \u2014 le guide le plus complet en fran\u00e7ais";

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#F0F0F0]">
        <div className="h-full bg-[#D4A27F] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">

          {/* ============================================================ */}
          {/*  Sticky sidebar                                              */}
          {/* ============================================================ */}
          <aside className="hidden lg:block w-[220px] shrink-0">
            <div className="sticky top-28">
              <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-3">Sommaire</p>
              <nav className="space-y-0.5 mb-6">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => scrollTo(ch.id)}
                    className={`w-full text-left flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] transition-colors ${
                      activeSection === ch.id
                        ? "bg-[#D4A27F]/10 text-[#D4A27F] font-semibold"
                        : "text-[#777] hover:text-[#111] hover:bg-[#F5F5F5]"
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold shrink-0 ${
                      activeSection === ch.id ? "bg-[#D4A27F] text-white" : "bg-[#F0F0F0] text-[#999]"
                    }`}>{ch.num}</span>
                    <span className="truncate">{ch.title}</span>
                  </button>
                ))}
              </nav>

              {/* Progress */}
              <div className="px-3 mb-6">
                <div className="flex items-center justify-between text-[10px] text-[#CCC] mb-1">
                  <span>Progression</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-1 bg-[#F0F0F0] rounded-full overflow-hidden">
                  <div className="h-full bg-[#D4A27F] rounded-full transition-all duration-150" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {/* Share */}
              <div className="px-3 mb-4">
                <p className="text-[10px] font-semibold text-[#999] uppercase tracking-wider mb-2">Partager</p>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg border border-[#E8E8E8] flex items-center justify-center text-[#999] hover:text-[#111] hover:border-[#CCC] transition-colors"
                    title="Partager sur X"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg border border-[#E8E8E8] flex items-center justify-center text-[#999] hover:text-[#0A66C2] hover:border-[#CCC] transition-colors"
                    title="Partager sur LinkedIn"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>

              {/* Back link */}
              <div className="px-3">
                <Link href="/guide-claude-marketing" className="text-[11px] text-[#D4A27F] hover:underline flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M10 4l-4 4 4 4" /></svg>
                  Retour au guide
                </Link>
              </div>
            </div>
          </aside>

          {/* ============================================================ */}
          {/*  Main content                                                */}
          {/* ============================================================ */}
          <div className="flex-1 min-w-0 max-w-[750px]" ref={contentRef}>

            {/* Breadcrumb */}
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/guide-claude-marketing" className="hover:text-[#111] transition-colors">Guide Claude Marketing</Link><span>/</span>
              <span className="text-[#666]">Contenu complet</span>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D4A27F]/10 text-[12px] font-medium text-[#D4A27F]">IA &amp; Marketing B2B</span>
                <span className="text-[11px] text-[#CCC]">29 mars 2026</span>
                <span className="text-[11px] text-[#CCC]">45 min de lecture</span>
              </div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
                Guide Claude &amp; Claude Code pour le Marketing B2B
              </h1>
              <p className="text-[17px] text-[#666] leading-[1.75] max-w-[640px]">
                Le guide le plus complet en fran&ccedil;ais sur Claude et Claude Code pour le marketing B2B. 10 chapitres, 55 pages, 21 prompts actionables, 15 cas d&apos;usage d&eacute;taill&eacute;s, scripts Claude Code, MCP, agents autonomes et le futur du marketing avec l&apos;IA.
              </p>
              <div className="flex items-center gap-4 mt-6 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#D4A27F]/10 flex items-center justify-center text-[#D4A27F] text-[10px] font-bold">C</div>
                  <span>Par <strong className="text-[#111]">Ceres</strong></span>
                </div>
                <span>|</span>
                <span>55 pages</span>
                <span>|</span>
                <span>10 chapitres</span>
              </div>
            </header>

            <Connector />

            {/* ========================================================== */}
            {/*  CHAPTER 1 — Claude en 2026                                */}
            {/* ========================================================== */}
            <section id="ch1" className="scroll-mt-[100px] mb-10">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[13px] font-bold shrink-0">01</div>
                  <div>
                    <p className="text-[10px] text-[#CCC] uppercase tracking-wider">Chapitre 1 &mdash; p. 4-8</p>
                    <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em]">Claude en 2026 : l&apos;&eacute;cosyst&egrave;me complet</h2>
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Les mod&egrave;les Claude : comprendre la gamme</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Anthropic propose en 2026 trois mod&egrave;les principaux, chacun optimis&eacute; pour des cas d&apos;usage distincts. Comprendre leurs forces respectives est la premi&egrave;re &eacute;tape pour exploiter Claude efficacement dans votre strat&eacute;gie marketing.
                </p>

                {/* Model cards */}
                <div className="grid gap-4 mb-6">
                  <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img src="https://www.google.com/s2/favicons?domain=anthropic.com&sz=32" alt="Anthropic" className="w-5 h-5" />
                      <span className="text-[14px] font-semibold text-[#111]">Claude Opus 4</span>
                      <Badge>Raisonnement profond</Badge>
                    </div>
                    <p className="text-[13px] text-[#555] leading-[1.7] mb-2">
                      Le mod&egrave;le le plus puissant d&apos;Anthropic. Opus 4 excelle dans le raisonnement complexe, l&apos;analyse de donn&eacute;es multi-couches et la production de contenus strat&eacute;giques. C&apos;est le mod&egrave;le &agrave; utiliser pour vos analyses concurrentielles approfondies, vos strat&eacute;gies go-to-market et vos audits de contenu complets. Son co&ucirc;t est plus &eacute;lev&eacute;, mais la qualit&eacute; de raisonnement est sans &eacute;quivalent. Opus 4 est capable de maintenir la coh&eacute;rence sur des t&acirc;ches qui n&eacute;cessitent plus de 20 &eacute;tapes de raisonnement en cha&icirc;ne, l&agrave; o&ugrave; la plupart des mod&egrave;les concurrents perdent le fil apr&egrave;s 8 &agrave; 10 &eacute;tapes.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#D4A27F]/10 text-[#D4A27F] font-medium">Analyse strat&eacute;gique</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#D4A27F]/10 text-[#D4A27F] font-medium">Raisonnement complexe</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#D4A27F]/10 text-[#D4A27F] font-medium">Contenu premium</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img src="https://www.google.com/s2/favicons?domain=anthropic.com&sz=32" alt="Anthropic" className="w-5 h-5" />
                      <span className="text-[14px] font-semibold text-[#111]">Claude Sonnet 4</span>
                      <Badge>Rapide et polyvalent</Badge>
                    </div>
                    <p className="text-[13px] text-[#555] leading-[1.7] mb-2">
                      Le mod&egrave;le du quotidien. Sonnet 4 offre un &eacute;quilibre id&eacute;al entre performance et rapidit&eacute;. C&apos;est votre alli&eacute; pour la r&eacute;daction d&apos;emails, la cr&eacute;ation de posts LinkedIn, l&apos;optimisation SEO et les t&acirc;ches marketing r&eacute;currentes. Il r&eacute;pond en 2 &agrave; 5 secondes l&agrave; o&ugrave; Opus en met 15 &agrave; 30, tout en conservant une qualit&eacute; de raisonnement sup&eacute;rieure &agrave; GPT-4o. Pour 80% de vos t&acirc;ches marketing quotidiennes, Sonnet 4 est le choix optimal en termes de rapport qualit&eacute;-co&ucirc;t.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">Emails marketing</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">Posts sociaux</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#4B5EFC]/10 text-[#4B5EFC] font-medium">Usage quotidien</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img src="https://www.google.com/s2/favicons?domain=anthropic.com&sz=32" alt="Anthropic" className="w-5 h-5" />
                      <span className="text-[14px] font-semibold text-[#111]">Claude Haiku 3.5</span>
                      <Badge>Ultra-rapide</Badge>
                    </div>
                    <p className="text-[13px] text-[#555] leading-[1.7] mb-2">
                      Le mod&egrave;le de vitesse. Haiku 3.5 r&eacute;pond en moins d&apos;une seconde et co&ucirc;te une fraction du prix d&apos;Opus. Id&eacute;al pour la classification de leads, le tri d&apos;emails, l&apos;extraction de donn&eacute;es structur&eacute;es et les t&acirc;ches en volume. Quand vous devez traiter 500 r&eacute;ponses d&apos;emails ou classifier 2000 contacts, Haiku est votre alli&eacute;. Il co&ucirc;te environ 0,001 euro par requ&ecirc;te, ce qui rend les traitements en masse &eacute;conomiquement viables m&ecirc;me pour les PME.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">Classification</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">Volume</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">Temps r&eacute;el</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Fen&ecirc;tre de contexte : pourquoi 200K tokens changent tout</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Claude offre 200 000 tokens de contexte en standard, et jusqu&apos;&agrave; 1 million avec le mode extended thinking. En termes concrets, 200K tokens repr&eacute;sentent environ 150 000 mots, soit l&apos;&eacute;quivalent de 3 livres complets. Cela signifie que vous pouvez fournir &agrave; Claude l&apos;int&eacute;gralit&eacute; de votre strat&eacute;gie de contenu, les 50 derniers articles de votre blog, vos 30 derni&egrave;res newsletters et vos guidelines de marque, le tout en une seule conversation. Claude analysera l&apos;ensemble avec une coh&eacute;rence que les mod&egrave;les &agrave; 8K ou 32K tokens ne peuvent pas atteindre.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">MCP (Model Context Protocol) : l&apos;arme secr&egrave;te</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Le MCP est un protocole ouvert cr&eacute;&eacute; par Anthropic qui permet &agrave; Claude de se connecter directement &agrave; vos outils externes : CRM, email, bases de donn&eacute;es, outils de gestion de projet. Concr&egrave;tement, au lieu de copier-coller des donn&eacute;es HubSpot dans Claude, le MCP permet &agrave; Claude de lire et &eacute;crire directement dans HubSpot. C&apos;est comme donner des mains &agrave; un cerveau : Claude ne se contente plus de penser, il agit. Le MCP transforme Claude d&apos;un assistant passif en un agent actif capable d&apos;interagir avec votre stack marketing en temps r&eacute;el.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Claude Code : l&apos;agent de d&eacute;veloppement autonome</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Claude Code est un agent de programmation autonome qui s&apos;ex&eacute;cute dans votre terminal. Il peut lire et modifier des fichiers, ex&eacute;cuter des commandes, rechercher sur le web et utiliser le MCP. Pour les marketeurs, cela signifie construire des outils internes en quelques heures au lieu de quelques semaines : dashboards SEO, g&eacute;n&eacute;rateurs de templates email, pipelines d&apos;enrichissement de leads, bots de veille concurrentielle. Vous d&eacute;crivez ce que vous voulez en langage naturel, Claude Code le construit.
                </p>

                {/* Comparison table */}
                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Claude vs ChatGPT vs Gemini : comparaison 2026</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-[12px] border-collapse">
                    <thead>
                      <tr className="bg-[#FAFAFA]">
                        <th className="text-left p-3 border border-[#F0F0F0] font-semibold text-[#111]">Crit&egrave;re</th>
                        <th className="text-center p-3 border border-[#F0F0F0] font-semibold text-[#D4A27F]">Claude</th>
                        <th className="text-center p-3 border border-[#F0F0F0] font-semibold text-[#555]">ChatGPT</th>
                        <th className="text-center p-3 border border-[#F0F0F0] font-semibold text-[#555]">Gemini</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Qualit\u00e9 de raisonnement", "Excellente", "Tr\u00e8s bonne", "Bonne"],
                        ["Fen\u00eatre de contexte", "200K - 1M", "128K", "1M (mais qualit\u00e9 variable)"],
                        ["S\u00e9curit\u00e9 des donn\u00e9es", "Pas d\u2019entra\u00eenement sur vos data", "Opt-out possible", "Data utilis\u00e9es par d\u00e9faut"],
                        ["MCP (outils externes)", "Natif, open-source", "Plugins limit\u00e9s", "Extensions Google"],
                        ["Agent de code", "Claude Code (autonome)", "Code Interpreter", "Jules (b\u00eata)"],
                        ["API marketing", "Flexible, bon pricing", "Plus ch\u00e8re", "Comp\u00e9titive"],
                        ["Hon\u00eanet\u00e9 / hallucinations", "Tr\u00e8s faible taux", "Mod\u00e9r\u00e9", "Mod\u00e9r\u00e9"],
                        ["R\u00e9daction en fran\u00e7ais", "Excellente, naturelle", "Bonne", "Correcte"],
                      ].map(([crit, claude, gpt, gemini]) => (
                        <tr key={crit}>
                          <td className="p-3 border border-[#F0F0F0] text-[#555] font-medium">{crit}</td>
                          <td className="p-3 border border-[#F0F0F0] text-center text-[#D4A27F] font-semibold">{claude}</td>
                          <td className="p-3 border border-[#F0F0F0] text-center text-[#777]">{gpt}</td>
                          <td className="p-3 border border-[#F0F0F0] text-center text-[#777]">{gemini}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Pourquoi Claude domine en B2B</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  En B2B, la qualit&eacute; de raisonnement prime sur la vitesse. Quand vous analysez une strat&eacute;gie concurrentielle, r&eacute;digez un white paper ou construisez un scoring de leads, vous avez besoin d&apos;un mod&egrave;le qui raisonne en profondeur, pas d&apos;un mod&egrave;le qui r&eacute;pond vite avec des r&eacute;ponses superficielles. Claude Opus 4 maintient la coh&eacute;rence logique sur des raisonnements &agrave; plus de 20 &eacute;tapes. Sa capacit&eacute; &agrave; dire &laquo; je ne sais pas &raquo; plut&ocirc;t que d&apos;inventer une statistique est cruciale quand votre r&eacute;putation d&apos;expert est en jeu. Et le MCP transforme Claude en v&eacute;ritable hub op&eacute;rationnel, connect&eacute; &agrave; tout votre stack.
                </p>
              </div>
            </section>

            <Connector />

            {/* ========================================================== */}
            {/*  CHAPTER 2 — Pourquoi Claude pour le marketing B2B         */}
            {/* ========================================================== */}
            <section id="ch2" className="scroll-mt-[100px] mb-10">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[13px] font-bold shrink-0">02</div>
                  <div>
                    <p className="text-[10px] text-[#CCC] uppercase tracking-wider">Chapitre 2 &mdash; p. 9-13</p>
                    <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em]">Pourquoi Claude pour le marketing B2B</h2>
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">La qualit&eacute; de raisonnement, un avantage d&eacute;cisif</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Le marketing B2B n&apos;est pas du copywriting rapide. C&apos;est de l&apos;analyse strat&eacute;gique, de la compr&eacute;hension de march&eacute;, de la segmentation fine et de la cr&eacute;ation de contenu expert. Claude analyse des donn&eacute;es marketing complexes et identifie des patterns que les humains manquent. Quand vous lui fournissez 6 mois de donn&eacute;es de performance content, Claude peut identifier que vos articles techniques de plus de 2000 mots g&eacute;n&egrave;rent 4x plus de MQL que vos articles courts, mais uniquement quand ils sont publi&eacute;s le mardi ou mercredi. Ce niveau de croisement de variables est pr&eacute;cis&eacute;ment ce que le raisonnement profond de Claude permet.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Le contexte long : votre strat&eacute;gie enti&egrave;re dans une seule conversation</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Avec 200K tokens, vous pouvez alimenter Claude avec l&apos;int&eacute;gralit&eacute; de votre strat&eacute;gie de contenu, votre analyse concurrentielle compl&egrave;te, des rapports de 50 pages, et votre historique de performance. Claude maintient la coh&eacute;rence sur l&apos;ensemble et produit des recommandations qui tiennent compte de tous les param&egrave;tres. Avec les mod&egrave;les &agrave; 8K ou 32K tokens, vous &ecirc;tes oblig&eacute; de d&eacute;couper votre contexte, ce qui provoque des incoh&eacute;rences et des oublis. Claude peut lire votre brand book complet, vos 20 derniers articles, et votre brief de campagne, puis produire un contenu parfaitement align&eacute; avec tout cela en une seule passe.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">S&eacute;curit&eacute; des donn&eacute;es : un imp&eacute;ratif B2B</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  En B2B, vous manipulez des donn&eacute;es sensibles : listes de prospects, strat&eacute;gies de pricing, donn&eacute;es clients, analyses concurrentielles confidentielles. Anthropic ne s&apos;entra&icirc;ne pas sur les donn&eacute;es utilisateurs, point final. Avec ChatGPT, vous devez activement opt-out, et avec Gemini, vos donn&eacute;es sont utilis&eacute;es par d&eacute;faut pour am&eacute;liorer les services Google. Pour une entreprise B2B qui manipule des donn&eacute;es clients et des strat&eacute;gies confidentielles, cette diff&eacute;rence n&apos;est pas un d&eacute;tail, c&apos;est un crit&egrave;re de choix fondamental.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">MCP : connecter Claude &agrave; votre stack sans code</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Le Model Context Protocol permet &agrave; Claude d&apos;interagir directement avec HubSpot, Notion, Slack, Gmail et Google Drive. Plus besoin de copier-coller des donn&eacute;es entre vos outils et Claude. Imaginez : vous demandez &agrave; Claude &laquo; analyse les performances de nos 20 derniers emails marketing dans HubSpot et propose des am&eacute;liorations &raquo;. Avec le MCP, Claude acc&egrave;de directement aux donn&eacute;es, les analyse, et peut m&ecirc;me cr&eacute;er une note Notion avec ses recommandations. Cette fluidit&eacute; &eacute;limine les frictions qui tuent l&apos;adoption de l&apos;IA dans les &eacute;quipes marketing.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">L&apos;honn&ecirc;tet&eacute; : un trait sous-estim&eacute;</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Claude dit &laquo; je ne sais pas &raquo; ou &laquo; je ne suis pas s&ucirc;r de cette statistique &raquo; plut&ocirc;t que d&apos;inventer un chiffre cr&eacute;dible. En marketing B2B, o&ugrave; votre cr&eacute;dibilit&eacute; repose sur l&apos;exactitude de vos donn&eacute;es, cette honn&ecirc;tet&eacute; est inestimable. Un article de blog avec une fausse statistique peut d&eacute;truire la confiance de votre audience. Claude pr&eacute;f&egrave;re vous pr&eacute;venir qu&apos;un chiffre n&eacute;cessite une v&eacute;rification plut&ocirc;t que de l&apos;affirmer avec assurance.
                </p>

                {/* Cost comparison */}
                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Comparaison de co&ucirc;ts : Claude API vs GPT-4 API</h3>
                <div className="rounded-xl bg-[#1A1A2E] p-5 mb-4">
                  <p className="text-[11px] font-semibold text-[#D4A27F] uppercase tracking-wider mb-4">Co&ucirc;t mensuel estim&eacute; pour une &eacute;quipe marketing de 5 personnes</p>
                  <div className="space-y-3">
                    {[
                      { label: "200 articles/mois (Sonnet 4)", claude: "~45 \u20ac", gpt: "~72 \u20ac" },
                      { label: "1000 emails personnalis\u00e9s (Sonnet 4)", claude: "~12 \u20ac", gpt: "~18 \u20ac" },
                      { label: "500 enrichissements leads (Haiku)", claude: "~0,50 \u20ac", gpt: "~2 \u20ac" },
                      { label: "50 analyses strat\u00e9giques (Opus 4)", claude: "~30 \u20ac", gpt: "~45 \u20ac" },
                      { label: "Classification 5000 contacts (Haiku)", claude: "~5 \u20ac", gpt: "~15 \u20ac" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between text-[12px]">
                        <span className="text-[#AAA]">{row.label}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-[#D4A27F] font-semibold">{row.claude}</span>
                          <span className="text-[#666]">{row.gpt}</span>
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-[#333] pt-3 flex items-center justify-between text-[13px] font-semibold">
                      <span className="text-white">Total mensuel estim&eacute;</span>
                      <div className="flex items-center gap-4">
                        <span className="text-[#D4A27F]">~92 &euro;</span>
                        <span className="text-[#666]">~152 &euro;</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-[#555] mt-3">Estimation bas&eacute;e sur les tarifs API de mars 2026. Co&ucirc;ts r&eacute;els variables selon la longueur des prompts.</p>
                </div>

                <p className="text-[14px] text-[#555] leading-[1.8]">
                  En combinant Sonnet 4 pour les t&acirc;ches quotidiennes, Haiku pour le volume et Opus 4 pour les analyses strat&eacute;giques, une &eacute;quipe marketing de 5 personnes peut automatiser une part significative de son travail r&eacute;p&eacute;titif pour moins de 100 euros par mois. C&apos;est le co&ucirc;t d&apos;un seul abonnement SaaS marketing.
                </p>
              </div>
            </section>

            <Connector />

            {/* ========================================================== */}
            {/*  CHAPTER 3 — 15 cas d'usage marketing                      */}
            {/* ========================================================== */}
            <section id="ch3" className="scroll-mt-[100px] mb-10">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[13px] font-bold shrink-0">03</div>
                  <div>
                    <p className="text-[10px] text-[#CCC] uppercase tracking-wider">Chapitre 3 &mdash; p. 14-22</p>
                    <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em]">15 cas d&apos;usage marketing d&eacute;taill&eacute;s</h2>
                  </div>
                </div>

                <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                  Chaque cas d&apos;usage ci-dessous est accompagn&eacute; d&apos;un prompt complet et op&eacute;rationnel, du mod&egrave;le recommand&eacute; et du r&eacute;sultat attendu. Copiez-les, adaptez les variables entre crochets et lancez-vous imm&eacute;diatement.
                </p>

                {/* Use Case 1 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">1</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Articles blog SEO</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    G&eacute;n&eacute;rez un article de blog complet optimis&eacute; SEO &agrave; partir d&apos;un sujet et de mots-cl&eacute;s cibles. Claude produit un plan d&eacute;taill&eacute;, un brouillon complet avec balises H2/H3, maillage interne sugg&eacute;r&eacute; et meta description.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un expert en content marketing B2B et SEO.

Sujet : [SUJET]
Mot-cle principal : [MOT-CLE]
Mots-cles secondaires : [MOT-CLE-2], [MOT-CLE-3], [MOT-CLE-4]
Audience : [DESCRIPTION ICP]
Ton : professionnel, expert mais accessible

Produis :
1. Un titre H1 optimise SEO (moins de 60 caracteres)
2. Une meta description (moins de 155 caracteres)
3. Un plan detaille avec H2 et H3
4. L'article complet (2000-2500 mots) avec :
   - Introduction avec hook et problematique
   - Chaque section avec des exemples concrets
   - Des donnees chiffrees quand possible (cite tes sources)
   - Un paragraphe de conclusion avec CTA
5. 5 suggestions de maillage interne
6. 3 variantes de title tag a tester`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Claude.ai ou API Sonnet 4 | Temps : 2-3 min | Qualit&eacute; : pr&ecirc;t &agrave; &eacute;diter, pas pr&ecirc;t &agrave; publier tel quel</p>
                </div>

                {/* Use Case 2 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">2</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Posts LinkedIn</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Cr&eacute;ez 3 variantes de posts LinkedIn &agrave; partir d&apos;un sujet, d&apos;un ton et d&apos;une audience cible. Claude adapte le format (storytelling, liste, question) et optimise pour l&apos;engagement.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un expert LinkedIn B2B avec 50K+ abonnes.

Sujet : [SUJET]
Ton : [expert / conversationnel / provocateur]
Audience : [DESCRIPTION AUDIENCE]
Objectif : [notoriete / trafic / leads]

Cree 3 variantes de posts LinkedIn :

Variante A - Format storytelling :
- Accroche personnelle (premiere ligne = hook)
- Recit en 3 temps
- Lecon business
- CTA subtil

Variante B - Format liste :
- Hook avec chiffre ou affirmation forte
- 5-7 points actionables
- Chaque point = 1-2 lignes max
- Conclusion avec question ouverte

Variante C - Format opinion :
- Prise de position claire des la premiere ligne
- 3 arguments structures
- Contre-argument anticipe
- Invitation au debat

Pour chaque variante : moins de 1300 caracteres, sauts de ligne strategiques, pas de hashtags dans le corps du texte, 3 hashtags en fin de post.`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Claude.ai | Temps : 1-2 min | Qualit&eacute; : publiable apr&egrave;s personnalisation du hook</p>
                </div>

                {/* Use Case 3 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">3</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Emails marketing</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    G&eacute;n&eacute;rez des emails marketing complets avec objets, corps et CTA. Claude produit plusieurs variantes d&apos;objets pour A/B testing et adapte le ton &agrave; votre audience.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un expert en email marketing B2B avec un taux d'ouverture moyen de 35%.

Objectif de campagne : [OBJECTIF]
Audience : [SEGMENT / PERSONA]
Offre : [CE QUE VOUS PROPOSEZ]
Ton : [professionnel / decontracte / urgent]

Produis :
1. 5 variantes d'objet (moins de 50 caracteres chacune)
   - Pour chaque objet, explique pourquoi il fonctionne
2. Le corps de l'email :
   - Accroche personnalisee (1-2 lignes)
   - Probleme identifie (2-3 lignes)
   - Solution proposee (3-4 lignes)
   - Preuve sociale (1 phrase)
   - CTA clair et unique
3. Un PS strategique
4. Version texte brut de l'email

Contraintes : moins de 200 mots pour le corps, lecture en moins de 45 secondes, un seul CTA.`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Claude.ai ou API | Temps : 1-2 min | Qualit&eacute; : pr&ecirc;t &agrave; int&eacute;grer dans HubSpot</p>
                </div>

                {/* Use Case 4 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">4</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Analyse concurrentielle</h4>
                    <Badge>Opus 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Fournissez les donn&eacute;es d&apos;un concurrent (site web, positionnement, pricing) et obtenez une analyse SWOT compl&egrave;te avec des recommandations de positionnement diff&eacute;renciant.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un analyste strategique senior specialise en marketing B2B.

Voici les donnees sur notre concurrent :
- Nom : [NOM]
- Site : [URL]
- Positionnement : [DESCRIPTION]
- Pricing : [FOURCHETTE]
- Points forts perceptibles : [LISTE]
- Contenu recent : [THEMES ABORDES]

Notre entreprise :
- Positionnement actuel : [DESCRIPTION]
- ICP : [DESCRIPTION]
- Avantages competitifs : [LISTE]

Produis :
1. Analyse SWOT du concurrent (detaillee, 3-5 points par quadrant)
2. Analyse du positionnement : comment ils se differencient
3. Gaps identifies : ce qu'ils ne couvrent pas
4. Recommandations strategiques (5 actions concretes)
5. Angles de contenu pour nous differencier (10 sujets)
6. Messages cles a utiliser face a ce concurrent`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Claude Opus 4 (raisonnement profond) | Temps : 3-5 min | Qualit&eacute; : niveau cabinet de conseil</p>
                </div>

                {/* Use Case 5 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">5</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Cr&eacute;ation de personas</h4>
                    <Badge>Opus 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Transformez vos donn&eacute;es clients en personas d&eacute;taill&eacute;s avec citations fictives r&eacute;alistes, points de douleur, parcours d&apos;achat et crit&egrave;res de d&eacute;cision.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un expert en buyer personas B2B.

Donnees clients disponibles :
- Secteur : [SECTEUR]
- Taille entreprise : [RANGE]
- Roles typiques des acheteurs : [LISTE]
- Problemes resolus par notre solution : [LISTE]
- Cycle de vente moyen : [DUREE]
- Objections frequentes : [LISTE]

Cree un persona detaille avec :
1. Prenom, nom, poste, entreprise fictive (realiste)
2. Bio en 3 lignes
3. Citation representative (ce qu'il dirait en reunion)
4. 5 objectifs professionnels
5. 5 points de douleur (classes par intensite)
6. Parcours d'achat : comment il decouvre, evalue, decide
7. Criteres de decision (classes par importance)
8. Objections typiques et comment les adresser
9. Canaux preferes (ou il consomme du contenu)
10. Mots-cles qu'il utilise pour chercher une solution`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Opus 4 pour la profondeur | Temps : 2-3 min | Qualit&eacute; : alignable avec des interviews r&eacute;elles</p>
                </div>

                {/* Use Case 6 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">6</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Landing pages</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Cr&eacute;ez le copywriting complet d&apos;une landing page : hero, b&eacute;n&eacute;fices, preuve sociale, FAQ et CTA. Claude structure le contenu pour maximiser la conversion.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un expert en copywriting de landing pages B2B avec un taux de conversion moyen de 12%.

Offre : [DESCRIPTION]
ICP : [PERSONA CIBLE]
Proposition de valeur unique : [UVP]
Preuves disponibles : [TEMOIGNAGES, CHIFFRES, LOGOS]

Produis le copywriting complet :
1. Hero section : headline (moins de 10 mots), sous-titre (1 phrase), CTA primaire
2. Barre de logos clients (texte d'accompagnement)
3. Section probleme (3 pain points avec descriptions)
4. Section solution (3 benefices mappes aux pain points)
5. Section comment ca marche (3 etapes)
6. Temoignage client (structure avec quote, nom, poste, resultat chiffre)
7. Section pricing ou CTA (selon le modele)
8. FAQ (5 questions strategiques)
9. CTA final avec urgence subtile`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Sonnet 4 | Temps : 2-3 min | Qualit&eacute; : pr&ecirc;t pour le designer</p>
                </div>

                {/* Use Case 7 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">7</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Scripts vid&eacute;o et podcast</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    G&eacute;n&eacute;rez des scripts structur&eacute;s pour vid&eacute;os YouTube, webinaires ou &eacute;pisodes de podcast. Claude adapte le format au canal et int&egrave;gre les timecodes.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un producteur de contenu video B2B.

Sujet : [SUJET]
Format : [video YouTube 10 min / webinaire 30 min / podcast 20 min]
Audience : [DESCRIPTION]
Objectif : [eduquer / convertir / fidéliser]

Produis un script structure avec :
1. Hook d'ouverture (15 secondes, phrase d'accroche)
2. Introduction du sujet et promesse (30 secondes)
3. Plan annonce (les 3-5 points cles)
4. Contenu principal (chaque section avec timecode, points cles, exemples)
5. Transition entre chaque section
6. Resume et takeaways (3 points cles)
7. CTA de fin (abonnement, lien, telechargement)
8. Description pour la plateforme (avec timestamps)
9. 3 titres a tester`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Sonnet 4 | Temps : 2-3 min | Qualit&eacute; : base solide, personnaliser le ton</p>
                </div>

                {/* Use Case 8 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">8</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Newsletters</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Transformez une liste de contenus r&eacute;cents en newsletter format&eacute;e avec introductions, transitions et s&eacute;lection &eacute;ditoriale. Claude adapte le ton &agrave; votre audience.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un editeur de newsletter B2B avec 15K+ abonnes.

Contenus de la semaine :
- [ARTICLE 1 : titre + resume en 1 ligne]
- [ARTICLE 2 : titre + resume en 1 ligne]
- [ACTUALITE SECTEUR : description]
- [RESSOURCE A PARTAGER : lien + description]

Ton : [professionnel decontracte / expert / personnel]
Audience : [DESCRIPTION]

Produis :
1. 3 variantes d'objet (moins de 50 caracteres)
2. Introduction editoriale (3-4 lignes, angle personnel)
3. Section 1 : article principal (resume + pourquoi c'est important + lien)
4. Section 2 : article secondaire (meme format)
5. Section "A lire aussi" (2-3 liens avec 1 ligne chacun)
6. Section "Chiffre de la semaine" (stat + contexte)
7. Conclusion avec teaser du prochain numero`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Sonnet 4 | Temps : 2 min | Qualit&eacute; : publiable avec personnalisation</p>
                </div>

                {/* Use Case 9 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">9</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Analyse de donn&eacute;es marketing</h4>
                    <Badge>Opus 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Collez vos donn&eacute;es marketing (CSV, tableaux) dans Claude et obtenez des insights, tendances et recommandations actionables. Id&eacute;al pour les revues de performance mensuelles.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un analyste marketing senior specialise en B2B SaaS.

Voici nos donnees de performance du dernier trimestre :
[COLLER LES DONNEES : CSV, tableau, ou description]

Analyse ces donnees et produis :
1. Resume executif (5 lignes max)
2. Top 3 tendances positives avec explication
3. Top 3 signaux d'alerte avec impact estime
4. Analyse par canal : quel canal performe le mieux et pourquoi
5. Correlations identifiees (ex: type de contenu vs conversion)
6. 5 recommandations concretes classees par impact et effort
7. KPIs a surveiller le prochain trimestre
8. Benchmark : comment nos chiffres se comparent aux moyennes du secteur

Format : tableaux quand pertinent, bullet points pour la clarte.`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Opus 4 (analyse complexe) | Temps : 3-5 min | Qualit&eacute; : insights de niveau analyste senior</p>
                </div>

                {/* Use Case 10 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">10</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Calendrier &eacute;ditorial</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    G&eacute;n&eacute;rez un calendrier de contenu sur 3 mois avec sujets, formats, canaux et dates de publication. Claude tient compte de la saisonnalit&eacute; et de vos objectifs.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un directeur de contenu B2B.

Themes strategiques : [THEME 1], [THEME 2], [THEME 3]
Canaux : blog, LinkedIn, newsletter, [AUTRES]
Frequence : [X articles/semaine, Y posts LinkedIn/semaine, Z newsletters/mois]
ICP : [DESCRIPTION]
Objectifs Q2 : [OBJECTIFS]
Evenements a venir : [SALONS, LANCEMENTS, DATES CLES]

Cree un calendrier editorial sur 3 mois avec :
1. Vue mensuelle : themes dominants de chaque mois
2. Vue hebdomadaire : chaque semaine avec sujets, formats, canaux
3. Pour chaque contenu : titre provisoire, format, canal, objectif (trafic/leads/nurturing), mots-cles cibles
4. Contenus piliers vs contenus satellites
5. Points de reutilisation cross-canal (1 article = 3 posts LinkedIn + 1 newsletter)
6. Metriques de succes par contenu`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Sonnet 4 | Temps : 3-5 min | Qualit&eacute; : importable dans Notion ou Asana</p>
                </div>

                {/* Use Case 11 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">11</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Optimisation SEO on-page</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Collez le contenu d&apos;une page existante et obtenez des recommandations SEO compl&egrave;tes : title, meta, structure des headings, suggestions de maillage interne et am&eacute;liorations de contenu.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un expert SEO technique et editorial.

Contenu de la page a optimiser :
[COLLER LE CONTENU COMPLET]

Mot-cle principal cible : [MOT-CLE]
URL actuelle : [URL]
Pages existantes sur le site : [LISTE DES PRINCIPALES URLS]

Analyse et produis :
1. Score SEO estime (sur 100) avec justification
2. Title tag optimise (3 variantes)
3. Meta description optimisee (2 variantes)
4. Structure H1/H2/H3 recommandee
5. Mots-cles manquants a integrer (avec position suggeree)
6. Suggestions de maillage interne (5 liens avec ancre et page cible)
7. Ameliorations de contenu (sections a enrichir, a ajouter)
8. Schema markup recommande
9. Checklist technique (vitesse, mobile, Core Web Vitals)`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Sonnet 4 | Temps : 2-3 min | Qualit&eacute; : comparable &agrave; un audit SEO &agrave; 500 euros</p>
                </div>

                {/* Use Case 12 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">12</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">A/B testing de copy</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Fournissez un copy existant et obtenez 3 variantes avec la justification psychologique de chaque modification. Id&eacute;al pour tester des headlines, CTA et emails.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un expert en conversion copywriting et psychologie comportementale.

Copy original a tester :
[COLLER LE COPY]

Contexte : [PAGE / EMAIL / AD] pour [AUDIENCE]
Metrique cible : [taux de clic / taux de conversion / taux d'ouverture]

Cree 3 variantes :
Variante A - Angle benefice : reformule en mettant le benefice en avant
Variante B - Angle urgence : integre un element de rarete ou de timing
Variante C - Angle social proof : integre la preuve sociale

Pour chaque variante :
1. Le copy modifie
2. Le principe psychologique utilise (Cialdini, etc.)
3. Pourquoi cette variante devrait surperformer
4. Hypothese de gain estime (ex: +15-25% de clics)
5. Segment d'audience le plus susceptible de reagir`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Sonnet 4 | Temps : 1-2 min | Qualit&eacute; : excellente, justifications solides</p>
                </div>

                {/* Use Case 13 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">13</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Reporting automatis&eacute;</h4>
                    <Badge>Opus 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Transformez vos KPIs bruts en rapport ex&eacute;cutif avec insights, explications et recommandations. Id&eacute;al pour le reporting hebdomadaire ou mensuel au management.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un CMO qui presente des resultats au board.

KPIs de la periode [PERIODE] :
[COLLER LES CHIFFRES : MQL, SQL, trafic, conversions, CAC, LTV, etc.]

Periode precedente pour comparaison :
[COLLER LES CHIFFRES PRECEDENTS]

Objectifs du trimestre :
[OBJECTIFS]

Produis un rapport executif :
1. Resume en 3 bullet points (wins, alerts, next steps)
2. Dashboard narratif : chaque KPI avec evolution, contexte et explication
3. Top 3 victoires du mois avec impact business
4. Top 3 points d'attention avec plan d'action
5. Progression vers les objectifs trimestriels (% et tendance)
6. Recommandations pour le prochain mois (3 priorites)
7. Budget : consomme vs prevu, ajustements recommandes`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Opus 4 | Temps : 3-5 min | Qualit&eacute; : pr&eacute;sentable en comit&eacute; de direction</p>
                </div>

                {/* Use Case 14 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">14</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Briefs cr&eacute;ation</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    G&eacute;n&eacute;rez des briefs d&eacute;taill&eacute;s pour vos designers, d&eacute;veloppeurs ou agences. Claude structure le brief avec objectifs, sp&eacute;cifications, r&eacute;f&eacute;rences et crit&egrave;res de succ&egrave;s.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un directeur marketing qui redige des briefs precis.

Projet : [TYPE : landing page / visuel / video / email template]
Objectif : [OBJECTIF DE LA CAMPAGNE]
Audience : [PERSONA]
Budget : [FOURCHETTE]
Deadline : [DATE]

Produis un brief complet :
1. Contexte du projet (3-4 lignes)
2. Objectif mesurable (KPI cible)
3. Audience cible (persona resume)
4. Message principal et messages secondaires
5. Ton et direction artistique (avec references si possible)
6. Specifications techniques (dimensions, formats, contraintes)
7. Contenu a integrer (textes, logos, CTA)
8. Livrables attendus (liste precise avec formats)
9. Planning (jalons et deadline)
10. Criteres de validation (comment evaluer le livrable)`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Sonnet 4 | Temps : 2 min | Qualit&eacute; : pr&ecirc;t &agrave; envoyer au prestataire</p>
                </div>

                {/* Use Case 15 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">15</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Traduction et localisation</h4>
                    <Badge>Sonnet 4</Badge>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Transformez du contenu anglophone en fran&ccedil;ais adapt&eacute;, pas simplement traduit. Claude adapte les r&eacute;f&eacute;rences culturelles, le ton et les expressions idiomatiques.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-3">
                    <pre className="whitespace-pre-wrap">{`Tu es un expert en localisation marketing EN vers FR.

Contenu original (anglais) :
[COLLER LE CONTENU]

Contexte : [TYPE DE CONTENU : blog / email / landing page / ad]
Marche cible : [France / Quebec / Belgique / Suisse]
Ton de la marque en francais : [DESCRIPTION]

Produis :
1. Traduction adaptee (pas mot-a-mot, adaptee au marche)
2. Adaptations culturelles effectuees (liste avec justification)
3. Expressions idiomatiques remplacees (original vs adaptation)
4. Termes techniques : gardes en anglais ou traduits (avec justification)
5. SEO : mots-cles adaptes au marche francophone
6. Points d'attention : elements qui pourraient ne pas resonner avec l'audience FR`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Outils : Sonnet 4 | Temps : 2-3 min | Qualit&eacute; : bien sup&eacute;rieure &agrave; DeepL pour le marketing</p>
                </div>
              </div>
            </section>

            <Connector />

            {/* ========================================================== */}
            {/*  CHAPTER 4 — Content marketing avec Claude                 */}
            {/* ========================================================== */}
            <section id="ch4" className="scroll-mt-[100px] mb-10">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[13px] font-bold shrink-0">04</div>
                  <div>
                    <p className="text-[10px] text-[#CCC] uppercase tracking-wider">Chapitre 4 &mdash; p. 23-28</p>
                    <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em]">Content marketing avec Claude</h2>
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Le workflow complet : de l&apos;id&eacute;ation &agrave; la publication</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Le v&eacute;ritable pouvoir de Claude en content marketing ne r&eacute;side pas dans un prompt unique, mais dans un workflow structur&eacute; en 6 &eacute;tapes o&ugrave; chaque sortie alimente l&apos;&eacute;tape suivante. C&apos;est ce que nous appelons le prompt chaining, et c&apos;est la diff&eacute;rence entre un contenu g&eacute;n&eacute;rique et un contenu de niveau expert.
                </p>

                {/* Workflow steps */}
                <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5 mb-6">
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Workflow en 6 &eacute;tapes</p>
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Id\u00e9ation", desc: "Claude g\u00e9n\u00e8re 20 sujets \u00e0 partir de vos th\u00e8mes strat\u00e9giques, de vos mots-cl\u00e9s cibles et des questions fr\u00e9quentes de vos prospects. Il classe chaque sujet par potentiel SEO, difficult\u00e9 et alignement strat\u00e9gique.", color: "#D4A27F" },
                      { step: "2", title: "Recherche", desc: "Claude analyse le contenu concurrent sur le sujet choisi : quels angles sont couverts, quels sont les gaps, quelles donn\u00e9es sont cit\u00e9es. Il produit un brief de recherche structur\u00e9.", color: "#4B5EFC" },
                      { step: "3", title: "Structure", desc: "Claude cr\u00e9e un plan d\u00e9taill\u00e9 avec H2/H3, optimis\u00e9 SEO, avec les points cl\u00e9s de chaque section et les donn\u00e9es \u00e0 int\u00e9grer. Vous validez la structure avant de passer au brouillon.", color: "#22C55E" },
                      { step: "4", title: "Brouillon", desc: "Claude r\u00e9dige l\u2019article complet en suivant la structure valid\u00e9e, votre ton de marque et vos guidelines. Il int\u00e8gre les donn\u00e9es, exemples et citations identifi\u00e9s en phase de recherche.", color: "#FF7A59" },
                      { step: "5", title: "\u00c9dition", desc: "Changez de mod\u00e8le mental : demandez \u00e0 Claude de relire en tant qu\u2019\u00e9diteur exigeant. Il identifie les phrases faibles, les r\u00e9p\u00e9titions, les affirmations non \u00e9tay\u00e9es et les passages trop g\u00e9n\u00e9riques.", color: "#6D00CC" },
                      { step: "6", title: "Optimisation", desc: "Claude optimise le SEO (title, meta, headings, maillage), v\u00e9rifie la lisibilit\u00e9 (phrases courtes, paragraphes a\u00e9r\u00e9s) et sugg\u00e8re les contenus d\u00e9riv\u00e9s (posts LinkedIn, newsletter, tweet).", color: "#D4A27F" },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[12px] font-bold shrink-0" style={{ background: s.color }}>{s.step}</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Le prompt chaining en pratique</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Le prompt chaining consiste &agrave; d&eacute;composer une t&acirc;che complexe en &eacute;tapes s&eacute;quentielles, chaque sortie servant d&apos;entr&eacute;e &agrave; l&apos;&eacute;tape suivante. Au lieu de demander &laquo; &eacute;cris un article sur le RevOps &raquo; (prompt unique, r&eacute;sultat g&eacute;n&eacute;rique), vous d&eacute;composez en : recherche, puis structure, puis r&eacute;daction, puis &eacute;dition. Chaque &eacute;tape produit un r&eacute;sultat que vous validez et affinez avant de passer &agrave; la suivante. Le r&eacute;sultat final est radicalement sup&eacute;rieur car chaque &eacute;tape a b&eacute;n&eacute;fici&eacute; de votre expertise humaine et de la capacit&eacute; de Claude.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Maintenir la voix de marque</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Le d&eacute;fi principal de la g&eacute;n&eacute;ration de contenu IA est de maintenir une voix de marque coh&eacute;rente. La solution : cr&eacute;er un system prompt d&eacute;taill&eacute; qui d&eacute;finit votre ton, votre style, vos mots interdits et vos exemples de r&eacute;f&eacute;rence. Chez Ceres, notre system prompt de marque fait 800 mots et inclut : 3 adjectifs de ton (expert, direct, pragmatique), 5 exemples de phrases dans le bon ton, une liste de 15 mots interdits (synergie, paradigme, holistique, leverager...), la structure type de nos paragraphes et nos r&egrave;gles typographiques. Ce system prompt est utilis&eacute; dans chaque conversation avec Claude et garantit que tout le contenu produit est imm&eacute;diatement reconnaissable comme Ceres.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Templates par type de contenu</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    { type: "Article de blog", structure: "Hook + Probl\u00e8me + 3-5 sections + CTA", longueur: "1500-2500 mots", frequence: "2-3/semaine" },
                    { type: "Case study", structure: "Contexte + D\u00e9fi + Solution + R\u00e9sultats chiffr\u00e9s", longueur: "800-1200 mots", frequence: "1-2/mois" },
                    { type: "White paper", structure: "Probl\u00e8me + \u00c9tat de l\u2019art + M\u00e9thodologie + Recommandations", longueur: "3000-5000 mots", frequence: "1/trimestre" },
                    { type: "Post LinkedIn", structure: "Hook + D\u00e9veloppement + Takeaway + CTA", longueur: "500-1300 caract\u00e8res", frequence: "3-5/semaine" },
                  ].map((t) => (
                    <div key={t.type} className="rounded-lg border border-[#F0F0F0] p-4">
                      <p className="text-[13px] font-semibold text-[#111] mb-2">{t.type}</p>
                      <p className="text-[11px] text-[#777] mb-1"><span className="font-medium text-[#555]">Structure :</span> {t.structure}</p>
                      <p className="text-[11px] text-[#777] mb-1"><span className="font-medium text-[#555]">Longueur :</span> {t.longueur}</p>
                      <p className="text-[11px] text-[#777]"><span className="font-medium text-[#555]">Fr&eacute;quence :</span> {t.frequence}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Exemple Ceres : 3 articles par semaine avec Claude</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Chez Ceres, nous publions 3 articles de blog par semaine en utilisant le workflow d&eacute;crit ci-dessus. Chaque article prend en moyenne 45 minutes du brief &agrave; la publication (contre 4 heures avant Claude). Le processus : lundi matin, Claude g&eacute;n&egrave;re les 3 briefs de la semaine &agrave; partir de notre calendrier &eacute;ditorial. Chaque r&eacute;dacteur r&eacute;cup&egrave;re son brief, lance le workflow de prompt chaining, valide la structure, supervise la r&eacute;daction et fait une passe &eacute;ditoriale finale. Le gain n&apos;est pas seulement en temps : la qualit&eacute; est plus constante car chaque article suit le m&ecirc;me processus structur&eacute; et int&egrave;gre notre voix de marque de mani&egrave;re syst&eacute;matique.
                </p>
              </div>
            </section>

            <Connector />

            {/* ========================================================== */}
            {/*  CHAPTER 5 — Outbound et prospection                       */}
            {/* ========================================================== */}
            <section id="ch5" className="scroll-mt-[100px] mb-10">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[13px] font-bold shrink-0">05</div>
                  <div>
                    <p className="text-[10px] text-[#CCC] uppercase tracking-wider">Chapitre 5 &mdash; p. 29-33</p>
                    <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em]">Outbound et prospection avec Claude</h2>
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Icebreakers hyper-personnalis&eacute;s : 11,8% de taux de r&eacute;ponse</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  La combinaison Claude + donn&eacute;es Clay transforme la prospection froide. Au lieu d&apos;icebreakers g&eacute;n&eacute;riques (&laquo; J&apos;ai vu que votre entreprise se d&eacute;veloppait &raquo;), Claude analyse le profil LinkedIn, les publications r&eacute;centes, les actualit&eacute;s de l&apos;entreprise et le tech stack pour produire des ouvertures pr&eacute;cises et pertinentes. Nos clients qui utilisent cette m&eacute;thode observent un taux de r&eacute;ponse de 11,8% en moyenne, contre 3-4% avec des templates manuels. La cl&eacute; est la sp&eacute;cificit&eacute; : Claude ne produit pas une phrase vaguement personnalis&eacute;e, il produit une ouverture qui d&eacute;montre que vous avez compris le contexte du prospect.
                </p>

                <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-6">
                  <pre className="whitespace-pre-wrap">{`Tu es un SDR senior B2B SaaS avec un taux de reponse de 12%.

Donnees du prospect :
- Nom : [NOM]
- Poste : [POSTE]
- Entreprise : [ENTREPRISE]
- Secteur : [SECTEUR]
- Taille : [NOMBRE EMPLOYES]
- Dernier post LinkedIn : [RESUME]
- Actualite recente de l'entreprise : [ACTUALITE]
- Tech stack identifie : [OUTILS]

Notre proposition de valeur : [UVP]

Genere 3 icebreakers de 1-2 lignes chacun :
1. Base sur le post LinkedIn recent
2. Base sur l'actualite de l'entreprise
3. Base sur un pain point infere du tech stack

Chaque icebreaker doit : etre specifique (pas generic), montrer que tu as fait tes recherches, creer une ouverture naturelle vers notre solution, ne pas mentionner directement notre produit.`}</pre>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">S&eacute;quences email compl&egrave;tes en 5 &eacute;tapes</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Claude g&eacute;n&egrave;re des s&eacute;quences d&apos;emails compl&egrave;tes &agrave; partir d&apos;une description de votre ICP et de votre offre. Chaque email a un angle diff&eacute;rent : le premier est ax&eacute; sur le pain point, le deuxi&egrave;me sur la preuve sociale, le troisi&egrave;me sur la valeur ajout&eacute;e, le quatri&egrave;me sur l&apos;urgence et le cinqui&egrave;me est un break-up email. Claude adapte le ton de chaque &eacute;tape pour refl&eacute;ter la progression de la relation et int&egrave;gre des variables de personnalisation &agrave; chaque point de contact.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Enrichissement intelligent</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Claude analyse les profils LinkedIn, les sites d&apos;entreprise et les publications pour inf&eacute;rer des informations qui ne sont pas explicitement disponibles : pain points probables bas&eacute;s sur le secteur et la taille, tech stack probable, budget estimable, timing d&apos;achat potentiel. Ce n&apos;est pas de la voyance : c&apos;est du raisonnement structur&eacute; bas&eacute; sur des patterns. Un Directeur Marketing dans une SaaS B2B de 50-200 employ&eacute;s utilise probablement HubSpot, fait face &agrave; des d&eacute;fis d&apos;attribution et cherche &agrave; optimiser son CAC. Claude formalise ce raisonnement et produit un profil enrichi exploit&eacute; par les SDR.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">A/B testing d&apos;objets email</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Pour chaque email de s&eacute;quence, demandez &agrave; Claude de g&eacute;n&eacute;rer 5 variantes d&apos;objet avec une justification psychologique pour chacune. Par exemple : un objet ax&eacute; curiosit&eacute; (&laquo; Une question sur votre pipeline &raquo;), un objet ax&eacute; b&eacute;n&eacute;fice (&laquo; Divisez votre CAC par 2 &raquo;), un objet ax&eacute; social proof (&laquo; Comment [NOM CONCURRENT] a doubl&eacute; ses MQL &raquo;), un objet minimaliste (&laquo; Quick question &raquo;) et un objet provocation (&laquo; Votre CRM vous ment &raquo;). Cette approche permet de tester rapidement et d&apos;identifier les angles qui r&eacute;sonnent avec votre audience sp&eacute;cifique.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Analyse des r&eacute;ponses</h3>
                <p className="text-[14px] text-[#555] leading-[1.8]">
                  Claude peut classifier automatiquement les r&eacute;ponses de vos campagnes outbound en cat&eacute;gories actionables : int&eacute;ress&eacute; (transf&eacute;rer &agrave; l&apos;AE), pas maintenant (ajouter au nurturing), mauvais interlocuteur (demander redirection), objection (pr&eacute;parer r&eacute;ponse), d&eacute;sinscription (retirer). Avec Haiku 3.5, cette classification co&ucirc;te moins de 0,001 euro par email et peut traiter 1000 r&eacute;ponses en quelques minutes. Coupl&eacute; &agrave; Make et HubSpot, le processus devient enti&egrave;rement automatique : chaque r&eacute;ponse est class&eacute;e, le contact est mis &agrave; jour dans le CRM et l&apos;action suivante est d&eacute;clench&eacute;e.
                </p>
              </div>
            </section>

            <Connector />

            {/* ========================================================== */}
            {/*  CHAPTER 6 — CRM et operations                             */}
            {/* ========================================================== */}
            <section id="ch6" className="scroll-mt-[100px] mb-10">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[13px] font-bold shrink-0">06</div>
                  <div>
                    <p className="text-[10px] text-[#CCC] uppercase tracking-wider">Chapitre 6 &mdash; p. 34-38</p>
                    <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em]">CRM et op&eacute;rations avec Claude</h2>
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Enrichissement CRM via MCP</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Avec le MCP HubSpot, Claude peut lire directement vos fiches contact, les enrichir avec des donn&eacute;es web et &eacute;crire les informations enrichies dans le CRM. Concr&egrave;tement : Claude lit un contact avec un nom et un email, recherche l&apos;entreprise sur le web, identifie le secteur, la taille, le tech stack probable, les actualit&eacute;s r&eacute;centes, et met &agrave; jour la fiche HubSpot avec toutes ces informations. Le processus qui prenait 15 minutes par contact manuellement se fait en 30 secondes. Sur une base de 500 contacts, c&apos;est 120 heures de travail &eacute;conomis&eacute;es.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Lead scoring intelligent</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Claude analyse vos deals gagn&eacute;s et perdus pour identifier les patterns de succ&egrave;s. Quels secteurs convertissent le mieux ? Quelle taille d&apos;entreprise ? Quel budget moyen ? Combien de touchpoints avant la conversion ? &Agrave; partir de cette analyse, Claude propose un mod&egrave;le de scoring bas&eacute; sur vos donn&eacute;es r&eacute;elles, pas sur des hypoth&egrave;ses th&eacute;oriques. Ce scoring peut ensuite &ecirc;tre impl&eacute;ment&eacute; dans HubSpot pour prioriser automatiquement les leads les plus prometteurs. Un de nos clients a augment&eacute; son taux de conversion de 23% en passant d&apos;un scoring arbitraire &agrave; un scoring calibr&eacute; par Claude sur ses donn&eacute;es historiques.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">R&eacute;sum&eacute;s de calls structur&eacute;s</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Le workflow Claap (ou Gong, ou Modjo) + Claude est devenu incontournable. La transcription du call est envoy&eacute;e &agrave; Claude qui produit un r&eacute;sum&eacute; structur&eacute; avec : les points cl&eacute;s discut&eacute;s, les objections identifi&eacute;es, les prochaines &eacute;tapes convenues, les signaux d&apos;achat d&eacute;tect&eacute;s et les risques pour le deal. Ce r&eacute;sum&eacute; est automatiquement post&eacute; comme note dans HubSpot sur la fiche du deal. Le sales manager a une vue compl&egrave;te de chaque interaction sans lire 45 minutes de transcription.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Qualit&eacute; des donn&eacute;es CRM</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Les donn&eacute;es CRM se d&eacute;gradent de 25% par an en moyenne. Claude peut auditer votre base de donn&eacute;es pour identifier : les doublons (m&ecirc;me personne avec des variantes de nom ou d&apos;email), les champs incomplets (contacts sans secteur, deals sans montant), les formats non standardis&eacute;s (num&eacute;ros de t&eacute;l&eacute;phone, noms d&apos;entreprise) et les donn&eacute;es obsol&egrave;tes (emails qui bouncent, contacts qui ont chang&eacute; de poste). Avec Haiku 3.5, l&apos;audit d&apos;une base de 10 000 contacts co&ucirc;te moins de 10 euros et prend quelques minutes.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Reporting automatis&eacute; via Slack</h3>
                <p className="text-[14px] text-[#555] leading-[1.8]">
                  Chaque lundi matin, un workflow Make d&eacute;clenche Claude qui lit les donn&eacute;es pipeline dans HubSpot, g&eacute;n&egrave;re un rapport hebdomadaire (nouveaux deals, deals progress&eacute;s, deals &agrave; risque, pr&eacute;vision de cl&ocirc;ture du mois) et l&apos;envoie sur le canal Slack de l&apos;&eacute;quipe. Le rapport est narratif, pas un tableau de chiffres : Claude explique pourquoi tel deal est &agrave; risque, recommande des actions pour les deals stall&eacute;s et f&eacute;licite les wins de la semaine. Ce reporting co&ucirc;te moins de 2 euros par mois en appels API et remplace 2 heures de travail manuel hebdomadaire.
                </p>
              </div>
            </section>

            <Connector />

            {/* ========================================================== */}
            {/*  CHAPTER 7 — Claude Code (KEY CHAPTER)                     */}
            {/* ========================================================== */}
            <section id="ch7" className="scroll-mt-[100px] mb-10">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[13px] font-bold shrink-0">07</div>
                  <div>
                    <p className="text-[10px] text-[#CCC] uppercase tracking-wider">Chapitre 7 &mdash; p. 39-45</p>
                    <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em]">Claude Code : l&apos;arme secr&egrave;te des marketeurs</h2>
                  </div>
                </div>

                {/* Dark highlight */}
                <div className="rounded-xl bg-[#1A1A2E] p-5 mb-6">
                  <p className="text-[14px] text-[#E0E0E0] leading-[1.8]">
                    Claude Code est un agent de d&eacute;veloppement autonome qui s&apos;ex&eacute;cute dans votre terminal. Vous lui d&eacute;crivez ce que vous voulez en fran&ccedil;ais, et il construit : lit les fichiers existants, &eacute;crit du code, ex&eacute;cute des commandes, recherche sur le web, utilise le MCP pour se connecter &agrave; vos outils. Pour les &eacute;quipes marketing sans d&eacute;veloppeur d&eacute;di&eacute;, Claude Code est un game changer. Il transforme chaque marketeur en &laquo; technical marketer &raquo; capable de construire ses propres outils.
                  </p>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Comment fonctionne Claude Code</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Claude Code s&apos;installe via npm (&laquo; npm install -g @anthropic-ai/claude-code &raquo;) et se lance dans votre terminal. Vous d&eacute;crivez votre besoin en langage naturel, Claude Code analyse votre projet existant, propose un plan, puis ex&eacute;cute &eacute;tape par &eacute;tape. Il peut cr&eacute;er des fichiers, modifier du code existant, installer des d&eacute;pendances, lancer des tests et d&eacute;ployer. Chaque action vous est pr&eacute;sent&eacute;e pour validation avant ex&eacute;cution, ce qui garantit que vous gardez le contr&ocirc;le total.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-4">5 outils marketing concrets construits avec Claude Code</h3>

                {/* Tool 1 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#22C55E] text-white text-[10px] font-bold flex items-center justify-center">1</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Dashboard de monitoring SEO</h4>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Un tableau de bord qui scrape vos positions Google, compare avec les concurrents et envoie des alertes quand un mot-cl&eacute; perd plus de 3 positions. Construit en 2 heures avec Claude Code au lieu de 2 semaines avec un d&eacute;veloppeur.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                    <pre className="whitespace-pre-wrap">{`// Instruction donnee a Claude Code :
// "Cree un dashboard SEO en Next.js qui :
// 1. Scrape les positions Google pour une liste de mots-cles
// 2. Stocke l'historique dans Supabase
// 3. Compare avec 3 concurrents
// 4. Envoie un email d'alerte si un mot-cle perd 3+ positions
// 5. Affiche un graphique d'evolution sur 30 jours"

// Claude Code genere automatiquement :
// - Le schema Supabase (table keywords, positions, alerts)
// - L'API route Next.js pour le scraping
// - Le cron job pour l'execution quotidienne
// - Le composant React du dashboard avec Recharts
// - L'integration SendGrid pour les alertes email`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Temps Claude Code : ~2h | Temps dev classique : ~2 semaines | Co&ucirc;t : ~5 euros en tokens</p>
                </div>

                {/* Tool 2 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#4B5EFC] text-white text-[10px] font-bold flex items-center justify-center">2</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Analyseur de performance contenu</h4>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Un outil qui lit les donn&eacute;es GA4 et HubSpot, croise trafic, engagement et conversion par contenu, et g&eacute;n&egrave;re un rapport hebdomadaire avec les contenus stars, les contenus &agrave; optimiser et les sujets &agrave; explorer.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                    <pre className="whitespace-pre-wrap">{`// Instruction donnee a Claude Code :
// "Cree un script Node.js qui :
// 1. Se connecte a GA4 via l'API Google Analytics
// 2. Se connecte a HubSpot via l'API CRM
// 3. Croise les donnees : pages vues + temps passe + conversions
// 4. Identifie les top 10 et bottom 10 contenus
// 5. Genere un rapport Markdown avec recommandations
// 6. Envoie le rapport sur Slack via webhook"

// Resultat : script de 180 lignes, executable en cron
// chaque lundi a 8h, rapport recu sur Slack a 8h05`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Temps Claude Code : ~1h30 | Temps dev classique : ~1 semaine | Co&ucirc;t : ~3 euros en tokens</p>
                </div>

                {/* Tool 3 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#FF7A59] text-white text-[10px] font-bold flex items-center justify-center">3</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">G&eacute;n&eacute;rateur de templates email HTML</h4>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Un outil qui prend un brief de campagne en entr&eacute;e et produit un template email HTML responsive, compatible avec tous les clients email, avec le copy int&eacute;gr&eacute; et les images plac&eacute;es.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                    <pre className="whitespace-pre-wrap">{`// Instruction donnee a Claude Code :
// "Cree un generateur de templates email qui :
// 1. Input : fichier JSON avec brief (sujet, audience, CTA, ton)
// 2. Genere le copy via l'API Claude Sonnet 4
// 3. Integre le copy dans un template HTML responsive
// 4. Produit une version texte brut en parallele
// 5. Valide la compatibilite email (inline CSS, tables)
// 6. Output : fichier HTML + fichier TXT prets pour HubSpot"

// Claude Code cree une CLI complete :
// $ node generate-email.js --brief campaign-q2.json
// > Template genere : output/campaign-q2.html
// > Version texte : output/campaign-q2.txt`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Temps Claude Code : ~1h | Temps dev classique : ~3 jours | Co&ucirc;t : ~2 euros en tokens</p>
                </div>

                {/* Tool 4 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#6D00CC] text-white text-[10px] font-bold flex items-center justify-center">4</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Pipeline d&apos;enrichissement de leads</h4>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Un pipeline complet qui lit un CSV de leads, enrichit chaque contact via plusieurs APIs (Clearbit, Apollo, web scraping), qualifie avec un score Claude et produit une liste qualifi&eacute;e en sortie.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                    <pre className="whitespace-pre-wrap">{`// Instruction donnee a Claude Code :
// "Cree un pipeline d'enrichissement de leads :
// 1. Input : CSV avec nom, email, entreprise
// 2. Enrichit via Apollo API (poste, LinkedIn, taille entreprise)
// 3. Scrape le site web de l'entreprise (proposition valeur, secteur)
// 4. Envoie chaque profil enrichi a Claude Haiku pour scoring
// 5. Claude evalue sur 4 criteres : fit ICP, timing, budget, autorite
// 6. Output : CSV enrichi + score + justification du score
// 7. Les leads score A et B sont automatiquement crees dans HubSpot"

// Pipeline complet, 250 lignes, traite 500 leads en 15 min
// Cout total pour 500 leads : environ 8 euros`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Temps Claude Code : ~2h30 | Temps dev classique : ~2 semaines | Co&ucirc;t : ~5 euros en tokens</p>
                </div>

                {/* Tool 5 */}
                <div className="rounded-xl border border-[#F0F0F0] p-5 mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-md bg-[#D4A27F] text-white text-[10px] font-bold flex items-center justify-center">5</span>
                    <h4 className="text-[14px] font-semibold text-[#111]">Bot de veille concurrentielle</h4>
                  </div>
                  <p className="text-[13px] text-[#555] leading-[1.7] mb-3">
                    Un bot qui monitore les sites web de vos concurrents, d&eacute;tecte les changements (nouveau pricing, nouvelle feature, nouveau contenu) et vous alerte sur Slack avec un r&eacute;sum&eacute; et une analyse d&apos;impact.
                  </p>
                  <div className="rounded-lg bg-[#1A1A2E] p-4 text-[12px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                    <pre className="whitespace-pre-wrap">{`// Instruction donnee a Claude Code :
// "Cree un bot de veille concurrentielle :
// 1. Liste de concurrents + pages a monitorer (pricing, features, blog)
// 2. Scrape chaque page toutes les 24h
// 3. Compare avec la version precedente (diff)
// 4. Si changement detecte : envoie le diff a Claude Sonnet 4
// 5. Claude analyse : quel changement, quel impact pour nous, action suggeree
// 6. Alerte Slack avec resume + analyse + recommandation
// 7. Stocke l'historique des changements dans Supabase"

// Bot fonctionnel, tourne en cron quotidien
// Cout mensuel : environ 15 euros (scraping + Claude API)`}</pre>
                  </div>
                  <p className="text-[11px] text-[#999]">Temps Claude Code : ~3h | Temps dev classique : ~3 semaines | Co&ucirc;t : ~6 euros en tokens</p>
                </div>

                {/* When to use what */}
                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Quand utiliser Claude Code vs l&apos;interface vs l&apos;API</h3>
                <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5 mb-6">
                  <div className="space-y-3">
                    {[
                      { tool: "Interface Claude.ai", usages: "T\u00e2ches ponctuelles, brainstorming, r\u00e9daction, analyse. Quand vous avez besoin d\u2019interaction et d\u2019it\u00e9ration.", color: "#D4A27F" },
                      { tool: "API Claude", usages: "Automatisation via Make/Zapier, traitements en volume, int\u00e9gration dans des workflows existants. Quand le processus est d\u00e9fini et r\u00e9p\u00e9titif.", color: "#4B5EFC" },
                      { tool: "Claude Code", usages: "Construction d\u2019outils internes, dashboards, pipelines, bots. Quand vous avez besoin d\u2019un outil qui n\u2019existe pas sur le march\u00e9 ou qui co\u00fbterait trop cher en SaaS.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.tool} className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full shrink-0 mt-1" style={{ background: item.color }} />
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">{item.tool}</p>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{item.usages}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Gain de temps : Claude Code vs d&eacute;veloppement traditionnel</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-[12px] border-collapse">
                    <thead>
                      <tr className="bg-[#FAFAFA]">
                        <th className="text-left p-3 border border-[#F0F0F0] font-semibold text-[#111]">Projet</th>
                        <th className="text-center p-3 border border-[#F0F0F0] font-semibold text-[#22C55E]">Claude Code</th>
                        <th className="text-center p-3 border border-[#F0F0F0] font-semibold text-[#555]">D&eacute;v classique</th>
                        <th className="text-center p-3 border border-[#F0F0F0] font-semibold text-[#D4A27F]">Gain</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Dashboard SEO", "2h", "2 semaines", "98%"],
                        ["Analyseur contenu", "1h30", "1 semaine", "96%"],
                        ["G\u00e9n\u00e9rateur email HTML", "1h", "3 jours", "96%"],
                        ["Pipeline enrichissement", "2h30", "2 semaines", "97%"],
                        ["Bot veille concurrentielle", "3h", "3 semaines", "98%"],
                      ].map(([projet, cc, dev, gain]) => (
                        <tr key={projet}>
                          <td className="p-3 border border-[#F0F0F0] text-[#555] font-medium">{projet}</td>
                          <td className="p-3 border border-[#F0F0F0] text-center text-[#22C55E] font-semibold">{cc}</td>
                          <td className="p-3 border border-[#F0F0F0] text-center text-[#777]">{dev}</td>
                          <td className="p-3 border border-[#F0F0F0] text-center text-[#D4A27F] font-semibold">{gain}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Comment Ceres utilise Claude Code pour ses clients</h3>
                <p className="text-[14px] text-[#555] leading-[1.8]">
                  Chez Ceres, Claude Code est au coeur de notre delivery. Quand un client a besoin d&apos;un dashboard HubSpot personnalis&eacute;, d&apos;un pipeline d&apos;enrichissement sp&eacute;cifique ou d&apos;un outil d&apos;automatisation sur mesure, nous utilisons Claude Code pour le construire en quelques heures. Cela nous permet de livrer des outils que seules les entreprises avec des &eacute;quipes de d&eacute;veloppement internes pouvaient se permettre. Un exemple concret : un client dans le SaaS RH avait besoin d&apos;un outil qui analyse ses appels de d&eacute;couverte, en extrait les objections r&eacute;currentes et les compare &agrave; ses taux de conversion par segment. Claude Code a construit cet outil en 4 heures. Le r&eacute;sultat a r&eacute;v&eacute;l&eacute; que les objections &laquo; budget &raquo; convertissaient en r&eacute;alit&eacute; mieux que la moyenne si le follow-up &eacute;tait fait sous 48h, ce qui a compl&egrave;tement chang&eacute; leur approche de vente.
                </p>
              </div>
            </section>

            <Connector />

            {/* ========================================================== */}
            {/*  CHAPTER 8 — Connecter Claude a votre stack                */}
            {/* ========================================================== */}
            <section id="ch8" className="scroll-mt-[100px] mb-10">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[13px] font-bold shrink-0">08</div>
                  <div>
                    <p className="text-[10px] text-[#CCC] uppercase tracking-wider">Chapitre 8 &mdash; p. 46-49</p>
                    <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em]">Connecter Claude &agrave; votre stack marketing</h2>
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">MCP expliqu&eacute; simplement</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Imaginez que Claude est un cerveau brillant mais aveugle et sans mains. Il peut raisonner, analyser, r&eacute;diger, mais il ne peut pas voir vos donn&eacute;es ni agir sur vos outils. Le MCP (Model Context Protocol) lui donne des yeux et des mains. C&apos;est un protocole standardis&eacute; qui permet &agrave; Claude de lire des donn&eacute;es depuis vos outils (HubSpot, Gmail, Notion) et d&apos;&eacute;crire des actions (cr&eacute;er une note, mettre &agrave; jour un contact, envoyer un message Slack). Le MCP est open-source, ce qui signifie que n&apos;importe qui peut cr&eacute;er un connecteur pour n&apos;importe quel outil.
                </p>

                {/* MCP servers */}
                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Serveurs MCP disponibles pour le marketing</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    { name: "HubSpot", domain: "hubspot.com", desc: "Lecture/\u00e9criture contacts, deals, emails, notes, workflows" },
                    { name: "Slack", domain: "slack.com", desc: "Envoi de messages, lecture de canaux, alertes automatis\u00e9es" },
                    { name: "Notion", domain: "notion.so", desc: "Cr\u00e9ation de pages, mise \u00e0 jour de bases de donn\u00e9es, documentation" },
                    { name: "Gmail", domain: "gmail.com", desc: "Lecture d\u2019emails, cr\u00e9ation de brouillons, classification" },
                    { name: "Google Drive", domain: "drive.google.com", desc: "Lecture de documents, analyse de fichiers, cr\u00e9ation de rapports" },
                    { name: "GitHub", domain: "github.com", desc: "Gestion de repos, issues, pull requests pour les outils internes" },
                  ].map((s) => (
                    <div key={s.name} className="rounded-lg border border-[#F0F0F0] p-4 flex items-start gap-3">
                      <img src={`https://www.google.com/s2/favicons?domain=${s.domain}&sz=32`} alt={s.name} className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[13px] font-semibold text-[#111]">{s.name}</p>
                        <p className="text-[11px] text-[#777]">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Connecter Claude &agrave; HubSpot via MCP : &eacute;tape par &eacute;tape</h3>
                <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5 mb-6">
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Installer le serveur MCP HubSpot", desc: "Rendez-vous dans les param\u00e8tres Claude Desktop, section MCP. Ajoutez le serveur HubSpot depuis le catalogue ou installez-le manuellement via npm." },
                      { step: "2", title: "Authentifier avec votre compte HubSpot", desc: "Le serveur MCP vous redirige vers HubSpot pour autoriser l\u2019acc\u00e8s. S\u00e9lectionnez les scopes n\u00e9cessaires : contacts, deals, notes, emails." },
                      { step: "3", title: "V\u00e9rifier la connexion", desc: "Dans Claude, demandez : \u00ab Montre-moi les 5 derniers deals cr\u00e9\u00e9s dans HubSpot \u00bb. Si Claude affiche les deals, la connexion fonctionne." },
                      { step: "4", title: "Commencer \u00e0 utiliser", desc: "Demandez \u00e0 Claude d\u2019analyser vos donn\u00e9es, d\u2019enrichir des contacts, de g\u00e9n\u00e9rer des rapports ou de mettre \u00e0 jour des fiches directement depuis la conversation." },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#D4A27F] text-white text-[11px] font-bold flex items-center justify-center shrink-0">{s.step}</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">{s.title}</p>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">3 workflows Make avec l&apos;API Claude</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Make (ex-Integromat) permet de cr&eacute;er des workflows automatis&eacute;s qui int&egrave;grent l&apos;API Claude. Voici trois workflows que nous d&eacute;ployons syst&eacute;matiquement chez nos clients :
                </p>

                <div className="space-y-4 mb-6">
                  <div className="rounded-lg border border-[#F0F0F0] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img src="https://www.google.com/s2/favicons?domain=make.com&sz=32" alt="Make" className="w-5 h-5" />
                      <p className="text-[13px] font-semibold text-[#111]">Workflow 1 : Blog vers r&eacute;seaux sociaux</p>
                    </div>
                    <p className="text-[12px] text-[#777] leading-[1.65]">
                      D&eacute;clencheur : nouveau post WordPress/Webflow publi&eacute;. Action : Claude Sonnet 4 re&ccedil;oit le contenu de l&apos;article et g&eacute;n&egrave;re 3 posts LinkedIn (storytelling, liste, opinion), 1 thread Twitter et 1 teaser newsletter. Les posts sont envoy&eacute;s vers Buffer ou Hootsuite pour planification. R&eacute;sultat : chaque article de blog est amplifi&eacute; sur 3 canaux en 0 minute de travail manuel.
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#F0F0F0] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img src="https://www.google.com/s2/favicons?domain=make.com&sz=32" alt="Make" className="w-5 h-5" />
                      <p className="text-[13px] font-semibold text-[#111]">Workflow 2 : Nouveau deal vers coaching commercial</p>
                    </div>
                    <p className="text-[12px] text-[#777] leading-[1.65]">
                      D&eacute;clencheur : nouveau deal cr&eacute;&eacute; dans HubSpot. Action : Claude analyse le deal (secteur, taille, montant, d&eacute;cisionnaires) et g&eacute;n&egrave;re des conseils de vente personnalis&eacute;s : questions de d&eacute;couverte recommand&eacute;es, objections probables avec r&eacute;ponses, cas clients similaires &agrave; mentionner. Les conseils sont envoy&eacute;s au commercial sur Slack en message priv&eacute;.
                    </p>
                  </div>
                  <div className="rounded-lg border border-[#F0F0F0] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img src="https://www.google.com/s2/favicons?domain=make.com&sz=32" alt="Make" className="w-5 h-5" />
                      <p className="text-[13px] font-semibold text-[#111]">Workflow 3 : Rapport pipeline hebdomadaire</p>
                    </div>
                    <p className="text-[12px] text-[#777] leading-[1.65]">
                      D&eacute;clencheur : chaque lundi &agrave; 7h. Action : Make r&eacute;cup&egrave;re les donn&eacute;es pipeline HubSpot (deals par &eacute;tape, montant total, deals gagn&eacute;s/perdus de la semaine, pr&eacute;vision du mois). Claude Opus 4 analyse les donn&eacute;es et g&eacute;n&egrave;re un rapport narratif avec insights et recommandations. Le rapport est envoy&eacute; au canal #management sur Slack et archiv&eacute; dans Notion.
                    </p>
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">API directe : quand et comment</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  L&apos;API Claude est id&eacute;ale quand vous avez besoin de plus de contr&ocirc;le que ce que Make ou Zapier offrent : traitement en batch de centaines de requ&ecirc;tes, logique conditionnelle complexe, int&eacute;gration dans un outil interne existant. Le pricing est transparent : Sonnet 4 co&ucirc;te 3 dollars par million de tokens en entr&eacute;e et 15 dollars en sortie. Pour une utilisation marketing typique (200 requ&ecirc;tes par jour, 1000 tokens par requ&ecirc;te en moyenne), comptez 15-25 euros par mois. L&apos;API s&apos;appelle avec une simple requ&ecirc;te HTTP, int&eacute;grable dans n&apos;importe quel langage.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Webhooks : d&eacute;clencher Claude sur des &eacute;v&eacute;nements</h3>
                <p className="text-[14px] text-[#555] leading-[1.8]">
                  Les webhooks permettent de d&eacute;clencher Claude automatiquement quand un &eacute;v&eacute;nement se produit dans votre stack. Un formulaire est soumis sur votre site ? Claude analyse le lead et le qualifie en temps r&eacute;el. Un email de r&eacute;ponse arrive ? Claude le classifie et d&eacute;clenche le workflow adapt&eacute;. Un article est publi&eacute; par un concurrent ? Claude l&apos;analyse et vous alerte. La combinaison webhooks + API Claude + Make cr&eacute;e un syst&egrave;me r&eacute;actif qui travaille 24/7 sans intervention humaine.
                </p>
              </div>
            </section>

            <Connector />

            {/* ========================================================== */}
            {/*  CHAPTER 9 — Bibliotheque de 21 prompts                    */}
            {/* ========================================================== */}
            <section id="ch9" className="scroll-mt-[100px] mb-10">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[13px] font-bold shrink-0">09</div>
                  <div>
                    <p className="text-[10px] text-[#CCC] uppercase tracking-wider">Chapitre 9 &mdash; p. 50-53</p>
                    <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em]">Biblioth&egrave;que de 21 prompts marketing</h2>
                  </div>
                </div>

                <p className="text-[14px] text-[#555] leading-[1.8] mb-6">
                  Chaque prompt est pr&ecirc;t &agrave; l&apos;emploi. Remplacez les variables entre crochets par vos donn&eacute;es et lancez. Les prompts sont organis&eacute;s par cat&eacute;gorie pour un acc&egrave;s rapide.
                </p>

                {/* Content Marketing */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-6 rounded-full bg-[#D4A27F]" />
                    <h3 className="text-[16px] font-semibold text-[#111]">Content Marketing (prompts 1-5)</h3>
                  </div>

                  {/* Prompt 1 */}
                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">1. G&eacute;n&eacute;rateur de plan d&apos;article blog</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : expert content strategist B2B.
Sujet : [SUJET]. Mot-cle : [MOT-CLE]. Audience : [ICP].
Genere un plan d'article avec : titre H1 SEO, meta description, 5-7 sections H2 avec 2-3 H3 chacune, les points cles de chaque section, les donnees a integrer, le CTA de fin. Format Markdown.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : plan structur&eacute; en Markdown | Astuce : ajoutez vos 3 derniers articles pour assurer la coh&eacute;rence</p>
                  </div>

                  {/* Prompt 2 */}
                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">2. Cr&eacute;ateur de posts LinkedIn (3 variantes)</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : influenceur LinkedIn B2B avec 50K abonnes.
Sujet : [SUJET]. Ton : [expert/conversationnel]. Audience : [ICP].
Cree 3 posts : A (storytelling), B (liste actionable), C (opinion forte).
Chaque post : moins de 1300 caracteres, hook en premiere ligne, sauts de ligne, 3 hashtags en fin. Pas d'emoji.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : 3 posts pr&ecirc;ts | Astuce : pr&eacute;cisez un exemple de post qui a bien march&eacute; pour calibrer le ton</p>
                  </div>

                  {/* Prompt 3 */}
                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">3. R&eacute;dacteur de newsletter</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : editeur de newsletter B2B (15K abonnes, 42% taux d'ouverture).
Contenus : [LISTE DES CONTENUS DE LA SEMAINE]. Ton : [DESCRIPTION].
Produis : 3 objets, intro editoriale personnelle, chaque contenu resume avec angle + lien, section "chiffre de la semaine", teaser prochain numero. Moins de 500 mots total.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : newsletter compl&egrave;te | Astuce : int&eacute;grez le ton de vos 3 meilleures newsletters</p>
                  </div>

                  {/* Prompt 4 */}
                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">4. Structure de case study</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : storyteller B2B specialise en case studies.
Client : [NOM] dans [SECTEUR], [TAILLE]. Defi : [PROBLEME]. Solution : [CE QUE VOUS AVEZ FAIT]. Resultats : [CHIFFRES].
Ecris une case study avec : titre accrocheur avec resultat chiffre, resume en 3 lignes, contexte client, defi detaille avec impact business, solution deployee (etapes), resultats avec avant/apres chiffre, citation client fictive realiste, CTA.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : case study 800-1200 mots | Astuce : fournissez les verbatims du client si disponibles</p>
                  </div>

                  {/* Prompt 5 */}
                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">5. Optimiseur SEO de meta tags</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : expert SEO technique.
Page : [URL]. Contenu : [COLLER LE CONTENU]. Mot-cle cible : [MOT-CLE].
Produis : 3 title tags (moins de 60 caracteres), 2 meta descriptions (moins de 155 caracteres), structure H1-H2-H3 recommandee, 5 mots-cles LSI a integrer, schema markup JSON-LD recommande.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : meta tags optimis&eacute;s | Astuce : ajoutez les pages concurrentes en top 3 pour mieux cibler</p>
                  </div>
                </div>

                {/* Outbound */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-6 rounded-full bg-[#4B5EFC]" />
                    <h3 className="text-[16px] font-semibold text-[#111]">Outbound (prompts 6-10)</h3>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">6. G&eacute;n&eacute;rateur d&apos;icebreakers LinkedIn</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : SDR senior, 12% de taux de reponse.
Prospect : [NOM], [POSTE] chez [ENTREPRISE]. Dernier post LinkedIn : [RESUME]. Actualite : [ACTU].
Notre offre : [UVP]. Genere 3 icebreakers de 1-2 lignes : 1 base sur le post, 1 sur l'actu, 1 sur un pain point infere. Specifiques, pas generiques.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : 3 icebreakers | Astuce : collez le post LinkedIn complet pour plus de sp&eacute;cificit&eacute;</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">7. Constructeur de s&eacute;quence cold email</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : expert outbound B2B SaaS.
ICP : [DESCRIPTION]. Offre : [UVP]. Preuve sociale : [CAS CLIENT / CHIFFRE].
Cree une sequence de 5 emails avec delai entre chaque : E1 (J0, pain point), E2 (J+3, preuve sociale), E3 (J+7, valeur ajoutee), E4 (J+12, urgence), E5 (J+18, break-up). Chaque email : objet + corps (moins de 100 mots) + CTA unique.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : s&eacute;quence compl&egrave;te | Astuce : fournissez vos meilleurs emails pass&eacute;s comme r&eacute;f&eacute;rence</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">8. G&eacute;n&eacute;rateur de variantes d&apos;objet A/B</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : expert en taux d'ouverture email (moyenne 38%).
Email : [COLLER L'EMAIL]. Audience : [SEGMENT].
Genere 5 variantes d'objet, chacune avec un angle different : curiosite, benefice, social proof, minimaliste, question. Pour chaque : l'objet (moins de 50 caracteres), le principe psychologique, pourquoi ca fonctionne.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : 5 variantes argument&eacute;es | Astuce : pr&eacute;cisez votre taux d&apos;ouverture actuel</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">9. Cat&eacute;goriseur de r&eacute;ponses</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : analyste commercial.
Voici une reponse a un email de prospection :
"[COLLER LA REPONSE]"
Classifie cette reponse dans une categorie : INTERESSE (pret pour un call), PAS_MAINTENANT (a recontacter dans X mois), MAUVAIS_INTERLOCUTEUR (demander redirection), OBJECTION (identifier et proposer reponse), NEGATIF (retirer de la liste).
Produis : categorie, confiance (%), action recommandee, reponse suggeree si pertinent.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Haiku 3.5 (volume) | Sortie : classification structur&eacute;e | Astuce : id&eacute;al en batch via l&apos;API</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">10. R&eacute;dacteur d&apos;email de follow-up</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : AE senior B2B.
Contexte du deal : [RESUME DU DEAL]. Dernier echange : [RESUME]. Action convenue : [ACTION].
Redige un email de follow-up qui : rappelle le contexte en 1 phrase, mentionne l'action convenue, apporte une valeur additionnelle (insight, ressource, cas client similaire), propose un prochain pas clair. Ton professionnel mais humain. Moins de 120 mots.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : email pr&ecirc;t &agrave; envoyer | Astuce : fournissez les notes du call pour plus de contexte</p>
                  </div>
                </div>

                {/* CRM/Ops */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-6 rounded-full bg-[#22C55E]" />
                    <h3 className="text-[16px] font-semibold text-[#111]">CRM &amp; Ops (prompts 11-15)</h3>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">11. Enrichissement de contact</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : analyste de donnees B2B.
Contact : [NOM] chez [ENTREPRISE].
A partir de ces informations, infere et structure : secteur d'activite, taille estimee de l'entreprise, tech stack probable, pain points probables bases sur le poste et le secteur, budget decision-making level, timing d'achat probable. Indique ton niveau de confiance pour chaque inference (eleve/moyen/faible).`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : fiche enrichie structur&eacute;e | Astuce : ajoutez l&apos;URL LinkedIn pour plus de pr&eacute;cision</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">12. Analyseur de risque deal</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : VP Sales avec 15 ans d'experience.
Deal : [NOM], [MONTANT], [ETAPE], [JOURS DANS L'ETAPE], [NOMBRE DE TOUCHPOINTS], [DECISIONNAIRES IDENTIFIES], [PROCHAINE ETAPE PREVUE], [NOTES RECENTES].
Evalue le risque de ce deal : score de risque (/10), signaux positifs, signaux negatifs, actions pour debloquer, probabilite de cloture estimee, recommandation (accelerer / maintenir / desengager).`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Opus 4 | Sortie : analyse de risque compl&egrave;te | Astuce : fournissez le pattern de vos deals gagn&eacute;s pour calibrer</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">13. Structureur de r&eacute;sum&eacute; de call</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : assistant commercial senior.
Transcription du call : [COLLER LA TRANSCRIPTION].
Structure le resume avec : participants et roles, contexte du call (1 ligne), points cles discutes (bullet points), objections identifiees (avec reponses donnees), signaux d'achat detectes, prochaines etapes convenues (avec responsable et deadline), risques pour le deal, note pour le CRM (5 lignes max).`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : r&eacute;sum&eacute; structur&eacute; pour CRM | Astuce : pr&eacute;cisez le nom de votre produit pour filtrer le bruit</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">14. Auditeur de qualit&eacute; donn&eacute;es CRM</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : Data Quality Manager.
Voici un export de [X] contacts CRM : [COLLER OU DECRIRE LES DONNEES].
Identifie : doublons probables (meme personne, variantes de nom/email), champs vides critiques (email, entreprise, poste), formats non standardises (telephones, noms d'entreprise), donnees potentiellement obsoletes. Produis un rapport avec : nombre de problemes par categorie, exemples, recommandations de nettoyage, priorites.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : rapport d&apos;audit structur&eacute; | Astuce : exportez un &eacute;chantillon de 100 contacts pour commencer</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">15. G&eacute;n&eacute;rateur de rapport hebdomadaire</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : CMO qui reporte au CEO.
KPIs de la semaine : [COLLER LES CHIFFRES]. Semaine precedente : [CHIFFRES].
Objectifs du mois : [OBJECTIFS].
Genere un rapport en 5 sections : resume executif (3 bullets), KPIs avec evolution (tableau), victoires de la semaine, points d'attention, priorites de la semaine prochaine. Ton : concis, factuel, oriente action. Moins de 400 mots.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : rapport ex&eacute;cutif | Astuce : automatisez via Make pour un envoi Slack chaque lundi</p>
                  </div>
                </div>

                {/* Analytics */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-6 rounded-full bg-[#FF7A59]" />
                    <h3 className="text-[16px] font-semibold text-[#111]">Analytics (prompts 16-18)</h3>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">16. Analyseur de KPIs marketing</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : Head of Growth B2B SaaS.
KPIs du mois : trafic [X], MQL [X], SQL [X], opportunities [X], deals clotures [X], revenu [X], CAC [X], LTV [X].
Mois precedent : [MEMES METRIQUES].
Analyse : taux de conversion entre chaque etape, comparaison M-1, identification du goulot d'etranglement principal, 3 hypotheses pour expliquer les variations, 3 actions pour le mois prochain.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Opus 4 | Sortie : analyse funnel compl&egrave;te | Astuce : ajoutez les benchmarks de votre secteur</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">17. Calculateur de ROI campagne</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : analyste marketing ROI.
Campagne : [NOM]. Budget : [MONTANT]. Duree : [PERIODE]. Resultats : impressions [X], clics [X], leads [X], MQL [X], SQL [X], deals clotures [X], revenu genere [X].
Calcule et analyse : CPC, CPL, CPA, ROAS, ROI net, LTV/CAC ratio, payback period. Compare aux benchmarks B2B. Verdict : campagne a scaler / optimiser / stopper. Recommandations specifiques.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : analyse ROI compl&egrave;te | Astuce : int&eacute;grez les co&ucirc;ts indirects (temps &eacute;quipe, outils)</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">18. Analyseur de positionnement concurrentiel</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : consultant en strategie de marque.
Notre positionnement : [DESCRIPTION]. Nos concurrents : [NOM 1 : positionnement], [NOM 2 : positionnement], [NOM 3 : positionnement].
Notre ICP : [DESCRIPTION].
Analyse : carte de positionnement (2 axes a definir), white spaces non couverts, overlaps a eviter, messages differenciants (3 propositions), risques de perception, recommandations strategiques (5 points).`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Opus 4 | Sortie : analyse de positionnement | Astuce : fournissez les taglines et pages d&apos;accueil concurrentes</p>
                  </div>
                </div>

                {/* Strategy */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-6 rounded-full bg-[#6D00CC]" />
                    <h3 className="text-[16px] font-semibold text-[#111]">Strat&eacute;gie (prompts 19-21)</h3>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">19. D&eacute;finisseur d&apos;ICP</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : consultant go-to-market B2B.
Notre produit : [DESCRIPTION]. Nos 10 meilleurs clients : [LISTE avec secteur, taille, use case].
Identifie : les patterns communs (secteur, taille, maturite, trigger d'achat), l'ICP ideal (profil entreprise + profil acheteur), les criteres de qualification (must-have vs nice-to-have), les canaux d'acquisition les plus probables, les messages qui resonnent, les 3 anti-personas (clients a eviter et pourquoi).`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Opus 4 | Sortie : ICP structur&eacute; complet | Astuce : incluez aussi vos pires clients pour affiner les anti-personas</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4 mb-3">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">20. Planificateur de calendrier de contenu</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : Head of Content B2B.
Themes Q2 : [LISTE]. Canaux : [LISTE]. Frequence : [OBJECTIFS]. ICP : [DESCRIPTION]. Evenements : [DATES CLES].
Produis un calendrier 12 semaines avec : theme de la semaine, 2-3 contenus par semaine (titre, format, canal, objectif), contenus piliers vs satellites, plan de reutilisation cross-canal, metriques de succes. Format : tableau semaine par semaine.`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Sonnet 4 | Sortie : calendrier 3 mois | Astuce : fournissez les performances de vos contenus pr&eacute;c&eacute;dents</p>
                  </div>

                  <div className="rounded-lg border border-[#F0F0F0] p-4">
                    <p className="text-[13px] font-semibold text-[#111] mb-2">21. Reviewer de strat&eacute;gie go-to-market</p>
                    <div className="rounded-lg bg-[#1A1A2E] p-3 text-[11px] text-[#E0E0E0] font-mono leading-[1.7] overflow-x-auto mb-2">
                      <pre className="whitespace-pre-wrap">{`Role : board advisor avec 20 ans d'experience en GTM B2B.
Notre strategie GTM : [COLLER LE DOCUMENT OU RESUME].
Marche cible : [DESCRIPTION]. Budget : [FOURCHETTE]. Timeline : [DEADLINE].
Review critique : points forts de la strategie, faiblesses et angles morts, risques non adresses, hypotheses non validees, 5 questions que le board poserait, recommandations (garder / modifier / ajouter), priorites d'execution (les 3 premieres actions).`}</pre>
                    </div>
                    <p className="text-[11px] text-[#999]">Mod&egrave;le : Opus 4 | Sortie : review strat&eacute;gique compl&egrave;te | Astuce : id&eacute;al avec le contexte 200K tokens, collez le document complet</p>
                  </div>
                </div>
              </div>
            </section>

            <Connector />

            {/* ========================================================== */}
            {/*  CHAPTER 10 — Le futur du marketing IA                     */}
            {/* ========================================================== */}
            <section id="ch10" className="scroll-mt-[100px] mb-10">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[13px] font-bold shrink-0">10</div>
                  <div>
                    <p className="text-[10px] text-[#CCC] uppercase tracking-wider">Chapitre 10 &mdash; p. 54-55</p>
                    <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em]">Le futur du marketing IA</h2>
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Agents autonomes : l&apos;IA qui ex&eacute;cute sans intervention</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Nous passons du mod&egrave;le &laquo; l&apos;humain prompte, l&apos;IA r&eacute;pond &raquo; au mod&egrave;le &laquo; l&apos;humain d&eacute;finit l&apos;objectif, l&apos;IA ex&eacute;cute le workflow complet &raquo;. Les agents autonomes sont des instances Claude qui ex&eacute;cutent des cha&icirc;nes de t&acirc;ches sans intervention humaine. Un agent de prospection peut : identifier des prospects, les enrichir, g&eacute;n&eacute;rer des emails personnalis&eacute;s, les envoyer, classifier les r&eacute;ponses et escalader les int&eacute;ress&eacute;s aux commerciaux. Un agent de contenu peut : analyser la performance, identifier les sujets porteurs, g&eacute;n&eacute;rer les briefs, r&eacute;diger les brouillons et les soumettre &agrave; validation. Le r&ocirc;le du marketeur &eacute;volue de l&apos;ex&eacute;cution vers la supervision et la strat&eacute;gie.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Coworkers IA : Claude comme membre de l&apos;&eacute;quipe</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  La prochaine &eacute;tape est le coworker IA : un Claude avec une m&eacute;moire persistante, un contexte d&apos;&eacute;quipe et un acc&egrave;s &agrave; tous les outils. Il conna&icirc;t votre strat&eacute;gie, votre historique, vos pr&eacute;f&eacute;rences, vos clients. Vous ne lui expliquez plus le contexte &agrave; chaque conversation : il le sait d&eacute;j&agrave;. Imaginez un assistant marketing qui a lu chacun de vos 200 articles, conna&icirc;t chaque deal dans votre pipeline, se souvient de chaque d&eacute;cision strat&eacute;gique prise en comit&eacute;, et qui est disponible 24/7 pour analyser, r&eacute;diger et recommander. C&apos;est ce que les coworkers IA promettent dans les 12-18 prochains mois.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Impact sur les m&eacute;tiers du marketing</h3>
                <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                  Ce qui change : les t&acirc;ches r&eacute;p&eacute;titives (r&eacute;daction de premier jet, reporting, enrichissement, classification) seront quasi-enti&egrave;rement automatis&eacute;es. Ce qui reste : la strat&eacute;gie, la cr&eacute;ativit&eacute; de haut niveau, les relations humaines, le jugement &eacute;ditorial, la gestion de marque. Ce qui appara&icirc;t : de nouvelles comp&eacute;tences deviennent essentielles. Le prompt engineering (savoir communiquer efficacement avec l&apos;IA), le workflow design (savoir orchestrer des agents), le data literacy (savoir lire et exploiter les donn&eacute;es) et l&apos;AI governance (savoir mettre des garde-fous) deviennent les comp&eacute;tences cl&eacute;s du marketeur B2B de 2027.
                </p>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Ce que Ceres d&eacute;ploie aujourd&apos;hui qui sera standard dans 2 ans</h3>
                <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5 mb-6">
                  <div className="space-y-3">
                    {[
                      { item: "Enrichissement IA syst\u00e9matique de chaque nouveau contact CRM", status: "En production" },
                      { item: "R\u00e9sum\u00e9s de calls automatiques post\u00e9s dans HubSpot", status: "En production" },
                      { item: "G\u00e9n\u00e9ration de contenus multi-canal par prompt chaining", status: "En production" },
                      { item: "Scoring de leads calibr\u00e9 par IA sur donn\u00e9es historiques", status: "En production" },
                      { item: "Reporting automatis\u00e9 hebdomadaire via Claude + Make + Slack", status: "En production" },
                      { item: "Agent de veille concurrentielle autonome", status: "En b\u00eata" },
                      { item: "Coworker IA avec m\u00e9moire persistante pour chaque client", status: "En d\u00e9veloppement" },
                    ].map((row) => (
                      <div key={row.item} className="flex items-center justify-between text-[12px]">
                        <span className="text-[#555]">{row.item}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                          row.status === "En production" ? "bg-[#22C55E]/10 text-[#22C55E]" :
                          row.status === "En b\u00eata" ? "bg-[#4B5EFC]/10 text-[#4B5EFC]" :
                          "bg-[#D4A27F]/10 text-[#D4A27F]"
                        }`}>{row.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold text-[#111] mb-3">Comment se pr&eacute;parer : la feuille de route en 4 &eacute;tapes</h3>
                <div className="rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5 mb-6">
                  <div className="space-y-4">
                    {[
                      { step: "1", title: "Commencer petit", desc: "Choisissez un cas d\u2019usage du chapitre 3, le plus simple pour votre \u00e9quipe. Ma\u00eetrisez-le compl\u00e8tement avant de passer au suivant. Un article de blog par semaine avec Claude est un excellent point de d\u00e9part." },
                      { step: "2", title: "Mesurer syst\u00e9matiquement", desc: "Documentez le temps avant/apr\u00e8s, la qualit\u00e9 avant/apr\u00e8s, le co\u00fbt. Sans mesure, vous ne pouvez pas justifier l\u2019investissement ni identifier ce qui fonctionne. Cr\u00e9ez un tableau simple : t\u00e2che, temps manuel, temps avec Claude, qualit\u00e9 percue." },
                      { step: "3", title: "It\u00e9rer et automatiser", desc: "Une fois un cas d\u2019usage ma\u00eetris\u00e9 manuellement, automatisez-le. Transformez vos meilleurs prompts en workflows Make. Construisez vos outils avec Claude Code. Chaque automatisation lib\u00e8re du temps pour le cas d\u2019usage suivant." },
                      { step: "4", title: "Institutionnaliser", desc: "Cr\u00e9ez une biblioth\u00e8que de prompts d\u2019\u00e9quipe, documentez les workflows, formez chaque nouveau membre. L\u2019avantage comp\u00e9titif n\u2019est pas d\u2019utiliser Claude, c\u2019est d\u2019avoir une organisation qui utilise Claude de mani\u00e8re syst\u00e9matique et am\u00e9lior\u00e9e en continu." },
                    ].map((s) => (
                      <div key={s.step} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#D4A27F] text-white text-[11px] font-bold flex items-center justify-center shrink-0">{s.step}</div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">{s.title}</p>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl bg-[#1A1A2E] p-5">
                  <p className="text-[16px] font-semibold text-white mb-3">L&apos;avance se prend maintenant</p>
                  <p className="text-[14px] text-[#CCC] leading-[1.8] mb-4">
                    Les entreprises qui int&egrave;grent Claude dans leur marketing aujourd&apos;hui auront 2 ans d&apos;avance sur celles qui attendront. Ce n&apos;est pas une question de technologie : c&apos;est une question de culture, de processus et de savoir-faire accumul&eacute;. Chaque prompt optimis&eacute;, chaque workflow automatis&eacute;, chaque outil construit avec Claude Code constitue un actif comp&eacute;titif que vos concurrents ne pourront pas rattraper en achetant simplement un abonnement Claude dans 2 ans. L&apos;avance n&apos;est pas dans l&apos;outil. Elle est dans la ma&icirc;trise de l&apos;outil.
                  </p>
                </div>
              </div>
            </section>

            <Connector />

            {/* ========================================================== */}
            {/*  CTA final                                                 */}
            {/* ========================================================== */}
            <section className="mb-10">
              <div className="rounded-2xl bg-[#1A1A2E] p-6 md:p-10 text-center">
                <p className="text-[10px] font-semibold text-[#D4A27F] uppercase tracking-wider mb-3">Et maintenant ?</p>
                <h2 className="text-[24px] sm:text-[32px] font-semibold text-white tracking-[-0.02em] mb-4">
                  Pr&ecirc;t &agrave; d&eacute;ployer Claude dans votre marketing ?
                </h2>
                <p className="text-[15px] text-[#AAA] leading-[1.7] max-w-[520px] mx-auto mb-6">
                  Ceres accompagne les entreprises B2B dans l&apos;int&eacute;gration de Claude et Claude Code dans leur stack marketing. De l&apos;audit initial &agrave; la mise en production d&apos;agents autonomes.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4A27F] text-white text-[14px] font-semibold hover:bg-[#C4926F] transition-colors"
                  >
                    Discuter avec un expert Ceres
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M6 4l4 4-4 4" /></svg>
                  </Link>
                  <Link
                    href="/guide-claude-marketing"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#444] text-[#CCC] text-[14px] font-medium hover:border-[#888] hover:text-white transition-colors"
                  >
                    Retour au guide
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
