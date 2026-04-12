"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Onboarding commercial : reduire le ramp-up de 3 mois a 3 semaines",
  description: "Guide complet pour accelerer l'onboarding des commerciaux B2B. Les 4 piliers (process, outils, contenu, coaching), le playbook commercial, l'IA comme copilote, le role du CRM et un template plan d'onboarding 30 jours.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/onboarding-commercial-reduire-ramp-up" },
  articleSection: "RevOps",
  wordCount: 2600,
  inLanguage: "fr",
};

const sections = [
  { id: "cout-reel-ramp-up", title: "Le cout reel d'un ramp-up" },
  { id: "quatre-piliers", title: "Les 4 piliers de l'onboarding" },
  { id: "playbook-commercial", title: "Le playbook commercial" },
  { id: "ia-copilote", title: "L'IA comme copilote" },
  { id: "role-crm", title: "Le role du CRM" },
  { id: "mesurer-ramp-up", title: "Mesurer le ramp-up" },
  { id: "erreurs-classiques", title: "Les erreurs classiques" },
  { id: "template-onboarding", title: "Template plan 30 jours" },
];

const relatedArticles = [
  { title: "Comment structurer une equipe RevOps selon votre taille", slug: "structurer-equipe-revops", category: "RevOps", color: "#FF7A59" },
  { title: "Comment utiliser l'IA dans votre processus commercial B2B", slug: "ia-processus-commercial-vente-b2b", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "RevOps pour startups : par ou commencer", slug: "revops-startups-par-ou-commencer", category: "RevOps", color: "#FF7A59" },
];

