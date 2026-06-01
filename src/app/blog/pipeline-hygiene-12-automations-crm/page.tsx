"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Pipeline hygiene : 12 automations CRM a mettre en place",
  description: "12 automations CRM concretes pour maintenir un pipeline propre, fiable et exploitable. Templates HubSpot et Salesforce, KPIs et fréquence.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01", dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/pipeline-hygiene-12-automations-crm" },
  articleSection: "Strategie RevOps", wordCount: 2100, inLanguage: "fr",
};

const sections = [
  { id: "pourquoi", title: "Pourquoi la hygiene" },
  { id: "12-automations", title: "Les 12 automations" },
  { id: "deploiement", title: "Ordre de deploiement" },
  { id: "kpis", title: "KPIs de monitoring" },
];

const automations = [
  { num: 1, title: "Detection deals fantomes (stale)", desc: "Tout deal ouvert sans engagement depuis 14 jours est flag automatiquement. Notification owner + manager. Suppression auto apres 30 jours sans reponse.", impact: "+15-25% accuracy forecast" },
  { num: 2, title: "Validation stage criteria", desc: "Un deal ne peut passer en Proposal sans devis envoye (check field). Pas en Closed Won sans contract signe + paid. Stage gates obligatoires.", impact: "+20% predictabilite" },
  { num: 3, title: "Close date past due alert", desc: "Tout deal avec close_date depassee &gt; 7 jours et toujours ouvert : alerte owner. Update obligatoire ou re-stage.", impact: "Pipeline a jour" },
  { num: 4, title: "Champs obligatoires par stage", desc: "Industry et taille company obligatoires en Discovery. Decision_makers en Proposal. Renewal_date en Negotiation. Workflow bloque si manquant.", impact: "Data quality +40%" },
  { num: 5, title: "Deduplication contacts/companies", desc: "Detection automatique sur email + domaine + nom phonetique. Fusion proposee chaque semaine au CRM admin.", impact: "Doublons -80%" },
  { num: 6, title: "Standardisation des donnees", desc: "Format ISO pour pays, E.164 pour telephones, liste fermee pour industries. Conversion automatique a l'entree.", impact: "Reporting fiable" },
  { num: 7, title: "Lead routing round-robin", desc: "Attribution auto des nouveaux MQL par territoire + load balancing. SLA suivi (response time &lt; 5 min).", impact: "SLA -90% breaches" },
  { num: 8, title: "Lifecycle stage auto", desc: "Subscriber &rarr; Lead &rarr; MQL &rarr; SQL &rarr; Opportunity &rarr; Customer selon criteres scoring + activite. Automatique.", impact: "Funnel coherent" },
  { num: 9, title: "Engagement decay alert", desc: "Si activite contact baisse &gt;50% sur 30j : flag CS. Si client renouvelable J-90 + decay : escalade.", impact: "Churn -15%" },
  { num: 10, title: "Re-engagement workflow", desc: "Leads MQL inactifs depuis 60 jours : sequence re-engagement automatique. Marketing nurture par segment.", impact: "Pipeline +12%" },
  { num: 11, title: "Closing automation (Won)", desc: "Quand deal passe en Won : creer customer + onboarding task + notif CS + Slack #wins + facture trigger.", impact: "Time-to-bill -50%" },
  { num: 12, title: "Audit data quality mensuel", desc: "Rapport automatique 1er du mois : % doublons, champs manquants, deals stale, lifecycle inconsistencies. Envoye au RevOps Manager.", impact: "Continuous improvement" },
];

const relatedArticles = [
  { title: "Audit RevOps : checklist complete", slug: "audit-revops-checklist-complete", category: "Methodologie", color: "#FF7A59" },
  { title: "Data quality CRM : audit et nettoyage", slug: "data-quality-crm-audit-nettoyage", category: "Data Quality", color: "#4B5EFC" },
  { title: "Forecast accuracy : framework 35 -> 88%", slug: "forecast-accuracy-35-vers-88-framework", category: "Strategie RevOps", color: "#6D00CC" },
];

