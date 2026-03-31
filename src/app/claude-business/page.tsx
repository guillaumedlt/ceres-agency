import Connector from "@/components/marketing/Connector";
import type { Metadata } from "next";
import Badge from "@/components/marketing/Badge";
import Link from "next/link";
import ClaudeFAQ from "@/components/marketing/ClaudeFAQ";

export const metadata: Metadata = {
  title: "Claude pour le business B2B : IA appliquee au RevOps, Marketing & Sales | Ceres",
  description:
    "Decouvrez comment Claude transforme vos operations commerciales B2B. RevOps, marketing, sales, service client. Cas d'usage, exemples et guide complet.",
  keywords: [
    "claude ia business", "claude b2b", "claude revops", "claude marketing",
    "claude sales", "anthropic business", "ia commerciale", "claude hubspot",
    "claude crm", "claude code business", "mcp hubspot", "ia revops",
  ],
};

const pillars = [
  {
    title: "RevOps & Operations",
    color: "#FF7A59",
    desc: "Scoring predictif, data quality automatisee, enrichissement, reporting.",
    examples: [
      "Analyser 500 fiches contacts en 30 secondes",
      "Generer un SLA marketing-sales adapte a votre contexte",
    ],
  },
  {
    title: "Marketing & Content",
    color: "#6C5CE7",
    desc: "Articles, emails, landing pages, SEO, GEO optimization.",
    examples: [
      "Rediger un article SEO de 2500 mots en 10 minutes",
      "Optimiser 50 meta descriptions en un prompt",
    ],
  },
  {
    title: "Sales & Prospection",
    color: "#4B5EFC",
    desc: "Icebreakers, sequences email, resumes de calls, coaching.",
    examples: [
      "Personnaliser 200 icebreakers en batch",
      "Resumer un call de 45 min en 3 bullet points",
    ],
  },
  {
    title: "Service & CS",
    color: "#22C55E",
    desc: "Reponses clients, knowledge base, QBR automation, churn detection.",
    examples: [
      "Generer un QBR personnalise en 2 minutes",
      "Classifier 500 tickets par priorite",
    ],
  },
];

const comparison = [
  { label: "Raisonnement complexe", claude: true, chatgpt: false },
  { label: "Long context (200K tokens)", claude: true, chatgpt: false },
  { label: "Securite des donnees", claude: true, chatgpt: false },
  { label: "MCP (connexion outils)", claude: true, chatgpt: false },
  { label: "Claude Code", claude: true, chatgpt: false },
  { label: "Honnetete (pas d'hallucination)", claude: true, chatgpt: false },
];

const useCases = [
  {
    title: "Enrichissement CRM massif",
    tools: ["claude.ai", "clay.com", "hubspot.com"],
    before: "2h de recherche LinkedIn par batch de 50 contacts",
    after: "3 minutes pour 500 contacts enrichis",
    model: "Sonnet",
  },
  {
    title: "Generation d'articles SEO",
    tools: ["claude.ai"],
    before: "1 journee pour un article de 2500 mots",
    after: "10 minutes, structure + redaction + meta",
    model: "Opus",
  },
  {
    title: "Resumes automatiques de calls",
    tools: ["claude.ai", "claap.io", "hubspot.com"],
    before: "15 min de notes apres chaque call",
    after: "Resume structure injecte dans le CRM en 30 sec",
    model: "Sonnet",
  },
  {
    title: "Scoring predictif custom",
    tools: ["claude.ai", "hubspot.com"],
    before: "Scoring basique sur 3 criteres",
    after: "Modele multi-criteres adapte a votre historique",
    model: "Opus",
  },
  {
    title: "Sequences outbound personnalisees",
    tools: ["claude.ai", "lemlist.com"],
    before: "1 template generique pour toute la base",
    after: "200 icebreakers personnalises en 5 minutes",
    model: "Sonnet",
  },
  {
    title: "Data quality automatisee",
    tools: ["claude.ai", "hubspot.com"],
    before: "Audit CRM annuel, 3 jours de travail",
    after: "Audit continu, anomalies detectees en temps reel",
    model: "Haiku",
  },
  {
    title: "Dashboards et reporting",
    tools: ["claude.ai"],
    before: "2 semaines de dev pour un dashboard",
    after: "2 jours avec Claude Code, full custom",
    model: "Claude Code",
  },
  {
    title: "Analyse concurrentielle",
    tools: ["claude.ai"],
    before: "Veille manuelle, 2h par semaine",
    after: "Rapport structure en 5 minutes",
    model: "Opus",
  },
];

