"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HubSpot IA : toutes les fonctionnalit\u00e9s intelligentes en 2026",
  description: "Guide complet des fonctionnalit\u00e9s IA de HubSpot (Breeze). Copilot, agents, scoring pr\u00e9dictif, r\u00e9sum\u00e9 de calls, enrichissement, chatbot IA.",
  author: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
  mainEntityOfPage: "https://ceres.agency/blog/hubspot-ia-fonctionnalites",
};

const sections = [
  { id: "intro", title: "L\u2019IA dans HubSpot en 2026" },
  { id: "breeze", title: "Breeze : la couche IA de HubSpot" },
  { id: "copilot", title: "Breeze Copilot" },
  { id: "agents", title: "Breeze Agents" },
  { id: "intelligence", title: "Breeze Intelligence" },
  { id: "scoring", title: "Scoring pr\u00e9dictif" },
  { id: "content", title: "G\u00e9n\u00e9ration de contenu" },
  { id: "calls", title: "R\u00e9sum\u00e9s de calls et conversations" },
  { id: "workflows", title: "IA dans les workflows" },
  { id: "limites", title: "Les limites honn\u00eates" },
  { id: "vs", title: "HubSpot IA vs la concurrence" },
  { id: "verdict", title: "Notre verdict et recommandations" },
];

