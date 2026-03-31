"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HubSpot vs Dynamics 365 : comparatif complet en 2026",
  description: "Comparaison detaillee HubSpot vs Microsoft Dynamics 365 en 2026 : interface, CRM, marketing automation, service client, IA (Copilot vs Breeze), pricing, integrations, implementation et verdict.",
  author: { "@type": "Person", name: "Guillaume Delachet" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/hubspot-vs-dynamics-365-comparatif" },
  articleSection: "CRM & HubSpot",
  wordCount: 4000,
  inLanguage: "fr",
};

const sections = [
  { id: "intro", title: "Deux ecosystemes opposes" },
  { id: "interface-ux", title: "Interface et UX" },
  { id: "fonctionnalites-crm", title: "Fonctionnalites CRM" },
  { id: "marketing-automation", title: "Marketing automation" },
  { id: "service-support", title: "Service et support client" },
  { id: "ia-capabilities", title: "IA : Copilot vs Breeze" },
  { id: "pricing", title: "Comparatif des prix" },
  { id: "integrations", title: "Integrations et ecosysteme" },
  { id: "implementation", title: "Implementation et time-to-value" },
  { id: "pour-qui", title: "Pour qui quel outil" },
  { id: "migration", title: "Guide de migration" },
  { id: "verdict", title: "Notre verdict" },
];

