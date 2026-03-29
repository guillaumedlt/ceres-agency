"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sellsy vs HubSpot : comparatif CRM francais 2026",
  description: "Comparaison detaillee Sellsy vs HubSpot en 2026 : prix, fonctionnalites CRM, facturation, marketing automation, reporting, integrations et support. 15+ criteres pour faire le bon choix entre ces deux CRM.",
  author: { "@type": "Person", name: "Guillaume Delachet" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-03-29",
  dateModified: "2026-03-29",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/sellsy-vs-hubspot" },
  articleSection: "CRM & HubSpot",
  wordCount: 3400,
  inLanguage: "fr",
};

const sections = [
  { id: "deux-philosophies", title: "Deux CRM, deux philosophies" },
  { id: "prix", title: "Prix et formules" },
  { id: "crm-fonctionnalites", title: "Fonctionnalites CRM" },
  { id: "facturation", title: "Facturation et devis" },
  { id: "marketing", title: "Marketing et emailing" },
  { id: "reporting", title: "Reporting et analytics" },
  { id: "integrations", title: "Integrations" },
  { id: "support", title: "Support et accompagnement" },
  { id: "tableau-comparatif", title: "Tableau comparatif 15 criteres" },
  { id: "verdict", title: "Verdict par profil" },
];

const relatedArticles = [
  { title: "Meilleur CRM B2B en France : le comparatif", slug: "meilleur-crm-b2b-france", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "CRM pour PME en 2026 : le guide pour bien choisir", slug: "crm-pme-2026", category: "CRM & HubSpot", color: "#4B5EFC" },
  { title: "Facturation electronique 2026 : connecter votre CRM", slug: "facturation-electronique-crm-2026", category: "Operations", color: "#22C55E" },
];

