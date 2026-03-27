"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Guide Outbound B2B : cold email, LinkedIn et IA en 2026",
  description: "55 pages pour lancer et scaler une strategie outbound B2B. Cold email, LinkedIn, Clay, Lemlist, Claude, enrichissement IA, warm-up et sequences multicanal.",
  author: { "@type": "Organization", name: "Ceres" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  numberOfPages: 55,
  inLanguage: "fr",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
};

const chapters = [
  { num: "01", title: "L\u2019outbound B2B en 2026", desc: "Ce qui a change. Pourquoi l\u2019inbound ne suffit plus. Les nouvelles regles du jeu : delivrabilite, IA, multi-canal, hyper-personnalisation.", pages: "p. 4-8" },
  { num: "02", title: "Construire votre ICP outbound", desc: "Definir qui cibler avec precision. Firmographics, technographics, signaux d\u2019achat. Template ICP outbound pret a l\u2019emploi.", pages: "p. 9-13" },
  { num: "03", title: "Sourcing : construire vos listes", desc: "LinkedIn Sales Navigator, Clay, Apollo, Dropcontact, Societeinfo. Comment construire des listes de 1 000+ contacts qualifies en moins d\u2019une heure.", pages: "p. 14-18" },
  { num: "04", title: "Enrichissement IA avec Clay + Claude", desc: "Waterfall enrichment, AI columns, icebreakers generes par IA, pain points identifies automatiquement. La methode qu\u2019on utilise chez Ceres.", pages: "p. 19-24" },
  { num: "05", title: "Warm-up et delivrabilite", desc: "SPF, DKIM, DMARC, custom tracking domain, warm-up progressif. Comment passer de 0 a 40 emails/jour par boite sans atterrir en spam.", pages: "p. 25-28" },
  { num: "06", title: "Rediger des cold emails qui convertissent", desc: "Les frameworks qui marchent en 2026. Sujets, icebreakers, corps, CTA. 12 templates prouves avec taux de reponse mesures.", pages: "p. 29-34" },
  { num: "07", title: "Sequences multicanal : email + LinkedIn", desc: "Combiner cold email et LinkedIn dans Lemlist. Timing, conditions, A/B testing. 5 sequences completes par use case.", pages: "p. 35-40" },
  { num: "08", title: "Lemlist : configuration complete", desc: "Setup de A a Z. Rotation de boites, AI enrichment, AI Variables, sequences, integrations CRM. Tout ce qu\u2019on configure chez nos clients.", pages: "p. 41-45" },
  { num: "09", title: "IA et automatisation avancee", desc: "Claude Code pour generer des scripts d\u2019enrichissement, agents Make pour le routing, scoring predictif, resumes de calls automatiques.", pages: "p. 46-50" },
  { num: "10", title: "Mesurer, iterer et scaler", desc: "Les KPIs outbound, les benchmarks 2026, comment passer de 500 a 5 000 prospects par mois sans perdre en qualite.", pages: "p. 51-55" },
];

