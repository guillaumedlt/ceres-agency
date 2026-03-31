import Connector from "@/components/marketing/Connector";
import type { Metadata } from "next";
import Badge from "@/components/marketing/Badge";
import Link from "next/link";
import ClaudeFAQ from "@/components/marketing/ClaudeFAQ";

export const metadata: Metadata = {
  title: "Claude pour le business B2B : IA appliquee au RevOps, Marketing & Sales | Ceres",
  description:
    "Decouvrez comment Claude et Claude Code transforment vos operations B2B. 50+ cas d'usage concrets en RevOps, marketing, sales, service, developpement et data.",
  keywords: [
    "claude ia business", "claude b2b", "claude revops", "claude marketing",
    "claude sales", "anthropic business", "ia commerciale", "claude hubspot",
    "claude code", "claude code business", "mcp hubspot", "ia revops",
    "claude code logiciel", "migration donnees ia", "automatisation claude",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Claude pour le business B2B",
      description: "50+ cas d'usage concrets de Claude et Claude Code pour les operations B2B.",
      url: "https://ceres.agency/claude-business",
      publisher: { "@type": "Organization", name: "Ceres" },
      inLanguage: "fr-FR",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Comment Claude peut aider mon business B2B ?", acceptedAnswer: { "@type": "Answer", text: "Claude intervient sur 6 piliers : RevOps, marketing, sales, service client, developpement d'outils internes et migration de donnees. Plus de 50 cas d'usage concrets deployes chez nos clients." } },
        { "@type": "Question", name: "C'est quoi Claude Code ?", acceptedAnswer: { "@type": "Answer", text: "Claude Code est un agent de developpement autonome qui cree des logiciels, dashboards, scripts et outils internes. Il ecrit du code, execute des commandes et deploie des applications completes." } },
        { "@type": "Question", name: "Combien de temps pour deployer Claude dans une equipe ?", acceptedAnswer: { "@type": "Answer", text: "Premiers use cases en production en 1 semaine. Projet complet (MCP, workflows, formation) en 2-4 semaines." } },
      ],
    },
  ],
};

