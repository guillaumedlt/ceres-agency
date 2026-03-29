"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GEO : Generative Engine Optimization, optimiser son site pour les LLMs",
  description: "Guide complet du GEO (Generative Engine Optimization) : definition, differences avec le SEO, 10 criteres pour apparaitre dans ChatGPT et Claude, JSON-LD, FAQ schema, E-E-A-T. Methode actionnable pour les entreprises B2B.",
  author: { "@type": "Person", name: "Guillaume Delachet" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/geo-optimiser-site-llm" },
  articleSection: "SEO & GEO",
  wordCount: 3200,
  inLanguage: "fr",
};

const sections = [
  { id: "definition", title: "C\u2019est quoi le GEO" },
  { id: "geo-vs-seo", title: "GEO vs SEO" },
  { id: "comment-llm-choisissent", title: "Comment les LLMs choisissent" },
  { id: "dix-criteres", title: "Les 10 criteres GEO" },
  { id: "structured-data", title: "Structured data et JSON-LD" },
  { id: "faq-schema", title: "FAQ schema et definitions" },
  { id: "eeat", title: "E-E-A-T et autorite" },
  { id: "optimiser-contenu", title: "Optimiser son contenu" },
  { id: "outils-mesure", title: "Outils pour mesurer" },
  { id: "ceres-geo", title: "Ce que Ceres fait" },
];

const relatedArticles = [
  { title: "Apparaitre dans les reponses de Claude et ChatGPT", slug: "apparaitre-reponses-claude-chatgpt", category: "SEO & GEO", color: "#4B5EFC" },
  { title: "Stack technologique RevOps 2026", slug: "stack-technologique-revops-2026", category: "RevOps", color: "#22C55E" },
  { title: "HubSpot CMS : les fondamentaux d\u2019un site performant", slug: "hubspot-cms-fondamentaux-site-internet-performant", category: "CRM & HubSpot", color: "#FF7A59" },
];

export default function GeoOptimiserSiteLlmArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("definition");

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
                  <a href="https://twitter.com/intent/tweet?text=GEO%20Generative%20Engine%20Optimization%20optimiser%20site%20LLM&url=https://ceres.agency/blog/geo-optimiser-site-llm" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/geo-optimiser-site-llm" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">GEO : Generative Engine Optimization</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>SEO &amp; GEO</Badge>
                <span className="text-[11px] text-[#CCC]">22 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                GEO : Generative Engine Optimization, optimiser son site pour les LLMs
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le SEO classique optimise pour les pages de resultats Google. Le GEO optimise pour les reponses generees par ChatGPT, Claude, Perplexity et les autres moteurs IA. Ce guide detaille les 10 criteres que les LLMs utilisent pour selectionner leurs sources, et les actions concretes pour y apparaitre. Une discipline nouvelle, encore peu documentee en francais, qui va redefinir la visibilite en ligne des entreprises B2B.
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
              {/* Section 1 : Definition du GEO */}
              {/* ================================================================ */}
              <section id="definition" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">C&apos;est quoi le GEO (Generative Engine Optimization)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le GEO, ou Generative Engine Optimization, designe l&apos;ensemble des techniques qui permettent a un site web d&apos;etre cite, reference ou utilise comme source par les modeles de langage (LLMs) lorsqu&apos;ils generent des reponses. En d&apos;autres termes, le GEO est au SEO ce que ChatGPT est a Google : une nouvelle couche d&apos;optimisation adaptee a la maniere dont les intelligences artificielles generatives selectionnent et synthetisent l&apos;information.</p>
                    <p>Le terme a ete formalise fin 2024 par des chercheurs de Georgia Tech, de l&apos;IIT Delhi et de l&apos;Allen Institute dans un article de recherche intitule &ldquo;GEO: Generative Engine Optimization&rdquo;. Leur constat etait simple : les moteurs de recherche generatifs (Perplexity, SearchGPT, les reponses IA de Google) ne fonctionnent pas comme les moteurs traditionnels. Au lieu de presenter une liste de 10 liens bleus, ils synthetisent une reponse unique en s&apos;appuyant sur les sources qu&apos;ils jugent les plus fiables, les plus claires et les plus pertinentes.</p>
                    <p>Cela change radicalement la donne pour les entreprises. Avec le SEO classique, il suffisait d&apos;apparaitre dans le top 10 pour capter du trafic. Avec les moteurs generatifs, soit vous etes cite dans la reponse, soit vous etes invisible. Il n&apos;y a pas de deuxieme page. Il n&apos;y a meme pas de premier lien : il y a une seule reponse generee, et vous en faites partie ou non.</p>
                    <p><strong className="text-[#111]">Pourquoi c&apos;est crucial en 2026.</strong> Selon les dernieres donnees de Gartner, 25% des requetes informationnelles B2B passent desormais par un moteur generatif plutot que par Google Search. Chez les 18-35 ans, ce chiffre depasse 40%. La tendance est claire et accelere. Les entreprises qui n&apos;optimisent pas pour les LLMs aujourd&apos;hui se retrouveront invisibles dans les reponses generees de demain, exactement comme celles qui n&apos;avaient pas de site web en 2005 ou pas de strategie SEO en 2015.</p>
                    <p><strong className="text-[#111]">Definition synthetique.</strong> Le GEO est la discipline qui consiste a structurer, rediger et enrichir son contenu web pour maximiser la probabilite d&apos;etre selectionne comme source par les modeles de langage generatifs (ChatGPT, Claude, Gemini, Perplexity) lorsqu&apos;un utilisateur pose une question pertinente pour votre activite.</p>
                  </div>

                  {/* Key stats */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "25%", label: "des requetes B2B passent par un LLM en 2026", color: "#4B5EFC" },
                      { stat: "0", label: "liens bleus dans une reponse generee", color: "#FF7A59" },
                      { stat: "3x", label: "croissance annuelle de l\u2019usage des moteurs IA", color: "#22C55E" },
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

              {/* ================================================================ */}
              {/* Section 2 : GEO vs SEO */}
              {/* ================================================================ */}
              <section id="geo-vs-seo" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">GEO vs SEO : deux disciplines complementaires</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le GEO ne remplace pas le SEO. Il le complete. Mais les deux disciplines fonctionnent sur des logiques fondamentalement differentes qu&apos;il faut comprendre pour adapter sa strategie de contenu. Le SEO optimise pour un algorithme de classement qui evalue des pages. Le GEO optimise pour un modele de langage qui evalue des informations.</p>
                    <p><strong className="text-[#111]">Le SEO classique repose sur trois piliers.</strong> L&apos;autorite du domaine (backlinks, anciennete, confiance), la pertinence du contenu (mots-cles, intention de recherche, couverture thematique) et les signaux techniques (vitesse, mobile-first, Core Web Vitals). L&apos;objectif est d&apos;apparaitre le plus haut possible dans une liste ordonnee de resultats.</p>
                    <p><strong className="text-[#111]">Le GEO repose sur des piliers differents.</strong> La clarte des definitions (le LLM peut-il extraire une reponse nette ?), la structure des donnees (JSON-LD, schemas, headings hierarchiques), la fiabilite perceptible (citations, sources, expertise demontree) et la fraicheur du contenu (date de publication recente, mises a jour). L&apos;objectif n&apos;est pas d&apos;apparaitre dans une liste mais d&apos;etre integre dans une reponse synthetisee.</p>
                    <p><strong className="text-[#111]">La difference fondamentale.</strong> En SEO, un utilisateur clique sur votre lien puis navigue sur votre site. En GEO, un utilisateur recoit votre information sans necessairement visiter votre site. Cela peut sembler negatif, mais c&apos;est en realite un levier de notoriete puissant : etre cite par ChatGPT comme source credible positionne votre marque comme reference du secteur. Et les utilisateurs qui cliquent sur les liens de citation ont un taux de conversion significativement plus eleve que le trafic organique classique, car ils arrivent deja convaincus de votre expertise.</p>
                  </div>

                  {/* CSS Mockup : Comparaison SEO vs GEO */}
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3 mt-6">Comparaison SEO vs GEO</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="border-b border-[#E8E8E8]">
                          <th className="text-left py-2 pr-3 text-[#999] font-semibold">Critere</th>
                          <th className="text-left py-2 pr-3 text-[#999] font-semibold">SEO classique</th>
                          <th className="text-left py-2 text-[#999] font-semibold">GEO</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#555]">
                        {[
                          { critere: "Objectif", seo: "Classement dans les SERPs", geo: "Etre cite dans les reponses IA" },
                          { critere: "Moteur cible", seo: "Google, Bing", geo: "ChatGPT, Claude, Perplexity, Gemini" },
                          { critere: "Format du resultat", seo: "Liste de 10 liens", geo: "Reponse synthetisee unique" },
                          { critere: "Signal cle", seo: "Backlinks et autorite", geo: "Clarte, structure, fiabilite" },
                          { critere: "KPI principal", seo: "Position, CTR, trafic", geo: "Nombre de citations, share of voice IA" },
                          { critere: "Contenu ideal", seo: "Long-form optimise mots-cles", geo: "Definitions claires, donnees structurees" },
                          { critere: "Technique", seo: "Core Web Vitals, sitemap", geo: "JSON-LD, FAQ schema, headings" },
                          { critere: "Mise a jour", seo: "Tous les 3-6 mois", geo: "Frequence elevee, fraicheur critique" },
                          { critere: "Trafic genere", seo: "Clic vers le site", geo: "Citation avec lien optionnel" },
                          { critere: "Maturite", seo: "25 ans, discipline etablie", geo: "2 ans, discipline emergente" },
                        ].map((row) => (
                          <tr key={row.critere} className="border-b border-[#F5F5F5]">
                            <td className="py-2 pr-3 font-medium text-[#111]">{row.critere}</td>
                            <td className="py-2 pr-3">{row.seo}</td>
                            <td className="py-2">{row.geo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Bonne nouvelle.</strong> La majorite des bonnes pratiques GEO renforcent aussi le SEO. Structurer son contenu avec des headings clairs, ajouter du JSON-LD, ecrire des definitions precises et citer ses sources : tout cela ameliore aussi votre classement Google. Le GEO n&apos;est pas une revolution qui invalide le SEO. C&apos;est une extension naturelle qui pousse a etre encore plus rigoureux dans la qualite et la structure du contenu.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 3 : Comment les LLMs choisissent leurs sources */}
              {/* ================================================================ */}
              <section id="comment-llm-choisissent" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=openai.com&sz=32" alt="OpenAI" className="w-5 h-5" />
                    <img src="https://www.google.com/s2/favicons?domain=anthropic.com&sz=32" alt="Anthropic" className="w-5 h-5" />
                    <img src="https://www.google.com/s2/favicons?domain=perplexity.ai&sz=32" alt="Perplexity" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Comment les LLMs choisissent leurs sources</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pour optimiser son contenu pour les LLMs, il faut comprendre comment ces modeles selectionnent et utilisent les informations. Le processus differe selon qu&apos;on parle de connaissances pre-entrainees (ce que le modele &ldquo;sait&rdquo; de son training) ou de retrieval augmented generation (RAG, quand le modele cherche des informations en temps reel).</p>
                    <p><strong className="text-[#111]">Phase 1 : le pre-entrainement.</strong> Les LLMs comme GPT-4, Claude et Gemini sont entraines sur des corpus massifs de texte provenant du web. Pendant ce processus, le modele absorbe des milliards de pages et &ldquo;apprend&rdquo; les associations entre concepts. Les sites qui sont frequemment cites, qui utilisent un langage clair et structure, et qui sont reconnus comme faisant autorite dans leur domaine ont plus de poids dans les connaissances du modele. C&apos;est pour cela que Wikipedia, les sites gouvernementaux et les publications academiques sont si souvent cites : leur contenu est surrepresente dans les donnees d&apos;entrainement.</p>
                    <p><strong className="text-[#111]">Phase 2 : la recherche en temps reel (RAG).</strong> Quand un utilisateur pose une question a ChatGPT avec la navigation web activee, ou utilise Perplexity, le modele effectue une recherche, recupere les pages les plus pertinentes, puis synthetise une reponse en s&apos;appuyant sur ces sources. Ici, le modele agit comme un lecteur humain extremement rapide : il lit les pages, evalue leur credibilite, extrait les informations pertinentes et les reformule. Les criteres de selection incluent la clarte du contenu, la presence de donnees structurees, la coherence factuelle et la reputation du domaine.</p>
                    <p><strong className="text-[#111]">Phase 3 : le classement des sources.</strong> Les moteurs generatifs comme Perplexity classent les sources en fonction de leur pertinence, de leur fiabilite et de leur fraicheur. Une etude de Princeton (2024) a montre que les sources citees dans les reponses generees partagent des caracteristiques communes : des definitions explicites, des donnees chiffrees sourcees, une structure claire avec des headings hierarchiques, et des metadonnees riches (JSON-LD, schema.org). Les pages qui &ldquo;facilitent le travail&rdquo; du LLM en organisant l&apos;information de maniere extractible ont un avantage significatif.</p>
                    <p><strong className="text-[#111]">Ce que cela implique concretement.</strong> Si votre page repond a la question &ldquo;qu&apos;est-ce que le RevOps&rdquo; avec un paragraphe clair commencant par &ldquo;Le RevOps (Revenue Operations) est...&rdquo;, le LLM peut facilement extraire et citer cette definition. Si votre page noie la definition dans un paragraphe introductif vague, le LLM ira chercher la reponse ailleurs. La structure et la clarte ne sont plus des bonus : ce sont des prerequis.</p>
                  </div>

                  {/* Visual : Pipeline de selection d'un LLM */}
                  <div className="mt-6 rounded-xl bg-[#F9FAFB] border border-[#F2F2F2] p-4">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Pipeline de selection d&apos;un LLM (RAG)</p>
                    <div className="flex flex-col sm:flex-row items-stretch gap-2">
                      {[
                        { step: "1", label: "Requete utilisateur", desc: "Question posee au LLM", color: "#4B5EFC" },
                        { step: "2", label: "Recherche web", desc: "Crawl des sources pertinentes", color: "#FF7A59" },
                        { step: "3", label: "Evaluation", desc: "Clarte, structure, fiabilite", color: "#22C55E" },
                        { step: "4", label: "Extraction", desc: "Faits, definitions, donnees", color: "#F59E0B" },
                        { step: "5", label: "Synthese", desc: "Reponse generee avec citations", color: "#8B5CF6" },
                      ].map((s) => (
                        <div key={s.step} className="flex-1 rounded-lg border border-[#E8E8E8] bg-white p-3 text-center">
                          <div className="w-6 h-6 rounded-full mx-auto mb-2 flex items-center justify-center text-white text-[10px] font-bold" style={{ background: s.color }}>{s.step}</div>
                          <p className="text-[10px] font-semibold text-[#111] mb-0.5">{s.label}</p>
                          <p className="text-[9px] text-[#999]">{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 4 : Les 10 criteres GEO */}
              {/* ================================================================ */}
              <section id="dix-criteres" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 10 criteres GEO pour apparaitre dans les reponses IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Voici les 10 criteres identifies par la recherche academique et nos propres tests comme ayant le plus d&apos;impact sur la probabilite d&apos;etre cite par un LLM. Ils sont classes par ordre d&apos;importance decroissante selon nos observations.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { num: "01", titre: "Definitions claires et explicites", desc: "Commencez par une definition nette de votre sujet. Utilisez la structure \"[Terme] est [definition]\". Les LLMs privilegient les sources qui repondent directement a la question sans detour. Chaque page doit contenir au moins une definition extractible.", impact: "Tres eleve" },
                      { num: "02", titre: "Donnees structurees (JSON-LD / Schema.org)", desc: "Les metadonnees structurees aident les LLMs a comprendre le contexte de votre contenu. Article schema, FAQ schema, HowTo schema, Organization schema : chaque type enrichit la comprehension du modele. Le JSON-LD est le format prefere.", impact: "Tres eleve" },
                      { num: "03", titre: "E-E-A-T (Experience, Expertise, Autorite, Fiabilite)", desc: "Les LLMs evaluent la credibilite des sources. Affichez clairement l\u2019auteur (nom, titre, bio), l\u2019organisation, les certifications, l\u2019experience terrain. Les pages sans auteur identifie sont systematiquement defavorisees.", impact: "Eleve" },
                      { num: "04", titre: "Citations et sources externes", desc: "Citez vos sources. Mentionnez des etudes, des chiffres officiels, des references. Les LLMs favorisent le contenu qui s\u2019appuie sur des donnees verifiables plutot que sur des opinions non etayees. Chaque affirmation importante devrait etre sourcee.", impact: "Eleve" },
                      { num: "05", titre: "FAQ structurees avec schema", desc: "Les questions-reponses sont le format le plus naturel pour les LLMs. Ajoutez une section FAQ avec le FAQPage schema. Formulez les questions exactement comme un utilisateur les poserait a ChatGPT.", impact: "Eleve" },
                      { num: "06", titre: "Listes numerotees et hierarchie des headings", desc: "Les LLMs extraient plus facilement l\u2019information structuree en listes. Utilisez des listes numerotees pour les processus, des bullet points pour les criteres, et une hierarchie H1/H2/H3 stricte. Jamais de H4 qui devrait etre un H2.", impact: "Moyen-eleve" },
                      { num: "07", titre: "Fraicheur et date de mise a jour", desc: "Les LLMs et surtout les moteurs RAG (Perplexity) privilegient le contenu recent. Indiquez clairement la date de publication et la date de derniere mise a jour. Mettez a jour vos articles au moins tous les 6 mois.", impact: "Moyen-eleve" },
                      { num: "08", titre: "Couverture thematique exhaustive", desc: "Les LLMs preferent les pages qui couvrent un sujet en profondeur plutot que superficiellement. Un article de 3000 mots qui traite tous les aspects d\u2019un sujet sera prefere a 10 articles de 300 mots.", impact: "Moyen" },
                      { num: "09", titre: "Langage naturel et accessibilite", desc: "Ecrivez comme un expert qui explique a un collegue, pas comme un redacteur qui optimise pour un algorithme. Le keyword stuffing est penalise par les LLMs encore plus que par Google.", impact: "Moyen" },
                      { num: "10", titre: "Multimodalite et contenu enrichi", desc: "Les images avec des alt-texts descriptifs, les tableaux de donnees, les schemas et les exemples concrets aident les LLMs a valider et contextualiser l\u2019information textuelle.", impact: "Moyen" },
                    ].map((c) => (
                      <div key={c.num} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-start gap-3">
                          <span className="text-[20px] font-bold text-[#4B5EFC]/20 leading-none">{c.num}</span>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1.5">
                              <p className="text-[12px] font-semibold text-[#111]">{c.titre}</p>
                              <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${c.impact === "Tres eleve" ? "bg-[#22C55E]/10 text-[#22C55E]" : c.impact === "Eleve" ? "bg-[#4B5EFC]/10 text-[#4B5EFC]" : c.impact === "Moyen-eleve" ? "bg-[#F59E0B]/10 text-[#F59E0B]" : "bg-[#999]/10 text-[#999]"}`}>Impact : {c.impact}</span>
                            </div>
                            <p className="text-[11px] text-[#777] leading-[1.6]">{c.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 5 : Structured data et JSON-LD */}
              {/* ================================================================ */}
              <section id="structured-data" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Structured data et JSON-LD : le socle technique du GEO</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les donnees structurees sont le levier technique le plus puissant du GEO. Elles permettent aux LLMs de comprendre instantanement le type de contenu (article, FAQ, tutoriel, produit), l&apos;auteur, la date de publication, le sujet et les entites mentionnees. Sans donnees structurees, votre contenu est un bloc de texte indifferencie. Avec, c&apos;est une source d&apos;information balisee et contextualisee.</p>
                    <p><strong className="text-[#111]">JSON-LD est le format recommande.</strong> Google, Bing et les LLMs preferent le JSON-LD (JavaScript Object Notation for Linked Data) aux microdata et RDFa. Le JSON-LD se place dans une balise script dans le head ou le body de la page, sans modifier le HTML visible. C&apos;est propre, maintenable et facilement auditable.</p>
                    <p><strong className="text-[#111]">Les schemas essentiels pour le GEO.</strong> Voici les cinq schemas Schema.org qui ont le plus d&apos;impact sur la visibilite GEO, par ordre de priorite :</p>
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      { schema: "Article", desc: "Identifie le contenu comme un article, avec auteur, date, sujet. Indispensable pour chaque page de blog.", priority: "Critique" },
                      { schema: "FAQPage", desc: "Structure les questions-reponses en paires extractibles. Format ideal pour les LLMs qui cherchent des reponses directes.", priority: "Critique" },
                      { schema: "HowTo", desc: "Decrit un processus etape par etape. Parfait pour les tutoriels et guides.", priority: "Eleve" },
                      { schema: "Organization", desc: "Identifie votre entreprise, ses coordonnees, son logo, ses reseaux. Renforce le E-E-A-T.", priority: "Eleve" },
                      { schema: "BreadcrumbList", desc: "Indique la hierarchie de navigation. Aide les LLMs a comprendre l\u2019architecture du site.", priority: "Moyen" },
                    ].map((s) => (
                      <div key={s.schema} className="rounded-xl border border-[#F2F2F2] p-4 flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#4B5EFC]/10 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-bold text-[#4B5EFC]">{ }</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[12px] font-semibold text-[#111]">{s.schema}</span>
                            <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${s.priority === "Critique" ? "bg-[#EF4444]/10 text-[#EF4444]" : s.priority === "Eleve" ? "bg-[#4B5EFC]/10 text-[#4B5EFC]" : "bg-[#999]/10 text-[#999]"}`}>{s.priority}</span>
                          </div>
                          <p className="text-[11px] text-[#777] leading-[1.5]">{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Exemple concret.</strong> Sur cette page meme, nous utilisons un schema Article avec l&apos;auteur, la date, le nombre de mots et la section. Chaque article du blog Ceres integre ce schema. Le resultat : nos articles apparaissent regulierement dans les reponses de Perplexity et Claude lorsque des utilisateurs posent des questions sur le RevOps ou HubSpot en francais.</p>
                    <p><strong className="text-[#111]">Erreur frequente.</strong> Ne pas valider ses schemas. Utilisez le Rich Results Test de Google et le Schema Markup Validator pour verifier que vos JSON-LD sont syntaxiquement corrects et semantiquement pertinents. Un schema mal forme est pire qu&apos;aucun schema : il peut envoyer des signaux contradictoires aux LLMs.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 6 : FAQ schema et definitions */}
              {/* ================================================================ */}
              <section id="faq-schema" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">FAQ schema et definitions : le format prefere des LLMs</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les LLMs sont des machines a questions-reponses. Leur format natif est : une question en entree, une reponse en sortie. Logiquement, le contenu structure en paires question-reponse est le plus facilement extractible et citable par ces modeles. C&apos;est pour cela que le FAQ schema est l&apos;un des leviers GEO les plus puissants.</p>
                    <p><strong className="text-[#111]">Comment rediger des FAQ optimisees pour le GEO.</strong> Formulez les questions exactement comme un utilisateur les taperait dans ChatGPT. Pas &ldquo;Quels sont les avantages de notre solution ?&rdquo; mais &ldquo;C&apos;est quoi le GEO ?&rdquo; ou &ldquo;Comment apparaitre dans les reponses de ChatGPT ?&rdquo;. Les reponses doivent commencer par une phrase directe qui repond a la question, puis developper. Le LLM extrait generalement la premiere phrase comme reponse.</p>
                    <p><strong className="text-[#111]">Le pattern &ldquo;What is X&rdquo; en francais.</strong> Le pattern le plus cite par les LLMs est la definition directe. Sur chaque page strategique de votre site, incluez une definition claire du sujet principal en utilisant la structure : &ldquo;[Le terme] est [definition complete en une a deux phrases]. [Phrase de contexte ou d&apos;application].&rdquo; Ce pattern est si puissant que nous le recommandons meme pour les pages qui ne sont pas des articles de blog : pages de services, pages produits, landing pages.</p>
                    <p><strong className="text-[#111]">Combien de FAQ par page.</strong> Entre 5 et 10 questions-reponses par page, focalisees sur l&apos;intention de recherche principale. Evitez les FAQ generiques qui ne sont pas liees au contenu de la page. Chaque question doit etre une vraie question que votre audience pose, pas une question inventee pour remplir un schema.</p>
                    <p><strong className="text-[#111]">Definitions vs FAQ.</strong> Les definitions en debut de section et les FAQ en fin de page sont complementaires. La definition repond a &ldquo;c&apos;est quoi ?&rdquo; de maniere editoriale. La FAQ repond aux questions connexes de maniere structuree. Ensemble, ils couvrent un spectre large de requetes possibles.</p>
                  </div>

                  {/* Exemples de bonnes definitions */}
                  <div className="mt-5 rounded-xl bg-[#F9FAFB] border border-[#F2F2F2] p-4">
                    <p className="text-[11px] font-semibold text-[#22C55E] uppercase tracking-wider mb-3">Exemples de definitions optimisees GEO</p>
                    <div className="space-y-2">
                      {[
                        "Le GEO (Generative Engine Optimization) est la discipline qui consiste a optimiser son contenu web pour etre cite par les modeles de langage generatifs comme ChatGPT, Claude et Perplexity.",
                        "Le RevOps (Revenue Operations) est une fonction strategique qui unifie les operations marketing, commerciales et customer success pour maximiser le revenu global de l\u2019entreprise.",
                        "Le lead scoring est une methode de qualification automatique des prospects basee sur des criteres demographiques et comportementaux, attribuant un score numerique a chaque lead.",
                      ].map((d) => (
                        <div key={d} className="rounded-lg bg-white border border-[#E8E8E8] p-3 text-[11px] text-[#555] leading-[1.6] flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-1.5 shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 7 : E-E-A-T et autorite */}
              {/* ================================================================ */}
              <section id="eeat" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">E-E-A-T et autorite : la confiance vue par les LLMs</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>E-E-A-T signifie Experience, Expertise, Authoritativeness, Trustworthiness (Experience, Expertise, Autorite, Fiabilite). C&apos;est un cadre defini par Google pour evaluer la qualite du contenu, et les LLMs l&apos;appliquent de maniere encore plus stricte. Un contenu sans auteur identifiable, sans preuves d&apos;expertise et sans signaux de fiabilite sera systematiquement defavorise par rapport a un contenu qui coche ces cases.</p>
                    <p><strong className="text-[#111]">Experience.</strong> Avez-vous une experience directe du sujet que vous traitez ? Les LLMs detectent la difference entre un contenu ecrit par quelqu&apos;un qui a deploye HubSpot 50 fois et un contenu reecrit a partir d&apos;autres articles. L&apos;experience se manifeste par des exemples concrets, des chiffres issus de cas reels, des nuances que seul un praticien connait. Chez Ceres, chaque article est base sur notre experience terrain avec nos clients.</p>
                    <p><strong className="text-[#111]">Expertise.</strong> L&apos;auteur est-il qualifie pour traiter ce sujet ? Affichez clairement les certifications (HubSpot Partner, Google Analytics), les annees d&apos;experience, les publications anterieures. Les pages &ldquo;A propos&rdquo; et les bios d&apos;auteur sont des signaux forts pour les LLMs qui evaluent la credibilite d&apos;une source.</p>
                    <p><strong className="text-[#111]">Autorite.</strong> Votre site est-il reconnu comme une reference dans votre domaine ? Les backlinks, les mentions dans la presse, les citations par d&apos;autres experts, les contributions a des conferences : tous ces signaux renforcent votre autorite aux yeux des LLMs. C&apos;est le cercle vertueux du GEO : plus vous etes cite par les LLMs, plus votre autorite augmente, plus vous etes cite.</p>
                    <p><strong className="text-[#111]">Fiabilite.</strong> Vos informations sont-elles exactes et verifiables ? Les LLMs cross-referencent les informations entre plusieurs sources. Si vos chiffres ou vos affirmations contredisent le consensus etabli, votre contenu sera declass. Citez toujours vos sources, utilisez des donnees recentes et corrigez rapidement les erreurs.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { lettre: "E", label: "Experience", desc: "Vecu direct du sujet", color: "#4B5EFC" },
                      { lettre: "E", label: "Expertise", desc: "Qualifications verifiables", color: "#22C55E" },
                      { lettre: "A", label: "Autorite", desc: "Reconnaissance du secteur", color: "#FF7A59" },
                      { lettre: "T", label: "Fiabilite", desc: "Exactitude des informations", color: "#8B5CF6" },
                    ].map((e) => (
                      <div key={e.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <div className="w-8 h-8 rounded-lg mx-auto mb-2 flex items-center justify-center text-white text-[14px] font-bold" style={{ background: e.color }}>{e.lettre}</div>
                        <p className="text-[11px] font-semibold text-[#111] mb-0.5">{e.label}</p>
                        <p className="text-[9px] text-[#999]">{e.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 8 : Optimiser son contenu */}
              {/* ================================================================ */}
              <section id="optimiser-contenu" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Optimiser son contenu : la methode pas a pas</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Voici la methode complete que nous appliquons chez Ceres pour optimiser le contenu de nos clients pour les LLMs. Ces etapes sont actionnables immediatement et compatibles avec n&apos;importe quel CMS (HubSpot, WordPress, Next.js, Webflow).</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { etape: "1", titre: "Auditer le contenu existant", desc: "Commencez par tester vos pages cles dans ChatGPT et Perplexity. Posez les questions que vos prospects poseraient. Etes-vous cite ? Vos concurrents le sont-ils ? Cet audit de reference est indispensable pour mesurer la progression." },
                      { etape: "2", titre: "Ajouter des definitions explicites", desc: "Pour chaque page strategique, identifiez le terme principal et ecrivez une definition claire dans les 200 premiers mots. Utilisez le format \"[Terme] est [definition].\" Ne supposez jamais que le lecteur (ou le LLM) connait deja le concept." },
                      { etape: "3", titre: "Implementer les schemas JSON-LD", desc: "Ajoutez au minimum le schema Article sur chaque page de blog, le schema Organization sur la page d\u2019accueil, et le schema FAQPage sur les pages qui contiennent des questions-reponses. Validez chaque schema avec le Rich Results Test." },
                      { etape: "4", titre: "Structurer les headings", desc: "Un seul H1 par page (le titre). Des H2 pour chaque section principale. Des H3 pour les sous-sections. Jamais de H4 ou H5. Chaque heading doit etre comprehensible hors contexte : \"Les 10 criteres GEO\" plutot que \"Les criteres\"." },
                      { etape: "5", titre: "Ajouter des FAQ structurees", desc: "En bas de chaque article, ajoutez 5 a 10 questions-reponses avec le FAQPage schema. Formulez les questions comme un utilisateur de ChatGPT les formulerait. Les reponses doivent commencer par une phrase directe." },
                      { etape: "6", titre: "Renforcer le E-E-A-T", desc: "Ajoutez une bio auteur sur chaque article. Creez une page \"A propos\" detaillee. Affichez vos certifications et references clients. Ajoutez un schema Person pour l\u2019auteur principal." },
                      { etape: "7", titre: "Citer les sources", desc: "Chaque affirmation chiffree ou factuelle doit etre accompagnee de sa source. Les liens vers des etudes, des rapports et des sources officielles renforcent la credibilite de votre contenu aux yeux des LLMs." },
                      { etape: "8", titre: "Mettre a jour regulierement", desc: "Definissez un calendrier de mise a jour : chaque article doit etre relu et actualise tous les 3 a 6 mois. Mettez a jour la date dateModified dans le JSON-LD a chaque mise a jour." },
                    ].map((e) => (
                      <div key={e.etape} className="rounded-xl border border-[#F2F2F2] p-4 flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#111] flex items-center justify-center text-white text-[11px] font-bold shrink-0">{e.etape}</div>
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{e.titre}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{e.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 9 : Outils pour mesurer */}
              {/* ================================================================ */}
              <section id="outils-mesure" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Outils pour mesurer sa visibilite GEO</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>L&apos;un des defis du GEO est la mesure. Contrairement au SEO ou Google Search Console fournit des donnees precises sur les impressions et clics, les LLMs ne partagent pas (encore) de donnees de citation. Mais plusieurs outils emergent pour combler ce manque.</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { nom: "Perplexity", domain: "perplexity.ai", desc: "Le moteur generatif le plus transparent sur ses sources. Testez manuellement vos requetes cibles et verifiez si votre site est cite. Perplexity affiche toujours les sources utilisees pour generer la reponse." },
                      { nom: "Otterly.AI", domain: "otterly.ai", desc: "Outil specialise dans le monitoring de la visibilite dans les reponses IA. Permet de suivre automatiquement si votre marque ou vos pages sont citees par ChatGPT, Claude et Perplexity sur vos requetes cibles." },
                      { nom: "Profound", domain: "getprofound.ai", desc: "Plateforme d\u2019analyse GEO qui surveille en continu votre share of voice dans les reponses des LLMs. Fournit des rapports comparatifs avec vos concurrents et des recommandations d\u2019optimisation." },
                      { nom: "Schema Markup Validator", domain: "validator.schema.org", desc: "Outil gratuit pour valider vos donnees structurees JSON-LD. Indispensable pour s\u2019assurer que vos schemas sont corrects et interpretables par les LLMs." },
                      { nom: "Google Rich Results Test", domain: "search.google.com", desc: "Teste vos pages pour verifier que les schemas sont reconnus par Google. Un schema valide ici a de fortes chances d\u2019etre correctement interprete par les LLMs." },
                      { nom: "ChatGPT (test manuel)", domain: "chat.openai.com", desc: "Testez directement vos requetes cibles dans ChatGPT avec la navigation web activee. Notez quelles sources sont citees, comparez avec vos concurrents. Faites ce test mensuellement." },
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

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Methode de suivi recommandee.</strong> Creez un spreadsheet avec vos 20 requetes cibles les plus importantes. Chaque mois, testez ces requetes dans ChatGPT, Claude et Perplexity. Pour chaque requete, notez : etes-vous cite (oui/non), quelle position dans les sources, quels concurrents sont cites. Au bout de 3 mois, vous aurez une baseline solide pour mesurer l&apos;impact de vos optimisations GEO.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 10 : Ce que Ceres fait */}
              {/* ================================================================ */}
              <section id="ceres-geo" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Ce que Ceres fait pour ses clients en GEO</h2>
                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p>Chez Ceres, nous integrons le GEO dans notre accompagnement depuis debut 2025. Voici concretement ce que nous mettons en place pour nos clients B2B.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { titre: "Audit GEO initial", desc: "Test de 50+ requetes cibles dans ChatGPT, Claude et Perplexity. Analyse de la visibilite actuelle vs concurrents. Rapport avec recommandations prioritaires." },
                      { titre: "Implementation technique", desc: "Deploiement des schemas JSON-LD (Article, FAQ, Organization, HowTo). Validation avec les outils de test. Integration dans le CMS existant." },
                      { titre: "Optimisation editoriale", desc: "Reecriture des definitions, ajout de FAQ structurees, renforcement du E-E-A-T. Creation de contenu natif GEO sur les requetes strategiques." },
                      { titre: "Suivi mensuel", desc: "Monitoring de la visibilite GEO sur les requetes cibles. Rapports mensuels avec evolution du share of voice IA. Ajustements continus." },
                    ].map((s) => (
                      <div key={s.titre} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <p className="text-[12px] font-semibold text-white mb-1.5">{s.titre}</p>
                        <p className="text-[11px] text-[#888] leading-[1.6]">{s.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p>Le GEO n&apos;est pas un projet ponctuel mais une discipline continue, exactement comme le SEO. La difference est que le GEO est encore jeune et que la concurrence est faible sur la plupart des requetes B2B en francais. C&apos;est le moment ideal pour prendre de l&apos;avance. Les entreprises qui investissent dans le GEO aujourd&apos;hui beneficieront d&apos;un avantage competitif durable quand la discipline se generalisera.</p>
                    <p>Nous sommes convaincus que d&apos;ici 2028, chaque strategie de contenu B2B integrera une composante GEO. Les entreprises qui auront commence en 2025-2026 auront deux a trois ans d&apos;avance en termes de donnees d&apos;entrainement, d&apos;autorite etablie et de contenu optimise. C&apos;est un avantage qui se construit dans le temps et qui est difficile a rattraper.</p>
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
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous voulez apparaitre dans les reponses de ChatGPT et Claude ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On audite votre visibilite GEO, on optimise votre contenu et vos donnees structurees, et on mesure les resultats. Premiers gains visibles en 4 a 8 semaines.</p>
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
