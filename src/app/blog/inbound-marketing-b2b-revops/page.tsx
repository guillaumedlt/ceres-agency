"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Inbound marketing B2B : la methode RevOps pour generer des leads",
  description: "Guide complet pour aligner inbound marketing et RevOps en B2B. Content strategy, SEO, lead magnets, nurturing, scoring, attribution, implementation HubSpot et mesure du ROI.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/inbound-marketing-b2b-revops" },
  articleSection: "RevOps",
  wordCount: 3400,
  inLanguage: "fr",
};

const sections = [
  { id: "definition-inbound-revops", title: "Definition inbound RevOps" },
  { id: "content-strategy-b2b", title: "Content strategy B2B" },
  { id: "seo-b2b", title: "SEO pour le B2B" },
  { id: "lead-magnets", title: "Lead magnets" },
  { id: "nurturing-workflows", title: "Nurturing workflows" },
  { id: "lead-scoring", title: "Lead scoring" },
  { id: "sales-handoff", title: "Sales handoff" },
  { id: "attribution", title: "Attribution" },
  { id: "hubspot-implementation", title: "Implementation HubSpot" },
  { id: "metrics-roi", title: "Metriques et ROI" },
];

const relatedArticles = [
  { title: "TOFU, MOFU, BOFU : comprendre et optimiser votre strategie inbound", slug: "tofu-mofu-bofu-strategie-inbound", category: "RevOps", color: "#FF7A59" },
  { title: "Lead Scoring : le guide complet", slug: "lead-scoring-guide-complet", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Marketing Automation : 7 workflows HubSpot indispensables", slug: "marketing-automation-7-workflows-hubspot", category: "Automatisation", color: "#6C5CE7" },
];

export default function InboundMarketingB2BRevOpsPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("definition-inbound-revops");

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
        <div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Decorative blobs */}
      <div className="hidden lg:block absolute top-[120px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#FF7A59]/5 blur-[100px] pointer-events-none" />
      <div className="hidden lg:block absolute top-[600px] right-[-250px] w-[400px] h-[400px] rounded-full bg-[#4B5EFC]/5 blur-[100px] pointer-events-none" />
      <div className="hidden lg:block absolute top-[1200px] left-[-150px] w-[350px] h-[350px] rounded-full bg-[#22C55E]/5 blur-[100px] pointer-events-none" />
      <div className="hidden lg:block absolute top-[1800px] right-[-200px] w-[450px] h-[450px] rounded-full bg-[#FF7A59]/5 blur-[100px] pointer-events-none" />

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
                        ? "border-[#FF7A59] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=Inbound%20marketing%20B2B%20methode%20RevOps&url=https://ceres.agency/blog/inbound-marketing-b2b-revops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/inbound-marketing-b2b-revops" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Inbound marketing B2B RevOps</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">24 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Inbound marketing B2B : la methode RevOps pour generer des leads
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                L&apos;inbound marketing B2B ne fonctionne plus en silo. Les entreprises qui generent le plus de pipeline alignent contenu, SEO, scoring et attribution dans une logique RevOps. Ce guide detaille la methode complete : de la strategie de contenu a la mesure du ROI, en passant par les lead magnets, le nurturing, le scoring et le handoff commercial. Chaque etape est illustree avec des configurations HubSpot concretes et des benchmarks B2B reels.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>29 mars 2026</span>
              </div>
            </header>

            <article>
              {/* ================================================================ */}
              {/* Section 1 : Definition inbound RevOps */}
              {/* ================================================================ */}
              <section id="definition-inbound-revops" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Inbound marketing et RevOps : pourquoi les deux sont inseparables</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;inbound marketing B2B consiste a attirer des prospects qualifies grace a du contenu de valeur plutot qu&apos;a les interrompre avec de la publicite non sollicitee. Le concept, popularise par HubSpot des 2006, repose sur une logique simple : si vous aidez votre audience a resoudre ses problemes, elle finira par vous faire confiance et par acheter chez vous.</p>
                    <p>Le RevOps (Revenue Operations) est la discipline qui aligne les equipes marketing, commerciales et customer success autour d&apos;un objectif commun : la croissance previsible du revenu. Quand on croise inbound et RevOps, on obtient une machine a generer des leads ou chaque piece de contenu est rattachee a un objectif de pipeline, chaque interaction est tracee, et chaque euro investi est mesurable.</p>
                    <p><strong className="text-[#111]">Le probleme de l&apos;inbound en silo.</strong> La plupart des entreprises B2B pratiquent l&apos;inbound marketing de maniere isolee. Le marketing produit du contenu, genere des leads, les transmet au commercial. Mais personne ne sait quels contenus generent du revenu, quels leads sont vraiment qualifies, ni combien de temps prend le cycle de conversion. Sans RevOps, l&apos;inbound est un centre de couts. Avec RevOps, il devient un centre de profit mesurable.</p>
                    <p><strong className="text-[#111]">L&apos;approche RevOps de l&apos;inbound.</strong> Au lieu de mesurer le marketing par le nombre de leads generes, on mesure la contribution au pipeline et au revenu. Au lieu de scorer les leads sur des criteres arbitraires, on utilise les donnees d&apos;engagement reelles et les signaux d&apos;intention. Au lieu de faire un handoff brutal entre marketing et sales, on orchestre une transition progressive basee sur des seuils objectifs. C&apos;est cette approche que nous detaillons dans ce guide.</p>
                    <p><strong className="text-[#111]">Resultats attendus.</strong> Les entreprises B2B qui alignent inbound et RevOps constatent en moyenne une augmentation de 36% du taux de conversion MQL-to-SQL, une reduction de 22% du cycle de vente et une amelioration de 45% de la precision du forecast commercial. Ces chiffres proviennent d&apos;une etude Forrester 2025 sur 200 entreprises SaaS B2B.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 2 : Content strategy B2B */}
              {/* ================================================================ */}
              <section id="content-strategy-b2b" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Construire une content strategy B2B alignee sur le pipeline</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Une content strategy B2B efficace ne commence pas par la redaction d&apos;articles. Elle commence par la cartographie du parcours d&apos;achat et l&apos;identification des questions que se posent vos buyers a chaque etape. Le contenu est ensuite produit pour repondre a ces questions specifiques, avec un objectif de conversion clair pour chaque piece.</p>
                    <p><strong className="text-[#111]">Etape 1 : cartographier les buyer personas.</strong> En B2B, les decisions d&apos;achat impliquent generalement 3 a 7 parties prenantes. Chaque persona a des preoccupations differentes. Le directeur financier se soucie du ROI. Le directeur technique s&apos;interesse a l&apos;integration. L&apos;utilisateur final veut de la simplicite. Votre content strategy doit adresser chacun de ces profils avec du contenu adapte a son niveau de maturite et a ses enjeux.</p>
                    <p><strong className="text-[#111]">Etape 2 : mapper le contenu sur le funnel.</strong> Le modele TOFU-MOFU-BOFU reste pertinent en 2026. En haut du funnel (TOFU), vous produisez du contenu educatif qui attire du trafic : articles de blog, infographies, etudes sectorielles. Au milieu (MOFU), vous proposez du contenu a forte valeur ajoutee qui qualifie l&apos;interet : livres blancs, webinaires, templates. En bas (BOFU), vous fournissez du contenu de decision : etudes de cas, comparatifs, demos, calculateurs de ROI.</p>
                  </div>

                  <div className="mt-5 space-y-2">
                    {[
                      { stage: "TOFU", pct: "60%", desc: "Articles SEO, guides educatifs, infographies, podcasts", color: "#FF7A59" },
                      { stage: "MOFU", pct: "25%", desc: "Livres blancs, webinaires, templates, etudes sectorielles", color: "#4B5EFC" },
                      { stage: "BOFU", pct: "15%", desc: "Etudes de cas, demos, calculateurs ROI, comparatifs", color: "#22C55E" },
                    ].map((s) => (
                      <div key={s.stage} className="flex items-center gap-3 rounded-xl border border-[#F2F2F2] p-3">
                        <div className="w-14 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold text-white" style={{ background: s.color }}>{s.stage}</div>
                        <div className="flex-1">
                          <p className="text-[11px] font-semibold text-[#111]">{s.pct} du contenu produit</p>
                          <p className="text-[10px] text-[#999]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Etape 3 : definir les clusters thematiques.</strong> Au lieu de produire des articles isoles, organisez votre contenu en clusters. Chaque cluster est centre sur un theme strategique (par exemple &ldquo;RevOps&rdquo;, &ldquo;lead scoring&rdquo;, &ldquo;migration CRM&rdquo;) avec un pillar page detaillee et plusieurs articles satellites qui traitent des sous-sujets. Cette structure renforce votre autorite thematique aupres de Google et des LLMs.</p>
                    <p><strong className="text-[#111]">Etape 4 : etablir un calendrier editorial aligne sur le pipeline.</strong> Chaque mois, produisez un mix de contenus TOFU, MOFU et BOFU. Fixez des objectifs clairs : nombre de visites organiques, nombre de leads generes, nombre de MQL. Mesurez chaque piece de contenu par sa contribution au pipeline, pas seulement par son trafic. Un article qui genere 200 visites mais 5 MQL a plus de valeur qu&apos;un article a 2 000 visites et 0 MQL.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 3 : SEO pour le B2B */}
              {/* ================================================================ */}
              <section id="seo-b2b" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">SEO B2B : attirer du trafic qualifie et pas seulement du volume</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le SEO B2B differe fondamentalement du SEO B2C. Les volumes de recherche sont plus faibles, les mots-cles sont plus techniques, les cycles de conversion sont plus longs, et la valeur d&apos;un lead qualifie est souvent cent fois superieure a celle d&apos;un visiteur lambda. L&apos;objectif n&apos;est pas d&apos;attirer le maximum de trafic, mais d&apos;attirer les bonnes personnes au bon moment de leur parcours d&apos;achat.</p>
                    <p><strong className="text-[#111]">Recherche de mots-cles B2B.</strong> Commencez par les mots-cles d&apos;intention commerciale. &ldquo;Comparatif CRM B2B&rdquo; a plus de valeur que &ldquo;qu&apos;est-ce qu&apos;un CRM&rdquo; en termes de proximite avec l&apos;achat. Utilisez des outils comme Ahrefs, Semrush ou Ubersuggest pour identifier les requetes a faible volume mais haute intention. En B2B, un mot-cle a 50 recherches mensuelles peut generer des dizaines de milliers d&apos;euros de pipeline si l&apos;intention est forte.</p>
                    <p><strong className="text-[#111]">L&apos;importance du contenu long format.</strong> Les articles B2B performants font generalement entre 2 000 et 4 000 mots. Ils traitent un sujet en profondeur, avec des donnees chiffrees, des exemples concrets et des conseils actionnables. Google valorise l&apos;expertise et la completude, surtout sur les requetes informationnelles complexes. Un article superficiel de 500 mots ne se classera pas face a un guide detaille de 3 000 mots qui repond a toutes les questions de l&apos;utilisateur.</p>
                    <p><strong className="text-[#111]">SEO technique pour le B2B.</strong> Les fondamentaux restent les memes : vitesse de chargement, mobile-first, structure des headings, maillage interne. Mais en B2B, ajoutez systematiquement du schema markup (Article, FAQ, HowTo) pour enrichir vos resultats dans les SERPs et optimiser votre visibilite dans les moteurs generatifs. Les donnees structurees sont le pont entre le SEO classique et le GEO.</p>
                    <p><strong className="text-[#111]">Backlinks en B2B.</strong> La strategie de backlinks B2B repose sur le contenu de reference plutot que sur le link building massif. Produisez des etudes originales, des benchmarks sectoriels, des templates gratuits que d&apos;autres sites voudront naturellement citer. Un seul backlink d&apos;un site d&apos;autorite dans votre secteur vaut cent liens de directories generiques.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 4 : Lead magnets */}
              {/* ================================================================ */}
              <section id="lead-magnets" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Lead magnets B2B : les formats qui convertissent vraiment</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un lead magnet est une ressource gratuite offerte en echange des coordonnees du prospect. En B2B, la qualite du lead magnet conditionne directement la qualite des leads generes. Un ebook generique de 50 pages attire des curieux. Un template actionnable de 3 pages attire des decideurs prets a agir. La tendance en 2026 est claire : moins de volume, plus de valeur.</p>
                    <p><strong className="text-[#111]">Les formats qui performent le mieux.</strong> D&apos;apres les donnees de nos clients, voici les taux de conversion moyens par format de lead magnet en B2B.</p>
                  </div>

                  <div className="mt-5 space-y-2">
                    {[
                      { format: "Template/calculateur interactif", taux: "15-25%", desc: "Un outil que le prospect peut utiliser immediatement pour son propre cas" },
                      { format: "Checklist actionnable", taux: "12-20%", desc: "Une liste de verification concrete, applicable en moins d&apos;une heure" },
                      { format: "Etude sectorielle avec donnees originales", taux: "10-18%", desc: "Des benchmarks exclusifs que le prospect ne trouve nulle part ailleurs" },
                      { format: "Mini-cours email (5 jours)", taux: "8-15%", desc: "Un format qui cree de l&apos;engagement progressif et pre-qualifie le lead" },
                      { format: "Webinaire en direct", taux: "5-12%", desc: "Interaction en temps reel, ideal pour demontrer l&apos;expertise" },
                      { format: "Ebook generique", taux: "2-5%", desc: "Le format le moins performant en 2026, sauf s&apos;il contient des donnees exclusives" },
                    ].map((lm) => (
                      <div key={lm.format} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-3">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59]" />
                          <span className="text-[12px] font-bold text-[#FF7A59] w-14">{lm.taux}</span>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-[#111]">{lm.format}</p>
                          <p className="text-[10px] text-[#999]">{lm.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Regles d&apos;or pour un lead magnet efficace.</strong> Il doit resoudre un probleme specifique et immediat. Il doit etre consommable en moins de 15 minutes. Il doit donner un avant-gout de votre expertise sans tout reveler. Et surtout, il doit etre aligne avec votre offre commerciale. Un lead magnet sur le &ldquo;bien-etre au travail&rdquo; n&apos;attirera jamais de leads pour un outil de scoring predictif.</p>
                    <p><strong className="text-[#111]">Le piege du gating excessif.</strong> En 2026, de nombreuses entreprises B2B degatent une partie de leur contenu pour maximiser le trafic organique et la visibilite GEO, tout en reservant les ressources les plus actionnables derriere un formulaire. Cette approche hybride genere plus de trafic qualifie tout en maintenant un flux de leads identifiables.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 5 : Nurturing workflows */}
              {/* ================================================================ */}
              <section id="nurturing-workflows" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Nurturing workflows : transformer les leads en opportunites</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le nurturing est le processus par lequel vous accompagnez un lead de sa premiere interaction jusqu&apos;au moment ou il est pret a parler a un commercial. En B2B, ce processus peut durer de quelques semaines a plusieurs mois. Le nurturing automatise permet de maintenir la relation a grande echelle tout en personnalisant le contenu en fonction du comportement de chaque lead.</p>
                    <p><strong className="text-[#111]">Architecture d&apos;un workflow de nurturing efficace.</strong> Un bon workflow de nurturing suit une progression logique. Il commence par de l&apos;education (comprendre le probleme), passe par la consideration (explorer les solutions) et termine par la decision (choisir un fournisseur). A chaque etape, le contenu propose est adapte au niveau de maturite du lead.</p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#F9FAFB] border border-[#F2F2F2] p-4">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Exemple de workflow nurturing B2B (6 semaines)</p>
                    <div className="space-y-2">
                      {[
                        { semaine: "Sem. 1", action: "Email de bienvenue + ressource telechargee", objectif: "Confirmer l&apos;interet" },
                        { semaine: "Sem. 1", action: "Email avec article complementaire (TOFU)", objectif: "Eduquer sur le probleme" },
                        { semaine: "Sem. 2", action: "Email avec etude de cas sectorielle (MOFU)", objectif: "Montrer la preuve sociale" },
                        { semaine: "Sem. 3", action: "Invitation webinaire ou template (MOFU)", objectif: "Approfondir l&apos;engagement" },
                        { semaine: "Sem. 4", action: "Email avec comparatif ou guide de decision (BOFU)", objectif: "Faciliter la decision" },
                        { semaine: "Sem. 5", action: "Proposition de demo ou appel (BOFU)", objectif: "Provoquer le handoff" },
                        { semaine: "Sem. 6", action: "Email de rappel avec offre limitee", objectif: "Creer l&apos;urgence" },
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-3 text-[11px]">
                          <span className="w-14 shrink-0 font-semibold text-[#FF7A59]">{step.semaine}</span>
                          <span className="flex-1 text-[#555]">{step.action}</span>
                          <span className="text-[#999] shrink-0">{step.objectif}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Personnalisation dynamique.</strong> Les meilleurs workflows ne sont pas lineaires. Ils s&apos;adaptent en temps reel au comportement du lead. Si un lead telecharge un comparatif (signal BOFU) alors qu&apos;il est en phase TOFU du workflow, il est automatiquement reclasse et reoriente vers un contenu de decision. Cette personnalisation dynamique est le coeur du nurturing RevOps.</p>
                    <p><strong className="text-[#111]">Segmentation par ICP.</strong> Un workflow generique performera moins bien qu&apos;un ensemble de workflows segmentes par industrie, taille d&apos;entreprise ou role du buyer. Dans HubSpot, utilisez les branches if/then pour creer des chemins differents selon les proprietes du contact. Un CFO ne recoit pas le meme contenu qu&apos;un CTO, meme s&apos;ils travaillent dans la meme entreprise.</p>
                    <p><strong className="text-[#111]">Metriques de nurturing a suivre.</strong> Taux d&apos;ouverture (benchmark B2B : 22-28%), taux de clic (3-7%), taux de desabonnement (inferieur a 0,5% par email), et surtout le taux de conversion vers MQL. Un workflow de nurturing performant convertit 15 a 25% des leads nurtured en MQL dans un delai de 60 jours.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 6 : Lead scoring */}
              {/* ================================================================ */}
              <section id="lead-scoring" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Lead scoring : qualifier les leads avec des donnees, pas de l&apos;intuition</h2>
                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p>Le lead scoring est le systeme qui attribue un score a chaque lead en fonction de son profil (fit) et de son comportement (engagement). Ce score determine quand un lead est suffisamment qualifie pour etre transmis a l&apos;equipe commerciale. Sans scoring, les commerciaux perdent du temps avec des leads non qualifies. Avec un scoring bien calibre, ils se concentrent sur les leads a plus forte probabilite de conversion.</p>
                    <p><strong className="text-white">Scoring demographique (fit).</strong> Evaluez la correspondance entre le lead et votre profil de client ideal (ICP). Les criteres typiques incluent la taille de l&apos;entreprise (+15 points si le chiffre d&apos;affaires depasse 5M), le secteur d&apos;activite (+10 points si secteur cible), le role du contact (+20 points si C-level ou VP), et la localisation geographique (+5 points si marche cible).</p>
                    <p><strong className="text-white">Scoring comportemental (engagement).</strong> Mesurez l&apos;engagement du lead avec votre contenu et votre marque. Les actions a scorer incluent la visite de la page tarifs (+15 points), le telechargement d&apos;un lead magnet BOFU (+20 points), l&apos;ouverture repetee des emails (+5 points par ouverture, cap a 25), la participation a un webinaire (+25 points), et la demande de demo (+50 points, qualification automatique).</p>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "68%", label: "des entreprises B2B utilisent le lead scoring en 2026", color: "#FF7A59" },
                      { stat: "+41%", label: "de conversion en plus avec un scoring calibre", color: "#22C55E" },
                      { stat: "3h", label: "economisees par commercial et par semaine", color: "#4B5EFC" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4 text-center">
                        <p className="text-[22px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#888] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p><strong className="text-white">Scoring negatif.</strong> N&apos;oubliez pas les scores negatifs. Un lead qui se desabonne (-30 points), qui travaille dans un secteur hors cible (-20 points), ou qui n&apos;a eu aucune activite depuis 90 jours (-15 points) doit voir son score baisser. Le scoring negatif est aussi important que le scoring positif pour maintenir la qualite du pipeline.</p>
                    <p><strong className="text-white">Seuils de qualification.</strong> Definissez des seuils clairs et documentes. Par exemple : 0-30 points = lead froid (nurturing), 31-60 points = MQL (marketing qualified lead), 61-80 points = SQL (sales qualified lead, handoff au commercial), 81+ points = hot lead (prise de contact prioritaire). Ces seuils doivent etre revus trimestriellement en fonction des taux de conversion reels.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 7 : Sales handoff */}
              {/* ================================================================ */}
              <section id="sales-handoff" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Sales handoff : la transition marketing-to-sales sans friction</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le handoff entre marketing et sales est le point de rupture numero un dans la generation de leads B2B. Un lead parfaitement nurtured et score peut etre perdu si le commercial le contacte trop tard, sans contexte, ou avec un message generique. Le handoff RevOps elimine ces frictions grace a l&apos;automatisation et a la transparence des donnees.</p>
                    <p><strong className="text-[#111]">Le SLA marketing-sales.</strong> Un Service Level Agreement entre marketing et sales definit les engagements reciproques. Le marketing s&apos;engage a fournir X MQL par mois avec un score minimum de Y. Le commercial s&apos;engage a contacter chaque MQL dans un delai de Z heures et a mettre a jour le CRM avec le resultat. Ce SLA est la fondation de l&apos;alignement RevOps.</p>
                    <p><strong className="text-[#111]">Automatisation du handoff dans HubSpot.</strong> Quand un lead atteint le seuil SQL, un workflow automatise cree une tache dans le pipeline du commercial assigne, envoie une notification Slack avec le contexte complet (score, historique d&apos;engagement, contenu consulte, entreprise), et declenche un email de transition au lead (&ldquo;Notre expert va vous contacter sous 24h&rdquo;). Le commercial recoit toutes les informations necessaires pour preparer un premier appel personnalise.</p>
                    <p><strong className="text-[#111]">Le contexte est roi.</strong> Le commercial doit savoir exactement quels contenus le lead a consultes, quels lead magnets il a telecharges, quels emails il a ouverts et quelle est la taille de son entreprise. Ces donnees permettent un premier contact qui demontre immediatement la connaissance du besoin du prospect, au lieu d&apos;un appel a froid generique.</p>
                    <p><strong className="text-[#111]">Delai de prise de contact.</strong> Les etudes montrent que la probabilite de qualifier un lead chute de 80% apres les 5 premieres minutes. En B2B, un delai de reponse inferieur a 1 heure est un minimum. L&apos;ideal est inferieur a 15 minutes pour les leads hot (score superieur a 80). Mesurez ce delai dans votre CRM et incluez-le dans les KPIs du SLA.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 8 : Attribution */}
              {/* ================================================================ */}
              <section id="attribution" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Attribution multi-touch : savoir quels contenus generent du revenu</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;attribution est le processus qui permet de relier chaque piece de contenu a la generation de revenu. En B2B, un prospect interagit en moyenne avec 13 pieces de contenu avant de devenir client. Le defi est d&apos;attribuer correctement la valeur a chacune de ces interactions pour optimiser les investissements marketing.</p>
                    <p><strong className="text-[#111]">Les modeles d&apos;attribution.</strong> Le first-touch attribue 100% de la valeur au premier point de contact. Le last-touch attribue tout au dernier. Le modele lineaire repartit la valeur egalement entre tous les touchpoints. Le modele en U (position-based) attribue 40% au first touch, 40% au last touch, et 20% repartis entre les interactions intermediaires. Le modele en W ajoute un poids supplementaire au moment de la creation du lead.</p>
                  </div>

                  <div className="mt-5 overflow-x-auto">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="border-b border-[#E8E8E8]">
                          <th className="text-left py-2 pr-3 text-[#999] font-semibold">Modele</th>
                          <th className="text-left py-2 pr-3 text-[#999] font-semibold">Avantage</th>
                          <th className="text-left py-2 text-[#999] font-semibold">Limite</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#555]">
                        {[
                          { modele: "First-touch", avantage: "Simple, identifie les canaux d&apos;acquisition", limite: "Ignore le nurturing" },
                          { modele: "Last-touch", avantage: "Identifie le contenu de conversion", limite: "Ignore la decouverte" },
                          { modele: "Lineaire", avantage: "Equitable, vision complete", limite: "Pas de hierarchie entre touchpoints" },
                          { modele: "Position-based (U)", avantage: "Valorise acquisition et conversion", limite: "Sous-evalue le nurturing" },
                          { modele: "Data-driven", avantage: "Le plus precis, base sur les donnees reelles", limite: "Necessite un volume important de donnees" },
                        ].map((row) => (
                          <tr key={row.modele} className="border-b border-[#F5F5F5]">
                            <td className="py-2 pr-3 font-medium text-[#111]">{row.modele}</td>
                            <td className="py-2 pr-3">{row.avantage}</td>
                            <td className="py-2">{row.limite}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Notre recommandation.</strong> Commencez avec le modele position-based (U-shaped) car il offre le meilleur equilibre entre simplicite et precision. Une fois que vous avez accumule suffisamment de donnees (generalement apres 6 mois et 100+ deals closes), passez a un modele data-driven qui s&apos;appuie sur les correlations reelles entre touchpoints et conversions.</p>
                    <p><strong className="text-[#111]">Implementation dans HubSpot.</strong> HubSpot propose nativement les rapports d&apos;attribution multi-touch dans les plans Pro et Enterprise. Configurez le tracking des interactions de contenu (pages vues, soumissions de formulaires, emails ouverts), associez chaque deal a son contact d&apos;origine, et utilisez les rapports d&apos;attribution pour identifier les contenus qui contribuent le plus au revenu. Le rapport &ldquo;Revenue Attribution&rdquo; de HubSpot permet de voir directement combien de revenu est attribue a chaque article, landing page ou campagne.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 9 : Implementation HubSpot */}
              {/* ================================================================ */}
              <section id="hubspot-implementation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Implementation HubSpot : configurer votre machine inbound</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot est la plateforme de reference pour l&apos;inbound marketing B2B. Voici la configuration concrete que nous deploeons pour nos clients dans une logique RevOps.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { titre: "1. Proprietes de contact personnalisees", desc: "Creez des proprietes pour tracker le lifecycle stage (subscriber, lead, MQL, SQL, opportunity, customer), le lead score composite, la source d&apos;acquisition originale, le cluster de contenu principal, et la date de derniere activite. Ces proprietes sont la base de toute segmentation et automatisation." },
                      { titre: "2. Formulaires et landing pages", desc: "Configurez des formulaires progressifs qui demandent des informations supplementaires a chaque interaction (progressive profiling). Premier formulaire : email + prenom. Deuxieme : entreprise + poste. Troisieme : taille de l&apos;equipe + budget. Cette approche progressive evite les formulaires a 10 champs qui tuent le taux de conversion." },
                      { titre: "3. Workflows de nurturing", desc: "Creez un workflow par persona principal et par etape du funnel. Utilisez les branches if/then pour personnaliser le parcours selon le comportement. Configurez des delais adaptes au cycle de vente B2B (generalement 3-5 jours entre chaque email, pas 24h comme en B2C)." },
                      { titre: "4. Lead scoring", desc: "Configurez le scoring dans HubSpot avec des criteres fit (demographiques) et engagement (comportementaux). Utilisez les proprietes calculees pour combiner les deux scores. Definissez les seuils MQL et SQL en collaboration avec l&apos;equipe commerciale." },
                      { titre: "5. Pipelines et deals", desc: "Creez un pipeline commercial avec des etapes claires : qualified, discovery, proposal, negotiation, closed-won, closed-lost. Chaque etape doit avoir des criteres d&apos;entree et de sortie documentes. Associez chaque deal a son contact source pour permettre l&apos;attribution." },
                      { titre: "6. Dashboards et reporting", desc: "Configurez un dashboard inbound avec les KPIs cles : trafic organique, leads generes, MQL, SQL, deals crees, revenu attribue. Ajoutez un rapport d&apos;attribution multi-touch et un rapport de performance par contenu. Ce dashboard est revu en reunion RevOps hebdomadaire." },
                    ].map((step) => (
                      <div key={step.titre} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[12px] font-semibold text-[#111] mb-1.5">{step.titre}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{step.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Timeline de deploiement.</strong> Comptez 4 a 6 semaines pour une implementation complete : semaine 1-2 pour les proprietes, formulaires et integrations ; semaine 3-4 pour les workflows et le scoring ; semaine 5-6 pour les dashboards et la formation des equipes. Les premiers resultats mesurables apparaissent generalement apres 8 a 12 semaines de production de contenu.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 10 : Metriques et ROI */}
              {/* ================================================================ */}
              <section id="metrics-roi" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Metriques et ROI : mesurer la performance de votre inbound RevOps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La mesure du ROI inbound est le nerf de la guerre. Sans metriques claires, il est impossible de justifier les investissements en contenu, d&apos;optimiser les workflows et de prouver la contribution du marketing au revenu. Voici les KPIs essentiels a tracker dans une logique RevOps.</p>
                  </div>

                  <div className="mt-5 space-y-2">
                    {[
                      { kpi: "Cout par lead (CPL)", benchmark: "50-200 EUR en B2B SaaS", desc: "Cout total du marketing inbound divise par le nombre de leads generes" },
                      { kpi: "Cout par MQL (CPMQL)", benchmark: "150-500 EUR", desc: "Cout total divise par le nombre de MQL. C&apos;est la metrique la plus pertinente." },
                      { kpi: "Taux de conversion Lead vers MQL", benchmark: "15-25%", desc: "Pourcentage de leads qui atteignent le seuil de qualification marketing" },
                      { kpi: "Taux de conversion MQL vers SQL", benchmark: "25-40%", desc: "Pourcentage de MQL acceptes par l&apos;equipe commerciale" },
                      { kpi: "Taux de conversion SQL vers Deal", benchmark: "40-60%", desc: "Pourcentage de SQL qui deviennent des opportunites" },
                      { kpi: "Cycle de vente moyen", benchmark: "30-90 jours en B2B SaaS", desc: "Duree entre la creation du lead et le closing" },
                      { kpi: "Pipeline attribue au marketing", benchmark: "40-60% du pipeline total", desc: "Montant total des deals dont la source est le marketing inbound" },
                      { kpi: "ROI inbound", benchmark: "3:1 a 10:1", desc: "Revenu attribue au marketing inbound divise par le cout total du marketing inbound" },
                    ].map((m) => (
                      <div key={m.kpi} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-1.5 shrink-0" />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-[11px] font-semibold text-[#111]">{m.kpi}</p>
                            <span className="text-[10px] text-[#FF7A59] font-medium">{m.benchmark}</span>
                          </div>
                          <p className="text-[10px] text-[#999]">{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Calculer le ROI inbound.</strong> La formule est simple : (Revenu attribue a l&apos;inbound - Cout total de l&apos;inbound) / Cout total de l&apos;inbound. Les couts incluent les salaires de l&apos;equipe contenu, les outils (HubSpot, SEO, design), les freelances et agences, et le temps de production. Les revenus sont calcules via l&apos;attribution multi-touch sur les deals closes-won dont au moins un touchpoint est organique ou inbound.</p>
                    <p><strong className="text-[#111]">Le temps de retour sur investissement.</strong> L&apos;inbound B2B est un investissement a moyen terme. Les premiers resultats significatifs apparaissent generalement entre le mois 6 et le mois 9. Le ROI positif est atteint entre le mois 9 et le mois 18 selon le secteur et le panier moyen. Apres 18 mois, l&apos;effet compose du contenu evergreen genere un ROI croissant car le cout marginal de production diminue tandis que le trafic organique augmente.</p>
                    <p><strong className="text-[#111]">Revue trimestrielle.</strong> Chaque trimestre, analysez les performances par contenu, par canal et par persona. Identifiez les contenus qui generent le plus de pipeline (pas seulement de trafic), doublez les investissements sur ce qui fonctionne, et arretez ce qui ne performe pas. Cette discipline d&apos;optimisation continue est ce qui differencie un programme inbound moyen d&apos;un programme inbound excellent.</p>
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
                    <p className="text-[12px] font-semibold text-[#111] leading-[1.4] group-hover:text-[#FF7A59] transition-colors">{a.title}</p>
                    <p className="text-[10px] text-[#999] mt-2">{a.category}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous voulez generer des leads B2B avec l&apos;inbound marketing ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On deploie votre strategie inbound RevOps de A a Z : content strategy, HubSpot, scoring, nurturing et attribution. Premiers resultats sous 8 semaines.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Demarrer un projet inbound
                  </a>
                  <Link href="/blog" className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Tous les articles
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
