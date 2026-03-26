"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const agentTypes = [
  {
    title: "Agent d\u2019enrichissement",
    desc: "L\u2019agent d\u2019enrichissement analyse chaque nouveau lead entrant dans votre CRM et compl\u00e8te automatiquement sa fiche. Taille de l\u2019entreprise, secteur d\u2019activit\u00e9, technologies utilis\u00e9es, lev\u00e9es de fonds, actualit\u00e9s r\u00e9centes, profil LinkedIn du d\u00e9cideur. Il croise plusieurs sources (Apollo, Clay, Societeinfo, site web) et synth\u00e9tise les informations dans des champs structur\u00e9s du CRM. R\u00e9sultat : votre commercial a un dossier complet avant m\u00eame de passer son premier appel.",
    color: "#FF7A59",
  },
  {
    title: "Agent de qualification",
    desc: "L\u2019agent de qualification applique votre framework (BANT, MEDDIC, SPICED) automatiquement. Il analyse les donn\u00e9es enrichies, les interactions pass\u00e9es, les pages visit\u00e9es et le comportement du lead pour d\u00e9terminer s\u2019il correspond \u00e0 votre ICP. Il produit un score de qualification et une recommandation : \u00ab qualifier en d\u00e9mo \u00bb, \u00ab nurturing marketing \u00bb, ou \u00ab disqualifier \u00bb. Fini les heures perdues \u00e0 appeler des leads non qualifi\u00e9s.",
    color: "#4B5EFC",
  },
  {
    title: "Agent d\u2019emails",
    desc: "L\u2019agent d\u2019emails r\u00e9dige des emails de prospection hyper-personnalis\u00e9s. Il ne fait pas du mail merge avec [Pr\u00e9nom] et [Entreprise]. Il analyse le profil du prospect, son activit\u00e9 r\u00e9cente, ses pain points probables et r\u00e9dige un email qui d\u00e9montre une vraie compr\u00e9hension du contexte. Chaque email est unique, pertinent et \u00e9crit dans le ton de votre marque. Les taux de r\u00e9ponse passent de 2% \u00e0 8-12%.",
    color: "#6D00CC",
  },
  {
    title: "Agent de pr\u00e9paration d\u2019appels",
    desc: "Avant chaque appel commercial, l\u2019agent compile un briefing complet : historique des interactions, donn\u00e9es enrichies, actualit\u00e9s de l\u2019entreprise, enjeux probables, questions de d\u00e9couverte recommand\u00e9es et objections anticip\u00e9es. Le commercial arrive en rendez-vous avec un niveau de pr\u00e9paration qui impressionne syst\u00e9matiquement le prospect.",
    color: "#22C55E",
  },
  {
    title: "Agent de scoring",
    desc: "L\u2019agent de scoring va au-del\u00e0 du lead scoring classique bas\u00e9 sur des r\u00e8gles statiques. Il utilise l\u2019IA pour analyser des patterns complexes : combinaison de signaux faibles (visite pricing page + t\u00e9l\u00e9chargement case study + croissance LinkedIn), historique de conversion des leads similaires et timing optimal de contact. Le score est dynamique et s\u2019actualise en temps r\u00e9el.",
    color: "#6C5CE7",
  },
  {
    title: "Agent de coaching",
    desc: "L\u2019agent de coaching analyse les performances de chaque commercial et fournit des recommandations personnalis\u00e9es. Taux de conversion par \u00e9tape, temps moyen de closing, qualit\u00e9 des notes CRM, suivi des deals stall\u00e9s. Il identifie les patterns gagnants de vos meilleurs commerciaux et aide les autres \u00e0 les reproduire. Un manager augment\u00e9 par l\u2019IA.",
    color: "#D4A27F",
  },
];

