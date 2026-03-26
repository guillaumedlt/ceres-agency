"use client";

import { useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Cas clients Ceres - Agence RevOps & IA",
  description: "8 cas clients detailles : migrations CRM, audits HubSpot, deploiement IA, RevOps Part-Time. Beedeez, TotalEnergies, Alan, Kameleoon, Dougs, HiPay, Ringover, Elax Energie.",
  url: "https://ceres.agency/cas-clients",
  publisher: { "@type": "Organization", name: "Ceres" },
};

type CaseStudy = {
  slug: string;
  client: string;
  domain: string;
  industry: string;
  size: string;
  headline: string;
  results: { value: string; label: string }[];
  tags: string[];
  color: string;
  category: string;
  initials?: string;
  initialsBg?: string;
};

const categories = [
  { key: "all", label: "Tous les cas", color: "#111" },
  { key: "migration", label: "Migration CRM", color: "#4B5EFC" },
  { key: "audit", label: "Audit & RevOps", color: "#FF7A59" },
  { key: "ia", label: "IA & Automatisation", color: "#6D00CC" },
  { key: "tracking", label: "Tracking & Attribution", color: "#6C5CE7" },
  { key: "parttime", label: "RevOps Part-Time", color: "#22C55E" },
];

const caseStudies: CaseStudy[] = [
  {
    slug: "beedeez",
    client: "Beedeez",
    domain: "beedeez.com",
    industry: "SaaS EdTech",
    size: "50-100",
    headline: "Comment Beedeez a structure son RevOps et deploye l\u2019IA sur tout son cycle de vente",
    results: [
      { value: "+45%", label: "Pipeline genere" },
      { value: "-60%", label: "Temps admin" },
      { value: "3x", label: "Taux de reponse" },
    ],
    tags: ["HubSpot", "Claude", "MCP", "Lemlist", "Claap", "Clay"],
    color: "#4B5EFC",
    category: "ia",
  },
  {
    slug: "totalenergies",
    client: "TotalEnergies",
    domain: "totalenergies.com",
    industry: "Energie",
    size: "100 000+",
    headline: "Migration Dynamics vers HubSpot et unification multi-instances",
    results: [
      { value: "45K+", label: "Contacts migres" },
      { value: "0", label: "Perte de donnees" },
      { value: "22 sem", label: "Projet complet" },
    ],
    tags: ["HubSpot Enterprise", "Microsoft Dynamics", "Multi-region", "RGPD"],
    color: "#FF7A59",
    category: "migration",
  },
  {
    slug: "alan",
    client: "Alan",
    domain: "alan.com",
    industry: "AssurTech",
    size: "500+",
    headline: "Tracking marketing multi-touch et attribution dans HubSpot",
    results: [
      { value: "100%", label: "Leads traces" },
      { value: "+35%", label: "ROI mesurable" },
      { value: "6", label: "Modeles attribution" },
    ],
    tags: ["Tracking", "Attribution multi-touch", "UTM", "HubSpot", "GA4"],
    color: "#6C5CE7",
    category: "tracking",
  },
  {
    slug: "kameleoon",
    client: "Kameleoon",
    domain: "kameleoon.com",
    industry: "SaaS A/B Testing",
    size: "200+",
    headline: "Audit RevOps, restructuration des processus et migration HubSpot",
    results: [
      { value: "25\u219278", label: "Score audit /100" },
      { value: "+55%", label: "Visibilite pipeline" },
      { value: "90%+", label: "Adoption CRM" },
    ],
    tags: ["Audit RevOps", "Migration HubSpot", "Lead Scoring", "Process"],
    color: "#FF7A59",
    category: "audit",
  },
  {
    slug: "dougs",
    client: "Dougs",
    domain: "dougs.fr",
    industry: "FinTech / Comptabilite",
    size: "300+",
    headline: "Migration Salesforce vers HubSpot CRM et Marketing",
    results: [
      { value: "-45%", label: "Cout CRM annuel" },
      { value: "30K", label: "Contacts migres" },
      { value: "16 sem", label: "Time to value" },
    ],
    tags: ["Migration Salesforce", "HubSpot CRM", "HubSpot Marketing"],
    color: "#4B5EFC",
    category: "migration",
  },
  {
    slug: "hipay",
    client: "HiPay",
    domain: "hipay.com",
    initials: "Hi",
    initialsBg: "#6D00CC",
    industry: "FinTech / Paiement",
    size: "200+",
    headline: "Double migration Pardot + Salesforce vers HubSpot",
    results: [
      { value: "-50%", label: "Cout stack" },
      { value: "0", label: "Downtime" },
      { value: "20 sem", label: "2 migrations" },
    ],
    tags: ["Migration Pardot", "Migration Salesforce", "HubSpot", "FinTech"],
    color: "#6D00CC",
    category: "migration",
  },
  {
    slug: "ringover",
    client: "Ringover",
    domain: "ringover.com",
    industry: "SaaS Telecom",
    size: "200+",
    headline: "RevOps Part-Time : accompagnement continu sur 12 mois",
    results: [
      { value: "+65%", label: "Pipeline 12 mois" },
      { value: "88%", label: "Forecast accuracy" },
      { value: "40%", label: "Du cout recrutement" },
    ],
    tags: ["RevOps Part-Time", "HubSpot", "IA Claude", "MCP", "Outbound"],
    color: "#22C55E",
    category: "parttime",
  },
  {
    slug: "elax-energie",
    client: "Elax Energie",
    domain: "elax-energie.fr",
    initials: "EE",
    initialsBg: "#22C55E",
    industry: "Energie renouvelable",
    size: "10-50",
    headline: "Audit HubSpot, remise a plat et mise en place RevOps",
    results: [
      { value: "17\u219276", label: "Score audit /100" },
      { value: "-75%", label: "Temps admin CRM" },
      { value: "8 sem", label: "Projet complet" },
    ],
    tags: ["Audit HubSpot", "Remise a plat CRM", "RevOps", "Workflows"],
    color: "#22C55E",
    category: "audit",
  },
  {
    slug: "edenred",
    client: "Edenred",
    domain: "edenred.com",
    industry: "Solutions de paiement",
    size: "12 000+",
    headline: "Optimisation de la connexion HubSpot-Salesforce pour une filiale Edenred",
    results: [
      { value: "100%", label: "Leads synces" },
      { value: "-80%", label: "Erreurs de sync" },
      { value: "0", label: "Doublons" },
    ],
    tags: ["HubSpot", "Salesforce", "Integration", "Attribution", "Sync"],
    color: "#FF7A59",
    category: "migration",
  },
  {
    slug: "tennaxia",
    client: "Tennaxia",
    domain: "tennaxia.com",
    industry: "SaaS ESG/RSE",
    size: "100+",
    headline: "RevOps Part-Time sur 6 mois pour structurer la croissance de Tennaxia",
    results: [
      { value: "+50%", label: "Pipeline genere" },
      { value: "-55%", label: "Temps admin" },
      { value: "6 mois", label: "Accompagnement" },
    ],
    tags: ["RevOps Part-Time", "HubSpot", "Scoring", "Outbound", "ESG"],
    color: "#22C55E",
    category: "parttime",
  },
  {
    slug: "opendatasoft",
    client: "Opendatasoft",
    domain: "opendatasoft.com",
    industry: "SaaS Data",
    size: "100+",
    headline: "HubSpot Admin externalise pour Opendatasoft",
    results: [
      { value: "40+", label: "Workflows crees" },
      { value: "< 4h", label: "Temps resolution" },
      { value: "85+", label: "Score data quality" },
    ],
    tags: ["HubSpot Admin", "Workflows", "Data Quality", "Support"],
    color: "#4B5EFC",
    category: "audit",
  },
  {
    slug: "societe-de-gestion",
    client: "Societe de gestion",
    domain: "amf-france.org",
    initials: "SG",
    initialsBg: "#1B2A4A",
    industry: "Asset Management",
    size: "30",
    headline: "IA Claude et Claude Code pour optimiser les processus d\u2019une societe de gestion",
    results: [
      { value: "-70%", label: "Temps rapports" },
      { value: "5", label: "Outils crees en 3 sem" },
      { value: "2 mois", label: "ROI atteint" },
    ],
    tags: ["Claude", "Claude Code", "IA", "Finance", "Automatisation", "SIX"],
    color: "#6D00CC",
    category: "ia",
  },
  {
    slug: "iroko",
    client: "Iroko",
    domain: "iroko.eu",
    industry: "FinTech / SCPI",
    size: "50-100",
    headline: "Adoption d\u2019agents IA Claude pour accelerer le cycle de vente d\u2019Iroko",
    results: [
      { value: "4", label: "Agents IA actifs" },
      { value: "+30%", label: "Taux de conversion" },
      { value: "200h+", label: "Gagnees par mois" },
    ],
    tags: ["Agents IA", "Claude", "MCP", "HubSpot", "Claap", "Immobilier"],
    color: "#6D00CC",
    category: "ia",
  },
];

