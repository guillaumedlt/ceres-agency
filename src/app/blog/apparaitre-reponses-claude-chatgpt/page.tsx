"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment apparaitre dans les reponses de Claude et ChatGPT",
  description: "10 actions concretes pour etre cite par Claude, ChatGPT et Perplexity : structured data, FAQ JSON-LD, E-E-A-T, definitions snippet-ready, schema Organization. Guide complet SEO LLM et GEO.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/apparaitre-reponses-claude-chatgpt" },
  articleSection: "SEO & GEO",
  wordCount: 3200,
  inLanguage: "fr",
};

const sections = [
  { id: "comment-llm-trouvent", title: "Comment les LLMs trouvent" },
  { id: "criteres-citation", title: "Criteres de citation" },
  { id: "structured-data", title: "Structured data" },
  { id: "contenu-snippet-ready", title: "Contenu snippet-ready" },
  { id: "faq-json-ld", title: "FAQ JSON-LD" },
  { id: "eeat-autorite", title: "E-E-A-T et autorite" },
  { id: "dix-actions", title: "10 actions concretes" },
  { id: "mesurer", title: "Mesurer les resultats" },
  { id: "futur-geo", title: "Le futur du GEO" },
  { id: "approche-ceres", title: "Notre approche" },
];

const relatedArticles = [
  { title: "GEO : Generative Engine Optimization, optimiser son site pour les LLMs", slug: "geo-optimiser-site-llm", category: "SEO & GEO", color: "#FF7A59" },
  { title: "Claude vs ChatGPT pour les equipes commerciales", slug: "claude-vs-chatgpt-equipes-commerciales", category: "IA", color: "#4B5EFC" },
  { title: "HubSpot CMS : les fondamentaux d\u2019un site internet performant", slug: "hubspot-cms-fondamentaux-site-internet-performant", category: "CMS", color: "#6C5CE7" },
];

