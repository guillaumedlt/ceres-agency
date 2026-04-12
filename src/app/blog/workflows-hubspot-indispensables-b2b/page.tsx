"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Les 10 workflows HubSpot indispensables pour le B2B",
  description: "Guide complet des 10 workflows HubSpot essentiels en B2B : lead nurturing, scoring, notification MQL, automatisation deal stage, creation de taches, relance devis, onboarding client, alerte churn, re-engagement et reporting interne. Configuration detaillee et exemples concrets.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/workflows-hubspot-indispensables-b2b" },
  articleSection: "CRM & HubSpot",
  wordCount: 3000,
  inLanguage: "fr",
};

const sections = [
  { id: "lead-nurturing", title: "1. Lead nurturing" },
  { id: "lead-scoring-update", title: "2. Lead scoring update" },
  { id: "mql-notification", title: "3. MQL notification" },
  { id: "deal-stage-automation", title: "4. Deal stage automation" },
  { id: "task-creation-deal-move", title: "5. Task creation on deal move" },
  { id: "quote-follow-up", title: "6. Quote follow-up" },
  { id: "customer-onboarding", title: "7. Customer onboarding" },
  { id: "churn-risk-alert", title: "8. Churn risk alert" },
  { id: "re-engagement", title: "9. Re-engagement" },
  { id: "internal-reporting", title: "10. Internal reporting" },
];

const relatedArticles = [
  { title: "Marketing automation : 7 workflows HubSpot qui generent du pipeline", slug: "marketing-automation-7-workflows-hubspot", category: "CRM & HubSpot", color: "#FF7A59" },
  { title: "9 actions commerciales a automatiser dans HubSpot", slug: "9-actions-commerciales-automatiser-hubspot", category: "CRM & HubSpot", color: "#FF7A59" },
  { title: "Lead scoring : le guide complet", slug: "lead-scoring-guide-complet", category: "Data & Reporting", color: "#22C55E" },
];

