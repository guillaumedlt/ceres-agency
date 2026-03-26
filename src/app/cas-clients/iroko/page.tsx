"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client Iroko : adoption d\u2019agents IA et automatisation avec Claude",
  description: "Comment Ceres a deploye 4 agents IA propulses par Claude chez Iroko pour automatiser les processus commerciaux et operationnels. -50% temps admin, +30% conversion, ROI en 6 semaines.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-26",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "objectifs", title: "Les objectifs" },
  { id: "approche", title: "L\u2019approche" },
  { id: "agent-enrichissement", title: "Agent 1 : Enrichissement" },
  { id: "agent-qualification", title: "Agent 2 : Qualification" },
  { id: "agent-contenu", title: "Agent 3 : Contenu" },
  { id: "agent-appels", title: "Agent 4 : Appels" },
  { id: "integration", title: "Integration stack" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Retour client" },
];

export default function IrokoCaseStudy() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("contexte");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
      const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#6C5CE7] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: "#6C5CE7", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "45%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "65%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "82%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <img src="https://www.google.com/s2/favicons?domain=iroko.eu&sz=32" alt="Iroko" className="w-5 h-5" />
                <span className="text-[12px] font-semibold text-[#111]">Iroko</span>
              </div>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#6C5CE7] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/cas-clients" className="hover:text-[#111] transition-colors">Cas clients</Link><span>/</span>
              <span className="text-[#666]">Iroko</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">12 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/s2/favicons?domain=iroko.eu&sz=64" alt="Iroko" className="w-10 h-10 rounded-xl" />
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Iroko</h1>
                  <p className="text-[12px] text-[#999]">FinTech | SCPI responsable | 50-100 personnes | Scale-up immobilier</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Deploiement de 4 agents IA propulses par Claude pour automatiser les processus commerciaux et operationnels. De l&apos;enrichissement prospects a la generation de contenu, en passant par la qualification automatique et l&apos;intelligence des appels.
              </p>

              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {[
                    { value: "-50%", label: "Temps admin", color: "#22C55E" },
                    { value: "+30%", label: "Taux de conversion", color: "#4B5EFC" },
                    { value: "4", label: "Agents IA actifs", color: "#6C5CE7" },
                    { value: "200h+", label: "Gagnees / mois", color: "#FF7A59" },
                    { value: "6 sem.", label: "ROI atteint", color: "#22C55E" },
                  ].map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="text-[24px] font-bold" style={{ color: r.color }}>{r.value}</div>
                      <div className="text-[10px] text-white/40">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </header>

            <article>
              {/* Contexte */}
              <section id="contexte" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le contexte</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Iroko est une scale-up francaise specialisee dans l&apos;investissement immobilier responsable via des SCPI (Societes Civiles de Placement Immobilier). Fondee avec la conviction que l&apos;immobilier peut etre a la fois performant et socialement responsable, Iroko s&apos;est imposee comme l&apos;un des acteurs les plus innovants de la gestion d&apos;actifs en France, avec une croissance soutenue et une equipe de 50 a 100 personnes.</p>
                    <p>Cote outils, Iroko operait deja sur HubSpot pour sa gestion commerciale et marketing. Le CRM etait en place, les workflows tournaient, et les equipes avaient de bons reflexes. Mais la direction avait une ambition claire : exploiter l&apos;intelligence artificielle pour passer un cap dans l&apos;efficacite operationnelle, sans recruter proportionnellement a la croissance.</p>
                    <p>Le constat etait simple : les equipes commerciales passaient trop de temps sur des taches repetitives (enrichissement de donnees, qualification manuelle, redaction d&apos;emails, comptes-rendus d&apos;appels) et pas assez sur ce qui fait vraiment la difference, a savoir la relation avec les investisseurs. L&apos;IA n&apos;etait plus une option, mais une necessite strategique.</p>
                    <p>C&apos;est dans ce contexte qu&apos;Iroko a fait appel a Ceres pour structurer et deployer une strategie d&apos;agents IA, en s&apos;appuyant sur Claude comme moteur d&apos;intelligence et HubSpot comme systeme central.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Collaborateurs", value: "50-100" },
                      { label: "CRM en place", value: "HubSpot" },
                      { label: "Secteur", value: "SCPI / FinTech" },
                      { label: "Modele", value: "B2C investisseurs" },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[14px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Les objectifs */}
              <section id="objectifs" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les objectifs</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de deployer le moindre agent, on a passe deux semaines a comprendre les flux de travail des equipes commerciales et operationnelles. L&apos;objectif n&apos;etait pas de faire de l&apos;IA pour faire de l&apos;IA, mais d&apos;identifier les points de friction reels et de quantifier le temps perdu.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Automatiser les taches repetitives", desc: "Les commerciaux passaient en moyenne 2h30 par jour sur des taches administratives : saisie de donnees, recherche d\u2019informations, mise a jour du CRM, redaction de comptes-rendus. Chaque heure recuperee est une heure de plus pour accompagner les investisseurs.", color: "#6C5CE7" },
                      { title: "Enrichir les donnees prospects", desc: "Les fiches contacts dans HubSpot etaient souvent incompletes. Patrimoine estime, appetence pour l\u2019immobilier, historique d\u2019investissement : ces informations etaient rarement renseignees, ce qui rendait la personnalisation commerciale difficile.", color: "#4B5EFC" },
                      { title: "Accelerer le traitement des demandes", desc: "Les demandes entrantes des investisseurs potentiels etaient traitees manuellement. Un formulaire soumis le vendredi pouvait attendre le lundi pour etre qualifie. Dans un marche concurrentiel, chaque heure de delai reduit les chances de conversion.", color: "#22C55E" },
                      { title: "Generer du contenu commercial plus vite", desc: "Les equipes passaient un temps considerable a rediger des emails personnalises, des fiches produit adaptees au profil investisseur, et des argumentaires specifiques. Le contenu etait de qualite, mais la cadence ne suivait pas la croissance.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 items-start rounded-xl border border-[#F2F2F2] p-3">
                        <div className="w-2 h-2 rounded-sm mt-2 shrink-0" style={{ background: item.color }} />
                        <div>
                          <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-5">
                    <p className="text-[12px] font-semibold text-[#EF4444] mb-4">Le cout de l&apos;inaction</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { stat: "2h30", desc: "par commercial par jour perdues sur des taches administratives sans valeur ajoutee directe" },
                        { stat: "48h", desc: "delai moyen de traitement d\u2019une demande entrante le week-end, contre 4h en semaine" },
                        { stat: "35%", desc: "des fiches prospects dans HubSpot avec des donnees incompletes ou obsoletes" },
                        { stat: "3h", desc: "en moyenne pour produire un email de suivi personnalise avec les bons arguments produit" },
                      ].map((p) => (
                        <div key={p.desc} className="flex gap-3 items-start">
                          <span className="text-[18px] font-bold text-[#EF4444] shrink-0 w-12 text-right">{p.stat}</span>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{p.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* L'approche : agents IA progressifs */}
              <section id="approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Methodologie</span>
                  <h2 className="text-[20px] font-semibold text-white mb-4">L&apos;approche : agents IA progressifs</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>On ne deploie pas 4 agents IA du jour au lendemain. L&apos;adoption de l&apos;IA en entreprise echoue quand on va trop vite, quand les equipes ne comprennent pas ce que fait l&apos;outil, ou quand la confiance n&apos;est pas construite progressivement. Notre approche chez Iroko a ete structuree en 3 phases.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { title: "Phase 1 : Quick wins manuels", desc: "Semaines 1 a 3. On a commence par des cas d\u2019usage simples ou Claude etait utilise manuellement par les equipes : reformulation d\u2019emails, resume de notes d\u2019appels, recherche d\u2019informations sur un prospect. L\u2019objectif etait de familiariser les equipes avec l\u2019IA et de construire la confiance. Pas d\u2019automatisation, pas de complexite. Juste des gains immediats et visibles.", color: "#6C5CE7" },
                      { title: "Phase 2 : Automatisation", desc: "Semaines 4 a 8. Une fois la confiance etablie, on a automatise les cas d\u2019usage valides en phase 1. Les prompts qui fonctionnaient en manuel ont ete transformes en workflows automatises via Make et l\u2019API Claude. Les equipes n\u2019avaient plus besoin d\u2019intervenir : les agents tournaient en arriere-plan et livraient les resultats directement dans HubSpot ou Slack.", color: "#4B5EFC" },
                      { title: "Phase 3 : Agents autonomes", desc: "Semaines 9 a 12. La derniere phase a consiste a rendre les agents autonomes, avec des boucles de feedback et des mecanismes de controle qualite. Chaque agent a ete dote de regles de gouvernance : seuils de confiance, escalade vers un humain, logs de decisions. L\u2019IA ne remplace pas l\u2019humain, elle le libere.", color: "#22C55E" },
                    ].map((m) => (
                      <div key={m.title} className="rounded-xl bg-white/5 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: m.color }} />
                          <p className="text-[13px] font-semibold text-white">{m.title}</p>
                        </div>
                        <p className="text-[11px] text-white/40 leading-[1.6]">{m.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-xl bg-white/5 p-4">
                    <p className="text-[12px] font-semibold text-[#22C55E] mb-2">Timeline du deploiement</p>
                    <div className="space-y-2">
                      {[
                        { week: "S1-S2", label: "Audit des processus, identification des cas d\u2019usage prioritaires" },
                        { week: "S2-S3", label: "Phase 1 : utilisation manuelle de Claude par les equipes" },
                        { week: "S4-S5", label: "Deploiement Agent 1 : enrichissement prospects (Clay + Claude)" },
                        { week: "S5-S6", label: "Deploiement Agent 2 : qualification automatique sur le site" },
                        { week: "S7-S8", label: "Deploiement Agent 3 : generation de contenu commercial" },
                        { week: "S9-S10", label: "Deploiement Agent 4 : intelligence des appels (Claap + Claude)" },
                        { week: "S10-S11", label: "Integration MCP, connexion HubSpot + Make + Slack" },
                        { week: "S11-S12", label: "Gouvernance, controle qualite, formation finale" },
                      ].map((t) => (
                        <div key={t.week} className="flex items-center gap-3">
                          <span className="text-[10px] font-mono text-[#6C5CE7] w-14 shrink-0">{t.week}</span>
                          <div className="flex-1 h-px bg-white/10" />
                          <span className="text-[10px] text-white/50">{t.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Agent 1 : Enrichissement prospects */}
              <section id="agent-enrichissement" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Agent 1 : Enrichissement prospects</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le premier agent deploye est un pipeline d&apos;enrichissement qui combine Clay et Claude pour transformer une fiche contact minimale en un profil investisseur complet. Avant cet agent, un commercial devait passer 15 a 20 minutes par prospect pour rechercher manuellement les informations pertinentes. Maintenant, c&apos;est fait en 30 secondes.</p>
                  </div>

                  <div className="mt-5 space-y-0">
                    {[
                      { num: "1", title: "Collecte des donnees brutes via Clay", desc: "Clay interroge plusieurs sources de donnees (LinkedIn, registres d\u2019entreprises, donnees publiques) pour collecter les informations de base : poste actuel, entreprise, anciennete, localisation, taille de l\u2019entreprise, secteur d\u2019activite.", color: "#6C5CE7" },
                      { num: "2", title: "Analyse par Claude : patrimoine estime", desc: "Claude analyse les signaux collectes pour estimer le patrimoine potentiel du prospect : poste de direction dans une grande entreprise, anciennete longue, localisation dans une zone a forte valeur immobiliere. Le modele produit un score de patrimoine estime sur 100, avec une explication textuelle.", color: "#4B5EFC" },
                      { num: "3", title: "Detection de l\u2019appetence immobilier", desc: "Claude analyse les signaux d\u2019interet pour l\u2019immobilier : publications LinkedIn sur l\u2019investissement, participation a des evenements du secteur, abonnement a des newsletters specialisees, interactions avec du contenu Iroko. Chaque signal est pondere et contribue a un score d\u2019appetence.", color: "#22C55E" },
                      { num: "4", title: "Identification des signaux d\u2019achat", desc: "Claude detecte les signaux qui suggerent un passage a l\u2019acte imminent : changement de poste recent (prime de depart, liquidites), vente immobiliere detectee, recherche active de placements, interaction recente avec le site Iroko. Ces signaux declenchent une alerte prioritaire pour l\u2019equipe commerciale.", color: "#FF7A59" },
                      { num: "5", title: "Ecriture dans HubSpot", desc: "Les donnees enrichies sont ecrites automatiquement dans les proprietes custom de HubSpot : score de patrimoine, score d\u2019appetence, signaux d\u2019achat detectes, resume du profil investisseur. Le commercial ouvre la fiche et a tout sous les yeux en une seconde.", color: "#6C5CE7" },
                    ].map((point, i) => (
                      <div key={point.num}>
                        <div className="flex gap-3 items-start py-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: point.color }}>
                            {point.num}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-[#111] mb-1">{point.title}</p>
                            <p className="text-[12px] text-[#777] leading-[1.65]">{point.desc}</p>
                          </div>
                        </div>
                        {i < 4 && <div className="ml-4 w-px h-4 bg-[#E8E8E8]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Temps / prospect avant", value: "15-20 min" },
                      { label: "Temps / prospect apres", value: "30 sec" },
                      { label: "Prospects enrichis / mois", value: "800+" },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[14px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Agent 2 : Qualification automatique */}
              <section id="agent-qualification" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Agent 2 : Qualification automatique</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le deuxieme agent est un chatbot IA deploye sur le site iroko.eu, propulse par Claude, qui qualifie les prospects en temps reel et les route vers le bon commercial. Avant cet agent, les demandes entrantes etaient traitees manuellement par un commercial qui devait poser les bonnes questions, evaluer le profil, et decider du routing. Un processus qui prenait entre 30 minutes et 48 heures selon la charge.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Chatbot conversationnel sur le site", desc: "Le chatbot engage une conversation naturelle avec le visiteur. Il pose les bonnes questions dans le bon ordre : montant envisage, horizon de placement, experience en investissement immobilier, objectifs patrimoniaux. La conversation est fluide, pas un formulaire deguise. Claude adapte le ton et les questions en fonction des reponses.", color: "#6C5CE7" },
                      { title: "Qualification BANT adaptee a l\u2019investissement", desc: "Le modele BANT classique (Budget, Authority, Need, Timeline) a ete adapte au contexte de l\u2019investissement immobilier : Budget d\u2019investissement disponible, Capacite de decision (seul ou en couple, conseiller patrimonial implique), Besoin reel (diversification, revenus complementaires, defiscalisation), et Horizon de placement (court terme, moyen terme, retraite).", color: "#4B5EFC" },
                      { title: "Scoring en temps reel", desc: "A chaque reponse du prospect, le score de qualification est mis a jour en temps reel. Claude analyse non seulement les reponses explicites, mais aussi les signaux implicites : la precision des questions posees, le vocabulaire utilise, le temps passe sur les pages produit avant d\u2019engager la conversation.", color: "#22C55E" },
                      { title: "Routing intelligent vers le bon commercial", desc: "En fonction du score de qualification et du profil detecte, le prospect est automatiquement route vers le bon commercial dans HubSpot : les gros tickets vers les seniors, les primo-investisseurs vers les conseillers pedagogues, les profils patrimoniaux vers les specialistes. Une notification Slack est envoyee en temps reel.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: item.color }} />
                          <p className="text-[12px] font-semibold text-[#111]">{item.title}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Conversations / mois", value: "350+" },
                      { label: "Taux de qualification", value: "72%" },
                      { label: "Temps de reponse", value: "< 5 sec" },
                      { label: "Routing automatique", value: "100%" },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[14px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Agent 3 : Generation de contenu commercial */}
              <section id="agent-contenu" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Agent 3 : Generation de contenu commercial</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le troisieme agent est un generateur de contenu commercial propulse par Claude, qui produit des emails personnalises, des fiches produit adaptees, des argumentaires sur mesure et des newsletters en quelques secondes. Avant cet agent, la creation de contenu etait le goulet d&apos;etranglement de l&apos;equipe commerciale : chaque email de suivi, chaque argumentaire adapte au profil investisseur prenait entre 30 minutes et 2 heures.</p>
                  </div>

                  <div className="mt-5 space-y-0">
                    {[
                      { num: "1", title: "Emails personnalises par profil investisseur", desc: "Claude genere des emails de suivi personnalises en se basant sur le profil enrichi du prospect dans HubSpot : patrimoine estime, objectifs patrimoniaux, produits consultes, historique des echanges. Chaque email est unique et pertinent. Le commercial n\u2019a plus qu\u2019a relire et envoyer.", color: "#6C5CE7" },
                      { num: "2", title: "Fiches produit adaptees", desc: "Les fiches produit SCPI sont generees dynamiquement en fonction du profil de l\u2019investisseur. Un primo-investisseur recoit une fiche pedagogique avec des explications detaillees. Un investisseur experimente recoit une fiche technique avec les metriques de performance, le TRI, et la strategie de gestion.", color: "#4B5EFC" },
                      { num: "3", title: "Argumentaires adaptes au profil", desc: "Claude produit des argumentaires commerciaux adaptes aux objections et aux motivations de chaque segment : defiscalisation pour les profils a hauts revenus, revenus complementaires pour les pre-retraites, diversification pour les profils patrimoniaux. Les arguments sont structures, sources, et prets a l\u2019emploi.", color: "#22C55E" },
                      { num: "4", title: "Newsletters segmentees", desc: "L\u2019agent genere des newsletters mensuelles adaptees a chaque segment de la base : actualites du marche immobilier, performances des fonds, nouvelles acquisitions, contenus pedagogiques. Le contenu est redige par Claude, valide par l\u2019equipe marketing, et envoye via HubSpot.", color: "#FF7A59" },
                    ].map((point, i) => (
                      <div key={point.num}>
                        <div className="flex gap-3 items-start py-4">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: point.color }}>
                            {point.num}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-[#111] mb-1">{point.title}</p>
                            <p className="text-[12px] text-[#777] leading-[1.65]">{point.desc}</p>
                          </div>
                        </div>
                        {i < 3 && <div className="ml-4 w-px h-4 bg-[#E8E8E8]" />}
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Emails generes / mois", value: "500+" },
                      { label: "Temps de production", value: "< 2 min" },
                      { label: "Taux d\u2019ouverture", value: "+18%" },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[14px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Agent 4 : Resume et intelligence des appels */}
              <section id="agent-appels" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Agent 4 : Resume et intelligence des appels</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le quatrieme agent connecte Claap (outil d&apos;enregistrement et de transcription des appels) a Claude pour produire automatiquement des resumes structures, extraire les objections, et assurer le suivi des engagements pris pendant les appels avec les investisseurs. Avant cet agent, les comptes-rendus d&apos;appels etaient souvent incomplets, rediges a la hate, ou simplement oublies.</p>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      { title: "Resume automatique structure", desc: "Apres chaque appel enregistre dans Claap, Claude recoit la transcription et produit un resume structure en 60 secondes : contexte de l\u2019appel, points cles abordes, decisions prises, prochaines etapes. Le resume est pousse automatiquement dans la timeline du contact dans HubSpot.", color: "#6C5CE7" },
                      { title: "Extraction des objections", desc: "Claude identifie et categorise les objections soulevees par l\u2019investisseur pendant l\u2019appel : frais de gestion, liquidite du placement, risque locatif, performance historique. Chaque objection est taguee et remontee dans un dashboard HubSpot pour que le management puisse suivre les tendances et adapter les argumentaires.", color: "#4B5EFC" },
                      { title: "Suivi des engagements", desc: "Claude detecte les engagements pris pendant l\u2019appel, aussi bien cote commercial (envoyer un document, planifier un second rendez-vous, faire une simulation) que cote investisseur (consulter son conseiller, revenir avec des questions, confirmer un montant). Chaque engagement genere une tache dans HubSpot avec une echeance.", color: "#22C55E" },
                      { title: "Analyse de sentiment et scoring", desc: "Claude evalue le sentiment general de l\u2019appel (positif, neutre, negatif) et ajuste le score de probabilite de conversion du deal dans HubSpot. Un appel ou l\u2019investisseur pose des questions precises sur la fiscalite et demande une simulation est un signal d\u2019achat fort. Un appel ou les objections dominent declenche une alerte.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-2 h-2 rounded-sm shrink-0" style={{ background: item.color }} />
                          <p className="text-[12px] font-semibold text-[#111]">{item.title}</p>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Appels analyses / mois", value: "400+" },
                      { label: "Temps de resume", value: "< 60 sec" },
                      { label: "Objections trackees", value: "12 categories" },
                      { label: "Taches auto-creees", value: "95%" },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[14px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Integration dans la stack existante */}
              <section id="integration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Integration dans la stack existante</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les agents IA ne fonctionnent pas en silo. Leur valeur vient de leur integration profonde dans la stack existante d&apos;Iroko. On a connecte Claude a HubSpot via le protocole MCP (Model Context Protocol), orchestre les workflows avec Make, et distribue les notifications via Slack. Le tout forme un ecosysteme ou chaque agent communique avec les autres et alimente le CRM en temps reel.</p>
                  </div>

                  <div className="mt-5 rounded-xl border border-[#E8E8E8] overflow-hidden">
                    <div className="bg-[#1a1a2e] px-4 py-2 flex items-center gap-2">
                      <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /><div className="w-2 h-2 rounded-full bg-white/20" /></div>
                      <span className="text-[10px] text-white/50 font-mono">Architecture des agents IA</span>
                    </div>
                    <div className="bg-[#0d1117] p-4">
                      <pre className="text-[11px] text-[#E0E0E0] leading-[1.8] whitespace-pre-wrap font-mono">
{`Clay (enrichissement)  --->  Claude API (analyse)  --->  HubSpot (CRM)
  - Collecte donnees brutes         - Scoring patrimoine        - Proprietes enrichies
  - Sources multiples               - Appetence immobilier      - Timeline mise a jour
                                     - Signaux d'achat           - Alertes commerciales

Chatbot site (qual.)   --->  Claude API (BANT)     --->  HubSpot + Slack
  - Conversation visiteur           - Qualification temps reel  - Creation contact
  - Collecte intentions             - Scoring dynamique         - Routing commercial
                                                                 - Notification Slack

Make (orchestrateur)   <-->  Claude API (contenu)   --->  HubSpot + Email
  - Triggers automatiques           - Emails personnalises      - Sequences HubSpot
  - Conditions et branches          - Fiches produit            - Newsletter
                                     - Argumentaires

Claap (appels)         --->  Claude API (analyse)   --->  HubSpot + Slack
  - Transcription auto              - Resume structure          - Note sur timeline
  - Enregistrement                  - Objections extraites      - Taches creees
                                     - Engagements detectes      - Alertes equipe`}
                      </pre>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "HubSpot via MCP", desc: "Le protocole MCP (Model Context Protocol) permet a Claude d\u2019interagir directement avec HubSpot : lire les fiches contacts, mettre a jour les proprietes, creer des taches, consulter l\u2019historique des interactions. Les agents ont un acces structure et securise au CRM, sans API custom a maintenir.", count: "Temps reel" },
                      { title: "Make comme orchestrateur", desc: "Make (ex-Integromat) orchestre les workflows entre les differents outils. Chaque declencheur (nouveau contact, appel termine, formulaire soumis) active le bon scenario, appelle Claude via l\u2019API, et pousse les resultats dans HubSpot. 14 scenarios actifs en production.", count: "14 scenarios" },
                      { title: "Slack pour les notifications", desc: "Chaque evenement cle genere une notification Slack ciblee : nouveau prospect qualifie dans #sales-leads, resume d\u2019appel dans #call-summaries, alerte signal d\u2019achat dans #hot-leads, rapport hebdomadaire dans #weekly-report. Les equipes restent informees sans quitter Slack.", count: "5 channels" },
                      { title: "Claap pour la voice intelligence", desc: "Claap enregistre et transcrit automatiquement les appels des commerciaux. La transcription est envoyee a Claude via Make pour analyse. Le tout est synchrone : l\u2019appel se termine, et 60 secondes plus tard, le resume est dans HubSpot et la notification dans Slack.", count: "Automatise" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[13px] font-semibold text-[#111]">{item.title}</p>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#6C5CE7]/10 text-[#6C5CE7] font-medium">{item.count}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-6">Les resultats apres 12 semaines</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {[
                      { value: "-50%", label: "Temps administratif par commercial, libere pour la relation investisseur", color: "#22C55E" },
                      { value: "+30%", label: "Taux de conversion prospect vers investisseur grace a la qualification IA", color: "#4B5EFC" },
                      { value: "4", label: "Agents IA autonomes actifs en production, 24h/24", color: "#6C5CE7" },
                      { value: "200h+", label: "Heures gagnees par mois sur l\u2019ensemble de l\u2019equipe commerciale", color: "#FF7A59" },
                      { value: "6 sem.", label: "Pour atteindre le ROI complet du projet, grace aux gains de productivite", color: "#22C55E" },
                      { value: "+18%", label: "Taux d\u2019ouverture des emails grace a la personnalisation par Claude", color: "#D4A27F" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-4 text-center">
                        <div className="text-[22px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[10px] text-white/40 mt-1 leading-tight">{r.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      "Les commerciaux passent 50% moins de temps sur les taches administratives",
                      "Chaque prospect est enrichi automatiquement en moins de 30 secondes",
                      "Les demandes entrantes sont qualifiees et routees en temps reel, meme le week-end",
                      "Les emails de suivi sont personnalises par Claude et envoyes 10x plus vite",
                      "Chaque appel investisseur produit un resume structure et des taches de suivi automatiques",
                      "Le management a une visibilite en temps reel sur les objections et les signaux d\u2019achat",
                      "L\u2019equipe a adopte l\u2019IA naturellement grace a l\u2019approche progressive en 3 phases",
                    ].map((r) => (
                      <p key={r} className="text-[11px] text-white/50 flex items-start gap-2">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {r}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Temoignage */}
              <section id="temoignage" className="mb-8">
                <div className="rounded-2xl border-2 border-[#6C5CE7]/20 bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(108,92,231,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[14px] font-bold shrink-0">AC</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;On savait qu&apos;on devait integrer l&apos;IA dans nos processus, mais on ne savait pas par ou commencer. L&apos;approche progressive de Ceres a ete determinante : on a commence par des quick wins manuels pour que les equipes comprennent ce que Claude pouvait faire, puis on a automatise progressivement. Aujourd&apos;hui, nos 4 agents IA font partie du quotidien de l&apos;equipe commerciale. L&apos;enrichissement des prospects est devenu instantane, les demandes entrantes sont qualifiees en temps reel, et chaque appel produit un resume exploitable en 60 secondes. On a gagne plus de 200 heures par mois, et le ROI a ete atteint en 6 semaines. Ce qui m&apos;a le plus impressionne, c&apos;est que l&apos;adoption a ete naturelle. Pas de resistance, pas de friction. Les equipes ont vu la valeur des le premier jour.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Antoine Charbonneau</p>
                          <p className="text-[11px] text-[#999]">Responsable Commercial, Iroko</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=iroko.eu&sz=32" alt="Iroko" className="w-5 h-5 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous voulez deployer des agents IA dans votre equipe ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On deploie des agents IA propulses par Claude, integres a votre stack existante. Enrichissement, qualification, contenu, intelligence des appels.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/agence-hubspot" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    Nos services
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
