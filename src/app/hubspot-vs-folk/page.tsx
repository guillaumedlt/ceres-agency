"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HubSpot vs Folk CRM : quel CRM choisir ?",
  description: "Comparatif HubSpot vs Folk CRM. Interface, prix, scalabilite, automatisation. Le verdict honnete pour startups et PME.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/hubspot-vs-folk" },
  articleSection: "Comparatif CRM",
  wordCount: 3000,
  inLanguage: "fr",
};

const sections = [
  { id: "introduction", title: "Le choix" },
  { id: "comparatif-rapide", title: "Comparatif rapide" },
  { id: "pour-qui-hubspot", title: "Pour qui HubSpot" },
  { id: "pour-qui-folk", title: "Pour qui Folk" },
  { id: "interface-ux", title: "Interface & UX" },
  { id: "scalabilite", title: "Scalabilite" },
  { id: "verdict", title: "Notre verdict" },
  { id: "ia-dans-tout-ca", title: "Et l'IA ?" },
];

const relatedArticles = [
  { title: "HubSpot vs Monday CRM : comparatif complet", slug: "/hubspot-vs-monday-crm", category: "Comparatif CRM", color: "#FF7A59" },
  { title: "HubSpot vs Salesforce : comparatif complet 2026", slug: "/hubspot-vs-salesforce", category: "Comparatif CRM", color: "#6D00CC" },
  { title: "Agence HubSpot : notre approche", slug: "/agence-hubspot", category: "HubSpot", color: "#D4A27F" },
];

const comparisonTable = [
  { critere: "Prix entree", hubspot: "Gratuit (CRM complet), 15 EUR/mois (Starter)", folk: "Gratuit (100 contacts), 20 USD/user/mois (Standard)" },
  { critere: "UX / Interface", hubspot: "CRM structure, interface completa mais riche", folk: "Interface epuree, UX type Notion, prise en main 5 min" },
  { critere: "Automatisation", hubspot: "Workflows avances, sequences, scoring, branching", folk: "Automatisations basiques, enrichissement auto, magic fields" },
  { critere: "Reporting", hubspot: "Custom report builder multi-objets, dashboards avances", folk: "Reporting minimal, vues filtrees, pas de dashboards avances" },
  { critere: "Scalabilite", hubspot: "1 a 500+ users, Pro/Enterprise pour equipes structurees", folk: "1 a 20-30 users, limites sur les volumes" },
  { critere: "IA integree", hubspot: "Breeze : agents, copilot, scoring, generation (inclus)", folk: "Enrichissement IA, magic fields, deduplication" },
  { critere: "Integrations", hubspot: "1 500+ integrations natives, API complete", folk: "50+ integrations, syncs Gmail/Outlook/LinkedIn" },
  { critere: "Support", hubspot: "Chat, email, telephone (Pro+), Academy", folk: "Email, documentation, communaute" },
];