const blogArticles = [
  { slug: "claude-vs-chatgpt-equipes-commerciales", title: "Claude vs ChatGPT pour les equipes commerciales" },
  { slug: "hubspot-ia-fonctionnalites", title: "HubSpot et IA : toutes les fonctionnalites" },
  { slug: "crm-ia-intelligence-artificielle", title: "CRM et intelligence artificielle" },
  { slug: "ia-processus-commercial-vente-b2b", title: "IA et processus commercial B2B" },
  { slug: "ia-scoring-predictif-lead-scoring", title: "IA et scoring predictif" },
  { slug: "apparaitre-reponses-claude-chatgpt", title: "Apparaitre dans les reponses de Claude et ChatGPT" },
  { slug: "geo-optimiser-site-llm", title: "GEO : optimiser son site pour les LLM" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: "Claude pour le business B2B",
      description: "Decouvrez comment Claude transforme vos operations commerciales B2B.",
      url: "https://ceres.agency/claude-business",
      publisher: { "@type": "Organization", name: "Ceres" },
      inLanguage: "fr-FR",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Comment Claude peut aider mon CRM ?", acceptedAnswer: { "@type": "Answer", text: "Claude analyse vos donnees CRM, enrichit les contacts, detecte les anomalies et genere des rapports actionnables en quelques secondes." } },
        { "@type": "Question", name: "Quelle difference entre Claude et ChatGPT pour le B2B ?", acceptedAnswer: { "@type": "Answer", text: "Claude excelle en raisonnement complexe, long context (200K tokens), securite des donnees et connexion aux outils via MCP. Claude Code est unique a Anthropic." } },
        { "@type": "Question", name: "Combien de temps pour deployer Claude ?", acceptedAnswer: { "@type": "Answer", text: "Premier agent en production en 1 a 2 semaines. Projet complexe en 2 a 3 semaines. Serveur MCP et formation inclus." } },
      ],
    },
  ],
};