const deploySteps = [
  {
    step: "1. Audit du process commercial",
    desc: "On analyse votre cycle de vente, vos personas, votre ICP, vos outils actuels et vos points de friction. On identifie les t\u00e2ches r\u00e9p\u00e9titives \u00e0 forte valeur ajout\u00e9e que l\u2019IA peut automatiser. Pas d\u2019IA pour le plaisir : on cible les cas d\u2019usage avec un ROI mesurable.",
  },
  {
    step: "2. Design des agents",
    desc: "On d\u00e9finit les prompts, les sources de donn\u00e9es, les d\u00e9clencheurs et les outputs de chaque agent. Chaque agent a un r\u00f4le pr\u00e9cis, des inputs d\u00e9finis et des outputs structur\u00e9s qui alimentent le CRM. On documente tout avant de coder.",
  },
  {
    step: "3. D\u00e9veloppement Claude + MCP",
    desc: "On construit les agents avec Claude (Anthropic) via le protocole MCP (Model Context Protocol). MCP permet \u00e0 Claude d\u2019acc\u00e9der directement \u00e0 HubSpot, Apollo, votre base de donn\u00e9es et vos outils m\u00e9tier. Pas de middleware fragile : une connexion directe et s\u00e9curis\u00e9e.",
  },
  {
    step: "4. Orchestration avec Make",
    desc: "Make orchestre les flux entre les agents, le CRM et vos outils. Un nouveau lead arrive dans HubSpot ? Make d\u00e9clenche l\u2019agent d\u2019enrichissement, puis l\u2019agent de qualification, puis l\u2019agent d\u2019email si le lead est qualifi\u00e9. Tout est automatis\u00e9, trac\u00e9 et monitorable.",
  },
  {
    step: "5. Tests et it\u00e9rations",
    desc: "On teste chaque agent sur un \u00e9chantillon de leads r\u00e9els. On v\u00e9rifie la qualit\u00e9 des outputs, on ajuste les prompts, on affine les r\u00e8gles de qualification. 2 \u00e0 3 it\u00e9rations sont g\u00e9n\u00e9ralement n\u00e9cessaires pour atteindre la qualit\u00e9 cible.",
  },
  {
    step: "6. D\u00e9ploiement et monitoring",
    desc: "Mise en production progressive. On commence par un agent, on valide les r\u00e9sultats, puis on active les suivants. Dashboard de monitoring pour suivre les performances de chaque agent en temps r\u00e9el.",
  },
];

const stack = [
  { outil: "Claude (Anthropic)", role: "Le cerveau de l\u2019agent. Mod\u00e8le de langage le plus performant pour les t\u00e2ches commerciales B2B : compr\u00e9hension du contexte, r\u00e9daction, analyse, raisonnement.", color: "#D4A27F" },
  { outil: "MCP (Model Context Protocol)", role: "Le protocole qui connecte Claude \u00e0 vos outils. HubSpot, bases de donn\u00e9es, API tierces. Claude acc\u00e8de directement aux donn\u00e9es sans passer par des int\u00e9grations fragiles.", color: "#6C5CE7" },
  { outil: "Make", role: "L\u2019orchestrateur. D\u00e9clenche les agents au bon moment, route les donn\u00e9es entre les syst\u00e8mes, g\u00e8re les erreurs et les retries. Interface visuelle pour le monitoring.", color: "#4B5EFC" },
  { outil: "HubSpot", role: "Le CRM central. Source et destination des donn\u00e9es. Les agents lisent et \u00e9crivent directement dans HubSpot : fiches contacts, propri\u00e9t\u00e9s, notes, t\u00e2ches.", color: "#FF7A59" },
  { outil: "Apollo / Clay", role: "Les sources d\u2019enrichissement. Donn\u00e9es firmographiques, technographiques, signaux d\u2019intention, coordonn\u00e9es v\u00e9rifi\u00e9es.", color: "#22C55E" },
];

const casClients = [
  {
    client: "Beedeez",
    secteur: "EdTech B2B",
    contexte: "Beedeez avait une \u00e9quipe de 4 SDR qui passaient 60% de leur temps sur des t\u00e2ches de recherche et de qualification manuelle. Les emails de prospection \u00e9taient g\u00e9n\u00e9riques et les taux de r\u00e9ponse stagnaient \u00e0 2%.",
    solution: "D\u00e9ploiement d\u2019un agent d\u2019enrichissement (Apollo + Claude) et d\u2019un agent d\u2019emails personnalis\u00e9s. Chaque lead entrant est automatiquement enrichi et re\u00e7oit un email hyper-personnalis\u00e9 dans les 5 minutes.",
    resultats: ["Taux de r\u00e9ponse : 2% vers 11%", "Temps de recherche SDR : -65%", "Meetings book\u00e9s : +40%", "ROI atteint en 6 semaines"],
    color: "#FF7A59",
  },
  {
    client: "Iroko",
    secteur: "Immobilier / SCPI",
    contexte: "Iroko g\u00e9rait un volume \u00e9lev\u00e9 de leads entrants (formulaires, webinars, t\u00e9l\u00e9chargements) mais la qualification \u00e9tait manuelle et inconsistante. Les commerciaux appelaient des leads non qualifi\u00e9s tandis que des leads chauds attendaient 48h.",
    solution: "D\u00e9ploiement d\u2019un agent de qualification (Claude + BANT) et d\u2019un agent de scoring dynamique. Chaque lead est qualifi\u00e9 en moins de 2 minutes et rout\u00e9 vers le bon commercial avec un briefing complet.",
    resultats: ["Temps de qualification : 48h vers 2 min", "Taux de conversion lead-to-meeting : +35%", "Leads mal rout\u00e9s : -90%", "Satisfaction commerciaux : 9/10"],
    color: "#4B5EFC",
  },
];

