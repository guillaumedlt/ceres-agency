"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment apparaitre dans les reponses de Claude et ChatGPT",
  description: "Guide complet pour etre cite par les IA generatives : optimisation GEO, structured data, E-E-A-T, FAQ schema, monitoring de la visibilite IA et methodologie Ceres pour apparaitre dans Claude, ChatGPT et Perplexity.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/apparaitre-reponses-claude-chatgpt" },
  articleSection: "IA & Automatisation",
  wordCount: 3500,
  inLanguage: "fr",
};

const sections = [
  { id: "why-ai-citations", title: "Pourquoi les citations IA" },
  { id: "how-llms-select", title: "Comment les LLMs choisissent" },
  { id: "content-optimization", title: "Optimiser son contenu" },
  { id: "structured-data", title: "Donnees structurees" },
  { id: "authority-eeat", title: "Autorite et E-E-A-T" },
  { id: "faq-entity", title: "FAQ et entites" },
  { id: "monitoring-presence", title: "Monitorer sa presence" },
  { id: "tools-visibility", title: "Outils de visibilite IA" },
  { id: "ceres-geo-method", title: "Methode Ceres GEO" },
  { id: "future-ai-search", title: "Futur de la recherche IA" },
];

const relatedArticles = [
  { title: "GEO : Generative Engine Optimization, optimiser son site pour les LLMs", slug: "geo-optimiser-site-llm", category: "SEO & GEO", color: "#4B5EFC" },
  { title: "Claude vs ChatGPT pour les equipes commerciales", slug: "claude-vs-chatgpt-equipes-commerciales", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "HubSpot CMS : les fondamentaux d&apos;un site performant", slug: "hubspot-cms-fondamentaux-site-internet-performant", category: "CRM & HubSpot", color: "#FF7A59" },
];

