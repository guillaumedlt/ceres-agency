"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Clay : le guide complet de l'enrichissement de donnees B2B",
  description: "Guide complet Clay : waterfall enrichment, 75+ data providers, AI columns, integration HubSpot, 5 use cases concrets, pricing et comparatif Apollo/Clearbit/Dropcontact.",
  author: { "@type": "Person", name: "Guillaume Delachet" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/clay-enrichissement-donnees-b2b-guide" },
  articleSection: "Process & Outils",
  wordCount: 4100,
  inLanguage: "fr",
};

const sections = [
  { id: "quest-ce-que-clay", title: "Qu'est-ce que Clay" },
  { id: "waterfall-enrichment", title: "Waterfall enrichment" },
  { id: "getting-started", title: "Bien demarrer avec Clay" },
  { id: "data-sources", title: "Sources de donnees" },
  { id: "ai-columns", title: "Colonnes IA" },
  { id: "hubspot-integration", title: "Integration HubSpot" },
  { id: "use-cases", title: "5 use cases concrets" },
  { id: "pricing", title: "Pricing" },
  { id: "alternatives", title: "Clay vs alternatives" },
  { id: "tips-tricks", title: "Tips et bonnes pratiques" },
  { id: "methodologie", title: "Notre methodologie" },
];

const relatedArticles = [
  { title: "Comparatif outils de generation de leads et enrichissement", slug: "comparatif-outils-generation-leads-enrichissement", category: "Process & Outils", color: "#6C5CE7" },
  { title: "Data quality CRM : audit et nettoyage en 5 etapes", slug: "data-quality-crm-audit-nettoyage", category: "Data & Reporting", color: "#22C55E" },
  { title: "Lemlist : notre test complet de l'outil de prospection", slug: "lemlist-test-complet-outil-prospection", category: "Process & Outils", color: "#6C5CE7" },
];

