"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Customer Success et RevOps : aligner la retention sur le revenue",
  description: "Guide complet du Customer Success dans le RevOps : metriques (NRR, GRR, churn, NPS, CSAT, time-to-value), health scoring, playbooks, outils (Vitally, ChurnZero, Gainsight, HubSpot Service Hub) et IA.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/customer-success-revops" },
  articleSection: "RevOps",
  wordCount: 3500,
  inLanguage: "fr",
};

const sections = [
  { id: "definition", title: "Qu&apos;est-ce que le Customer Success" },
  { id: "troisieme-pilier", title: "Le 3eme pilier du RevOps" },
  { id: "metriques", title: "Les metriques du CS" },
  { id: "health-scoring", title: "Health scoring" },
  { id: "playbooks-cs", title: "Playbooks CS" },
  { id: "automation", title: "Automatisation CS" },
  { id: "outils", title: "Les outils CS" },
  { id: "cs-ia", title: "CS et intelligence artificielle" },
  { id: "mise-en-place", title: "Mise en place" },
  { id: "ceres-approche", title: "L&apos;approche Ceres" },
];

const relatedArticles = [
  { title: "Onboarding client B2B : reduire le churn", slug: "onboarding-client-b2b-churn", category: "Customer Success", color: "#22C55E" },
  { title: "Metriques RevOps : indicateurs de performance", slug: "metriques-revops-indicateurs-performance", category: "RevOps", color: "#6C5CE7" },
  { title: "Gerer le MRR et revenu recurrent dans HubSpot", slug: "gerer-mrr-revenu-recurrent-hubspot", category: "Process & Outils", color: "#FF7A59" },
];