export default function ApparaitreReponsesClaudeChatgptPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("why-ai-citations");

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
        <div className="h-full bg-[#6D00CC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Decorative blobs */}
      <div className="hidden lg:block absolute top-[120px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#6D00CC]/5 blur-[100px] pointer-events-none" />
      <div className="hidden lg:block absolute top-[600px] right-[-250px] w-[400px] h-[400px] rounded-full bg-[#4B5EFC]/5 blur-[100px] pointer-events-none" />
      <div className="hidden lg:block absolute top-[1200px] left-[-150px] w-[350px] h-[350px] rounded-full bg-[#22C55E]/5 blur-[100px] pointer-events-none" />
      <div className="hidden lg:block absolute top-[1800px] right-[-200px] w-[450px] h-[450px] rounded-full bg-[#6D00CC]/5 blur-[100px] pointer-events-none" />

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
                        ? "border-[#6D00CC] text-[#111] font-medium"
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
                  <a href="https://twitter.com/intent/tweet?text=Apparaitre%20reponses%20Claude%20ChatGPT&url=https://ceres.agency/blog/apparaitre-reponses-claude-chatgpt" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/apparaitre-reponses-claude-chatgpt" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Apparaitre dans Claude et ChatGPT</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">28 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Comment apparaitre dans les reponses de Claude et ChatGPT
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Les moteurs de recherche generatifs redefinissent la visibilite en ligne. Etre cite par Claude, ChatGPT ou Perplexity quand un prospect pose une question sur votre secteur est le nouveau Graal du marketing B2B. Ce guide detaille les tactiques concretes pour optimiser votre contenu, vos donnees structurees et vos signaux d&apos;autorite afin de maximiser vos chances d&apos;apparaitre dans les reponses des IA generatives.
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
              {/* Section 1 : Pourquoi les citations IA */}
              <section id="why-ai-citations" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi les citations IA sont le nouveau SEO</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En 2026, plus de 30% des recherches informationnelles B2B passent par un moteur generatif (ChatGPT, Claude, Perplexity, Gemini) plutot que par Google. Ce chiffre a triple en 18 mois. Pour les entreprises B2B, cela signifie qu&apos;une part croissante de leurs prospects decouvrent, evaluent et comparent des solutions via des conversations avec des IA plutot qu&apos;en naviguant sur des pages de resultats Google.</p>
                    <p><strong className="text-[#111]">Le changement de paradigme.</strong> Avec Google, vous pouviez etre en page 2 et quand meme recevoir du trafic. Avec les moteurs generatifs, soit vous etes cite dans la reponse, soit vous etes invisible. Il n&apos;y a pas de position 11. Il n&apos;y a pas de &ldquo;voir plus de resultats&rdquo;. Le LLM synthetise une reponse unique et cite les sources qu&apos;il juge les plus pertinentes. Si votre site n&apos;en fait pas partie, vous n&apos;existez pas dans cette conversation.</p>
                    <p><strong className="text-[#111]">La valeur d&apos;une citation IA.</strong> Une citation par Claude ou ChatGPT n&apos;est pas un simple lien. C&apos;est une recommandation contextuelle. Quand un LLM repond &ldquo;selon Ceres, les 3 piliers du RevOps sont...&rdquo;, il positionne votre marque comme une reference du secteur. Les visiteurs qui cliquent sur ces citations ont un taux de conversion 3 a 5 fois superieur au trafic organique classique car ils arrivent deja convaincus de votre expertise.</p>
                    <p><strong className="text-[#111]">L&apos;effet compose.</strong> Quand un LLM cite votre contenu, il renforce votre autorite dans ses connaissances. Les modeles sont reentraines periodiquement et les sources frequemment citees gagnent en poids. Plus vous etes cite aujourd&apos;hui, plus vous avez de chances d&apos;etre cite demain. C&apos;est un cercle vertueux qui recompense les premiers investisseurs en GEO (Generative Engine Optimization).</p>
                    <p><strong className="text-[#111]">Le timing est critique.</strong> En 2026, la concurrence sur les citations IA en B2B francophone est encore faible. La majorite des entreprises n&apos;ont pas encore adapte leur strategie de contenu pour les LLMs. C&apos;est le moment ideal pour prendre de l&apos;avance. Les entreprises qui investissent dans le GEO maintenant beneficieront d&apos;un avantage competitif durable quand la discipline se generalisera d&apos;ici 2-3 ans.</p>
                    <p><strong className="text-[#111]">Les chiffres cles.</strong> Selon nos analyses sur 500 requetes B2B en francais testees dans ChatGPT, Claude et Perplexity, seulement 12% des PME B2B francaises sont citees au moins une fois. Les sources les plus souvent citees sont les articles de blog detailles (43%), les pages de definitions et glossaires (28%), les FAQ structurees (18%) et les etudes de cas (11%). Ces donnees montrent clairement que le contenu educatif et bien structure domine les citations IA.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 : Comment les LLMs choisissent */}
              <section id="how-llms-select" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment les LLMs selectionnent leurs sources</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pour apparaitre dans les reponses des IA, il faut comprendre comment elles selectionnent et utilisent les informations. Les LLMs utilisent deux mecanismes distincts : les connaissances pre-entrainees (ce que le modele &ldquo;sait&rdquo; de son training) et le RAG (Retrieval-Augmented Generation, quand le modele cherche en temps reel).</p>
                    <p><strong className="text-[#111]">Les connaissances pre-entrainees.</strong> GPT-4, Claude et Gemini sont entraines sur des corpus massifs de texte web. Les sites qui apparaissent frequemment, qui sont cites par d&apos;autres sources fiables, et qui utilisent un langage clair et structure ont plus de poids dans les connaissances du modele. Wikipedia, les sites gouvernementaux et les publications de reference dominent car ils sont surrepresentes dans les donnees d&apos;entrainement.</p>
                    <p><strong className="text-[#111]">Le RAG (recherche en temps reel).</strong> Quand ChatGPT navigue le web ou quand Perplexity genere une reponse, le modele effectue une recherche, recupere les pages pertinentes, les evalue, et synthetise une reponse en citant ses sources. Ici, les criteres de selection incluent la pertinence du contenu (repond-il a la question ?), la structure (le LLM peut-il facilement extraire l&apos;information ?), la fiabilite (le site fait-il autorite ?) et la fraicheur (le contenu est-il a jour ?).</p>
                    <p><strong className="text-[#111]">Les 5 criteres de selection.</strong></p>
                  </div>

                  <div className="mt-4 space-y-2">
                    {[
                      { critere: "Definitions claires et extractibles", desc: "Le LLM peut-il trouver une reponse nette en 1-2 phrases ? Les pages qui commencent par une definition explicite sont privilegiees.", poids: "Tres eleve" },
                      { critere: "Structure hierarchique (headings)", desc: "Des H1/H2/H3 logiques permettent au LLM de naviguer dans le contenu et d\u2019identifier les sections pertinentes pour chaque question.", poids: "Eleve" },
                      { critere: "Donnees structurees (JSON-LD)", desc: "Les schemas Article, FAQ, HowTo et Organization facilitent l\u2019extraction d\u2019informations par les LLMs.", poids: "Eleve" },
                      { critere: "Autorite et E-E-A-T", desc: "L\u2019expertise demontree, les citations par d\u2019autres sources, et la reputation du domaine renforcent la confiance du LLM.", poids: "Moyen-eleve" },
                      { critere: "Fraicheur du contenu", desc: "Les contenus recemment publies ou mis a jour sont preferes aux contenus anciens, surtout pour les sujets qui evoluent rapidement.", poids: "Moyen" },
                    ].map((c) => (
                      <div key={c.critere} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] mt-1.5 shrink-0" />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-[11px] font-semibold text-[#111]">{c.critere}</p>
                            <span className="text-[10px] text-[#6D00CC] font-medium">{c.poids}</span>
                          </div>
                          <p className="text-[10px] text-[#999] leading-[1.5]">{c.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Stats section */}
              <section className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Les chiffres de la visibilite IA en B2B</h2>
                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p>Pour comprendre l&apos;enjeu, voici les donnees que nous avons collectees en analysant la visibilite de 200 entreprises B2B francaises dans les reponses de ChatGPT, Claude et Perplexity sur 500 requetes sectorielles.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      {
                        stat: "12%",
                        label: "des PME B2B francaises sont citees au moins une fois dans les reponses IA",
                        color: "#6D00CC",
                      },
                      {
                        stat: "43%",
                        label: "des citations proviennent d\u2019articles de blog detailles et bien structures",
                        color: "#22C55E",
                      },
                      {
                        stat: "3-5x",
                        label: "taux de conversion superieur pour les visiteurs issus de citations IA",
                        color: "#FF7A59",
                      },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4 text-center"
                      >
                        <p
                          className="text-[22px] font-bold mb-1"
                          style={{ color: s.color }}
                        >
                          {s.stat}
                        </p>
                        <p className="text-[10px] text-[#888] leading-[1.4]">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-2">
                    {[
                      {
                        label: "Perplexity",
                        pct: 68,
                        desc: "Le LLM qui cite le plus souvent des sources B2B francophones",
                      },
                      {
                        label: "ChatGPT (browse)",
                        pct: 52,
                        desc: "Citations frequentes avec navigation web activee",
                      },
                      {
                        label: "Claude (web)",
                        pct: 47,
                        desc: "Progression rapide depuis l\u2019activation de la recherche web",
                      },
                      {
                        label: "Gemini",
                        pct: 38,
                        desc: "Citations moins frequentes mais en hausse depuis 2025",
                      },
                    ].map((bar) => (
                      <div key={bar.label} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-semibold text-white">{bar.label}</span>
                          <span className="text-[11px] font-bold text-[#6D00CC]">{bar.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-[#333] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#6D00CC]"
                            style={{ width: `${bar.pct}%` }}
                          />
                        </div>
                        <p className="text-[9px] text-[#888] mt-1">{bar.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p>
                      <strong className="text-white">Ce que ces chiffres signifient.</strong>{" "}
                      La fenetre d&apos;opportunite est grande ouverte. Avec seulement 12% des PME B2B francaises presentes dans les citations IA, la competition est encore faible. Chaque page que vous optimisez pour les LLMs a une probabilite elevee d&apos;etre selectionnee comme source, simplement parce que peu de contenus francophones respectent les criteres de selection des moteurs generatifs.
                    </p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : Optimiser son contenu */}
              <section id="content-optimization" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Optimiser son contenu pour les LLMs</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;optimisation du contenu pour les LLMs est differente de l&apos;optimisation SEO classique. Le SEO optimise pour un algorithme de classement. Le GEO optimise pour un modele de langage qui lit, comprend et synthetise. Voici les techniques concretes qui augmentent vos chances d&apos;etre cite.</p>
                    <p><strong className="text-[#111]">Technique 1 : ecrire des definitions snippet-ready.</strong> Quand un utilisateur demande &ldquo;qu&apos;est-ce que le RevOps&rdquo;, le LLM cherche une definition claire et concise qu&apos;il peut extraire et citer. Ecrivez vos definitions en une ou deux phrases au debut de chaque section, avec le format &ldquo;[Terme] est [definition].&rdquo; Exemple : &ldquo;Le RevOps (Revenue Operations) est la discipline qui aligne les equipes marketing, commerciales et customer success autour d&apos;un objectif commun de croissance previsible du revenu.&rdquo; Ce format est directement extractible par un LLM.</p>
                    <p><strong className="text-[#111]">Technique 2 : utiliser des listes structurees.</strong> Les LLMs adorent les listes. Quand vous enumerez des etapes, des criteres ou des outils, utilisez des listes ordonnees ou a puces plutot que des paragraphes. Une liste &ldquo;Les 5 piliers du RevOps : 1. Alignement des equipes, 2. Donnees unifiees, 3. Automatisation des processus, 4. Mesure du revenu, 5. Optimisation continue&rdquo; est beaucoup plus facilement extractible par un LLM qu&apos;un paragraphe qui melange ces informations.</p>
                    <p><strong className="text-[#111]">Technique 3 : inclure des donnees chiffrees sourcees.</strong> Les LLMs privilegient les sources qui contiennent des donnees factuelles. &ldquo;Le taux de conversion moyen en B2B SaaS est de 2,35% selon une etude HubSpot 2025&rdquo; est plus citable que &ldquo;le taux de conversion est generalement bon&rdquo;. Incluez des statistiques, des benchmarks et des chiffres dans chaque article, et citez toujours vos sources.</p>
                    <p><strong className="text-[#111]">Technique 4 : repondre aux questions specifiques.</strong> Identifiez les questions que votre audience pose aux LLMs (pas seulement a Google) et repondez-y explicitement. Les requetes LLM sont souvent plus longues et plus specifiques que les requetes Google. &ldquo;Quel est le meilleur CRM pour une PME B2B de 20 personnes en France ?&rdquo; est une question typique posee a un LLM. Si votre contenu repond precisement a cette question avec des arguments structures, il a de fortes chances d&apos;etre cite.</p>
                    <p><strong className="text-[#111]">Technique 5 : maintenir la fraicheur.</strong> Mettez a jour vos contenus strategiques au minimum tous les 3 mois. Ajoutez les dates de publication et de derniere mise a jour visibles sur chaque page. Les LLMs tiennent compte de la fraicheur, surtout pour les sujets qui evoluent (tarifs, fonctionnalites, tendances). Un guide &ldquo;2026&rdquo; sera privilegie a un guide &ldquo;2024&rdquo; pour la meme requete.</p>
                    <p><strong className="text-[#111]">Technique 6 : creer du contenu &ldquo;LLM-native&rdquo;.</strong> Certains formats de contenu sont nativement optimises pour les LLMs. Les glossaires (une definition claire par terme), les comparatifs structures (tableau avec criteres, scores et verdicts), les guides pas-a-pas (etapes numerotees avec resultats attendus) et les FAQ exhaustives sont les formats les plus souvent extraits par les LLMs. Creez au moins un contenu dans chacun de ces formats pour chaque thematique strategique de votre entreprise.</p>
                    <p><strong className="text-[#111]">Technique 7 : citer ses sources.</strong> Les LLMs accordent plus de confiance aux contenus qui citent leurs sources. Un article qui reference une etude Forrester, un rapport Gartner ou des donnees HubSpot est percu comme plus fiable qu&apos;un article sans aucune reference. Citez systematiquement vos sources (etudes, rapports, donnees officielles) et incluez des liens vers les sources originales. Cette transparence renforce votre credibilite aux yeux des LLMs et des lecteurs.</p>
                    <p><strong className="text-[#111]">Technique 8 : optimiser les titres et meta descriptions.</strong> Les LLMs en mode RAG lisent les titres et descriptions avant de decider si une page merite d&apos;etre lue en entier. Un titre qui contient la question cible et une meta description qui resume la reponse augmentent la probabilite que le LLM selectionne votre page. Evitez les titres putaclick qui ne decrivent pas le contenu reel de la page.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Donnees structurees */}
              <section id="structured-data" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Donnees structurees : le langage que les LLMs comprennent</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les donnees structurees (schema.org, JSON-LD) sont des metadonnees qui decrivent le contenu de vos pages dans un format machine-readable. Elles aident les moteurs de recherche et les LLMs a comprendre ce que contient votre page, qui l&apos;a ecrit, quand elle a ete publiee, et quel type d&apos;information elle fournit. C&apos;est le pont entre le contenu humain et la comprehension machine.</p>
                    <p><strong className="text-[#111]">Les schemas essentiels pour le GEO.</strong></p>
                  </div>

                  <div className="mt-4 space-y-2">
                    {[
                      { schema: "Article", desc: "Indique que la page est un article avec un auteur, une date de publication, un sujet et un nombre de mots. Obligatoire pour chaque article de blog.", priorite: "Critique" },
                      { schema: "FAQPage", desc: "Structure les questions-reponses de votre page en paires Q&A extractibles. Chaque FAQ est un candidat direct pour une citation LLM.", priorite: "Critique" },
                      { schema: "Organization", desc: "Decrit votre entreprise : nom, logo, adresse, fondateur, date de creation. Renforce l\u2019identite de votre marque dans les connaissances du LLM.", priorite: "Haute" },
                      { schema: "HowTo", desc: "Structure les guides pas a pas en etapes numerotees. Ideal pour les tutoriels et les guides d\u2019implementation.", priorite: "Haute" },
                      { schema: "Person", desc: "Decrit l\u2019auteur avec ses qualifications, son poste et ses profils sociaux. Renforce le E-E-A-T de vos contenus.", priorite: "Moyenne" },
                      { schema: "BreadcrumbList", desc: "Indique la hierarchie de navigation de votre site. Aide le LLM a comprendre la structure de votre contenu.", priorite: "Moyenne" },
                    ].map((s) => (
                      <div key={s.schema} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6D00CC]" />
                          <p className="text-[12px] font-semibold text-[#111]">{s.schema}</p>
                          <span className={`text-[9px] font-bold uppercase ml-auto ${s.priorite === "Critique" ? "text-[#FF3B30]" : s.priorite === "Haute" ? "text-[#FF7A59]" : "text-[#F59E0B]"}`}>{s.priorite}</span>
                        </div>
                        <p className="text-[10px] text-[#777] leading-[1.5]">{s.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Implementation technique.</strong> Les schemas JSON-LD se placent dans la balise head de chaque page ou en inline dans le body. Utilisez le format JSON-LD (recommande par Google) plutot que les microdata ou RDFa. Validez vos schemas avec le Rich Results Test de Google et le Schema Markup Validator. Un schema invalide est pire que pas de schema car il peut envoyer des signaux contradictoires au LLM.</p>
                    <p><strong className="text-[#111]">Erreurs frequentes.</strong> Ne mettez pas de schema FAQPage sur des pages qui ne contiennent pas de vraies questions-reponses. Ne remplissez pas le schema Article avec des informations generiques (auteur &ldquo;Admin&rdquo;, date de publication absente). Et surtout, assurez-vous que les informations du schema correspondent exactement au contenu visible de la page. Les LLMs detectent les incoherences entre le schema et le contenu reel.</p>
                    <p><strong className="text-[#111]">Couverture ideale des schemas.</strong> Chaque article de blog doit avoir un schema Article avec auteur, date, sujet et wordCount. Chaque page produit ou service doit avoir un schema Organization et un schema Product/Service. Chaque page qui contient des Q&A doit avoir un schema FAQPage. Chaque guide pas-a-pas doit avoir un schema HowTo. La page A propos doit avoir un schema Organization complet avec fondateur, date de creation, adresse et logo. Un audit rapide de votre site revelera generalement que moins de 20% des pages ont des schemas corrects. C&apos;est un quick win majeur pour le GEO.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Autorite et E-E-A-T */}
              <section id="authority-eeat" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Autorite et E-E-A-T : les signaux de confiance pour les LLMs</h2>
                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p>Le E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) est le cadre que Google utilise pour evaluer la qualite d&apos;un contenu. Les LLMs utilisent des criteres similaires, meme si les mecanismes sont differents. Un contenu ecrit par un expert reconnu, publie sur un site d&apos;autorite, et cite par d&apos;autres sources fiables aura plus de poids qu&apos;un contenu anonyme sur un blog inconnu.</p>
                    <p><strong className="text-white">Experience.</strong> Montrez que vous avez une experience directe du sujet. Partagez des etudes de cas reelles (avec l&apos;accord du client), des donnees issues de votre pratique, et des exemples concrets de ce que vous avez mis en place. Un article qui dit &ldquo;nous avons deploye cette strategie pour 30 clients et le resultat moyen est +45% de MQL&rdquo; est infiniment plus citable qu&apos;un article generique compile a partir d&apos;autres sources.</p>
                    <p><strong className="text-white">Expertise.</strong> Identifiez clairement l&apos;auteur de chaque article avec sa biographie, ses qualifications et son poste. Un article signe par &ldquo;Guillaume Delachet, fondateur de Ceres, 10 ans d&apos;experience en RevOps B2B&rdquo; a plus de poids qu&apos;un article signe par &ldquo;L&apos;equipe marketing&rdquo;. Ajoutez un schema Person avec les liens vers LinkedIn et les publications de l&apos;auteur.</p>
                    <p><strong className="text-white">Authoritativeness.</strong> L&apos;autorite se construit par les backlinks, les mentions et les citations. Publiez des etudes originales que d&apos;autres sites voudront citer. Intervenez en tant qu&apos;expert dans des podcasts, des webinaires et des publications sectorielles. Chaque mention externe de votre marque renforce votre autorite aux yeux des LLMs.</p>
                    <p><strong className="text-white">Trustworthiness.</strong> La confiance se manifeste par la transparence : politique de confidentialite, mentions legales, HTTPS, avis clients verifiables, certifications. Un site qui inspire confiance aux utilisateurs inspire aussi confiance aux LLMs car les memes signaux sont evalues.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-3">
                    {[
                      { stat: "E", label: "Experience : prouver la pratique terrain", color: "#6D00CC" },
                      { stat: "E", label: "Expertise : demontrer la competence pointue", color: "#4B5EFC" },
                      { stat: "A", label: "Autorite : etre cite par les autres", color: "#22C55E" },
                      { stat: "T", label: "Confiance : transparence et fiabilite", color: "#FF7A59" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-3 text-center">
                        <p className="text-[22px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[9px] text-[#888] leading-[1.3]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : FAQ et entites */}
              <section id="faq-entity" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">FAQ et optimisation des entites</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les FAQ sont le format de contenu le plus directement exploitable par les LLMs. Une question clairement formulee suivie d&apos;une reponse concise et factuelle est le format ideal pour etre cite dans une reponse generee. Voici comment structurer vos FAQ pour maximiser la visibilite IA.</p>
                    <p><strong className="text-[#111]">Identifier les bonnes questions.</strong> Les questions a cibler ne sont pas les memes que pour le SEO. Les utilisateurs posent aux LLMs des questions plus longues, plus specifiques et plus comparatives. &ldquo;Quelle est la difference entre HubSpot Pro et Enterprise pour une PME de 30 personnes ?&rdquo; est une question LLM typique. Utilisez les conversations reelles de vos commerciaux (les questions des prospects) comme source d&apos;inspiration pour vos FAQ.</p>
                    <p><strong className="text-[#111]">Structurer les reponses.</strong> Chaque reponse doit commencer par une phrase directe qui repond a la question, suivie de details et d&apos;exemples. Le LLM extraira souvent la premiere phrase comme reponse. Si cette premiere phrase est vague ou introductive, il passera a une autre source. Exemple optimal : &ldquo;La difference principale entre HubSpot Pro et Enterprise est [reponse directe]. Plus precisement, [details].&rdquo;</p>
                    <p><strong className="text-[#111]">Optimisation des entites.</strong> Les LLMs raisonnent en termes d&apos;entites (concepts, marques, personnes, outils) et de relations entre entites. Pour renforcer votre presence, mentionnez explicitement les entites pertinentes dans votre contenu et etablissez des relations claires. &ldquo;Ceres est une agence RevOps specialisee dans HubSpot pour les entreprises B2B en France&rdquo; contient 4 entites (Ceres, RevOps, HubSpot, B2B France) avec des relations explicites. Plus vous renforcez ces associations, plus le LLM les memorise.</p>
                    <p><strong className="text-[#111]">Schema FAQPage.</strong> Implementez le schema FAQPage sur chaque page qui contient des questions-reponses. Ce schema est directement exploitable par les LLMs en mode RAG. Incluez 5 a 10 questions-reponses par page, chacune avec une reponse de 2 a 4 phrases. Evitez les FAQ purement commerciales (&ldquo;Pourquoi choisir Ceres ?&rdquo;) au profit de FAQ informatives qui apportent une vraie valeur.</p>
                    <p><strong className="text-[#111]">Construire un graphe d&apos;entites.</strong> Au-dela des FAQ individuelles, pensez votre contenu comme un graphe d&apos;entites interconnectees. Votre marque est une entite. Vos produits sont des entites. Vos experts sont des entites. Vos concurrents sont des entites. Chaque article de blog doit explicitement etablir des liens entre ces entites. &ldquo;Ceres utilise HubSpot pour implementer des strategies RevOps chez des PME B2B en France, en alternative a des agences comme [concurrent]&rdquo; cree un reseau de relations que les LLMs memorisent et utilisent pour generer des recommandations contextuelles.</p>
                    <p><strong className="text-[#111]">Les definitions de niche sont votre meilleure arme.</strong> Les requetes de niche (vocabulaire sectoriel, acronymes specifiques, concepts techniques) sont les plus faciles a conquerer en GEO car la concurrence est faible. Si vous etes le seul site en francais a proposer une definition claire de &ldquo;Net Revenue Retention&rdquo; ou de &ldquo;product-qualified lead&rdquo;, vous serez cite par defaut. Creez un glossaire complet de votre secteur avec une page dediee par terme, chacune optimisee avec un schema DefinedTerm et une definition snippet-ready.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Monitorer sa presence */}
              <section id="monitoring-presence" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Monitorer votre presence dans les reponses IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Contrairement au SEO ou Google Search Console fournit des donnees detaillees, les LLMs ne partagent pas (encore) de donnees de citation. Le monitoring de la visibilite IA repose donc sur un mix de tests manuels et d&apos;outils emergents.</p>
                    <p><strong className="text-[#111]">Test manuel systematique.</strong> Creez une liste de 20 a 30 requetes cibles : les questions que vos prospects posent le plus souvent sur votre secteur, vos concurrents et vos solutions. Chaque mois, testez ces requetes dans ChatGPT (avec navigation web activee), Claude et Perplexity. Pour chaque requete, notez : etes-vous cite (oui/non), en quelle position dans les sources, quels concurrents sont cites, et quelle est la qualite de la citation (mention de la marque, lien, reformulation de votre contenu).</p>
                    <p><strong className="text-[#111]">Methode de tracking.</strong> Utilisez un tableur avec les colonnes suivantes : requete, LLM teste, date, cite (oui/non), position dans les sources, URL citee, concurrents cites. Calculez mensuellement votre &ldquo;share of voice IA&rdquo; : le pourcentage de requetes cibles ou vous etes cite par rapport au total. Suivez l&apos;evolution de ce KPI dans le temps pour mesurer l&apos;impact de vos optimisations GEO.</p>
                    <p><strong className="text-[#111]">Les limites du monitoring manuel.</strong> Les reponses des LLMs ne sont pas deterministes : la meme question peut donner des reponses differentes a quelques minutes d&apos;intervalle. Le test manuel ne capte donc qu&apos;un echantillon. Pour une mesure plus fiable, testez chaque requete 3 fois a des moments differents et calculez le taux de citation moyen. Malgre ces limites, le monitoring manuel reste la methode la plus fiable en 2026 car les outils automatises sont encore immatures.</p>
                    <p><strong className="text-[#111]">Analyser la concurrence.</strong> Le monitoring ne se limite pas a votre propre visibilite. Identifiez les sources que les LLMs citent a votre place et analysez pourquoi. Quels types de contenu vos concurrents produisent-ils ? Quels schemas utilisent-ils ? Quelle est la structure de leurs definitions ? En comprenant ce qui fonctionne pour vos concurrents, vous pouvez adapter et ameliorer votre propre strategie. Creez un tableau comparatif mensuel : pour chaque requete, notez les sources citees par les 3 principaux LLMs et identifiez les patterns communs.</p>
                    <p><strong className="text-[#111]">Mesurer l&apos;impact sur le business.</strong> Le share of voice IA est une metrique de notoriete. Mais le KPI ultime est l&apos;impact business : combien de visiteurs arrivent sur votre site via une citation IA, et combien se convertissent en leads et en clients. Utilisez les UTM et le referral tracking pour identifier le trafic provenant de Perplexity (le seul LLM qui genere du trafic mesurable via des liens cliquables). Pour ChatGPT et Claude, mesurez indirectement l&apos;impact par l&apos;augmentation du trafic direct et des recherches de marque, qui sont les signes d&apos;une notoriete renforcee par les citations IA.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Outils de visibilite IA */}
              <section id="tools-visibility" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Outils pour mesurer et ameliorer la visibilite IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Plusieurs outils emergent pour automatiser le monitoring de la visibilite dans les reponses des LLMs. Voici ceux que nous utilisons et recommandons.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { nom: "Otterly.AI", domain: "otterly.ai", desc: "Monitoring automatise de la visibilite dans ChatGPT, Claude et Perplexity. Suivez vos requetes cibles, comparez avec vos concurrents, et recevez des alertes quand votre visibilite change. L\u2019outil le plus specialise du marche en 2026." },
                      { nom: "Profound", domain: "getprofound.ai", desc: "Plateforme d\u2019analyse GEO qui surveille votre share of voice dans les reponses IA. Fournit des recommandations d\u2019optimisation basees sur l\u2019analyse de vos contenus vs ceux des concurrents cites." },
                      { nom: "Perplexity", domain: "perplexity.ai", desc: "Le moteur generatif le plus transparent sur ses sources. Testez manuellement vos requetes et verifiez si votre site est cite. Perplexity affiche toujours les sources utilisees pour generer la reponse." },
                      { nom: "Schema Markup Validator", domain: "validator.schema.org", desc: "Outil gratuit pour valider vos donnees structurees JSON-LD. Indispensable pour s\u2019assurer que vos schemas sont corrects et interpretables par les LLMs." },
                      { nom: "Screaming Frog", domain: "screamingfrog.co.uk", desc: "Crawler SEO qui peut extraire et valider les donnees structurees de toutes vos pages. Utilisez-le pour un audit technique GEO complet de votre site." },
                    ].map((outil) => (
                      <div key={outil.nom} className="rounded-xl border border-[#F2F2F2] p-4 flex items-start gap-3">
                        <img src={`https://www.google.com/s2/favicons?domain=${outil.domain}&sz=32`} alt={outil.nom} className="w-5 h-5 mt-0.5" />
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{outil.nom}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{outil.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 : Methode Ceres GEO */}
              <section id="ceres-geo-method" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La methodologie Ceres pour le GEO</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chez Ceres, nous avons developpe une methodologie GEO en 4 phases que nous deploeons pour nos clients B2B depuis debut 2025. Voici concretement ce que nous mettons en place.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { phase: "Phase 1", titre: "Audit de visibilite IA (2 semaines)", desc: "Test de 50+ requetes cibles dans ChatGPT, Claude et Perplexity. Analyse de la visibilite actuelle vs concurrents. Identification des gaps de contenu et des opportunites. Audit technique des donnees structurees existantes. Livrable : rapport avec score de visibilite IA et recommandations prioritaires." },
                      { phase: "Phase 2", titre: "Optimisation technique (3 semaines)", desc: "Deploiement des schemas JSON-LD (Article, FAQ, Organization, HowTo, Person). Restructuration des headings pour la lisibilite LLM. Ajout des dates de publication et mise a jour. Configuration du sitemap et des metadonnees. Validation avec les outils de test." },
                      { phase: "Phase 3", titre: "Optimisation editoriale (4 semaines)", desc: "Reecriture des definitions en format snippet-ready. Ajout de FAQ structurees sur les pages strategiques. Renforcement du E-E-A-T (biographies auteur, etudes de cas, donnees originales). Creation de contenu natif GEO sur les requetes cibles ou le client est absent." },
                      { phase: "Phase 4", titre: "Suivi et optimisation continue (mensuel)", desc: "Monitoring mensuel de la visibilite IA sur les requetes cibles. Rapports avec evolution du share of voice IA. Identification des nouvelles requetes a cibler. Ajustements des contenus en fonction des resultats. Tests A/B de formats de contenu." },
                    ].map((p) => (
                      <div key={p.phase} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold text-[#6D00CC] uppercase">{p.phase}</span>
                          <span className="text-[12px] font-semibold text-[#111]">{p.titre}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{p.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Resultats observes.</strong> Sur nos 15 premiers clients GEO, nous observons en moyenne une augmentation de 40 a 60% du taux de citation dans les reponses IA apres 3 mois d&apos;optimisation. Les requetes les plus faciles a conquerer sont les requetes de niche ou la concurrence GEO est encore faible (terminologie sectorielle, comparatifs specifiques, guides d&apos;implementation). Les requetes generiques (type &ldquo;qu&apos;est-ce que le CRM&rdquo;) restent dominees par Wikipedia et les grands editeurs.</p>
                    <p><strong className="text-[#111]">Investissement et ROI.</strong> Un programme GEO complet (audit + optimisation technique + editoriale + suivi mensuel) represente un investissement de 5 000 a 12 000 EUR pour les 3 premiers mois, puis 1 500 a 3 000 EUR par mois pour le suivi continu. Le ROI est mesure en termes de notoriete (share of voice IA), de trafic qualifie (visiteurs provenant de citations IA) et de pipeline genere (leads attribues aux citations IA). Les premiers resultats mesurables apparaissent apres 6 a 8 semaines.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 : Futur de la recherche IA */}
              <section id="future-ai-search" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le futur de la recherche IA et ce que cela signifie pour votre entreprise</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La recherche generative n&apos;en est qu&apos;a ses debuts. Voici les tendances qui vont transformer la visibilite en ligne dans les 2-3 prochaines annees et comment vous y preparer.</p>
                    <p><strong className="text-[#111]">Les AI Overviews de Google.</strong> Google integre de plus en plus de reponses generees par IA en haut de ses resultats de recherche (AI Overviews). D&apos;ici 2027, la majorite des requetes informationnelles auront un AI Overview. Cela signifie que meme les utilisateurs qui continuent a utiliser Google recevront des reponses synthetisees par IA. L&apos;optimisation GEO devient donc indispensable meme pour le SEO classique.</p>
                    <p><strong className="text-[#111]">Les agents IA autonomes.</strong> Les agents IA (comme les GPTs, les assistants Claude ou les agents Gemini) effectuent des recherches et prennent des decisions de maniere autonome. Un agent IA qui recherche un fournisseur CRM pour son utilisateur ne cliquera pas sur 10 liens : il evaluera les sources, comparera les informations et fera une recommandation. Etre bien positionne dans les connaissances de ces agents devient un avantage concurrentiel direct.</p>
                    <p><strong className="text-[#111]">La recherche multimodale.</strong> Les LLMs integrent de plus en plus d&apos;images, de videos et de donnees structurees dans leurs reponses. Optimisez vos visuels (alt text descriptif, schemas, infographies) autant que votre texte. Un diagramme clair de votre processus RevOps a des chances d&apos;etre directement utilise par un LLM dans sa reponse.</p>
                    <p><strong className="text-[#111]">Le knowledge graph IA.</strong> Les LLMs construisent progressivement leurs propres graphes de connaissances ou les entites (entreprises, personnes, concepts) sont reliees entre elles. Renforcer votre presence dans ces graphes en etablissant des associations claires et repetees entre votre marque et votre domaine d&apos;expertise est une strategie a long terme qui portera ses fruits de maniere exponentielle.</p>
                    <p><strong className="text-[#111]">La standardisation des citations IA.</strong> D&apos;ici 2028, nous anticipons que les principaux LLMs standardiseront la maniere dont ils citent leurs sources, avec des metriques de citation accessibles aux editeurs (similaires a Google Search Console pour le SEO). Cette standardisation creera un ecosysteme de mesure et d&apos;optimisation plus mature. Les entreprises qui auront deja investi dans le GEO auront accumule des donnees historiques et une autorite etablie qui leur donneront un avantage durable sur les nouveaux entrants.</p>
                    <p><strong className="text-[#111]">Notre conviction.</strong> Le GEO n&apos;est pas une mode passagere. C&apos;est une transformation structurelle de la visibilite en ligne comparable a l&apos;avenement du SEO dans les annees 2000. Les entreprises B2B qui investissent dans le GEO aujourd&apos;hui prennent une avance de 2-3 ans sur leurs concurrents. Et contrairement au SEA (publicite payante), cette avance est durable car elle repose sur l&apos;autorite, le contenu et la reputation, des actifs qui se renforcent avec le temps. L&apos;investissement dans le GEO est l&apos;un des meilleurs retours sur investissement marketing qu&apos;une entreprise B2B puisse faire en 2026.</p>
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
                    <p className="text-[12px] font-semibold text-[#111] leading-[1.4] group-hover:text-[#6D00CC] transition-colors">{a.title}</p>
                    <p className="text-[10px] text-[#999] mt-2">{a.category}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous voulez apparaitre dans les reponses de Claude et ChatGPT ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On audite votre visibilite IA, on optimise votre contenu et vos donnees structurees, et on mesure les resultats. Premiers gains visibles en 6 a 8 semaines.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un audit GEO
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