export default function WorkflowsHubspotIndispensablesB2bArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("lead-nurturing");

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
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#6C5CE7", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "45%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "75%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.07, filter: "blur(70px)" }} />
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
                  <a href="https://twitter.com/intent/tweet?text=Les%2010%20workflows%20HubSpot%20indispensables%20pour%20le%20B2B&url=https://ceres.agency/blog/workflows-hubspot-indispensables-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/workflows-hubspot-indispensables-b2b" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">10 workflows HubSpot B2B</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM &amp; HubSpot</Badge>
                <span className="text-[11px] text-[#CCC]">16 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Les 10 workflows HubSpot indispensables pour le B2B
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                La plupart des entreprises B2B utilisent HubSpot comme un CRM statique. Elles remplissent des fiches, passent des deals en manuel et envoient des emails un par un. Le potentiel d&apos;automatisation reste inexploite. Ce guide presente les 10 workflows que toute equipe B2B devrait configurer, avec le trigger, les actions et un exemple concret pour chacun.
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
              {/* Section 1 : Lead nurturing */}
              <section id="lead-nurturing" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold">1</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Lead nurturing automatise</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le lead nurturing est le workflow le plus basique et le plus sous-estime. Un prospect telecharge un contenu, remplit un formulaire ou visite une page cle. Ensuite, rien. Il tombe dans un trou noir parce que personne n&apos;a le temps de le relancer manuellement. Le workflow de nurturing automatise cette sequence pour que chaque lead recoive le bon contenu au bon moment, sans intervention humaine.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">Trigger</p>
                        <p className="text-[12px] text-[#555]">Soumission de formulaire (guide, webinar, demo request) OU premiere visite sur une page pricing/produit.</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-1">Actions</p>
                        <ul className="space-y-1.5 text-[12px] text-[#555]">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Envoyer un email de bienvenue avec le contenu demande (J0)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Envoyer un cas client pertinent par secteur (J+3)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Proposer un contenu complementaire type guide ou checklist (J+7)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Invitation a un webinar ou demo si engagement detecte (J+14)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-1">Exemple</p>
                        <p className="text-[12px] text-[#555]">Un directeur commercial telecharge le guide RevOps. A J+3, il recoit un cas client SaaS B2B avec +35% de pipeline. A J+7, la checklist audit CRM. A J+14, s&apos;il a ouvert les 3 emails, invitation automatique a un call de 15 minutes. Taux de conversion nurturing vers MQL : 12 a 18%.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">La cle du nurturing efficace</strong> : segmenter les sequences par persona et par intent. Un CEO qui telecharge un guide pricing ne recoit pas le meme contenu qu&apos;un ops manager qui telecharge un guide technique. Utilisez les proprietes HubSpot (job title, industry, lifecycle stage) pour brancher les bonnes sequences.</p>
                    <p>Erreur classique : envoyer la meme sequence a tout le monde. Le nurturing generique a un taux d&apos;ouverture de 15%. Le nurturing segmente monte a 35-45%. La segmentation n&apos;est pas optionnelle, c&apos;est ce qui fait fonctionner le workflow.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 : Lead scoring update */}
              <section id="lead-scoring-update" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold">2</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Lead scoring update automatique</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le scoring natif de HubSpot est statique : vous definissez des regles, elles s&apos;appliquent. Mais le scoring doit evoluer en fonction du comportement du lead en temps reel. Ce workflow met a jour le score automatiquement quand un evenement significatif se produit, pour que les commerciaux travaillent toujours sur les leads les plus chauds.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">Trigger</p>
                        <p className="text-[12px] text-[#555]">Visite page pricing (+15 pts), ouverture email 3x en 7 jours (+10 pts), clic lien demo (+20 pts), inactivite 30 jours (-25 pts), bounce email (-50 pts).</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-1">Actions</p>
                        <ul className="space-y-1.5 text-[12px] text-[#555]">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Mise a jour de la propriete HubSpot Score via workflow</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Si score depasse 80 : changement lifecycle stage vers MQL</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Si score tombe sous 20 : passage en &ldquo;cold lead&rdquo; et exclusion des sequences actives</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-1">Exemple</p>
                        <p className="text-[12px] text-[#555]">Un lead a un score de 45. Il visite la page pricing (+15), puis clique sur &ldquo;demander une demo&rdquo; (+20). Son score passe a 80. Le workflow change son lifecycle stage en MQL et declenche le workflow de notification (voir section 3). Tout ca en temps reel, sans qu&apos;un humain touche quoi que ce soit.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le scoring negatif est aussi important que le positif.</strong> Un lead qui n&apos;ouvre aucun email depuis 30 jours n&apos;est plus un prospect chaud, meme s&apos;il avait un score eleve. Le decay automatique evite aux commerciaux de perdre du temps sur des leads fantomes. Configurez un -5 points par semaine d&apos;inactivite, avec un plancher a 0.</p>
                    <p>Astuce HubSpot : utilisez les proprietes calculees pour creer un score composite (fit score + engagement score). Le fit score est base sur les donnees firmographiques (taille, secteur, poste), l&apos;engagement score sur le comportement. Les deux doivent etre eleves pour qu&apos;un lead soit considere MQL.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 : MQL notification */}
              <section id="mql-notification" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold">3</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Notification MQL en temps reel</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Un lead devient MQL. Le commercial ne le sait pas. Il le decouvre 3 jours plus tard en parcourant le CRM. Trois jours pendant lesquels le prospect a eu le temps de parler a un concurrent. La vitesse de prise en charge d&apos;un MQL est directement correlee au taux de conversion. Les donnees montrent que contacter un MQL dans les 5 minutes multiplie par 9 les chances de conversion par rapport a 30 minutes.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">Trigger</p>
                        <p className="text-[12px] text-[#555]">Changement de propriete : Lifecycle Stage passe a MQL (ou HubSpot Score depasse le seuil defini).</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-1">Actions</p>
                        <ul className="space-y-1.5 text-[12px] text-[#555]">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Notification Slack dans le channel #sales avec nom, entreprise, score et source</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Email interne au commercial assigne (ou round-robin si pas d&apos;owner)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Creation automatique d&apos;une tache &ldquo;Appeler MQL&rdquo; avec deadline a 1h</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Assignation automatique si round-robin actif</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-1">Exemple</p>
                        <p className="text-[12px] text-[#555]">Le DG d&apos;une PME SaaS remplit le formulaire demo. Son score passe a 85. En 30 secondes, le message arrive sur Slack : &ldquo;Nouveau MQL : Pierre Durand, CEO @ DataFlow (score 85, source : page pricing). Tache creee pour Marie (AE).&rdquo; Marie appelle dans les 4 minutes. Taux de qualification : 45% contre 12% quand le delai depasse 24h.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;integration Slack est non-negociable.</strong> Les emails internes ont un temps de lecture moyen de 2h. Slack, c&apos;est 2 minutes. Utilisez l&apos;integration HubSpot-Slack native ou passez par Make pour un formatage plus riche (avec le lien direct vers la fiche contact, les dernieres pages visitees et le score detaille).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 : Deal stage automation */}
              <section id="deal-stage-automation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold">4</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Automatisation des deal stages</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les commerciaux oublient de mettre a jour le stage de leurs deals. C&apos;est humain. Mais quand le pipeline est faux, les previsions sont fausses. Et quand les previsions sont fausses, les decisions business sont mauvaises. Ce workflow automatise le passage de stages quand des conditions objectives sont remplies, pour que le pipeline reflue la realite.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">Trigger</p>
                        <p className="text-[12px] text-[#555]">Conditions objectives : meeting enregistre (Discovery vers Qualification), proposition envoyee (Qualification vers Proposal), signature electronique completee (Negotiation vers Closed Won).</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-1">Actions</p>
                        <ul className="space-y-1.5 text-[12px] text-[#555]">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Changement automatique du deal stage</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Mise a jour de la date de dernier changement de stage</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Alerte si un deal reste plus de 14 jours dans le meme stage (deal stuck)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-1">Exemple</p>
                        <p className="text-[12px] text-[#555]">Le commercial envoie un devis via HubSpot Quotes. Le deal passe automatiquement en &ldquo;Proposal Sent&rdquo;. 14 jours sans activite, le manager recoit une alerte : &ldquo;Deal DataFlow (25K) bloque en Proposal depuis 14 jours.&rdquo; Resultat : les deals stales sont identifies 2 semaines plus tot qu&apos;avant.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Attention aux faux positifs.</strong> N&apos;automatisez pas le passage vers Closed Won sans validation humaine. Les stages intermediaires peuvent etre automatises de facon fiable, mais la cloture d&apos;un deal doit rester un acte delibere. Utilisez l&apos;automatisation pour proposer le changement (notification + tache), pas pour l&apos;imposer sur les stages critiques.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 : Task creation on deal move */}
              <section id="task-creation-deal-move" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold">5</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Creation de taches sur mouvement de deal</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Quand un deal change de stage, il y a des actions a faire. Envoyer un contrat, planifier un call de negociation, preparer un dossier technique. Ces actions sont souvent oubliees ou retardees parce que le commercial doit y penser lui-meme. Ce workflow cree automatiquement les taches associees a chaque transition de stage.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">Trigger</p>
                        <p className="text-[12px] text-[#555]">Changement de propriete Deal Stage (chaque transition declenche un set de taches specifique).</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-1">Actions</p>
                        <ul className="space-y-1.5 text-[12px] text-[#555]">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Qualification : creer tache &ldquo;Envoyer recap discovery + next steps&rdquo; (deadline J+1)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Proposal : creer tache &ldquo;Preparer et envoyer proposition commerciale&rdquo; (deadline J+2)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Negotiation : creer tache &ldquo;Planifier call de negociation&rdquo; (deadline J+1)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Closed Won : creer tache &ldquo;Lancer onboarding client&rdquo; assignee au CSM (deadline J+1)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-1">Exemple</p>
                        <p className="text-[12px] text-[#555]">Le deal passe en &ldquo;Qualification&rdquo;. Le commercial voit immediatement dans sa queue de taches : &ldquo;Envoyer recap discovery + next steps a Pierre Durand (DataFlow)&rdquo; avec deadline demain. Plus d&apos;oublis. Le temps moyen entre deux stages diminue de 25% parce que les actions sont lancees immediatement.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Definissez les taches avec les commerciaux, pas sans eux.</strong> Les taches imposees par le management sans concertation ne sont jamais completees. Faites un atelier de 30 minutes avec l&apos;equipe : &ldquo;pour chaque transition de stage, quelles sont les 2-3 actions indispensables ?&rdquo; Documentez, configurez, iterez.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 : Quote follow-up */}
              <section id="quote-follow-up" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold">6</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Relance automatique de devis</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Vous envoyez un devis. Le prospect ne repond pas. Le commercial attend 5 jours, oublie, relance 10 jours plus tard avec un &ldquo;je me permets de revenir vers vous&rdquo;. Pendant ce temps, le prospect a signe chez un concurrent. 35% des devis B2B non relances dans les 48h ne se convertissent jamais. Ce workflow automatise la sequence de relance pour maximiser le taux de signature.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">Trigger</p>
                        <p className="text-[12px] text-[#555]">Devis envoye (HubSpot Quote status = &ldquo;Sent&rdquo;) ET devis non signe apres 48h.</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-1">Actions</p>
                        <ul className="space-y-1.5 text-[12px] text-[#555]">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />J+2 : email automatique &ldquo;Avez-vous des questions sur la proposition ?&rdquo;</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />J+5 : tache pour le commercial &ldquo;Appeler pour discuter de la proposition&rdquo;</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />J+10 : email avec un element de valeur supplementaire (cas client, ROI calcule)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />J+15 : dernier email &ldquo;La proposition est toujours valable&rdquo; + alerte manager si montant &gt; 10K</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-1">Exemple</p>
                        <p className="text-[12px] text-[#555]">Devis de 18 000 EUR envoye lundi. Mercredi, email automatique de relance. Le prospect ouvre l&apos;email (tracker HubSpot), le commercial recoit une notification et appelle dans l&apos;heure. Le prospect avait une question sur le perimetre. Call de 10 minutes, devis signe le jour meme. Sans le workflow, le follow-up aurait pris 8 jours de plus.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Personnalisez les relances selon le montant du deal.</strong> Un devis a 5 000 EUR peut se contenter d&apos;une sequence email. Un devis a 50 000 EUR merite un call du manager a J+3 et une visite physique a J+7. Utilisez les branches conditionnelles dans le workflow HubSpot pour adapter l&apos;intensite de la relance au montant.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 : Customer onboarding */}
              <section id="customer-onboarding" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold">7</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Onboarding client automatise</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le deal est signe. L&apos;equipe commerciale fait la fete. Et le client attend. Personne ne l&apos;a contacte depuis 3 jours. Pas de mail de bienvenue, pas de planning d&apos;onboarding, pas de premier rendez-vous. Le churn commence souvent ici, dans les premieres semaines post-signature. Ce workflow garantit que chaque nouveau client recoit une experience d&apos;onboarding structuree et sans couture.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">Trigger</p>
                        <p className="text-[12px] text-[#555]">Deal stage passe a &ldquo;Closed Won&rdquo;.</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-1">Actions</p>
                        <ul className="space-y-1.5 text-[12px] text-[#555]">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Email de bienvenue avec les etapes du process d&apos;onboarding (J0)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Creation du deal dans le pipeline &ldquo;Onboarding&rdquo; avec assignation au CSM</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Tache CSM : &ldquo;Planifier kick-off dans les 48h&rdquo;</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Email avec acces plateforme, documentation, contacts cles (J+1)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Check-in automatique a J+7 et J+30</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-1">Exemple</p>
                        <p className="text-[12px] text-[#555]">Vendredi 17h, le deal est signe. A 17h01, le client recoit un email de bienvenue. Le CSM a une tache pour lundi matin. Lundi 9h, le kick-off est planifie pour mardi. A J+7, email automatique : &ldquo;Comment se passe la prise en main ?&rdquo;. Le NPS d&apos;onboarding passe de 6.5 a 8.2 avec ce workflow.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le handoff sales/CS est le moment le plus critique.</strong> Le client ne veut pas repeter tout ce qu&apos;il a dit au commercial. Utilisez les proprietes du deal et les notes de call pour que le CSM ait tout le contexte avant le kick-off. L&apos;email de bienvenue peut meme mentionner les objectifs specifiques discutes pendant le cycle de vente (via des tokens de personnalisation HubSpot).</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 : Churn risk alert */}
              <section id="churn-risk-alert" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold">8</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Alerte risque de churn</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Vous apprenez qu&apos;un client churne quand il envoie un email pour resilier. A ce stade, c&apos;est trop tard. Les signaux de churn sont visibles des semaines avant : baisse d&apos;utilisation, tickets support en hausse, absence de connexion, pas de reponse aux emails. Ce workflow detecte ces signaux et alerte l&apos;equipe CS avant que le client ne soit perdu.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">Trigger</p>
                        <p className="text-[12px] text-[#555]">Score d&apos;engagement client inferieur a 30 (base sur connexions, utilisation features, tickets, reponses emails) OU pas de connexion depuis 14 jours OU 3+ tickets support en 7 jours.</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-1">Actions</p>
                        <ul className="space-y-1.5 text-[12px] text-[#555]">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Mise a jour propriete &ldquo;Churn Risk&rdquo; : High</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Notification Slack dans #customer-success avec details du compte</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Tache CSM : &ldquo;Appeler le client pour check-in proactif&rdquo; (deadline 24h)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Si renouvellement dans les 60 jours : escalade au manager CS</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-1">Exemple</p>
                        <p className="text-[12px] text-[#555]">Le client DataFlow n&apos;est pas connecte depuis 12 jours et a ouvert 4 tickets en une semaine. Le workflow passe le risk score en &ldquo;High&rdquo; et alerte le CSM. Appel proactif : le client etait frustre par une fonctionnalite. Formation personnalisee organisee en 48h. Le client renouvelle 2 mois plus tard. Sans le workflow, on l&apos;aurait perdu.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les donnees d&apos;usage sont la cle.</strong> Si votre produit envoie des donnees d&apos;utilisation vers HubSpot (via API ou integration), vous pouvez creer un score d&apos;engagement client riche. Sinon, utilisez les donnees disponibles : ouvertures d&apos;emails, reponses aux NPS, tickets support, participation aux webinars. Meme un score approximatif vaut mieux que pas de score du tout.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 : Re-engagement dormant contacts */}
              <section id="re-engagement" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold">9</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Re-engagement des contacts dormants</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Votre base CRM contient des centaines (parfois des milliers) de contacts qui n&apos;ont pas interagi depuis 90 jours ou plus. Ce ne sont pas des contacts morts. Ce sont des prospects qui n&apos;etaient pas prets a l&apos;epoque. Certains le sont maintenant. Ce workflow les reactive de facon systematique au lieu de les laisser dormir indefiniment.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">Trigger</p>
                        <p className="text-[12px] text-[#555]">Derniere activite il y a plus de 90 jours ET lifecycle stage = Lead ou MQL (pas les clients actifs).</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-1">Actions</p>
                        <ul className="space-y-1.5 text-[12px] text-[#555]">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Email 1 : contenu a forte valeur (nouveau guide, etude de cas recente, benchmark secteur)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Si ouverture : email 2 a J+5 avec proposition de valeur actualisee</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Si clic : reinscription dans le scoring actif et notification SDR</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Si pas d&apos;ouverture apres 3 emails : passage en &ldquo;Marketing suspended&rdquo; pour proteger la delivrabilite</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-1">Exemple</p>
                        <p className="text-[12px] text-[#555]">Sur 800 contacts dormants, le workflow de re-engagement en reactive 120 (15%). Parmi eux, 18 redeviennent MQL et 4 signent dans les 3 mois. Revenue genere : 48 000 EUR a partir de contacts qu&apos;on aurait autrement ignores. Cout du workflow : 0 EUR (deja inclus dans l&apos;abonnement HubSpot).</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Ne spammez pas vos contacts dormants.</strong> Un email par semaine maximum. Le contenu doit etre genuinement utile, pas un pitch deguise. Et si un contact ne reagit pas apres 3 tentatives, arretez. Mieux vaut une base propre de 2 000 contacts actifs qu&apos;une base polluee de 10 000 contacts dont 8 000 ne lisent rien.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 10 : Internal reporting */}
              <section id="internal-reporting" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[11px] font-bold">10</div>
                    <h2 className="text-[17px] font-semibold text-white">Reporting interne automatise</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le reporting est l&apos;activite la plus chronophage et la moins valorisee du RevOps. Chaque lundi matin, quelqu&apos;un passe 2 a 3 heures a extraire des donnees, les formater dans un Google Sheet, ecrire des commentaires et envoyer le rapport par email. Ce workflow automatise 90% du processus.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#333] bg-[#1A1A1A] p-5">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[11px] font-semibold text-[#FF7A59] mb-1">Trigger</p>
                        <p className="text-[12px] text-[#999]">Cron chaque lundi a 8h (via Make ou n8n) OU trigger manuel via Slack (/report-hebdo).</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#4B5EFC] mb-1">Actions</p>
                        <ul className="space-y-1.5 text-[12px] text-[#999]">
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Extraction des KPI HubSpot via API (pipeline, deals, activites, conversions)</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Generation du rapport via Claude avec analyse narrative des tendances</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Envoi sur Slack dans #reporting avec les highlights et les alertes</li>
                          <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-1.5 shrink-0" />Archivage dans Notion avec historique pour comparaison semaine sur semaine</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-[#22C55E] mb-1">Exemple</p>
                        <p className="text-[12px] text-[#999]">Lundi 8h05, le rapport arrive sur Slack : &ldquo;Pipeline : 820K (+12% vs S-1). 4 deals en negotiation (&gt; 100K total). Win rate semaine : 28% (vs 24% moyenne). Alerte : 3 deals stales depuis &gt; 21 jours. Recommandation : prioriser DataFlow (45K) et NexTech (28K) qui montrent des signaux d&apos;engagement forts.&rdquo; Le manager lit en 2 minutes ce qui prenait 3h a produire.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p><strong className="text-white">Ce workflow est le plus impactant en termes de temps gagne.</strong> Un rapport hebdomadaire automatise qui prend 15 secondes au lieu de 3 heures, c&apos;est 150 heures par an rendues aux equipes. Et le rapport est plus precis, plus complet et plus actionnable parce qu&apos;il est genere a partir de donnees fraiches, pas d&apos;exports manuels approximatifs.</p>
                    <p>L&apos;etape suivante : connecter le rapport a un agent IA qui repond aux questions en langage naturel. &ldquo;Quel est le win rate par segment ce mois-ci ?&rdquo; Reponse en 3 secondes, sans ouvrir un dashboard.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Configurer ces workflows chez vous ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">Chez Ceres, on configure et optimise les workflows HubSpot pour les equipes B2B. Du lead nurturing au reporting automatise, on met en place les automatisations qui liberent du temps et ameliorent les resultats. Commencez par un audit gratuit de vos workflows actuels.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF7A59] text-white rounded-lg text-[13px] font-medium hover:bg-[#E86A4A] transition-colors">
                  Auditer vos workflows
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
