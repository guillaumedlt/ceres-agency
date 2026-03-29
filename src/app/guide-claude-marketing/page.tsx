"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "Guide Claude & Claude Code pour le Marketing B2B",
  description: "Le guide le plus complet en francais sur Claude et Claude Code pour le marketing B2B. 55 pages : 20+ prompts, 15 cas d\u2019usage, scripts Claude Code, MCP, workflows Make.",
  author: { "@type": "Organization", name: "Ceres" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  numberOfPages: 55,
  inLanguage: "fr",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
};

const chapters = [
  { num: "01", title: "Claude en 2026 : ou en est-on", desc: "L\u2019evolution de Claude depuis sa sortie. Les modeles disponibles, les capacites actuelles, et pourquoi Claude s\u2019impose comme le LLM de reference pour les professionnels.", pages: "p. 4-8" },
  { num: "02", title: "Pourquoi Claude pour le marketing B2B", desc: "Ce qui differencie Claude de ChatGPT et Gemini pour le marketing. Qualite du raisonnement, longueur de contexte, ton professionnel et fiabilite.", pages: "p. 9-13" },
  { num: "03", title: "15 cas d\u2019usage marketing avec Claude", desc: "De la creation de contenu a l\u2019analyse concurrentielle, en passant par le copywriting, les emails et la strategie. 15 cas d\u2019usage detailles avec resultats mesures.", pages: "p. 14-19" },
  { num: "04", title: "Claude pour le content marketing", desc: "Articles, LinkedIn, newsletters, SEO. Comment utiliser Claude pour produire du contenu de qualite a grande echelle sans perdre votre voix de marque.", pages: "p. 20-25" },
  { num: "05", title: "Claude pour l\u2019outbound et la prospection", desc: "Cold emails, icebreakers, sequences personnalisees. Comment Claude transforme votre prospection avec des messages hyper-personnalises a grande echelle.", pages: "p. 26-30" },
  { num: "06", title: "Claude pour le CRM et les operations", desc: "Nettoyage de donnees, scoring, automatisation des taches repetitives. Comment Claude s\u2019integre dans vos operations marketing et RevOps.", pages: "p. 31-35" },
  { num: "07", title: "Claude Code : l\u2019arme secrete", desc: "Introduction a Claude Code pour les non-developpeurs. Comment creer des outils internes, des scripts d\u2019automatisation et des dashboards sans equipe technique.", pages: "p. 36-40" },
  { num: "08", title: "Connecter Claude a votre stack (MCP, Make, API)", desc: "Model Context Protocol, workflows Make, API Claude. Comment connecter Claude a HubSpot, Notion, Slack et tous vos outils marketing.", pages: "p. 41-46" },
  { num: "09", title: "Prompts library : 20+ prompts marketing prouves", desc: "La bibliotheque complete de prompts testes en production. Content, outbound, CRM, analyse, strategie. Copier-coller et adapter a votre contexte.", pages: "p. 47-52" },
  { num: "10", title: "Le futur : agents autonomes et coworkers IA", desc: "Ce qui arrive en 2026-2027. Agents autonomes, Claude comme coworker, automatisation de bout en bout. Comment vous preparer des maintenant.", pages: "p. 53-55" },
];