export default function CustomerSuccessRevOpsPage() {
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
        <div className="h-full bg-[#22C55E] transition-all duration-150" style={{ width: `${progress}%` }} />
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
                        ? "border-[#22C55E] text-[#111] font-medium"
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
              <span className="text-[#666]">Customer Success</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">19 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Customer Success et RevOps : aligner la retention sur le revenue
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Le Customer Success est le troisieme pilier du RevOps, celui qu&apos;on oublie le plus souvent. Pourtant, c&apos;est la retention qui determine la rentabilite en SaaS et en B2B. Ce guide couvre tout : definition, metriques (NRR, GRR, churn, NPS, CSAT), health scoring, playbooks, automatisation, outils et utilisation de l&apos;IA pour predire le churn.
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
              {/* Section 1 -- Definition */}
              <section id="definition" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">C&apos;est quoi le Customer Success</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le Customer Success, ou succes client en francais, est une approche proactive qui vise a s&apos;assurer que chaque client atteint les resultats qu&apos;il attendait en achetant votre produit ou service. Ce n&apos;est pas du support client. Le support est reactif (le client a un probleme, on le resout). Le Customer Success est proactif (on anticipe les problemes et on guide le client vers la valeur).</p>
                    <p>L&apos;origine du Customer Success vient du monde SaaS. Dans un modele d&apos;abonnement, la vente initiale ne represente qu&apos;une fraction de la valeur totale du client. Si un client paie 1 000 EUR par mois et reste 36 mois, la valeur totale est de 36 000 EUR. Mais si le client churne apres 6 mois, la valeur reelle n&apos;est que de 6 000 EUR. Le Customer Success existe pour maximiser cette duree de vie.</p>
                    <p>Concretement, une equipe Customer Success gere le parcours post-vente de A a Z. L&apos;onboarding (les 30 a 90 premiers jours ou le client prend en main le produit), l&apos;adoption (le client utilise-t-il effectivement le produit au quotidien ?), l&apos;expansion (le client peut-il tirer plus de valeur en upgrading ou en ajoutant des utilisateurs ?), et le renouvellement (le client va-t-il renouveler son contrat ?).</p>
                    <p>Le Customer Success Manager (CSM) est le role central de cette discipline. C&apos;est le point de contact privilegie du client apres la vente. Il connait les objectifs du client, surveille les indicateurs d&apos;utilisation, organise des business reviews trimestrielles, alerte en cas de risque de churn, et identifie les opportunites d&apos;expansion. Un bon CSM est un melange de consultant, de chef de projet et de commercial.</p>
                    <p>En 2026, le Customer Success n&apos;est plus reserve aux entreprises SaaS. Toute entreprise B2B avec des revenus recurrents ou des contrats long terme a besoin d&apos;une fonction Customer Success. La raison est simple : il coute 5 a 7 fois plus cher d&apos;acquerir un nouveau client que de retenir un client existant. Et un client satisfait est aussi la meilleure source de referrals et d&apos;upsell.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 -- 3eme pilier du RevOps */}
              <section id="troisieme-pilier" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pourquoi le CS est le troisieme pilier du RevOps</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le RevOps repose sur trois piliers : le marketing (generer la demande), les ventes (convertir la demande en clients) et le Customer Success (retenir et developper les clients). Les deux premiers piliers sont bien compris et bien structures dans la plupart des entreprises. Le troisieme est souvent le parent pauvre, celui qu&apos;on gere &ldquo;a la main&rdquo; sans processus ni outils dedies.</p>
                    <p>C&apos;est une erreur strategique majeure. En SaaS B2B, la retention est le principal levier de croissance a long terme. Un taux de churn de 5% par mois signifie que vous perdez 46% de vos clients chaque annee. Meme une machine d&apos;acquisition exceptionnelle ne peut pas compenser un tel trou dans le seau. Le Net Revenue Retention (NRR) est devenu le KPI le plus observe par les investisseurs, devant le taux de croissance pur.</p>
                    <p>Integrer le CS dans le RevOps signifie trois choses concretes. Premierement, les donnees client sont unifiees. Le marketing sait quels clients sont a risque (pour exclure les campagnes d&apos;upsell inadaptees). Les ventes savent quels comptes existants ont du potentiel d&apos;expansion. Le CS sait d&apos;ou viennent les clients (canal d&apos;acquisition) et quel a ete le cycle de vente (pour adapter l&apos;onboarding).</p>
                    <p>Deuxiemement, les processus sont alignes. Le passage du commercial au CSM est formalise (handoff meeting, documentation du deal, contexte du client). Les alertes de churn declenchent des actions coordonnees entre CS, ventes et direction. Les opportunites d&apos;expansion identifiees par le CS sont transmises aux ventes avec le contexte necessaire.</p>
                    <p>Troisiemement, la technologie est integree. Le CRM contient le parcours complet du client, de la premiere visite marketing au dernier ticket de support. Les dashboards RevOps montrent le funnel complet : acquisition, conversion, retention, expansion. Pas trois outils deconnectes avec trois visions partielles.</p>
                  </div>

                  {/* RevOps 3 pillars visual */}
                  <div className="mt-6 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4">Les 3 piliers du RevOps</p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { title: "Marketing", focus: "Generer la demande", kpi: "MQL, CAC, pipeline genere", color: "#6C5CE7" },
                        { title: "Ventes", focus: "Convertir en clients", kpi: "Win rate, cycle, deal size", color: "#FF7A59" },
                        { title: "Customer Success", focus: "Retenir et developper", kpi: "NRR, churn, expansion", color: "#22C55E" },
                      ].map((p) => (
                        <div key={p.title} className="text-center p-4 rounded-lg bg-white border border-[#E8E8E8]">
                          <div className="text-[14px] font-bold" style={{ color: p.color }}>{p.title}</div>
                          <div className="text-[11px] text-[#555] mt-1">{p.focus}</div>
                          <div className="text-[10px] text-[#999] mt-2">{p.kpi}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 -- Metriques */}
              <section id="metriques" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les metriques cles du Customer Success</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le Customer Success est une discipline quantitative. Sans metriques precises, vous naviguez a vue. Voici les indicateurs que chaque equipe CS doit suivre, comprendre et optimiser.</p>
                    <p>Le Net Revenue Retention (NRR) est la metrique reine. Il mesure le revenu genere par votre base de clients existante d&apos;une periode a l&apos;autre, en incluant les expansions (upsell, cross-sell) et en soustrayant le churn et les downgrades. Un NRR superieur a 100% signifie que votre base de clients existante genere plus de revenu qu&apos;avant, meme sans aucun nouveau client. Les meilleurs SaaS B2B affichent des NRR entre 110% et 130%.</p>
                    <p>Le Gross Revenue Retention (GRR) mesure la meme chose mais sans les expansions. Il ne prend en compte que le churn et les downgrades. Un GRR de 90% signifie que vous perdez 10% de votre revenu existant chaque annee. Le GRR est un indicateur plus pur de la satisfaction client, parce qu&apos;il n&apos;est pas masque par les expansions. Un GRR en dessous de 80% est un signal d&apos;alarme serieux.</p>
                    <p>Le taux de churn se decline en deux versions. Le churn client (logo churn) mesure le pourcentage de clients qui partent. Le churn revenu (revenue churn) mesure le pourcentage de revenu perdu. Les deux sont importants mais ne racontent pas la meme histoire. Perdre 10 petits clients a 500 EUR/mois n&apos;a pas le meme impact que perdre 1 client a 50 000 EUR/mois.</p>
                    <p>Le NPS (Net Promoter Score) et le CSAT (Customer Satisfaction Score) sont des indicateurs de perception. Le NPS mesure la propension du client a recommander votre produit. Le CSAT mesure la satisfaction sur une interaction specifique. Les deux sont utiles mais insuffisants seuls : un client peut etre satisfait et churner quand meme (parce qu&apos;il change de strategie, de budget ou de fournisseur).</p>
                    <p>Le Time-to-Value (TTV) mesure le temps entre la signature du contrat et le moment ou le client commence a tirer de la valeur du produit. C&apos;est la metrique d&apos;onboarding par excellence. Un TTV long est un facteur de risque majeur de churn precoce. L&apos;objectif du CS est de raccourcir ce TTV au maximum en guidant le client vers les premiers quick wins.</p>
                  </div>

                  {/* Metrics cards */}
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { metric: "NRR", target: "110-130%", desc: "Net Revenue Retention", color: "#22C55E" },
                      { metric: "GRR", target: "90%+", desc: "Gross Revenue Retention", color: "#6C5CE7" },
                      { metric: "Churn", target: "< 5%/an", desc: "Taux de churn annuel", color: "#FF7A59" },
                      { metric: "NPS", target: "50+", desc: "Net Promoter Score", color: "#4B5EFC" },
                      { metric: "CSAT", target: "4.5/5+", desc: "Customer Satisfaction", color: "#22C55E" },
                      { metric: "TTV", target: "< 30j", desc: "Time-to-Value", color: "#FF7A59" },
                    ].map((m) => (
                      <div key={m.metric} className="text-center p-4 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[18px] font-bold" style={{ color: m.color }}>{m.metric}</div>
                        <div className="text-[13px] font-semibold text-[#111] mt-1">{m.target}</div>
                        <div className="text-[10px] text-[#999] mt-0.5">{m.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 -- Health Scoring */}
              <section id="health-scoring" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Health scoring : evaluer la sante de chaque client</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le health score est au Customer Success ce que le lead score est aux ventes. C&apos;est un indicateur composite qui evalue la sante de la relation avec chaque client et predit le risque de churn ou l&apos;opportunite d&apos;expansion. Sans health score, vos CSM gerent leurs clients au feeling. Avec un health score, ils priorisent objectivement leurs actions.</p>
                    <p>Un health score efficace combine trois types de signaux. Les signaux d&apos;utilisation : le client utilise-t-il activement le produit ? La frequence de connexion a-t-elle baisse ? Les fonctionnalites cles sont-elles adoptees ? Le nombre d&apos;utilisateurs actifs est-il en croissance ou en declin ? Ces signaux sont les plus predictifs du churn.</p>
                    <p>Les signaux relationnels : le client repond-il aux emails du CSM ? Participe-t-il aux business reviews ? A-t-il un champion interne identifie ? Le sponsor executif est-il toujours en poste ? Un changement de champion ou de sponsor est un signal de risque majeur souvent neglige.</p>
                    <p>Les signaux financiers : le client paie-t-il a temps ? Son contrat arrive-t-il a echeance bientot ? A-t-il exprime des preoccupations sur le budget ? A-t-il demande un downgrade ? Ces signaux sont les plus tardifs (quand un client parle de budget, le risque est souvent deja materialise) mais restent importants a suivre.</p>
                    <p>La sortie du health score est generalement une classification en trois ou quatre niveaux : vert (client en bonne sante, expansion possible), jaune (attention requise, signaux mixtes), orange (risque de churn identifie, action urgente) et rouge (churn imminent, intervention de la direction). Chaque niveau declenche un playbook specifique.</p>
                  </div>

                  {/* Health score mockup */}
                  <div className="mt-6 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4">Modele de health score client</p>
                    <div className="space-y-2">
                      {[
                        { status: "Vert", score: "80-100", action: "Identifier opportunites d\u2019expansion, demander des referrals", color: "#22C55E", bar: 90 },
                        { status: "Jaune", score: "60-79", action: "Renforcer l\u2019engagement, planifier une business review", color: "#F59E0B", bar: 70 },
                        { status: "Orange", score: "40-59", action: "Intervention CSM urgente, escalade au manager", color: "#FF7A59", bar: 50 },
                        { status: "Rouge", score: "0-39", action: "Plan de sauvetage, implication de la direction", color: "#EF4444", bar: 25 },
                      ].map((item) => (
                        <div key={item.status} className="flex items-center gap-3 p-3 rounded-lg bg-white border border-[#E8E8E8]">
                          <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-[12px] font-semibold text-[#111]">{item.status} ({item.score})</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-[#F0F0F0]">
                              <div className="h-full rounded-full" style={{ width: `${item.bar}%`, backgroundColor: item.color }} />
                            </div>
                            <p className="text-[10px] text-[#999] mt-1">{item.action}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Playbooks CS */}
              <section id="playbooks-cs" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Playbooks Customer Success : structurer les actions</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un playbook CS est un guide d&apos;actions predefinies que le CSM execute en reponse a un evenement ou un signal specifique. Les playbooks transforment le CS d&apos;une discipline artisanale en un processus reproductible et scalable. Sans playbooks, chaque CSM gere ses clients differemment. Avec des playbooks, la qualite du service est constante, quel que soit le CSM.</p>
                    <p>Le playbook d&apos;onboarding est le plus critique. Il couvre les 30 a 90 premiers jours apres la signature. Il definit les etapes cles : kick-off meeting (J+1 a J+3), configuration technique (J+3 a J+10), formation utilisateurs (J+10 a J+20), premier quick win (J+20 a J+30), business review d&apos;onboarding (J+60 a J+90). Chaque etape a des criteres de succes mesurables et des actions de rattrapage si les objectifs ne sont pas atteints.</p>
                    <p>Le playbook de risque de churn se declenche quand le health score passe en orange ou en rouge. Il definit les actions immédiates : appel de diagnostic dans les 24 heures, identification du probleme racine, plan de remediation en 48 heures, escalade au manager si necessaire, suivi hebdomadaire jusqu&apos;au retour en zone verte. Ce playbook doit etre rapide et decisif. Un client en risque de churn ne reste pas en zone orange pendant 3 mois. Il churne ou il se retablit.</p>
                    <p>Le playbook d&apos;expansion se declenche quand un client en bonne sante montre des signaux d&apos;opportunite : utilisation a 100% des licences, demandes de fonctionnalites premium, croissance de l&apos;equipe du client, feedback tres positif. Le CSM collabore avec les ventes pour proposer un upsell ou un cross-sell au bon moment, avec le bon contexte.</p>
                    <p>Le playbook de renouvellement se declenche 90 jours avant l&apos;echeance du contrat. Il inclut la preparation d&apos;un bilan de valeur (ce que le client a accompli grace a votre produit), la business review de renouvellement, la proposition de renouvellement, et la negociation si necessaire. Un renouvellement bien prepare ne devrait jamais etre une surprise. C&apos;est le resultat logique d&apos;un parcours client reussi.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Automation */}
              <section id="automation" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Automatisation</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">Automatiser le Customer Success</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>L&apos;automatisation est ce qui permet au Customer Success de scaler. Un CSM peut gerer 20 a 50 comptes en mode high-touch. Mais si vous avez 500 clients, vous ne pouvez pas avoir 25 CSM. L&apos;automatisation gere le low-touch et le tech-touch, permettant aux CSM de se concentrer sur les comptes strategiques.</p>
                    <p>Les emails automatises de cycle de vie sont la base. Email de bienvenue apres la signature. Email de check-in a J+7 pour verifier la prise en main. Email de felicitations quand un milestone est atteint (premier workflow cree, premiere integration connectee). Email d&apos;alerte quand l&apos;utilisation baisse. Email de pre-renouvellement a J-90. Chaque email est declenche par un evenement ou un timer, pas par un CSM qui se souvient.</p>
                    <p>Les alertes internes sont tout aussi importantes. Notification Slack quand un client passe en zone orange. Alerte quand un client n&apos;a pas utilise le produit depuis 14 jours. Notification quand un champion quitte l&apos;entreprise (detectable via LinkedIn ou l&apos;enrichissement de donnees). Alerte quand un ticket de support est ouvert par un client en risque. Ces alertes permettent au CSM d&apos;intervenir au bon moment, pas trop tard.</p>
                    <p>Les business reviews automatisees sont une innovation recente. Au lieu de preparer manuellement un bilan pour chaque client, l&apos;outil genere automatiquement un rapport avec les metriques d&apos;utilisation, les objectifs atteints, les recommandations d&apos;optimisation. Le CSM revoit le rapport, personnalise les insights, et le presente au client. Le temps de preparation passe de 2 heures a 15 minutes.</p>
                    <p>L&apos;automatisation des enquetes de satisfaction (NPS, CSAT) permet de collecter du feedback a echelle. Envoyez un NPS trimestriel et un CSAT apres chaque interaction support. Analysez les resultats automatiquement. Declenchez un playbook quand un detracteur est identifie. Celebrez quand un promoteur partage un commentaire elogieux. Le feedback client doit etre un flux continu, pas une operation ponctuelle.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- Outils */}
              <section id="outils" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les outils du Customer Success</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le marche des outils CS a muri considerablement. Des plateformes specialisees aux modules integres dans les CRM, voici les outils de reference en 2026 et les contextes ou chacun excelle.</p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {[
                      { name: "Vitally", domain: "vitally.io", desc: "Plateforme CS moderne et intuitive. Excellent health scoring automatise, playbooks visuels, product analytics integres. Ideal pour les startups et scale-ups SaaS. L\u2019UX est nettement superieure a Gainsight. Budget : 15-30K EUR/an.", color: "#6C5CE7", tag: "Startups / Scale-ups" },
                      { name: "ChurnZero", domain: "churnzero.com", desc: "Plateforme CS specialisee dans la reduction du churn. Forte sur l\u2019automatisation des playbooks, le suivi de l\u2019utilisation produit et les alertes temps reel. Bonne integration HubSpot et Salesforce. Budget : 20-50K EUR/an.", color: "#FF7A59", tag: "Mid-market" },
                      { name: "Gainsight", domain: "gainsight.com", desc: "Le leader historique des plateformes CS. Tres complet mais complexe. Health scoring, playbooks, journey orchestration, surveys, product analytics. Reserve aux entreprises avec une equipe CS structuree. Budget : 50K+ EUR/an.", color: "#4B5EFC", tag: "Enterprise" },
                      { name: "HubSpot Service Hub", domain: "hubspot.com", desc: "Le module CS/Service de HubSpot. Ticketing, knowledge base, feedback surveys, customer portal. Moins specialise que Vitally ou Gainsight mais parfaitement integre au CRM. Ideal si votre stack est deja HubSpot. Budget : inclus dans Service Hub Pro/Enterprise.", color: "#FF7A59", tag: "Notre recommandation" },
                    ].map((tool) => (
                      <div key={tool.name} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                        <img src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=32`} alt={tool.name} className="w-6 h-6 shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[13px] font-semibold text-[#111]">{tool.name}</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded font-medium" style={{ backgroundColor: `${tool.color}15`, color: tool.color }}>{tool.tag}</span>
                          </div>
                          <p className="text-[11px] text-[#777] leading-[1.6]">{tool.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 -- CS et IA */}
              <section id="cs-ia" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Customer Success et intelligence artificielle</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;intelligence artificielle transforme le Customer Success de deux manieres fondamentales. Premierement, elle rend le health scoring predictif plutot que descriptif. Au lieu de constater qu&apos;un client est en risque, l&apos;IA predit le risque avant qu&apos;il ne se materialise. Deuxiemement, elle automatise les taches analytiques qui prenaient des heures au CSM.</p>
                    <p>Le predictive churn est l&apos;application la plus mature. Les modeles de machine learning analysent des centaines de signaux (frequence de connexion, tickets de support, sentiment des emails, changements de personnel, utilisation des fonctionnalites) et calculent une probabilite de churn pour chaque client. Les CSM recoivent une alerte quand un client depasse un seuil de risque, souvent des semaines avant que le churn ne devienne visible a l&apos;oeil nu.</p>
                    <p>L&apos;analyse de sentiment est une application plus recente. L&apos;IA analyse le ton des emails, des tickets de support et des notes de meeting pour detecter les signaux de frustration, de satisfaction ou d&apos;indifference. Un client qui utilise un langage de plus en plus neutre (ni positif, ni negatif) est souvent en train de se desengager. L&apos;IA capte ces nuances que le CSM peut manquer.</p>
                    <p>Claude, le modele d&apos;Anthropic, est particulierement puissant pour l&apos;analyse des signaux de churn. Via le protocole MCP (Model Context Protocol), Claude peut se connecter directement a HubSpot, analyser l&apos;historique complet d&apos;un client (emails, tickets, notes, utilisation), et produire un diagnostic structure : points forts de la relation, risques identifies, actions recommandees. C&apos;est comme avoir un analyste CS supplementaire qui ne dort jamais.</p>
                    <p>Les business reviews generees par IA sont une autre application prometteuse. Au lieu de passer 2 heures a preparer une QBR (Quarterly Business Review), le CSM demande a l&apos;IA de generer un brouillon base sur les donnees d&apos;utilisation, les objectifs du client et les interactions recentes. Le CSM revoit, personnalise et presente. Le gain de temps est considerable, et la qualite est souvent superieure parce que l&apos;IA n&apos;oublie aucun point de donnee.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 -- Mise en place */}
              <section id="mise-en-place" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mettre en place le Customer Success dans votre entreprise</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La mise en place du Customer Success varie enormement selon la taille de l&apos;entreprise et le nombre de clients. Pour une startup avec 30 clients, un founder ou un premier CSM suffit. Pour une scale-up avec 300 clients, il faut une equipe structuree avec des segments (high-touch, mid-touch, tech-touch). Les etapes fondamentales restent les memes.</p>
                    <p>Etape 1 : definir les segments clients. Tous les clients ne meritent pas le meme niveau d&apos;attention. Segmentez par ARR (revenu annuel recurrent), par potentiel d&apos;expansion, par complexite du produit, ou par secteur. Les clients a fort ARR et fort potentiel recoivent du high-touch (CSM dedie, business reviews trimestrielles). Les clients a faible ARR recoivent du tech-touch (emails automatises, webinars, documentation self-service).</p>
                    <p>Etape 2 : formaliser le handoff ventes-CS. Le passage d&apos;un client du commercial au CSM est un moment critique. Si le CSM ne connait pas le contexte du deal (pourquoi le client a achete, quels objectifs il veut atteindre, quelles promesses ont ete faites), l&apos;onboarding demarre mal. Le handoff doit etre formalise : meeting de transition, document de contexte, introduction email.</p>
                    <p>Etape 3 : construire les playbooks prioritaires. Commencez par l&apos;onboarding (impact immediat sur le TTV) et le risque de churn (impact immediat sur la retention). Ajoutez ensuite le renouvellement et l&apos;expansion. Chaque playbook doit etre simple, actionnable et mesurable. Un playbook de 50 pages ne sera jamais suivi. Un playbook de 5 etapes cles sera execute.</p>
                    <p>Etape 4 : mettre en place le health scoring. Commencez simple : 3 a 5 signaux ponderes qui produisent un score vert/jaune/rouge. Validez le modele sur vos donnees historiques (les clients qui ont churne avaient-ils un mauvais score ?). Iterez trimestriellement en ajoutant ou en ajustant des signaux. Ne cherchez pas la perfection au lancement. Un health score imparfait est infiniment mieux que pas de health score du tout.</p>
                    <p>Etape 5 : deployer l&apos;outillage. Si votre CRM est HubSpot, commencez avec Service Hub Pro. Si vous avez besoin de fonctionnalites CS avancees, ajoutez Vitally ou ChurnZero. Integrez les donnees d&apos;utilisation produit (via API ou segment) au health score. Automatisez les emails de cycle de vie et les alertes internes. L&apos;outillage doit supporter les playbooks, pas les compliquer.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 -- Approche Ceres */}
              <section id="ceres-approche" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Notre methode</span>
                  <h2 className="text-[17px] font-semibold text-white mb-4">L&apos;approche Ceres pour le Customer Success</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, nous integrons le Customer Success dans chaque projet RevOps. Notre conviction est que la retention est le levier de croissance le plus sous-exploite en B2B. La plupart de nos clients investissent 80% de leur budget dans l&apos;acquisition et 20% dans la retention, alors que les proportions devraient etre inversees.</p>
                    <p>Notre approche se structure en trois phases. Phase 1 : audit et segmentation. Nous analysons votre base de clients, identifions les patterns de churn, segmentons par valeur et potentiel, et definissons la strategie CS adaptee a chaque segment. Phase 2 : deploiement operationnel. Nous construisons les playbooks, configurons le health scoring dans HubSpot, automatisons les emails de cycle de vie et formons l&apos;equipe. Phase 3 : optimisation continue. Nous analysons les metriques mensuellement, ajustons les playbooks et le health scoring, et identifions les opportunites d&apos;expansion.</p>
                    <p>Le resultat pour nos clients : une amelioration moyenne du NRR de 8 a 12 points en 6 mois, une reduction du churn de 25 a 40%, et une augmentation significative de l&apos;expansion revenue. Le tout sans recruter des dizaines de CSM supplementaires, grace a l&apos;automatisation et au tech-touch pour les segments a faible ARR.</p>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    {[
                      "Audit de la base clients et analyse des patterns de churn",
                      "Segmentation par valeur, potentiel et complexite",
                      "Construction des playbooks (onboarding, risque, renouvellement, expansion)",
                      "Configuration du health scoring dans HubSpot",
                      "Automatisation des emails de cycle de vie et alertes internes",
                      "Deploiement des dashboards CS et RevOps integres",
                      "Formation de l\u2019equipe CS et cadence d\u2019optimisation mensuelle",
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
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a structurer votre Customer Success ?</h2>
                  <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On audite votre retention, on construit vos playbooks CS et on deploie le health scoring dans HubSpot. Premiers resultats en 8 semaines.</p>
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
