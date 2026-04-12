"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "HubSpot gratuit : limites et quand passer en Pro",
  description: "Guide complet sur les limites de HubSpot gratuit. Les 5 fonctions qui bloquent, quand passer en Starter ou Pro, le cout reel par plan, comment migrer sans perdre de donnees et les erreurs a eviter.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency", logo: { "@type": "ImageObject", url: "https://ceres.agency/logo.png" } },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/hubspot-gratuit-limites-quand-passer-pro" },
  articleSection: "CRM",
  wordCount: 2400,
  inLanguage: "fr",
};

const sections = [
  { id: "hubspot-gratuit-offre", title: "Ce que le gratuit offre" },
  { id: "cinq-limites", title: "Les 5 limites qui bloquent" },
  { id: "quand-starter", title: "Quand passer en Starter" },
  { id: "quand-pro", title: "Quand passer en Pro" },
  { id: "cout-reel", title: "Le cout reel" },
  { id: "migrer-sans-perdre", title: "Migrer sans perdre de donnees" },
  { id: "erreurs-eviter", title: "Les erreurs a eviter" },
  { id: "notre-accompagnement", title: "Notre accompagnement" },
];

const relatedArticles = [
  { title: "HubSpot tarifs et prix en 2026 : le guide complet", slug: "hubspot-tarifs-prix-2026", category: "CRM", color: "#FF7A59" },
  { title: "Onboarding HubSpot : les 30 premiers jours", slug: "onboarding-hubspot-30-premiers-jours", category: "CRM", color: "#FF7A59" },
  { title: "9 actions commerciales a automatiser dans HubSpot", slug: "9-actions-commerciales-automatiser-hubspot", category: "CRM", color: "#4B5EFC" },
];

export default function HubspotGratuitLimitesArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hubspot-gratuit-offre");

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
                  <a href="https://twitter.com/intent/tweet?text=HubSpot%20gratuit%20%3A%20limites%20et%20quand%20passer%20en%20Pro&url=https://ceres.agency/blog/hubspot-gratuit-limites-quand-passer-pro" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://ceres.agency/blog/hubspot-gratuit-limites-quand-passer-pro" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#CCC] hover:text-[#666] hover:border-[#DDD] transition-colors">
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
              <span className="text-[#666]">HubSpot gratuit : limites</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>CRM</Badge>
                <span className="text-[11px] text-[#CCC]">12 min de lecture</span>
              </div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em] mb-5">
                HubSpot gratuit : limites et quand passer en Pro
              </h1>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                HubSpot CRM gratuit est le meilleur plan free du marche. Mais il a des limites qui, a un moment, bloquent votre croissance. Ce guide detaille exactement ce que vous obtenez gratuitement, les 5 fonctions qui manquent le plus et le bon moment pour passer en Starter ou en Pro. Avec le vrai cout, pas celui de la page pricing.
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
              <section id="hubspot-gratuit-offre" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Ce que HubSpot gratuit offre vraiment</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>HubSpot CRM Free n&apos;est pas une demo limitee. C&apos;est un vrai CRM fonctionnel que vous pouvez utiliser pendant des annees sans payer un centime. Voici ce qui est inclus, concretement.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { feature: "Contacts illimites", desc: "Aucune limite sur le nombre de contacts. Vous pouvez avoir 50 000 contacts en base sans payer.", color: "#22C55E" },
                      { feature: "Utilisateurs illimites", desc: "Toute votre equipe peut acceder au CRM. Pas de cout par siege sur le plan gratuit.", color: "#4B5EFC" },
                      { feature: "Pipeline de deals", desc: "Un pipeline avec des etapes personnalisables. Gestion visuelle des deals en drag-and-drop.", color: "#FF7A59" },
                      { feature: "Tracking emails", desc: "Savoir quand un prospect ouvre votre email et clique sur un lien. 200 notifications/mois.", color: "#6C5CE7" },
                      { feature: "Formulaires", desc: "Formulaires web integres avec branding HubSpot. Captures de leads basiques mais fonctionnelles.", color: "#22C55E" },
                      { feature: "Live chat", desc: "Widget de chat sur votre site. Chatbot basique avec des flows predefinis.", color: "#4B5EFC" },
                      { feature: "Gestion des taches", desc: "Taches et rappels pour le suivi commercial. Queues d'appels pour les SDR.", color: "#FF7A59" },
                      { feature: "Reporting basique", desc: "5 dashboards avec des rapports predefinis. Suffisant pour demarrer, insuffisant pour piloter.", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.feature} className="rounded-xl border border-[#F2F2F2] p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                          <span className="text-[11px] font-semibold text-[#111]">{item.feature}</span>
                        </div>
                        <p className="text-[10px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Pour une equipe de 2-4 personnes en phase de demarrage, le plan gratuit couvre 80% des besoins. Vous pouvez gerer vos contacts, suivre vos deals, tracker vos emails et avoir un reporting minimal. C&apos;est largement suffisant pour les 6 a 12 premiers mois.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 2 */}
              <section id="cinq-limites" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les 5 limites qui bloquent</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>A un moment, le plan gratuit ne suffit plus. Pas parce qu&apos;il est mauvais, mais parce que votre equipe grandit et vos besoins evoluent. Voici les 5 limites qui declenchent systematiquement le passage en payant chez nos clients.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Pas de workflows automatises",
                        desc: "C'est la limite numero 1. Sans workflows, chaque action doit etre faite manuellement : envoyer un email de suivi, changer un lifecycle stage, creer une tache, notifier un commercial. A 5 deals par jour, c'est gerable. A 20 deals par jour, c'est impossible. Les workflows sont disponibles a partir du plan Starter (15 EUR/mois/user).",
                        impact: "Perte estimee : 5-10h/semaine en taches manuelles",
                        color: "#EF4444",
                      },
                      {
                        title: "Reporting limite a 5 dashboards",
                        desc: "5 dashboards avec des rapports predefinis. Vous ne pouvez pas creer de rapports custom, pas de cross-object reporting, pas de funnel analysis. Pour piloter une equipe de plus de 3 personnes, c'est insuffisant. Vous ne savez pas quel commercial performe, quel canal convertit le mieux, ou le pipeline est bloque.",
                        impact: "Consequence : decisions prises a l'intuition, pas aux donnees",
                        color: "#FF7A59",
                      },
                      {
                        title: "Pas de sequences email",
                        desc: "Les sequences permettent d'envoyer des suites d'emails automatises avec un suivi personnalise. En gratuit, chaque email de relance doit etre envoye manuellement. Pour un SDR qui gere 100+ prospects actifs, c'est la fonctionnalite la plus manquante. Disponible en Starter.",
                        impact: "Perte estimee : 3-5h/semaine par SDR",
                        color: "#4B5EFC",
                      },
                      {
                        title: "Proprietes custom limitees a 10",
                        desc: "10 proprietes custom sur tout le portail. Ca part vite : secteur specifique, source detaillee, score interne, taille d'equipe, budget estime. A 10 proprietes, vous ne pouvez plus structurer vos donnees correctement. Le plan Starter debloque 1 000 proprietes custom.",
                        impact: "Consequence : donnees non structurees, segmentation impossible",
                        color: "#6C5CE7",
                      },
                      {
                        title: "Branding HubSpot partout",
                        desc: "Formulaires, emails, chatbot : tout porte le logo HubSpot. Pour une startup en phase de credibilite, afficher le branding d'un tiers sur ses points de contact n'est pas ideal. Le retrait du branding est disponible des le plan Starter.",
                        impact: "Impact : perception de professionnalisme amoindrie",
                        color: "#22C55E",
                      },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7] mb-2">{item.desc}</p>
                        <div className="flex items-start gap-2 rounded-lg bg-[#FF7A59]/5 p-2">
                          <span className="text-[10px] text-[#FF7A59] font-semibold shrink-0 mt-0.5">Impact :</span>
                          <p className="text-[10px] text-[#888] leading-[1.5]">{item.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 3 */}
              <section id="quand-starter" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">A quel moment passer en Starter</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le plan Starter est le premier palier payant. A 15 EUR/mois par utilisateur (facturation annuelle), c&apos;est un investissement modeste qui debloque les fonctionnalites essentielles. Voici les signaux qui indiquent que c&apos;est le moment.</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Vous avez 3+ commerciaux.</strong> Au-dela de 3 personnes dans le CRM, la coordination manuelle ne fonctionne plus. Vous avez besoin de workflows pour assigner les leads, notifier les equipes et automatiser les taches recurrentes.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Vous traitez 10+ deals par semaine.</strong> A ce volume, les relances manuelles deviennent un goulot d&apos;etranglement. Les sequences email sont indispensables pour maintenir le suivi sans oublier de prospects.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Vous voulez structurer vos donnees.</strong> 10 proprietes custom ne suffisent plus. Vous avez besoin de champs specifiques a votre business pour segmenter, scorer et reporter correctement.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Vous envoyez du marketing.</strong> Le plan Starter Marketing Hub debloque l&apos;email marketing sans branding HubSpot, les listes de segmentation et les formulaires avances. Indispensable si vous faites de l&apos;inbound.</li>
                    </ul>
                    <p>En pratique, la plupart des startups passent en Starter entre le 6e et le 12e mois d&apos;utilisation. Le cout pour 5 utilisateurs : 75 EUR/mois en facturation annuelle. C&apos;est le meilleur investissement que vous ferez dans votre stack commerciale.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 4 */}
              <section id="quand-pro" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">A quel moment passer en Pro</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le plan Pro est un saut significatif en termes de prix et de fonctionnalites. A 90 EUR/mois par utilisateur pour le Sales Hub Pro, c&apos;est un investissement serieux qui doit etre justifie par des besoins reels. Voici les cas ou le passage en Pro est necessaire.</p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] mt-2 shrink-0" /><strong className="text-[#111]">Vous avez 8+ commerciaux avec des roles differents.</strong> Le plan Pro debloque la gestion avancee des equipes : teams, permissions granulaires, vues par role. Indispensable pour structurer une equipe avec SDR, AE et managers.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#4B5EFC] mt-2 shrink-0" /><strong className="text-[#111]">Vous avez besoin de reporting avance.</strong> Cross-object reporting, funnel reports, deal velocity, forecast. Le Pro debloque le reporting custom avec des rapports sur mesure. Necessaire pour piloter une equipe structuree.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] mt-2 shrink-0" /><strong className="text-[#111]">Vous voulez du lead scoring.</strong> Le scoring predictif de HubSpot est disponible en Pro. Il utilise le machine learning pour scorer vos leads automatiquement. Bien plus fiable que le scoring manuel a base de points.</li>
                      <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] mt-2 shrink-0" /><strong className="text-[#111]">Vous integrez des outils IA.</strong> Les workflows Pro permettent des actions custom (webhooks, code custom) necessaires pour integrer des agents IA, des outils d&apos;enrichissement ou des automations complexes.</li>
                    </ul>
                    <p>Le passage en Pro se fait generalement entre la 2e et la 3e annee d&apos;utilisation, quand l&apos;equipe depasse 8 personnes. Ne passez pas en Pro trop tot : le plan Starter couvre 80% des besoins jusqu&apos;a 8 utilisateurs.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 5 */}
              <section id="cout-reel" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le cout reel (Starter vs Pro vs Enterprise)</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>La page pricing de HubSpot montre le prix par utilisateur par mois. Mais le cout reel depend de votre equipe, des hubs dont vous avez besoin et des contacts marketing. Voici un calcul concret pour une equipe de 10 personnes.</p>
                  </div>

                  <div className="my-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
                    <p className="text-[12px] font-semibold text-[#111] mb-4 text-center">Cout mensuel HubSpot -- Equipe de 10 personnes</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="border-b border-[#E8E8E8]">
                            <th className="text-left py-2 pr-3 text-[#999] font-semibold">Poste</th>
                            <th className="text-center py-2 px-2 text-[#22C55E] font-semibold">Starter</th>
                            <th className="text-center py-2 px-2 text-[#FF7A59] font-semibold">Pro</th>
                            <th className="text-center py-2 px-2 text-[#6C5CE7] font-semibold">Enterprise</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { poste: "Sales Hub (10 users)", starter: "150 EUR", pro: "900 EUR", enterprise: "1 500 EUR" },
                            { poste: "Marketing Hub (1 000 contacts)", starter: "15 EUR", pro: "800 EUR", enterprise: "3 600 EUR" },
                            { poste: "Service Hub (2 users)", starter: "30 EUR", pro: "180 EUR", enterprise: "300 EUR" },
                            { poste: "Onboarding (one-time, amorti/12)", starter: "0 EUR", pro: "250 EUR", enterprise: "500 EUR" },
                          ].map((row) => (
                            <tr key={row.poste} className="border-b border-[#F2F2F2]">
                              <td className="py-2.5 pr-3 font-medium text-[#111]">{row.poste}</td>
                              <td className="py-2.5 px-2 text-center text-[#666]">{row.starter}</td>
                              <td className="py-2.5 px-2 text-center text-[#666]">{row.pro}</td>
                              <td className="py-2.5 px-2 text-center text-[#666]">{row.enterprise}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="border-t-2 border-[#E8E8E8]">
                            <td className="py-3 pr-3 font-semibold text-[#111] text-[12px]">Total mensuel</td>
                            <td className="py-3 px-2 text-center"><span className="text-[14px] font-bold text-[#22C55E]">195 EUR</span></td>
                            <td className="py-3 px-2 text-center"><span className="text-[14px] font-bold text-[#FF7A59]">2 130 EUR</span></td>
                            <td className="py-3 px-2 text-center"><span className="text-[14px] font-bold text-[#6C5CE7]">5 900 EUR</span></td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <p className="text-[10px] text-[#BBB] text-center mt-3">Prix indicatifs avril 2026 -- Facturation annuelle -- Hors remises partenaires</p>
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p><strong className="text-[#111]">Le saut Starter → Pro est le plus brutal.</strong> Vous passez de 195 EUR/mois a plus de 2 000 EUR/mois. C&apos;est un facteur 10. Ce saut doit etre justifie par un besoin reel en reporting avance, scoring predictif ou workflows complexes. Ne sautez pas cette etape trop tot.</p>
                    <p><strong className="text-[#111]">Les couts caches.</strong> L&apos;onboarding obligatoire HubSpot pour les plans Pro et Enterprise (3 000 a 6 000 EUR one-time). Les contacts marketing supplementaires (le tarif augmente par palier). Les add-ons (API calls, reporting avance, sandbox). Comptez 20 a 30% de plus que le prix affiche.</p>
                    <p><strong className="text-[#111]">La remise partenaire.</strong> En passant par un partenaire HubSpot certifie (comme Ceres), vous pouvez obtenir 20 a 30% de remise sur les plans Pro et Enterprise. Sur un engagement annuel de 25 000 EUR, ca represente 5 000 a 7 500 EUR d&apos;economie.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 6 */}
              <section id="migrer-sans-perdre" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Comment migrer sans perdre de donnees</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Passer du plan gratuit au Starter ou du Starter au Pro n&apos;est pas une migration technique. Vous restez sur le meme portail HubSpot, avec les memes donnees. Mais il y a des etapes a ne pas rater pour exploiter correctement les nouvelles fonctionnalites.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      { step: "01", title: "Audit pre-migration", desc: "Avant d'upgrader, nettoyez vos donnees. Supprimez les contacts inactifs depuis plus de 12 mois, fusionnez les doublons, standardisez les valeurs des proprietes. Un plan Pro avec des donnees sales ne sert a rien.", color: "#FF7A59" },
                      { step: "02", title: "Definir les workflows prioritaires", desc: "Listez les 5 workflows que vous voulez creer en premier. Assignment des leads, notifications d'equipe, nurturing basique, changement de lifecycle stage, creation de taches. Ne creez pas 30 workflows le premier jour.", color: "#4B5EFC" },
                      { step: "03", title: "Configurer les proprietes custom", desc: "Creez les proprietes dont vous avez besoin avant d'importer de nouvelles donnees. Secteur, source detaillee, score, qualification status. Definissez les valeurs possibles et les regles de remplissage.", color: "#22C55E" },
                      { step: "04", title: "Former l'equipe", desc: "Les nouvelles fonctionnalites ne servent a rien si l'equipe ne les utilise pas. Prevoyez 2 heures de formation sur les sequences, les workflows et le reporting. Designez un admin HubSpot responsable de la configuration.", color: "#6C5CE7" },
                    ].map((item) => (
                      <div key={item.step} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[10px] font-bold" style={{ background: item.color }}>{item.step}</div>
                          <span className="text-[12px] font-semibold text-[#111]">{item.title}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.7]">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Le timing ideal : commencez l&apos;audit et le nettoyage 2 semaines avant l&apos;upgrade. Activez le plan un lundi matin. Passez la premiere semaine sur la configuration. La deuxieme sur la formation. A J+15, l&apos;equipe est operationnelle sur le nouveau plan.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Section 7 */}
              <section id="erreurs-eviter" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Les erreurs a eviter</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>En 9 ans d&apos;accompagnement HubSpot, on a vu les memes erreurs se repeter. Voici les quatre plus frequentes lors du passage de gratuit a payant.</p>
                  </div>

                  <div className="my-6 space-y-3">
                    {[
                      {
                        title: "Upgrader trop tot",
                        desc: "Acheter le plan Pro des le premier mois parce qu'un commercial a dit 'on aura besoin de workflows'. Resultat : vous payez 2 000 EUR/mois pour utiliser 20% des fonctionnalites. Le plan gratuit puis Starter couvrent les besoins de 90% des equipes de moins de 8 personnes.",
                        color: "#EF4444",
                      },
                      {
                        title: "Upgrader trop tard",
                        desc: "Rester sur le plan gratuit pendant 2 ans en multipliant les bricolages : Google Sheets en parallele, relances manuelles, reporting sur Excel. Le cout cache du bricolage depasse souvent le prix du plan Starter. Si vous passez 5 heures par semaine sur des taches qu'un workflow ferait en 0 seconde, il est temps d'upgrader.",
                        color: "#FF7A59",
                      },
                      {
                        title: "Prendre tous les hubs en meme temps",
                        desc: "HubSpot pousse les bundles (Sales + Marketing + Service). Pour la plupart des PME, le Sales Hub suffit au debut. Ajoutez le Marketing Hub quand vous faites de l'inbound, le Service Hub quand vous avez un support client structure. Pas avant.",
                        color: "#6C5CE7",
                      },
                      {
                        title: "Ne pas former l'equipe",
                        desc: "Activer le Pro sans formation, c'est acheter une Ferrari et ne jamais depasser la 3e vitesse. Les sequences, les workflows, le reporting custom demandent une prise en main. 2 heures de formation a l'activation, puis 30 minutes par semaine pendant le premier mois.",
                        color: "#4B5EFC",
                      },
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
                </div>
              </section>
              <Connector />

              {/* Section 8 */}
              <section id="notre-accompagnement" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8 border border-[#333]">
                  <h2 className="text-[17px] font-semibold text-white mb-4">Notre accompagnement</h2>
                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Chez Ceres, on est partenaire HubSpot certifie depuis 2019. On accompagne les equipes B2B dans le choix du bon plan, la configuration et la montee en competence. Pas de surventre, pas de plan trop gros pour vos besoins.</p>
                  </div>

                  <div className="my-6 grid sm:grid-cols-2 gap-3">
                    {[
                      { title: "Audit gratuit de votre portail", desc: "On analyse votre utilisation actuelle de HubSpot Free ou Starter et on vous dit si le passage au plan superieur est justifie. Si ce n'est pas le moment, on vous le dit. Pas de commission sur la licence.", color: "#FF7A59" },
                      { title: "Configuration cle en main", desc: "Workflows, proprietes custom, pipelines, dashboards. On configure tout en 2 semaines. Votre equipe recoit un portail propre et operationnel, pas un bac a sable a terminer.", color: "#4B5EFC" },
                      { title: "Remise partenaire", desc: "En passant par Ceres, vous beneficiez d'une remise de 20 a 30% sur les plans Pro et Enterprise. Sur un engagement annuel, l'economie couvre souvent le cout de notre accompagnement.", color: "#22C55E" },
                      { title: "Formation sur mesure", desc: "2 heures de formation pour votre equipe, adaptee a votre configuration et a vos process. Pas de formation generique, un accompagnement sur vos cas d'usage reels.", color: "#6C5CE7" },
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

                  <div className="rounded-xl border border-[#333] bg-[#1A1A1A] p-4 mb-6">
                    <p className="text-[12px] font-semibold text-white mb-3">Nos chiffres HubSpot</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        { stat: "250+", label: "Portails configures", color: "#FF7A59" },
                        { stat: "120K+", label: "Contacts migres", color: "#4B5EFC" },
                        { stat: "9 ans", label: "D'experience HubSpot", color: "#22C55E" },
                        { stat: "20-30%", label: "Remise partenaire", color: "#6C5CE7" },
                      ].map((r) => (
                        <div key={r.label} className="text-center">
                          <p className="text-[18px] font-bold mb-1" style={{ color: r.color }}>{r.stat}</p>
                          <p className="text-[10px] text-[#666]">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3 text-[13px] text-white/60 leading-[1.75]">
                    <p>Le bon moment pour passer en payant n&apos;est pas quand HubSpot vous envoie une promo. C&apos;est quand votre equipe perd du temps sur des taches que le plan payant automatise. On vous aide a identifier ce moment et a faire la transition sans friction.</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="mb-12 rounded-2xl bg-gradient-to-br from-[#111] to-[#1A1A1A] p-6 md:p-8 text-center border border-[#333]">
                <h3 className="text-[17px] font-semibold text-white mb-3">Pret a upgrader votre HubSpot ?</h3>
                <p className="text-[13px] text-[#999] leading-[1.7] mb-5 max-w-[500px] mx-auto">On audite gratuitement votre portail HubSpot et on vous recommande le bon plan au bon moment. Avec une remise partenaire de 20 a 30% incluse.</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FF7A59] text-white rounded-lg text-[13px] font-medium hover:bg-[#E8694D] transition-colors">
                  Auditer mon portail HubSpot
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