export default function HubSpotVsFolkPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("introduction");

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
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "18%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "32%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "48%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "64%", width: 280, height: 280, borderRadius: "50%", background: "#D4A27F", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "80%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    {s.title}
                  </a>
                ))}
              </nav>
              <div className="mt-8 pt-6 border-t border-[#F2F2F2]">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Partager</p>
                <div className="flex gap-2">
                  <a href="https://twitter.com/intent/tweet?text=HubSpot%20vs%20Folk%20CRM%20%3A%20quel%20CRM%20choisir%20%3F&url=https://ceres.agency/hubspot-vs-folk" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/hubspot-vs-folk" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <span className="text-[#666]">HubSpot vs Folk CRM</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Comparatif CRM</Badge>
                <span className="text-[11px] text-[#CCC]">11 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                HubSpot vs Folk CRM : quel CRM choisir en 2026 ?
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Folk CRM fait le buzz chez les startups francaises. Interface elegante, prise en main instantanee, et un positionnement &laquo; anti-CRM usine a gaz &raquo; qui parle. Mais peut-il rivaliser avec HubSpot quand l&apos;equipe grandit ? Comparatif sans complaisance.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>2 avril 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 -- Introduction */}
              <section id="introduction" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Introduction : le CRM qui veut tout changer</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Folk est ne d&apos;une frustration partagee par beaucoup de fondateurs : les CRM sont trop compliques. Trop de champs, trop de menus, trop de configuration avant d&apos;envoyer le premier email. Folk prend le contrepied total. L&apos;interface ressemble a Notion, la prise en main se fait en 5 minutes, et l&apos;enrichissement des contacts est automatique. Pour un fondateur de startup qui gere tout seul ses 50 premiers prospects, c&apos;est un soulagement.</p>
                    <p>HubSpot, a l&apos;inverse, est un CRM complet. La courbe d&apos;apprentissage est plus longue, mais ce que vous obtenez en retour est incomparablement plus riche : automatisation, reporting, IA, marketing, service client. Tout sur une seule plateforme. C&apos;est un investissement, pas un gadget.</p>
                    <p>Le vrai sujet n&apos;est pas &laquo; lequel est le plus beau &raquo;. C&apos;est &laquo; lequel vous servira encore dans 2 ans &raquo;. Folk est excellent pour demarrer. Mais les startups qui reussissent grandissent. Et quand elles grandissent, elles ont besoin d&apos;outils qui grandissent avec elles. C&apos;est la que la comparaison devient interessante.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 -- Comparatif rapide */}
              <section id="comparatif-rapide" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#222]">
                  <h2 className="text-[17px] font-semibold text-white mb-2">Comparatif rapide : 8 criteres essentiels</h2>
                  <p className="text-[11px] text-white/40 mb-6">Comparaison basee sur les offres en vigueur en avril 2026.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-[11px] font-semibold text-white/60 pb-3 pr-4 w-[22%]">Critere</th>
                          <th className="text-[11px] font-semibold text-[#FF7A59] pb-3 pr-4 w-[39%]">HubSpot</th>
                          <th className="text-[11px] font-semibold text-[#7C5CFC] pb-3 w-[39%]">Folk CRM</th>
                        </tr>
                      </thead>
                      <tbody>
                        {comparisonTable.map((row, i) => (
                          <tr key={i} className="border-b border-white/5">
                            <td className="text-[11px] font-medium text-white/80 py-3 pr-4">{row.critere}</td>
                            <td className="text-[10px] text-white/50 py-3 pr-4">{row.hubspot}</td>
                            <td className="text-[10px] text-white/50 py-3">{row.folk}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 -- Pour qui HubSpot */}
              <section id="pour-qui-hubspot" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#FF7A59] flex items-center justify-center text-white text-[12px] font-bold">H</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Pour qui HubSpot est le meilleur choix</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Des que votre equipe depasse 3-4 commerciaux, HubSpot prend tout son sens. Pas parce que Folk ne &laquo; marche plus &raquo;, mais parce que les besoins changent. Vous avez besoin de savoir qui traite quel deal, de mesurer les performances individuelles, d&apos;automatiser l&apos;assignation, de scorer les leads. Folk n&apos;a pas ces fonctionnalites. HubSpot si.</p>
                    <p>Si le marketing fait partie de votre strategie d&apos;acquisition (inbound, content, SEO, email nurturing), HubSpot est imbattable. Le Marketing Hub est connecte nativement au CRM. Un visiteur qui telecharge un guide sur votre site devient un contact enrichi, score et nourri automatiquement. Folk ne fait pas de marketing automation.</p>
                    <p>Pour les PME qui veulent un outil perenne, HubSpot evite le scenario classique : adopter un CRM leger, atteindre ses limites en 12 mois, migrer tout vers un outil plus complet, perdre 2 mois de productivite. En commencant par HubSpot (meme gratuit), vous evitez cette migration douloureuse.</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "Equipe commerciale de 4+ personnes avec des roles differencies",
                      "Strategie d'acquisition inbound (content, SEO, nurturing)",
                      "Besoin de reporting avance et de visibilite sur le pipeline",
                      "Vision a 2-3 ans : un outil qui grandit avec l'entreprise",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#FFF7ED] border border-[#FED7AA]">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#FF7A59]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className="text-[11px] text-[#555]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 -- Pour qui Folk */}
              <section id="pour-qui-folk" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#7C5CFC] flex items-center justify-center text-white text-[12px] font-bold">F</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Pour qui Folk CRM est le meilleur choix</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pour un fondateur solo ou une equipe de 2-3 personnes en phase d&apos;exploration, Folk est remarquable. L&apos;enrichissement automatique des contacts (depuis LinkedIn, email, site web) fait gagner un temps precieux. Vous importez un profil LinkedIn, Folk recupere l&apos;email, le poste, l&apos;entreprise, le chiffre d&apos;affaires. En un clic. C&apos;est magique quand on sort d&apos;un tableur Google Sheets.</p>
                    <p>L&apos;interface de Folk est objectivement superieure a celle de HubSpot en termes de simplicite. C&apos;est un vrai argument si votre equipe est allergique aux outils complexes. Un commercial junior sera productif en 30 minutes sur Folk. Sur HubSpot, comptez 2-3 heures de familiarisation (meme si l&apos;investissement se rentabilise vite).</p>
                    <p>Si votre principal canal de prospection est LinkedIn et l&apos;email a froid, Folk a un avantage de niche. L&apos;extension Chrome pour capturer les profils LinkedIn, les sequences email integrees, et l&apos;enrichissement automatique forment un workflow de prospection outbound fluide pour les petits volumes (50-100 prospects/semaine).</p>
                  </div>
                  <div className="mt-6 space-y-2">
                    {[
                      "Fondateur solo ou equipe de 1-3 personnes en early stage",
                      "Prospection principalement via LinkedIn et email a froid",
                      "Besoin d'un outil simple, beau, et operationnel en 10 minutes",
                      "Volume de contacts limite (moins de 1 000 contacts actifs)",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F5F0FF] border border-[#E8DEFF]">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#7C5CFC]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className="text-[11px] text-[#555]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 -- Interface & UX */}
              <section id="interface-ux" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#4B5EFC] flex items-center justify-center text-white text-[12px] font-bold">01</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Interface et UX : la beaute ne fait pas tout</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Folk a l&apos;une des plus belles interfaces du marche CRM. Ce n&apos;est pas un detail marketing, c&apos;est un vrai avantage fonctionnel. L&apos;interface type Notion, avec ses vues en tableau, en liste et en kanban, est immediatement comprehensible. Pas de jargon CRM, pas de menu a 5 niveaux. Vous ouvrez l&apos;outil, vous comprenez. C&apos;est rare dans l&apos;industrie du CRM.</p>
                    <p>HubSpot a une interface plus dense. Il y a plus de menus, plus d&apos;options, plus de configurations possibles. Au premier abord, ca peut intimider. Mais cette densite est le reflet de la profondeur fonctionnelle. Chaque menu correspond a une fonctionnalite que vous utiliserez quand votre equipe grandira. Et HubSpot a fait un gros travail de simplification ces deux dernieres annees : le nouveau dashboard, la navigation refaite, les guided workflows.</p>
                    <p>Le piege classique : choisir un CRM pour sa beaute et decouvrir ses limites 6 mois plus tard. Folk est beau, mais vous ne pouvez pas personnaliser les pipelines en profondeur, creer des proprietes conditionnelles, ou construire des vues multi-objets complexes. HubSpot est moins &laquo; Instagram-friendly &raquo;, mais il fait ce que vous lui demandez, meme quand la demande devient complexe.</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                      <p className="text-[11px] font-semibold text-[#FF7A59] mb-2">UX HubSpot</p>
                      <ul className="space-y-1.5 text-[10px] text-[#666]">
                        <li>Interface complete et structuree</li>
                        <li>Courbe d&apos;apprentissage : 2-3h</li>
                        <li>Personnalisation avancee des vues</li>
                        <li>Navigation contextuelle intelligente</li>
                        <li>Mobile app complete</li>
                      </ul>
                    </div>
                    <div className="p-4 rounded-xl bg-[#FAFAFA] border border-[#F0F0F0]">
                      <p className="text-[11px] font-semibold text-[#7C5CFC] mb-2">UX Folk</p>
                      <ul className="space-y-1.5 text-[10px] text-[#666]">
                        <li>Interface minimale type Notion</li>
                        <li>Prise en main : 5-10 min</li>
                        <li>Vues tableau, liste, kanban</li>
                        <li>Drag &amp; drop intuitif</li>
                        <li>Extension Chrome LinkedIn</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 -- Scalabilite */}
              <section id="scalabilite" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-[#6D00CC] flex items-center justify-center text-white text-[12px] font-bold">02</div>
                    <h2 className="text-[17px] font-semibold text-[#111]">Scalabilite : ou Folk atteint ses limites</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est le point crucial de la comparaison. Folk fonctionne tres bien avec 200-500 contacts et 2-3 utilisateurs. Mais quand les volumes augmentent, les frictions apparaissent. Pas de workflows multi-etapes, pas de scoring automatise, pas de segmentation avancee. Vous finissez par compenser les lacunes de l&apos;outil avec du travail manuel ou des outils tiers.</p>
                    <p>A 1 000+ contacts et 5+ utilisateurs, les limites deviennent structurelles. Qui traite quel lead ? Comment mesurer les performances ? Comment s&apos;assurer que les leads chauds sont traites en priorite ? Folk n&apos;a pas de reponse native a ces questions. HubSpot les resout avec des workflows de rotation, du lead scoring, des files d&apos;attente et des dashboards par commercial.</p>
                    <p>Le scenario qu&apos;on voit regulierement : une startup adopte Folk, croit rapidement, et se retrouve 12-18 mois plus tard a migrer vers HubSpot dans l&apos;urgence, en pleine phase de scale. La migration n&apos;est jamais agreable. Les donnees sont fragmentees, les processus sont a reconstruire, l&apos;equipe perd 4-6 semaines de productivite. C&apos;est un cout cache considerable.</p>
                  </div>
                  <div className="mt-6 rounded-xl border border-[#E0E0E0] overflow-hidden">
                    <div className="bg-[#111] px-5 py-3">
                      <span className="text-[12px] font-semibold text-white">Scalabilite par taille d&apos;equipe</span>
                    </div>
                    <div className="bg-white p-5 space-y-3">
                      {[
                        { stade: "1-3 users, 0-500 contacts", folk: "Excellent", hubspot: "Bon (CRM gratuit suffit)", folkColor: "#22C55E", hubspotColor: "#22C55E" },
                        { stade: "4-10 users, 500-2000 contacts", folk: "Limites visibles", hubspot: "Ideal (Starter/Pro)", folkColor: "#F59E0B", hubspotColor: "#22C55E" },
                        { stade: "10-30 users, 2000-10000 contacts", folk: "Insuffisant", hubspot: "Parfait (Pro)", folkColor: "#EF4444", hubspotColor: "#22C55E" },
                        { stade: "30+ users, 10000+ contacts", folk: "Non adapte", hubspot: "Enterprise", folkColor: "#EF4444", hubspotColor: "#22C55E" },
                      ].map((row) => (
                        <div key={row.stade} className="flex items-center justify-between py-2 border-b border-[#F5F5F5] last:border-0">
                          <span className="text-[11px] text-[#555] w-[40%]">{row.stade}</span>
                          <div className="flex items-center gap-6">
                            <span className="text-[10px] font-semibold w-28 text-center" style={{ color: row.folkColor }}>{row.folk}</span>
                            <span className="text-[10px] font-semibold w-28 text-center" style={{ color: row.hubspotColor }}>{row.hubspot}</span>
                          </div>
                        </div>
                      ))}
                      <div className="flex items-center justify-between pt-1 text-[9px] text-[#BBB]">
                        <span></span>
                        <div className="flex items-center gap-6">
                          <span className="w-28 text-center">Folk</span>
                          <span className="w-28 text-center">HubSpot</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 -- Verdict */}
              <section id="verdict" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#222]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre verdict</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Folk est un excellent outil de prospection pour les fondateurs et les toutes petites equipes. L&apos;interface est une reussite, l&apos;enrichissement automatique est bluffant, et la prise en main est la plus rapide du marche. Si vous etes seul, que vous prospectez via LinkedIn, et que vous gerez moins de 500 contacts, Folk est un choix pertinent.</p>
                    <p>Mais il ne faut pas confondre un outil de prospection avec un CRM. Un CRM gere le cycle de vente complet : qualification, nurturing, closing, onboarding client, upsell, reporting, prevision. Sur ces dimensions, Folk est encore tres jeune. Et la startup qui a leve, qui recrute et qui scale aura besoin de ces fonctionnalites bien plus vite qu&apos;elle ne le pense.</p>
                    <p>Notre recommandation : si votre entreprise a vocation a grandir (et si vous lisez cet article, c&apos;est probablement le cas), commencez directement par HubSpot CRM gratuit. C&apos;est aussi rapide a prendre en main que Folk pour les bases, et vous n&apos;aurez jamais a migrer. La dette technique evitee vaut largement les 2 heures supplementaires de prise en main initiale.</p>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#FF7A59]" />
                        <span className="text-[12px] font-semibold text-white">HubSpot gagne pour</span>
                      </div>
                      <p className="text-[10px] text-white/40 leading-[1.5]">Equipes 4+, cycles de vente structures, marketing + ventes, reporting, scalabilite, IA integree.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-[#7C5CFC]" />
                        <span className="text-[12px] font-semibold text-white">Folk gagne pour</span>
                      </div>
                      <p className="text-[10px] text-white/40 leading-[1.5]">Fondateur solo, prospection LinkedIn, UX minimale, enrichissement auto, petits volumes.</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 -- Et l'IA dans tout ca ? */}
              <section id="ia-dans-tout-ca" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Et l&apos;IA dans tout ca ?</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Folk a integre l&apos;IA de maniere ciblee : enrichissement automatique, magic fields qui completent les informations manquantes, deduplication intelligente. C&apos;est bien fait et utile au quotidien. Mais ca reste de l&apos;IA &laquo; utilitaire &raquo;, au service de la data quality.</p>
                    <p>HubSpot Breeze est une autre dimension. Scoring predictif qui analyse des centaines de signaux pour prioriser vos leads. Agents IA autonomes qui traitent les demandes entrantes. Copilot qui redige vos emails, resume vos appels, et suggere les prochaines actions. Conversation intelligence qui analyse vos calls et identifie les patterns gagnants. Tout est natif, tout est inclus dans les licences Pro/Enterprise.</p>
                    <p>L&apos;enjeu de fond : l&apos;IA dans un CRM n&apos;est utile que si le CRM contient suffisamment de donnees pour l&apos;alimenter. Plus votre CRM est complet (historique, interactions, scoring, marketing, service), plus l&apos;IA est pertinente. Un CRM minimaliste avec 200 contacts offre peu de matiere a l&apos;IA. C&apos;est un cercle vertueux qui favorise structurellement les plateformes completes comme HubSpot.</p>
                  </div>
                  <div className="mt-5 p-4 rounded-xl bg-[#F5F0FF] border border-[#E8DEFF]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[12px] font-semibold text-[#111] mb-1">L&apos;IA au service de votre CRM</p>
                        <p className="text-[10px] text-[#666]">On deploie des agents IA connectes a HubSpot qui automatisent prospection, enrichissement et scoring.</p>
                      </div>
                      <Link href="/agents-ia" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#6D00CC] text-white text-[11px] font-medium hover:bg-[#5A00AA] transition-colors shrink-0">
                        Agents IA
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* Related articles */}
              <section className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-7 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[14px] font-semibold text-[#111] mb-4">Articles lies</h2>
                  <div className="space-y-2">
                    {relatedArticles.map((a) => (
                      <Link key={a.slug} href={a.slug} className="flex items-center justify-between p-3 rounded-lg hover:bg-[#FAFAFA] transition-colors group">
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
                <div className="rounded-2xl p-6 md:p-10 text-center" style={{ background: "linear-gradient(135deg, #FF7A59 0%, #FF9A7A 100%)" }}>
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-3">Besoin d&apos;aide pour choisir ?</h2>
                  <p className="text-[13px] text-white/80 mb-6 max-w-[420px] mx-auto">On vous aide a evaluer votre besoin CRM en 30 minutes. Gratuit, sans engagement, avec un avis honnete.</p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#FF7A59]" />Prendre rendez-vous
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