export default function ApparaitreReponsesClaudeChatGPTPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("comment-llm-trouvent");

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
                  <a href="https://twitter.com/intent/tweet" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
                <Badge>SEO &amp; GEO</Badge>
                <Badge>IA</Badge>
                <span className="text-[11px] text-[#CCC]">20 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Comment apparaitre dans les reponses de Claude et ChatGPT
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                De plus en plus d&apos;utilisateurs posent leurs questions a Claude, ChatGPT ou Perplexity au lieu de Google. Etre cite dans ces reponses generees par IA est le nouveau defi SEO. Ce guide tres detaille couvre les mecanismes de citation des LLMs, les criteres techniques et editoriaux, les 10 actions concretes pour etre cite, et comment mesurer vos resultats.
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
              {/* Section 1 — Comment les LLMs trouvent */}
              <section id="comment-llm-trouvent" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment les LLMs trouvent et citent les sources</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pour apparaitre dans les reponses d&apos;un LLM, il faut d&apos;abord comprendre comment ces modeles fonctionnent. Les LLMs (Large Language Models) comme Claude et ChatGPT utilisent trois mecanismes distincts pour generer des reponses contenant des references a des sources externes.</p>
                    <p><strong className="text-[#111]">Mecanisme 1 : les donnees d&apos;entrainement (training data).</strong> Les LLMs sont entraines sur des milliards de pages web, de livres, d&apos;articles et de documents. Pendant l&apos;entrainement, le modele absorbe les informations et les integre dans ses parametres. Quand vous posez une question sur le RevOps, le modele ne &ldquo;cherche&rdquo; pas l&apos;information dans une base de donnees. Il genere une reponse basee sur les patterns appris pendant l&apos;entrainement. Si votre site web a ete inclus dans les donnees d&apos;entrainement et que votre contenu etait de haute qualite, le modele a potentiellement &ldquo;appris&rdquo; de vos informations. Le probleme est que vous ne savez pas quand vos donnees ont ete capturees (le cutoff date) ni si elles ont ete incluses.</p>
                    <p><strong className="text-[#111]">Mecanisme 2 : le RAG (Retrieval-Augmented Generation).</strong> Le RAG est une technique ou le LLM interroge une base de donnees externe en temps reel avant de generer sa reponse. Perplexity est entierement base sur le RAG : il effectue une recherche web, recupere les pages les plus pertinentes, et les utilise comme contexte pour generer sa reponse avec des citations. Claude et ChatGPT utilisent aussi le RAG dans certains modes (recherche web activee, plugins). Dans ce cas, votre positionnement dans les resultats de recherche web influence directement votre visibilite dans les reponses du LLM.</p>
                    <p><strong className="text-[#111]">Mecanisme 3 : la recherche web en temps reel.</strong> Claude et ChatGPT integrent desormais la recherche web en temps reel. Quand l&apos;utilisateur pose une question factuelle ou recente, le LLM peut effectuer une recherche Google, Bing ou un moteur de recherche specialise, recuperer les resultats et les integrer dans sa reponse. C&apos;est le mecanisme le plus direct : si votre page est bien positionnee dans Google pour une requete donnee, et que le LLM effectue cette recherche, votre contenu apparaitra dans la reponse.</p>
                    <p>La conclusion est claire : le SEO traditionnel reste fondamental. Un site bien positionne dans Google a beaucoup plus de chances d&apos;etre cite par les LLMs, que ce soit via le RAG ou la recherche web. Mais au-dela du SEO classique, des facteurs specifiques aux LLMs entrent en jeu : la structure du contenu, la clarte des definitions, la presence de donnees structurees et l&apos;autorite du domaine.</p>
                  </div>

                  {/* 3 mechanisms visual */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { mech: "Training data", desc: "Le LLM a appris de votre contenu pendant l\u2019entrainement. Pas de citation explicite, influence indirecte.", icon: "1", color: "#FF7A59" },
                      { mech: "RAG", desc: "Le LLM interroge une base web en temps reel et cite les sources pertinentes dans sa reponse.", icon: "2", color: "#4B5EFC" },
                      { mech: "Web search", desc: "Le LLM effectue une recherche Google/Bing et integre les resultats avec des liens cliquables.", icon: "3", color: "#22C55E" },
                    ].map((m) => (
                      <div key={m.mech} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="w-6 h-6 rounded-full mb-2 flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: m.color }}>{m.icon}</div>
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{m.mech}</p>
                        <p className="text-[10px] text-[#777] leading-[1.5]">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 — Criteres de citation */}
              <section id="criteres-citation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les criteres qui influencent la citation par les LLMs</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Il n&apos;existe pas de documentation officielle sur les criteres de citation des LLMs. Mais les recherches academiques (Princeton 2024, Gao et al. 2025) et les observations empiriques des praticiens GEO permettent d&apos;identifier les facteurs les plus influents.</p>
                    <p><strong className="text-[#111]">Autorite du domaine.</strong> Les LLMs privilegient les sources faisant autorite. Un article sur le marketing B2B publie par HubSpot ou McKinsey sera cite plus souvent qu&apos;un article equivalent sur un blog inconnu. L&apos;autorite se construit par les backlinks, la reconnaissance sectorielle, la presence sur les reseaux professionnels et la coherence editoriale dans le temps. Ce n&apos;est pas different du SEO classique, mais l&apos;impact est amplifie.</p>
                    <p><strong className="text-[#111]">Structure du contenu.</strong> Les LLMs comprennent mieux le contenu bien structure. Les titres H1, H2, H3 hierarchises, les listes numerotees, les tableaux, les definitions claires au debut des articles facilitent l&apos;extraction d&apos;informations par le LLM. Un article qui commence par &ldquo;Le RevOps (Revenue Operations) est une methodologie qui aligne les equipes marketing, sales et customer success pour maximiser le revenu de facon previsible&rdquo; a beaucoup plus de chances d&apos;etre cite qu&apos;un article qui commence par une anecdote de 3 paragraphes avant de definir le sujet.</p>
                    <p><strong className="text-[#111]">Fraicheur du contenu.</strong> Les LLMs avec recherche web privilegient les contenus recents, surtout pour les sujets qui evoluent rapidement (technologie, reglementation, tendances). Un article mis a jour en 2026 sera prefere a un article de 2022 sur le meme sujet. Mettez a jour vos contenus evergreen regulierement et indiquez clairement la date de derniere modification.</p>
                    <p><strong className="text-[#111]">E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).</strong> Le framework E-E-A-T de Google s&apos;applique aussi aux LLMs. Les contenus qui demontrent une experience reelle (retours terrain, donnees proprietaires), une expertise (profondeur technique, precision), une autorite (reconnaissance par les pairs, citations) et une fiabilite (sources citees, donnees verifiables) sont privilegies.</p>
                    <p><strong className="text-[#111]">Donnees structurees (Schema.org).</strong> Les donnees structurees aident les LLMs a comprendre la nature et le contexte de votre contenu. Un schema Article avec author, datePublished, publisher et description donne au LLM des metadonnees exploitables. Un schema FAQ permet d&apos;extraire directement des paires question-reponse. Un schema Organization avec sameAs (liens vers LinkedIn, Twitter) etablit l&apos;identite de votre marque.</p>
                    <p><strong className="text-[#111]">Definitions claires et snippet-ready.</strong> Les LLMs cherchent des definitions concises pour repondre aux questions factuelles. Si votre page contient une definition claire et bien formulee d&apos;un concept, elle a plus de chances d&apos;etre citee. Le format ideal est : &ldquo;[Concept] est [definition en 1-2 phrases]. Il permet de [benefice principal]. Les applications incluent [exemples].&rdquo;</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 — Structured data */}
              <section id="structured-data" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Technique</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Structured data : le socle technique du GEO</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Les donnees structurees (Schema.org implementees en JSON-LD) sont le premier pilier technique pour etre cite par les LLMs. Elles fournissent aux moteurs de recherche et aux LLMs un contexte machine-readable sur votre contenu : qui l&apos;a ecrit, quand, sur quel sujet, quelle organisation le publie.</p>
                    <p><strong className="text-white/80">Schema Article</strong> est le minimum pour chaque page de contenu. Il doit inclure : headline (titre), description (resume), author (nom, URL, schema Person), publisher (organisation, logo), datePublished, dateModified, mainEntityOfPage, wordCount, inLanguage. Chaque champ aide le LLM a contextualiser et evaluer la pertinence de votre contenu.</p>
                    <p><strong className="text-white/80">Schema Organization</strong> doit etre present sur votre page d&apos;accueil et vos pages &ldquo;A propos&rdquo;. Il etablit l&apos;identite de votre entreprise : nom, URL, logo, adresse, sameAs (liens vers vos profils LinkedIn, Twitter, GitHub). Le sameAs est crucial car il permet aux LLMs de relier votre site web a votre presence sur d&apos;autres plateformes et de construire un profil d&apos;autorite.</p>
                    <p><strong className="text-white/80">Schema FAQPage</strong> est un levier puissant et sous-utilise. Il encode des paires question-reponse que les LLMs peuvent extraire directement. Si un utilisateur demande a Claude &ldquo;c&apos;est quoi le RevOps&rdquo; et que votre schema FAQ contient exactement cette question avec une reponse bien formulee, la probabilite de citation augmente significativement.</p>
                    <p><strong className="text-white/80">Schema HowTo</strong> est ideal pour les guides pas-a-pas. Il structure les etapes d&apos;un processus (comment configurer le lead scoring, comment integrer HubSpot et Slack) de maniere que le LLM puisse les extraire et les presenter sous forme de liste numerotee dans sa reponse.</p>
                  </div>

                  {/* JSON-LD example mockup */}
                  <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-[11px] font-semibold text-[#FF7A59] mb-3">Exemple JSON-LD Article</p>
                    <div className="text-[10px] text-white/40 font-mono leading-[1.8] overflow-x-auto">
                      <p>{'{'}&ldquo;@context&rdquo;: &ldquo;https://schema.org&rdquo;,</p>
                      <p className="pl-2">&ldquo;@type&rdquo;: &ldquo;Article&rdquo;,</p>
                      <p className="pl-2">&ldquo;headline&rdquo;: &ldquo;Votre titre optimise&rdquo;,</p>
                      <p className="pl-2">&ldquo;author&rdquo;: {'{'}&ldquo;@type&rdquo;: &ldquo;Person&rdquo;, &ldquo;name&rdquo;: &ldquo;...&rdquo;{'}'},</p>
                      <p className="pl-2">&ldquo;publisher&rdquo;: {'{'}&ldquo;@type&rdquo;: &ldquo;Organization&rdquo;, ...{'}'},</p>
                      <p className="pl-2">&ldquo;datePublished&rdquo;: &ldquo;2026-03-29&rdquo;,</p>
                      <p className="pl-2">&ldquo;dateModified&rdquo;: &ldquo;2026-03-29&rdquo;,</p>
                      <p className="pl-2">&ldquo;wordCount&rdquo;: 3200,</p>
                      <p className="pl-2">&ldquo;inLanguage&rdquo;: &ldquo;fr&rdquo;</p>
                      <p>{'}'}</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 — Contenu snippet-ready */}
              <section id="contenu-snippet-ready" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Creer du contenu snippet-ready pour les LLMs</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un contenu &ldquo;snippet-ready&rdquo; est un contenu dont les informations cles peuvent etre extraites facilement par un LLM pour generer une reponse. Voici les formats qui fonctionnent le mieux.</p>
                    <p><strong className="text-[#111]">Les definitions en debut d&apos;article.</strong> Commencez toujours par definir le concept cle de votre article dans les 2-3 premieres phrases. Format ideal : &ldquo;[Concept] est [definition concise]. Cette approche/methode/outil permet de [benefice principal].&rdquo; Cette definition doit etre autonome : un LLM doit pouvoir la citer telle quelle sans contexte supplementaire. Evitez les introductions longues et narratives qui retardent la definition.</p>
                    <p><strong className="text-[#111]">Les listes numerotees.</strong> Les LLMs adorent les listes. Quand un utilisateur demande &ldquo;quelles sont les 5 etapes du lead scoring&rdquo;, le LLM cherche un contenu qui liste exactement ces etapes de maniere structuree. Utilisez des listes numerotees pour les processus, les etapes et les classements. Chaque element de la liste doit avoir un titre clair et une description courte.</p>
                    <p><strong className="text-[#111]">Les comparaisons structurees.</strong> Les questions &ldquo;X vs Y&rdquo; sont tres courantes dans les LLMs. Creez des tableaux de comparaison clairs avec des criteres explicites. Format : un tableau avec les criteres en lignes et les options en colonnes, avec des valeurs factuelles (pas juste &ldquo;bon&rdquo; ou &ldquo;mauvais&rdquo;).</p>
                    <p><strong className="text-[#111]">Les statistiques contextualisees.</strong> Les LLMs citent souvent des statistiques pour appuyer leurs reponses. Fournissez des statistiques avec leur source, leur date et leur contexte. Format ideal : &ldquo;Selon [source] ([date]), [statistique]. Cela signifie que [interpretation].&rdquo; Plus la statistique est specifique et sourcee, plus elle a de chances d&apos;etre citee.</p>
                    <p><strong className="text-[#111]">Les questions-reponses explicites.</strong> Structurez une partie de votre contenu en format FAQ. Posez la question exacte que l&apos;utilisateur pourrait poser a un LLM, puis fournissez une reponse concise et complete. Les LLMs font un matching entre la question de l&apos;utilisateur et les questions presentes dans votre contenu. Plus le matching est precis, plus la probabilite de citation est elevee.</p>
                  </div>

                  {/* Before/After mockup */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#FFF5F5] border border-[#FF7A59]/10">
                      <p className="text-[11px] font-semibold text-[#FF7A59] mb-2">Avant (pas snippet-ready)</p>
                      <p className="text-[10px] text-[#777] leading-[1.6] italic">&ldquo;Depuis quelques annees, de nombreuses entreprises se tournent vers une nouvelle approche pour organiser leurs equipes commerciales. Cette approche, qui porte le nom de RevOps, a gagne en popularite...&rdquo;</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F0FFF4] border border-[#22C55E]/10">
                      <p className="text-[11px] font-semibold text-[#22C55E] mb-2">Apres (snippet-ready)</p>
                      <p className="text-[10px] text-[#777] leading-[1.6] italic">&ldquo;Le RevOps (Revenue Operations) est une methodologie qui aligne les equipes marketing, sales et customer success autour d&apos;un objectif commun : maximiser le revenu de facon previsible. Il unifie les processus, les outils et les donnees de ces trois equipes.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 — FAQ JSON-LD */}
              <section id="faq-json-ld" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">FAQ JSON-LD : le levier sous-utilise</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le schema FAQPage est probablement le levier GEO le plus puissant et le plus sous-utilise. Il permet d&apos;encoder des paires question-reponse en format machine-readable que les LLMs peuvent extraire directement. En SEO classique, le FAQ schema genere des rich snippets dans Google. En GEO, il augmente significativement la probabilite de citation par les LLMs.</p>
                    <p>La cle est de choisir les bonnes questions. Elles doivent correspondre aux requetes reelles que les utilisateurs posent aux LLMs. Utilisez les outils de recherche de mots-cles (Semrush, Ahrefs) pour identifier les questions &ldquo;People Also Ask&rdquo; de Google, les questions posees dans les forums (Reddit, Quora) et les suggestions de recherche. Chaque question doit avoir une reponse concise (2-4 phrases), factuelle et autonome.</p>
                    <p>Implementez le FAQ schema sur chaque article de blog avec 3 a 5 questions pertinentes. Les reponses doivent etre suffisamment completes pour etre citees telles quelles par un LLM, mais suffisamment concises pour rester lisibles. Evitez les reponses qui commencent par &ldquo;Oui&rdquo; ou &ldquo;Non&rdquo; sans contexte. Preferez les reponses qui reformulent la question : &ldquo;Le RevOps est adapte aux PME a partir de 10 personnes dans les equipes revenue. En dessous, les processus peuvent etre geres manuellement.&rdquo;</p>
                    <p>Le FAQ schema a un double benefice. En SEO, il genere des rich snippets qui augmentent le CTR dans Google. En GEO, il fournit des reponses pre-formatees que les LLMs peuvent extraire avec un minimum de transformation. C&apos;est un investissement a haut rendement qui prend 30 minutes par article a implementer.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 — E-E-A-T et autorite */}
              <section id="eeat-autorite" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">E-E-A-T et autorite : construire la credibilite</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) est le cadre utilise par Google pour evaluer la qualite d&apos;un contenu. Les LLMs, qui s&apos;appuient largement sur les signaux de qualite web, appliquent des criteres similaires. Voici comment renforcer chaque dimension.</p>
                    <p><strong className="text-[#111]">Experience.</strong> Montrez que vous avez une experience reelle du sujet. Incluez des retours d&apos;experience, des donnees proprietaires, des screenshots de vos propres implementations, des resultats chiffres de vos clients (anonymises si necessaire). Un article qui dit &ldquo;d&apos;apres notre experience sur 50 implementations HubSpot, le temps moyen de deploiement est de 6 semaines&rdquo; a plus de poids qu&apos;un article qui compile des informations generiques.</p>
                    <p><strong className="text-[#111]">Expertise.</strong> Demontrez une expertise profonde du sujet. Allez au-dela des informations de surface. Si vous ecrivez sur le lead scoring, ne vous contentez pas de definir le concept. Expliquez les subtilites : comment definir les seuils, comment gerer le scoring negatif, comment recalibrer trimestriellement, quels modeles ML sont les plus adaptes. La profondeur technique distingue le contenu expert du contenu generique.</p>
                    <p><strong className="text-[#111]">Autorite.</strong> Construisez votre autorite sectorielle. Publiez regulierement sur votre domaine d&apos;expertise. Obtenez des backlinks de sites reconnus. Soyez cite par d&apos;autres experts. Publiez sur LinkedIn avec une cadence reguliere. Intervenez dans des podcasts, des webinars et des conferences. Plus votre marque personnelle et d&apos;entreprise est reconnue, plus les LLMs sont susceptibles de vous citer.</p>
                    <p><strong className="text-[#111]">Fiabilite.</strong> Citez vos sources. Quand vous mentionnez une statistique, indiquez la source et la date. Quand vous avancez une affirmation, appuyez-la par des donnees ou des references. Mettez a jour vos contenus regulierement pour qu&apos;ils restent exacts. Un contenu obsolete ou inexact sera penalise par les LLMs comme il l&apos;est par Google.</p>
                  </div>

                  {/* E-E-A-T pillars */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { letter: "E", name: "Experience", action: "Retours terrain, donnees proprietaires, cas clients", color: "#FF7A59" },
                      { letter: "E", name: "Expertise", action: "Profondeur technique, subtilites, methodologie", color: "#4B5EFC" },
                      { letter: "A", name: "Autorite", action: "Backlinks, presence sectorielle, publications", color: "#22C55E" },
                      { letter: "T", name: "Fiabilite", action: "Sources citees, donnees datees, mises a jour", color: "#6C5CE7" },
                    ].map((e) => (
                      <div key={e.name} className="p-3 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] text-center">
                        <div className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-[14px] font-bold text-white" style={{ backgroundColor: e.color }}>{e.letter}</div>
                        <p className="text-[11px] font-semibold text-[#111] mb-1">{e.name}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{e.action}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 — 10 actions concretes */}
              <section id="dix-actions" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">10 actions concretes pour etre cite par les LLMs</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Voici les 10 actions les plus impactantes pour augmenter votre visibilite dans les reponses de Claude, ChatGPT et Perplexity. Elles sont classees par ordre de priorite et de facilite d&apos;implementation.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { num: "01", title: "Implementer le schema Article JSON-LD sur chaque page de contenu", desc: "Incluez headline, description, author (Person), publisher (Organization), datePublished, dateModified, wordCount, inLanguage. C\u2019est le minimum technique pour que les LLMs comprennent le contexte de votre contenu." },
                      { num: "02", title: "Ajouter un schema FAQPage avec 3 a 5 questions par article", desc: "Choisissez des questions correspondant aux requetes reelles des utilisateurs. Reponses de 2-4 phrases, factuelles, autonomes. Double benefice SEO (rich snippets) et GEO (extraction par les LLMs)." },
                      { num: "03", title: "Commencer chaque article par une definition snippet-ready", desc: "Format : \u00ab [Concept] est [definition en 1-2 phrases]. Il/elle permet de [benefice]. \u00bb Les LLMs extraient cette definition pour repondre aux questions factuelles." },
                      { num: "04", title: "Structurer le contenu avec des comparaisons explicites", desc: "Pour chaque sujet \u00ab X vs Y \u00bb pertinent, creez un tableau de comparaison avec des criteres factuels. Les LLMs privilegient les comparaisons structurees pour repondre aux questions de type \u00ab quel est le meilleur... \u00bb." },
                      { num: "05", title: "Utiliser des listes numerotees pour les processus et etapes", desc: "Format : \u00ab Les 7 etapes de [processus] \u00bb avec un titre et une description pour chaque etape. Les LLMs extraient et reformatent ces listes dans leurs reponses." },
                      { num: "06", title: "Implementer un schema Organization sur la page d\u2019accueil", desc: "Incluez name, url, logo, description, sameAs (LinkedIn, Twitter, GitHub). Le sameAs permet aux LLMs de relier votre site a votre presence sur d\u2019autres plateformes et de construire un profil d\u2019autorite." },
                      { num: "07", title: "Produire du contenu expert avec des donnees proprietaires", desc: "Incluez des statistiques issues de votre propre experience, des benchmarks de vos clients (anonymises), des retours terrain. Le contenu expert base sur l\u2019experience reelle est prefere au contenu generique compile depuis d\u2019autres sources." },
                      { num: "08", title: "Mettre a jour les contenus evergreen regulierement", desc: "Ajoutez dateModified dans vos schemas. Les LLMs privilegient les contenus recents. Mettez a jour vos articles au minimum tous les 6 mois avec des donnees actualisees et une date de modification visible." },
                      { num: "09", title: "Inclure des statistiques sourcees et datees", desc: "Format : \u00ab Selon [Source] ([annee]), [statistique]. \u00bb Les LLMs citent les statistiques avec leur source quand celle-ci est clairement indiquee. Sans source, la statistique est ignoree." },
                      { num: "10", title: "Construire des pages thematiques completes (pillar pages)", desc: "Les LLMs privilegient les pages qui couvrent un sujet en profondeur plutot que de multiples pages superficielles. Creez des guides complets de 2500+ mots qui couvrent un sujet de A a Z, avec des liens internes vers les sous-sujets detailles." },
                    ].map((action) => (
                      <div key={action.num} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <span className="text-[18px] font-bold text-[#FF7A59] shrink-0">{action.num}</span>
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{action.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{action.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 — Mesurer */}
              <section id="mesurer" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Mesure</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Mesurer votre visibilite dans les LLMs</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Mesurer la visibilite dans les LLMs est plus complexe que mesurer le SEO classique. Il n&apos;existe pas encore de Google Search Console pour les LLMs. Mais plusieurs methodes permettent de suivre votre presence.</p>
                    <p><strong className="text-white/80">Methode 1 : tester manuellement avec Perplexity.</strong> Perplexity affiche ses sources avec des liens cliquables. Posez les 20 questions cles de votre secteur sur Perplexity et notez si votre site apparait dans les sources. Repetez chaque mois pour suivre l&apos;evolution. C&apos;est la methode la plus directe, mais la plus manuelle.</p>
                    <p><strong className="text-white/80">Methode 2 : tester avec ChatGPT web search.</strong> Activez la recherche web dans ChatGPT (mode Browse). Posez vos questions cibles et observez si votre site est cite dans les sources. ChatGPT indique les sites web consultes en bas de chaque reponse. Notez les occurrences et les positions.</p>
                    <p><strong className="text-white/80">Methode 3 : tester avec Claude web search.</strong> Claude propose egalement un mode recherche web. Posez les memes questions et observez les citations. Comparez avec les resultats de ChatGPT et Perplexity pour identifier les differences entre les LLMs.</p>
                    <p><strong className="text-white/80">Methode 4 : outils specialises.</strong> Des outils comme Otterly.ai, Profound et BrandRank emergent pour automatiser le suivi de la visibilite dans les LLMs. Ils testent automatiquement des centaines de requetes sur plusieurs LLMs et reportent les mentions de votre marque. L&apos;ecosysteme est encore jeune, mais ces outils deviennent de plus en plus fiables.</p>
                    <p><strong className="text-white/80">Methode 5 : tracker le trafic referral.</strong> Dans Google Analytics, les visites provenant de ChatGPT, Perplexity et Claude apparaissent comme trafic referral. Creez un segment pour suivre ce trafic specifiquement. En 2026, il represente deja 3 a 8% du trafic des sites B2B bien optimises.</p>
                  </div>

                  {/* Measurement tools */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { tool: "Perplexity", method: "Test manuel, sources cliquables", color: "#FF7A59" },
                      { tool: "ChatGPT Browse", method: "Test web search, sources listees", color: "#4B5EFC" },
                      { tool: "Otterly.ai", method: "Suivi automatise multi-LLM", color: "#22C55E" },
                      { tool: "Google Analytics", method: "Trafic referral LLMs", color: "#6C5CE7" },
                    ].map((t) => (
                      <div key={t.tool} className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                        <p className="text-[11px] font-semibold mb-1" style={{ color: t.color }}>{t.tool}</p>
                        <p className="text-[10px] text-white/40">{t.method}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 — Futur du GEO */}
              <section id="futur-geo" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le futur du GEO (Generative Engine Optimization)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le GEO (Generative Engine Optimization) est la discipline qui emerge pour optimiser la visibilite dans les reponses des LLMs. C&apos;est l&apos;equivalent du SEO pour l&apos;ere de l&apos;IA generative. La discipline est encore jeune (le terme a ete formalise en 2024 par des chercheurs de Georgia Tech et Princeton), mais elle evolue rapidement.</p>
                    <p><strong className="text-[#111]">Tendance 1 : la convergence SEO-GEO.</strong> A mesure que Google integre l&apos;IA dans ses resultats (AI Overviews) et que les LLMs integrent la recherche web, les frontieres entre SEO et GEO s&apos;effacent. Les bonnes pratiques convergent : contenu de qualite, donnees structurees, autorite du domaine, fraicheur. Les equipes marketing qui investissent dans le SEO aujourd&apos;hui construisent deja les fondations du GEO.</p>
                    <p><strong className="text-[#111]">Tendance 2 : les LLMs comme canal d&apos;acquisition.</strong> En 2026, les LLMs representent deja 3 a 8% du trafic des sites B2B bien positionnes. D&apos;ici 2028, certaines predictions estiment que cette part pourrait atteindre 15 a 25%. Les entreprises qui optimisent pour les LLMs maintenant prennent un avantage concurrentiel significatif.</p>
                    <p><strong className="text-[#111]">Tendance 3 : l&apos;attribution multi-source.</strong> Le parcours de decouverte se complexifie. Un prospect peut decouvrir votre marque via une reponse de Claude, verifier sur Google, lire un article LinkedIn, puis visiter votre site directement. L&apos;attribution multi-touch doit integrer les LLMs comme point de contact a part entiere.</p>
                    <p><strong className="text-[#111]">Tendance 4 : les outils GEO specialises.</strong> Comme le SEO a genere un ecosysteme d&apos;outils (Semrush, Ahrefs, Moz), le GEO generera son propre ecosysteme. Les outils de suivi de visibilite LLM, d&apos;optimisation de contenu pour les LLMs et d&apos;analyse de citation IA sont en plein developpement. Les early adopters de ces outils auront un avantage de plusieurs mois sur leurs concurrents.</p>
                    <p>Pour un guide complet sur le GEO, consultez notre article dedie : <Link href="/blog/geo-optimiser-site-llm" className="text-[#FF7A59] underline underline-offset-2">GEO : Generative Engine Optimization, optimiser son site pour les LLMs</Link>.</p>
                  </div>

                  {/* GEO stats */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { value: "3-8%", label: "du trafic B2B via les LLMs en 2026", color: "#FF7A59" },
                      { value: "15-25%", label: "estimation du trafic LLM en 2028", color: "#4B5EFC" },
                      { value: "2024", label: "formalisation du GEO (Georgia Tech / Princeton)", color: "#22C55E" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[22px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-[#999] mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 — Approche Ceres */}
              <section id="approche-ceres" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Notre methode</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche GEO chez Ceres</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, nous integrons le GEO dans chaque strategie de contenu que nous construisons. Nous ne separons pas le SEO du GEO : les deux disciplines sont complementaires et convergent vers les memes bonnes pratiques. Notre approche combine l&apos;audit technique (donnees structurees, schema.org), l&apos;optimisation editoriale (contenu snippet-ready, definitions, FAQ) et la construction d&apos;autorite (backlinks, presence sectorielle).</p>
                    <p>Nous commencons par un audit GEO de votre site : testez vos 20 requetes cles sur Claude, ChatGPT et Perplexity. Etes-vous cite ? Si oui, pour quelles requetes ? Si non, pourquoi ? Nous analysons la structure de votre contenu, vos donnees structurees, votre autorite de domaine et la qualite de vos definitions pour identifier les leviers d&apos;amelioration. Le plan d&apos;action est implementable en 4 a 6 semaines, avec un suivi mensuel des citations.</p>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    {[
                      "Audit GEO : test de visibilite sur Claude, ChatGPT et Perplexity",
                      "Implementation des schemas JSON-LD (Article, FAQ, Organization, HowTo)",
                      "Optimisation editoriale : definitions snippet-ready, listes, comparaisons",
                      "Creation de contenu expert avec donnees proprietaires",
                      "Strategie de backlinks et construction d\u2019autorite",
                      "Suivi mensuel des citations LLM et du trafic referral",
                      "Mise a jour trimestrielle des contenus evergreen",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-[12px] text-white/50">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Related articles */}
              <section className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[14px] font-semibold text-[#111] mb-4">Articles lies</h2>
                  <div className="space-y-2">
                    {relatedArticles.map((a) => (
                      <Link key={a.slug} href={`/blog/${a.slug}`} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAFAFA] transition-colors group">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ backgroundColor: a.color }} />
                          <span className="text-[13px] font-medium text-[#111] group-hover:text-[#444] transition-colors">{a.title}</span>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 text-[#DDD] group-hover:text-[#999] group-hover:translate-x-0.5 transition-all"><path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section>
                <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a apparaitre dans les reponses IA ?</h2>
                  <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On audite votre visibilite GEO, on optimise vos donnees structurees et votre contenu, et on suit vos citations dans Claude, ChatGPT et Perplexity chaque mois.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel decouverte
                  </a>
                </div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