export default function OnboardingCommercialArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("cout-reel-ramp-up");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "88%", width: 240, height: 240, borderRadius: "50%", background: "#FF7A59", opacity: 0.06, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=Onboarding%20commercial%20%3A%20reduire%20le%20ramp-up&url=https://ceres.agency/blog/onboarding-commercial-reduire-ramp-up" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/onboarding-commercial-reduire-ramp-up" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Onboarding commercial</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>RevOps</Badge>
                <span className="text-[11px] text-[#CCC]">14 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Onboarding commercial : reduire le ramp-up de 3 mois a 3 semaines
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Un commercial recrute met en moyenne 3 mois avant de signer son premier deal. Pendant ce temps, il coute sans rapporter. Pourtant, les meilleures equipes B2B ont ramene ce delai a 3 semaines. Ce guide detaille les 4 piliers de l&apos;onboarding, le role de l&apos;IA comme accelerateur et un template de plan 30 jours. Avec des methodes testees, pas des theories.
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
              <section id="cout-reel-ramp-up" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le cout reel d&apos;un ramp-up de 3 mois</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le chiffre fait mal : un commercial B2B met en moyenne 3,2 mois a atteindre sa pleine productivite. Pendant cette periode, il represente un cout net pour l&apos;entreprise. Salaire fixe, charges, management, outils, formation. Sans aucun deal signe pour compenser.</p>
                    <p>Faisons le calcul. Un AE (Account Executive) recrute a 55 000 EUR brut annuel charge coute environ 4 600 EUR par mois a l&apos;entreprise. Sur 3 mois de ramp-up, avec une productivite qui monte progressivement de 0 a 100%, le cout d&apos;opportunite se decompose ainsi :</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Mois 1 : productivite a 10%.</strong> Le commercial decouvre l&apos;entreprise, les produits, les outils. Il observe, il apprend. Cout net : environ 4 100 EUR (salaire moins la valeur marginale produite).</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Mois 2 : productivite a 40%.</strong> Il commence a prendre des deals, mais les cycles sont longs, les objections mal gerees, le pipeline est maigre. Cout net : environ 2 800 EUR.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Mois 3 : productivite a 70%.</strong> Il gagne en autonomie mais n&apos;est pas encore au niveau. Cout net : environ 1 400 EUR.</li>
                    </ul>
                    <p>Total : environ 8 300 EUR de cout d&apos;opportunite par recrue. Pour une equipe qui recrute 4 commerciaux par an, c&apos;est plus de 33 000 EUR perdus chaque annee uniquement sur le ramp-up. Et ce calcul n&apos;inclut pas le temps du manager qui forme, accompagne et debriefe.</p>
                    <p>Le vrai cout est double : financier et strategique. Chaque mois de ramp-up en trop, c&apos;est du pipeline non genere, des deals non signes, des objectifs trimestriels compromis. Dans un contexte de forte croissance, un onboarding lent peut devenir le goulot d&apos;etranglement numero un.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { stat: "3,2 mois", label: "Ramp-up moyen d'un commercial B2B", color: "#EF4444" },
                      { stat: "8 300 EUR", label: "Cout d'opportunite par recrue", color: "#FF7A59" },
                      { stat: "33 000 EUR", label: "Perdu par an pour 4 recrues", color: "#6C5CE7" },
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
              <section id="quatre-piliers" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 4 piliers de l&apos;onboarding commercial</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un onboarding efficace repose sur quatre piliers complementaires. Supprimer l&apos;un d&apos;entre eux, c&apos;est construire sur des fondations bancales. Les equipes qui ramenent leur ramp-up a 3 semaines maitrisent les quatre simultanement.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Process : le chemin est trace",
                        desc: "Le nouveau commercial ne doit jamais se demander 'qu'est-ce que je fais maintenant ?'. Chaque journee de la premiere semaine est planifiee a l'heure pres. Chaque semaine du premier mois a des objectifs clairs. Les etapes sont documentees, les milestones definis, les points de controle programmes.",
                        color: "#FF7A59",
                        detail: "Semaine 1 : decouverte produit et ICP. Semaine 2 : shadowing des meilleurs AE. Semaine 3 : premiers calls supervises. Semaine 4 : autonomie avec debriefs quotidiens."
                      },
                      {
                        title: "Outils : l'environnement est pret",
                        desc: "Le jour de son arrivee, tous les acces sont configures. CRM, email, sequences, outils d'enrichissement, intelligence de calls. Pas de tickets IT a ouvrir, pas de tutoriels a chercher. L'environnement est pre-configure avec des vues personnalisees et des templates prets a l'emploi.",
                        color: "#4B5EFC",
                        detail: "Checklist outils : CRM (HubSpot), sequences (Lemlist), enrichissement (Clay), calls (Claap), documentation (Notion), Slack channels."
                      },
                      {
                        title: "Contenu : la connaissance est accessible",
                        desc: "Playbook commercial, fiches produit, battle cards concurrentielles, scripts de qualification, objections et reponses, case studies par segment. Tout est documente, indexe, a jour. Le commercial n'a pas besoin de poser des questions pour trouver les reponses.",
                        color: "#22C55E",
                        detail: "Le contenu doit etre organise par etape du cycle de vente, pas par type de document. Le commercial cherche 'comment qualifier un lead enterprise', pas 'ou est le PDF n.42'."
                      },
                      {
                        title: "Coaching : l'accompagnement est structure",
                        desc: "Un buddy (commercial senior) assigne des le jour 1. Des sessions de role-play hebdomadaires. Des debriefs systematiques apres chaque call. Le feedback est frequent, specifique et actionnable. Le manager n'attend pas la fin du mois pour corriger une trajectoire.",
                        color: "#6C5CE7",
                        detail: "Ratio ideal : 1 buddy pour 1 a 2 recrues maximum. Au-dela, la qualite de l'accompagnement s'effondre."
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#FAFAFA] p-2 border border-[#F2F2F2]">
                          <span className="text-[10px] font-semibold shrink-0 mt-0.5" style={{ color: item.color }}>Detail :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;erreur la plus frequente est de se concentrer sur le contenu (envoyer des docs au nouveau) en negligeant le process et le coaching. Un commercial noye sous la documentation sans structure d&apos;accompagnement mettra plus de temps a etre productif, pas moins.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="playbook-commercial" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le playbook commercial : quoi documenter</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le playbook commercial est le document central de l&apos;onboarding. Ce n&apos;est pas une presentation PowerPoint de 200 slides. C&apos;est un guide operationnel, organise par situation, que le commercial consulte au quotidien pendant ses premieres semaines, puis ponctuellement ensuite.</p>
                    <p>Un bon playbook contient 8 sections essentielles :</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Structure du playbook commercial</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { section: "ICP et personas", desc: "Profil client ideal, criteres de qualification, signaux d'achat, segments prioritaires", color: "#FF7A59" },
                        { section: "Proposition de valeur", desc: "Pitch par persona, differenciateurs cles, preuves (chiffres, cas clients, temoignages)", color: "#4B5EFC" },
                        { section: "Process de vente", desc: "Les etapes du cycle, les criteres de passage d'une etape a l'autre, les actions attendues", color: "#22C55E" },
                        { section: "Qualification", desc: "Framework de qualification (BANT, MEDDIC ou custom), questions cles, red flags", color: "#6C5CE7" },
                        { section: "Objections", desc: "Les 15 objections les plus frequentes avec les reponses testees et validees", color: "#FF7A59" },
                        { section: "Concurrence", desc: "Battle cards par concurrent : forces, faiblesses, comment se positionner", color: "#6D00CC" },
                        { section: "Outils et templates", desc: "Sequences email, templates de propositions, scripts de demo, modeles de follow-up", color: "#4B5EFC" },
                        { section: "KPI et objectifs", desc: "Metriques de performance, objectifs par palier (M+1, M+2, M+3), benchmarks equipe", color: "#22C55E" },
                      ].map((item) => (
                        <div key={item.section} className="rounded-lg border border-[#E8E8E8] bg-white p-3">
                          <div className="flex items-center gap-2 mb-1.5">
                            <div className="w-2 h-2 rounded-sm" style={{ background: item.color }} />
                            <span className="text-[11px] font-semibold text-[#111]">{item.section}</span>
                          </div>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le piege du playbook parfait.</strong> Beaucoup d&apos;equipes veulent creer le playbook parfait avant de le deployer. C&apos;est une erreur. Un playbook imparfait mais utilise vaut infiniment mieux qu&apos;un playbook parfait qui n&apos;existe que dans un backlog Notion. Commencez par les 3 sections les plus critiques (ICP, process de vente, objections) et enrichissez au fil du temps.</p>
                    <p><strong className="text-[#111]">Le format compte.</strong> Le playbook doit etre consultable en moins de 30 secondes pour n&apos;importe quelle question. Organisez-le par situation (&ldquo;je suis en call de decouverte avec un CFO&rdquo;), pas par categorie abstraite. Les fiches doivent tenir sur un ecran, pas sur 5 pages.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="ia-copilote" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;IA comme copilote du nouveau commercial</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>L&apos;IA change fondamentalement la donne de l&apos;onboarding. Un nouveau commercial n&apos;a plus besoin de tout savoir par coeur. Il a un copilote qui lui fournit les bonnes informations au bon moment, qui le prepare avant chaque call et qui le debriefe apres.</p>
                    <p>Voici les 5 cas d&apos;usage IA les plus impactants pour l&apos;onboarding :</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { usage: "Preparation de calls automatique", desc: "Avant chaque rendez-vous, un agent IA compile les informations sur le prospect : taille, secteur, actualites, techno stack, historique CRM. Le commercial arrive prepare sans avoir passe 20 minutes de recherche.", gain: "20 min/call", color: "#6D00CC" },
                      { usage: "Coaching post-call en temps reel", desc: "L'IA analyse l'enregistrement du call (via Claap ou equivalent) et produit un debrief structure : points forts, axes d'amelioration, objections mal traitees, next steps oublies. Le feedback est immediat et specifique.", gain: "Feedback x5", color: "#FF7A59" },
                      { usage: "Playbook interactif", desc: "Au lieu de chercher dans un document statique, le commercial pose une question en langage naturel ('comment repondre a l'objection prix pour un CFO dans l'industrie') et obtient une reponse contextualisee en 10 secondes.", gain: "30 sec vs 5 min", color: "#22C55E" },
                      { usage: "Simulation de calls (role-play IA)", desc: "Le commercial s'entraine contre un 'prospect IA' qui joue differents scenarios : objection budget, concurrent agressif, decision repoussee. Il peut faire 10 simulations par jour sans mobiliser un senior.", gain: "10x plus de pratique", color: "#4B5EFC" },
                      { usage: "Resume et mise a jour CRM automatique", desc: "Apres chaque interaction, l'IA met a jour automatiquement le CRM avec les notes structurees, les prochaines etapes et les changements de statut. Le nouveau commercial se concentre sur la vente, pas sur l'admin.", gain: "15 min/jour", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.usage} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span className="text-[12px] font-semibold text-[#111]">{item.usage}</span>
                          </div>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: `${item.color}15`, color: item.color }}>{item.gain}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;impact mesure.</strong> Chez nos clients qui deploient l&apos;IA des l&apos;onboarding, le time-to-first-deal passe en moyenne de 8,5 semaines a 3,2 semaines. Le facteur le plus impactant est la combinaison preparation automatique + coaching post-call. Le nouveau commercial apprend deux fois plus vite parce qu&apos;il recoit du feedback sur chaque interaction, pas une fois par semaine.</p>
                    <p>L&apos;IA ne remplace pas le buddy humain. Elle le complemente. Le senior se concentre sur le coaching strategique et la transmission de la culture. L&apos;IA gere le repetitif et le factuel.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="role-crm" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le role du CRM dans l&apos;onboarding</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le CRM est le premier outil que le commercial utilise chaque jour. Il doit etre configure pour faciliter l&apos;onboarding, pas pour le compliquer. Trop souvent, le nouveau commercial se retrouve face a un CRM avec 80 proprietes custom, des pipelines mal documentes et aucune vue adaptee a son role.</p>
                    <p>Un CRM bien configure pour l&apos;onboarding respecte trois principes :</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { title: "Vues pre-configurees par role", desc: "Le nouveau SDR voit son dashboard SDR des la premiere connexion : leads a qualifier, sequence en cours, taux de reponse, objectif du jour. Pas de vue generique partagee par toute l'equipe. Chaque role a ses vues, ses filtres, ses rapports.", color: "#4B5EFC" },
                      { title: "Pipeline avec criteres explicites", desc: "Chaque etape du pipeline a des criteres d'entree et de sortie documentes directement dans le CRM (proprietes obligatoires, checkboxes de validation). Le commercial sait exactement quand faire avancer un deal sans demander a son manager.", color: "#22C55E" },
                      { title: "Automatisations guidantes", desc: "Des workflows qui guident le commercial : rappels automatiques quand un deal stagne, notifications quand un critere manque, suggestions de next steps basees sur l'etape du deal. Le CRM ne se contente pas de stocker, il oriente.", color: "#FF7A59" },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;erreur HubSpot classique.</strong> Donner au nouveau commercial un acces admin au CRM sans aucune restriction. Il voit tout, comprend rien, et perd une heure par jour a naviguer dans des menus. La bonne approche : un acces restreint avec des vues simples la premiere semaine, puis une montee en puissance progressive des droits et des vues.</p>
                    <p>Le CRM doit aussi servir de support de formation. En analysant les deals des meilleurs commerciaux directement dans le CRM (notes, etapes, duree par etape, next steps), le nouveau peut apprendre par l&apos;exemple concret, pas par la theorie.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="mesurer-ramp-up" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Mesurer le ramp-up : time to first deal et au-dela</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On ne peut pas ameliorer ce qu&apos;on ne mesure pas. Le ramp-up doit etre suivi avec des metriques claires, pas des impressions. Cinq indicateurs permettent de piloter l&apos;onboarding de maniere objective.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Metriques de suivi du ramp-up</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Metrique</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Objectif</th>
                            <th className="text-center py-2 px-2 text-[#999] font-semibold">Benchmark</th>
                            <th className="text-left py-2 pl-2 text-[#999] font-semibold">Comment mesurer</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { metric: "Time to first deal", target: "< 4 semaines", bench: "8-12 semaines en moyenne", how: "Date d'arrivee a date du premier deal closed won" },
                            { metric: "Time to full quota", target: "< 2 mois", bench: "3-6 mois en moyenne", how: "Date d'arrivee a premier mois a 100% de quota" },
                            { metric: "Activite semaine 2", target: "> 70% du senior", bench: "30-50% en general", how: "Nombre de calls, emails, meetings vs moyenne equipe" },
                            { metric: "Taux de conversion pipeline", target: "> 50% du senior", bench: "20-30% en general", how: "Win rate du nouveau vs win rate moyen de l'equipe" },
                            { metric: "Score playbook", target: "> 80%", bench: "Variable", how: "Quiz interne sur les connaissances produit, ICP, process" },
                          ].map((row) => (
                            <tr key={row.metric} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.metric}</td>
                              <td className="py-2.5 px-2 text-center">
                                <span className="inline-block px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">{row.target}</span>
                              </td>
                              <td className="py-2.5 px-2 text-center text-[#999]">{row.bench}</td>
                              <td className="py-2.5 pl-2 text-[#999]">{row.how}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le time to first deal est la metrique reine.</strong> C&apos;est elle qui resume le mieux l&apos;efficacite de votre onboarding. Mais attention : elle doit etre contextualisee par la taille du deal. Un first deal a 500 EUR ne prouve pas la meme chose qu&apos;un first deal a 15 000 EUR. Suivez le time to first deal qualifie (superieur a votre deal moyen/2).</p>
                    <p><strong className="text-[#111]">La frequence de mesure compte.</strong> Ne mesurez pas le ramp-up une fois par mois. Suivez les metriques d&apos;activite chaque semaine et les metriques de resultat chaque quinzaine. Le manager doit avoir un dashboard dedie qui lui montre ou en est chaque recrue par rapport a la trajectoire attendue.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="erreurs-classiques" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les erreurs classiques de l&apos;onboarding commercial</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On a accompagne des dizaines d&apos;equipes commerciales. Les memes erreurs reviennent systematiquement. Les connaitre permet de les eviter.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Le syndrome du 'il verra en faisant'",
                        desc: "Jeter le commercial dans le bain sans preparation sous pretexte qu'on apprend en faisant. C'est vrai pour les competences, faux pour les connaissances. Un commercial qui fait un call de decouverte sans connaitre l'ICP, les objections et le process de vente ne va pas apprendre, il va bruler des leads.",
                        color: "#EF4444",
                        fix: "Minimum 1 semaine de formation structuree avant le premier call en autonomie."
                      },
                      {
                        title: "Le copier-coller du senior",
                        desc: "Demander au nouveau de copier exactement ce que fait le meilleur commercial. Le probleme : le senior a des reflexes, des raccourcis et une intuition que le junior ne peut pas reproduire. Le playbook doit etre adapte au niveau du debutant, pas calque sur les pratiques de l'expert.",
                        color: "#FF7A59",
                        fix: "Creer un parcours progressif avec des paliers de complexite. Semaine 1 : deals simples. Semaine 3 : deals complexes."
                      },
                      {
                        title: "Zero feedback structure",
                        desc: "Le manager fait un point mensuel et s'etonne que le commercial ne progresse pas assez vite. Le feedback doit etre quotidien la premiere semaine, bi-hebdomadaire la deuxieme, hebdomadaire ensuite. Et il doit etre specifique : 'sur ton call avec X, tu as oublie de valider le budget au minute 12'.",
                        color: "#6C5CE7",
                        fix: "Debrief apres chaque call la premiere semaine. Enregistrer tous les calls pour le coaching asynchrone."
                      },
                      {
                        title: "L'onboarding generique",
                        desc: "Le meme programme pour un SDR, un AE et un CSM. Les trois roles ont des competences, des outils et des objectifs differents. Un SDR doit maitriser la prospection et la qualification. Un AE doit maitriser la demo et le closing. Le programme doit etre specifique au role.",
                        color: "#4B5EFC",
                        fix: "Creer un parcours par role avec un tronc commun (produit, culture) et des modules specifiques (competences, outils)."
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#22C55E]/5 p-2">
                          <span className="text-[10px] text-[#22C55E] font-semibold shrink-0 mt-0.5">Solution :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.fix}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le point commun de toutes ces erreurs : elles viennent d&apos;un manque de structure, pas d&apos;un manque de bonne volonte. Les managers veulent bien faire mais n&apos;ont pas le temps de structurer l&apos;onboarding. C&apos;est exactement la ou le playbook et l&apos;IA changent la donne : ils structurent et automatisent ce que le manager n&apos;a pas le temps de faire manuellement.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="template-onboarding" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Template : plan d&apos;onboarding 30 jours</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Voici le template que l&apos;on utilise chez Ceres pour structurer l&apos;onboarding commercial de nos clients. Il est adaptable a toute equipe B2B de 5 a 50 commerciaux.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        semaine: "Semaine 1 : Fondations",
                        items: [
                          "Jour 1-2 : Decouverte produit, ICP, personas, proposition de valeur",
                          "Jour 3 : Prise en main CRM + outils (sequences, enrichissement, calls)",
                          "Jour 4-5 : Shadowing de 5 calls des meilleurs AE avec grille d'observation",
                        ],
                        milestone: "Quiz playbook > 70% + CRM maitrise",
                        color: "#FF7A59",
                      },
                      {
                        semaine: "Semaine 2 : Pratique supervisee",
                        items: [
                          "5 simulations de calls avec l'IA (scenarios progressifs)",
                          "3 calls reels supervises par le buddy avec debrief systematique",
                          "Enrichissement et qualification de 20 leads en autonomie",
                        ],
                        milestone: "3 calls notes > 7/10 par le buddy",
                        color: "#4B5EFC",
                      },
                      {
                        semaine: "Semaine 3 : Autonomie accompagnee",
                        items: [
                          "Pipeline personnel de 10+ leads qualifies",
                          "Calls en autonomie avec debrief IA automatique + point buddy 2x/sem",
                          "Premier deal en negociation (objectif : avancer a l'etape 'proposition')",
                        ],
                        milestone: "Pipeline > 10 leads + 1 deal en proposition",
                        color: "#22C55E",
                      },
                      {
                        semaine: "Semaine 4 : Pleine vitesse",
                        items: [
                          "Objectif d'activite a 80% du senior (calls, emails, meetings)",
                          "Premier deal closed won (objectif ambitieux mais atteignable)",
                          "Debriefing complet M+1 avec le manager : points forts, axes, plan M+2",
                        ],
                        milestone: "First deal signe + activite a 80%",
                        color: "#6C5CE7",
                      },
                    ].map((item) => (
                      <div key={item.semaine} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <p className="text-[12px] font-semibold text-white">{item.semaine}</p>
                        </div>
                        <ul className="space-y-1.5 mb-3">
                          {item.items.map((line) => (
                            <li key={line} className="flex items-start gap-2 text-[11px] text-[#777] leading-[1.6]">
                              <span className="w-1 h-1 rounded-full bg-[#555] mt-1.5 shrink-0" />
                              {line}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-start gap-2 rounded-lg bg-white/5 p-2">
                          <span className="text-[10px] font-semibold shrink-0 mt-0.5" style={{ color: item.color }}>Milestone :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.milestone}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4 mb-6">
                    <p className="text-[12px] font-semibold text-white mb-3">Resultats moyens constates chez nos clients</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "3,2 sem", label: "Time to first deal", color: "#22C55E" },
                        { stat: "-65%", label: "Reduction du ramp-up", color: "#4B5EFC" },
                        { stat: "85%", label: "Retention a 6 mois", color: "#6C5CE7" },
                        { stat: "x2,3", label: "Pipeline M+1 vs sans onboarding", color: "#FF7A59" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on integre l&apos;onboarding commercial dans chaque projet RevOps. Parce qu&apos;un CRM bien configure et des process bien documentes ne servent a rien si les commerciaux ne savent pas les utiliser. On deploie le playbook, on configure les agents IA de coaching et on met en place les dashboards de suivi du ramp-up. En 30 jours, pas en 3 mois.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Accelerer l&apos;onboarding de vos commerciaux ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on structure l&apos;onboarding commercial avec un playbook, des agents IA et un CRM configure pour le ramp-up. De 3 mois a 3 semaines, avec des resultats mesurables. Commencez par un appel de 30 minutes pour evaluer votre process actuel.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF7A59] text-white rounded-lg text-[13px] font-medium hover:bg-[#E5694D] transition-colors">
                  Optimiser votre onboarding
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
                        <p className="text-[12px] font-medium text-[#111] group-hover:text-[#FF7A59] transition-colors leading-[1.4]">{a.title}</p>
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
