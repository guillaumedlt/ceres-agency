"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Brevo vs HubSpot : quel outil marketing choisir en 2026",
  description: "Comparatif complet Brevo (ex-Sendinblue) vs HubSpot en 2026 : email marketing, CRM, automation, SMS, pricing. Guide pour choisir le bon outil selon vos besoins.",
  author: { "@type": "Person", name: "Guillaume Delachet" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/brevo-vs-hubspot" },
  articleSection: "CRM & HubSpot",
  wordCount: 3400,
  inLanguage: "fr",
};

const sections = [
  { id: "intro", title: "Introduction" },
  { id: "email-marketing", title: "Email marketing" },
  { id: "crm-capabilities", title: "Capacites CRM" },
  { id: "automation", title: "Marketing automation" },
  { id: "sms-whatsapp", title: "SMS et WhatsApp" },
  { id: "landing-pages", title: "Landing pages" },
  { id: "pricing", title: "Comparatif tarifs" },
  { id: "integrations", title: "Integrations" },
  { id: "startups", title: "Pour les startups" },
  { id: "pme", title: "Pour les PME" },
  { id: "verdict", title: "Verdict final" },
];

const relatedArticles = [
  { title: "Sellsy vs HubSpot : comparatif complet pour PME", slug: "sellsy-vs-hubspot", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Marketing automation : 7 workflows HubSpot", slug: "marketing-automation-7-workflows-hubspot", category: "CRM & HubSpot", color: "#FF7A59" },
  { title: "HubSpot tarifs et prix 2026", slug: "hubspot-tarifs-prix-2026", category: "CRM & HubSpot", color: "#22C55E" },
];

export default function BrevoVsHubspotArticle() {
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
        <div className="h-full bg-[#4B5EFC] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* Decorative blobs */}
      <div className="hidden lg:block absolute top-[120px] left-[-180px] w-[400px] h-[400px] rounded-full bg-[#4B5EFC]/[0.03] blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute top-[600px] right-[-200px] w-[350px] h-[350px] rounded-full bg-[#22C55E]/[0.03] blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute top-[1200px] left-[-150px] w-[300px] h-[300px] rounded-full bg-[#FF7A59]/[0.03] blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute top-[1800px] right-[-180px] w-[350px] h-[350px] rounded-full bg-[#4B5EFC]/[0.03] blur-3xl pointer-events-none" />

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
                  <a href="https://twitter.com/intent/tweet?text=Brevo%20vs%20HubSpot%20comparatif%20marketing%202026&url=https://ceres.agency/blog/brevo-vs-hubspot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/brevo-vs-hubspot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Brevo vs HubSpot</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM &amp; HubSpot</Badge>
                <span className="text-[11px] text-[#CCC]">22 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Brevo vs HubSpot : quel outil marketing choisir en 2026
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Brevo (ex-Sendinblue) et HubSpot sont deux plateformes marketing incontournables en 2026. L&apos;une est francaise, abordable et axee sur l&apos;email et le SMS. L&apos;autre est le leader mondial du marketing inbound avec un ecosysteme complet. Ce comparatif analyse 15 criteres pour vous aider a choisir l&apos;outil adapte a vos besoins et a votre budget.
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
              {/* Section 1 : Introduction */}
              {/* ================================================================ */}
              <section id="intro" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=brevo.com&sz=32" alt="Brevo" className="w-5 h-5" />
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Deux champions, deux approches</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Brevo, anciennement Sendinblue, est une plateforme marketing francaise fondee en 2012 par Armand Thiberge. Rebaptisee Brevo en 2023, elle s&apos;est positionnee comme une alternative europeenne aux geants americains du marketing automation. Brevo compte aujourd&apos;hui plus de 500 000 clients dans 180 pays, avec un positionnement fort sur l&apos;email marketing, le SMS, le chat et le CRM a prix accessible.</p>
                    <p>HubSpot est la plateforme CRM et marketing leader mondiale, fondee en 2006 par Brian Halligan et Dharmesh Shah. Avec plus de 228 000 clients et un chiffre d&apos;affaires depassant 2 milliards de dollars, HubSpot est la reference du marketing inbound. Son ecosysteme complet (CRM, Marketing, Sales, Service, CMS, Operations) en fait une plateforme tout-en-un pour les entreprises ambitieuses.</p>
                    <p><strong className="text-[#111]">Le dilemme classique.</strong> Brevo est souvent le premier choix des entreprises qui debutent en marketing digital grace a son prix attractif et sa simplicite. HubSpot est le choix des entreprises qui veulent une plateforme complete et scalable. Mais en 2026, les deux outils ont considerablement evolue. Brevo a ajoute un CRM, un chatbot, des landing pages et du marketing automation. HubSpot a baisse ses prix d&apos;entree avec le plan Starter. La frontiere entre les deux s&apos;est reduite, ce qui rend le choix plus difficile.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { label: "Brevo", annee: "2012", siege: "Paris, France", clients: "500 000+", focus: "Email, SMS, Chat" },
                      { label: "HubSpot", annee: "2006", siege: "Boston, USA", clients: "228 000+", focus: "CRM + Marketing complet" },
                    ].map((t) => (
                      <div key={t.label} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[13px] font-semibold text-[#111] mb-2">{t.label}</p>
                        <div className="space-y-1.5 text-[11px] text-[#777]">
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC]" />Fonde en {t.annee}</div>
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC]" />{t.siege}</div>
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC]" />{t.clients} clients</div>
                          <div className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC]" />Focus : {t.focus}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 2 : Email marketing */}
              {/* ================================================================ */}
              <section id="email-marketing" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Email marketing : le coeur du comparatif</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Brevo excelle en email marketing.</strong> C&apos;est son ADN historique. L&apos;editeur drag-and-drop est intuitif et propose des dizaines de templates responsives. La gestion des listes est flexible avec une segmentation avancee basee sur le comportement (ouvertures, clics, achats). Brevo gere l&apos;optimisation du timing d&apos;envoi avec son algorithme d&apos;envoi predictif qui determine le meilleur moment pour chaque contact. La delivrabilite est excellente grace a une infrastructure IP dediee disponible des les plans intermediaires.</p>
                    <p><strong className="text-[#111]">Le pricing email de Brevo est imbattable.</strong> Brevo facture a l&apos;email envoye, pas au nombre de contacts. C&apos;est un avantage majeur pour les entreprises qui ont une grande base de contacts mais n&apos;envoient pas des campagnes quotidiennes. Vous pouvez avoir 100 000 contacts dans votre base et ne payer que pour les emails reellement envoyes. HubSpot facture au nombre de contacts marketing, ce qui peut devenir tres couteux a mesure que votre base grandit.</p>
                    <p><strong className="text-[#111]">HubSpot cote emailing.</strong> L&apos;editeur email de HubSpot est egalement performant avec un drag-and-drop moderne, des tokens de personnalisation avances (smart content, personnalisation par segment), des A/B tests natifs et une integration parfaite avec le CRM. La force de HubSpot est la contextualisation : vous pouvez personnaliser chaque email en fonction de la position du contact dans le pipeline, de ses interactions precedentes et de son score de lead. C&apos;est du marketing one-to-one a grande echelle.</p>
                    <p><strong className="text-[#111]">Tests A/B.</strong> Les deux outils proposent des tests A/B sur l&apos;objet et le contenu. HubSpot va plus loin avec des tests multivaries (jusqu&apos;a 5 variantes) et des tests adaptatifs qui distribuent automatiquement le trafic vers la variante gagnante. Brevo propose des tests A/B classiques a 2 variantes avec selection automatique du gagnant.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "300/j", label: "Emails gratuits Brevo (plan Free)", color: "#4B5EFC" },
                      { stat: "2 000", label: "Emails/mois HubSpot Free", color: "#FF7A59" },
                      { stat: "99.5%", label: "Taux de delivrabilite Brevo", color: "#22C55E" },
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
              {/* Section 3 : Capacites CRM */}
              {/* ================================================================ */}
              <section id="crm-capabilities" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Capacites CRM : la ou HubSpot domine</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le CRM de HubSpot est de loin superieur.</strong> C&apos;est le coeur de la plateforme HubSpot. Gestion des contacts avec historique complet des interactions (emails, appels, reunions, visites de pages, soumissions de formulaires), pipeline de ventes visuel avec vue Kanban, taches et rappels, sequences de prospection, playbooks, forecasting, objets custom (Enterprise) et reporting avance. Le CRM HubSpot est gratuit et deja tres complet dans sa version Free.</p>
                    <p><strong className="text-[#111]">Le CRM de Brevo est basique.</strong> Brevo a ajoute un CRM a sa plateforme en 2020, mais il reste un CRM d&apos;entree de gamme. Gestion des contacts et des entreprises, pipeline de ventes avec vue Kanban, taches basiques. C&apos;est suffisant pour une petite equipe avec un cycle de vente simple, mais insuffisant pour des besoins avances : pas de scoring de leads natif, pas de sequences automatisees, pas d&apos;objets custom, reporting commercial limite.</p>
                    <p><strong className="text-[#111]">Gestion des contacts.</strong> HubSpot unifie toutes les donnees d&apos;un contact en une seule fiche : interactions marketing (emails ouverts, pages visitees, formulaires soumis), interactions commerciales (appels, reunions, deals), interactions service (tickets). Brevo centralise principalement les interactions marketing (emails, SMS) avec un historique commercial plus basique.</p>
                    <p><strong className="text-[#111]">Si le CRM est strategique pour vous</strong>, c&apos;est-a-dire si vous avez une equipe commerciale, un cycle de vente structure et besoin de reporting avance, HubSpot est le choix evident. Si vous avez principalement besoin d&apos;une base de contacts pour vos campagnes marketing, le CRM de Brevo peut suffire.</p>
                  </div>

                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3 mt-6">Comparaison CRM</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="border-b border-[#E8E8E8]">
                          <th className="text-left py-2 pr-3 text-[#999] font-semibold">Fonctionnalite</th>
                          <th className="text-left py-2 pr-3 text-[#999] font-semibold">Brevo</th>
                          <th className="text-left py-2 text-[#999] font-semibold">HubSpot</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#555]">
                        {[
                          { feature: "Contacts illimites", brevo: "Oui (gratuit)", hubspot: "Oui (gratuit)" },
                          { feature: "Pipeline de ventes", brevo: "Basique (1 pipeline)", hubspot: "Avance (multi-pipelines)" },
                          { feature: "Lead scoring", brevo: "Non natif", hubspot: "Oui, multi-criteres" },
                          { feature: "Sequences email", brevo: "Non", hubspot: "Oui (Sales Pro)" },
                          { feature: "Objets custom", brevo: "Non", hubspot: "Oui (Enterprise)" },
                          { feature: "Forecasting", brevo: "Non", hubspot: "Oui (Pro+)" },
                          { feature: "Historique complet", brevo: "Partiel", hubspot: "Complet (marketing + sales + service)" },
                          { feature: "Reporting commercial", brevo: "Basique", hubspot: "Avance, cross-objets" },
                        ].map((row) => (
                          <tr key={row.feature} className="border-b border-[#F5F5F5]">
                            <td className="py-2 pr-3 font-medium text-[#111]">{row.feature}</td>
                            <td className="py-2 pr-3">{row.brevo}</td>
                            <td className="py-2">{row.hubspot}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 4 : Marketing automation */}
              {/* ================================================================ */}
              <section id="automation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Marketing automation : workflows et scenarios</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Brevo propose un editeur de workflows visuel.</strong> Depuis le rebranding, Brevo a beaucoup investi dans le marketing automation. L&apos;editeur visuel permet de creer des scenarios bases sur des declencheurs (ouverture d&apos;email, clic, visite de page, ajout a une liste, evenement custom) avec des actions (envoyer un email, envoyer un SMS, mettre a jour un attribut, ajouter a une liste, webhook). Les workflows Brevo sont suffisants pour les scenarios classiques : welcome series, abandon de panier, lead nurturing en 3-5 etapes, campagnes de reengagement.</p>
                    <p><strong className="text-[#111]">HubSpot est le roi du marketing automation.</strong> Les workflows HubSpot sont plus puissants sur tous les aspects : declencheurs plus nombreux (changement de propriete, score atteint, deal cree, ticket resolu, formulaire soumis), branchements conditionnels if/then avances, actions cross-hub (creer un deal dans le CRM, assigner un proprietaire, envoyer une notification interne, creer une tache), delais intelligents et boucles de retour. En Professional, vous avez acces a la segmentation RFM, aux listes actives basees sur des criteres complexes et au scoring comportemental.</p>
                    <p><strong className="text-[#111]">La difference se fait sur la complexite.</strong> Pour un scenario simple (email de bienvenue en 3 etapes), les deux outils font le travail. Pour un scenario complexe (nurturing multi-canal avec scoring, qualification automatique, assignation au commercial selon le territoire, notification Slack), HubSpot est nettement superieur. Si votre strategie repose sur des workflows complexes et cross-departement, HubSpot est le choix logique.</p>
                    <p><strong className="text-[#111]">Nombre de workflows.</strong> Brevo limite le nombre de workflows selon le plan. Le plan gratuit inclut quelques automations basiques. Les plans payants offrent des automations illimitees. HubSpot Professional offre 300 workflows, Enterprise 1 000. Pour la plupart des PME, ces limites ne sont pas un probleme.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 5 : SMS et WhatsApp */}
              {/* ================================================================ */}
              <section id="sms-whatsapp" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">SMS, WhatsApp et messagerie : l&apos;avantage Brevo</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Brevo est ne dans le multicanal.</strong> Contrairement a HubSpot qui reste fondamentalement un outil email-first, Brevo a integre le SMS, le WhatsApp et le chat des ses debuts. L&apos;envoi de SMS marketing est natif, avec une tarification a l&apos;unite competitive (environ 0.04 EUR par SMS en France). Les campagnes WhatsApp Business sont egalement natives, avec des templates valides par Meta, la possibilite d&apos;envoyer des messages enrichis (images, boutons, liens) et un suivi des conversions.</p>
                    <p><strong className="text-[#111]">Le chat Brevo.</strong> Brevo propose un widget de chat gratuit pour votre site web. Il inclut un chatbot basique avec des scenarios pre-configures, le routage vers un agent humain et l&apos;integration avec le CRM. C&apos;est un avantage pour les entreprises qui veulent un chat sur leur site sans payer un outil supplementaire comme Intercom ou Drift.</p>
                    <p><strong className="text-[#111]">HubSpot et le SMS.</strong> HubSpot a lance le SMS marketing en 2024 mais il reste plus jeune et plus cher que Brevo sur ce canal. Le SMS HubSpot est disponible a partir du Marketing Hub Professional et necessite des credits SMS supplementaires. L&apos;integration WhatsApp est disponible via des connecteurs tiers ou le hub Service. Le chat HubSpot est gratuit et performant, avec un chatbot plus avance que celui de Brevo (branchements conditionnels, qualification de leads, prise de rendez-vous).</p>
                    <p><strong className="text-[#111]">Scenarios multicanaux.</strong> Brevo permet de creer des workflows qui combinent email, SMS et WhatsApp dans le meme scenario. Par exemple : envoyer un email, attendre 3 jours, si non ouvert envoyer un SMS, si clic envoyer un WhatsApp avec une offre. HubSpot permet aussi le multicanal mais le SMS est moins mature et plus couteux.</p>
                  </div>

                  <div className="mt-5 space-y-2">
                    {[
                      { canal: "Email", brevo: "Natif, tres performant", hubspot: "Natif, tres performant", winner: "Egalite" },
                      { canal: "SMS", brevo: "Natif, 0.04 EUR/SMS", hubspot: "Disponible (Pro+), plus cher", winner: "Brevo" },
                      { canal: "WhatsApp", brevo: "Natif, templates Meta", hubspot: "Via connecteur tiers", winner: "Brevo" },
                      { canal: "Chat", brevo: "Gratuit, chatbot basique", hubspot: "Gratuit, chatbot avance", winner: "HubSpot" },
                      { canal: "Push notifications", brevo: "Oui (web push)", hubspot: "Non natif", winner: "Brevo" },
                    ].map((row) => (
                      <div key={row.canal} className="rounded-lg border border-[#F2F2F2] p-3 flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-[11px] font-semibold text-[#111]">{row.canal}</p>
                          <p className="text-[10px] text-[#999]">Brevo : {row.brevo}</p>
                          <p className="text-[10px] text-[#999]">HubSpot : {row.hubspot}</p>
                        </div>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${row.winner === "Brevo" ? "bg-[#4B5EFC]/10 text-[#4B5EFC]" : row.winner === "HubSpot" ? "bg-[#FF7A59]/10 text-[#FF7A59]" : "bg-[#999]/10 text-[#999]"}`}>{row.winner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 6 : Landing pages */}
              {/* ================================================================ */}
              <section id="landing-pages" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Landing pages et formulaires</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Brevo propose des landing pages.</strong> L&apos;editeur est drag-and-drop avec des templates pre-configures. C&apos;est suffisant pour creer des pages de capture basiques. Cependant, les options de personnalisation restent limitees par rapport a des outils specialises. Pas de smart content, pas d&apos;A/B testing natif sur les landing pages (seulement sur les emails), et le design est moins flexible que chez HubSpot.</p>
                    <p><strong className="text-[#111]">HubSpot est plus avance sur les landing pages.</strong> L&apos;editeur drag-and-drop est plus sophistique avec un smart content qui adapte le contenu selon le visiteur (pays, device, etape du funnel, liste d&apos;appartenance). Les A/B tests sont natifs, les formulaires sont progressifs (ils posent des questions differentes a chaque visite) et les landing pages sont integrees au reporting d&apos;attribution. Vous savez exactement combien de leads et combien de revenus chaque landing page a genere.</p>
                    <p><strong className="text-[#111]">Formulaires.</strong> Les formulaires Brevo sont basiques mais fonctionnels : champs texte, email, numero, liste deroulante, case a cocher. Les formulaires HubSpot sont plus avances avec des champs dependants (un champ qui change selon la reponse a un autre), des formulaires non-HubSpot collectes, du progressive profiling et une integration directe avec le CRM et les workflows.</p>
                    <p><strong className="text-[#111]">Notre avis.</strong> Si vous utilisez un CMS externe (WordPress, Webflow, Next.js) et avez simplement besoin de formulaires d&apos;inscription, Brevo suffit. Si les landing pages sont un element cle de votre strategie d&apos;acquisition (campagnes ads, content marketing), HubSpot offre des fonctionnalites significativement superieures.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 7 : Comparatif tarifs */}
              {/* ================================================================ */}
              <section id="pricing" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comparatif tarifs : l&apos;ecart de prix est reel</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Brevo est significativement moins cher.</strong> Le modele de tarification de Brevo est base sur le volume d&apos;emails envoyes, pas sur le nombre de contacts. C&apos;est un avantage majeur. Le plan gratuit permet d&apos;envoyer 300 emails par jour avec un nombre de contacts illimite. Le plan Starter commence a 25 EUR/mois pour 20 000 emails. Le plan Business a 65 EUR/mois ajoute le marketing automation avance, les landing pages et le reporting.</p>
                    <p><strong className="text-[#111]">HubSpot coute plus cher, surtout en croissance.</strong> Le Marketing Hub Free est limite (2 000 emails/mois, branding HubSpot). Le Starter coute 20 EUR/mois pour 1 000 contacts marketing. Le Professional coute 880 EUR/mois pour 2 000 contacts marketing, puis 250 EUR par tranche de 5 000 contacts supplementaires. Pour une base de 20 000 contacts, le Marketing Hub Pro coute environ 1 780 EUR/mois. C&apos;est un ordre de grandeur different de Brevo.</p>
                    <p><strong className="text-[#111]">Le vrai calcul.</strong> Pour une startup avec 5 000 contacts qui envoie 40 000 emails par mois : Brevo Business coute environ 65 EUR/mois. HubSpot Marketing Hub Professional coute environ 1 130 EUR/mois. L&apos;ecart est de 17x. Mais HubSpot inclut le CRM complet, les workflows avances, les landing pages, le reporting d&apos;attribution et l&apos;ecosysteme entier. Brevo est un outil marketing. HubSpot est une plateforme de croissance.</p>
                  </div>

                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3 mt-6">Tarifs pour 10 000 contacts</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="border-b border-[#E8E8E8]">
                          <th className="text-left py-2 pr-3 text-[#999] font-semibold">Plan</th>
                          <th className="text-left py-2 pr-3 text-[#999] font-semibold">Brevo</th>
                          <th className="text-left py-2 text-[#999] font-semibold">HubSpot</th>
                        </tr>
                      </thead>
                      <tbody className="text-[#555]">
                        {[
                          { plan: "Gratuit", brevo: "300 emails/jour, contacts illimites", hubspot: "2 000 emails/mois, CRM basique" },
                          { plan: "Entree de gamme", brevo: "25 EUR/mois (Starter, 20k emails)", hubspot: "20 EUR/mois (Starter, 1 000 contacts)" },
                          { plan: "Marketing avance", brevo: "65 EUR/mois (Business)", hubspot: "880+ EUR/mois (Professional)" },
                          { plan: "Contacts illimites", brevo: "Inclus dans tous les plans", hubspot: "250 EUR / 5 000 contacts (Pro)" },
                          { plan: "SMS inclus", brevo: "Credits SMS a acheter", hubspot: "Credits SMS a acheter (Pro+)" },
                        ].map((row) => (
                          <tr key={row.plan} className="border-b border-[#F5F5F5]">
                            <td className="py-2 pr-3 font-medium text-[#111]">{row.plan}</td>
                            <td className="py-2 pr-3">{row.brevo}</td>
                            <td className="py-2">{row.hubspot}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 8 : Integrations */}
              {/* ================================================================ */}
              <section id="integrations" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Integrations et ecosysteme</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">HubSpot domine sur les integrations.</strong> Le marketplace HubSpot compte plus de 1 500 integrations natives : Salesforce, Shopify, WordPress, Slack, Zoom, Calendly, Stripe, LinkedIn Sales Navigator, Google Ads, Facebook Ads et des centaines d&apos;autres. L&apos;API est ouverte, bien documentee et utilisee par une large communaute de developpeurs. Pour les besoins specifiques, Zapier et Make offrent des milliers de connecteurs supplementaires.</p>
                    <p><strong className="text-[#111]">Brevo a un ecosysteme plus modeste.</strong> Brevo propose environ 60 integrations natives : Shopify, WooCommerce, WordPress, Salesforce, Google Analytics, Facebook Ads. L&apos;API est correcte mais moins riche que celle de HubSpot. Pour les integrations non-natives, Brevo fonctionne bien avec Zapier et Make. Mais si vous avez besoin d&apos;integrations profondes avec des outils specifiques (ERP, BI, outils metiers), HubSpot sera plus flexible.</p>
                    <p><strong className="text-[#111]">Integration e-commerce.</strong> Brevo a des plugins natifs pour Shopify, WooCommerce, PrestaShop et Magento. L&apos;integration est pensee pour le e-commerce : suivi des achats, abandon de panier, recommandations produits. HubSpot a egalement des integrations e-commerce mais elles sont plus orientees B2B. Pour le e-commerce pur, Brevo a un leger avantage.</p>
                    <p><strong className="text-[#111]">Integration CRM existant.</strong> Si vous avez deja un CRM (Salesforce, Pipedrive, Zoho) et cherchez uniquement un outil marketing, Brevo s&apos;integre bien comme couche marketing au-dessus de votre CRM existant. HubSpot peut aussi s&apos;integrer a un CRM tiers, mais la plateforme est concue pour fonctionner avec son propre CRM. L&apos;experience est optimale quand tout est dans HubSpot.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 9 : Pour les startups */}
              {/* ================================================================ */}
              <section id="startups" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pour les startups : demarrer sans se ruiner</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Les startups early-stage devraient considerer Brevo.</strong> Quand le budget est serre et que la priorite est de mettre en place des campagnes email, des sequences de bienvenue et un premier niveau d&apos;automation, Brevo offre un excellent rapport qualite-prix. Le plan gratuit est fonctionnel pour demarrer, et le plan Business a 65 EUR/mois couvre 90% des besoins marketing d&apos;une startup pre-Series A.</p>
                    <p><strong className="text-[#111]">Mais attention au programme HubSpot for Startups.</strong> HubSpot propose un programme startup qui offre jusqu&apos;a 90% de reduction la premiere annee, 50% la deuxieme et 25% la troisieme. Si votre startup est eligible (incubateur partenaire, moins de 2 ans, moins de 2M de levee), vous pouvez obtenir le Marketing Hub Professional pour moins de 100 EUR/mois la premiere annee. C&apos;est un deal exceptionnel qui change completement le calcul economique.</p>
                    <p><strong className="text-[#111]">Le piege du switching cost.</strong> Si vous demarrez avec Brevo et que votre startup decolle, vous devrez eventuellement migrer vers un outil plus complet (souvent HubSpot). La migration coute du temps et de l&apos;argent, et vous perdrez l&apos;historique des workflows. Si vous savez que vos ambitions marketing sont elevees, commencer directement avec HubSpot via le programme startup peut etre plus judicieux a long terme.</p>
                    <p><strong className="text-[#111]">Notre recommandation pour les startups.</strong> Si vous etes eligible au programme HubSpot for Startups, foncez. Sinon, commencez avec Brevo Business pour les 12-18 premiers mois, puis evaluez si vos besoins justifient une migration vers HubSpot quand votre budget marketing le permet.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 10 : Pour les PME */}
              {/* ================================================================ */}
              <section id="pme" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pour les PME : le choix strategique</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">PME axees marketing et acquisition.</strong> Si votre croissance depend de l&apos;acquisition de leads (content marketing, ads, SEO, events), HubSpot Marketing Hub Professional est le meilleur investissement. Les workflows, le scoring, le reporting d&apos;attribution et l&apos;integration CRM-marketing justifient le cout supplementaire. C&apos;est l&apos;outil qui vous permettra de mesurer le ROI de chaque action marketing et d&apos;optimiser continuellement votre funnel.</p>
                    <p><strong className="text-[#111]">PME axees communication et newsletters.</strong> Si votre besoin est principalement de communiquer avec votre base existante (newsletters, promotions, evenements, mises a jour), Brevo est le meilleur choix. L&apos;email marketing est excellent, le prix est imbattable et l&apos;ajout de SMS et WhatsApp permet un marketing multicanal sans surcoute majeur.</p>
                    <p><strong className="text-[#111]">PME e-commerce.</strong> Pour le e-commerce, Brevo a un avantage sur l&apos;integration native avec les plateformes (Shopify, PrestaShop, WooCommerce) et le marketing transactionnel (emails de confirmation, relance de panier). HubSpot est plus adapte au e-commerce B2B ou aux D2C a panier eleve qui ont besoin de nurturing complexe.</p>
                    <p><strong className="text-[#111]">PME avec equipe commerciale structuree.</strong> Si vous avez une equipe de 5 commerciaux ou plus avec un processus de vente defini, HubSpot est le seul choix serieux. Le CRM HubSpot integre avec le marketing cree un alignement sales-marketing qui n&apos;est pas possible avec Brevo seul.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 11 : Verdict final */}
              {/* ================================================================ */}
              <section id="verdict" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Verdict final : scoring et recommandation</h2>
                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75] mb-6">
                    <p>Voici notre evaluation sur 10 pour chaque categorie, basee sur notre experience d&apos;accompagnement de PME francaises en 2026.</p>
                  </div>

                  <div className="space-y-2">
                    {[
                      { critere: "Email marketing", brevo: 9, hubspot: 9 },
                      { critere: "CRM", brevo: 4, hubspot: 10 },
                      { critere: "Marketing automation", brevo: 6, hubspot: 10 },
                      { critere: "SMS et WhatsApp", brevo: 9, hubspot: 5 },
                      { critere: "Landing pages", brevo: 5, hubspot: 8 },
                      { critere: "Pricing", brevo: 10, hubspot: 5 },
                      { critere: "Integrations", brevo: 5, hubspot: 10 },
                      { critere: "Reporting", brevo: 4, hubspot: 9 },
                      { critere: "Facilite d&apos;utilisation", brevo: 8, hubspot: 8 },
                      { critere: "Scalabilite", brevo: 5, hubspot: 10 },
                    ].map((row) => (
                      <div key={row.critere} className="rounded-xl border border-[#333] bg-[#1A1A1A] p-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] font-medium text-white" dangerouslySetInnerHTML={{ __html: row.critere }} />
                          <div className="flex items-center gap-3 text-[11px]">
                            <span className="text-[#4B5EFC] font-semibold">Brevo {row.brevo}/10</span>
                            <span className="text-[#FF7A59] font-semibold">HubSpot {row.hubspot}/10</span>
                          </div>
                        </div>
                        <div className="flex gap-1 h-1.5">
                          <div className="h-full rounded-full bg-[#4B5EFC]" style={{ width: `${row.brevo * 10}%` }} />
                          <div className="flex-1" />
                        </div>
                        <div className="flex gap-1 h-1.5 mt-1">
                          <div className="h-full rounded-full bg-[#FF7A59]" style={{ width: `${row.hubspot * 10}%` }} />
                          <div className="flex-1" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p><strong className="text-white">Choisissez Brevo si :</strong> votre budget marketing est inferieur a 200 EUR/mois, vous avez principalement besoin d&apos;email et de SMS, vous n&apos;avez pas d&apos;equipe commerciale structuree, ou vous avez deja un CRM tiers et cherchez uniquement un outil marketing.</p>
                    <p><strong className="text-white">Choisissez HubSpot si :</strong> le marketing est un levier strategique de croissance, vous avez une equipe commerciale a aligner avec le marketing, vous avez besoin de reporting avance et d&apos;attribution, ou vous visez une croissance rapide et avez besoin de scalabilite.</p>
                    <p><strong className="text-white">L&apos;option complementaire.</strong> Certaines entreprises utilisent les deux : Brevo pour le transactionnel et les SMS, HubSpot pour le marketing automation et le CRM. C&apos;est viable avec une synchronisation via Zapier, mais cela ajoute de la complexite.</p>
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
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Vous hesitez entre Brevo et HubSpot ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On analyse vos besoins, votre budget et vos objectifs pour vous recommander l&apos;outil adapte. Conseil gratuit de 30 minutes.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />Reserver un appel
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