const tools = [
  { name: "Lemlist", domain: "lemlist.com" },
  { name: "Clay", domain: "clay.com" },
  { name: "Claude", domain: "claude.ai" },
  { name: "LinkedIn", domain: "linkedin.com" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Make", domain: "make.com" },
  { name: "Dropcontact", domain: "dropcontact.com" },
  { name: "Apollo", domain: "apollo.io" },
];

export default function GuideOutboundLandingPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({ portalId: "2703445", formId: "461a976f-66db-4946-9e3f-883c83d4a084", region: "na1", target: "#hs-guide-outbound-form" });
      return;
    }
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => { if ((window as any).hbspt) (window as any).hbspt.forms.create({ portalId: "2703445", formId: "461a976f-66db-4946-9e3f-883c83d4a084", region: "na1", target: "#hs-guide-outbound-form" }); };
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
            <span className="text-[#666]">Guide Outbound B2B</span>
          </nav>
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#6C5CE7]/10 text-[12px] font-medium text-[#6C5CE7]">Guide gratuit</span>
          </div>
          <h1 className="text-[36px] sm:text-[52px] font-semibold text-[#111] leading-[1.08] tracking-[-0.03em] mb-5">
            Guide Outbound B2B
          </h1>
          <p className="text-[18px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-6">
            55 pages pour lancer et scaler une strategie outbound avec les techniques de 2026. Cold email, LinkedIn, Clay, Lemlist, Claude et IA.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {[
              { value: "55", label: "pages" },
              { value: "12", label: "templates emails" },
              { value: "5", label: "sequences completes" },
              { value: "10", label: "chapitres" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[24px] font-bold text-[#111]">{s.value}</div>
                <div className="text-[11px] text-[#999]">{s.label}</div>
              </div>
            ))}
          </div>

          <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#6C5CE7] text-white text-[14px] font-medium hover:bg-[#5B4BD6] transition-colors shadow-[0_4px_12px_-4px_rgba(108,92,231,0.4)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 2v8M4 7l4 4 4-4M2 13h12" /></svg>
            Telecharger gratuitement
          </button>
          <p className="text-[11px] text-[#CCC] mt-3">Pas de spam. Juste le guide.</p>
        </section>

        {/* Book mockup + what you'll learn */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-[200px] h-[260px] rounded-xl shadow-[8px_8px_30px_-10px_rgba(0,0,0,0.2)] shrink-0 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #6C5CE7 0%, #4B5EFC 50%, #3B3B98 100%)" }}>
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div>
                    <div className="w-8 h-0.5 bg-white/40 mb-3" />
                    <p className="text-white/60 text-[9px] font-medium uppercase tracking-wider">Ceres 2026</p>
                  </div>
                  <div>
                    <p className="text-white text-[15px] font-bold leading-[1.2] mb-1">Guide Outbound B2B</p>
                    <p className="text-white/60 text-[9px]">55 pages | 10 chapitres</p>
                  </div>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-black/10" />
              </div>

              <div className="flex-1">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Ce que vous allez apprendre</p>
                <div className="space-y-2.5">
                  {[
                    "Construire des listes de 1 000+ contacts qualifies en 1 heure avec Clay",
                    "Enrichir chaque prospect avec des donnees IA (icebreakers, pain points, stack)",
                    "Configurer Lemlist de A a Z : rotation, warm-up, AI Variables, sequences",
                    "Rediger des cold emails a 8-15% de taux de reponse",
                    "Combiner email + LinkedIn dans des sequences multicanal",
                    "Utiliser Claude et Claude Code pour automatiser l\u2019enrichissement",
                    "Connecter l\u2019outbound a votre CRM (HubSpot) via Make",
                    "Scaler de 500 a 5 000 prospects par mois sans perdre en qualite",
                  ].map((item) => (
                    <p key={item} className="text-[13px] text-[#555] flex items-start gap-2.5 leading-[1.6]">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#6C5CE7] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
            <h2 className="text-[24px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-4 mb-3">10 chapitres pour tout maitriser</h2>
            <p className="text-[15px] text-[#666] max-w-[480px] mx-auto leading-[1.7]">Du sourcing a la mesure, en passant par l&apos;IA et le multicanal. Le playbook qu&apos;on utilise chez Ceres.</p>
          </div>
          <div className="space-y-3">
            {chapters.map((ch) => (
              <div key={ch.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[13px] font-bold shrink-0">{ch.num}</div>
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
                { title: "12 templates d\u2019emails prouves", desc: "Cold emails testes sur +50 campagnes. Taux de reponse mesure : 8-15%. Copier-coller et adapter.", color: "#6C5CE7" },
                { title: "5 sequences multicanal completes", desc: "Email + LinkedIn, 4-6 etapes chacune. SaaS B2B, services, recrutement, immobilier, consulting.", color: "#4B5EFC" },
                { title: "Template ICP outbound", desc: "Grille pour definir votre cible ideale : firmographics, technographics, signaux d\u2019achat. Format Notion.", color: "#FF7A59" },
                { title: "Checklist warm-up complete", desc: "SPF, DKIM, DMARC, custom domain, planning warm-up 3 semaines. Pour ne rien oublier.", color: "#22C55E" },
                { title: "Prompts Claude pour l\u2019enrichissement", desc: "15 prompts pour generer icebreakers, analyser des profils, identifier des pain points. Testes en production.", color: "#D4A27F" },
                { title: "Workflow Make : Lemlist vers HubSpot", desc: "Scenario Make pret a importer. Sync reponses Lemlist vers HubSpot avec creation de deal automatique.", color: "#6D00CC" },
                { title: "Calculateur de volume d\u2019envoi", desc: "Google Sheets pour calculer le nombre de boites email, le volume quotidien et le budget mensuel.", color: "#6C5CE7" },
                { title: "Grille de scoring des campagnes", desc: "Template pour mesurer et comparer vos campagnes. Taux d\u2019ouverture, reponse, meeting, deal.", color: "#4B5EFC" },
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

        {/* Preview prompt */}
        <section className="mb-16">
          <div className="text-center mb-6">
            <Badge>Apercu</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Un exemple du guide</h2>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="flex items-center gap-2 mb-4">
              <img src="https://www.google.com/s2/favicons?domain=clay.com&sz=32" alt="Clay" className="w-4 h-4" />
              <span className="text-[11px] font-semibold text-[#111]">Enrichissement Clay + Claude</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#6C5CE7]/10 text-[#6C5CE7] font-medium">Chapitre 4</span>
            </div>
            <div className="rounded-xl bg-[#1a1a2e] p-4 mb-4">
              <pre className="text-[11px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">
{`// Clay AI Column : generer un icebreaker personnalise
// Input: LinkedIn profile summary, company news

Prompt:
"A partir du profil LinkedIn suivant et de l'actualite
de l'entreprise, genere un icebreaker de prospection
en 1-2 phrases maximum.

Regles :
- Reference un element SPECIFIQUE et recent
- Ton professionnel mais naturel
- Pas de flatterie excessive
- Maximum 25 mots
- Ne mentionne PAS LinkedIn

Profil : {linkedin_summary}
Actualite : {company_recent_news}
Poste : {job_title} chez {company_name}"

// Output moyen : taux de reponse +35% vs email generique`}
              </pre>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-[#999]">
              <span>Taux de reponse : <strong className="text-[#22C55E]">11.8%</strong></span>
              <span>Teste sur <strong className="text-[#111]">3 200</strong> prospects</span>
            </div>
            <p className="mt-3 text-[11px] text-[#CCC]">14 autres prompts et techniques dans le guide complet.</p>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <p className="text-[14px] text-[#555] leading-[1.75] mb-4">&ldquo;On a lance notre premier canal outbound avec les methodes du guide. En 8 semaines : 62% d&apos;ouverture, 11.8% de taux de reponse, 34 RDV generes. Le combo Clay + Claude + Lemlist est redoutable.&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#6C5CE7]/10 flex items-center justify-center text-[#6C5CE7] text-[10px] font-bold">H</div>
              <div>
                <p className="text-[12px] font-semibold text-[#111]">Hamza</p>
                <p className="text-[10px] text-[#999]">Head of Sales, Beedeez</p>
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
              {["Vous lancez votre premier canal outbound", "Vous voulez ameliorer vos taux de reponse", "Vous utilisez deja Lemlist ou un outil de cold email", "Vous voulez integrer l\u2019IA dans votre prospection", "Vous etes SDR, BDR, founder ou head of sales", "Vous gerez la prospection pour vos clients (agence)"].map((i) => (
                <p key={i} className="text-[12px] text-[#555] mb-2 flex items-start gap-2"><span className="text-[#22C55E] mt-0.5 shrink-0">+</span>{i}</p>
              ))}
            </div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <p className="text-[12px] font-semibold text-[#999] mb-3">Moins pertinent si</p>
              {["Vous etes en B2C (le guide est 100% B2B)", "Vous n\u2019avez pas encore de product-market fit", "Vous cherchez un guide specifique LinkedIn Ads", "Votre ACV est inferieur a 500 EUR (cold email peu rentable)"].map((i) => (
                <p key={i} className="text-[12px] text-[#999] mb-2 flex items-start gap-2"><span className="text-[#CCC] mt-0.5 shrink-0">-</span>{i}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Download form */}
        <section id="telecharger" className="mb-16 scroll-mt-24">
          <div className="rounded-2xl border-2 border-[#6C5CE7]/20 bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(108,92,231,0.15)]">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#6C5CE7]/10 text-[12px] font-medium text-[#6C5CE7] mb-4">Gratuit</span>
                <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Telecharger le Guide Outbound B2B</h2>
                <p className="text-[14px] text-[#666] leading-[1.7] mb-5">Remplissez le formulaire pour recevoir le guide complet par email.</p>
                <div className="space-y-2.5 mb-6">
                  {["55 pages de methode + exemples reels", "12 templates d\u2019emails prouves (8-15% reponse)", "5 sequences multicanal completes", "15 prompts Claude pour l\u2019enrichissement", "Workflow Make pret a importer"].map((item) => (
                    <p key={item} className="text-[13px] text-[#555] flex items-center gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#6C5CE7] shrink-0"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                  <div ref={formRef} id="hs-guide-outbound-form" className="min-h-[200px]">
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
              { q: "Faut-il utiliser Lemlist obligatoirement ?", a: "Non. Les techniques s\u2019appliquent a tout outil de cold email (Lemlist, Emelia, Instantly, etc.). Les captures sont sur Lemlist car c\u2019est notre partenaire, mais les principes sont universels." },
              { q: "Le guide couvre-t-il LinkedIn ?", a: "Oui. Le chapitre 7 est entierement consacre aux sequences multicanal email + LinkedIn. On explique quand et comment ajouter LinkedIn dans vos sequences." },
              { q: "Les prompts Claude fonctionnent-ils avec ChatGPT ?", a: "Oui, les prompts sont adaptables a tout LLM. On recommande Claude pour la qualite du raisonnement, mais les frameworks fonctionnent avec ChatGPT et Gemini aussi." },
              { q: "Peut-on etre accompagne par Ceres ?", a: "Oui. Le guide est un excellent point de depart. Si vous voulez aller plus vite, notre offre RevOps Part-Time inclut le deploiement outbound complet avec un consultant dedie." },
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
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a lancer votre outbound ?</h2>
            <p className="text-[14px] text-white/50 mb-6 max-w-[420px] mx-auto leading-[1.7]">Telechargez le guide ou reservez un appel pour un accompagnement sur mesure.</p>
            <div className="flex items-center justify-center gap-3">
              <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#6C5CE7] text-white text-[13px] font-medium hover:bg-[#5B4BD6] transition-colors">
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