const tools = [
  { name: "Claude", domain: "claude.ai" },
  { name: "Claude Code", domain: "claude.ai" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Make", domain: "make.com" },
  { name: "Lemlist", domain: "lemlist.com" },
  { name: "Clay", domain: "clay.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "Slack", domain: "slack.com" },
];

export default function GuideClaudeMarketingLandingPage() {
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((window as any).hbspt) {
      (window as any).hbspt.forms.create({ portalId: "2703445", formId: "461a976f-66db-4946-9e3f-883c83d4a084", region: "na1", target: "#hs-guide-claude-marketing-form" });
      return;
    }
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.async = true;
    script.onload = () => { if ((window as any).hbspt) (window as any).hbspt.forms.create({ portalId: "2703445", formId: "461a976f-66db-4946-9e3f-883c83d4a084", region: "na1", target: "#hs-guide-claude-marketing-form" }); };
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
            <span className="text-[#666]">Guide Claude &amp; Claude Code Marketing</span>
          </nav>
          <div className="mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D4A27F]/10 text-[12px] font-medium text-[#D4A27F]">Guide gratuit</span>
          </div>
          <h1 className="text-[36px] sm:text-[52px] font-semibold text-[#111] leading-[1.08] tracking-[-0.03em] mb-5">
            Guide Claude &amp; Claude Code pour le Marketing B2B
          </h1>
          <p className="text-[18px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-6">
            55 pages pour maitriser Claude et Claude Code dans votre marketing B2B. Prompts, scripts, MCP, workflows Make et cas d&apos;usage concrets.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            {[
              { value: "55", label: "pages" },
              { value: "10", label: "chapitres" },
              { value: "20+", label: "prompts" },
              { value: "15+", label: "cas d\u2019usage" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[24px] font-bold text-[#111]">{s.value}</div>
                <div className="text-[11px] text-[#999]">{s.label}</div>
              </div>
            ))}
          </div>

          <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D4A27F] text-white text-[14px] font-medium hover:bg-[#C4926F] transition-colors shadow-[0_4px_12px_-4px_rgba(212,162,127,0.4)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M8 2v8M4 7l4 4 4-4M2 13h12" /></svg>
            Telecharger gratuitement
          </button>
          <p className="text-[11px] text-[#CCC] mt-3">Pas de spam. Juste le guide.</p>
        </section>

        {/* Book mockup + what you'll learn */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-[200px] h-[260px] rounded-xl shadow-[8px_8px_30px_-10px_rgba(0,0,0,0.2)] shrink-0 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #D4A27F 0%, #B8956A 50%, #8B7355 100%)" }}>
                <div className="absolute inset-0 flex flex-col justify-between p-5">
                  <div>
                    <div className="w-8 h-0.5 bg-white/40 mb-3" />
                    <p className="text-white/60 text-[9px] font-medium uppercase tracking-wider">Ceres 2026</p>
                  </div>
                  <div>
                    <p className="text-white text-[15px] font-bold leading-[1.2] mb-1">Guide Claude &amp; Claude Code</p>
                    <p className="text-white/60 text-[9px]">55 pages | 10 chapitres</p>
                  </div>
                </div>
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-black/10" />
              </div>

              <div className="flex-1">
                <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Ce que vous allez apprendre</p>
                <div className="space-y-2.5">
                  {[
                    "Utiliser Claude pour produire du contenu marketing de qualite a grande echelle",
                    "Creer des cold emails hyper-personnalises avec Claude et Clay",
                    "Automatiser vos operations CRM et RevOps avec Claude Code",
                    "Connecter Claude a HubSpot, Notion et Slack via MCP",
                    "Construire des workflows Make avec l\u2019API Claude",
                    "Maitriser 20+ prompts marketing testes en production",
                    "Creer des outils internes avec Claude Code sans equipe technique",
                    "Comparer Claude, ChatGPT et Gemini pour choisir le bon LLM",
                  ].map((item) => (
                    <p key={item} className="text-[13px] text-[#555] flex items-start gap-2.5 leading-[1.6]">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#D4A27F] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
            <p className="text-[15px] text-[#666] max-w-[480px] mx-auto leading-[1.7]">Du content marketing aux agents autonomes, en passant par Claude Code et MCP. Le playbook IA marketing de Ceres.</p>
          </div>
          <div className="space-y-3">
            {chapters.map((ch) => (
              <div key={ch.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] transition-colors">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#D4A27F]/10 flex items-center justify-center text-[#D4A27F] text-[13px] font-bold shrink-0">{ch.num}</div>
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

        {/* Inclus dans le guide */}
        <section className="mb-16">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Inclus dans le guide</span>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-6">Tout ce qui est inclus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "55 pages de methode et exemples", desc: "Un guide structure, actionnable, avec des exemples concrets tires de nos missions chez Ceres.", color: "#D4A27F" },
                { title: "20+ prompts marketing prouves", desc: "Content, outbound, CRM, analyse concurrentielle, strategie. Testes en production sur des dizaines de clients.", color: "#B8956A" },
                { title: "5 scripts Claude Code", desc: "Scripts prets a l\u2019emploi pour automatiser l\u2019enrichissement, le reporting, le nettoyage CRM et la generation de contenu.", color: "#8B7355" },
                { title: "3 workflows Make complets", desc: "Scenarios Make avec l\u2019API Claude. Content pipeline, enrichissement outbound, sync CRM. Prets a importer.", color: "#6D00CC" },
                { title: "Guide MCP (Model Context Protocol)", desc: "Comment connecter Claude a HubSpot, Notion, Slack et vos outils marketing. Configuration pas a pas.", color: "#FF7A59" },
                { title: "Comparatif Claude vs ChatGPT vs Gemini", desc: "Benchmark detaille sur 10 taches marketing. Forces, faiblesses, cas d\u2019usage recommandes pour chaque LLM.", color: "#4B5EFC" },
                { title: "Checklist deploiement IA marketing", desc: "La checklist complete pour deployer Claude dans votre equipe marketing. De la strategie a l\u2019execution.", color: "#22C55E" },
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
              <img src="https://www.google.com/s2/favicons?domain=claude.ai&sz=32" alt="Claude" className="w-4 h-4" />
              <span className="text-[11px] font-semibold text-[#111]">Generateur de post LinkedIn</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#D4A27F]/10 text-[#D4A27F] font-medium">Chapitre 4</span>
            </div>
            <div className="rounded-xl bg-[#1a1a2e] p-4 mb-4">
              <pre className="text-[11px] text-[#E0E0E0] leading-[1.7] whitespace-pre-wrap font-mono">
{`// Prompt : generateur de post LinkedIn B2B
// Input: sujet, audience cible, ton souhaite

Tu es un expert en content marketing B2B.
Redige un post LinkedIn sur le sujet suivant :

Sujet : {sujet}
Audience : {audience_cible}
Ton : {ton} (ex: educatif, provoquant, storytelling)

Regles :
- Hook percutant en 1-2 lignes (doit arreter le scroll)
- Corps structure avec des sauts de ligne
- Maximum 1 300 caracteres
- Termine par une question ouverte ou un CTA
- Pas de hashtags dans le corps du texte
- 3-5 hashtags pertinents a la fin
- Ton professionnel mais humain, jamais corporate
- Utilise des donnees chiffrees si possible
- Pas de liste a puces generique

Format de sortie :
[HOOK]
[CORPS]
[CTA / QUESTION]
[HASHTAGS]`}
              </pre>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-[#999]">
              <span>Engagement moyen : <strong className="text-[#22C55E]">+45%</strong> vs posts non-assistes</span>
              <span>Teste sur <strong className="text-[#111]">120+</strong> posts</span>
            </div>
            <p className="mt-3 text-[11px] text-[#CCC]">19 autres prompts et techniques dans le guide complet.</p>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <p className="text-[14px] text-[#555] leading-[1.75] mb-4">&ldquo;Claude Code nous a permis de creer 5 outils internes en 3 semaines. Ce qui aurait pris 3 mois en dev traditionnel. Le guide de Ceres nous a montre exactement comment faire.&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D4A27F]/10 flex items-center justify-center text-[#D4A27F] text-[10px] font-bold">D</div>
              <div>
                <p className="text-[12px] font-semibold text-[#111]">Directeur des Operations</p>
                <p className="text-[10px] text-[#999]">Societe de gestion</p>
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
              {["Vous etes marketeur B2B et voulez integrer l\u2019IA dans votre quotidien", "Vous etes head of marketing et cherchez a scaler votre production", "Vous etes growth hacker et voulez automatiser avec Claude Code", "Vous etes founder tech-savvy et gerez le marketing vous-meme", "Vous etes en agence marketing et voulez proposer des services IA"].map((i) => (
                <p key={i} className="text-[12px] text-[#555] mb-2 flex items-start gap-2"><span className="text-[#22C55E] mt-0.5 shrink-0">+</span>{i}</p>
              ))}
            </div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <p className="text-[12px] font-semibold text-[#999] mb-3">Moins pertinent si</p>
              {["Vous etes en B2C (le guide est oriente B2B)", "Vous n\u2019avez jamais utilise un LLM (commencez par les bases)", "Vous cherchez un guide specifique sur les LinkedIn Ads", "Vous voulez un comparatif exhaustif de tous les LLM du marche"].map((i) => (
                <p key={i} className="text-[12px] text-[#999] mb-2 flex items-start gap-2"><span className="text-[#CCC] mt-0.5 shrink-0">-</span>{i}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Download form */}
        <section id="telecharger" className="mb-16 scroll-mt-24">
          <div className="rounded-2xl border-2 border-[#D4A27F]/20 bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(212,162,127,0.15)]">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#D4A27F]/10 text-[12px] font-medium text-[#D4A27F] mb-4">Gratuit</span>
                <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Telecharger le Guide Claude &amp; Claude Code</h2>
                <p className="text-[14px] text-[#666] leading-[1.7] mb-5">Remplissez le formulaire pour recevoir le guide complet par email.</p>
                <div className="space-y-2.5 mb-6">
                  {["55 pages de methode + exemples concrets", "20+ prompts marketing prouves et testes", "5 scripts Claude Code prets a l\u2019emploi", "3 workflows Make avec l\u2019API Claude", "Guide MCP + comparatif LLM + checklist deploiement"].map((item) => (
                    <p key={item} className="text-[13px] text-[#555] flex items-center gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-[#D4A27F] shrink-0"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
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
                  <div ref={formRef} id="hs-guide-claude-marketing-form" className="min-h-[200px]">
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
              { q: "Faut-il savoir coder pour utiliser Claude Code ?", a: "Non. Le chapitre 7 est concu pour les non-developpeurs. Claude Code vous permet de creer des outils sans ecrire une seule ligne de code vous-meme." },
              { q: "Les prompts fonctionnent-ils avec ChatGPT ou Gemini ?", a: "Les prompts sont optimises pour Claude, mais la plupart sont adaptables a d\u2019autres LLM. Le guide inclut un comparatif detaille pour vous aider a choisir." },
              { q: "Le guide couvre-t-il le MCP (Model Context Protocol) ?", a: "Oui. Le chapitre 8 est entierement consacre aux integrations : MCP pour connecter Claude a vos outils, workflows Make et utilisation de l\u2019API Claude." },
              { q: "Peut-on etre accompagne par Ceres ?", a: "Oui. Le guide est un excellent point de depart. Si vous voulez aller plus vite, notre offre RevOps Part-Time inclut le deploiement IA marketing complet avec un consultant dedie." },
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
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a maitriser Claude pour votre marketing ?</h2>
            <p className="text-[14px] text-white/50 mb-6 max-w-[420px] mx-auto leading-[1.7]">Telechargez le guide ou reservez un appel pour un accompagnement sur mesure.</p>
            <div className="flex items-center justify-center gap-3">
              <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#D4A27F] text-white text-[13px] font-medium hover:bg-[#C4926F] transition-colors">
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