export default function SellsyVsHubspotArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("deux-philosophies");

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
                  <a href="https://twitter.com/intent/tweet?text=Sellsy%20vs%20HubSpot%20comparatif%20CRM%202026&url=https://ceres.agency/blog/sellsy-vs-hubspot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/sellsy-vs-hubspot" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">Sellsy vs HubSpot</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM &amp; HubSpot</Badge>
                <span className="text-[11px] text-[#CCC]">20 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                Sellsy vs HubSpot : comparatif CRM francais 2026
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Deux CRM, deux philosophies radicalement differentes. Sellsy, le champion francais qui integre la facturation nativement. HubSpot, la plateforme americaine all-in-one qui domine le marketing automation. On a deploye les deux chez nos clients PME et ETI. Voici notre comparatif honnete sur 15 criteres, avec les vrais prix, les vraies forces et les vraies limites de chacun.
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
              {/* Section 1 : Deux CRM, deux philosophies */}
              {/* ================================================================ */}
              <section id="deux-philosophies" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3 mb-4">
                    <img src="https://www.google.com/s2/favicons?domain=sellsy.com&sz=32" alt="Sellsy" className="w-5 h-5" />
                    <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-5 h-5" />
                    <h2 className="text-[17px] font-semibold text-[#111]">Deux CRM, deux philosophies</h2>
                  </div>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Sellsy</strong> est un CRM francais fonde en 2009 a La Rochelle par Alain Mevellec et Frederic Coulais. Sa vision fondatrice : offrir aux TPE et PME francaises un outil unique qui combine CRM, facturation, tresorerie et gestion commerciale. Sellsy est profondement ancre dans le tissu economique francais, avec une conformite native aux obligations comptables et fiscales hexagonales (TVA, Factur-X, mentions legales obligatoires). En 2026, Sellsy revendique plus de 19 000 clients, principalement des PME de 5 a 250 salaries.</p>
                    <p><strong className="text-[#111]">HubSpot</strong> est une plateforme americaine fondee en 2006 par Brian Halligan et Dharmesh Shah. A l&apos;origine un outil d&apos;inbound marketing, HubSpot est devenu un ecosysteme complet avec six hubs (Marketing, Sales, Service, CMS, Operations, Commerce). Sa force : l&apos;experience utilisateur, la puissance du marketing automation et l&apos;ecosysteme d&apos;integrations (1 700+ dans le marketplace). En 2026, HubSpot depasse les 228 000 clients dans le monde, de la startup a l&apos;ETI.</p>
                    <p><strong className="text-[#111]">La difference fondamentale.</strong> Sellsy est un CRM-ERP leger : il gere le cycle complet devis-commande-facture-paiement dans un seul outil. HubSpot est un CRM-marketing puissant : il excelle dans l&apos;acquisition, la nurture et le pipeline commercial, mais ne fait pas de facturation native. Ce sont deux visions complementaires du &ldquo;tout-en-un&rdquo;. Sellsy inclut la facturation mais a un marketing basique. HubSpot inclut le marketing avance mais externalise la facturation.</p>
                    <p>Cette distinction est fondamentale pour faire le bon choix. Si votre priorite est de centraliser la gestion commerciale et administrative (devis, factures, paiements), Sellsy est concu pour ca. Si votre priorite est d&apos;attirer des leads, de les qualifier automatiquement et de les convertir via des workflows de nurture, HubSpot est concu pour ca.</p>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img src="https://www.google.com/s2/favicons?domain=sellsy.com&sz=32" alt="Sellsy" className="w-4 h-4" />
                        <span className="text-[12px] font-semibold text-[#111]">Sellsy</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium bg-[#0066FF]/10 text-[#0066FF]">CRM + Facturation</span>
                      </div>
                      <ul className="space-y-1.5">
                        {["CRM + facturation natif", "Conformite fiscale FR (TVA, Factur-X)", "Tresorerie et rapprochement bancaire", "Gestion commerciale complete", "Support 100% francais", "Cible : TPE-PME francaises (2-250 users)"].map((i) => (
                          <li key={i} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
                        <span className="text-[12px] font-semibold text-[#111]">HubSpot</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium bg-[#FF7A59]/10 text-[#FF7A59]">CRM + Marketing</span>
                      </div>
                      <ul className="space-y-1.5">
                        {["CRM gratuit tres complet", "Marketing automation avance", "6 hubs natifs integres", "1 700+ integrations marketplace", "UX reconnue mondialement", "Cible : startup a ETI (2-2 000 users)"].map((i) => (
                          <li key={i} className="text-[11px] text-[#777] leading-[1.5] flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-[#FF7A59] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { stat: "19K+", label: "clients Sellsy (principalement FR)", color: "#0066FF" },
                      { stat: "228K+", label: "clients HubSpot dans le monde", color: "#FF7A59" },
                      { stat: "2009", label: "annee de creation de Sellsy", color: "#4B5EFC" },
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
              {/* Section 2 : Prix et formules */}
              {/* ================================================================ */}
              <section id="prix" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Prix et formules : le vrai comparatif</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75] mb-6">
                    <p>Le pricing est souvent le critere decisif pour les PME. Sellsy et HubSpot ont des approches radicalement differentes. Sellsy propose des forfaits simples par utilisateur. HubSpot propose un modele freemium avec des tiers qui escaladent rapidement.</p>
                    <p><strong className="text-[#111]">Sellsy.</strong> Trois formules principales. Essentials a 29 EUR/utilisateur/mois : CRM de base, devis, factures, gestion contacts. Advanced a 49 EUR/utilisateur/mois : tout Essentials + marketing email, signature electronique, previsions de ventes. Enterprise a 99 EUR/utilisateur/mois : tout Advanced + automatisation avancee, API premium, support prioritaire. La facturation est incluse dans toutes les formules, ce qui est un avantage considerable par rapport a HubSpot ou il faut ajouter un outil tiers.</p>
                    <p><strong className="text-[#111]">HubSpot.</strong> CRM gratuit pour un nombre illimite d&apos;utilisateurs (mais fonctionnalites limitees). Starter a 20 EUR/mois/utilisateur : CRM + fonctionnalites de base marketing/ventes. Professional a 90 EUR/mois/utilisateur (minimum 5 utilisateurs pour le Sales Hub, soit 450 EUR/mois) : marketing automation, sequences, reporting avance. Enterprise a partir de 150 EUR/mois/utilisateur : tout Professional + objets personnalises, scoring predictif, equipes hierarchiques. Attention, les prix HubSpot grimpent vite quand on cumule plusieurs hubs.</p>
                    <p><strong className="text-[#111]">Le vrai cout de possession.</strong> Pour une equipe de 10 commerciaux, Sellsy Advanced coute 490 EUR/mois (facturation incluse). HubSpot Sales Hub Professional coute 900 EUR/mois, auxquels il faut ajouter un outil de facturation (Pennylane, QuickBooks, ou Sellsy en complement) a 50-200 EUR/mois supplementaires. L&apos;ecart se creuse encore si vous avez besoin du Marketing Hub HubSpot.</p>
                  </div>

                  {/* Prix comparison visual */}
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Comparaison des prix pour 10 utilisateurs</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#0066FF]/20 bg-[#F0F5FF] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img src="https://www.google.com/s2/favicons?domain=sellsy.com&sz=32" alt="Sellsy" className="w-4 h-4" />
                        <span className="text-[12px] font-semibold text-[#111]">Sellsy (10 users)</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { plan: "Essentials", prix: "290 EUR/mois", detail: "CRM + facturation" },
                          { plan: "Advanced", prix: "490 EUR/mois", detail: "CRM + facturation + marketing" },
                          { plan: "Enterprise", prix: "990 EUR/mois", detail: "Tout inclus + API premium" },
                        ].map((p) => (
                          <div key={p.plan} className="flex justify-between items-center rounded-lg bg-white p-2.5 border border-[#E8E8E8]">
                            <div>
                              <p className="text-[11px] font-semibold text-[#111]">{p.plan}</p>
                              <p className="text-[9px] text-[#999]">{p.detail}</p>
                            </div>
                            <span className="text-[12px] font-bold text-[#0066FF]">{p.prix}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-[#FF7A59]/20 bg-[#FFF5F2] p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
                        <span className="text-[12px] font-semibold text-[#111]">HubSpot (10 users)</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { plan: "Free CRM", prix: "0 EUR/mois", detail: "CRM basique illimite" },
                          { plan: "Starter", prix: "200 EUR/mois", detail: "CRM + fonctionnalites de base" },
                          { plan: "Professional", prix: "900 EUR/mois", detail: "Sales Hub uniquement" },
                          { plan: "Pro + Marketing", prix: "1 790 EUR/mois", detail: "Sales + Marketing Hub" },
                        ].map((p) => (
                          <div key={p.plan} className="flex justify-between items-center rounded-lg bg-white p-2.5 border border-[#E8E8E8]">
                            <div>
                              <p className="text-[11px] font-semibold text-[#111]">{p.plan}</p>
                              <p className="text-[9px] text-[#999]">{p.detail}</p>
                            </div>
                            <span className="text-[12px] font-bold text-[#FF7A59]">{p.prix}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 3 : Fonctionnalites CRM */}
              {/* ================================================================ */}
              <section id="crm-fonctionnalites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Fonctionnalites CRM : gestion des contacts et pipeline</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Sellsy CRM.</strong> Le CRM de Sellsy couvre les bases solidement : gestion des contacts et societes, pipeline de ventes en vue kanban, suivi des opportunites, historique des interactions, taches et rappels. L&apos;integration avec la facturation est transparente : vous pouvez transformer un devis accepte en facture en un clic. Le CRM est bien pense pour les equipes commerciales francaises qui ont besoin de suivre le cycle complet de la prospection au paiement. Les champs personnalises sont disponibles, mais moins flexibles que chez HubSpot. Le scoring des leads est basique (criteres statiques) et il n&apos;y a pas de scoring predictif.</p>
                    <p><strong className="text-[#111]">HubSpot CRM.</strong> Le CRM de HubSpot est considerablement plus profond. La fiche contact est un hub d&apos;information qui centralise les emails, les appels, les visites du site web, les soumissions de formulaires, les interactions marketing et les tickets de support. Le pipeline de ventes est entierement personnalisable (etapes, probabilites, proprietes requises). Le tracking email natif informe le commercial quand un prospect ouvre un email ou clique sur un lien. Les sequences permettent d&apos;automatiser les relances. Le scoring peut etre base sur des criteres demographiques et comportementaux. En version Enterprise, le scoring predictif utilise l&apos;IA pour identifier les leads les plus susceptibles de convertir.</p>
                    <p><strong className="text-[#111]">Verdict CRM.</strong> HubSpot est nettement superieur en termes de profondeur CRM. La richesse de la fiche contact, le tracking comportemental et les capacites de scoring en font un outil plus puissant pour les equipes commerciales qui pratiquent la vente consultative en B2B. Sellsy est suffisant pour les equipes qui ont besoin d&apos;un CRM fonctionnel sans complexite, surtout si la facturation integree est une priorite.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 4 : Facturation et devis */}
              {/* ================================================================ */}
              <section id="facturation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Facturation et devis : l&apos;avantage decisif de Sellsy</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Sellsy excelle ici.</strong> C&apos;est le point fort incontestable de Sellsy. La facturation est integree nativement dans le CRM. Devis, bons de commande, factures, avoirs, acomptes : tout est gere dans un seul outil. La conformite aux obligations francaises est native : TVA auto-liquidation, mentions legales obligatoires, numerotation sequentielle, archivage legal. Avec l&apos;obligation de facturation electronique qui arrive en septembre 2026, Sellsy est deja conforme Factur-X et travaille sur la connexion aux PDP (plateformes de dematerialisation partenaires).</p>
                    <p>Le module tresorerie de Sellsy permet aussi le rapprochement bancaire automatique, le suivi des encaissements et la prevision de tresorerie. Pour une PME qui veut un outil unifie CRM + facturation, c&apos;est un avantage enorme : pas besoin d&apos;un Pennylane, d&apos;un QuickBooks ou d&apos;un Sage en complement.</p>
                    <p><strong className="text-[#111]">HubSpot et la facturation.</strong> HubSpot a lance Commerce Hub en 2023, qui permet de creer des devis, de collecter des paiements via Stripe et de gerer des abonnements basiques. Mais ce n&apos;est pas un module de facturation a proprement parler. Il n&apos;y a pas de gestion de TVA avancee, pas de numerotation legale, pas de rapprochement bancaire, pas de conformite Factur-X. Pour la facturation, les utilisateurs HubSpot doivent connecter un outil tiers via integration native (Pennylane, QuickBooks, Xero) ou via Make/Zapier (Sage, EBP).</p>
                    <p><strong className="text-[#111]">L&apos;impact sur le workflow.</strong> Avec Sellsy, le commercial cree le devis dans le CRM, le client l&apos;accepte avec signature electronique, et la facture est generee automatiquement. Zero ressaisie, zero risque d&apos;erreur. Avec HubSpot, le commercial cree le devis dans HubSpot, mais la facture doit etre creee dans l&apos;outil comptable, ce qui implique une synchronisation (automatisee ou manuelle) entre les deux systemes. C&apos;est faisable, mais c&apos;est une friction supplementaire.</p>
                  </div>

                  <div className="mt-5 rounded-xl bg-[#F9FAFB] border border-[#F2F2F2] p-4">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Workflow devis-facture : Sellsy vs HubSpot</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] font-semibold text-[#0066FF] mb-2">Sellsy (natif)</p>
                        <div className="space-y-1.5">
                          {["Devis cree dans le CRM", "Signature electronique integree", "Conversion devis en facture (1 clic)", "Envoi facture + relance auto", "Rapprochement bancaire"].map((step, i) => (
                            <div key={step} className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-[#0066FF] flex items-center justify-center text-white text-[8px] font-bold shrink-0">{i + 1}</div>
                              <span className="text-[10px] text-[#555]">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-[#FF7A59] mb-2">HubSpot (avec outil tiers)</p>
                        <div className="space-y-1.5">
                          {["Devis cree dans HubSpot", "Signature via PandaDoc/DocuSign", "Sync vers Pennylane/QuickBooks", "Facture creee dans outil comptable", "Rapprochement dans outil comptable"].map((step, i) => (
                            <div key={step} className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded-full bg-[#FF7A59] flex items-center justify-center text-white text-[8px] font-bold shrink-0">{i + 1}</div>
                              <span className="text-[10px] text-[#555]">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 5 : Marketing et emailing */}
              {/* ================================================================ */}
              <section id="marketing" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Marketing et emailing : l&apos;avantage decisif de HubSpot</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">HubSpot excelle ici.</strong> Le Marketing Hub est la raison d&apos;etre originelle de HubSpot et cela se voit. Editeur email drag-and-drop avance, segmentation comportementale (pages visitees, emails ouverts, formulaires soumis), workflows d&apos;automation multi-branches, A/B testing, smart content (contenu dynamique selon le visiteur), landing pages, blog integre, SEO recommendations, ads management (Google, Facebook, LinkedIn). Le tout connecte nativement au CRM, ce qui permet des campagnes basees sur les donnees du pipeline commercial. C&apos;est un outil de marketing automation de premier plan, comparable a Marketo ou Pardot mais avec une interface nettement plus intuitive.</p>
                    <p><strong className="text-[#111]">Sellsy et le marketing.</strong> Sellsy propose un module d&apos;emailing basique dans ses formules Advanced et Enterprise : creation de campagnes email, templates, statistiques d&apos;ouverture et de clic, segmentation par listes statiques. C&apos;est suffisant pour envoyer une newsletter mensuelle ou une campagne promotionnelle ponctuelle. Mais il n&apos;y a pas de workflows d&apos;automation, pas de segmentation comportementale, pas de lead nurturing automatise, pas de landing pages, pas de blog. Pour le marketing automation, les utilisateurs Sellsy doivent connecter un outil tiers comme Brevo, Mailchimp ou ActiveCampaign.</p>
                    <p><strong className="text-[#111]">L&apos;impact concret.</strong> Si votre strategie repose sur l&apos;inbound marketing (attirer des leads via du contenu, les qualifier avec du scoring comportemental, les nurturer avec des workflows automatises), HubSpot est incomparablement superieur. Si votre strategie est plus directe (prospection telephonique, salons, bouche-a-oreille) et que vous avez juste besoin d&apos;envoyer des emails ponctuels a votre base, le marketing de Sellsy est suffisant.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 6 : Reporting et analytics */}
              {/* ================================================================ */}
              <section id="reporting" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Reporting et analytics</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">HubSpot.</strong> Le reporting de HubSpot est un de ses points forts majeurs. Dashboards personnalisables avec des dizaines de types de graphiques, rapports cross-hubs (marketing + ventes + service dans un meme dashboard), rapports d&apos;attribution multi-touch (quel canal a contribue a chaque deal), funnel reports, revenue attribution, forecast par commercial et par equipe. En version Professional, vous pouvez creer des rapports personnalises avec le custom report builder. En Enterprise, les rapports calculees et les analytics avancees permettent de monitorer pratiquement n&apos;importe quel KPI.</p>
                    <p><strong className="text-[#111]">Sellsy.</strong> Le reporting de Sellsy est correct mais moins profond. Vous avez acces aux rapports de base : pipeline par etape, chiffre d&apos;affaires par commercial, previsions de ventes, top clients, suivi des objectifs. Les dashboards de facturation sont bien faits : CA facture vs encaisse, delais de paiement, creances en retard, previsions de tresorerie. Mais il n&apos;y a pas de rapports d&apos;attribution marketing, pas de funnel multi-etapes, et les possibilites de personnalisation sont limitees par rapport a HubSpot.</p>
                    <p><strong className="text-[#111]">Le reporting financier, en revanche, est un avantage Sellsy.</strong> Puisque la facturation est integree, Sellsy peut generer des rapports financiers que HubSpot ne peut pas produire nativement : marge par client, delai moyen de paiement, previsions de tresorerie, rapprochement bancaire. Pour le dirigeant d&apos;une PME qui veut un tableau de bord unifie commercial + financier, Sellsy a un avantage reel.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 7 : Integrations */}
              {/* ================================================================ */}
              <section id="integrations" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Integrations et ecosysteme</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">HubSpot.</strong> L&apos;App Marketplace de HubSpot compte plus de 1 700 integrations natives, dont la plupart des outils B2B majeurs : Slack, Zoom, Gmail, Outlook, LinkedIn Sales Navigator, Salesforce, Stripe, Shopify, WordPress, et bien d&apos;autres. Les integrations sont generalement profondes (synchronisation bidirectionnelle, mapping de champs) et bien maintenues. L&apos;API HubSpot est robuste, bien documentee et permissive, ce qui facilite les integrations custom via Make ou Zapier.</p>
                    <p><strong className="text-[#111]">Sellsy.</strong> L&apos;ecosysteme d&apos;integrations de Sellsy est significativement plus reduit. Vous trouverez des integrations natives avec les outils essentiels : Google Workspace, Microsoft 365, Slack, Mailchimp, Stripe, GoCardless, et quelques outils comptables francais (iPaidThat). L&apos;API Sellsy est fonctionnelle mais moins documentee et moins flexible que celle de HubSpot. Pour les integrations non nativement supportees, il faut passer par Make ou Zapier, qui ont des modules Sellsy.</p>
                    <p><strong className="text-[#111]">Un point important pour les PME francaises.</strong> Sellsy s&apos;integre mieux avec l&apos;ecosysteme comptable francais. La connexion avec les experts-comptables, la conformite FEC (Fichier des Ecritures Comptables) et l&apos;export vers les logiciels de comptabilite francais (Sage, EBP, Cegid) sont natifs ou simples. HubSpot necessite generalement un intermediaire (Pennylane, Make) pour connecter l&apos;ecosysteme comptable francais.</p>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                      <p className="text-[28px] font-bold text-[#FF7A59] mb-1">1 700+</p>
                      <p className="text-[10px] text-[#999]">Integrations HubSpot Marketplace</p>
                    </div>
                    <div className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                      <p className="text-[28px] font-bold text-[#0066FF] mb-1">~80</p>
                      <p className="text-[10px] text-[#999]">Integrations natives Sellsy</p>
                    </div>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 8 : Support et accompagnement */}
              {/* ================================================================ */}
              <section id="support" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Support et accompagnement</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Sellsy.</strong> Le support est 100% francais, base a La Rochelle. Chat en direct, email et telephone avec des equipes francophones qui comprennent le contexte PME francais (obligations legales, specificites comptables). Le temps de reponse moyen est de quelques heures en formule Enterprise. L&apos;onboarding est generalement inclus ou a un cout modere. Pour une PME francaise qui veut un interlocuteur en francais qui comprend ses problematiques, c&apos;est un vrai plus.</p>
                    <p><strong className="text-[#111]">HubSpot.</strong> Le support HubSpot est disponible en francais depuis plusieurs annees, mais les equipes sont principalement basees a Dublin (Irlande). La qualite est bonne, avec du chat, email et telephone selon le tier de prix. L&apos;onboarding Professional est obligatoire et facture entre 1 000 et 3 000 EUR selon le hub. HubSpot Academy est un atout majeur : des centaines de cours gratuits, des certifications reconnues et une documentation exhaustive. L&apos;ecosysteme de partenaires (comme Ceres) permet un accompagnement local et specialise.</p>
                    <p><strong className="text-[#111]">Verdict support.</strong> Sellsy gagne sur la proximite et la comprehension du contexte francais. HubSpot gagne sur la richesse des ressources de formation (Academy) et l&apos;ecosysteme de partenaires certifies. Pour une PME qui decouvre le CRM et veut un interlocuteur simple et direct, Sellsy est plus rassurant. Pour une equipe qui veut se former en autonomie et avoir acces a un ecosysteme large, HubSpot est plus riche.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 9 : Tableau comparatif 15 criteres */}
              {/* ================================================================ */}
              <section id="tableau-comparatif" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Tableau comparatif : 15 criteres face a face</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px]">
                      <thead>
                        <tr className="border-b-2 border-[#E8E8E8]">
                          <th className="text-left py-2.5 pr-3 text-[#999] font-semibold">Critere</th>
                          <th className="text-center py-2.5 px-2 text-[#999] font-semibold min-w-[90px]">
                            <div className="flex items-center justify-center gap-1">
                              <img src="https://www.google.com/s2/favicons?domain=sellsy.com&sz=32" alt="Sellsy" className="w-3.5 h-3.5" />
                              Sellsy
                            </div>
                          </th>
                          <th className="text-center py-2.5 px-2 text-[#999] font-semibold min-w-[90px]">
                            <div className="flex items-center justify-center gap-1">
                              <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-3.5 h-3.5" />
                              HubSpot
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-[#555]">
                        {[
                          { critere: "Prix entree de gamme", sellsy: "29 EUR/user/mois", hubspot: "Gratuit (limites)" },
                          { critere: "Prix milieu de gamme (10 users)", sellsy: "490 EUR/mois", hubspot: "900 EUR/mois" },
                          { critere: "CRM et pipeline", sellsy: "Correct", hubspot: "Excellent" },
                          { critere: "Facturation et devis", sellsy: "Excellent (natif)", hubspot: "Basique (outil tiers)" },
                          { critere: "Marketing automation", sellsy: "Basique", hubspot: "Excellent" },
                          { critere: "Emailing", sellsy: "Correct", hubspot: "Excellent" },
                          { critere: "Lead scoring", sellsy: "Basique (statique)", hubspot: "Avance (predictif en Ent.)" },
                          { critere: "Reporting commercial", sellsy: "Correct", hubspot: "Excellent" },
                          { critere: "Reporting financier", sellsy: "Excellent", hubspot: "Non disponible" },
                          { critere: "Integrations", sellsy: "~80 natives", hubspot: "1 700+ natives" },
                          { critere: "API", sellsy: "Correcte", hubspot: "Excellente" },
                          { critere: "Support francais", sellsy: "Natif (La Rochelle)", hubspot: "Disponible (Dublin)" },
                          { critere: "Conformite fiscale FR", sellsy: "Excellent (Factur-X)", hubspot: "Non (outil tiers)" },
                          { critere: "Courbe d\u2019apprentissage", sellsy: "Faible", hubspot: "Faible a moyenne" },
                          { critere: "Scalabilite", sellsy: "PME (5-250 users)", hubspot: "Startup a ETI (1-2 000+)" },
                        ].map((row) => (
                          <tr key={row.critere} className="border-b border-[#F5F5F5]">
                            <td className="py-2 pr-3 font-medium text-[#111]">{row.critere}</td>
                            <td className="py-2 px-2 text-center">{row.sellsy}</td>
                            <td className="py-2 px-2 text-center">{row.hubspot}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
              <Connector />

              {/* ================================================================ */}
              {/* Section 10 : Verdict par profil */}
              {/* ================================================================ */}
              <section id="verdict" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Verdict : quel CRM pour quel profil</h2>
                  <div className="space-y-3 text-[13px] text-[#999] leading-[1.75] mb-6">
                    <p>Il n&apos;y a pas de meilleur CRM dans l&apos;absolu. Il y a le meilleur CRM pour votre contexte. Voici nos recommandations basees sur notre experience terrain.</p>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-[#0066FF]/30 bg-[#0A1628] p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <img src="https://www.google.com/s2/favicons?domain=sellsy.com&sz=32" alt="Sellsy" className="w-4 h-4" />
                        <p className="text-[12px] font-semibold text-[#0066FF]">Choisissez Sellsy si...</p>
                      </div>
                      <ul className="space-y-1.5">
                        {[
                          "Vous etes une PME francaise de 5 a 50 personnes qui veut un outil unique CRM + facturation",
                          "La facturation electronique et la conformite fiscale francaise sont des priorites",
                          "Vous n\u2019avez pas de strategie d\u2019inbound marketing elaboree (pas besoin de workflows complexes)",
                          "Votre equipe commerciale fait principalement de la prospection directe (telephone, salons, reseau)",
                          "Vous voulez un support 100% francais et un interlocuteur qui comprend le contexte PME francais",
                          "Votre budget CRM est inferieur a 500 EUR/mois pour 10 utilisateurs",
                          "Vous avez besoin de suivi de tresorerie et de rapprochement bancaire dans votre CRM",
                        ].map((i) => (
                          <li key={i} className="text-[11px] text-[#888] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-[#FF7A59]/30 bg-[#1A0F0A] p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
                        <p className="text-[12px] font-semibold text-[#FF7A59]">Choisissez HubSpot si...</p>
                      </div>
                      <ul className="space-y-1.5">
                        {[
                          "Vous investissez dans l\u2019inbound marketing et le content marketing pour generer des leads",
                          "Vous avez besoin de marketing automation avance (workflows, scoring, nurturing)",
                          "Votre equipe commerciale utilise des sequences email et du social selling",
                          "Vous prevoyez de scaler au-dela de 50 utilisateurs dans les 2-3 prochaines annees",
                          "Vous avez besoin de reporting d\u2019attribution marketing et de dashboards cross-equipes",
                          "Vous utilisez deja un outil de facturation (Pennylane, QuickBooks) et ne voulez pas changer",
                          "Vous voulez acceder a un ecosysteme de 1 700+ integrations",
                        ].map((i) => (
                          <li key={i} className="text-[11px] text-[#888] leading-[1.5] flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-1.5 shrink-0" />{i}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#999] leading-[1.75]">
                    <p><strong className="text-white">Et si vous hesitez encore.</strong> Notre recommandation pragmatique : si la facturation integree est un besoin non negociable et que votre strategie marketing est simple, partez sur Sellsy. Si le marketing automation et la profondeur CRM sont vos priorites, partez sur HubSpot et connectez un outil de facturation. Dans les deux cas, l&apos;important est de deployer correctement l&apos;outil choisi et de former les equipes. Un CRM bien configure et adopte generera toujours plus de valeur qu&apos;un CRM theoriquement superieur mais mal utilise.</p>
                    <p><strong className="text-white">Notre position chez Ceres.</strong> Nous sommes partenaires HubSpot, mais nous avons recommande Sellsy a certains de nos clients quand c&apos;etait le bon choix. Notre role est de trouver la meilleure solution pour votre contexte, pas de vendre un outil en particulier.</p>
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
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Besoin d&apos;aide pour choisir entre Sellsy et HubSpot ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[500px] mx-auto">On analyse vos besoins, vos processus et votre budget pour vous recommander le CRM le plus adapte. Sans parti pris.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
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
