"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Guide Data Quality CRM : audit, nettoyage et enrichissement IA",
  description: "Le guide data quality le plus complet en francais. 50 pages : audit 5 dimensions, deduplication, enrichissement Clay + Lemlist + Claude, maintenance automatisee et scoring qualite.",
  author: { "@type": "Organization", name: "Ceres" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  numberOfPages: 50,
  inLanguage: "fr",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
};

const chapters = [
  { num: "01", title: "Le vrai cout des donnees sales dans votre CRM", desc: "L\u2019impact financier et operationnel d\u2019une base mal entretenue. Taux de bounce, deals perdus, rapports fausses. Pourquoi la data quality est un sujet RevOps critique.", pages: "p. 4-8" },
  { num: "02", title: "Les 5 dimensions de la qualite des donnees", desc: "Completude, exactitude, coherence, fraicheur, unicite. Le framework de reference pour evaluer et piloter votre qualite de donnees.", pages: "p. 9-13" },
  { num: "03", title: "Auditer votre base : le diagnostic complet", desc: "Checklist 50 points pour auditer contacts, entreprises, deals et pipelines. Les requetes HubSpot et exports a lancer. Le rapport type qu\u2019on produit chez Ceres.", pages: "p. 14-19" },
  { num: "04", title: "Deduplication : identifier et fusionner les doublons", desc: "Les causes des doublons. Detection manuelle et automatisee. Regles de fusion (master record, priorite des sources). Outils natifs HubSpot et solutions tierces.", pages: "p. 20-24" },
  { num: "05", title: "Standardisation : formater pour fiabiliser", desc: "Nommage, format telephone, majuscules, pays, secteurs. Les conventions a definir et les workflows de normalisation a mettre en place.", pages: "p. 25-29" },
  { num: "06", title: "Enrichissement IA : Clay, Lemlist AI et Claude", desc: "Waterfall enrichment avec Clay, AI enrichment Lemlist, prompts Claude pour categoriser et completer. La methode qu\u2019on utilise chez Ceres pour enrichir +10 000 contacts.", pages: "p. 30-35" },
  { num: "07", title: "Claude Code : scripts d\u2019enrichissement et nettoyage custom", desc: "Utiliser Claude Code pour generer des scripts de nettoyage sur mesure. Normalisation d\u2019adresses, detection d\u2019anomalies, categorisation de secteurs par IA.", pages: "p. 36-39" },
  { num: "08", title: "Automatiser la maintenance (HubSpot Ops Hub, workflows)", desc: "Workflows de nettoyage automatique. Ops Hub : formatting, data quality automation. Scenarios Make pour la maintenance continue.", pages: "p. 40-44" },
  { num: "09", title: "Mesurer et maintenir la qualite dans le temps", desc: "Le scoring qualite (grille incluse). Dashboards de suivi. KPIs data quality. Comment passer d\u2019un audit ponctuel a une demarche continue.", pages: "p. 45-48" },
  { num: "10", title: "Notre methode chez Ceres : cas clients et resultats", desc: "3 cas clients detailles. De l\u2019audit initial au score qualite >80. Les resultats concrets : meilleure delivrabilite, rapports fiables, adoption CRM en hausse.", pages: "p. 49-50" },
];