const catColors: Record<string, string> = { migration: "#4B5EFC", audit: "#FF7A59", ia: "#6D00CC", tracking: "#6C5CE7", parttime: "#22C55E" };
const catLabels: Record<string, string> = { migration: "Migration CRM", audit: "Audit & RevOps", ia: "IA & Automatisation", tracking: "Tracking & Attribution", parttime: "RevOps Part-Time" };

export default function CasClientsPage() {
  const [cat, setCat] = useState("all");
  const filtered = cat === "all" ? caseStudies : caseStudies.filter((cs) => cs.category === cat);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.14, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "50%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "72%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">
        {/* Header */}
        <section className="text-center mb-10">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
            <span className="text-[#666]">Cas clients</span>
          </nav>
          <div className="mb-4"><Badge>Cas clients</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Ils ont structure leur RevOps avec Ceres
          </h1>
          <p className="text-[17px] text-[#666] max-w-[520px] mx-auto leading-[1.7]">
            Migrations CRM, audits HubSpot, deploiement IA, accompagnement RevOps. Decouvrez les projets de nos clients.
          </p>
        </section>

        {/* Logos clients */}
        <section className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-5">
            {caseStudies.map((cs) => (
              <Link key={cs.slug} href={`/cas-clients/${cs.slug}`} className="flex items-center gap-2 text-[#999] hover:text-[#111] transition-colors group">
                {cs.initials ? (
                  <div className="w-5 h-5 rounded flex items-center justify-center text-white text-[8px] font-bold shrink-0" style={{ background: cs.initialsBg }}>{cs.initials}</div>
                ) : (
                  <img src={`https://www.google.com/s2/favicons?domain=${cs.domain}&sz=32`} alt={cs.client} className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all" />
                )}
                <span className="text-[13px] font-medium">{cs.client}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Filtres par categorie */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-medium transition-all ${
                  cat === c.key
                    ? "text-white shadow-sm"
                    : "text-[#999] bg-white border border-[#F2F2F2] hover:border-[#DDD] hover:text-[#666]"
                }`}
                style={cat === c.key ? { background: c.color } : {}}
              >
                {c.label}
                {c.key !== "all" && (
                  <span className="ml-1.5 text-[10px] opacity-60">
                    ({caseStudies.filter((cs) => cs.category === c.key).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Nombre de resultats */}
        <div className="mb-4">
          <p className="text-[12px] text-[#999]">{filtered.length} cas client{filtered.length > 1 ? "s" : ""}</p>
        </div>

        {/* Case studies */}
        <section className="space-y-5 mb-16">
          {filtered.map((cs) => (
            <Link
              key={cs.slug}
              href={`/cas-clients/${cs.slug}`}
              className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] hover:border-[#DDD] transition-all group"
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Left */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    {cs.initials ? (
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[11px] font-bold shrink-0" style={{ background: cs.initialsBg }}>{cs.initials}</div>
                    ) : (
                      <img src={`https://www.google.com/s2/favicons?domain=${cs.domain}&sz=64`} alt={cs.client} className="w-8 h-8 rounded-lg" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-[15px] font-semibold text-[#111]">{cs.client}</p>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-medium text-white" style={{ background: catColors[cs.category] }}>
                          {catLabels[cs.category]}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#999]">{cs.industry} | {cs.size} personnes</p>
                    </div>
                  </div>
                  <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#111] leading-[1.25] tracking-[-0.015em] mb-3 group-hover:text-[#4B5EFC] transition-colors">
                    {cs.headline}
                  </h2>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {cs.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 rounded-md border border-[#F2F2F2] text-[#999]">{tag}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#4B5EFC] group-hover:gap-2.5 transition-all">
                    Lire le cas client
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                  </span>
                </div>

                {/* Right: Results */}
                <div className="lg:w-[240px] shrink-0">
                  <div className="space-y-2">
                    {cs.results.map((r) => (
                      <div key={r.label} className="flex items-center justify-between rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] px-3 py-2">
                        <span className="text-[11px] text-[#777]">{r.label}</span>
                        <span className="text-[16px] font-bold" style={{ color: cs.color }}>{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Services correspondants */}
        <section className="mb-16">
          <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Nos services</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Audit RevOps", href: "/audit-revops", desc: "Diagnostic 80 points", color: "#FF7A59" },
              { label: "RevOps Part-Time", href: "/revops-part-time", desc: "Un expert dedie", color: "#4B5EFC" },
              { label: "Agence HubSpot", href: "/agence-hubspot", desc: "Setup, migration, optimisation", color: "#FF7A59" },
              { label: "Agents IA", href: "/agents-ia", desc: "Claude, MCP, automatisation", color: "#6D00CC" },
            ].map((s) => (
              <Link key={s.label} href={s.href} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors group">
                <div className="w-2 h-2 rounded-sm mb-2" style={{ background: s.color }} />
                <p className="text-[12px] font-semibold text-[#111] group-hover:text-[#4B5EFC] transition-colors">{s.label}</p>
                <p className="text-[10px] text-[#999]">{s.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Coming soon */}
        <section className="mb-16">
          <div className="rounded-2xl border border-dashed border-[#E0E0E0] bg-[#FAFAFA] p-8 text-center">
            <p className="text-[14px] text-[#999] mb-2">D&apos;autres cas clients arrivent bientot</p>
            <p className="text-[12px] text-[#CCC]">Manpower, Spendesk, Payfit et plus.</p>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-center">
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Votre entreprise pourrait etre le prochain cas client</h2>
            <p className="text-[14px] text-white/50 mb-6 max-w-[420px] mx-auto leading-[1.7]">Reservez un appel decouverte de 30 minutes pour discuter de vos enjeux RevOps.</p>
            <div className="flex items-center justify-center gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF7A59] text-white text-[13px] font-medium hover:bg-[#E86D4F] transition-colors">
                <span className="w-2 h-2 rounded-sm bg-white/30" />Reserver un appel
              </a>
              <Link href="/audit-revops" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-[13px] font-medium hover:bg-white/5 transition-colors">
                Demander un audit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