export default function ClaudeBusinessPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Background blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 340, height: 340, borderRadius: "50%", background: "#D4A27F", opacity: 0.14, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "20%", width: 300, height: 300, borderRadius: "50%", background: "#B8956A", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "35%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.13, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "50%", width: 280, height: 280, borderRadius: "50%", background: "#4B5EFC", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "65%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "80%", width: 320, height: 320, borderRadius: "50%", background: "#22C55E", opacity: 0.11, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Hero */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Claude x Ceres</Badge></div>
          <div className="flex items-center justify-center gap-3 mb-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.google.com/s2/favicons?domain=claude.ai&sz=64"
              alt="Claude"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-[20px] font-semibold text-[#8B7355]">Claude</span>
          </div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Comment Claude accelere votre business B2B
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-8">
            On utilise Claude au quotidien pour nos clients. Voici concretement ce que ca change.
          </p>
          <Link
            href="/guide-claude-marketing"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all"
          >
            <span className="w-2 h-2 rounded-sm bg-[#D4A27F]" />
            Telecharger le guide gratuit
          </Link>
        </section>
        <Connector />

        {/* Section 1: 4 piliers */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>4 piliers</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              4 piliers ou Claude change la donne
            </h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">
              RevOps, marketing, sales, service : Claude intervient a chaque etape de votre cycle commercial.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: p.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{p.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{p.desc}</p>
                <div className="space-y-1.5">
                  {p.examples.map((ex) => (
                    <div key={ex} className="flex items-start gap-2 p-2.5 rounded-lg bg-[#FAFAFA]">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 mt-0.5">
                        <path d="M2.5 6L5 8.5L9.5 3.5" stroke={p.color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[11px] text-[#555] leading-[1.5]">{ex}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* Section 2: Claude vs ChatGPT */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">
                Comparatif
              </span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">
                Claude vs ChatGPT pour le B2B
              </h2>
              <p className="text-[13px] text-white/40">
                Pourquoi on a choisi Claude pour nos clients. Les differences qui comptent.
              </p>
            </div>
            <div className="space-y-2">
              {/* Header */}
              <div className="grid grid-cols-[1fr_80px_80px] gap-3 px-4 pb-2">
                <span className="text-[11px] text-white/30 font-medium" />
                <span className="text-[11px] text-white/30 font-medium text-center">Claude</span>
                <span className="text-[11px] text-white/30 font-medium text-center">ChatGPT</span>
              </div>
              {comparison.map((row) => (
                <div key={row.label} className="grid grid-cols-[1fr_80px_80px] gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 items-center">
                  <span className="text-[12px] text-white/70">{row.label}</span>
                  <div className="flex justify-center">
                    <div className="w-5 h-5 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="#22C55E" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M3 3L7 7M7 3L3 7" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/blog/claude-vs-chatgpt-equipes-commerciales" className="text-[12px] text-white/40 hover:text-white/60 transition-colors">
                Lire le comparatif complet →
              </Link>
            </div>
          </div>
        </section>
        <Connector />

        {/* Section 3: Use cases concrets */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas concrets</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Ce qu&apos;on fait concretement avec Claude
            </h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">
              Chaque use case est deploye en production chez nos clients. Resultats reels, pas de la theorie.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {useCases.map((uc) => (
              <article key={uc.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-center gap-2 mb-3">
                  {uc.tools.map((d, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={`${d}-${i}`} src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} alt="tool" width={14} height={14} className="rounded-sm" loading="lazy" />
                  ))}
                </div>
                <h3 className="text-[14px] font-semibold text-[#111] mb-3">{uc.title}</h3>
                <div className="space-y-1.5 mb-3">
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-[#FEF2F2]">
                    <span className="text-[10px] font-semibold text-[#EF4444] shrink-0 mt-px">AVANT</span>
                    <span className="text-[11px] text-[#777] leading-[1.5]">{uc.before}</span>
                  </div>
                  <div className="flex items-start gap-2 p-2 rounded-lg bg-[#F0FDF4]">
                    <span className="text-[10px] font-semibold text-[#22C55E] shrink-0 mt-px">APRES</span>
                    <span className="text-[11px] text-[#555] leading-[1.5]">{uc.after}</span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#F8F5F0] text-[10px] font-medium text-[#8B7355]">
                  {uc.model}
                </span>
              </article>
            ))}
          </div>
        </section>
        <Connector />

        {/* Section 4: Guide gratuit */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Mini book cover */}
              <div className="shrink-0 w-[140px] h-[180px] rounded-xl shadow-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #D4A27F 0%, #B8956A 50%, #8B7355 100%)" }}>
                <div className="text-center px-4">
                  <div className="text-[10px] font-medium text-white/60 mb-1">Guide Ceres</div>
                  <div className="text-[14px] font-bold text-white leading-[1.2] mb-2">Claude pour le Marketing B2B</div>
                  <div className="w-6 h-px bg-white/30 mx-auto mb-2" />
                  <div className="text-[9px] text-white/50">55 pages</div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-4"><Badge>Ressource gratuite</Badge></div>
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
                  Notre guide gratuit : Claude pour le marketing B2B
                </h2>
                <p className="text-[13px] text-[#777] leading-[1.65] mb-2">
                  55 pages, 10 chapitres, 20+ prompts prets a l&apos;emploi. Tout ce qu&apos;il faut pour integrer Claude dans vos operations marketing et commerciales.
                </p>
                <div className="flex flex-wrap gap-3 mt-4 justify-center md:justify-start">
                  <span className="text-[11px] text-[#999]">55 pages</span>
                  <span className="text-[11px] text-[#DDD]">|</span>
                  <span className="text-[11px] text-[#999]">10 chapitres</span>
                  <span className="text-[11px] text-[#DDD]">|</span>
                  <span className="text-[11px] text-[#999]">20+ prompts</span>
                </div>
                <div className="mt-5">
                  <Link
                    href="/guide-claude-marketing"
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors"
                  >
                    <span className="w-2 h-2 rounded-sm bg-[#D4A27F]" />
                    Telecharger le guide
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Connector />

        {/* Section 5: Articles */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Blog</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Articles sur Claude et l&apos;IA
            </h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">
              Nos analyses approfondies sur l&apos;utilisation de Claude et l&apos;IA dans le business B2B.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {blogArticles.map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F8F5F0] flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#8B7355]">
                      <path d="M3 2h8a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1" />
                      <path d="M4 5h6M4 7h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[13px] font-semibold text-[#111] leading-[1.4] group-hover:text-[#8B7355] transition-colors">
                      {a.title}
                    </h3>
                    <span className="text-[11px] text-[#999] mt-1 inline-block">Lire l&apos;article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <Connector />

        {/* Section 6: FAQ Claude */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>FAQ</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">
              Posez votre question
            </h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">
              Les reponses aux questions les plus frequentes sur Claude et l&apos;IA en B2B.
            </p>
          </div>
          <ClaudeFAQ />
        </section>
        <Connector />

        {/* Section 7: CTA */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Vous voulez deployer Claude dans votre equipe ?
            </h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[440px] mx-auto">
              30 minutes pour identifier vos use cases IA les plus impactants. Gratuit, sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors"
              >
                <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                Reserver un appel
              </Link>
              <Link
                href="/guide-claude-marketing"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2 rounded-md text-[13px] text-[#666] hover:text-[#111] transition-colors"
              >
                Telecharger le guide →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