export default function PipelineHygieneArticle() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("pourquoi");
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      setProgress(Math.min(100, (h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) * 100));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) { const el = els[i]; if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; } }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#22C55E] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 260, height: 260, borderRadius: "50%", background: "#FF7A59", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#22C55E] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">Pipeline hygiene</span></nav>
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>Strategie RevOps</Badge><span className="text-[11px] text-[#CCC]">10 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">Pipeline hygiene : 12 automations CRM a mettre en place</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Un pipeline non maintenu pourrit en 6 semaines. Voici les 12 automations CRM concretes qui garantissent un pipeline propre, fiable et exploitable.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="pourquoi" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Pourquoi la pipeline hygiene est critique</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Un pipeline sale donne des decisions sales. Concretement :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Forecast inutilisable (le board ne fait pas confiance, le CEO est dans le noir)</li>
                    <li>Lead routing biaise (deals attribues au mauvais owner)</li>
                    <li>Reporting decredibilise (tout le monde voit que les chiffres ne tiennent pas)</li>
                    <li>Cycle de vente artificiellement allonge (deals zombies qui squattent le pipeline)</li>
                    <li>Equipe Sales demotivee (le CRM devient un travail au lieu d&apos;un outil)</li>
                  </ul>
                  <p>La bonne nouvelle : 80% des problemes pipeline se resolvent par 12 automations. Pas de revolution, juste de la rigueur systematique.</p>
                </div>
              </div></section>
              <Connector />

              <section id="12-automations" className="mb-8"><div className="space-y-3">
                {automations.map((a) => (
                  <div key={a.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-[14px] shrink-0 bg-[#22C55E]">{a.num}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[15px] font-semibold text-[#111] mb-2">{a.title}</h3>
                        <p className="text-[12px] text-[#555] leading-[1.65] mb-2">{a.desc}</p>
                        <p className="text-[11px] text-[#22C55E] font-medium">Impact : {a.impact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div></section>
              <Connector />

              <section id="deploiement" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Ordre de deploiement recommande</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Semaine 1-2 : Foundations (automations 4, 6)</p><p className="text-[12px] text-[#777] leading-[1.65]">Standardiser les donnees + champs obligatoires. Sans ca, les autres automations sont sur du sable.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Semaine 3-4 : Nettoyage (automations 1, 3, 5)</p><p className="text-[12px] text-[#777] leading-[1.65]">Detection deals fantomes, close date past due, deduplication. Premier coup de chiffon visible.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Semaine 5-6 : Routing &amp; lifecycle (7, 8, 11)</p><p className="text-[12px] text-[#777] leading-[1.65]">Lead routing, lifecycle stages auto, closing automation. Le pipeline devient autonome.</p></div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4"><p className="text-[13px] font-semibold text-[#111] mb-1">Semaine 7-8 : Gouvernance (2, 9, 10, 12)</p><p className="text-[12px] text-[#777] leading-[1.65]">Validation stage gates, engagement decay, re-engagement, audit mensuel. Le systeme tient dans la duree.</p></div>
                </div>
              </div></section>
              <Connector />

              <section id="kpis" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">KPIs de monitoring de la hygiene</h2>
                <div className="space-y-2 text-[13px] text-[#555] leading-[1.75]">
                  <p>Mesure mensuellement :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><strong>% deals stale</strong> dans le pipeline : cible &lt; 10%</li>
                    <li><strong>% deals avec champs obligatoires manquants</strong> : cible &lt; 5%</li>
                    <li><strong>% doublons contacts</strong> : cible &lt; 2%</li>
                    <li><strong>SLA response time MQL</strong> : cible &lt; 5 min</li>
                    <li><strong>Lifecycle consistency rate</strong> : cible &gt; 95%</li>
                    <li><strong>Forecast accuracy 30j</strong> : cible &gt; 90%</li>
                  </ul>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Votre pipeline a besoin d&apos;un grand nettoyage ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour evaluer l&apos;etat de ton pipeline et prioriser les 3-4 automations a impact rapide.</p>
                <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un creneau</a>
              </div></section>
              <Connector />

              <section><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedArticles.map((r) => (<Link key={r.slug} href={r.slug.startsWith("..") ? r.slug.replace("../", "/") : `/blog/${r.slug}`} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3></Link>))}</div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
