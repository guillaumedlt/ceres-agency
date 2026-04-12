"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Qualification automatique des leads avec l'IA : methode et resultats",
  description: "Comment l'IA qualifie les leads automatiquement. Signaux comportementaux, firmographiques et intent. Workflow complet, resultats concrets (MQL>SQL de 15% a 35%) et comparaison avec le scoring classique.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/ia-qualification-leads-automatique" },
  articleSection: "IA & Automatisation",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "probleme-qualification", title: "Le probleme de la qualification manuelle" },
  { id: "criteres-qualification", title: "Les criteres de qualification" },
  { id: "comment-ia-qualifie", title: "Comment l'IA qualifie" },
  { id: "workflow-complet", title: "Le workflow complet" },
  { id: "resultats", title: "Les resultats" },
  { id: "difference-scoring", title: "Difference avec le scoring classique" },
  { id: "limites", title: "Les limites" },
  { id: "notre-approche", title: "Notre approche" },
];

const relatedArticles = [
  { title: "Lead scoring : le guide complet pour qualifier vos leads B2B", slug: "lead-scoring-guide-complet", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "IA et scoring predictif : le futur du lead scoring B2B", slug: "ia-scoring-predictif-lead-scoring", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "5 agents IA deployes chez nos clients B2B", slug: "agents-ia-deployes-clients-b2b", category: "IA & Automatisation", color: "#6D00CC" },
];

export default function IaQualificationLeadsAutomatiqueArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("probleme-qualification");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Qualification%20automatique%20des%20leads%20avec%20l%27IA&url=https://ceres.agency/blog/ia-qualification-leads-automatique" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/ia-qualification-leads-automatique" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Qualification automatique des leads</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>IA &amp; Automatisation</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Qualification automatique des leads avec l&apos;IA : methode et resultats
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Vos SDR passent 60% de leur temps a qualifier des leads qui ne convertiront jamais. L&apos;IA peut qualifier en temps reel, en croisant des signaux que l&apos;humain ne peut pas traiter a cette echelle. Ce guide detaille la methode, le workflow complet et les resultats concrets : un taux de conversion MQL vers SQL qui passe de 15% a 35%.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>12 avril 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 */}
              <section id="probleme-qualification" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le probleme de la qualification manuelle</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La qualification manuelle des leads est le goulot d&apos;etranglement numero un des equipes commerciales B2B. Un SDR recoit un lead, il ouvre la fiche CRM, il cherche l&apos;entreprise sur LinkedIn, il verifie le site web, il estime la taille, il evalue le fit. Ca prend 10 a 15 minutes par lead. Sur 50 leads par semaine, c&apos;est 10 heures de travail repetitif.</p>
                    <p>Le probleme n&apos;est pas que c&apos;est long. Le probleme c&apos;est que c&apos;est inconsistant. Chaque SDR a ses propres criteres, ses propres biais. Un SDR fatigue le vendredi apres-midi va qualifier differemment qu&apos;un SDR motive le lundi matin. Resultat : des leads qualifies qui n&apos;auraient pas du l&apos;etre, des leads disqualifies qui auraient du passer.</p>
                    <p>Les chiffres sont parlants. En moyenne, 70 a 80% des leads qualifies manuellement ne se convertissent jamais en opportunites. Le taux de conversion MQL vers SQL tourne autour de 15% dans la plupart des equipes B2B. Ca signifie que 85% du temps de qualification est investi sur des leads qui ne donneront rien.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "10-15 min", label: "par lead en qualification manuelle", color: "#EF4444" },
                      { stat: "15%", label: "taux de conversion MQL > SQL moyen", color: "#FF7A59" },
                      { stat: "85%", label: "du temps de qualification gaspille", color: "#6C5CE7" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                        <p className="text-[20px] font-bold mb-1" style={{ color: s.color }}>{s.stat}</p>
                        <p className="text-[10px] text-[#999] leading-[1.4]">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 */}
              <section id="criteres-qualification" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les criteres de qualification : BANT, MEDDIC, ANUM vs IA</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les frameworks de qualification traditionnels fonctionnent. BANT (Budget, Authority, Need, Timeline), MEDDIC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion) et ANUM (Authority, Need, Urgency, Money) structurent la reflexion. Le probleme, c&apos;est qu&apos;ils necessitent une conversation. Vous ne pouvez pas evaluer le BANT d&apos;un lead qui vient de remplir un formulaire.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { framework: "BANT", strengths: "Simple, rapide a utiliser, bien compris par les equipes", limits: "Necessite un echange direct. Evalue le lead a un instant T, pas dans le temps.", color: "#FF7A59" },
                      { framework: "MEDDIC", strengths: "Tres structure, ideal pour les deals complexes enterprise", limits: "Trop lourd pour les cycles courts. Necessite beaucoup d'informations qu'on n'a pas au debut.", color: "#4B5EFC" },
                      { framework: "IA", strengths: "Instantanee, coherente, multi-sources, en continu. Evalue le lead des le premier contact, puis rafine en temps reel.", limits: "Necessite des donnees propres. Peut manquer de contexte humain (urgence politique, relation existante).", color: "#6D00CC" },
                    ].map((item) => (
                      <div key={item.framework} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.framework}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2"><strong className="text-[#111]">Forces :</strong> {item.strengths}</p>
                        <p className="text-[11px] text-[#777] leading-[1.7]"><strong className="text-[#111]">Limites :</strong> {item.limits}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA ne remplace pas les frameworks. Elle les alimente. L&apos;IA collecte et analyse les donnees que les frameworks traditionnels necessitent : taille d&apos;entreprise (proxy du budget), poste du contact (proxy de l&apos;autorite), pages visitees (proxy du besoin), recurrence des visites (proxy du timeline). L&apos;IA fait le travail de recherche, le commercial fait le travail de relation.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="comment-ia-qualifie" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment l&apos;IA qualifie : 3 types de signaux</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA qualifie en croisant trois types de signaux que l&apos;humain ne peut pas traiter simultanement a grande echelle. Chaque type de signal apporte une dimension differente de la qualification.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        type: "Signaux comportementaux",
                        desc: "Ce que le lead fait. Pages visitees (pricing = signal fort), frequence de visite, telechargements de contenus, ouverture d'emails, clics, temps passe sur le site. Un lead qui visite la page pricing 3 fois en une semaine a un intent different de celui qui a lu un article de blog une fois.",
                        examples: "3+ visites page pricing, telechargement du guide, ouverture de 5+ emails en 2 semaines",
                        weight: "40%",
                        color: "#22C55E"
                      },
                      {
                        type: "Signaux firmographiques",
                        desc: "Ce qu'est l'entreprise du lead. Taille, secteur, chiffre d'affaires, technologie utilisee, croissance, levees de fonds. L'IA enrichit automatiquement via Clay, Apollo, Societe.com. Un lead dans votre ICP ideal a un score de base plus eleve.",
                        examples: "50-500 salaries, SaaS B2B, utilise HubSpot, a leve en Serie A",
                        weight: "35%",
                        color: "#4B5EFC"
                      },
                      {
                        type: "Signaux d'intent",
                        desc: "Ce que l'entreprise cherche. Recherches Google sur vos mots-cles, publications LinkedIn du lead, offres d'emploi (recrutement CRM = besoin CRM), mentions sur des forums, comparatifs consultes. Ces signaux sont les plus predictifs car ils revelent un besoin actif.",
                        examples: "Recherche 'meilleur CRM B2B', offre d'emploi RevOps Manager, mention de migration CRM",
                        weight: "25%",
                        color: "#6D00CC"
                      },
                    ].map((item) => (
                      <div key={item.type} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.type}</span>
                          <span className="text-[10px] font-medium ml-auto" style={{ color: item.color }}>Poids : {item.weight}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#FAFAFA] p-2">
                          <span className="text-[10px] font-semibold shrink-0 mt-0.5" style={{ color: item.color }}>Exemples :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.examples}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La force de l&apos;IA est de croiser ces trois dimensions en temps reel. Un humain peut consulter LinkedIn et le site web de l&apos;entreprise. L&apos;IA croise 15 a 20 sources de donnees en quelques secondes et produit un score de qualification base sur des signaux que l&apos;humain n&apos;aurait pas le temps de collecter.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="workflow-complet" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le workflow : lead entrant &gt; IA qualifie &gt; score + routing</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Voici le workflow complet, de l&apos;arrivee du lead a son routage vers le bon commercial. Chaque etape est automatisee. Le SDR n&apos;intervient que sur les leads deja qualifies.</p>
                  </div>

                  <div className="my-6 space-y-2">
                    {[
                      { step: "01", title: "Le lead arrive", desc: "Formulaire web, import, chatbot, LinkedIn. Le lead entre dans le CRM avec les informations de base : email, prenom, nom, entreprise (parfois).", color: "#22C55E" },
                      { step: "02", title: "L'IA enrichit", desc: "En moins de 30 secondes, l'agent IA enrichit la fiche : taille de l'entreprise, secteur, CA, techno stack, poste du contact, profil LinkedIn. Via Clay, Apollo, Societe.com.", color: "#4B5EFC" },
                      { step: "03", title: "L'IA qualifie", desc: "L'IA croise les signaux comportementaux (historique de navigation), firmographiques (enrichissement) et d'intent (signaux externes). Elle produit un score de 0 a 100 et un label : Hot, Warm, Cold.", color: "#6D00CC" },
                      { step: "04", title: "Routing automatique", desc: "Hot (score > 75) : notification immediate au commercial senior, rendez-vous propose sous 2h. Warm (50-75) : entre dans une sequence de nurturing acceleree. Cold (< 50) : entre dans le nurturing long terme.", color: "#FF7A59" },
                      { step: "05", title: "Le commercial prend le relais", desc: "Le SDR recoit une fiche enrichie, un score, une justification en langage naturel ('Ce lead est Hot car l'entreprise fait 200 salaries SaaS, a visite la page pricing 4 fois et recrute un RevOps'). Il gagne 10 minutes de recherche par lead.", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.step} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] p-4">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold shrink-0" style={{ background: item.color }}>{item.step}</div>
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le temps total entre l&apos;arrivee du lead et le routage : moins de 2 minutes. En qualification manuelle, ce delai est de 2 a 24 heures selon la charge de l&apos;equipe. Or, la probabilite de conversion d&apos;un lead baisse de 80% apres 5 minutes. La vitesse de qualification est un avantage competitif mesurable.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les resultats : MQL&gt;SQL de 15% a 35%</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les resultats de la qualification IA ne sont pas theoriques. Ce sont des chiffres constates chez nos clients apres 3 mois de deploiement. Voici les metriques avant/apres les plus significatives.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { metric: "Taux de conversion MQL > SQL", before: "15%", after: "35%", improvement: "+133%", color: "#22C55E" },
                      { metric: "Temps de qualification par lead", before: "12 min", after: "< 2 min", improvement: "-83%", color: "#4B5EFC" },
                      { metric: "Temps de reponse au lead", before: "4h", after: "15 min", improvement: "-94%", color: "#6D00CC" },
                      { metric: "Leads disqualifies a tort", before: "20%", after: "5%", improvement: "-75%", color: "#6C5CE7" },
                      { metric: "Pipeline genere par SDR/mois", before: "80K EUR", after: "130K EUR", improvement: "+63%", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.metric} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.metric}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="inline-block px-2 py-0.5 rounded bg-[#EF4444]/10 text-[#EF4444] text-[10px] font-medium">Avant : {item.before}</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                          <span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] text-[10px] font-medium">Apres : {item.after}</span>
                          <span className="text-[11px] font-bold ml-auto" style={{ color: item.color }}>{item.improvement}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Pourquoi le taux double.</strong> L&apos;amelioration ne vient pas d&apos;une meilleure qualification au sens strict. Elle vient de deux effets combines. D&apos;abord, l&apos;IA est plus selective a l&apos;entree : elle ne passe en SQL que les leads qui correspondent vraiment a l&apos;ICP. Ensuite, les SDR consacrent plus de temps aux leads qualifies (recherche approfondie, personnalisation) au lieu de passer 80% de leur temps a disqualifier.</p>
                    <p><strong className="text-[#111]">Le pipeline par SDR augmente de 63%.</strong> Pas parce que les SDR travaillent plus, mais parce qu&apos;ils travaillent sur les bons leads. Le volume traite augmente (l&apos;IA gere la qualification) et la qualite du pipeline augmente (meilleur ciblage). L&apos;effet combine est multiplicateur.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="difference-scoring" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La difference avec le scoring classique</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le lead scoring classique (HubSpot natif, Marketo, Pardot) utilise des regles manuelles : +10 points si le lead ouvre un email, +20 si il visite la page pricing, -5 si domaine gmail.com. C&apos;est un systeme de regles if/then cree par un humain.</p>
                    <p>La qualification IA est fondamentalement differente.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Critere</th>
                            <th className="text-center py-2 px-2 text-[#FF7A59] font-semibold">Scoring classique</th>
                            <th className="text-center py-2 pl-2 text-[#6D00CC] font-semibold">Qualification IA</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { critere: "Methode", classique: "Regles manuelles (if/then)", ia: "Analyse multi-signaux par LLM" },
                            { critere: "Sources", classique: "1-2 (CRM, email)", ia: "10-20 sources croisees" },
                            { critere: "Mise a jour", classique: "Statique (quand un event arrive)", ia: "Continue (re-evaluation periodique)" },
                            { critere: "Explication", classique: "Score numerique sans contexte", ia: "Score + justification en langage naturel" },
                            { critere: "Maintenance", classique: "Revision manuelle trimestrielle", ia: "Auto-apprentissage sur les conversions" },
                            { critere: "Precision", classique: "60-70% de precision", ia: "80-90% de precision" },
                          ].map((row) => (
                            <tr key={row.critere} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.critere}</td>
                              <td className="py-2.5 px-2 text-center text-[#777]">{row.classique}</td>
                              <td className="py-2.5 pl-2 text-center text-[#777]">{row.ia}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;avantage clef : l&apos;explication.</strong> Un score de 78 ne dit rien au commercial. Une justification qui dit &ldquo;Ce lead est Hot car l&apos;entreprise correspond a votre ICP (SaaS, 120 salaries, Serie A), le contact est VP Sales avec pouvoir de decision, et l&apos;entreprise a publie une offre pour un CRM Manager la semaine derniere&rdquo; change tout. Le commercial sait exactement pourquoi ce lead est prioritaire et peut personnaliser sa premiere approche.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="limites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les limites : faux positifs et edge cases</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA n&apos;est pas parfaite. Et pretendre le contraire serait malhonnete. Voici les limites reelles de la qualification automatique, et comment les gerer.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        limite: "Faux positifs (5-10%)",
                        desc: "L'IA qualifie un lead comme Hot alors qu'il n'est pas pertinent. Causes frequentes : un concurrent qui fait de la veille, un etudiant qui fait un benchmark, un consultant qui cherche des informations pour un client.",
                        solution: "Le SDR reste le filtre final. L'IA qualifie, le SDR valide. Le feedback du SDR ('ce lead etait un faux positif') est reinjecte dans le modele pour l'ameliorer.",
                        color: "#EF4444"
                      },
                      {
                        limite: "Faux negatifs (3-5%)",
                        desc: "L'IA disqualifie un lead qui aurait du passer. Causes : entreprise trop petite selon les criteres mais avec un budget important, contact avec un titre atypique, entreprise dans un secteur non standard.",
                        solution: "Revue hebdomadaire des leads disqualifies par l'IA. Le Data Steward verifie un echantillon de 10% des Cold leads. Si le taux de faux negatifs depasse 5%, ajustement des criteres.",
                        color: "#FF7A59"
                      },
                      {
                        limite: "Donnees insuffisantes",
                        desc: "Certains leads arrivent avec tres peu d'informations : un email generique, pas de nom d'entreprise, formulaire mal rempli. L'IA ne peut pas qualifier ce qu'elle ne connait pas.",
                        solution: "Ces leads entrent dans un flux d'enrichissement prioritaire. Si l'enrichissement echoue, le lead est route vers un SDR pour qualification manuelle. Environ 10% des leads necessitent encore une qualification humaine.",
                        color: "#6C5CE7"
                      },
                    ].map((item) => (
                      <div key={item.limite} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.limite}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#22C55E]/5 p-2">
                          <span className="text-[10px] text-[#22C55E] font-semibold shrink-0 mt-0.5">Solution :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;objectif n&apos;est pas une precision de 100%. C&apos;est d&apos;etre significativement meilleur que la qualification manuelle, de maniere coherente et scalable. Un taux de precision de 85% avec l&apos;IA vs 65% en manuel, c&apos;est 20 points d&apos;amelioration sur chaque lead, chaque jour, sans variation liee a la fatigue ou aux biais individuels.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre approche</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, la qualification IA est l&apos;un des premiers agents que l&apos;on deploie chez nos clients. C&apos;est le use case avec le meilleur ratio effort/resultat : rapide a mettre en place, impact mesurable des le premier mois.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Semaine 1 : Audit et ICP", desc: "On analyse votre base de clients existants pour definir le profil ideal. Quels sont les traits communs de vos meilleurs clients ? Taille, secteur, techno, poste du contact, source d'acquisition.", color: "#22C55E" },
                      { title: "Semaine 2 : Configuration", desc: "On configure l'agent IA : sources d'enrichissement, criteres de qualification, seuils de scoring, regles de routing. Integration avec votre CRM et vos outils existants.", color: "#4B5EFC" },
                      { title: "Semaine 3 : Test en parallele", desc: "L'IA qualifie en parallele des SDR pendant une semaine. On compare les resultats : precision, coherence, temps. Ajustement des seuils et des criteres sur la base des ecarts.", color: "#6C5CE7" },
                      { title: "Mois 2-3 : Deploiement et optimisation", desc: "L'IA prend le relais de la qualification. Les SDR valident et donnent du feedback. On mesure le taux MQL>SQL, le pipeline par SDR et le temps de reponse. Ajustements continus.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <p className="text-[12px] font-semibold text-white">{item.title}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le cout de mise en place est de 3 000 a 5 000 EUR, avec un cout mensuel de 100 a 200 EUR (API IA + orchestration). Le ROI est generalement positif des le deuxieme mois. Si votre equipe qualifie plus de 30 leads par semaine manuellement, c&apos;est le premier agent IA a deployer.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Automatiser votre qualification de leads ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">On deploie un agent IA de qualification en 3 semaines. Enrichissement automatique, scoring multi-signaux, routing intelligent. Vos SDR ne travaillent plus que sur les leads qui comptent.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#6D00CC] text-white rounded-lg text-[13px] font-medium hover:bg-[#5C00B0] transition-colors">
                  Deployer la qualification IA
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Related articles */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#111] mb-4">Articles complementaires</h3>
                <div className="grid gap-3">
                  {relatedArticles.map((a) => (
                    <Link key={a.slug} href={`/blog/${a.slug}`} className="group flex items-center gap-4 rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors">
                      <div className="w-1 h-10 rounded-full" style={{ background: a.color }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] font-medium mb-1" style={{ color: a.color }}>{a.category}</p>
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#6D00CC] transition-colors leading-[1.4]">{a.title}</p>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#CCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="m9 18 6-6-6-6" /></svg>
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