const roi = [
  { metrique: "Temps de recherche par lead", avant: "20-30 min", apres: "0 min (automatis\u00e9)", gain: "-100%" },
  { metrique: "Taux de r\u00e9ponse emails", avant: "2-3%", apres: "8-12%", gain: "+300%" },
  { metrique: "Temps de qualification", avant: "24-48h", apres: "2 min", gain: "-99%" },
  { metrique: "Leads non qualifi\u00e9s appel\u00e9s", avant: "40-50%", apres: "5-10%", gain: "-80%" },
  { metrique: "Meetings book\u00e9s / mois / SDR", avant: "15-20", apres: "25-35", gain: "+60%" },
  { metrique: "Pr\u00e9paration d\u2019appel", avant: "15 min", apres: "0 min (briefing auto)", gain: "-100%" },
];

const faqItems = [
  { q: "Un agent IA commercial remplace-t-il mes commerciaux ?", a: "Non. L\u2019agent IA automatise les t\u00e2ches r\u00e9p\u00e9titives (recherche, enrichissement, qualification, r\u00e9daction d\u2019emails) pour que vos commerciaux se concentrent sur ce qu\u2019ils font le mieux : la relation humaine, la d\u00e9mo, la n\u00e9gociation et le closing. C\u2019est un assistant, pas un rempla\u00e7ant." },
  { q: "Quelle diff\u00e9rence avec les outils d\u2019IA g\u00e9n\u00e9rative comme ChatGPT ?", a: "ChatGPT est un outil g\u00e9n\u00e9raliste auquel vous posez des questions. Un agent IA commercial est un syst\u00e8me autonome qui se d\u00e9clenche automatiquement, acc\u00e8de \u00e0 vos donn\u00e9es CRM et produit des outputs structur\u00e9s (fiches enrichies, scores, emails) directement dans vos outils. Pas besoin de copier-coller." },
  { q: "Pourquoi Claude plut\u00f4t que GPT-4 ?", a: "Claude (Anthropic) est plus performant sur les t\u00e2ches commerciales B2B : meilleure compr\u00e9hension du contexte, r\u00e9daction plus naturelle, raisonnement plus fiable. Le protocole MCP permet aussi une connexion directe et s\u00e9curis\u00e9e \u00e0 HubSpot et \u00e0 vos outils, ce que GPT-4 ne propose pas nativement." },
  { q: "Combien co\u00fbte un agent IA commercial ?", a: "Le co\u00fbt comprend le d\u00e9veloppement initial (3 000 \u00e0 8 000\u20AC selon la complexit\u00e9) et un co\u00fbt d\u2019usage mensuel (API Claude + Make, g\u00e9n\u00e9ralement 200-500\u20AC/mois pour un volume de 1 000 leads/mois). Le ROI est g\u00e9n\u00e9ralement atteint en 4 \u00e0 8 semaines." },
  { q: "Mes donn\u00e9es sont-elles s\u00e9curis\u00e9es ?", a: "Oui. Claude (Anthropic) ne r\u00e9utilise pas vos donn\u00e9es pour entra\u00eener ses mod\u00e8les. Les connexions MCP sont s\u00e9curis\u00e9es par OAuth. Les donn\u00e9es transitent via des API chiffr\u00e9es. On documente l\u2019architecture compl\u00e8te pour votre DPO." },
  { q: "Combien de temps pour d\u00e9ployer un agent ?", a: "Comptez 2 \u00e0 4 semaines pour un premier agent (enrichissement ou qualification). 4 \u00e0 8 semaines pour un syst\u00e8me multi-agents complet. On d\u00e9ploie de mani\u00e8re incr\u00e9mentale : un agent \u00e0 la fois, valid\u00e9 avant de passer au suivant." },
  { q: "L\u2019agent fonctionne-t-il avec d\u2019autres CRM que HubSpot ?", a: "Oui, via MCP on peut connecter Claude \u00e0 Salesforce, Pipedrive ou tout CRM avec une API. Mais notre expertise principale est sur HubSpot, o\u00f9 on ma\u00eetrise les propri\u00e9t\u00e9s custom, les workflows et les automatisations." },
  { q: "Que se passe-t-il si l\u2019agent fait une erreur ?", a: "On int\u00e8gre des garde-fous \u00e0 chaque \u00e9tape. Les emails ne sont jamais envoy\u00e9s automatiquement sans validation humaine (sauf si vous le souhaitez). Les scores et qualifications sont v\u00e9rifi\u00e9s sur un \u00e9chantillon r\u00e9gulier. Un dashboard de monitoring signale les anomalies en temps r\u00e9el." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Agent IA Commercial",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "D\u00e9ploiement d\u2019agents IA commerciaux pour automatiser enrichissement, qualification, emails, scoring et coaching. Stack Claude + MCP + Make.",
      serviceType: "AI Sales Agent Consulting",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ─── Page ──────────────────────────────────────────────────────────────────── */

export default function AgentIACommercialPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── Hero ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Agent IA</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Agent IA commercial
          </h1>
          <p className="text-[17px] text-[#666] max-w-[580px] mx-auto leading-[1.7] mb-4">
            Des agents IA autonomes qui enrichissent vos leads, qualifient automatiquement, r\u00e9digent des emails hyper-personnalis\u00e9s et coachent vos commerciaux. Le tout connect\u00e9 \u00e0 HubSpot en temps r\u00e9el.
          </p>
          <p className="text-[13px] text-[#999] max-w-[500px] mx-auto mb-8">
            Stack : Claude (Anthropic) + MCP + Make + HubSpot. Pas de chatbot g\u00e9n\u00e9rique. Des agents sp\u00e9cialis\u00e9s, autonomes et mesurables.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all">
            <span className="w-2 h-2 rounded-sm bg-[#6C5CE7]" />D\u00e9couvrir nos agents IA
          </Link>
        </section>
        <Connector />

        {/* ── C'est quoi un agent IA commercial ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>D\u00e9finition</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              C&apos;est quoi un agent IA commercial ?
            </h2>
          </div>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-white">
            <p className="text-[15px] text-[#CCC] leading-[1.8] mb-4">
              Un agent IA commercial est un syst\u00e8me autonome qui ex\u00e9cute des t\u00e2ches commerciales sans intervention humaine. Contrairement \u00e0 un chatbot ou \u00e0 un assistant IA que vous interrogez manuellement, l&apos;agent se d\u00e9clenche automatiquement (nouveau lead dans le CRM, deal qui change d&apos;\u00e9tape, meeting planifi\u00e9) et produit un output structur\u00e9 directement dans vos outils.
            </p>
            <p className="text-[15px] text-[#CCC] leading-[1.8] mb-4">
              Un agent IA commercial acc\u00e8de \u00e0 vos donn\u00e9es en temps r\u00e9el : CRM, enrichissement, historique des interactions, site web du prospect, actualit\u00e9s. Il raisonne sur ces donn\u00e9es (pas de simple template) et produit des outputs adapt\u00e9s au contexte : une fiche enrichie, un score de qualification, un email personnalis\u00e9, un briefing d&apos;appel.
            </p>
            <p className="text-[15px] text-[#CCC] leading-[1.8] mb-4">
              La diff\u00e9rence avec l&apos;automatisation classique (workflows HubSpot, s\u00e9quences) : l&apos;agent comprend le contexte. Il ne fait pas \u00ab si champ X = Y, alors envoyer template Z \u00bb. Il analyse l&apos;ensemble des donn\u00e9es disponibles et prend une d\u00e9cision nuanc\u00e9e, comme le ferait un humain, mais en 2 secondes au lieu de 20 minutes.
            </p>
            <p className="text-[15px] text-[#CCC] leading-[1.8]">
              Concr\u00e8tement, un agent IA commercial permet \u00e0 une \u00e9quipe de 5 SDR de produire le m\u00eame volume qu&apos;une \u00e9quipe de 10, avec une meilleure qualit\u00e9. Ce n&apos;est pas de la magie : c&apos;est l&apos;automatisation intelligente des t\u00e2ches r\u00e9p\u00e9titives \u00e0 faible valeur ajout\u00e9e.
            </p>
          </div>
        </section>
        <Connector />

        {/* ── Les 6 types d'agents ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Types d&apos;agents</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Les 6 types d&apos;agents IA commerciaux
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Chaque agent a un r\u00f4le pr\u00e9cis dans votre process de vente. Vous pouvez d\u00e9ployer un seul agent ou les combiner.
            </p>
          </div>
          <div className="grid gap-4">
            {agentTypes.map((a) => (
              <div key={a.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: a.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{a.title}</h3>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.7]">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── Comment on deploie ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>D\u00e9ploiement</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Comment on d\u00e9ploie un agent IA commercial
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Un process structur\u00e9 en 6 \u00e9tapes, de l&apos;audit \u00e0 la mise en production. Comptez 2 \u00e0 8 semaines selon le nombre d&apos;agents.
            </p>
          </div>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="space-y-6">
              {deploySteps.map((d) => (
                <div key={d.step}>
                  <h3 className="text-[15px] font-semibold text-white mb-1">{d.step}</h3>
                  <p className="text-[14px] text-[#999] leading-[1.7]">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── Stack technologique ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Stack</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Stack technologique
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Des outils \u00e9prouv\u00e9s, assembl\u00e9s pour cr\u00e9er un syst\u00e8me fiable et maintenable.
            </p>
          </div>
          <div className="grid gap-4">
            {stack.map((s) => (
              <div key={s.outil} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: s.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{s.outil}</h3>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.7]">{s.role}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── Cas clients ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas clients</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Cas clients
            </h2>
          </div>
          <div className="grid gap-4">
            {casClients.map((c) => (
              <div key={c.client} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-2.5 h-2.5 rounded-sm" style={{ background: c.color }} />
                  <h3 className="text-[16px] font-semibold text-[#111]">{c.client}</h3>
                  <span className="text-[12px] text-[#999]">{c.secteur}</span>
                </div>
                <p className="text-[14px] text-[#666] leading-[1.7] mb-3">{c.contexte}</p>
                <p className="text-[14px] text-[#666] leading-[1.7] mb-4">{c.solution}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {c.resultats.map((r) => (
                    <div key={r} className="text-[13px] text-[#111] font-medium bg-[#F9F9F9] rounded-lg px-3 py-2">{r}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── ROI mesurable ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>ROI</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              ROI mesurable
            </h2>
            <p className="text-[15px] text-[#666] max-w-[540px] mx-auto leading-[1.7]">
              Chaque agent produit des m\u00e9triques traçables. Voici les gains moyens observ\u00e9s chez nos clients.
            </p>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="p-4 text-[13px] font-semibold text-[#111]">M\u00e9trique</th>
                    <th className="p-4 text-[13px] font-semibold text-[#999]">Avant</th>
                    <th className="p-4 text-[13px] font-semibold text-[#22C55E]">Apr\u00e8s</th>
                    <th className="p-4 text-[13px] font-semibold text-[#4B5EFC]">Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {roi.map((r) => (
                    <tr key={r.metrique} className="border-b border-[#F5F5F5]">
                      <td className="p-4 text-[13px] font-medium text-[#111]">{r.metrique}</td>
                      <td className="p-4 text-[13px] text-[#999]">{r.avant}</td>
                      <td className="p-4 text-[13px] text-[#22C55E] font-medium">{r.apres}</td>
                      <td className="p-4 text-[13px] text-[#4B5EFC] font-semibold">{r.gain}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── FAQ ── */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>FAQ</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Questions fr\u00e9quentes sur les agents IA commerciaux
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((f) => (
              <div key={f.q} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <h3 className="text-[15px] font-semibold text-[#111] mb-2">{f.q}</h3>
                <p className="text-[14px] text-[#666] leading-[1.7]">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── CTA ── */}
        <section className="text-center">
          <div className="rounded-2xl bg-[#111] p-8 md:p-14">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-4">
              Pr\u00eat \u00e0 d\u00e9ployer un agent IA commercial ?
            </h2>
            <p className="text-[15px] text-[#999] max-w-[480px] mx-auto leading-[1.7] mb-6">
              On analyse votre process de vente, on identifie les cas d&apos;usage \u00e0 plus fort ROI et on vous propose un plan de d\u00e9ploiement. L&apos;appel de cadrage est gratuit.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[13px] text-[#111] font-medium hover:bg-[#F5F5F5] transition-all">
              <span className="w-2 h-2 rounded-sm bg-[#6C5CE7]" />R\u00e9server un appel
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