const relatedArticles = [
  { title: "CRM et IA : comment l\u2019intelligence artificielle transforme votre CRM", slug: "crm-ia-intelligence-artificielle", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Claude vs ChatGPT pour les \u00e9quipes commerciales", slug: "claude-vs-chatgpt-equipes-commerciales", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "HubSpot tarifs 2026 : tous les prix d\u00e9crypt\u00e9s", slug: "hubspot-tarifs-prix-2026", category: "CRM & HubSpot", color: "#4B5EFC" },
];

export default function HubSpotIAArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("intro");

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

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "12%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "78%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />

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
              <span className="text-[#666]">HubSpot IA</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM &amp; HubSpot</Badge>
                <span className="text-[11px] text-[#CCC]">22 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                HubSpot IA : toutes les fonctionnalites intelligentes en 2026
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                HubSpot a lance Breeze, sa couche d&apos;intelligence artificielle, fin 2024. Depuis, les fonctionnalites se sont multipliees : copilot, agents autonomes, scoring predictif, enrichissement, generation de contenu. On fait le tour complet de ce qui marche, ce qui est gadget, et ce qui change vraiment la donne pour les equipes commerciales et marketing B2B.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>31 mars 2026</span>
              </div>

              {/* Quick overview card */}
              <div className="mt-8 rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-5">
                <p className="text-[13px] font-semibold text-[#111] mb-4">Ce que couvre cet article</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { label: "Breeze Copilot", desc: "Assistant IA integre", color: "#FF7A59" },
                    { label: "Breeze Agents", desc: "4 agents autonomes", color: "#6D00CC" },
                    { label: "Breeze Intelligence", desc: "Enrichissement + intent", color: "#4B5EFC" },
                    { label: "IA dans les Hubs", desc: "Scoring, content, calls", color: "#22C55E" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl border border-[#F2F2F2] bg-white p-3">
                      <div className="w-2 h-2 rounded-sm mb-2" style={{ background: item.color }} />
                      <p className="text-[12px] font-semibold text-[#111]">{item.label}</p>
                      <p className="text-[10px] text-[#999] mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </header>

            <article>
              {/* Intro */}
              <section id="intro" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;IA dans HubSpot en 2026 : ou en est-on vraiment ?</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Depuis INBOUND 2024, HubSpot a fait de l&apos;IA son axe strategique numero un. La plateforme a lance Breeze, une couche d&apos;intelligence artificielle qui s&apos;integre dans tous les Hubs : Marketing, Sales, Service, Operations et CMS.</p>
                    <p>Mais entre les annonces marketing et la realite terrain, il y a souvent un ecart. Chez Ceres, on deploie HubSpot chez nos clients depuis 9 ans. On a teste chaque fonctionnalite IA en conditions reelles, sur des comptes B2B avec de vrais pipelines, de vraies equipes, de vrais enjeux de conversion.</p>
                    <p>Ce guide couvre l&apos;ensemble des fonctionnalites IA disponibles dans HubSpot en mars 2026. Pour chaque feature, on explique ce que ca fait concretement, si ca marche, et surtout quand ca vaut le coup de l&apos;activer.</p>
                    <p>Trois choses a savoir avant de commencer :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" />Breeze est le nom de marque qui regroupe toute l&apos;IA HubSpot. Il remplace l&apos;ancien &ldquo;ChatSpot&rdquo; et les features IA dispersees</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" />Certaines fonctionnalites sont incluses dans tous les plans, d&apos;autres necessitent des plans Pro ou Enterprise</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" />HubSpot utilise des modeles d&apos;OpenAI (GPT-4) en backend, pas un modele proprietaire</li>
                    </ul>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Breeze overview */}
              <section id="breeze" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">
                    <span className="inline-flex items-center gap-2">
                      <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
                      Breeze : la couche IA de HubSpot
                    </span>
                  </h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Breeze se decompose en trois piliers distincts. Chacun repond a un besoin different et fonctionne de maniere independante.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                    {[
                      { name: "Breeze Copilot", desc: "Un assistant IA conversationnel integre dans toute l\u2019interface HubSpot. Il repond aux questions, genere du contenu, resume des fiches, et execute des actions dans le CRM.", icon: "Co", color: "#FF7A59", plans: "Tous les plans" },
                      { name: "Breeze Agents", desc: "4 agents autonomes qui executent des taches complexes sans intervention : prospection, content, social media et service client.", icon: "Ag", color: "#6D00CC", plans: "Pro et Enterprise" },
                      { name: "Breeze Intelligence", desc: "Enrichissement de donnees, scoring d\u2019intention d\u2019achat et identification de visiteurs. Alimente par des donnees tierces.", icon: "In", color: "#4B5EFC", plans: "Credits supplementaires" },
                    ].map((pillar) => (
                      <div key={pillar.name} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold mb-3" style={{ background: pillar.color }}>{pillar.icon}</div>
                        <p className="text-[13px] font-semibold text-[#111] mb-1">{pillar.name}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6] mb-3">{pillar.desc}</p>
                        <p className="text-[10px] text-[#CCC] font-medium">{pillar.plans}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 text-[13px] text-[#555] leading-[1.75] space-y-3">
                    <p>Le modele de pricing est un point important. Breeze Copilot est gratuit sur tous les plans. Les Agents necessitent un abonnement Pro minimum. Et Breeze Intelligence fonctionne avec un systeme de credits : vous achetez des credits d&apos;enrichissement (a partir de 30 dollars par mois pour 100 credits) en plus de votre abonnement HubSpot.</p>
                    <p>C&apos;est un modele hybride qui peut vite chiffrer si vous enrichissez beaucoup de contacts. On y reviendra dans la section limites.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Copilot */}
              <section id="copilot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Breeze Copilot : l&apos;assistant IA au quotidien</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Copilot est l&apos;assistant conversationnel integre dans l&apos;interface HubSpot. Accessible via une icone en bas a droite de chaque ecran, il peut interagir avec vos donnees CRM en temps reel.</p>
                    <p>Concretement, voici ce qu&apos;il sait faire :</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {[
                      { action: "Resumer une fiche contact", detail: "Historique des interactions, deals en cours, derniers emails. Utile avant un call.", useful: true },
                      { action: "Rediger un email de suivi", detail: "Genere un email contextualise a partir de la fiche contact et du dernier echange.", useful: true },
                      { action: "Creer un rapport", detail: "Peut generer des rapports simples a partir d\u2019une description en langage naturel.", useful: false },
                      { action: "Rechercher des contacts", detail: "Filtrer votre base avec des requetes naturelles : \u00abcontacts a Paris avec un deal ouvert\u00bb.", useful: true },
                      { action: "Preparer un call", detail: "Resume les interactions passees, les deals, les notes. Brief pre-call automatique.", useful: true },
                      { action: "Analyser un pipeline", detail: "Donne des statistiques sur votre pipeline : deals stagnes, taux de conversion par etape.", useful: false },
                    ].map((item) => (
                      <div key={item.action} className="rounded-xl border border-[#F2F2F2] p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`w-1.5 h-1.5 rounded-full ${item.useful ? "bg-[#22C55E]" : "bg-[#CCC]"}`} />
                          <p className="text-[12px] font-semibold text-[#111]">{item.action}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Notre avis apres 6 mois d&apos;utilisation : Copilot est excellent pour les taches de preparation (resumer une fiche, preparer un call, rediger un email). Il est beaucoup moins fiable pour l&apos;analyse de donnees et les rapports, ou il peut halluciner des chiffres. On recommande de l&apos;utiliser comme assistant de productivite pour les commerciaux, pas comme outil d&apos;analyse.</p>
                    <p>Point important : Copilot a acces a toutes les donnees de votre portail HubSpot. C&apos;est sa force (il peut croiser les infos) mais ca pose la question de la gouvernance des donnees si vous avez des equipes avec des permissions restrictives.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Agents */}
              <section id="agents" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Breeze Agents : 4 agents autonomes</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les agents Breeze sont des IA qui executent des taches complexes de facon autonome. Contrairement a Copilot qui repond a des questions, les agents agissent. HubSpot en propose quatre.</p>
                  </div>
                  <div className="space-y-3 mt-4">
                    {[
                      { name: "Content Agent", desc: "Genere des articles de blog, des landing pages, des case studies et des podcasts. Il peut s\u2019appuyer sur votre brand voice et vos donnees CRM pour personnaliser le contenu.", verdict: "Utile pour des premiers jets, mais la qualite necessite toujours une repasse humaine significative. Le contenu genere est generique si vous ne fournissez pas un brief detaille.", score: "3/5", color: "#FF7A59" },
                      { name: "Social Agent", desc: "Analyse vos performances social media, genere des posts adaptes a chaque plateforme (LinkedIn, X, Instagram, Facebook) et propose un calendrier de publication.", verdict: "Correct pour du volume sur LinkedIn. Les posts manquent de personnalite et de prises de position. Bon pour avoir une base a remanier.", score: "2.5/5", color: "#6C5CE7" },
                      { name: "Prospecting Agent", desc: "Recherche des prospects correspondant a votre ICP, redige des emails de prospection personnalises et propose des sequences. Utilise les donnees Breeze Intelligence.", verdict: "Le plus prometteur des quatre. La personnalisation des emails est correcte si votre CRM est bien renseigne. Necessite Breeze Intelligence (credits supplementaires).", score: "3.5/5", color: "#4B5EFC" },
                      { name: "Customer Agent", desc: "Un chatbot IA entraine sur votre base de connaissances. Il repond aux questions clients, cree des tickets, et escalade aux humains quand necessaire.", verdict: "Le meilleur agent. Si votre Knowledge Base est complete, il repond correctement a 70-80% des questions de niveau 1. Gros gain de temps pour le support.", score: "4/5", color: "#22C55E" },
                    ].map((agent) => (
                      <div key={agent.name} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-sm" style={{ background: agent.color }} />
                            <p className="text-[13px] font-semibold text-[#111]">{agent.name}</p>
                          </div>
                          <span className="text-[12px] font-bold" style={{ color: agent.color }}>{agent.score}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6] mb-2">{agent.desc}</p>
                        <div className="rounded-lg bg-[#FAFAFA] p-2.5">
                          <p className="text-[11px] text-[#555] leading-[1.6]"><strong className="text-[#111]">Notre avis :</strong> {agent.verdict}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 text-[13px] text-[#555] leading-[1.75]">
                    <p>Tous les agents necessitent un plan Pro ou Enterprise. Le Prospecting Agent necessite en plus des credits Breeze Intelligence. En pratique, seul le Customer Agent offre un ROI clair et immediat. Les autres sont des accelerateurs de productivite, pas des remplacants.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Intelligence */}
              <section id="intelligence" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Breeze Intelligence : enrichissement et intent data</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Breeze Intelligence est le pilier donnees de l&apos;IA HubSpot. Il regroupe trois capacites distinctes qui alimentent le CRM en informations.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                    {[
                      { name: "Enrichissement de contacts", desc: "Complete automatiquement les fiches contacts et entreprises : poste, taille entreprise, secteur, chiffre d\u2019affaires, technologie utilisee. Base de donnees de plus de 200M de profils.", credits: "1 credit / contact" },
                      { name: "Buyer Intent", desc: "Identifie les entreprises qui recherchent activement des solutions comme la votre. Se base sur les signaux de navigation, les recherches et les interactions avec du contenu tiers.", credits: "Variable" },
                      { name: "Form Shortening", desc: "Reduit le nombre de champs dans vos formulaires en pre-remplissant les informations deja connues. Ameliore le taux de conversion des landing pages.", credits: "1 credit / soumission" },
                    ].map((feature) => (
                      <div key={feature.name} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[13px] font-semibold text-[#111] mb-1">{feature.name}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6] mb-3">{feature.desc}</p>
                        <p className="text-[10px] font-medium text-[#FF7A59]">{feature.credits}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le systeme de credits merite qu&apos;on s&apos;y arrete. HubSpot propose des packs de credits mensuels :</p>
                  </div>
                  <div className="mt-4 rounded-xl border border-[#F2F2F2] overflow-hidden">
                    <div className="grid grid-cols-4 bg-[#FAFAFA] border-b border-[#F2F2F2]">
                      {["Pack", "Credits/mois", "Prix/mois", "Prix/credit"].map((h) => (
                        <div key={h} className="p-3 text-[10px] font-semibold text-[#999] uppercase">{h}</div>
                      ))}
                    </div>
                    {[
                      ["Starter", "100", "30 $", "0.30 $"],
                      ["Standard", "1 000", "150 $", "0.15 $"],
                      ["Pro", "10 000", "700 $", "0.07 $"],
                    ].map((row) => (
                      <div key={row[0]} className="grid grid-cols-4 border-b border-[#F2F2F2] last:border-0">
                        {row.map((cell, i) => (
                          <div key={i} className={`p-3 text-[12px] ${i === 0 ? "font-semibold text-[#111]" : "text-[#666]"}`}>{cell}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Notre avis : l&apos;enrichissement est de bonne qualite sur les marches US et UK. Sur le marche francais, la couverture est moins complete, environ 60-70% des contacts sont enrichis correctement. Pour les PME francaises, des outils comme Dropcontact ou Societeinfo restent souvent plus pertinents. Le Buyer Intent est interessant mais encore jeune, on lui prefere des solutions dediees comme Bombora ou 6sense pour les comptes qui investissent serieusement dans l&apos;ABM.</p>
                    <p>Le Form Shortening est en revanche une vraie pepite : on a mesure des gains de 15 a 25% sur les taux de conversion de formulaires chez nos clients qui l&apos;ont active.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Scoring predictif */}
              <section id="scoring" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Scoring predictif : l&apos;IA qui classe vos leads</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le predictive lead scoring de HubSpot analyse automatiquement vos donnees historiques pour attribuer un score de probabilite de conversion a chaque contact. Contrairement au lead scoring manuel (ou vous definissez les regles), le scoring predictif apprend de vos donnees passees.</p>
                    <p>Comment ca fonctionne :</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {[
                      { step: "1", label: "Analyse historique", desc: "HubSpot analyse vos deals gagnes et perdus des 12 derniers mois pour identifier les patterns de conversion" },
                      { step: "2", label: "Identification des signaux", desc: "Il detecte les proprietes, comportements et interactions qui correlent le plus avec la conversion" },
                      { step: "3", label: "Attribution du score", desc: "Chaque contact recoit un score de 0 a 100 base sur sa ressemblance avec vos clients convertis" },
                      { step: "4", label: "Mise a jour continue", desc: "Le modele se recalibre automatiquement a mesure que de nouveaux deals se ferment" },
                    ].map((s) => (
                      <div key={s.step} className="rounded-xl bg-white/5 border border-white/10 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-5 h-5 rounded-md bg-[#FF7A59] flex items-center justify-center text-[10px] text-white font-bold">{s.step}</div>
                          <p className="text-[12px] font-semibold text-white">{s.label}</p>
                        </div>
                        <p className="text-[11px] text-white/50 leading-[1.6]">{s.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Prerequis : le scoring predictif necessite un plan Enterprise et un minimum de 500 contacts avec un historique suffisant (deals gagnes et perdus). En dessous, le modele n&apos;a pas assez de donnees pour etre fiable.</p>
                    <p>Notre experience : sur les comptes avec plus de 2 000 contacts et un historique de 18 mois, le scoring predictif HubSpot est etonnamment bon. Il identifie des correlations que les equipes n&apos;avaient pas vues (par exemple, les contacts qui visitent 3 pages de pricing en moins de 48h convertissent 4x mieux). Sur les comptes plus petits, un scoring manuel bien configure reste plus efficace.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Content generation */}
              <section id="content" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Generation de contenu : ce que l&apos;IA HubSpot sait produire</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La generation de contenu est probablement la fonctionnalite IA la plus visible de HubSpot. Elle est presente dans quasiment tous les editeurs : emails, blog, landing pages, CTAs, social posts, SMS.</p>
                  </div>
                  <div className="space-y-3 mt-4">
                    {[
                      { type: "Emails marketing", quality: "Correct", detail: "Genere des emails coherents a partir d\u2019un brief. La personnalisation avec les tokens HubSpot fonctionne bien. Manque de creativite sur les objets.", color: "#FF7A59" },
                      { type: "Articles de blog", quality: "Moyen", detail: "Produit des premiers jets utilisables mais generiques. Pas de donnees proprietaires, pas de point de vue. Necessite 50-60% de rewrite pour un contenu publiable.", color: "#CCC" },
                      { type: "Landing pages", quality: "Correct", detail: "Bon pour generer la structure et le copy de base. Les CTAs et la hierarchie sont coherents. Manque d\u2019originalite dans le wording.", color: "#FF7A59" },
                      { type: "Posts sociaux", quality: "Faible", detail: "Les posts LinkedIn generes sont plats. Pas de hook, pas de storytelling, pas de prise de position. Utilisable comme point de depart uniquement.", color: "#EF4444" },
                      { type: "Objets d\u2019email", quality: "Bon", detail: "La generation de sujets d\u2019email est une des meilleures features. Les suggestions sont variees et optimisees pour le taux d\u2019ouverture.", color: "#22C55E" },
                      { type: "Meta descriptions SEO", quality: "Bon", detail: "Genere des meta descriptions SEO-friendly a partir du contenu de la page. Gain de temps significatif.", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.type} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-3">
                        <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: item.color }} />
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="text-[12px] font-semibold text-[#111]">{item.type}</p>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FAFAFA] border border-[#F2F2F2] text-[#999]">{item.quality}</span>
                          </div>
                          <p className="text-[11px] text-[#777] leading-[1.6] mt-1">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-xl bg-[#FFF7ED] border border-[#FFEDD5] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">Notre conseil</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]">L&apos;IA HubSpot est un bon accelerateur pour les taches repetitives (meta descriptions, variantes d&apos;email, reformulation). Pour le contenu strategique (articles SEO, thought leadership, case studies), un outil comme Claude avec un prompt bien construit donne des resultats nettement superieurs. On utilise Claude pour la strategie et HubSpot IA pour l&apos;execution repetitive.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Calls */}
              <section id="calls" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Resumes de calls et conversation intelligence</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot enregistre les appels passes via son outil de calling integre et genere automatiquement des resumes IA. C&apos;est une des fonctionnalites IA les plus concretes au quotidien.</p>
                    <p>Ce que l&apos;IA produit apres chaque call :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" />Un resume structure du call (points abordes, decisions prises, next steps)</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" />Une transcription complete avec identification des speakers</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" />Des metrics de conversation : ratio talk/listen, longueur des monologues, questions posees</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" />Detection des mentions de concurrents, des objections, et des signaux d&apos;achat</li>
                    </ul>
                    <p>La qualite de la transcription est bonne en anglais (95%+ de precision). En francais, c&apos;est moins fiable, autour de 85-90%. Les noms propres et le jargon technique sont souvent mal transcrits. Les resumes en revanche sont plutot bons, meme en francais.</p>
                    <p>Le vrai gain de productivite : les commerciaux n&apos;ont plus besoin de prendre des notes pendant les calls. Le resume est automatiquement associe a la fiche contact et au deal. Les managers peuvent rapidement ecouter les moments cles sans rever le call entier.</p>
                    <p>Limite : le calling HubSpot n&apos;est pas utilise par toutes les equipes. Si vos commerciaux utilisent Aircall, Ringover ou un autre outil, vous devrez passer par une integration tierce (ou par des outils comme Claap ou Modjo qui sont plus performants sur l&apos;analyse conversationnelle).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Workflows */}
              <section id="workflows" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">IA dans les workflows : automatisation intelligente</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot a integre des actions IA directement dans son moteur de workflows. Ca ouvre des possibilites interessantes pour l&apos;automatisation.</p>
                  </div>
                  <div className="space-y-3 mt-4">
                    {[
                      { action: "Generer du texte", desc: "Inserer une action \u00abAI - Generate text\u00bb dans un workflow pour produire du contenu personnalise (email de bienvenue, message de suivi) en fonction des proprietes du contact.", useCase: "Emails de nurturing personnalises a grande echelle" },
                      { action: "Resumer une conversation", desc: "Resumer automatiquement un ticket ou une conversation avant de l\u2019assigner a un agent humain.", useCase: "Escalade support avec contexte" },
                      { action: "Classifier des donnees", desc: "Categoriser automatiquement des tickets, des feedbacks ou des leads en fonction de leur contenu.", useCase: "Triage automatique du support" },
                      { action: "Extraire des informations", desc: "Extraire des donnees structurees a partir de textes libres (emails, formulaires) et les stocker dans des proprietes CRM.", useCase: "Parsing de formulaires complexes" },
                    ].map((wf) => (
                      <div key={wf.action} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[13px] font-semibold text-[#111] mb-1">{wf.action}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6] mb-2">{wf.desc}</p>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                          <p className="text-[10px] text-[#22C55E] font-medium">{wf.useCase}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 text-[13px] text-[#555] leading-[1.75] space-y-3">
                    <p>La limite principale : les actions IA dans les workflows sont lentes (3-5 secondes par execution) et consomment des credits Operations Hub. Sur des workflows a haut volume (des milliers de contacts par jour), ca peut devenir un goulot d&apos;etranglement. Pour les workflows complexes avec plusieurs etapes IA, on recommande souvent de passer par Make ou n8n avec l&apos;API Claude, qui offre plus de flexibilite et de vitesse.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Limites */}
              <section id="limites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les limites honnetes de l&apos;IA HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Apres 18 mois d&apos;utilisation sur une dizaine de portails clients, voici les limites reelles que nous avons identifiees.</p>
                  </div>
                  <div className="space-y-3 mt-4">
                    {[
                      { limite: "Qualite du francais", detail: "Le modele sous-jacent (GPT-4) est optimise pour l\u2019anglais. Le contenu genere en francais est souvent approximatif, avec des tournures calquees de l\u2019anglais. Pour du contenu publiable, une repasse humaine est indispensable.", severity: "Haute" },
                      { limite: "Cout des credits Intelligence", detail: "L\u2019enrichissement et le buyer intent fonctionnent avec des credits. Pour une equipe qui enrichit 500 contacts par mois, comptez 150 $ en plus de l\u2019abonnement HubSpot. Ca s\u2019ajoute a un outil deja cher.", severity: "Haute" },
                      { limite: "Pas de choix de modele", detail: "Vous ne pouvez pas choisir quel modele d\u2019IA est utilise. HubSpot utilise GPT-4 pour tout. Pas de Claude, pas de Gemini, pas de modele local. Pour certains cas d\u2019usage, d\u2019autres modeles sont meilleurs.", severity: "Moyenne" },
                      { limite: "Donnees d\u2019entrainement", detail: "L\u2019IA HubSpot ne s\u2019entraine pas sur vos donnees specifiques (sauf le scoring predictif). Le Content Agent ne connait pas votre ton, vos clients, votre marche. Il faut tout preciser dans le prompt.", severity: "Moyenne" },
                      { limite: "Couverture marche francais", detail: "Breeze Intelligence est optimise pour les marches anglo-saxons. L\u2019enrichissement de contacts francais est moins complet que Dropcontact ou Societeinfo. Le buyer intent est quasi inexistant sur le marche FR.", severity: "Haute" },
                      { limite: "Transparence limitee", detail: "Le scoring predictif ne vous dit pas toujours pourquoi un contact a un score eleve. Les \u00abfacteurs contributifs\u00bb sont vagues. Difficile de debugger ou d\u2019expliquer a un commercial pourquoi tel lead est prioritaire.", severity: "Moyenne" },
                    ].map((item) => (
                      <div key={item.limite} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-[12px] font-semibold text-[#111]">{item.limite}</p>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${item.severity === "Haute" ? "bg-[#FEF2F2] text-[#EF4444]" : "bg-[#FFF7ED] text-[#F59E0B]"}`}>{item.severity}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* VS Competition */}
              <section id="vs" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">HubSpot IA vs la concurrence</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75] mb-5">
                    <p>Comment l&apos;IA HubSpot se positionne face aux autres CRM et aux outils d&apos;IA dedies.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 overflow-hidden">
                    <div className="grid grid-cols-5 bg-white/5 border-b border-white/10">
                      {["Fonctionnalite", "HubSpot Breeze", "Salesforce Einstein", "Claude / ChatGPT", "Outils dedies"].map((h) => (
                        <div key={h} className="p-3 text-[10px] font-semibold text-white/40 uppercase">{h}</div>
                      ))}
                    </div>
                    {[
                      ["Copilot CRM", "Bon", "Excellent", "N/A", "N/A"],
                      ["Scoring predictif", "Bon (Enterprise)", "Excellent", "N/A", "Madkudu, 6sense"],
                      ["Enrichissement", "Correct (FR moyen)", "Faible", "N/A", "Dropcontact, Clay"],
                      ["Content generation", "Moyen", "Faible", "Excellent", "Jasper, Copy.ai"],
                      ["Resume de calls", "Bon (EN), Correct (FR)", "Bon", "Excellent", "Modjo, Claap"],
                      ["Chatbot IA", "Bon", "Correct", "Excellent", "Intercom, Drift"],
                      ["Workflows IA", "Bon", "Excellent", "Via API/Make", "N/A"],
                    ].map((row) => (
                      <div key={row[0]} className="grid grid-cols-5 border-b border-white/5 last:border-0">
                        {row.map((cell, i) => (
                          <div key={i} className={`p-3 text-[11px] ${i === 0 ? "font-medium text-white/80" : "text-white/50"}`}>{cell}</div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le constat est clair : l&apos;IA HubSpot est un bon &ldquo;generalist&rdquo; integre nativement dans le CRM. Son avantage principal est l&apos;integration native, pas la qualite de l&apos;IA elle-meme. Pour chaque fonctionnalite prise individuellement, il existe des outils dedies plus performants. Mais l&apos;integration native dans le CRM evite les bricolages API et les problemes de synchronisation.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Verdict */}
              <section id="verdict" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Notre verdict et recommandations</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA HubSpot en 2026 est un bon assistant integre, pas une revolution. La valeur est dans l&apos;integration native, pas dans la qualite de l&apos;IA elle-meme. Voici nos recommandations concretes.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
                    <div className="rounded-xl bg-[#F0FDF4] p-4">
                      <p className="text-[12px] font-semibold text-[#22C55E] mb-3">A activer tout de suite</p>
                      {[
                        "Copilot pour les resumes de fiches et la preparation de calls",
                        "Generation de sujets d\u2019email (A/B testing automatique)",
                        "Meta descriptions SEO automatiques",
                        "Customer Agent si votre Knowledge Base est complete",
                        "Form Shortening sur vos landing pages cles",
                      ].map((i) => (
                        <p key={i} className="text-[11px] text-[#555] mb-2 flex items-start gap-2"><span className="text-[#22C55E] mt-0.5 shrink-0">+</span>{i}</p>
                      ))}
                    </div>
                    <div className="rounded-xl bg-[#FEF2F2] p-4">
                      <p className="text-[12px] font-semibold text-[#EF4444] mb-3">A eviter ou a completer</p>
                      {[
                        "Content Agent seul pour du contenu publiable (utilisez Claude en complement)",
                        "Social Agent pour LinkedIn (trop generique, pas de POV)",
                        "Breeze Intelligence seul pour l\u2019enrichissement FR (completez avec Dropcontact)",
                        "Scoring predictif sur un portail avec moins de 500 contacts",
                        "Workflows IA a haut volume (preferez Make + API Claude)",
                      ].map((i) => (
                        <p key={i} className="text-[11px] text-[#555] mb-2 flex items-start gap-2"><span className="text-[#EF4444] mt-0.5 shrink-0">-</span>{i}</p>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">L&apos;approche que l&apos;on recommande chez Ceres</p>
                    <p className="text-[12px] text-[#777] leading-[1.65]">Utilisez l&apos;IA HubSpot pour tout ce qui est natif et integre au CRM : Copilot, scoring, resumes de calls, objets d&apos;email. Pour le contenu strategique, l&apos;analyse approfondie et les workflows complexes, utilisez Claude via API ou via Make. C&apos;est cette combinaison HubSpot + Claude qui donne les meilleurs resultats chez nos clients. L&apos;un ne remplace pas l&apos;autre.</p>
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
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous voulez tirer le maximum de l&apos;IA HubSpot ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[450px] mx-auto">On configure et optimise les fonctionnalites IA de votre portail HubSpot. Scoring predictif, Copilot, agents, enrichissement. Setup complet en moins de 2 semaines.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/agence-hubspot" className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Nos services HubSpot
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