export default function ClayEnrichissementArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("quest-ce-que-clay");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));

      const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "4%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "14%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "55%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${
                      activeSection === s.id
                        ? "border-[#4B5EFC] text-[#111] font-medium"
                        : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"
                    }`}
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-[#F2F2F2]">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Partager</p>
                <div className="flex gap-2">
                  <a href="https://twitter.com/intent/tweet?text=Clay%20guide%20enrichissement%20donnees%20B2B&url=https://ceres.agency/blog/clay-enrichissement-donnees-b2b-guide" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/clay-enrichissement-donnees-b2b-guide" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Article */}
          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span>
              <span className="text-[#666]">Clay enrichissement B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Process &amp; Outils</Badge>
                <span className="text-[11px] text-[#CCC]">20 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Clay : le guide complet de l&apos;enrichissement de donnees B2B
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Clay a revolutionne l&apos;enrichissement de donnees B2B en introduisant le concept de waterfall enrichment : interroger 75+ fournisseurs de donnees en cascade pour maximiser la couverture et la qualite. Nous utilisons Clay quotidiennement chez Ceres pour l&apos;enrichissement, le scoring et la personnalisation des campagnes outbound de nos clients. Voici le guide complet, du concept aux use cases avances.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>31 mars 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 - Qu'est-ce que Clay */}
              <section id="quest-ce-que-clay" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=clay.com&sz=32" alt="Clay" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Qu&apos;est-ce que Clay ?</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Clay est une plateforme d&apos;enrichissement de donnees B2B fondee en 2021 a New York. Son concept fondamental est simple mais revolutionnaire : au lieu d&apos;utiliser un seul fournisseur de donnees (comme Clearbit, Apollo ou Lusha), Clay interroge plus de 75 fournisseurs en cascade (waterfall) pour trouver la meilleure donnee disponible pour chaque champ, pour chaque contact.</p>
                    <p>L&apos;interface ressemble a un spreadsheet (comme Airtable ou Google Sheets), mais chaque colonne peut etre enrichie automatiquement par des providers externes, des colonnes IA (GPT-4, Claude), des formules et des integrations. C&apos;est un outil de data ops qui se situe entre le CRM, l&apos;enrichissement et l&apos;automatisation.</p>
                    <p><strong className="text-[#111]">Pourquoi Clay change la donne.</strong> Avant Clay, enrichir une base de contacts B2B impliquait de souscrire a 3-5 outils differents (Clearbit pour les donnees firmographiques, Lusha pour les numeros de telephone, Hunter pour les emails, etc.), de croiser les donnees manuellement et d&apos;accepter un taux de couverture de 50-60%. Avec Clay, un seul outil interroge tous ces providers, compare les resultats et vous donne la meilleure donnee disponible avec un taux de couverture de 85-95%.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "75+", label: "fournisseurs de donnees integres", color: "#4B5EFC" },
                      { stat: "85-95%", label: "taux de couverture email (waterfall)", color: "#22C55E" },
                      { stat: "300K+", label: "utilisateurs dans le monde", color: "#6C5CE7" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[22px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 - Waterfall enrichment */}
              <section id="waterfall-enrichment" className="mb-8">
                <div className="rounded-2xl bg-[#111] text-white p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold mb-4">Le waterfall enrichment explique</h2>
                  <div className="space-y-3 text-[13px] text-[#CCC] leading-[1.75] mb-5">
                    <p>Le waterfall enrichment est le concept central de Clay. C&apos;est ce qui le differencie fondamentalement de tous les autres outils d&apos;enrichissement du marche.</p>
                    <p><strong className="text-white">Le probleme des outils classiques.</strong> Quand vous utilisez un seul provider (Apollo, Clearbit, Lusha), vous etes limite a leur base de donnees. Si Apollo n&apos;a pas l&apos;email de votre prospect, vous obtenez un &ldquo;not found&rdquo;. Resultat : un taux de couverture de 40-60% selon le provider et la geographie de votre cible.</p>
                    <p><strong className="text-white">La solution waterfall.</strong> Clay interroge les providers en cascade. Pour trouver l&apos;email d&apos;un contact, il commence par le Provider A. S&apos;il trouve un resultat, parfait. Sinon, il passe au Provider B, puis C, puis D, jusqu&apos;a trouver un email valide. Chaque provider a ses forces (Apollo est fort sur les US, Dropcontact sur la France, Hunter sur les emails generiques). En les combinant, le taux de couverture passe de 50% a 85-95%.</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { step: "1", provider: "Dropcontact", result: "Email trouve : 45% des cas", color: "#22C55E" },
                      { step: "2", provider: "Apollo.io", result: "Email trouve : +25% supplementaires", color: "#4B5EFC" },
                      { step: "3", provider: "Hunter.io", result: "Email trouve : +10% supplementaires", color: "#6C5CE7" },
                      { step: "4", provider: "Lusha / RocketReach", result: "Email trouve : +8% supplementaires", color: "#FF7A59" },
                      { step: "5", provider: "Scraping + IA", result: "Email trouve : +5% supplementaires", color: "#EAB308" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                        <span className="text-[14px] font-bold w-[24px] shrink-0 text-center" style={{ color: item.color }}>{item.step}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-[12px] text-white font-medium">{item.provider}</p>
                          <p className="text-[10px] text-[#888]">{item.result}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl bg-white/5 p-4 text-center">
                    <p className="text-[20px] font-bold text-[#22C55E] mb-1">= 93% de couverture totale</p>
                    <p className="text-[11px] text-[#888]">vs 45% avec un seul provider</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 - Getting started */}
              <section id="getting-started" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Bien demarrer avec Clay</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Clay fonctionne comme un spreadsheet intelligent. Voici les concepts fondamentaux a maitriser.</p>
                    <p><strong className="text-[#111]">Tables.</strong> Chaque table Clay est un ensemble de lignes (contacts, entreprises, leads) et de colonnes (proprietes). Vous importez des donnees depuis un CSV, une integration CRM, LinkedIn Sales Navigator, ou un scraping web. Chaque ligne represente un enregistrement a enrichir.</p>
                    <p><strong className="text-[#111]">Colonnes d&apos;enrichissement.</strong> C&apos;est la magie de Clay. Ajoutez une colonne &ldquo;Email professionnel&rdquo; et selectionnez les providers a utiliser en waterfall. Clay interroge chaque provider dans l&apos;ordre que vous definissez et renvoie le premier resultat valide. Vous pouvez faire la meme chose pour le numero de telephone, le poste, l&apos;entreprise, les technologies utilisees, la levee de fonds recente, etc.</p>
                    <p><strong className="text-[#111]">Colonnes IA.</strong> Les colonnes IA utilisent GPT-4o ou Claude pour generer du contenu a partir des donnees enrichies. Exemple : une colonne IA qui ecrit une premiere ligne de cold email personnalisee en se basant sur le profil LinkedIn, le poste et les actualites de l&apos;entreprise. C&apos;est la personnalisation a grande echelle automatisee.</p>
                    <p><strong className="text-[#111]">Formules.</strong> Comme dans un spreadsheet, vous pouvez creer des colonnes calculees. Utile pour le scoring (IF technologies inclut HubSpot AND taille entre 20 et 200, THEN score = high) ou pour formater des donnees avant export.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 - Data sources */}
              <section id="data-sources" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 75+ sources de donnees</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Clay integre plus de 75 fournisseurs de donnees, organises par categorie. Voici les principaux que nous utilisons quotidiennement.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { cat: "Emails professionnels", providers: [
                        { name: "Dropcontact", domain: "dropcontact.com", note: "Meilleur pour la France, RGPD compliant" },
                        { name: "Apollo.io", domain: "apollo.io", note: "Base massive, fort sur les US" },
                        { name: "Hunter.io", domain: "hunter.io", note: "Email pattern detection" },
                        { name: "RocketReach", domain: "rocketreach.co", note: "Bonne couverture globale" },
                      ]},
                      { cat: "Donnees firmographiques", providers: [
                        { name: "Clearbit", domain: "clearbit.com", note: "Reference pour le firmographic" },
                        { name: "Crunchbase", domain: "crunchbase.com", note: "Levees de fonds, investisseurs" },
                        { name: "BuiltWith", domain: "builtwith.com", note: "Stack technologique" },
                        { name: "SimilarWeb", domain: "similarweb.com", note: "Trafic web, analytics" },
                      ]},
                      { cat: "Numeros de telephone", providers: [
                        { name: "Lusha", domain: "lusha.com", note: "Direct dials, mobiles" },
                        { name: "Kaspr", domain: "kaspr.io", note: "Bon pour l'Europe" },
                        { name: "Cognism", domain: "cognism.com", note: "Mobiles verifies" },
                      ]},
                      { cat: "Donnees sociales", providers: [
                        { name: "LinkedIn (Proxycurl)", domain: "proxycurl.com", note: "Profils LinkedIn enrichis" },
                        { name: "Twitter API", domain: "twitter.com", note: "Bio, followers, tweets" },
                        { name: "GitHub", domain: "github.com", note: "Pour les profils tech" },
                      ]},
                    ].map((group) => (
                      <div key={group.cat} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[12px] font-semibold text-[#111] mb-3">{group.cat}</p>
                        <div className="space-y-2">
                          {group.providers.map((p) => (
                            <div key={p.name} className="flex items-start gap-2">
                              <img src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=32`} alt={p.name} className="w-4 h-4 mt-0.5" />
                              <div>
                                <p className="text-[11px] font-medium text-[#111]">{p.name}</p>
                                <p className="text-[10px] text-[#999]">{p.note}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 - AI columns */}
              <section id="ai-columns" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Colonnes IA : la personnalisation a grande echelle</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les colonnes IA sont la fonctionnalite qui rend Clay unique pour la prospection outbound. Elles utilisent GPT-4o ou Claude pour generer du contenu personnalise pour chaque ligne de votre table, en se basant sur les donnees enrichies des autres colonnes.</p>
                    <p><strong className="text-[#111]">Use case 1 : Premiere ligne de cold email.</strong> Prompt : &ldquo;Ecris une premiere ligne de cold email personnalisee pour &#123;&#123;prenom&#125;&#125;, &#123;&#123;titre&#125;&#125; chez &#123;&#123;entreprise&#125;&#125;. Utilise cette info pour personnaliser : &#123;&#123;linkedin_summary&#125;&#125;. La phrase doit etre courte (15 mots max), specifique et montrer que tu as fait tes recherches.&rdquo; Resultat : chaque prospect recoit une premiere ligne unique et pertinente.</p>
                    <p><strong className="text-[#111]">Use case 2 : Qualification ICP.</strong> Prompt : &ldquo;En te basant sur ces informations (&#123;&#123;taille&#125;&#125;, &#123;&#123;secteur&#125;&#125;, &#123;&#123;technologies&#125;&#125;, &#123;&#123;levee_de_fonds&#125;&#125;), evalue si cette entreprise correspond a notre ICP. Reponds par HIGH, MEDIUM ou LOW avec une justification en une phrase.&rdquo; Resultat : un scoring automatise et explique pour chaque prospect.</p>
                    <p><strong className="text-[#111]">Use case 3 : Recherche concurrentielle.</strong> Prompt : &ldquo;Analyse le site web &#123;&#123;url_site&#125;&#125; et identifie les solutions CRM/marketing mentionnees. Reponds avec une liste des outils detectes.&rdquo; Resultat : une colonne qui identifie automatiquement la stack tech de chaque prospect.</p>
                  </div>
                  <div className="mt-5 rounded-xl border border-[#F2F2F2] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">Bonnes pratiques pour les prompts Clay</p>
                    <ul className="space-y-1.5">
                      {[
                        "Soyez specifique : donnez des exemples de sortie attendue dans votre prompt",
                        "Limitez la longueur : 'Reponds en 1 phrase de 15 mots maximum'",
                        "Utilisez des guardrails : 'Si tu n'as pas assez d'information, reponds N/A'",
                        "Testez sur 10 lignes avant de lancer sur toute la table",
                        "Combinez plusieurs colonnes enrichies comme input du prompt IA",
                      ].map((tip) => (
                        <li key={tip} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 - HubSpot integration */}
              <section id="hubspot-integration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=clay.com&sz=32" alt="Clay" className="w-5 h-5" />
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Integration Clay x HubSpot</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;integration Clay-HubSpot est un des workflows les plus puissants que nous deploions chez nos clients. Elle permet de creer un pipeline d&apos;enrichissement continu entre Clay et votre CRM.</p>
                    <p><strong className="text-[#111]">Sens 1 : HubSpot vers Clay (enrichissement CRM).</strong> Importez vos contacts HubSpot dans Clay via l&apos;integration native. Enrichissez-les avec les 75+ providers (email pro, telephone, technologie, levee de fonds, etc.). Renvoyez les donnees enrichies dans HubSpot en mettant a jour les proprietes correspondantes. Resultat : une base CRM propre et complete sans travail manuel.</p>
                    <p><strong className="text-[#111]">Sens 2 : Clay vers HubSpot (creation de leads).</strong> Construisez vos listes de prospection dans Clay (import LinkedIn Sales Navigator, scraping web, etc.). Enrichissez chaque contact. Qualifiez avec les colonnes IA (ICP score, premiere ligne de cold email). Poussez les contacts qualifies directement dans HubSpot avec toutes les proprietes mappees. Resultat : des leads pre-qualifies et enrichis qui arrivent dans votre CRM prets a etre contactes.</p>
                    <p><strong className="text-[#111]">Sens 3 : Enrichissement en temps reel (webhook).</strong> Configurez un webhook HubSpot qui envoie chaque nouveau contact a Clay pour enrichissement automatique. Clay enrichit le contact et renvoie les donnees a HubSpot via l&apos;API. Resultat : chaque nouveau lead est enrichi en quelques minutes sans intervention humaine.</p>
                  </div>
                  <div className="mt-5 space-y-2">
                    {[
                      { step: "1", desc: "Connectez votre compte HubSpot dans Clay (OAuth)", time: "2 min" },
                      { step: "2", desc: "Importez une liste de contacts depuis HubSpot ou une liste active", time: "1 min" },
                      { step: "3", desc: "Ajoutez vos colonnes d'enrichissement (email, phone, firmographic)", time: "5 min" },
                      { step: "4", desc: "Lancez l'enrichissement waterfall sur toute la table", time: "Variable" },
                      { step: "5", desc: "Mappez les colonnes Clay aux proprietes HubSpot", time: "3 min" },
                      { step: "6", desc: "Poussez les donnees enrichies vers HubSpot (update ou create)", time: "1 min" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-center gap-3 rounded-xl border border-[#F2F2F2] p-3">
                        <span className="text-[11px] font-bold text-[#4B5EFC] bg-[#4B5EFC]/10 px-2 py-1 rounded">{item.step}</span>
                        <p className="text-[12px] text-[#555] flex-1">{item.desc}</p>
                        <span className="text-[10px] text-[#999] shrink-0">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 - Use cases */}
              <section id="use-cases" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">5 use cases concrets</h2>
                  <div className="space-y-4">
                    {[
                      { num: "01", title: "Enrichissement ICP et construction de listes", desc: "Importez 500 profils LinkedIn Sales Navigator dans Clay. Enrichissez avec email, telephone, technologie, taille, levee de fonds. Filtrez par ICP score (colonne IA). Poussez les 200 prospects qualifies dans HubSpot + Lemlist. Resultat : des listes hyper-ciblees en 30 minutes au lieu de 2 jours.", color: "#4B5EFC" },
                      { num: "02", title: "Lead scoring automatise", desc: "Creez une table Clay avec vos criteres ICP. Pour chaque nouveau lead entrant (via webhook HubSpot), Clay enrichit automatiquement les donnees firmographiques, verifie la stack technologique, detecte les signaux d'achat (levee de fonds, recrutement). Une colonne IA calcule un score et une justification. Le score est pousse dans HubSpot pour le routing automatique.", color: "#22C55E" },
                      { num: "03", title: "Recherche de comptes ABM", desc: "Pour une campagne ABM, importez votre liste de 50 comptes cibles. Clay enrichit chaque compte avec : decision makers (LinkedIn), technologies utilisees, actualites recentes, concurrents, taille et croissance. Une colonne IA genere un brief de compte personnalise pour chaque commercial. Le brief est pousse dans la fiche entreprise HubSpot.", color: "#6C5CE7" },
                      { num: "04", title: "Nettoyage et deduplication CRM", desc: "Exportez votre base HubSpot complete dans Clay. Utilisez les colonnes d'enrichissement pour verifier et mettre a jour les emails (catch-all detection, verification), les titres de poste et les donnees entreprise. Identifiez les doublons avec des colonnes de matching. Renvoyez les donnees propres dans HubSpot. Resultat : un CRM fiable et a jour.", color: "#FF7A59" },
                      { num: "05", title: "Personnalisation de campagnes outbound a grande echelle", desc: "Pour chaque prospect de votre campagne, Clay genere : une premiere ligne personnalisee (basee sur LinkedIn), un angle de pitch personnalise (basee sur la stack tech et les defis du secteur), et un PS avec une reference specifique. Ces variables sont poussees dans Lemlist ou HubSpot Sequences. Resultat : des emails qui semblent ecrits a la main, envoyes a des centaines de prospects.", color: "#EAB308" },
                    ].map((uc) => (
                      <div key={uc.num} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-start gap-3">
                          <span className="text-[11px] font-bold text-white px-2 py-1 rounded shrink-0" style={{ background: uc.color }}>{uc.num}</span>
                          <div>
                            <p className="text-[13px] font-semibold text-[#111] mb-1">{uc.title}</p>
                            <p className="text-[11px] text-[#777] leading-[1.6]">{uc.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 - Pricing */}
              <section id="pricing" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pricing Clay en 2026</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Clay facture par credits. Chaque enrichissement consomme des credits (de 1 a 25 credits selon le provider et le type de donnee). Les colonnes IA consomment aussi des credits. Voici les plans actuels.</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { plan: "Free", price: "0 EUR/mois", credits: "100 credits/mois", best: "Tester l'outil, POC rapide", features: "1 user, fonctionnalites de base, 100 recherches" },
                      { plan: "Starter", price: "149 USD/mois", credits: "2 000 credits/mois", best: "Freelances et petites equipes", features: "Tous les providers, AI columns, integrations CRM" },
                      { plan: "Explorer", price: "349 USD/mois", credits: "10 000 credits/mois", best: "PME avec prospection active", features: "Tout Starter + waterfall avance, CRM sync, webhooks" },
                      { plan: "Pro", price: "800 USD/mois", credits: "50 000 credits/mois", best: "Equipes sales/ops dedicees", features: "Tout Explorer + API avancee, Clay credit rollover, support prioritaire" },
                      { plan: "Enterprise", price: "Sur devis", credits: "Credits illimites", best: "Grandes equipes, agences", features: "Tout Pro + SLA, SSO, dedicatedmanager, credits custom" },
                    ].map((p) => (
                      <div key={p.plan} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[13px] font-semibold text-[#111]">{p.plan}</span>
                          <span className="text-[12px] font-bold text-[#4B5EFC]">{p.price}</span>
                          <span className="text-[10px] text-[#999] ml-auto">{p.credits}</span>
                        </div>
                        <p className="text-[11px] text-[#777] mb-1">{p.features}</p>
                        <p className="text-[10px] text-[#4B5EFC] font-medium">{p.best}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Point important :</strong> le cout des credits s&apos;additionne aux abonnements des providers. Si vous utilisez le waterfall email avec Apollo + Dropcontact + Hunter, vous devez avoir des credits chez ces providers (ou utiliser les credits Clay qui incluent certains providers de base). Pour un usage intensif, le budget mensuel total (Clay + providers) se situe entre 500 et 2 000 EUR/mois.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 - Alternatives */}
              <section id="alternatives" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Clay vs les alternatives</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Clay n&apos;est pas le seul outil d&apos;enrichissement du marche. Voici comment il se compare a ses principaux concurrents.</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { tool: "Apollo.io", domain: "apollo.io", type: "Enrichissement + prospection", vs: "Apollo est un outil tout-en-un (enrichissement + sequences email + CRM leger). Sa base de donnees est massive (275M+ contacts). Mais Apollo n'utilise qu'un seul provider (lui-meme). Le taux de couverture est de 40-60% selon la geographie. Clay integre Apollo comme l'un de ses 75+ providers et ajoute le waterfall.", winner: "Clay pour l'enrichissement, Apollo pour le tout-en-one budget" },
                      { tool: "Clearbit", domain: "clearbit.com", type: "Enrichissement firmographique", vs: "Clearbit (racheté par HubSpot en 2023, devenu Breeze Intelligence) est excellent pour les données firmographiques (taille, secteur, techno, revenue). Mais il ne fait que du firmographic, pas d'email finding ni de phone. Clay integre Clearbit comme provider et ajoute les 74 autres sources.", winner: "Clay pour la couverture, Clearbit pour la profondeur firmographic" },
                      { tool: "Dropcontact", domain: "dropcontact.com", type: "Enrichissement email (France)", vs: "Dropcontact est le meilleur outil pour trouver des emails professionnels en France (RGPD compliant). Il genere les emails par algorithme sans base de donnees. Tres fiable mais limite a l'email. Clay integre Dropcontact comme provider pour le marche francais.", winner: "Clay pour la polyvalence, Dropcontact pour les emails FR" },
                      { tool: "Phantombuster", domain: "phantombuster.com", type: "Scraping et automatisation", vs: "Phantombuster est un outil de scraping web et LinkedIn (profils, entreprises, posts). Il extrait des donnees mais ne les enrichit pas. Clay et Phantombuster sont complementaires : scraping Phantombuster en input, enrichissement Clay en processing.", winner: "Complementaires : Phantombuster pour extraire, Clay pour enrichir" },
                    ].map((t) => (
                      <div key={t.tool} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <img src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=32`} alt={t.tool} className="w-4 h-4" />
                          <span className="text-[12px] font-semibold text-[#111]">{t.tool}</span>
                          <span className="text-[9px] text-[#999] bg-[#F5F5F5] px-1.5 py-0.5 rounded">{t.type}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6] mb-2">{t.vs}</p>
                        <p className="text-[10px] text-[#4B5EFC] font-medium">{t.winner}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 - Tips */}
              <section id="tips-tricks" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Tips et bonnes pratiques</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres 18 mois d&apos;utilisation intensive de Clay, voici nos meilleures pratiques pour en tirer le maximum.</p>
                  </div>
                  <div className="mt-5 space-y-2">
                    {[
                      { tip: "Ordonnez vos providers par cout croissant", detail: "Mettez les providers les moins chers en premier dans votre waterfall. Si le Provider A a 5 credits trouve le resultat, pas besoin de payer 15 credits au Provider B." },
                      { tip: "Testez sur un echantillon de 50 lignes d'abord", detail: "Avant de lancer un enrichissement sur 5 000 contacts, testez sur 50 pour valider la qualite des resultats et estimer le cout total en credits." },
                      { tip: "Utilisez les colonnes conditionnelles", detail: "N'enrichissez que les lignes qui en ont besoin. Si l'email est deja present, ne depensez pas de credits pour le retrouver." },
                      { tip: "Structurez vos prompts IA comme des fonctions", detail: "Input clair, instructions precises, format de sortie defini. Plus votre prompt est structure, plus les resultats sont consistants sur des centaines de lignes." },
                      { tip: "Sauvegardez vos tables comme templates", detail: "Creez des tables modeles pour vos use cases recurrents (enrichissement ICP, nettoyage CRM, recherche ABM). Duplicquez-les pour gagner du temps." },
                      { tip: "Combinez Clay avec Lemlist ou HubSpot Sequences", detail: "Clay pour l'enrichissement et la personnalisation, Lemlist ou HubSpot pour l'envoi. C'est le setup optimal pour la prospection B2B." },
                      { tip: "Monitorez vos credits quotidiennement", detail: "Clay peut consommer des credits rapidement sur les grandes tables. Activez les alertes de credit et definissez des limites par table." },
                    ].map((item) => (
                      <div key={item.tip} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{item.tip}</p>
                        <p className="text-[11px] text-[#777] leading-[1.5]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 11 - Methodologie */}
              <section id="methodologie" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Notre methodologie chez Ceres</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chez Ceres, Clay est au coeur de notre stack d&apos;enrichissement pour la prospection et le nettoyage CRM de nos clients. Voici comment nous l&apos;utilisons concretement.</p>
                    <p><strong className="text-[#111]">Pour la prospection outbound.</strong> Nous construisons les listes de prospection de nos clients dans Clay. Import depuis LinkedIn Sales Navigator, enrichissement waterfall (Dropcontact en priorite pour le marche francais, Apollo et Hunter en fallback), qualification IA (ICP scoring), personnalisation IA (premiere ligne de cold email). Les contacts qualifies sont pousses dans HubSpot et Lemlist pour l&apos;envoi. Ce workflow nous permet de generer des listes de 200-500 prospects ultra-cibles en moins de 2 heures.</p>
                    <p><strong className="text-[#111]">Pour le nettoyage CRM.</strong> Quand un client nous confie un audit CRM, nous exportons sa base dans Clay pour verification et enrichissement. Verification des emails (catch-all, bounce rate), mise a jour des titres de poste, enrichissement des donnees entreprise manquantes, identification des doublons. Le taux de donnees corrigees ou enrichies est generalement de 30 a 50% de la base.</p>
                    <p><strong className="text-[#111]">Pour l&apos;ABM.</strong> Pour les campagnes ABM de nos clients, nous utilisons Clay pour la recherche de comptes. Identification des decision makers, mapping de l&apos;organigramme, detection de la stack technologique, analyse des actualites. Les briefs de comptes generes par les colonnes IA sont pousses dans les fiches entreprise HubSpot.</p>
                  </div>
                  <div className="mt-5 rounded-xl border border-[#F2F2F2] p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-[#111] flex items-center justify-center text-white text-[8px] font-bold">C</div>
                      <span className="text-[12px] font-semibold text-[#111]">Notre stack enrichissement</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { tool: "Clay", role: "Orchestration waterfall" },
                        { tool: "Dropcontact", role: "Emails FR (RGPD)" },
                        { tool: "Apollo", role: "Emails US/global" },
                        { tool: "HubSpot", role: "CRM destination" },
                      ].map((s) => (
                        <div key={s.tool} className="text-center">
                          <p className="text-[13px] font-bold text-[#4B5EFC]">{s.tool}</p>
                          <p className="text-[10px] text-[#999]">{s.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* Related articles */}
            <section className="mt-12 mb-8">
              <p className="text-[13px] font-semibold text-[#111] mb-4">Articles similaires</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {relatedArticles.map((a) => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors group">
                    <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white mb-3" style={{ background: a.color }}>
                      {a.category[0]}
                    </div>
                    <p className="text-[12px] font-semibold text-[#111] leading-[1.4] group-hover:text-[#4B5EFC] transition-colors">{a.title}</p>
                    <p className="text-[10px] text-[#999] mt-2">{a.category}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;aide pour mettre en place Clay ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On configure votre stack d&apos;enrichissement Clay + HubSpot, on construit vos tables et on automatise votre pipeline de donnees. Du setup a la production.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/blog/comparatif-outils-generation-leads-enrichissement" className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Comparatif outils
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
