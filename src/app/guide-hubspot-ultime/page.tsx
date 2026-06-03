"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Le Guide HubSpot Ultime 2026",
  description:
    "80 pages pour maitriser HubSpot. 12 chapitres : choix d'edition, setup, automations, Sales/Marketing/Service Hub, Breeze AI, MCP, migration, plan 90 jours. Diamond Partner.",
  author: { "@type": "Organization", name: "Ceres" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  numberOfPages: 80,
  inLanguage: "fr",
  datePublished: "2026-06-03",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
};

const chapters = [
  { num: "01", title: "HubSpot en 2026 : positionnement, qui doit choisir", desc: "Etat du marche, positionnement vs Salesforce/Pipedrive/Attio, pricing, ICP cible de HubSpot. La vue d'ensemble strategique pour decider.", pages: "p. 4-9" },
  { num: "02", title: "Choisir le bon Hub et la bonne edition", desc: "Marketing/Sales/Service/CMS/Operations Hub. Starter/Pro/Enterprise. 6 questions pour decider sans payer pour rien.", pages: "p. 10-17" },
  { num: "03", title: "Setup initial : portails, proprietes, gouvernance", desc: "Architecture data, custom objects, properties, lifecycle stages, permissions, gouvernance d'admin. Eviter les 5 erreurs classiques.", pages: "p. 18-26" },
  { num: "04", title: "Lead routing, scoring et lifecycle automation", desc: "Round-robin, territory assignment, SLA, lead scoring fit+engagement, lifecycle automation. Templates de regles.", pages: "p. 27-34" },
  { num: "05", title: "Marketing Hub : workflows, sequences, lifecycle", desc: "Marketing automation, emails, landing pages, formulaires, CTAs, lifecycle marketing, A/B testing.", pages: "p. 35-43" },
  { num: "06", title: "Sales Hub : pipeline, forecasting, deal automation", desc: "Pipeline design, stage criteria, forecasting, sequences, meetings, signature electronique, playbooks.", pages: "p. 44-50" },
  { num: "07", title: "Service Hub : tickets, knowledge base, SLA", desc: "Ticketing, automations support, knowledge base, customer feedback, SLA, integration help desk.", pages: "p. 51-56" },
  { num: "08", title: "Breeze AI : agents, copilot, scoring predictif", desc: "L'IA HubSpot en 2026 : copilot, agents specialises (content, prospecting, social), scoring predictif, email assist. Activation pratique.", pages: "p. 57-63" },
  { num: "09", title: "HubSpot MCP server : tutoriel + 12 cas d'usage", desc: "Le MCP server officiel (GA avril 2026). Setup en 30 min + 12 cas d'usage RevOps avec prompts a coller.", pages: "p. 64-71" },
  { num: "10", title: "Reporting, dashboards et attribution", desc: "Custom report builder, dashboards executifs, attribution multi-touch, forecast accuracy. Templates par persona.", pages: "p. 72-76" },
  { num: "11", title: "Integrations : Salesforce, billing, data warehouse", desc: "Stack hybride, sync bidirectionnel, integrations natives vs custom, iPaaS, MCP, monitoring data quality cross-systems.", pages: "p. 77-80" },
  { num: "12", title: "Migration depuis Salesforce/Pipedrive/Excel + plan 90 jours", desc: "Methodologie migration complete : audit, mapping, sandbox, testing, formation, rollout. Plan d'implementation 30/60/90 jours.", pages: "p. 81-90" },
];

const stats = [
  { value: "80", label: "pages" },
  { value: "12", label: "chapitres" },
  { value: "30", label: "templates inclus" },
  { value: "90j", label: "plan d'action" },
];

const clients = [
  { name: "Iroko" },
  { name: "Ringover" },
  { name: "TotalEnergies" },
  { name: "Beedeez" },
  { name: "Kameleoon" },
  { name: "Dougs" },
  { name: "Edenred" },
  { name: "Spendesk" },
];

export default function GuideHubSpotUltimeLandingPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({
        portalId: "2703445",
        formId: "461a976f-66db-4946-9e3f-883c83d4a084",
        region: "na1",
        target: "#hs-guide-form",
      });
      return;
    }
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      if ((window as any).hbspt) {
        (window as any).hbspt.forms.create({
          portalId: "2703445",
          formId: "461a976f-66db-4946-9e3f-883c83d4a084",
          region: "na1",
          target: "#hs-guide-form",
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  function scrollToForm() {
    document.getElementById("telecharger")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="hidden lg:block fixed pointer-events-none" style={{ left: "2%", top: "10%", width: 340, height: 340, borderRadius: "50%", background: "#FF7A59", opacity: 0.14, filter: "blur(70px)" }} />
      <div className="hidden lg:block fixed pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block fixed pointer-events-none" style={{ left: "4%", top: "50%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block fixed pointer-events-none" style={{ right: "2%", top: "70%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        <section className="text-center mb-16">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
            <Link href="/guides" className="hover:text-[#111] transition-colors">Guides</Link><span>/</span>
            <span className="text-[#666]">Le Guide HubSpot Ultime</span>
          </nav>
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FF7A59]/10 text-[12px] font-medium text-[#FF7A59]">Guide gratuit</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#6D00CC]/10 text-[12px] font-medium text-[#6D00CC]">Juin 2026 — Diamond Partner</span>
          </div>
          <h1 className="text-[36px] sm:text-[52px] font-semibold text-[#111] leading-[1.08] tracking-[-0.03em] mb-5">
            Le Guide HubSpot Ultime 2026
          </h1>
          <p className="text-[18px] text-[#666] max-w-[640px] mx-auto leading-[1.7] mb-6">
            80 pages pour tout maitriser sur HubSpot : choix d&apos;edition, setup, automations, Marketing/Sales/Service Hub, Breeze AI, MCP, migration. Le playbook condense de 250+ deploiements Ceres.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[700px] mx-auto mb-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[22px] font-bold text-[#111] tracking-[-0.02em]">{s.value}</div>
                <div className="text-[11px] text-[#999] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF7A59] text-white text-[14px] font-medium hover:bg-[#E86D4F] transition-colors shadow-[0_4px_12px_-4px_rgba(255,122,89,0.4)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 2v8M4 7l4 4 4-4M2 13h12" /></svg>
            Telecharger gratuitement
          </button>
          <p className="text-[12px] text-[#999] mt-4">
            Ou <Link href="/guide-hubspot-ultime/contenu" className="text-[#FF7A59] hover:underline font-medium">lire en ligne</Link> sans inscription.
          </p>
        </section>

        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">
              Pourquoi ce guide, et pourquoi maintenant
            </h2>
            <div className="space-y-4 text-[14px] text-[#555] leading-[1.75]">
              <p>
                HubSpot est passe d&apos;outil inbound a plateforme RevOps complete. Avec Breeze AI (sept 2024), le MCP server officiel (avril 2026) et les agents IA, l&apos;ecosysteme HubSpot 2026 n&apos;a rien a voir avec celui de 2023.
              </p>
              <p>
                Resultat : la plupart des contenus disponibles sont obsoletes. Les guides 2022-2023 ne parlent ni de Breeze, ni de MCP, ni des nouveaux pricings. Et les pages officielles HubSpot sont tres marketing, peu pratiques.
              </p>
              <p>
                Ce guide est ce qu&apos;on aurait voulu avoir en interne il y a 5 ans. 80 pages denses, pas de bullshit, basees sur 250+ deploiements Ceres (Diamond Partner depuis 2021). Du choix d&apos;edition au plan 90 jours, en passant par l&apos;activation des agents IA et la migration depuis Salesforce/Pipedrive.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-8">
            <Badge>Sommaire</Badge>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-4">12 chapitres, 80 pages</h2>
            <p className="text-[14px] text-[#666] mt-2">Du choix initial a la migration. Lisez dans l&apos;ordre ou piochez ce qui vous interesse.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {chapters.map((c) => (
              <div key={c.num} className="rounded-xl border border-[#E8E8E8] bg-white p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
                <div className="flex items-start gap-3">
                  <div className="text-[28px] font-bold text-[#F2F2F2] leading-none select-none shrink-0">{c.num}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] font-semibold text-[#111] mb-1.5 leading-[1.3]">{c.title}</h3>
                    <p className="text-[12px] text-[#777] leading-[1.6] mb-1.5">{c.desc}</p>
                    <p className="text-[10px] text-[#BBB] font-mono">{c.pages}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-8">
            <Badge>Bonus</Badge>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Ce qu&apos;on inclut</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "30 templates HubSpot prets a importer", desc: "Workflows, lead scoring, lifecycle, deal stages, custom reports. Tous testes sur des projets reels.", color: "#FF7A59" },
              { title: "Comparatif edition Starter/Pro/Enterprise", desc: "Tableau honnete des limites de chaque edition, avec recommandation par taille d'entreprise.", color: "#4B5EFC" },
              { title: "Tutoriel MCP server complet", desc: "Setup pas-a-pas du nouveau MCP server officiel + 12 prompts RevOps prets a coller.", color: "#22C55E" },
              { title: "Plan 30/60/90 jours d'implementation", desc: "Roadmap chiffree par semaine, KPIs de validation a chaque palier.", color: "#6D00CC" },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="w-2 h-2 rounded-sm mb-3" style={{ background: b.color }} />
                <h3 className="text-[14px] font-semibold text-[#111] mb-2">{b.title}</h3>
                <p className="text-[12px] text-[#777] leading-[1.65]">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="rounded-2xl bg-[#111] p-6 md:p-8">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-5">Pour qui ce guide est ecrit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { role: "Founder / CEO scale-up", desc: "Pour decider quelle edition HubSpot acheter et budgeter realistement." },
                { role: "VP RevOps / Head of Ops", desc: "Pour designer une stack HubSpot mature qui scale a 10x." },
                { role: "RevOps Manager + admin", desc: "Pour deployer techniquement les bonnes pratiques en mode pro." },
              ].map((p) => (
                <div key={p.role} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <h3 className="text-[14px] font-semibold text-white mb-2">{p.role}</h3>
                  <p className="text-[12px] text-white/60 leading-[1.6]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-6">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider">Methode validee sur</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
            {clients.map((c) => (
              <div key={c.name} className="text-[13px] text-[#666] font-medium">{c.name}</div>
            ))}
          </div>
        </section>

        <section id="telecharger" className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="text-center mb-6">
              <Badge>Telechargement</Badge>
              <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Recevez le guide PDF</h2>
              <p className="text-[14px] text-[#666] mt-2">80 pages, format A4. Lien de telechargement par email immediatement apres soumission.</p>
            </div>
            <div ref={formRef} id="hs-guide-form" className="max-w-[480px] mx-auto" />
          </div>
        </section>

        <section className="mb-8">
          <div className="rounded-2xl p-6 md:p-8 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
            <h2 className="text-[18px] sm:text-[22px] font-semibold text-white tracking-[-0.02em] mb-2">Pas envie de remplir un formulaire ?</h2>
            <p className="text-[13px] text-white/80 mb-5 max-w-[460px] mx-auto">Le guide est aussi disponible en ligne, gratuitement, sans inscription.</p>
            <Link href="/guide-hubspot-ultime/contenu" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
              Lire le guide complet en ligne
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
