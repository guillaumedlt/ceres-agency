"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CRM et IA : comment l'intelligence artificielle transforme votre CRM",
  description: "Etat des lieux de l'IA dans les CRM en 2026. HubSpot AI, Salesforce Einstein, scoring predictif, generation d'emails, resume d'appels, enrichissement de donnees, agents autonomes et tendances futures.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-25",
  dateModified: "2026-03-25",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/crm-ia-intelligence-artificielle" },
  articleSection: "IA & Automatisation",
  wordCount: 3500,
  inLanguage: "fr",
};

const sections = [
  { id: "etat-ia-crm", title: "L&apos;IA dans les CRM en 2026" },
  { id: "hubspot-ai", title: "HubSpot AI" },
  { id: "scoring-predictif", title: "Scoring predictif" },
  { id: "generation-contenu", title: "Generation de contenu" },
  { id: "call-intelligence", title: "Call intelligence" },
  { id: "enrichissement-data", title: "Enrichissement donnees" },
  { id: "agents-ia", title: "Agents IA dans le CRM" },
  { id: "choisir-crm-ia", title: "Choisir le bon CRM IA" },
  { id: "roadmap-implementation", title: "Roadmap d&apos;implementation" },
  { id: "predictions-futur", title: "Predictions futures" },
];

const relatedArticles = [
  { title: "IA et scoring predictif : le lead scoring nouvelle generation", slug: "ia-scoring-predictif-lead-scoring", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "HubSpot vs Salesforce : comparatif complet", slug: "hubspot-vs-salesforce-comparatif", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Claude vs ChatGPT pour les equipes commerciales", slug: "claude-vs-chatgpt-equipes-commerciales", category: "IA & Automatisation", color: "#6D00CC" },
];

export default function CrmIaIntelligenceArtificiellePage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("etat-ia-crm");

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

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "22%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "40%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "60%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=CRM%20et%20IA%20:%20comment%20l%27intelligence%20artificielle%20transforme%20votre%20CRM&url=https://ceres.agency/blog/crm-ia-intelligence-artificielle" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/crm-ia-intelligence-artificielle" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">CRM et IA</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">17 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                CRM et IA : comment l&apos;intelligence artificielle transforme votre CRM
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                L&apos;intelligence artificielle n&apos;est plus une promesse futuriste dans les CRM. En 2026, elle est integree nativement dans HubSpot, Salesforce, Pipedrive et les autres. Scoring predictif, generation d&apos;emails, resume d&apos;appels, enrichissement automatique, agents autonomes : ce guide fait le tour complet des fonctionnalites IA disponibles, de leur maturite reelle, et de comment les deployer dans votre organisation.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>25 mars 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 -- Etat de l'IA dans les CRM */}
              <section id="etat-ia-crm" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;etat de l&apos;IA dans les CRM en 2026</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En 2026, l&apos;intelligence artificielle dans les CRM a depasse le stade du gadget marketing pour devenir un outil de productivite quotidien. La vague d&apos;innovation lancee par les grands modeles de langage (LLM) a transforme la facon dont les commerciaux interagissent avec leur CRM. La saisie manuelle recule, l&apos;analyse predictive se democratise, et les premiers agents autonomes commencent a executer des taches complexes sans intervention humaine.</p>
                    <p>Le marche se structure autour de trois niveaux de maturite. Le premier niveau est l&apos;IA assistante : elle aide le commercial dans ses taches quotidiennes. Generation de brouillons d&apos;emails, resume de notes d&apos;appels, suggestions de prochaines actions. Ce niveau est desormais standard chez tous les grands CRM et ne constitue plus un avantage differentiel.</p>
                    <p>Le deuxieme niveau est l&apos;IA analytique : elle exploite les donnees du CRM pour produire des insights actionables. Scoring predictif des leads et des deals, forecasting base sur les patterns historiques, identification des deals a risque, segmentation automatique. Ce niveau necessite un volume de donnees suffisant et une qualite de data correcte pour etre fiable.</p>
                    <p>Le troisieme niveau est l&apos;IA autonome : elle execute des actions sans validation humaine. Enrichissement automatique des fiches, routage intelligent des leads, relances automatisees avec personnalisation contextuelle, et les premiers &ldquo;AI agents&rdquo; capables de gerer des workflows complets. Ce niveau est encore emergent mais progresse rapidement, avec HubSpot et Salesforce en pointe.</p>
                    <p>La realite terrain est neanmoins plus nuancee que les discours marketing des editeurs. L&apos;IA dans les CRM fonctionne bien pour les taches repetitives et les analyses a grande echelle. Elle est encore perfectible pour les taches qui necessitent du contexte business specifique, de la nuance relationnelle ou du jugement strategique. Le commercial expert reste indispensable ; l&apos;IA le rend plus efficace, elle ne le remplace pas.</p>
                    <p>L&apos;adoption de l&apos;IA dans les CRM suit la meme courbe que toute innovation technologique. Les early adopters experimentent depuis 2024, la majorite precoce est en train de deployer en 2026, et les retardataires commenceront en 2027-2028. L&apos;avantage competitif de l&apos;IA dans les CRM diminue a mesure que l&apos;adoption se generalise. Les entreprises qui n&apos;ont pas encore commence a deployer l&apos;IA dans leur CRM prennent un retard qui sera de plus en plus couteux a rattraper. Le moment d&apos;agir est maintenant, et ce guide vous donne
                    toutes les cles pour le faire.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "83%", label: "des CRM integrent des fonctionnalites IA natives en 2026", color: "#6D00CC" },
                      { value: "2.4h", label: "de temps economise par commercial par jour en moyenne", color: "#4B5EFC" },
                      { value: "34%", label: "d&apos;amelioration du forecasting avec l&apos;IA predictive", color: "#22C55E" },
                      { value: "67%", label: "des entreprises utilisent l&apos;IA pour la generation d&apos;emails", color: "#FF7A59" },
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

              {/* Section 2 -- HubSpot AI */}
              <section id="hubspot-ai" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les fonctionnalites IA de HubSpot en 2026</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot a accelere considerablement sa strategie IA depuis 2024. En 2026, l&apos;IA est integree dans pratiquement chaque fonctionnalite du CRM. Le positionnement de HubSpot est clair : rendre l&apos;IA accessible aux PME et mid-market sans necessite d&apos;expertise technique, en l&apos;integrant directement dans les workflows existants.</p>
                    <p>Breeze, le moteur IA de HubSpot, est present partout. Dans le Sales Hub, il genere des brouillons d&apos;emails personnalises en se basant sur le contexte du deal, l&apos;historique des interactions et le profil du prospect. Le commercial peut generer un email de relance en un clic, le relire, l&apos;ajuster et l&apos;envoyer. Le gain de temps est reel : les commerciaux rapportent entre 30 et 45 minutes economisees par jour sur la redaction.</p>
                    <p>Le predictive lead scoring de HubSpot utilise le machine learning pour analyser les caracteristiques et comportements des leads passes qui ont converti, et applique ce modele aux leads actuels. Contrairement au lead scoring manuel base sur des regles, le scoring predictif s&apos;adapte continuellement et identifie des correlations que l&apos;humain ne verrait pas. Le prerequis est un volume minimal de donnees historiques : au moins 500 contacts et 30 conversions pour que le modele soit fiable.</p>
                    <p>Les Conversation Intelligence transcrivent automatiquement les appels, identifient les sujets abordes, mesurent le ratio parole commercial/prospect, detectent les objections et les signaux d&apos;achat. Les managers peuvent rechercher par mot-cle dans l&apos;ensemble des appels de l&apos;equipe pour identifier les patterns. C&apos;est un outil de coaching extremement puissant.</p>
                    <p>Breeze Agent est la fonctionnalite la plus avancee : un agent IA capable d&apos;executer des taches autonomes dans le CRM. Il peut enrichir des fiches, qualifier des leads entrants via chatbot, planifier des rendez-vous et meme rediger des sequences de prospection completes. L&apos;agent fonctionne dans un cadre defini par l&apos;utilisateur, avec des guardrails qui limitent son champ d&apos;action.</p>
                    <p>L&apos;avantage principal de HubSpot sur l&apos;IA est l&apos;accessibilite. Contrairement a Salesforce ou l&apos;IA est un add-on payant qui necessite souvent un consultant pour la configuration, HubSpot inclut les fonctionnalites IA dans les plans Pro et Enterprise sans surcout. L&apos;activation se fait en quelques clics, et l&apos;adoption par les equipes est immediate grace a une UX pensee pour les non-techniciens. C&apos;est ce qui fait de HubSpot le meilleur point d&apos;entree pour les PME qui veulent beneficier de l&apos;IA dans leur CRM sans investissement massif.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { feature: "Breeze Email Writer", desc: "Generation d&apos;emails personnalises basee sur le contexte CRM, l&apos;historique et le profil prospect.", maturite: "Mature", color: "#6D00CC" },
                      { feature: "Predictive Lead Scoring", desc: "Scoring ML auto-calibre. Identifie les leads a forte probabilite de conversion.", maturite: "Mature", color: "#22C55E" },
                      { feature: "Conversation Intelligence", desc: "Transcription, analyse de sentiment, detection d&apos;objections, coaching insights.", maturite: "Mature", color: "#4B5EFC" },
                      { feature: "Breeze Agent", desc: "Agent autonome : enrichissement, qualification, planification, sequences.", maturite: "Emergent", color: "#FF7A59" },
                      { feature: "Content Remix", desc: "Transforme un contenu long en multiples formats : emails, posts sociaux, ads.", maturite: "Mature", color: "#6D00CC" },
                      { feature: "Deal Forecasting AI", desc: "Predictions de closing basees sur les interactions reelles, pas les estimations manuelles.", maturite: "En progres", color: "#4B5EFC" },
                    ].map((item) => (
                      <div key={item.feature} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{item.feature}</p>
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.maturite}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 -- Scoring predictif */}
              <section id="scoring-predictif" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le scoring predictif : au-dela des regles manuelles</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le scoring predictif represente l&apos;une des applications IA les plus matures et les plus impactantes dans les CRM. Contrairement au scoring traditionnel base sur des regles manuelles (&ldquo;si le prospect est CEO, +20 points ; s&apos;il a ouvert 3 emails, +15 points&rdquo;), le scoring predictif utilise le machine learning pour identifier automatiquement les facteurs qui predisent la conversion.</p>
                    <p>Le principe est simple : l&apos;algorithme analyse les caracteristiques et comportements des leads passes qui ont converti (ou non) et construit un modele statistique. Ce modele est ensuite applique aux nouveaux leads pour estimer leur probabilite de conversion. L&apos;avantage est que l&apos;IA detecte des correlations invisibles a l&apos;oeil humain : par exemple, les leads qui visitent la page pricing le mardi entre 10h et 11h convertissent 3 fois mieux que la moyenne.</p>
                    <p>Les prerequis sont stricts. Il faut un volume minimal de donnees : au moins 300 a 500 leads avec un historique complet d&apos;interactions et un outcome clair (converti ou non). Il faut aussi une qualite de donnees correcte : des fiches renseignees, des proprietes standardisees, des doublons elimines. Le scoring predictif sur des donnees sales est comme un GPS avec une carte fausse : il donne des directions avec assurance, mais elles sont fausses.</p>
                    <p>Les meilleurs modeles combinent des signaux de trois categories : firmographiques (taille, secteur, localisation, technologie utilisee), comportementaux (pages visitees, emails ouverts, webinaires assistes, contenus telecharges) et contextuels (source d&apos;acquisition, moment dans le cycle, interactions avec le support). La ponderation entre ces categories varie selon votre business model et votre cycle de vente.</p>
                    <p>Un avantage souvent meconnu du scoring predictif est sa capacite a reveler des segments de clients ideaux que vous n&apos;aviez pas identifies. Le modele peut decouvrir que les entreprises de 50-100 personnes dans le secteur logistique convertissent 4 fois mieux que la moyenne, alors que votre equipe marketing ciblait en priorite le secteur tech. Ces insights data-driven permettent de reallouer les budgets marketing vers les segments les plus prometteurs et d&apos;augmenter significativement le ROI des campagnes d&apos;acquisition.</p>
                    <p>En 2026, tous les grands CRM proposent du scoring predictif natif : HubSpot (inclus en Pro et Enterprise), Salesforce Einstein (add-on payant), Pipedrive (en beta). Des solutions tierces comme Madkudu, 6sense et Clearbit enrichissent ces modeles avec des donnees d&apos;intent et de technographie. Le choix depend de votre volume de donnees, de votre budget et de la complexite de votre cycle de vente.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { type: "Firmographiques", exemples: "Taille entreprise, secteur, localisation, CA, technologie, stade de croissance", poids: "30-40%", color: "#6D00CC" },
                      { type: "Comportementaux", exemples: "Pages visitees, emails ouverts, webinaires, contenus telecharges, formulaires", poids: "40-50%", color: "#4B5EFC" },
                      { type: "Contextuels", exemples: "Source d&apos;acquisition, moment dans le cycle, interactions support, signaux d&apos;intent", poids: "10-30%", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.type} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{item.type}</p>
                          <span className="text-[11px] font-bold" style={{ color: item.color }}>{item.poids}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.exemples}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 -- Generation de contenu */}
              <section id="generation-contenu" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Generation d&apos;emails et de contenu par l&apos;IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La generation de contenu est la fonctionnalite IA la plus utilisee dans les CRM en 2026. Selon une etude Salesforce, 67% des equipes commerciales utilisent l&apos;IA pour rediger leurs emails. L&apos;adoption a ete rapide parce que le gain est immediat et tangible : un commercial passe en moyenne 21% de sa journee a ecrire des emails. L&apos;IA reduit ce temps de moitie.</p>
                    <p>La generation d&apos;emails dans les CRM modernes va bien au-dela du simple template. L&apos;IA analyse le contexte complet du deal : historique des interactions, profil du prospect, etape du pipeline, objections precedentes, contenus consultes. Elle produit un brouillon personnalise qui prend en compte tous ces elements. Le commercial ajuste le ton, ajoute une touche personnelle, et envoie. Le resultat est un email plus pertinent, envoye plus rapidement.</p>
                    <p>Les cas d&apos;usage les plus courants sont : l&apos;email de premier contact (personnalise en fonction du profil LinkedIn et de l&apos;activite recente du prospect), l&apos;email de relance post-demo (incluant les points abordes pendant l&apos;appel), l&apos;email de re-engagement (pour les leads inactifs depuis plusieurs semaines), et l&apos;email de proposition (structurant la valeur discutee en fonction des besoins exprimes).</p>
                    <p>Au-dela des emails, l&apos;IA genere aussi des posts LinkedIn, des messages InMail, des scripts d&apos;appel, des resumes de reunion et des propositions commerciales. HubSpot Content Remix transforme un article de blog en 10 variations pour differents canaux. Salesforce Einstein GPT redige des reponses aux tickets support en se basant sur la knowledge base.</p>
                    <p>Les limites existent. L&apos;IA produit des emails corrects mais generiques si le commercial ne prend pas le temps de personnaliser. Les prospects les plus sophistiques detectent les emails purement IA et les ignorent. La cle est d&apos;utiliser l&apos;IA comme point de depart, pas comme produit fini. Le brouillon IA economise 70% du temps de redaction ; les 30% restants de personnalisation humaine font toute la difference dans le taux de reponse.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { cas: "Email de premier contact", desc: "Personnalise sur le profil LinkedIn, l&apos;actualite du prospect et le secteur. Taux de reponse +35% vs template generique.", color: "#6D00CC" },
                      { cas: "Email post-demo", desc: "Resume les points abordes pendant l&apos;appel, reprend les objections traitees et propose les prochaines etapes.", color: "#4B5EFC" },
                      { cas: "Email de re-engagement", desc: "Cible les leads inactifs avec un angle personnalise base sur leur dernier point d&apos;interaction et l&apos;evolution du marche.", color: "#22C55E" },
                      { cas: "Proposition commerciale", desc: "Structure la valeur discutee, les use cases evoques et le ROI projete en un document coherent et professionnel.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.cas} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{item.cas}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Call intelligence */}
              <section id="call-intelligence" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;intelligence conversationnelle et le resume d&apos;appels</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;intelligence conversationnelle est peut-etre la fonctionnalite IA la plus transformative pour les equipes commerciales. Elle transcrit automatiquement les appels de vente, les analyse et en extrait des insights actionables. Ce qui etait autrefois perdu dans l&apos;ether des conversations telephoniques devient une base de donnees structuree et exploitable.</p>
                    <p>La transcription automatique est devenue fiable en 2026. Les modeles de speech-to-text atteignent des taux de precision de 95% ou plus en francais, y compris avec des accents et du vocabulaire technique. Les appels sont transcrits en temps reel ou quasi-reel, et le resume est disponible dans le CRM quelques minutes apres la fin de l&apos;appel.</p>
                    <p>Le resume automatique est la premiere couche de valeur. Au lieu de prendre des notes manuellement pendant l&apos;appel (ce qui nuit a l&apos;ecoute active), le commercial se concentre sur la conversation. Apres l&apos;appel, l&apos;IA genere un resume structure : sujets abordes, objections soulevees, engagements pris de part et d&apos;autre, prochaines etapes. Ce resume est automatiquement attache a la fiche contact ou deal dans le CRM.</p>
                    <p>La deuxieme couche est l&apos;analyse. L&apos;IA mesure le ratio talk/listen (les meilleurs commerciaux ecoutent 60% du temps), detecte les mots-cles et les themes recurrents, identifie les objections les plus frequentes, et repere les signaux d&apos;achat ou de risque. Les managers peuvent rechercher dans l&apos;ensemble des appels de l&apos;equipe : &ldquo;Montre-moi tous les appels ou un concurrent est mentionne&rdquo;.</p>
                    <p>Les outils leaders sont Gong (le plus complet, positionne enterprise), Chorus (rachete par ZoomInfo, fort sur l&apos;integration data), et les solutions natives des CRM (HubSpot Conversation Intelligence, Salesforce Einstein Conversation Insights). Pour les equipes qui ne veulent pas multiplier les outils, les solutions natives du CRM sont suffisantes. Pour celles qui veulent pousser le coaching conversationnel au maximum, Gong reste la reference.</p>
                    <p>Le retour sur investissement de l&apos;intelligence conversationnelle est rapide et mesurable. Les equipes qui deploient ces outils rapportent une amelioration du ratio talk/listen de 15% en moyenne, une reduction de 20% des cycles de vente grace a une meilleure identification des objections, et une montee en competence 40% plus rapide des nouveaux commerciaux grace au coaching base sur les donnees. Le cout de Gong (environ 100$ par utilisateur par mois) est amorti des le premier trimestre pour la plupart des equipes.</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      "Transcription automatique en francais avec 95% de precision, meme avec vocabulaire technique",
                      "Resume structure : sujets, objections, engagements, prochaines etapes, directement dans le CRM",
                      "Ratio talk/listen par commercial, benchmark vs les top performers de l&apos;equipe",
                      "Detection automatique des mentions concurrents avec alertes au manager",
                      "Recherche semantique dans l&apos;ensemble des appels : retrouver tous les appels qui parlent de prix",
                      "Score de qualite d&apos;appel pour alimenter le coaching base sur les donnees",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[12px] text-[#555]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Enrichissement donnees */}
              <section id="enrichissement-data" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Enrichissement automatique des donnees</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La qualite des donnees est le talon d&apos;Achille de tout CRM. Des fiches incompletes, des informations obsoletes et des doublons non detectes plombent la productivite commerciale et faussent les analyses. L&apos;IA d&apos;enrichissement automatique s&apos;attaque frontalement a ce probleme en completant et mettant a jour les fiches sans intervention humaine.</p>
                    <p>HubSpot Breeze Intelligence enrichit automatiquement les fiches entreprises et contacts avec des donnees publiques : secteur d&apos;activite, taille, chiffre d&apos;affaires, technologies utilisees, coordonnees, profils sociaux. Le systeme se declenche a la creation de la fiche ou a intervalles reguliers pour maintenir les donnees a jour. Le taux de completude moyen passe de 40% a 85% apres activation.</p>
                    <p>Les solutions tierces d&apos;enrichissement (Clearbit, Apollo, Lusha, ZoomInfo) vont encore plus loin avec des donnees d&apos;intent (signaux d&apos;achat), des donnees technographiques (quels outils le prospect utilise), des donnees de croissance (recrutement, levees de fonds) et des donnees organisationnelles (organigramme, decideurs). L&apos;integration avec le CRM est generalement native ou via API.</p>
                    <p>L&apos;IA de deduplication identifie et fusionne les doublons automatiquement en se basant sur des criteres multiples : email, nom + entreprise, telephone, domaine web. Les algorithmes de fuzzy matching detectent les quasi-doublons (variantes de noms, fautes de frappe, abreviations). Le nettoyage automatique des doublons peut recuperer entre 5 et 15% de fiches qui etaient dispersees.</p>
                    <p>Le data decay est un probleme constant : les gens changent de poste, les entreprises evoluent, les numeros de telephone changent. En moyenne, 30% des donnees CRM deviennent obsoletes chaque annee. L&apos;enrichissement continu par l&apos;IA maintient les donnees a jour sans effort humain. C&apos;est l&apos;une des applications IA avec le ROI le plus immediat et le plus mesurable dans un CRM.</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      "Enrichissement firmographique : secteur, taille, CA, localisation, technologies utilisees, serie de financement",
                      "Enrichissement contact : intitule de poste, seniority, departement, profils sociaux, email verifie",
                      "Deduplication intelligente : fuzzy matching multi-criteres, fusion automatique ou assistee des doublons",
                      "Verification email en continu : detection des bounces, emails invalides, changements de domaine",
                      "Signaux d&apos;intent : recrutement, levees de fonds, changements d&apos;organigramme, mentions technologiques",
                      "Data decay monitoring : alerte quand le taux de completude descend sous un seuil par segment",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[12px] text-[#555]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- Agents IA -- DARK SECTION */}
              <section id="agents-ia" className="mb-8">
                <div className="rounded-2xl bg-[#111] text-white p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Les agents IA dans le CRM : la prochaine revolution</h2>
                  <div className="space-y-3 text-[13px] text-white/70 leading-[1.75]">
                    <p>Les agents IA representent le troisieme niveau de maturite de l&apos;IA dans les CRM, et potentiellement le plus transformatif. Un agent IA n&apos;est pas un simple assistant qui repond aux requetes. C&apos;est un systeme autonome capable de percevoir son environnement (les donnees CRM), de raisonner (analyser le contexte) et d&apos;agir (executer des taches) sans intervention humaine constante.</p>
                    <p>Salesforce a lance Agentforce fin 2024, et HubSpot a suivi avec Breeze Agent en 2025. Ces agents peuvent gerer des workflows complets : un lead arrive via un formulaire, l&apos;agent l&apos;enrichit, le qualifie selon des criteres definis, l&apos;assigne au bon commercial, envoie un email de bienvenue personnalise et planifie une tache de suivi. Le tout en quelques secondes, 24h/24.</p>
                    <p>Les cas d&apos;usage les plus matures sont la qualification automatique des leads entrants (l&apos;agent chatbot pose des questions, analyse les reponses, et route vers le bon commercial ou le bon nurture), l&apos;enrichissement et le nettoyage continu des donnees, et l&apos;automatisation des taches administratives post-appel (mise a jour du deal, creation de taches, envoi de follow-up).</p>
                    <p>Les limites actuelles sont claires. Les agents fonctionnent bien dans des cadres bien definis avec des regles explicites. Ils sont moins fiables dans les situations ambigues qui necessitent du jugement humain. Le risque principal est l&apos;action inappropriee : un agent qui envoie un email de relance a un client mecontent, ou qui qualifie mal un lead strategique. Les guardrails et la supervision humaine restent indispensables en 2026.</p>
                    <p>La trajectoire est neanmoins claire. D&apos;ici 2027-2028, les agents IA gereront une part significative des interactions de premier niveau avec les prospects et clients. Le commercial humain interviendra sur les deals complexes, les negotiations strategiques et les relations a haute valeur. La question n&apos;est plus &ldquo;si&rdquo; mais &ldquo;quand&rdquo; et &ldquo;comment&rdquo; deployer ces agents dans votre organisation.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "24/7", label: "qualification et enrichissement des leads entrants", color: "#6D00CC" },
                      { value: "3 sec", label: "temps moyen de traitement d&apos;un lead par un agent IA", color: "#4B5EFC" },
                      { value: "85%", label: "de precision sur la qualification de premier niveau", color: "#22C55E" },
                      { value: "2027", label: "adoption massive prevue des agents autonomes dans les CRM", color: "#FF7A59" },
                    ].map((stat) => (
                      <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-[1.4]">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 -- Choisir le bon CRM IA */}
              <section id="choisir-crm-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Choisir le bon CRM avec IA : comparatif</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Tous les CRM ne sont pas egaux en matiere d&apos;IA. Le choix depend de votre taille, de votre budget, de votre volume de donnees et de vos cas d&apos;usage prioritaires. Voici un comparatif objectif des principales plateformes en 2026.</p>
                    <p>HubSpot est le meilleur choix pour les PME et mid-market qui veulent une IA accessible, integree et sans complexite technique. Les fonctionnalites IA sont incluses dans les plans Pro et Enterprise sans surcout majeur. L&apos;interface est intuitive, l&apos;adoption est rapide, et l&apos;ecosysteme d&apos;integrations est riche. La limite est le volume : les tres grands comptes avec des millions de contacts et des besoins de personnalisation avances trouveront les murs.</p>
                    <p>Salesforce avec Einstein est le choix enterprise. La puissance analytique est superieure, les possibilites de personnalisation sont quasi illimitees, et l&apos;ecosysteme ISV est le plus riche du marche. Le prix de l&apos;IA Salesforce est eleve : Einstein GPT et Agentforce sont des add-ons payants qui s&apos;ajoutent a des licences deja consequentes. Le TCO peut facilement depasser le double de HubSpot pour des fonctionnalites comparables.</p>
                    <p>Pipedrive a fait des progres significatifs avec son assistant IA integre, mais reste positionne sur les petites equipes commerciales. L&apos;IA est correcte pour la saisie automatique et les suggestions basiques, mais en retard sur le scoring predictif et l&apos;intelligence conversationnelle. C&apos;est un bon choix pour les equipes de moins de 10 commerciaux avec un budget serre.</p>
                    <p>Zoho CRM merite egalement une mention avec Zia, son assistant IA. Zia offre des predictions de vente, de l&apos;analyse de sentiment sur les emails, de la detection d&apos;anomalies et des recommandations de next best action. Le positionnement est similaire a HubSpot en termes d&apos;accessibilite, avec un prix generalement inferieur. La limite est l&apos;ecosysteme d&apos;integrations, moins riche que HubSpot ou Salesforce, ce qui peut etre un frein pour les stacks RevOps complexes.</p>
                    <p>Les CRM verticaux et emergents (Attio, Folk, Twenty) integrent l&apos;IA avec des approches parfois innovantes, mais manquent encore de la profondeur fonctionnelle et de l&apos;ecosysteme des leaders. Ils sont a surveiller pour les entreprises qui veulent une experience IA-native des la conception, sans le bagage historique des plateformes etablies.</p>
                    <p>Le critere souvent oublie est la qualite des donnees d&apos;entrainement. L&apos;IA d&apos;un CRM est aussi bonne que les donnees que vous lui fournissez. Un CRM avec des fiches incompletes, des doublons et des processus desorganises ne beneficiera pas de l&apos;IA, quelle que soit la sophistication de l&apos;algorithme. Avant d&apos;investir dans l&apos;IA, investissez dans la qualite de vos donnees. C&apos;est le conseil le plus important de ce guide.</p>
                    <p>Le cout total de possession (TCO) est l&apos;autre critere decisif. Les fonctionnalites IA &ldquo;incluses&rdquo; ne sont pas toujours gratuites : elles sont souvent reservees aux plans les plus chers ou facturees en credits d&apos;utilisation. Chez Salesforce, l&apos;ajout d&apos;Einstein GPT et Agentforce peut facilement doubler la facture mensuelle. Chez HubSpot, la plupart des fonctionnalites IA sont incluses a partir du plan Pro, ce qui en fait l&apos;option la plus previsible en termes de budget.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { crm: "HubSpot", segment: "PME / Mid-Market", forces: "IA accessible, incluse dans les plans, adoption rapide, interface intuitive", prix: "90-150 EUR/mois/user", color: "#FF7A59" },
                      { crm: "Salesforce", segment: "Enterprise", forces: "IA puissante, personnalisation infinie, ecosysteme ISV, Agentforce", prix: "150-300 EUR/mois/user + add-ons", color: "#4B5EFC" },
                      { crm: "Pipedrive", segment: "TPE / Petites equipes", forces: "Simple, abordable, assistant IA integre, pipeline visuel", prix: "49-99 EUR/mois/user", color: "#22C55E" },
                    ].map((item) => (
                      <div key={item.crm} className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[12px] font-semibold text-[#111]">{item.crm}</p>
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.segment}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6] mb-2">{item.forces}</p>
                        <p className="text-[10px] text-[#999]">{item.prix}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 -- Roadmap implementation */}
              <section id="roadmap-implementation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Roadmap d&apos;implementation de l&apos;IA dans votre CRM</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Deployer l&apos;IA dans un CRM ne se resume pas a activer un bouton. C&apos;est un projet de transformation qui touche les processus, les competences et la culture de l&apos;equipe. Voici une roadmap en 4 phases pour une implementation reussie.</p>
                    <p>La phase 1 (mois 1-2) est la fondation data. Avant d&apos;activer toute fonctionnalite IA, il faut s&apos;assurer que les donnees du CRM sont propres, completes et structurees. Nettoyage des doublons, standardisation des proprietes, comblement des lacunes par enrichissement, definition des conventions de nommage. L&apos;IA est aussi bonne que les donnees qu&apos;on lui donne.</p>
                    <p>La phase 2 (mois 2-3) est l&apos;IA assistante. Activez les fonctionnalites a gain immediat : generation d&apos;emails, resume d&apos;appels, enrichissement automatique. Ces fonctionnalites sont les plus faciles a adopter car elles ne changent pas les processus existants, elles les accelerent. Mesurez l&apos;adoption et le gain de temps reel pour construire le business case des phases suivantes.</p>
                    <p>La phase 3 (mois 3-6) est l&apos;IA analytique. Deployez le scoring predictif, le deal forecasting et les insights automatiques. Ces fonctionnalites necessitent un volume de donnees suffisant et une formation des equipes pour interpreter correctement les resultats. Commencez par un pilote sur une equipe avant de generaliser.</p>
                    <p>La phase 4 (mois 6+) est l&apos;IA autonome. Deployer des agents IA pour les taches repetitives : qualification de premier niveau, routage, enrichissement continu, relances automatisees. Definissez des guardrails clairs, supervisez les premiers mois, et elargissez progressivement le champ d&apos;action des agents en fonction des resultats.</p>
                    <p>Chaque phase doit se conclure par un bilan mesure : gain de temps reel par commercial, amelioration des metriques cles, taux d&apos;adoption par l&apos;equipe, et feedback qualitatif. Ce bilan sert de business case pour financer la phase suivante. Les projets IA qui echouent sont presque toujours ceux qui sautent directement a la phase 3 ou 4 sans avoir consolide les fondations data de la phase 1.</p>
                  </div>

                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#FAFAFA] px-5 py-3 border-b border-[#E8E8E8]">
                      <span className="text-[12px] font-semibold text-[#111]">Roadmap implementation IA CRM -- 6 mois</span>
                    </div>
                    <div className="p-4 space-y-3">
                      {[
                        { phase: "Phase 1", label: "Fondation data", items: "Nettoyage, deduplication, enrichissement, standardisation", color: "#6D00CC" },
                        { phase: "Phase 2", label: "IA assistante", items: "Emails, resumes appels, enrichissement auto, quick wins", color: "#4B5EFC" },
                        { phase: "Phase 3", label: "IA analytique", items: "Scoring predictif, forecasting, insights, pilote equipe", color: "#22C55E" },
                        { phase: "Phase 4", label: "IA autonome", items: "Agents, qualification auto, routage, relances, guardrails", color: "#FF7A59" },
                      ].map((item) => (
                        <div key={item.phase} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-[#F2F2F2]">
                          <div className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ backgroundColor: item.color }} />
                          <div>
                            <p className="text-[11px] font-semibold text-[#111]">{item.phase} -- {item.label}</p>
                            <p className="text-[10px] text-[#777] mt-0.5">{item.items}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 -- Predictions futures */}
              <section id="predictions-futur" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Predictions : le CRM en 2027-2030</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;evolution de l&apos;IA dans les CRM suit une trajectoire claire vers toujours plus d&apos;autonomie et d&apos;intelligence contextuelle. Voici les tendances que nous anticipons pour les 3 a 5 prochaines annees, basees sur les signaux actuels et les roadmaps des editeurs.</p>
                    <p>Premiere tendance : le CRM zero-input. La saisie manuelle disparaitra presque completement. Les interactions (emails, appels, meetings) seront automatiquement capturees, transcrites, resumees et enregistrees dans le CRM. Les proprietes des fiches seront maintenues a jour en continu par l&apos;enrichissement IA. Le commercial n&apos;ouvrira le CRM que pour consulter, pas pour saisir.</p>
                    <p>Deuxieme tendance : le CRM proactif. Au lieu d&apos;attendre que le commercial consulte un dashboard, le CRM poussera les insights au bon moment : &ldquo;Ce deal est a risque, voici pourquoi et quoi faire&rdquo;, &ldquo;Ce prospect vient de lever des fonds, c&apos;est le bon moment pour relancer&rdquo;, &ldquo;Ce client montre des signaux de churn, voici le playbook de retention&rdquo;. Le CRM deviendra un copilote strategique.</p>
                    <p>Troisieme tendance : les agents multi-CRM. Les agents IA ne seront plus confines a un seul outil. Ils orchestreront des actions a travers l&apos;ensemble du stack : CRM, marketing automation, support, facturation, produit. Un agent pourra detecter un signal dans le produit, creer une alerte dans le CRM, declencher un workflow marketing et planifier une tache pour le CSM, le tout de maniere coordonnee.</p>
                    <p>Quatrieme tendance : l&apos;hyper-personnalisation a echelle. L&apos;IA generera des communications parfaitement adaptees a chaque individu, en tenant compte non seulement de son profil et de son historique, mais aussi de son style de communication prefere, de ses centres d&apos;interet, de son contexte business du moment. Chaque email, chaque message sera unique, pertinent et timely. La prospection de masse generique deviendra obsolete.</p>
                  </div>

                  <div className="mt-6 space-y-2">
                    {[
                      "CRM zero-input : fin de la saisie manuelle, capture automatique de toutes les interactions",
                      "CRM proactif : insights pousses au bon moment, pas seulement consultes dans un dashboard",
                      "Agents multi-systemes : orchestration d&apos;actions a travers CRM, marketing, support et facturation",
                      "Hyper-personnalisation : chaque communication unique et contextuelle, fin du mass emailing generique",
                      "Voice-first CRM : interaction par la voix, mise a jour du CRM en conduisant ou en marchant",
                      "Predictive revenue : le CRM predit le revenu avec la meme fiabilite qu&apos;un directeur financier",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-[12px] text-[#555]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6D00CC] shrink-0 mt-1.5" />
                        <span>{item}</span>
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
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a deployer l&apos;IA dans votre CRM ?</h2>
                  <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On vous accompagne dans le deploiement de l&apos;IA dans HubSpot : audit data, activation des fonctionnalites, formation des equipes et mesure du ROI. Premiers gains de productivite en 30 jours.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#6D00CC]" />Reserver un appel decouverte
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