export default function ClaudeBusinessPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "5%", width: 340, height: 340, borderRadius: "50%", background: "#D4A27F", opacity: 0.14, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "15%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "30%", width: 320, height: 320, borderRadius: "50%", background: "#4B5EFC", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "45%", width: 280, height: 280, borderRadius: "50%", background: "#6C5CE7", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "60%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "78%", width: 320, height: 320, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6">

        {/* Hero */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Claude x Ceres</Badge></div>
          <div className="flex items-center justify-center gap-3 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.google.com/s2/favicons?domain=claude.ai&sz=64" alt="Claude" width={36} height={36} className="rounded-lg" />
            <span className="text-[22px] font-bold text-[#8B7355] tracking-[-0.02em]">Claude</span>
          </div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            50+ facons dont Claude transforme votre business B2B
          </h1>
          <p className="text-[17px] text-[#666] max-w-[600px] mx-auto leading-[1.7] mb-8">
            Claude, Claude Code, MCP. On les utilise chaque jour pour nos clients. Pas des demos, pas de la theorie. Des resultats en production. Voici tout ce que vous pouvez faire.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            {[
              { label: "50+", desc: "Cas d'usage" },
              { label: "6", desc: "Piliers couverts" },
              { label: "10x", desc: "Plus rapide" },
              { label: "0", desc: "Ligne de code requise" },
            ].map((s) => (
              <div key={s.label} className="text-center px-4">
                <p className="text-[22px] font-bold text-[#111]">{s.label}</p>
                <p className="text-[10px] text-[#999]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ===================== PILIER 1 : REVOPS ===================== */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#FF7A59] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
              </div>
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">RevOps &amp; Operations</h2>
                <p className="text-[12px] text-[#999]">Structurer, automatiser et optimiser vos operations commerciales</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { task: "Scoring predictif multi-criteres", detail: "Claude analyse votre historique de deals pour identifier les patterns de conversion et creer un modele de scoring adapte a votre marche.", time: "30 min vs 2 semaines" },
                { task: "Audit data quality CRM", detail: "Detecte les doublons, champs vides, formats incorrects, contacts inactifs. Genere un rapport priorise avec actions correctives.", time: "5 min vs 3 jours" },
                { task: "Enrichissement massif de contacts", detail: "Via Clay + Claude, enrichit 500 fiches contacts en batch : poste, taille entreprise, secteur, technologie, signaux d'achat.", time: "3 min vs 2 heures" },
                { task: "Generation de SLA marketing-sales", detail: "Analyse votre pipeline et genere un SLA adapte : definitions MQL/SQL, engagements, KPIs, template de reunion hebdo.", time: "10 min vs 2 jours" },
                { task: "Mapping et migration de donnees", detail: "Analyse la structure de votre CRM source, propose un mapping vers HubSpot, detecte les incoherences et genere le plan de migration.", time: "1h vs 1 semaine" },
                { task: "Reporting automatise", detail: "Genere des rapports hebdo/mensuels avec analyse des tendances, alertes sur les anomalies et recommandations actionnables.", time: "2 min vs 2 heures" },
                { task: "Nettoyage et standardisation", detail: "Standardise les noms d'entreprises, numeros de telephone, adresses, codes postaux. Normalise les valeurs de champs personnalises.", time: "5 min vs 1 jour" },
                { task: "Forecast commercial predictif", detail: "Analyse le pipeline, la velocite des deals, le taux de conversion par etape et genere un forecast fiable par mois/trimestre.", time: "10 min vs 4 heures" },
              ].map((item) => (
                <div key={item.task} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#E8E8E8] transition-colors">
                  <h4 className="text-[13px] font-semibold text-[#111] mb-1">{item.task}</h4>
                  <p className="text-[11px] text-[#777] leading-[1.6] mb-2">{item.detail}</p>
                  <span className="text-[10px] font-medium text-[#FF7A59]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ===================== PILIER 2 : MARKETING ===================== */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#6C5CE7] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" /></svg>
              </div>
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Marketing &amp; Content</h2>
                <p className="text-[12px] text-[#999]">Creer, optimiser et distribuer du contenu a grande echelle</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { task: "Articles SEO complets (2500+ mots)", detail: "Structure, recherche, redaction, meta tags, JSON-LD, maillage interne. Articles experts avec donnees, exemples et schemas.", time: "15 min vs 1 journee" },
                { task: "Sequences email marketing", detail: "Cree des sequences de 5-7 emails de nurturing adaptes a chaque persona. Objets A/B testes, CTAs, personnalisation par segment.", time: "20 min vs 3 heures" },
                { task: "Landing pages optimisees", detail: "Copy complet : headline, sous-titre, bullet points, social proof, FAQ, CTA. Optimise pour la conversion et le SEO.", time: "10 min vs 2 heures" },
                { task: "Calendrier editorial (3 mois)", detail: "Analyse vos keywords, vos concurrents et votre pipeline pour proposer un calendrier de 30-50 sujets priorises par impact SEO.", time: "15 min vs 1 jour" },
                { task: "Optimisation GEO (LLMs)", detail: "Restructure votre contenu pour apparaitre dans les reponses de Claude, ChatGPT et Perplexity. Structured data, FAQ, E-E-A-T.", time: "30 min vs 3 jours" },
                { task: "Newsletters personnalisees", detail: "Genere des newsletters adaptees a chaque segment de votre base. Contenu, ton et CTA varies par persona.", time: "10 min vs 1 heure" },
                { task: "Posts LinkedIn et social media", detail: "Cree des posts LinkedIn adaptes a votre voix de marque. Hook, storytelling, CTA. 10 posts en 5 minutes.", time: "5 min vs 1 heure" },
                { task: "Analyse concurrentielle", detail: "Analyse les sites, contenus, positionnement et messaging de vos concurrents. Rapport structure avec opportunites.", time: "10 min vs 4 heures" },
              ].map((item) => (
                <div key={item.task} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#E8E8E8] transition-colors">
                  <h4 className="text-[13px] font-semibold text-[#111] mb-1">{item.task}</h4>
                  <p className="text-[11px] text-[#777] leading-[1.6] mb-2">{item.detail}</p>
                  <span className="text-[10px] font-medium text-[#6C5CE7]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ===================== PILIER 3 : SALES ===================== */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#4B5EFC] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>
              </div>
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Sales &amp; Prospection</h2>
                <p className="text-[12px] text-[#999]">Prospecter, qualifier et closer plus vite</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { task: "Icebreakers personnalises en batch", detail: "Analyse le profil LinkedIn, les actualites de l'entreprise, les recrutements et genere un icebreaker unique par prospect.", time: "200 icebreakers en 5 min" },
                { task: "Resumes de calls automatiques", detail: "Transcription + resume structure : points abordes, decisions, objections, next steps. Injecte directement dans la fiche CRM.", time: "30 sec vs 15 min" },
                { task: "Sequences outbound multicanal", detail: "Genere des sequences de 5-8 touchpoints (email, LinkedIn, call) adaptees a chaque ICP avec personnalisation par variable.", time: "15 min vs 3 heures" },
                { task: "Analyse win/loss", detail: "Analyse vos deals gagnes et perdus, identifie les patterns, les objections recurrentes et les facteurs de succes.", time: "15 min vs 2 jours" },
                { task: "Preparation de calls", detail: "Brief pre-call complet : historique interactions, deals en cours, actualites de l'entreprise, questions a poser, objections anticipees.", time: "1 min vs 20 min" },
                { task: "Coaching commercial", detail: "Analyse les transcriptions de calls et genere du feedback : ratio ecoute/parole, questions posees, gestion des objections.", time: "2 min vs 30 min" },
                { task: "Propositions commerciales", detail: "Genere des propositions sur-mesure a partir du brief client : contexte, approche, livrables, planning, pricing.", time: "15 min vs 2 heures" },
                { task: "Qualification de leads", detail: "Analyse les donnees CRM, le comportement web et les interactions pour qualifier automatiquement les leads BANT/MEDDIC.", time: "Temps reel" },
              ].map((item) => (
                <div key={item.task} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#E8E8E8] transition-colors">
                  <h4 className="text-[13px] font-semibold text-[#111] mb-1">{item.task}</h4>
                  <p className="text-[11px] text-[#777] leading-[1.6] mb-2">{item.detail}</p>
                  <span className="text-[10px] font-medium text-[#4B5EFC]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ===================== PILIER 4 : SERVICE ===================== */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#22C55E] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
              </div>
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Service Client &amp; CS</h2>
                <p className="text-[12px] text-[#999]">Retenir, satisfaire et developper vos clients</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { task: "Chatbot IA sur knowledge base", detail: "Un assistant qui repond a 80% des questions de niveau 1 en s'appuyant sur votre documentation. Escalade automatique si besoin.", time: "-70% volume tickets" },
                { task: "QBR automatises", detail: "Genere un Quarterly Business Review personnalise par client : metriques, achievements, recommandations, plan d'action.", time: "3 min vs 2 heures" },
                { task: "Detection de churn", detail: "Analyse les signaux faibles : baisse d'usage, tickets recurrents, NPS en baisse, contacts inactifs. Alerte proactive.", time: "Temps reel" },
                { task: "Classification de tickets", detail: "Trie automatiquement les tickets par categorie, priorite, sentiment et equipe responsable. Zero triage manuel.", time: "Temps reel" },
                { task: "Reponses clients pre-redigees", detail: "Analyse le ticket, le contexte client et l'historique pour proposer une reponse personnalisee que l'agent valide.", time: "30 sec vs 10 min" },
                { task: "Analyse de satisfaction (NPS/CSAT)", detail: "Analyse les commentaires libres des enquetes. Identifie les themes recurrents, les pain points et les opportunites.", time: "5 min vs 1 jour" },
              ].map((item) => (
                <div key={item.task} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#E8E8E8] transition-colors">
                  <h4 className="text-[13px] font-semibold text-[#111] mb-1">{item.task}</h4>
                  <p className="text-[11px] text-[#777] leading-[1.6] mb-2">{item.detail}</p>
                  <span className="text-[10px] font-medium text-[#22C55E]">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ===================== PILIER 5 : CLAUDE CODE ===================== */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-[#D4A27F] flex items-center justify-center text-white text-[14px] font-bold">CC</div>
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em]">Claude Code : l&apos;arme secrete</h2>
                <p className="text-[12px] text-white/40">Creer des logiciels, outils et automatisations sans equipe dev</p>
              </div>
            </div>
            <p className="text-[13px] text-white/50 leading-[1.7] mb-6 max-w-[650px]">
              Claude Code est un agent de developpement autonome. Il ecrit du code, execute des commandes, cree des fichiers et deploie des applications. C&apos;est comme avoir un developpeur senior qui travaille 10x plus vite.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {[
                { task: "Dashboard analytics interne", detail: "Application Next.js complete avec graphiques, filtres, export. Connectee a votre CRM via API. Deployee sur Vercel.", time: "2 jours vs 3 semaines", tag: "Application" },
                { task: "Script d'enrichissement CSV", detail: "Lit un CSV de 10 000 contacts, enrichit chaque ligne via API (Clay, Dropcontact, LinkedIn), exporte le resultat propre.", time: "1h vs 1 semaine", tag: "Script" },
                { task: "Connecteur API sur-mesure", detail: "Connecte deux outils qui n'ont pas d'integration native. API REST, webhooks, gestion des erreurs, retry automatique.", time: "3h vs 2 semaines", tag: "Integration" },
                { task: "Outil de monitoring SEO", detail: "Scrape vos positions Google, compare avec les concurrents, alerte sur les baisses de ranking. Dashboard temps reel.", time: "1 jour vs 1 mois", tag: "Application" },
                { task: "Generateur de rapports PDF", detail: "Template de rapport automatise : donnees CRM + analyses Claude + mise en page pro. Genere en 1 clic.", time: "4h vs 2 semaines", tag: "Script" },
                { task: "Migration de donnees complexe", detail: "Lit la base source, transforme les donnees, gere les mappings complexes, les relations et les doublons. Rapport de migration inclus.", time: "1 jour vs 2 semaines", tag: "Migration" },
                { task: "Site web marketing complet", detail: "Site Next.js avec 50+ pages, blog, SEO, formulaires HubSpot, analytics. Ce site (ceres.agency) a ete construit avec Claude Code.", time: "1 semaine vs 2 mois", tag: "Application" },
                { task: "Automatisations Make/n8n", detail: "Cree des workflows complexes : triggers, conditions, boucles, gestion d'erreurs. Claude Code ecrit le JSON de configuration.", time: "30 min vs 3 heures", tag: "Workflow" },
              ].map((item) => (
                <div key={item.task} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-[13px] font-semibold text-white">{item.task}</h4>
                    <span className="text-[9px] font-medium px-2 py-0.5 rounded bg-[#D4A27F]/20 text-[#D4A27F]">{item.tag}</span>
                  </div>
                  <p className="text-[11px] text-white/40 leading-[1.6] mb-2">{item.detail}</p>
                  <span className="text-[10px] font-medium text-[#D4A27F]">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-white/5 border border-white/10 p-5">
              <p className="text-[12px] text-white/60 leading-[1.7]">
                <strong className="text-white">Le site que vous consultez en ce moment</strong> (ceres.agency) a ete entierement construit avec Claude Code. 90+ pages, 66 articles de blog, 13 etudes de cas, 6 guides. De la premiere ligne de code au deploiement en production. C&apos;est la meilleure preuve de ce que Claude Code peut faire pour votre business.
              </p>
            </div>
          </div>
        </section>
        <Connector />

        {/* ===================== PILIER 6 : CONNEXION (MCP) ===================== */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#6D00CC] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
              </div>
              <div>
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Connecter Claude a votre stack</h2>
                <p className="text-[12px] text-[#999]">MCP, API, Make, webhooks : Claude parle a vos outils</p>
              </div>
            </div>
            <p className="text-[13px] text-[#555] leading-[1.75] mb-5">
              MCP (Model Context Protocol) permet a Claude d&apos;interagir directement avec vos outils : lire et ecrire dans votre CRM, envoyer des messages Slack, creer des taches Notion, interroger votre base de donnees. Sans quitter l&apos;interface Claude.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { name: "HubSpot", domain: "hubspot.com", desc: "CRUD contacts, deals, tickets" },
                { name: "Slack", domain: "slack.com", desc: "Envoyer des messages, alertes" },
                { name: "Notion", domain: "notion.so", desc: "Lire et ecrire des pages" },
                { name: "Gmail", domain: "gmail.com", desc: "Lire et rediger des emails" },
                { name: "Make", domain: "make.com", desc: "Declencher des workflows" },
                { name: "Clay", domain: "clay.com", desc: "Enrichissement de donnees" },
                { name: "Lemlist", domain: "lemlist.com", desc: "Gerer les sequences" },
                { name: "Google Sheets", domain: "sheets.google.com", desc: "Lire et ecrire des donnees" },
              ].map((tool) => (
                <div key={tool.name} className="rounded-xl border border-[#F2F2F2] p-3 text-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=32`} alt={tool.name} className="w-5 h-5 mx-auto mb-2" />
                  <p className="text-[12px] font-semibold text-[#111]">{tool.name}</p>
                  <p className="text-[10px] text-[#999] mt-0.5">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ===================== COMPARATIF CLAUDE vs CHATGPT ===================== */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Comparatif</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Pourquoi Claude et pas ChatGPT ?</h2>
              <p className="text-[13px] text-white/40">On a teste les deux. Voici pourquoi on deploie Claude chez nos clients.</p>
            </div>
            <div className="space-y-2">
              {[
                { label: "Raisonnement complexe", desc: "Analyse multi-criteres, strategie, audit", claude: "Opus 4 : le plus puissant du marche", gpt: "GPT-4o : bon mais moins profond" },
                { label: "Long context (200K tokens)", desc: "Analyser des rapports de 100+ pages", claude: "200K tokens natifs", gpt: "128K tokens" },
                { label: "Securite des donnees", desc: "Pas de training sur vos donnees", claude: "Garanti par defaut", gpt: "Opt-out necessaire" },
                { label: "MCP (connexion outils)", desc: "Connecter directement au CRM", claude: "Protocole natif, 20+ serveurs", gpt: "Actions, plus limite" },
                { label: "Claude Code", desc: "Agent de dev autonome", claude: "Unique a Claude, production-ready", gpt: "Pas d'equivalent" },
                { label: "Qualite du francais", desc: "Contenu publiable sans retouche", claude: "Excellent", gpt: "Correct" },
              ].map((row) => (
                <div key={row.label} className="rounded-xl bg-white/5 border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="text-[13px] font-semibold text-white">{row.label}</p>
                      <p className="text-[10px] text-white/30">{row.desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="rounded-lg bg-[#22C55E]/10 p-2.5">
                      <p className="text-[10px] font-medium text-[#22C55E] mb-0.5">Claude</p>
                      <p className="text-[11px] text-white/60">{row.claude}</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-2.5">
                      <p className="text-[10px] font-medium text-white/30 mb-0.5">ChatGPT</p>
                      <p className="text-[11px] text-white/40">{row.gpt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/blog/claude-vs-chatgpt-equipes-commerciales" className="text-[12px] text-white/40 hover:text-white/60 transition-colors">
                Lire le comparatif detaille →
              </Link>
            </div>
          </div>
        </section>
        <Connector />

        {/* ===================== GUIDE GRATUIT ===================== */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 w-[140px] h-[180px] rounded-xl shadow-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #D4A27F 0%, #B8956A 50%, #8B7355 100%)" }}>
                <div className="text-center px-4">
                  <div className="text-[10px] font-medium text-white/60 mb-1">Guide Ceres</div>
                  <div className="text-[14px] font-bold text-white leading-[1.2] mb-2">Claude pour le Marketing B2B</div>
                  <div className="w-6 h-px bg-white/30 mx-auto mb-2" />
                  <div className="text-[9px] text-white/50">55 pages</div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4"><Badge>Ressource gratuite</Badge></div>
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Le guide complet : Claude pour le marketing B2B</h2>
                <p className="text-[13px] text-[#777] leading-[1.65] mb-4">
                  55 pages, 10 chapitres, 20+ prompts prets a l&apos;emploi, 5 scripts Claude Code. Tout ce qu&apos;il faut pour integrer Claude dans vos operations marketing et commerciales.
                </p>
                <div className="flex flex-wrap gap-3 mb-5 justify-center md:justify-start">
                  {["55 pages", "10 chapitres", "20+ prompts", "5 scripts Claude Code", "3 workflows Make"].map((s) => (
                    <span key={s} className="text-[11px] text-[#999] px-2 py-0.5 rounded bg-[#FAFAFA] border border-[#F2F2F2]">{s}</span>
                  ))}
                </div>
                <Link href="/guide-claude-marketing" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                  <span className="w-2 h-2 rounded-sm bg-[#D4A27F]" />Telecharger le guide
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Connector />

        {/* ===================== ARTICLES ===================== */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Blog</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Nos articles sur Claude et l&apos;IA</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { slug: "claude-vs-chatgpt-equipes-commerciales", title: "Claude vs ChatGPT pour les equipes commerciales", color: "#6D00CC" },
              { slug: "hubspot-ia-fonctionnalites", title: "HubSpot IA : toutes les fonctionnalites en 2026", color: "#FF7A59" },
              { slug: "crm-ia-intelligence-artificielle", title: "CRM et IA : comment l'IA transforme votre CRM", color: "#6D00CC" },
              { slug: "ia-processus-commercial-vente-b2b", title: "IA dans le processus commercial B2B", color: "#4B5EFC" },
              { slug: "ia-scoring-predictif-lead-scoring", title: "IA et scoring predictif", color: "#6D00CC" },
              { slug: "apparaitre-reponses-claude-chatgpt", title: "Apparaitre dans les reponses de Claude et ChatGPT", color: "#6C5CE7" },
              { slug: "geo-optimiser-site-llm", title: "GEO : optimiser son site pour les LLMs", color: "#6D00CC" },
              { slug: "zapier-vs-make-vs-n8n-revops", title: "Zapier vs Make vs n8n pour le RevOps", color: "#6C5CE7" },
              { slug: "cold-email-b2b-templates", title: "Cold email B2B : 15 templates qui convertissent", color: "#6C5CE7" },
            ].map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-colors group">
                <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold text-white mb-3" style={{ background: a.color }}>IA</div>
                <p className="text-[12px] font-semibold text-[#111] leading-[1.4] group-hover:text-[#8B7355] transition-colors">{a.title}</p>
              </Link>
            ))}
          </div>
        </section>
        <Connector />

        {/* ===================== FAQ CLAUDE ===================== */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>FAQ</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Posez votre question</h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">Cliquez sur une question pour voir la reponse.</p>
          </div>
          <ClaudeFAQ />
        </section>
        <Connector />

        {/* ===================== CTA ===================== */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Pret a deployer Claude dans votre equipe ?
            </h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">
              30 minutes pour identifier vos use cases IA les plus impactants. On vous montre ce que Claude peut faire sur vos donnees, pas sur une demo generique.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
              </Link>
              <Link href="/guide-claude-marketing" className="inline-flex items-center px-5 py-2 rounded-md border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                Telecharger le guide gratuit
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