const tools = [
  { name: "Clay", domain: "clay.com" },
  { name: "Lemlist", domain: "lemlist.com" },
  { name: "Claude", domain: "claude.ai" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Dropcontact", domain: "dropcontact.com" },
  { name: "Make", domain: "make.com" },
];

export default function GuideDataQualityCRMLandingPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({ portalId: "2703445", formId: "6d574b57-5f57-487e-9e7a-acd7f7458e72", region: "na1", target: "#hs-guide-data-quality-form" });
      return;
    }
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => { if ((window as any).hbspt) (window as any).hbspt.forms.create({ portalId: "2703445", formId: "6d574b57-5f57-487e-9e7a-acd7f7458e72", region: "na1", target: "#hs-guide-data-quality-form" }); };
    document.head.appendChild(script);
  }, []);

  function scrollToForm() { document.getElementById("telecharger")?.scrollIntoView({ behavior: "smooth" }); }

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        {/* Hero */}
        <section className="text-center mb-16">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
            <Link href="/guides" className="hover:text-[#111] transition-colors">Guides</Link><span>/</span>
            <span className="text-[#666]">Guide Data Quality CRM</span>
          </nav>
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#22C55E]/10 text-[12px] font-medium text-[#22C55E]">Guide gratuit</span>
          </div>
          <h1 className="text-[36px] sm:text-[52px] font-semibold text-[#111] leading-[1.08] tracking-[-0.03em] mb-5">
            Guide Data Quality CRM
          </h1>
          <p className="text-[18px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-6">
            50 pages pour auditer, nettoyer et enrichir votre CRM avec l&apos;IA. Deduplication, standardisation, enrichissement Clay + Claude, maintenance automatisee.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {[
              { value: "50", label: "pages" },
              { value: "10", label: "chapitres" },
              { value: "5", label: "outils d\u2019enrichissement" },
              { value: "50", label: "points de checklist" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[24px] font-bold text-[#111]">{s.value}</div>
                <div className="text-[11px] text-[#999]">{s.label}</div>
              </div>
            ))}
          </div>

          <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#22C55E] text-white text-[14px] font-medium hover:bg-[#1CAE4A] transition-colors shadow-[0_4px_12px_-4px_rgba(34,197,94,0.4)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 2v8M4 7l4 4 4-4M2 13h12" /></svg>
            Telecharger gratuitement
          </button>
          <p className="text-[11px] text-[#CCC] mt-3">Pas de spam. Juste le guide.</p>
        </section>

        {/* Book mockup + what you'll learn */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-[200px] h-[260px] rounded-xl shadow-[8px_8px_30px_-10px_rgba(0,0,0,0.2)] shrink-0 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #22C55E 0%, #16A34A 50%, #15803D 100%)" }}>
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div>
                    <div className="w-8 h-0.5 bg-white/40 mb-3" />
                    <p className="text-white/60 text-[9px] font-medium uppercase tracking-wider">Ceres 2026</p>
                  </div>
                  <div>
                    <p className="text-white text-[15px] font-bold leading-[1.2] mb-1">Guide Data Quality CRM</p>
                    <p className="text-white/60 text-[9px]">50 pages | 10 chapitres</p>
                  </div>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-black/10" />
              </div>

              <div className="flex-1">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Ce que vous allez apprendre</p>
                <div className="space-y-2.5">
                  {[
                    "Auditer votre CRM avec une checklist de 50 points actionnable",
                    "Mesurer la qualite de vos donnees sur 5 dimensions (completude, exactitude, coherence, fraicheur, unicite)",
                    "Identifier et fusionner les doublons dans HubSpot",
                    "Standardiser vos donnees pour fiabiliser vos rapports et workflows",
                    "Enrichir +10 000 contacts avec Clay, Dropcontact, Lemlist AI et Claude",
                    "Creer des scripts de nettoyage sur mesure avec Claude Code",
                    "Automatiser la maintenance avec Ops Hub et Make",
                    "Mettre en place un scoring qualite et un reporting continu",
                  ].map((item) => (
                    <p key={item} className="text-[13px] text-[#555] flex items-start gap-2.5 leading-[1.6]">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools covered */}
        <section className="mb-16">
          <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider text-center mb-6">Les outils couverts dans le guide</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {tools.map((t) => (
              <div key={t.name} className="flex items-center gap-2 text-[#999]">
                <img src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=32`} alt={t.name} className="w-5 h-5" />
                <span className="text-[13px] font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sommaire */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <Badge>Sommaire</Badge>
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-4 mb-3">10 chapitres pour maitriser la data quality</h2>
            <p className="text-[15px] text-[#666] max-w-[480px] mx-auto leading-[1.7]">De l&apos;audit au scoring qualite, en passant par l&apos;enrichissement IA. La methode qu&apos;on applique chez Ceres.</p>
          </div>
          <div className="space-y-3">
            {chapters.map((ch) => (
              <div key={ch.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] text-[13px] font-bold shrink-0">{ch.num}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h3 className="text-[14px] font-semibold text-[#111]">{ch.title}</h3>
                      <span className="text-[10px] text-[#CCC] shrink-0">{ch.pages}</span>
                    </div>
                    <p className="text-[12px] text-[#777] leading-[1.65]">{ch.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Templates inclus */}
        <section className="mb-16">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Inclus dans le guide</span>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-6">Tout ce qui est inclus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "Checklist audit 50 points", desc: "Contacts, entreprises, deals, pipelines, proprietes. Chaque point avec criticite et action corrective. Format pret a l\u2019emploi.", color: "#22C55E" },
                { title: "Grille scoring qualite", desc: "Modele de scoring pour mesurer la qualite de votre base sur les 5 dimensions. Calcul automatique du score global.", color: "#16A34A" },
                { title: "Prompts Claude pour le nettoyage", desc: "Prompts pour categoriser les secteurs, normaliser les adresses, detecter les anomalies, enrichir les fiches. Testes en production.", color: "#D4A27F" },
                { title: "Workflow Make : enrichissement auto", desc: "Scenario Make pret a importer. Enrichissement automatique des nouveaux contacts via Dropcontact + Clay.", color: "#6D00CC" },
                { title: "Template reporting qualite", desc: "Dashboard HubSpot et Google Sheets pour suivre l\u2019evolution de votre score qualite dans le temps.", color: "#4B5EFC" },
                { title: "Guide Dropcontact + Clay + Lemlist AI", desc: "Configuration pas-a-pas de chaque outil. Waterfall enrichment, verification email, enrichissement IA.", color: "#FF7A59" },
              ].map((t) => (
                <div key={t.title} className="rounded-xl bg-white/5 p-4 flex gap-3 items-start">
                  <div className="w-2 h-2 rounded-sm mt-1.5 shrink-0" style={{ background: t.color }} />
                  <div>
                    <p className="text-[12px] font-semibold text-white mb-0.5">{t.title}</p>
                    <p className="text-[10px] text-white/40 leading-[1.5]">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preview */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <Badge>Apercu</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Un exemple du guide</h2>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-4 h-4" />
              <span className="text-[11px] font-semibold text-[#111]">Les 5 dimensions de la qualite</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">Chapitre 2</span>
            </div>
            <div className="rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-5 mb-4">
              <p className="text-[11px] font-semibold text-[#111] mb-4">Radar de qualite des donnees CRM</p>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-4">
                {[
                  { dim: "Completude", score: "34%", desc: "Champs critiques remplis" },
                  { dim: "Exactitude", score: "52%", desc: "Donnees verifiees et justes" },
                  { dim: "Coherence", score: "28%", desc: "Formats uniformes" },
                  { dim: "Fraicheur", score: "41%", desc: "Mises a jour recentes" },
                  { dim: "Unicite", score: "63%", desc: "Absence de doublons" },
                ].map((d) => (
                  <div key={d.dim} className="text-center p-3 rounded-lg bg-white border border-[#E8E8E8]">
                    <p className="text-[18px] font-bold text-[#22C55E] mb-0.5">{d.score}</p>
                    <p className="text-[10px] font-semibold text-[#111] mb-0.5">{d.dim}</p>
                    <p className="text-[9px] text-[#999]">{d.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[#22C55E]/5 border border-[#22C55E]/10">
                <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] text-[12px] font-bold shrink-0">43</div>
                <div>
                  <p className="text-[10px] font-semibold text-[#111]">Score global de qualite : 43/100</p>
                  <p className="text-[9px] text-[#999]">Moyenne ponderee des 5 dimensions. Objectif : &gt;75 pour une base exploitable.</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-[#999]">
              <span>Score moyen constate : <strong className="text-[#22C55E]">43/100</strong></span>
              <span>Score cible : <strong className="text-[#111]">&gt;75/100</strong></span>
            </div>
            <p className="mt-3 text-[11px] text-[#CCC]">Grille de scoring complete et methode de calcul dans le guide.</p>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <p className="text-[14px] text-[#555] leading-[1.75] mb-4">&ldquo;Notre score qualite CRM est passe de 17 a 76 en 6 semaines en suivant la methode du guide. La deduplication seule a supprime 2 400 fiches en double. Nos rapports sont enfin fiables et l&apos;equipe commerciale a retrouve confiance dans le CRM.&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] text-[10px] font-bold">E</div>
              <div>
                <p className="text-[12px] font-semibold text-[#111]">Equipe Elax Energie</p>
                <p className="text-[10px] text-[#999]">Score qualite : 17 vers 76 en 6 semaines</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <Badge>Pour qui</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Ce guide est fait pour vous si</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <p className="text-[12px] font-semibold text-[#22C55E] mb-3">Ideal pour</p>
              {["Votre CRM contient des doublons et des donnees obsoletes", "Vos rapports HubSpot ne sont pas fiables", "Vous lancez un projet d\u2019enrichissement de votre base", "Vous voulez automatiser la maintenance de vos donnees", "Vous etes RevOps, Sales Ops, CRM manager ou founder", "Vous gerez le CRM pour vos clients (agence, consulting)"].map((i) => (
                <p key={i} className="text-[12px] text-[#555] mb-2 flex items-start gap-2"><span className="text-[#22C55E] mt-0.5 shrink-0">+</span>{i}</p>
              ))}
            </div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <p className="text-[12px] font-semibold text-[#999] mb-3">Moins pertinent si</p>
              {["Vous n\u2019avez pas encore de CRM en place", "Votre base contient moins de 500 contacts", "Vous cherchez un guide specifique sur l\u2019outbound ou le cold email", "Vous n\u2019utilisez pas HubSpot (certaines sections sont specifiques)"].map((i) => (
                <p key={i} className="text-[12px] text-[#999] mb-2 flex items-start gap-2"><span className="text-[#CCC] mt-0.5 shrink-0">-</span>{i}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Download form */}
        <section id="telecharger" className="mb-16 scroll-mt-24">
          <div className="rounded-2xl border-2 border-[#22C55E]/20 bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(34,197,94,0.15)]">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#22C55E]/10 text-[12px] font-medium text-[#22C55E] mb-4">Gratuit</span>
                <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Telecharger le Guide Data Quality CRM</h2>
                <p className="text-[14px] text-[#666] leading-[1.7] mb-5">Remplissez le formulaire pour recevoir le guide complet par email.</p>
                <div className="space-y-2.5 mb-6">
                  {["50 pages de methode + cas clients reels", "Checklist audit 50 points prete a l\u2019emploi", "Grille de scoring qualite avec calcul automatique", "Prompts Claude pour le nettoyage et l\u2019enrichissement", "Workflow Make pret a importer"].map((item) => (
                    <p key={item} className="text-[13px] text-[#555] flex items-center gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {item}
                    </p>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-[11px] text-[#CCC]">
                  <span>Pas de spam</span><span>Desabonnement en 1 clic</span><span>RGPD</span>
                </div>
              </div>
              <div className="lg:w-[380px] shrink-0">
                <div className="rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-5">
                  <p className="text-[12px] font-semibold text-[#111] mb-4">Acceder au guide</p>
                  <div ref={formRef} id="hs-guide-data-quality-form" className="min-h-[200px]">
                    <div className="flex items-center justify-center h-[200px] text-[#CCC]">
                      <div className="text-center">
                        <svg className="mx-auto mb-2 animate-spin" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-6.219-8.56" /></svg>
                        <p className="text-[11px]">Chargement du formulaire...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <Badge>FAQ</Badge>
          </div>
          <div className="space-y-3">
            {[
              { q: "Le guide est-il vraiment gratuit ?", a: "Oui, 100% gratuit. On vous demande juste votre email professionnel pour vous l\u2019envoyer." },
              { q: "Le guide est-il specifique a HubSpot ?", a: "La majorite des principes (5 dimensions, deduplication, standardisation, enrichissement IA) s\u2019appliquent a tout CRM. Les captures et workflows sont sur HubSpot car c\u2019est notre specialite, mais la methode est transposable a Salesforce, Pipedrive, etc." },
              { q: "Faut-il HubSpot Ops Hub ?", a: "Non. Ops Hub facilite certaines automatisations (formatting, data quality automation), mais la majorite des actions du guide sont realisables avec HubSpot Pro et des workflows classiques + Make." },
              { q: "Les prompts Claude fonctionnent-ils avec ChatGPT ?", a: "Oui, les prompts sont adaptables a tout LLM. On recommande Claude pour la qualite du raisonnement sur les donnees structurees, mais les frameworks fonctionnent avec ChatGPT et Gemini aussi." },
              { q: "Peut-on etre accompagne par Ceres ?", a: "Oui. Le guide est un excellent point de depart. Si vous voulez aller plus vite, notre offre RevOps Part-Time inclut l\u2019audit et le nettoyage complet de votre CRM avec un consultant dedie." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <h3 className="text-[13px] font-semibold text-[#111] mb-2">{faq.q}</h3>
                <p className="text-[12px] text-[#777] leading-[1.65]">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-center">
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a reprendre le controle de vos donnees ?</h2>
            <p className="text-[14px] text-white/50 mb-6 max-w-[420px] mx-auto leading-[1.7]">Telechargez le guide ou reservez un appel pour un accompagnement sur mesure.</p>
            <div className="flex items-center justify-center gap-3">
              <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#22C55E] text-white text-[13px] font-medium hover:bg-[#1CAE4A] transition-colors">
                Telecharger le guide
              </button>
              <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-[13px] font-medium hover:bg-white/5 transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