const relatedArticles = [
  { title: "HubSpot vs Salesforce : le comparatif honnete en 2026", slug: "hubspot-vs-salesforce-comparatif", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Migration CRM : comment changer de CRM sans tout casser", slug: "migration-crm-guide-complet", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "CRM pour PME en 2026 : le guide pour bien choisir", slug: "crm-pme-2026", category: "CRM & HubSpot", color: "#4B5EFC" },
];

export default function HubSpotVsDynamics365Article() {
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

      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "4%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "14%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 260, height: 260, borderRadius: "50%", background: "#00A4EF", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "55%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />

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
                  <a href="https://twitter.com/intent/tweet?text=HubSpot%20vs%20Dynamics%20365%20comparatif%202026&url=https://ceres.agency/blog/hubspot-vs-dynamics-365-comparatif" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/hubspot-vs-dynamics-365-comparatif" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">HubSpot vs Dynamics 365</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM &amp; HubSpot</Badge>
                <span className="text-[11px] text-[#CCC]">18 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                HubSpot vs Dynamics 365 : comparatif complet en 2026
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                HubSpot et Microsoft Dynamics 365 sont deux visions radicalement differentes du CRM. L&apos;un mise sur la simplicite et l&apos;experience all-in-one. L&apos;autre mise sur l&apos;integration native avec l&apos;ecosysteme Microsoft et la puissance enterprise. Nous avons deploye les deux chez nos clients B2B. Voici notre comparatif critere par critere, sans parti pris, pour vous aider a faire le bon choix.
              </p>
              <div className="flex items-center gap-4 text-[12px] text-[#999]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">GD</div>
                  <span>Par <strong className="text-[#111]">Guillaume Delachet</strong></span>
                </div>
                <span>31 mars 2026</span>
              </div>
            </header>

            <article>
              {/* Section 1 - Intro */}
              <section id="intro" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <img src="https://www.google.com/s2/favicons?domain=microsoft.com&sz=32" alt="Microsoft" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Deux ecosystemes, deux philosophies</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">HubSpot</strong> est une plateforme CRM all-in-one construite autour de l&apos;experience utilisateur. Six hubs natifs (Marketing, Sales, Service, CMS, Operations, Commerce) qui communiquent entre eux sans integration tierce. L&apos;obsession de HubSpot : que chaque utilisateur soit operationnel en quelques heures, pas en quelques mois.</p>
                    <p><strong className="text-[#111]">Microsoft Dynamics 365</strong> est une suite d&apos;applications business modulaires. Sales, Marketing, Customer Service, Field Service, Finance, Supply Chain, Human Resources : chaque module est une application distincte que vous assemblez selon vos besoins. L&apos;avantage massif de Dynamics est son integration native avec l&apos;ecosysteme Microsoft : Outlook, Teams, Excel, Power BI, Power Automate, Azure. Pour les entreprises deja immergees dans l&apos;univers Microsoft, c&apos;est un argument de poids.</p>
                    <p>Le piege classique : choisir Dynamics &ldquo;parce qu&apos;on est deja sur Microsoft 365&rdquo; sans evaluer si c&apos;est reellement le bon CRM pour vos besoins. Etre sur Outlook ne signifie pas que Dynamics est le meilleur CRM pour vous. A l&apos;inverse, ignorer Dynamics quand votre entreprise vit dans Teams et SharePoint serait une erreur. Ce comparatif vous donne les cles pour decider objectivement.</p>
                  </div>
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
                        <span className="text-[12px] font-semibold text-[#111]">HubSpot</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium bg-[#FF7A59]/10 text-[#FF7A59]">All-in-one</span>
                      </div>
                      <ul className="space-y-1.5">
                        {["Plateforme unifiee (6 hubs natifs)", "UX intuitive, adoption rapide", "CRM gratuit genereux", "Marketplace 1 700+ integrations", "Inbound-first, contenu et SEO", "Cible : startup a ETI (2-2 000 users)"].map((i) => (
                          <li key={i} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-[#FF7A59] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img src="https://www.google.com/s2/favicons?domain=microsoft.com&sz=32" alt="Microsoft" className="w-4 h-4" />
                        <span className="text-[12px] font-semibold text-[#111]">Dynamics 365</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium bg-[#00A4EF]/10 text-[#00A4EF]">Microsoft-native</span>
                      </div>
                      <ul className="space-y-1.5">
                        {["Modules independants assemblables", "Integration Outlook/Teams/Power BI native", "Personnalisation via Power Platform", "Copilot AI integre partout", "Ecosysteme ERP + CRM unifie", "Cible : PME a grand groupe (10-100 000+ users)"].map((i) => (
                          <li key={i} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-[#00A4EF] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 - Interface UX */}
              <section id="interface-ux" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Interface et experience utilisateur</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">HubSpot</strong> a investi massivement dans le design de son interface. Chaque ecran est epure, la navigation est logique, les workflows se construisent visuellement. Un commercial non technique peut creer une fiche contact, deplacer un deal dans le pipeline et envoyer un email depuis le CRM en moins de 30 minutes. Le taux d&apos;adoption moyen chez les clients HubSpot depasse 85% dans les 30 premiers jours.</p>
                    <p><strong className="text-[#111]">Dynamics 365</strong> a fait des progres significatifs avec son interface Model-Driven Apps, mais reste plus dense et plus complexe que HubSpot. L&apos;interface ressemble davantage a un ERP qu&apos;a un CRM moderne. La force de Dynamics, c&apos;est que les utilisateurs qui vivent dans Outlook et Teams retrouvent le CRM directement dans leurs outils quotidiens grace a Dynamics App for Outlook et Dynamics App for Teams. Pas besoin d&apos;ouvrir un nouvel onglet. Mais l&apos;interface standalone demande une formation significative.</p>
                    <p><strong className="text-[#111]">Notre constat terrain :</strong> le temps moyen pour former un commercial sur HubSpot est de 2-3 jours. Sur Dynamics 365, comptez 1 a 3 semaines selon le niveau de personnalisation. C&apos;est un facteur decisif pour les equipes qui ont besoin d&apos;etre operationnelles rapidement.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      { label: "Temps de formation commercial", hs: "2-3 jours", dy: "1-3 semaines" },
                      { label: "Taux d'adoption a 30 jours", hs: "85%+", dy: "55-70%" },
                      { label: "Satisfaction UX (G2 2026)", hs: "8.8/10", dy: "7.2/10" },
                      { label: "Personnalisation interface", hs: "Moyenne", dy: "Tres elevee" },
                    ].map((row) => (
                      <div key={row.label} className="rounded-xl border border-[#F2F2F2] p-3 text-center">
                        <p className="text-[10px] text-[#999] mb-2">{row.label}</p>
                        <div className="flex justify-center gap-4">
                          <div>
                            <p className="text-[13px] font-bold text-[#FF7A59]">{row.hs}</p>
                            <p className="text-[9px] text-[#999]">HubSpot</p>
                          </div>
                          <div>
                            <p className="text-[13px] font-bold text-[#00A4EF]">{row.dy}</p>
                            <p className="text-[9px] text-[#999]">Dynamics</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 - CRM */}
              <section id="fonctionnalites-crm" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Fonctionnalites CRM</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Les deux plateformes couvrent les fonctionnalites CRM essentielles : gestion des contacts, pipeline de ventes, activites, taches, notes et reporting. Les differences se situent dans l&apos;execution et la profondeur.</p>
                    <p><strong className="text-[#111]">Gestion des contacts et entreprises.</strong> HubSpot gere les contacts et les entreprises avec des proprietes custom illimitees (meme en gratuit) et une timeline d&apos;activite chronologique claire. Dynamics 365 propose la meme chose avec des entites personnalisables via le Power Platform, offrant une flexibilite superieure pour les modeles de donnees complexes. Avantage Dynamics pour les organisations avec des structures de donnees non standard.</p>
                    <p><strong className="text-[#111]">Pipeline et forecasting.</strong> HubSpot offre des pipelines visuels en kanban, du forecasting natif avec categories de probabilite et des rapports de pipeline en quelques clics. Dynamics 365 Sales propose des fonctionnalites equivalentes avec l&apos;ajout de Process Business Flows (PBF) qui guident les commerciaux etape par etape dans le cycle de vente. Le forecasting Dynamics est plus puissant quand il est couple a Power BI, mais plus complexe a configurer.</p>
                    <p><strong className="text-[#111]">Sequences et engagement commercial.</strong> HubSpot Sequences (Sales Hub Pro) permet de creer des cadences email + taches automatisees. Dynamics 365 propose Sales Accelerator avec une file d&apos;attente de travail guidee par l&apos;IA et des sequences automatisees. Les deux sont comparables en fonctionnalites, mais HubSpot est plus rapide a mettre en place.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 - Marketing */}
              <section id="marketing-automation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Marketing automation</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>C&apos;est ici que l&apos;ecart se creuse le plus entre les deux plateformes.</p>
                    <p><strong className="text-[#111]">HubSpot Marketing Hub</strong> est une reference en marketing automation B2B. Workflows visuels, lead scoring, email marketing, landing pages, blog, SEO, social media, formulaires, CTAs, A/B testing, attribution multi-touch. Tout est natif, tout communique, tout se mesure. Le Marketing Hub est la raison numero 1 pour laquelle les entreprises choisissent HubSpot.</p>
                    <p><strong className="text-[#111]">Dynamics 365 Marketing</strong> (renomme Customer Insights - Journeys) a fait d&apos;enormes progres depuis 2023. Il propose des parcours clients visuels, de l&apos;email marketing, des formulaires, des evenements et du lead scoring. Mais il reste en retrait par rapport a HubSpot sur plusieurs points : pas de blog natif, pas de SEO natif, pas de social media management, un builder d&apos;emails moins intuitif et un A/B testing moins avance.</p>
                    <p><strong className="text-[#111]">Notre verdict marketing :</strong> Si le marketing automation est un besoin central, HubSpot est clairement superieur. Si votre equipe marketing se limite a de l&apos;emailing et du lead nurturing basique, Dynamics peut suffire, surtout si votre CRM est deja sur Dynamics.</p>
                  </div>
                  <div className="mt-5 rounded-xl border border-[#F2F2F2] overflow-hidden">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="bg-[#FAFAFA]">
                          <th className="text-left p-3 font-semibold text-[#111]">Fonctionnalite</th>
                          <th className="text-center p-3 font-semibold text-[#FF7A59]">HubSpot</th>
                          <th className="text-center p-3 font-semibold text-[#00A4EF]">Dynamics</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { f: "Workflows visuels", hs: "Excellent", dy: "Bon" },
                          { f: "Email marketing", hs: "Excellent", dy: "Bon" },
                          { f: "Landing pages", hs: "Natif", dy: "Basique" },
                          { f: "Blog / CMS", hs: "Natif", dy: "Non" },
                          { f: "SEO", hs: "Natif", dy: "Non" },
                          { f: "Social media", hs: "Natif", dy: "Non" },
                          { f: "Lead scoring", hs: "Natif + predictif", dy: "Natif + predictif" },
                          { f: "Attribution multi-touch", hs: "Excellent", dy: "Basique" },
                          { f: "A/B testing", hs: "Avance", dy: "Basique" },
                          { f: "Evenements", hs: "Basique", dy: "Avance" },
                        ].map((row) => (
                          <tr key={row.f} className="border-t border-[#F2F2F2]">
                            <td className="p-3 text-[#555]">{row.f}</td>
                            <td className="p-3 text-center text-[#FF7A59] font-medium">{row.hs}</td>
                            <td className="p-3 text-center text-[#00A4EF] font-medium">{row.dy}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 - Service */}
              <section id="service-support" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Service et support client</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">HubSpot Service Hub</strong> propose un systeme de tickets, une base de connaissances, un chat en direct, un portail client et des enquetes de satisfaction (NPS, CSAT, CES). C&apos;est suffisant pour la majorite des PME et ETI. L&apos;avantage : tout est connecte nativement au CRM, donc le commercial voit les tickets du client et le support voit l&apos;historique commercial.</p>
                    <p><strong className="text-[#111]">Dynamics 365 Customer Service</strong> est significativement plus puissant pour le support enterprise. Routage intelligent des cas, SLA avances, Omnichannel (email, chat, SMS, social, voice dans une seule interface), base de connaissances avec recherche IA, et surtout l&apos;integration native avec Teams pour la collaboration interne sur les cas complexes. Pour les organisations avec des equipes support de plus de 20 personnes et des SLA complexes, Dynamics est superieur.</p>
                    <p><strong className="text-[#111]">Dynamics 365 Field Service</strong> est un module unique qui n&apos;a pas d&apos;equivalent chez HubSpot : gestion des interventions terrain, planification des techniciens, suivi GPS, IoT. Si vous avez des equipes terrain, Dynamics est le seul choix rationnel.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 - IA (dark section) */}
              <section id="ia-capabilities" className="mb-8">
                <div className="rounded-2xl bg-[#111] text-white p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold mb-4">IA : Copilot vs Breeze</h2>
                  <div className="space-y-3 text-[13px] text-[#CCC] leading-[1.75] mb-5">
                    <p>Les deux plateformes ont massivement investi dans l&apos;IA en 2025-2026. Microsoft a Copilot, HubSpot a Breeze. Les approches sont differentes mais les cas d&apos;usage se recoupent largement.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img src="https://www.google.com/s2/favicons?domain=microsoft.com&sz=32" alt="Microsoft" className="w-4 h-4" />
                        <span className="text-[12px] font-semibold text-white">Copilot (Dynamics)</span>
                      </div>
                      <ul className="space-y-1.5">
                        {[
                          "Resume de conversations et emails",
                          "Suggestions de reponse en temps reel",
                          "Analyse de sentiments dans les calls",
                          "Generation de contenu marketing",
                          "Scoring predictif des opportunites",
                          "Power Automate AI Builder",
                          "Integration GPT-4o native",
                          "Copilot Studio (agents custom)",
                        ].map((i) => (
                          <li key={i} className="text-[11px] text-[#AAA] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00A4EF] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl bg-white/5 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
                        <span className="text-[12px] font-semibold text-white">Breeze (HubSpot)</span>
                      </div>
                      <ul className="space-y-1.5">
                        {[
                          "Breeze Copilot (assistant contextuel)",
                          "Breeze Agents (prospection, contenu, social, CS)",
                          "Resume de conversations et emails",
                          "Generation d'emails et de contenu",
                          "Scoring predictif des leads",
                          "Enrichissement de donnees (Breeze Intelligence)",
                          "ChatSpot (requetes en langage naturel)",
                          "Workflows IA (branches conditionnelles IA)",
                        ].map((i) => (
                          <li key={i} className="text-[11px] text-[#AAA] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 text-[13px] text-[#CCC] leading-[1.75]">
                    <p><strong className="text-white">Notre analyse :</strong> Copilot a un avantage structurel grace a l&apos;integration profonde avec l&apos;ecosysteme Microsoft (Copilot dans Teams, Outlook, Excel, Power BI). Pour un utilisateur qui vit dans Microsoft 365, l&apos;IA est partout, pas seulement dans le CRM. Breeze est plus simple d&apos;acces et mieux integre dans le workflow marketing. En termes de capacites brutes, les deux se valent en mars 2026.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 - Pricing */}
              <section id="pricing" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comparatif des prix</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Le pricing est la ou Dynamics 365 devient vraiment complexe. HubSpot facture par hub et par tier (Starter, Pro, Enterprise) avec des prix par plateforme + utilisateurs payants pour Sales et Service. Dynamics facture par application et par utilisateur, avec des licences qui se superposent et des add-ons nombreux.</p>
                    <p><strong className="text-[#111]">Le piege Dynamics :</strong> le prix affiche par utilisateur semble raisonnable (65 EUR/mois pour Sales Professional). Mais des que vous ajoutez Marketing (1 500 EUR/mois minimum), Customer Service, Power BI Pro, des licences Power Automate premium et du stockage supplementaire, la facture grimpe tres vite. Nous avons vu des implementations Dynamics couter 2 a 3 fois plus cher que prevu a cause des licences additionnelles.</p>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "CRM Sales - 10 users", hs: "900 EUR/mois (Sales Hub Pro)", dy: "650 EUR/mois (Sales Pro)", note: "HubSpot inclut sequences et forecasting. Dynamics Sales Pro les inclut aussi." },
                      { label: "Marketing automation", hs: "800 EUR/mois (Marketing Hub Pro, 2 000 contacts)", dy: "1 500 EUR/mois (Customer Insights - Journeys)", note: "HubSpot est moins cher et plus complet en marketing. Dynamics Marketing est cher pour ce qu'il offre." },
                      { label: "Service client - 5 agents", hs: "450 EUR/mois (Service Hub Pro)", dy: "500 EUR/mois (Customer Service Pro)", note: "Prix similaires, mais Dynamics est superieur en fonctionnalites pour le support enterprise." },
                      { label: "TCO annuel typique (PME 25 users)", hs: "25 000-45 000 EUR/an", dy: "35 000-80 000 EUR/an", note: "Dynamics est systematiquement plus cher en TCO quand on additionne toutes les licences et l'implementation." },
                    ].map((row) => (
                      <div key={row.label} className="rounded-xl border border-[#F2F2F2] p-4">
                        <p className="text-[12px] font-semibold text-[#111] mb-2">{row.label}</p>
                        <div className="flex gap-4 mb-2">
                          <div className="flex-1">
                            <p className="text-[10px] text-[#FF7A59] font-medium mb-0.5">HubSpot</p>
                            <p className="text-[12px] font-bold text-[#111]">{row.hs}</p>
                          </div>
                          <div className="flex-1">
                            <p className="text-[10px] text-[#00A4EF] font-medium mb-0.5">Dynamics 365</p>
                            <p className="text-[12px] font-bold text-[#111]">{row.dy}</p>
                          </div>
                        </div>
                        <p className="text-[10px] text-[#999] leading-[1.5]">{row.note}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 8 - Integrations */}
              <section id="integrations" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Integrations et ecosysteme</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">L&apos;ecosysteme Microsoft</strong> est le plus grand avantage de Dynamics 365. Outlook, Teams, SharePoint, Power BI, Power Automate, Power Apps, Azure, LinkedIn Sales Navigator : tout s&apos;integre nativement. Un commercial peut voir les donnees CRM directement dans Outlook, enregistrer une conversation Teams comme activite CRM, et generer un dashboard Power BI sans quitter son environnement. Pour les entreprises qui utilisent deja Microsoft 365 E3/E5, c&apos;est une continuite naturelle.</p>
                    <p><strong className="text-[#111]">HubSpot Marketplace</strong> propose 1 700+ integrations natives avec des outils comme Slack, Zoom, Gmail, Google Workspace, Stripe, Shopify, WordPress, Salesforce et des centaines d&apos;autres. L&apos;integration HubSpot + Outlook/Teams existe mais n&apos;est pas au niveau de l&apos;integration native Dynamics. En revanche, HubSpot s&apos;integre mieux avec l&apos;ecosysteme Google Workspace et les outils SaaS modernes (Slack, Notion, Figma, Webflow).</p>
                    <p><strong className="text-[#111]">Point critique : l&apos;ERP.</strong> Dynamics 365 Finance et Dynamics 365 Supply Chain sont des modules de la meme plateforme. L&apos;integration CRM-ERP est native. HubSpot n&apos;a pas d&apos;ERP et doit s&apos;integrer avec des solutions tierces (Pennylane, Sage, NetSuite) via API ou connecteurs. Si l&apos;integration CRM-ERP est un besoin critique, Dynamics a un avantage structurel.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 9 - Implementation */}
              <section id="implementation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Implementation et time-to-value</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le cout et la duree de l&apos;implementation sont des facteurs souvent sous-estimes dans le choix d&apos;un CRM. Et c&apos;est la que l&apos;ecart entre HubSpot et Dynamics est le plus flagrant.</p>
                    <p><strong className="text-[#111]">HubSpot</strong> peut etre operationnel en 2 a 6 semaines pour une implementation standard (CRM + Sales Hub + Marketing Hub). L&apos;onboarding HubSpot est guide, la documentation est exhaustive, et la communaute est active. Le cout d&apos;implementation typique pour une PME de 20-50 personnes : 5 000 a 20 000 EUR avec un partenaire certifie.</p>
                    <p><strong className="text-[#111]">Dynamics 365</strong> necessite generalement 2 a 6 mois pour une implementation standard, et 6 a 12 mois pour une implementation complexe (multi-modules, integration ERP, personnalisation avancee). Le cout d&apos;implementation typique : 20 000 a 100 000 EUR+ avec un partenaire Microsoft. Les implementations Dynamics necessitent des competences techniques specifiques (Power Platform, Dataverse, Azure) qui ne sont pas courantes et dont le cout horaire est eleve.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "2-6 sem.", label: "implementation HubSpot standard", color: "#FF7A59" },
                      { stat: "2-6 mois", label: "implementation Dynamics standard", color: "#00A4EF" },
                      { stat: "3-5x", label: "ratio de cout implementation Dynamics vs HubSpot", color: "#4B5EFC" },
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

              {/* Section 10 - Pour qui */}
              <section id="pour-qui" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pour qui quel outil ?</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-5">
                    <p>Voici notre matrice de decision basee sur des centaines d&apos;implementations terrain.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="rounded-xl border-2 border-[#FF7A59]/20 bg-[#FF7A59]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#FF7A59] mb-2">Choisissez HubSpot si :</p>
                      <ul className="space-y-1.5">
                        {[
                          "Vous etes une startup, PME ou ETI (5-500 utilisateurs)",
                          "Le marketing automation est un besoin central",
                          "Vous voulez etre operationnel en moins d'un mois",
                          "Votre equipe n'a pas de competences techniques CRM",
                          "Vous utilisez Google Workspace ou Slack",
                          "Votre budget implementation est inferieur a 20 000 EUR",
                          "Vous privilegiez l'UX et l'adoption rapide",
                        ].map((i) => (
                          <li key={i} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border-2 border-[#00A4EF]/20 bg-[#00A4EF]/5 p-4">
                      <p className="text-[12px] font-semibold text-[#00A4EF] mb-2">Choisissez Dynamics 365 si :</p>
                      <ul className="space-y-1.5">
                        {[
                          "Vous etes deja profondement integre dans l'ecosysteme Microsoft",
                          "Vous avez besoin d'une integration CRM-ERP native",
                          "Vous avez des equipes de support avec des SLA complexes",
                          "Vous avez des equipes terrain (Field Service)",
                          "Votre organisation depasse 500 utilisateurs CRM",
                          "Vous avez les ressources pour une implementation de 3-6 mois",
                          "La personnalisation avancee est un besoin documente",
                        ].map((i) => (
                          <li key={i} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#00A4EF] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 11 - Migration */}
              <section id="migration" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Guide de migration Dynamics vers HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La migration de Dynamics 365 vers HubSpot est un projet que nous realisons regulierement chez Ceres. Voici les grandes etapes et les points de vigilance.</p>
                    <p><strong className="text-[#111]">Etape 1 : Audit des donnees Dynamics.</strong> Exportez la liste de toutes les entites, champs et relations. Identifiez les donnees actives vs les donnees obsoletes. Nettoyez avant de migrer. Typiquement, 30-50% des donnees CRM sont obsoletes ou en double.</p>
                    <p><strong className="text-[#111]">Etape 2 : Mapping des champs.</strong> Faites correspondre chaque entite Dynamics a un objet HubSpot. Contacts, Companies, Deals sont directs. Les entites custom Dynamics deviennent des Custom Objects HubSpot (Enterprise) ou des proprietes sur les objets standard.</p>
                    <p><strong className="text-[#111]">Etape 3 : Migration technique.</strong> Utilisez un outil de migration (Trujay, Import2, ou migration custom via API). Migrez par lots, validez chaque lot. Commencez par les contacts/entreprises, puis les deals, puis les activites.</p>
                    <p><strong className="text-[#111]">Etape 4 : Recreation des automatisations.</strong> Les Power Automate flows deviennent des HubSpot Workflows. Les Business Process Flows deviennent des pipeline stages. Les dashboards Power BI se recreent dans le reporting HubSpot ou restent sur Power BI via l&apos;integration.</p>
                    <p><strong className="text-[#111]">Etape 5 : Formation et adoption.</strong> La bonne nouvelle : les equipes adoptent HubSpot beaucoup plus vite que Dynamics. Prevoyez 2-3 jours de formation et un mois d&apos;accompagnement post-migration.</p>
                  </div>
                  <div className="mt-5 rounded-xl border border-[#F2F2F2] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">Cout typique d&apos;une migration Dynamics vers HubSpot</p>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { stat: "15-40K EUR", label: "cout migration avec partenaire" },
                        { stat: "4-8 sem.", label: "duree moyenne du projet" },
                        { stat: "95%+", label: "taux de donnees migrables" },
                      ].map((s) => (
                        <div key={s.label} className="text-center">
                          <p className="text-[16px] font-bold text-[#4B5EFC]">{s.stat}</p>
                          <p className="text-[10px] text-[#999]">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 12 - Verdict */}
              <section id="verdict" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Notre verdict</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Pour 75% des PME et ETI B2B que nous accompagnons, HubSpot est le meilleur choix.</strong> L&apos;experience utilisateur superieure, le time-to-value rapide, le marketing automation complet et le TCO maitrise en font la solution la plus rationnelle pour les organisations de 5 a 500 utilisateurs. La plateforme all-in-one evite la complexite de gestion de licences multiples que Dynamics impose.</p>
                    <p><strong className="text-[#111]">Dynamics 365 est le bon choix dans des cas precis et documentes :</strong> integration ERP-CRM native requise, ecosysteme Microsoft 365 profondement ancre dans les usages quotidiens, equipes terrain a gerer (Field Service), besoin de personnalisation extreme via Power Platform, ou organisation de grande taille avec des processus metier complexes et non standard.</p>
                    <p><strong className="text-[#111]">L&apos;erreur la plus frequente</strong> que nous observons : choisir Dynamics &ldquo;parce qu&apos;on est deja sur Microsoft 365&rdquo; sans evaluer les alternatives. Utiliser Outlook et Teams ne justifie pas un investissement CRM de 50 000+ EUR sur Dynamics quand HubSpot offre une integration Outlook correcte et un CRM plus simple a deployer pour un cout inferieur. Le choix doit etre base sur les besoins reels, pas sur l&apos;existant technologique.</p>
                    <p>Chez Ceres, nous sommes partenaires HubSpot et nous le disons ouvertement. Mais quand un client a des besoins reels qui justifient Dynamics (integration SAP, Field Service, Power Platform avance), nous le recommandons sans hesiter. Notre objectif est que vous choisissiez le bon outil, pas forcement notre outil.</p>
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
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;aide pour choisir entre HubSpot et Dynamics 365 ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On vous aide a evaluer vos besoins reels, a choisir le bon CRM et a le deployer correctement. Pas de discours commercial : une recommandation honnete.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
                  </a>
                  <Link href="/agence-hubspot" className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
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
