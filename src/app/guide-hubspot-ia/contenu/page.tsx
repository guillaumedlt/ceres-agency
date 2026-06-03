"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ACCENT = "#FF7A59";
const ACCENT_2 = "#6D00CC";

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Le Guide HubSpot + IA 2026 : Breeze, Claude, MCP, agents autonomes",
  description:
    "Le guide le plus complet en francais sur HubSpot + IA en 2026. Breeze AI (20+ agents), Studio, Marketplace, HubSpot MCP server, integration Claude, Smart Deal Progression, AEO HubSpot, outcome-based pricing, 15 cas d'usage et plan 90 jours.",
  author: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-03",
  dateModified: "2026-06-03",
  inLanguage: "fr-FR",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/guide-hubspot-ia/contenu" },
};

const TOC = [
  { id: "ch1", n: 1, t: "L'etat de HubSpot et de l'IA en juin 2026" },
  { id: "ch2", n: 2, t: "Breeze vs Claude vs ChatGPT vs Gemini" },
  { id: "ch3", n: 3, t: "Breeze Assistant : le copilot HubSpot" },
  { id: "ch4", n: 4, t: "Les 20+ Breeze Agents : panorama complet" },
  { id: "ch5", n: 5, t: "Customer Agent : -39% de temps de resolution" },
  { id: "ch6", n: 6, t: "Prospecting Agent : SDR autonome a $1/lead" },
  { id: "ch7", n: 7, t: "Content Agent + Loop Marketing" },
  { id: "ch8", n: 8, t: "Breeze Studio + Marketplace : agents custom" },
  { id: "ch9", n: 9, t: "HubSpot MCP server : Claude/ChatGPT branches" },
  { id: "ch10", n: 10, t: "15 cas d'usage Claude + HubSpot avec prompts" },
  { id: "ch11", n: 11, t: "Spring 2026 : AEO, Smart Deal Progression, Audit Cards" },
  { id: "ch12", n: 12, t: "Gouvernance, securite, ROI + plan 90 jours" },
];

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="text-[26px] sm:text-[32px] font-semibold text-[#111] tracking-[-0.02em] mt-16 mb-5 scroll-mt-24">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[18px] sm:text-[20px] font-semibold text-[#111] tracking-[-0.01em] mt-10 mb-3">{children}</h3>;
}

function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="text-[15px] font-semibold text-[#111] mt-6 mb-2">{children}</h4>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] text-[#444] leading-[1.75] mb-4">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-2 mb-5 text-[14px] text-[#444] leading-[1.75] list-disc pl-5">{children}</ul>;
}

function Callout({ kind = "info", title, children }: { kind?: "info" | "warn" | "tip"; title?: string; children: React.ReactNode }) {
  const colors = {
    info: { bg: "#EEF2FF", border: "#C7D2FE", text: "#4338CA" },
    warn: { bg: "#FFF7ED", border: "#FED7AA", text: "#C2410C" },
    tip: { bg: "#F0FDF4", border: "#BBF7D0", text: "#15803D" },
  } as const;
  const c = colors[kind];
  return (
    <div className="rounded-xl p-4 my-5" style={{ background: c.bg, borderLeft: `3px solid ${c.border}` }}>
      {title && <p className="text-[12px] font-semibold mb-1.5" style={{ color: c.text }}>{title}</p>}
      <div className="text-[13px] leading-[1.7]" style={{ color: c.text }}>{children}</div>
    </div>
  );
}

function Code({ children }: { children: React.ReactNode }) {
  return (
    <pre className="rounded-xl bg-[#0F172A] text-[#E2E8F0] text-[12.5px] leading-[1.7] p-4 overflow-x-auto my-5 font-mono">
      <code>{children}</code>
    </pre>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-[#E8E8E8]">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="bg-[#FAFAFA] border-b border-[#E8E8E8]">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-2.5 text-[12px] font-semibold text-[#111]">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[#F0F0F0] last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2.5 text-[#555] align-top leading-[1.6]">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function GuideHubspotIaContenuPage() {
  const [activeId, setActiveId] = useState("ch1");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const scrolled = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, scrolled)));
      const sections = TOC.map((t) => document.getElementById(t.id)).filter(Boolean) as HTMLElement[];
      const fromTop = window.scrollY + 120;
      let current = TOC[0].id;
      for (const s of sections) {
        if (s.offsetTop <= fromTop) current = s.id;
      }
      setActiveId(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-transparent">
        <div className="h-full transition-[width] duration-150" style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT_2})` }} />
      </div>

      <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
        <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 320, height: 320, borderRadius: "50%", background: ACCENT, opacity: 0.10, filter: "blur(80px)" }} />
        <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "30%", width: 300, height: 300, borderRadius: "50%", background: ACCENT_2, opacity: 0.08, filter: "blur(80px)" }} />

        <div className="relative z-10 max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-[100px]">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Sommaire</p>
              <nav className="space-y-1">
                {TOC.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className={`block py-1.5 pl-3 border-l-2 text-[12px] leading-[1.5] transition-colors ${
                      activeId === t.id ? "text-[#111] font-semibold" : "text-[#777] hover:text-[#444]"
                    }`}
                    style={{ borderColor: activeId === t.id ? ACCENT : "#EEE" }}
                  >
                    <span className="text-[#BBB] mr-1">{t.n}.</span>
                    {t.t}
                  </a>
                ))}
              </nav>
              <div className="mt-6 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-3">
                <p className="text-[11px] text-[#666] leading-[1.6] mb-2">Besoin d&apos;un accompagnement pour deployer Breeze ou des agents Claude/MCP dans votre HubSpot ?</p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-[11px] font-medium" style={{ color: ACCENT }}>
                  Reserver un appel
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </Link>
              </div>
            </div>
          </aside>

          {/* Content */}
          <article className="min-w-0 max-w-[760px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/guides" className="hover:text-[#111] transition-colors">Guides</Link><span>/</span>
              <Link href="/guide-hubspot-ia" className="hover:text-[#111] transition-colors">HubSpot + IA</Link><span>/</span>
              <span className="text-[#666]">Contenu</span>
            </nav>

            <p className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Guide premium &middot; Edition juin 2026</p>
            <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
              Le Guide HubSpot + IA 2026
            </h1>
            <p className="text-[16px] text-[#666] leading-[1.7] mb-8">
              Breeze AI (20+ agents, Studio, Marketplace), HubSpot MCP server, integration Claude / ChatGPT, Smart Deal Progression, AEO HubSpot, Audit Cards, outcome-based pricing. 12 chapitres denses, 15 cas d&apos;usage avec prompts prets a coller, plan d&apos;adoption 90 jours par persona.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#FFF1ED] text-[#FF7A59] font-medium">75 pages</span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#F3EBFF] text-[#6D00CC] font-medium">12 chapitres</span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#EEF2FF] text-[#6366F1] font-medium">15 prompts</span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-[#F0FDF4] text-[#22C55E] font-medium">A jour juin 2026</span>
            </div>

            {/* ===================== CHAPITRE 1 ===================== */}
            <H2 id="ch1">1. L&apos;etat de HubSpot et de l&apos;IA en juin 2026</H2>
            <P>
              HubSpot n&apos;est plus un CRM avec quelques fonctionnalites IA. C&apos;est devenu, en 18 mois, une <strong>customer platform agentique</strong> ou l&apos;IA est presente a chaque clic : assistant integre dans chaque editeur (email, blog, sequence, workflow, report), agents autonomes qui executent des taches end-to-end (Customer, Prospecting, Content, Data...), studio no-code pour builder vos propres agents, marketplace pour en installer en 2 clics, et serveur MCP officiel pour brancher Claude, ChatGPT, Cursor ou tout autre LLM sur vos donnees CRM.
            </P>
            <P>
              Ce chapitre fait le point sur ou en est HubSpot en juin 2026, avec les changements majeurs du Spring Spotlight 2026 (15 avril 2026) et les nouveautes silencieuses des 60 derniers jours.
            </P>

            <H3>Breeze : l&apos;ombrelle IA d&apos;HubSpot</H3>
            <P>
              Depuis l&apos;automne 2024, toutes les fonctionnalites IA d&apos;HubSpot sont regroupees sous la marque <strong>Breeze</strong>. Il y a trois briques :
            </P>
            <UL>
              <li><strong>Breeze Assistant</strong> : le copilot integre partout dans HubSpot (rediger un email, resumer un thread, generer une description, creer un workflow). Inclus dans tous les plans, illimite.</li>
              <li><strong>Breeze Agents</strong> : des agents autonomes qui executent une tache de bout en bout (resoudre un ticket, qualifier un lead, generer un article, enrichir une fiche). 20+ agents disponibles a date.</li>
              <li><strong>Breeze Intelligence</strong> : la couche data (enrichissement, buyer intent, ICP scoring). Le standard est <em>gratuit</em> depuis Spring 2026.</li>
            </UL>

            <H3>Les 6 changements majeurs du Spring Spotlight 2026 (15 avril)</H3>
            <UL>
              <li><strong>HubSpot AEO</strong> : nouvelle suite de tools pour optimiser votre presence dans les LLMs (Claude, ChatGPT, Perplexity, Gemini). Audit citation, brand monitoring, content gap detection.</li>
              <li><strong>Smart Deal Progression</strong> : progression automatique des deals dans le pipeline (Breeze detecte les signaux et avance le deal au stage suivant avec preuves).</li>
              <li><strong>Outcome-based pricing</strong> : Customer Agent et Prospecting Agent sont passes au <strong>pay per resolved task</strong> ($0.50 / conversation resolue, $1 / lead recommande).</li>
              <li><strong>Free Data Enrichment</strong> : l&apos;enrichissement des champs standards est gratuit. Avant c&apos;etait un credit Intelligence par enrichissement.</li>
              <li><strong>Audit Cards</strong> : chaque action IA dans HubSpot est tracee dans une card horodatee qui montre quelles donnees ont alimente la decision et quelles proprietes ont change.</li>
              <li><strong>Run Agent workflow action</strong> : nouvelle action dans les workflows pour appeler un Breeze Agent en cours d&apos;execution (private beta a date).</li>
            </UL>

            <H3>Les nouveautes silencieuses des 60 derniers jours</H3>
            <UL>
              <li><strong>GPT-5 par defaut dans Breeze Studio</strong> (depuis le 12 janvier 2026). Les agents pre-built (Customer, Prospecting, Data) restent sur leur stack proprietaire.</li>
              <li><strong>Customer Agent + 9 canaux</strong> : ajout SMS, WhatsApp, et Voice/Calling (en beta). Avant c&apos;etait chat + email + Messenger uniquement.</li>
              <li><strong>Breeze Marketplace</strong> : 30+ agents pre-built par editeurs tiers (Clay, Outreach, Apollo, Lemlist, Ringover...).</li>
              <li><strong>HubSpot MCP server</strong> est GA depuis avril 2026 (apres 4 mois de beta).</li>
              <li><strong>Brand Voice</strong> : entrainable sur 10+ assets et applique automatiquement par Content Agent et Breeze Assistant.</li>
            </UL>

            <Callout kind="info" title="Pourquoi c&apos;est important">
              HubSpot a fait un choix clair : devenir <strong>la</strong> plateforme agentique pour les equipes go-to-market. Cela veut dire que <em>refuser</em> d&apos;utiliser Breeze revient progressivement a refuser d&apos;utiliser HubSpot tel qu&apos;il a ete pense en 2026. La bonne strategie n&apos;est pas de tout activer mais de prioriser intelligemment.
            </Callout>

            <H3>Ou en est l&apos;adoption reelle ?</H3>
            <P>
              D&apos;apres HubSpot (chiffres Spring 2026) :
            </P>
            <UL>
              <li><strong>Customer Agent</strong> : 8 000+ comptes actives, 65% des conversations resolues sans humain, -39% de temps de resolution moyen.</li>
              <li><strong>Prospecting Agent</strong> : adoption plus lente (cible Enterprise), retours mitiges sur les leads recommandes selon la qualite du CRM.</li>
              <li><strong>Breeze Assistant</strong> : utilise par 60% des utilisateurs actifs hebdomadaires (DAU mensuels qui declenchent au moins une action IA dans HubSpot).</li>
              <li><strong>Content Agent</strong> : adoption forte sur le content marketing, plus mitigee sur le commercial qui prefere Claude / ChatGPT pour la finesse.</li>
            </UL>

            <H3>Ce que ce guide va vous apprendre</H3>
            <UL>
              <li>Differencier Breeze Assistant, Breeze Agents et Breeze Intelligence et savoir quand utiliser quoi.</li>
              <li>Choisir entre Breeze, Claude, ChatGPT ou Gemini pour 12 cas d&apos;usage RevOps concrets.</li>
              <li>Installer et configurer le HubSpot MCP server pour brancher Claude ou ChatGPT en lecture/ecriture sur votre CRM.</li>
              <li>Activer, monitorer et calculer le ROI des principaux Breeze Agents (Customer, Prospecting, Content, Data).</li>
              <li>Builder un agent custom dans Breeze Studio (template, instructions, tools, evaluation).</li>
              <li>Mettre en place une gouvernance IA + HubSpot saine (RGPD, Audit Cards, monitoring couts).</li>
              <li>Suivre un plan 30/60/90 jours d&apos;adoption par persona (Sales, Marketing, CS, Ops).</li>
            </UL>

            {/* ===================== CHAPITRE 2 ===================== */}
            <H2 id="ch2">2. Breeze AI vs Claude vs ChatGPT vs Gemini : la stack IA optimale</H2>
            <P>
              La premiere question que toute equipe RevOps doit se poser en 2026 n&apos;est pas <em>est-ce que je dois utiliser l&apos;IA dans HubSpot</em>, mais <em>quel LLM j&apos;utilise pour quel cas d&apos;usage</em>. La reponse n&apos;est jamais &quot;un seul LLM pour tout&quot;. C&apos;est une stack hybride.
            </P>

            <H3>Forces et faiblesses de chaque option</H3>

            <Table
              headers={["Outil", "Force principale", "Faiblesse", "Cas d'usage type"]}
              rows={[
                ["Breeze Assistant", "Integre partout dans HubSpot, contextuel, gratuit", "Reasoning moins profond que Claude / GPT-5 pur", "Rediger un email, resumer un thread, creer un workflow"],
                ["Breeze Agents", "Outcome-driven, garde-fous in-platform, audit", "Couts qui peuvent deraper sans monitoring", "Resolution de tickets, qualification de leads"],
                ["Claude (Sonnet 4.6 / Opus 4.7)", "Reasoning long, code, analyse profonde, contexte 200K-1M", "Pas natif HubSpot, necessite MCP ou copy-paste", "Analyse strategique, generation de scripts, content B2B technique"],
                ["ChatGPT (GPT-5)", "Polyvalence, ecosysteme, plugins, voix", "Output parfois generique sans prompt fin", "Operations transverses, brainstorm, automatisation"],
                ["Gemini 2.5 / 3", "Multimodal, integration Google Workspace", "Moins de support enterprise francais", "Analyse de docs Workspace, video, image"],
              ]}
            />

            <H3>La regle Ceres : 3 niveaux d&apos;intelligence</H3>
            <P>
              Apres 60+ deploiements HubSpot AI chez nos clients, voici la regle qu&apos;on applique :
            </P>
            <UL>
              <li><strong>Niveau 1 - In-platform (Breeze)</strong> : tout ce qui est <em>contextuel a HubSpot</em> et tactique (rediger un email a partir d&apos;une fiche, resumer un thread, generer une description, suggerer un workflow). Breeze Assistant est imbattable car il a la fiche, l&apos;historique et la brand voice deja en contexte.</li>
              <li><strong>Niveau 2 - Agentique (Breeze Agents + Studio)</strong> : tout ce qui est <em>tache repetitive avec une definition d&apos;outcome claire</em> (resoudre un ticket Tier 1, qualifier un lead inbound, recommander des leads outbound, enrichir une fiche).</li>
              <li><strong>Niveau 3 - Reasoning profond (Claude / ChatGPT via MCP)</strong> : tout ce qui necessite du <em>raisonnement complexe, du jugement, ou de la generation longue</em> (deal review strategique, ICP analysis, scripts custom Claude Code, content thought leadership).</li>
            </UL>

            <Callout kind="tip" title="Ne pas faire">
              Ne pas demander a Breeze Assistant de generer un livre blanc de 12 pages. Ne pas demander a Claude de mettre a jour une fiche contact &quot;a la main&quot;. Chaque outil a son terrain.
            </Callout>

            <H3>Matrice de decision : 12 cas d&apos;usage RevOps</H3>
            <Table
              headers={["Cas d'usage", "Meilleur outil", "Pourquoi"]}
              rows={[
                ["Rediger un email perso a partir d'une fiche", "Breeze Assistant", "Contexte fiche + historique + brand voice deja la"],
                ["Resumer un thread email de 30 messages", "Breeze Assistant", "Acces direct au thread, pas de copy-paste"],
                ["Creer une description de propriete custom", "Breeze Assistant", "Comprend les autres proprietes de l'objet"],
                ["Generer un workflow a partir d'un brief", "Breeze Assistant", "Acces aux triggers, branches, actions HubSpot"],
                ["Resoudre les tickets Tier 1 sur 9 canaux", "Customer Agent", "Outcome-based pricing, KB integree, escalation native"],
                ["Recommander des leads outbound", "Prospecting Agent", "Acces ICP + signaux Breeze Intelligence"],
                ["Generer un article de blog SEO complet", "Content Agent + Claude", "Content Agent pour le draft + Claude pour la profondeur"],
                ["Faire un deal review hebdo avec recommandations", "Claude via MCP", "Reasoning long, multiple deals en contexte"],
                ["Definir un nouvel ICP", "Claude (Opus)", "Analyse strategique, multi-sources"],
                ["Generer un script Python d'audit CRM", "Claude Code", "Code de qualite, debug, execution locale"],
                ["Faire un dashboard custom a partir d'un brief", "Breeze Assistant + Claude", "Breeze pour la creation, Claude pour la requete custom"],
                ["Faire de la veille concurrentielle", "Claude / ChatGPT (web)", "Recherche web + synthese, pas dispo dans Breeze"],
              ]}
            />

            <H3>Combien ca coute, vraiment ?</H3>
            <P>Ordres de grandeur pour une scale-up de 50 personnes :</P>
            <UL>
              <li><strong>Breeze Assistant</strong> : 0 EUR (inclus). Illimite.</li>
              <li><strong>Customer Agent</strong> : ~500 EUR / mois si 1 000 conversations resolues ($0.50 x 1 000).</li>
              <li><strong>Prospecting Agent</strong> : ~1 000 EUR / mois si 1 000 leads recommandes ($1 x 1 000).</li>
              <li><strong>Content Agent / Data Agent</strong> : packages varies, en general 150-500 EUR / mois.</li>
              <li><strong>Claude Enterprise</strong> : ~30 EUR / utilisateur / mois (~1 500 EUR / mois pour 50 utilisateurs).</li>
              <li><strong>ChatGPT Enterprise</strong> : ~25 EUR / utilisateur / mois (~1 250 EUR / mois pour 50 utilisateurs).</li>
              <li><strong>API Claude / OpenAI</strong> pour Claude Code, MCP, scripts : ~300-800 EUR / mois selon usage.</li>
            </UL>
            <P>
              Total realiste pour une stack hybride bien deployee : <strong>3 000 a 5 000 EUR / mois</strong>. ROI typique observe : <strong>15 a 25 heures economisees par semaine par persona Ops</strong>, soit l&apos;equivalent de 0.5 a 1 ETP. Le breakeven est en general atteint en moins de 60 jours.
            </P>

            {/* ===================== CHAPITRE 3 ===================== */}
            <H2 id="ch3">3. Breeze Assistant : le copilot HubSpot au quotidien</H2>
            <P>
              Si vous ne devez retenir qu&apos;une chose de ce guide, c&apos;est ceci : <strong>Breeze Assistant est l&apos;outil IA le plus rentable d&apos;HubSpot</strong>. Il est gratuit, illimite, present partout, contextuel a vos donnees, et il fait gagner 5 a 10 minutes par utilisation. Pourtant 40% des utilisateurs HubSpot ne le declenchent pas une seule fois par semaine.
            </P>

            <H3>Ou trouve-t-on Breeze Assistant ?</H3>
            <UL>
              <li><strong>Editeur d&apos;email</strong> (1-to-1 et marketing) : redaction, reecriture, traduction, change de ton.</li>
              <li><strong>Editeur de blog / landing pages</strong> : generation, optimisation SEO, brand voice, balises meta.</li>
              <li><strong>Workflow builder</strong> : suggestion d&apos;actions, generation de branche, debug.</li>
              <li><strong>Sequences (Sales Hub)</strong> : variantes A/B, personnalisation.</li>
              <li><strong>Properties</strong> : description automatique, suggestions de groupes, conversion de label.</li>
              <li><strong>Knowledge base</strong> : redaction d&apos;articles, traduction, FAQ.</li>
              <li><strong>Reports &amp; dashboards</strong> : creation a partir de brief en langage naturel.</li>
              <li><strong>Threads (inbox, deals, tickets)</strong> : resume, prochaine action recommandee, draft de reponse.</li>
              <li><strong>Loop Marketing</strong> : campaign briefs, brand guides, ICP analysis (nouveaute 2026).</li>
            </UL>

            <H3>Les 10 prompts Breeze Assistant les plus rentables</H3>
            <P>A coller dans le champ Breeze Assistant de l&apos;editeur concerne :</P>

            <H4>1. Resumer un thread de 20+ emails</H4>
            <Code>{`Resume ce thread en 5 bullets pour un AE qui prend le deal en relai. Inclus :
- Ce que le client veut
- Les objections deja entendues
- Les decisions deja prises
- Les next steps committes
- Les noms et roles des intervenants cote client`}</Code>

            <H4>2. Generer un email de relance smart</H4>
            <Code>{`Redige une relance pour ce contact :
- Ton : direct, professionnel, pas commercial
- Reference la derniere interaction de maniere specifique
- Apporte une nouvelle valeur (pas juste "vous avez 5 min ?")
- Termine par une question simple a repondre

Format : 70-100 mots max, pas de signature.`}</Code>

            <H4>3. Creer un workflow a partir d&apos;un brief</H4>
            <Code>{`Cree un workflow qui :
- Se declenche quand un contact remplit le form "Demo request"
- Verifie si le contact a deja un AE assigne, sinon route au round robin "France Pipeline"
- Cree une task "Premier contact sous 1h" pour l'AE
- Envoie une notification Slack au canal #sdr-alerts
- Met le contact en stage "Demo requested"
- Si pas de meeting bookee sous 48h : escalate au team lead`}</Code>

            <H4>4. Optimiser SEO un article de blog</H4>
            <Code>{`Optimise cet article pour le mot cle "lead scoring HubSpot" :
- Verifie densite (1.5-2.5%)
- Suggere 5 mots cles secondaires a integrer
- Reecris H1, H2, title et meta description
- Propose 3 internal links a ajouter (suggere des articles existants de notre blog)
- Verifie longueur intro (50-80 mots)`}</Code>

            <H4>5. Generer un dashboard executive</H4>
            <Code>{`Cree un dashboard "Weekly Sales Standup" avec :
- Top : 4 KPIs (pipeline cree cette semaine, deals closes won, deals closes lost, conversion rate)
- Middle : table des deals avancant en stage > Negotiation
- Bottom : forecast vs target (gauge) + activites par AE (bar chart)
Audience : VP Sales, mise a jour temps reel.`}</Code>

            <H4>6. Reecrire en brand voice</H4>
            <Code>{`Reecris ce texte dans notre brand voice :
- Tutoiement
- Concret, anti-jargon
- Phrases courtes (< 20 mots)
- Bullet points si > 3 idees
- Pas de superlatifs (excellent, incroyable, leader...)

Texte : {coller le texte}`}</Code>

            <H4>7. Generer une description de propriete</H4>
            <Code>{`Genere une description courte pour cette propriete custom :
Nom : "icp_fit_score"
Type : number 0-100
Contexte : score de fit ICP calcule par Breeze Intelligence + override manuel possible.
Audience : AE et SDR qui voient cette propriete sur la fiche contact.`}</Code>

            <H4>8. Resumer un appel commercial</H4>
            <Code>{`Resume cet appel commercial pour le CRM :
- Section 1 : besoin client (3 bullets)
- Section 2 : criteres de decision (budget, timeline, stakeholders, technical fit)
- Section 3 : objections et reponses apportees
- Section 4 : next steps committes avec date

Garde un ton factuel, pas de fluff.`}</Code>

            <H4>9. Suggerer une prochaine action</H4>
            <Code>{`Regarde l'historique de ce contact (emails, meetings, page views) et suggere :
- La prochaine meilleure action (1 seule)
- Le timing optimal
- Le canal recommande (email, LinkedIn, telephone)
- Une amorce de message (1 phrase)`}</Code>

            <H4>10. Generer un brief de campagne (Loop Marketing)</H4>
            <Code>{`Cree un campaign brief pour une campagne "ABM Tier 1 - SaaS scale-ups France" :
- Objectif (1 metric primary, 2 secondary)
- Audience (ICP + buyer personas)
- Message principal et 3 sous-messages
- Channels (email, LinkedIn, ABM ads, gifting)
- Timeline 6 semaines
- Budget reparti par channel
- Success criteria`}</Code>

            <H3>Customiser Breeze Assistant a votre brand voice</H3>
            <P>
              Dans <em>Settings &gt; AI &gt; Brand voice</em>, vous pouvez uploader 10+ assets representatifs de votre marque (articles de blog, emails commerciaux best-performers, landing pages, livres blancs) et Breeze entraine un profil de brand voice qui sera applique automatiquement a toutes les generations.
            </P>
            <Callout kind="tip" title="Astuce Ceres">
              Faites cet exercice avec votre VP Marketing : selectionnez 15 assets qui representent vraiment le ton souhaite (et pas seulement le ton actuel). Le delta entre &quot;ton actuel&quot; et &quot;ton souhaite&quot; est souvent ou se cache la valeur.
            </Callout>

            {/* ===================== CHAPITRE 4 ===================== */}
            <H2 id="ch4">4. Les 20+ Breeze Agents : panorama complet</H2>
            <P>
              Depuis l&apos;Inbound 2025 (septembre 2025) puis le Spring Spotlight 2026 (avril 2026), HubSpot a publie plus de 20 agents Breeze. Voici le panorama complet et comment prioriser leur activation.
            </P>

            <H3>Les 4 agents historiques (les plus matures)</H3>
            <Table
              headers={["Agent", "Fonction", "Pricing", "Niveau de maturite"]}
              rows={[
                ["Customer Agent", "Resoudre des tickets Tier 1 sur 9 canaux", "$0.50 / conversation resolue", "GA - 8000+ clients - tres mature"],
                ["Prospecting Agent", "Qualifier + recommander des leads outbound", "$1 / lead recommande", "GA - adoption moyenne - depend qualite CRM"],
                ["Content Agent", "Generer + remixer du content (blog, social, podcast)", "Inclus selon edition", "GA - mature pour le content marketing"],
                ["Data Agent", "Enrichir, dedoublonner, nettoyer les fiches CRM", "Inclus + credits Intelligence", "GA - tres utile pour qualite donnees"],
              ]}
            />

            <H3>Les nouveaux agents post-INBOUND 2025</H3>
            <Table
              headers={["Agent", "Categorie", "Use case principal"]}
              rows={[
                ["Knowledge Base Agent", "Service", "Generer + maintenir les articles KB a partir des tickets resolus"],
                ["Forecast Agent", "Sales", "Generer un forecast hebdo avec confidence intervals"],
                ["Pipeline Hygiene Agent", "Sales", "Detecter deals stagnant, doublons, dates de close incoherentes"],
                ["Meeting Prep Agent", "Sales", "Generer le brief avant chaque meeting (acteurs, historique, deal context)"],
                ["Onboarding Agent", "CS", "Automatiser les 30 premiers jours d'un nouveau client (emails, tasks, sequences)"],
                ["Renewal Agent", "CS", "Detecter risques de churn 90j avant renewal + jouer la playbook adaptee"],
                ["Lead Score Agent", "Marketing", "Maintenir un scoring fit + engagement temps reel sans regle a coder"],
                ["Workflow Optimizer Agent", "Ops", "Auditer vos workflows et suggerer optimisations / simplifications"],
                ["Form Optimizer Agent", "Marketing", "Optimiser les forms (champs, conditions, A/B) pour maximiser conversion"],
                ["SEO Agent", "Marketing", "Audit SEO + plan de content + balises auto sur tous les articles"],
                ["Translation Agent", "All", "Traduire emails, articles, sequences dans 35 langues avec brand voice"],
                ["ABM Agent", "Marketing/Sales", "Identifier accounts engagees + jouer la playbook ABM adaptee"],
                ["Voice Agent (beta)", "Service", "Repondre aux appels entrants (Tier 1) avec voix synthetique"],
                ["Reports Agent", "Ops", "Generer dashboards et reports a partir de briefs"],
                ["Compliance Agent (beta)", "Ops", "Auditer la conformite RGPD / GDPR de vos workflows et donnees"],
                ["Campaign Agent (Loop Marketing)", "Marketing", "Generer un campaign brief + assets a partir d'un objectif"],
              ]}
            />

            <H3>Comment prioriser : la matrice impact x effort</H3>
            <P>
              N&apos;activez pas les 20 agents en meme temps. Voici l&apos;ordre Ceres recommande pour une scale-up B2B SaaS, par ordre de ROI typique :
            </P>
            <Table
              headers={["Phase", "Agent", "ROI typique 60j", "Effort setup"]}
              rows={[
                ["1 - Quick wins", "Customer Agent + KB Agent", "+1 ETP support, -39% TTR", "Moyen (KB a preparer)"],
                ["1 - Quick wins", "Meeting Prep Agent", "10 min/AE/jour", "Faible"],
                ["1 - Quick wins", "Workflow Optimizer", "5-15 workflows simplifies", "Faible"],
                ["2 - Force de frappe", "Pipeline Hygiene Agent", "+30% data quality, -50% admin AE", "Faible"],
                ["2 - Force de frappe", "Lead Score Agent", "Conversion x1.3", "Moyen"],
                ["2 - Force de frappe", "Forecast Agent", "Forecast accuracy +20pts", "Moyen"],
                ["3 - Strategique", "Prospecting Agent", "+50% leads qualifies pour SDR", "Eleve (CRM doit etre clean)"],
                ["3 - Strategique", "Renewal Agent", "-30% churn pre-renewal", "Eleve (besoin signaux)"],
                ["3 - Strategique", "ABM Agent", "Cycles 30% plus courts sur Tier 1", "Eleve (CRM ABM-ready)"],
              ]}
            />

            <Callout kind="warn" title="Erreur frequente">
              Activer Prospecting Agent <em>avant</em> Data Agent. Si vos fiches contacts sont sales (50%+ doublons, champs vides, formats incoherents), le Prospecting Agent va recommander des leads de mauvaise qualite et vous gaspillerez du budget. Toujours : nettoyer d&apos;abord, prospect ensuite.
            </Callout>

            {/* ===================== CHAPITRE 5 ===================== */}
            <H2 id="ch5">5. Customer Agent : -39% de temps de resolution moyen</H2>
            <P>
              Customer Agent est le Breeze Agent le plus mature. 8 000+ clients l&apos;utilisent. 65% des conversations sont resolues sans humain. Le temps moyen de resolution baisse de 39%. C&apos;est aussi le seul agent ou le ROI est facile a defendre : vous payez $0.50 par conversation resolue. Si une conversation humaine vous coute 4 EUR (cas commun), le ROI est immediat.
            </P>

            <H3>Les 9 canaux supportes (juin 2026)</H3>
            <UL>
              <li>Live chat (site web, app)</li>
              <li>Email</li>
              <li>Facebook Messenger</li>
              <li>WhatsApp Business</li>
              <li>SMS</li>
              <li>Instagram DM</li>
              <li>Forms (auto-reply intelligent)</li>
              <li>Apple Business Chat</li>
              <li>Voice / Calling (beta - reponse aux appels entrants Tier 1)</li>
            </UL>

            <H3>Comment ca marche techniquement</H3>
            <P>
              Customer Agent est branche sur 3 sources de verite :
            </P>
            <UL>
              <li><strong>Knowledge Base HubSpot</strong> : votre KB publique. Plus elle est complete, plus l&apos;agent est performant.</li>
              <li><strong>Donnees CRM</strong> : fiche contact, deals associes, tickets passes. L&apos;agent personnalise la reponse.</li>
              <li><strong>Documents / PDFs uploades</strong> : you can upload up to 50 sources (PDF, URLs, Notion pages) en addition de la KB.</li>
            </UL>

            <H3>Setup en 12 etapes</H3>
            <UL>
              <li><strong>1.</strong> Faire un audit de votre KB existante. Identifier les 20 articles les plus consultes et les retravailler en priorite.</li>
              <li><strong>2.</strong> Identifier les 50 questions les plus posees au support sur les 6 derniers mois. Verifier qu&apos;il existe un article KB pour chacune.</li>
              <li><strong>3.</strong> Definir le scope de l&apos;agent : sur quels sujets il peut repondre, et sur quels il doit escalader directement.</li>
              <li><strong>4.</strong> Configurer les <strong>guardrails</strong> : sujets interdits (prix custom, contrat juridique, refund &gt; X EUR, etc.).</li>
              <li><strong>5.</strong> Definir le ton (Settings &gt; Brand voice). Tester sur 10 cas reels.</li>
              <li><strong>6.</strong> Configurer la regle d&apos;escalation : sentiment negatif, mot cle &quot;cancel&quot; ou &quot;avocat&quot;, 2 echanges sans resolution, etc.</li>
              <li><strong>7.</strong> Connecter les canaux progressivement : commencer par <em>chat seul, en mode shadow</em> (l&apos;agent propose, l&apos;humain valide) pendant 2 semaines.</li>
              <li><strong>8.</strong> Activer le mode autonome sur le chat. Monitorer Audit Cards quotidiennement.</li>
              <li><strong>9.</strong> Ajouter email apres 2 semaines de stabilite chat.</li>
              <li><strong>10.</strong> Ajouter WhatsApp, SMS, Messenger progressivement.</li>
              <li><strong>11.</strong> Activer le KB Agent en parallele pour que les conversations resolues alimentent automatiquement la KB.</li>
              <li><strong>12.</strong> Faire un point ROI mensuel : conversations resolues, escalations, CSAT, cout total vs equivalent humain.</li>
            </UL>

            <H3>Best practices Knowledge Base</H3>
            <UL>
              <li><strong>1 question = 1 article.</strong> Pas d&apos;articles fourre-tout. L&apos;agent route mieux.</li>
              <li><strong>Titre = question reelle</strong> (&quot;Comment changer mon mode de paiement ?&quot; et pas &quot;Gestion des paiements&quot;).</li>
              <li><strong>Reponse en haut, contexte ensuite.</strong> L&apos;agent cite la reponse directe.</li>
              <li><strong>Etapes numerotees</strong> pour les how-to (l&apos;agent les rend en formate clair).</li>
              <li><strong>Update au moins trimestriel.</strong> Un article obsolete = une reponse fausse.</li>
              <li><strong>Article &quot;Edge cases&quot;</strong> pour les exceptions a connaitre (l&apos;agent les utilise pour escalader correctement).</li>
            </UL>

            <H3>KPIs a suivre</H3>
            <Table
              headers={["KPI", "Cible 30j", "Cible 90j"]}
              rows={[
                ["% conversations resolues sans humain", "40%", "60-65%"],
                ["CSAT post-conversation Agent", "> 4.0 / 5", "> 4.3 / 5"],
                ["Temps de resolution median", "-20%", "-35 a -45%"],
                ["Escalations correctes (vraies escalations)", "> 80%", "> 90%"],
                ["Cout par conversation totale (Agent + humain)", "-30%", "-50%"],
                ["Articles KB declenches", "Top 30", "Top 80"],
              ]}
            />

            {/* ===================== CHAPITRE 6 ===================== */}
            <H2 id="ch6">6. Prospecting Agent : SDR autonome a $1 par lead</H2>
            <P>
              Prospecting Agent est l&apos;agent le plus polarisant de la stack Breeze. Pour certains, c&apos;est un game-changer (Enterprise avec gros TAM). Pour d&apos;autres, c&apos;est un puits sans fond (CRM sale, ICP flou). Cet outil exige des prerequis serieux pour delivrer.
            </P>

            <H3>Ce qu&apos;il fait reellement</H3>
            <UL>
              <li><strong>Identifie</strong> des accounts qui matchent votre ICP a partir de la base HubSpot + Breeze Intelligence + signaux externes.</li>
              <li><strong>Qualifie</strong> ces accounts (size, industry, intent signals, tech stack si dispo).</li>
              <li><strong>Identifie</strong> les contacts cibles dans chaque account (decision makers, buying committee).</li>
              <li><strong>Recommande</strong> ces leads a votre equipe SDR avec une priorisation (high / med / low intent).</li>
              <li><strong>Optionnel</strong> : enrolle ces leads dans une sequence Sales Hub avec un email d&apos;ouverture personnalise.</li>
            </UL>

            <H3>Pricing detaille</H3>
            <P>
              Depuis avril 2026, <strong>outcome-based</strong> : $1 par lead recommande pour outreach. Aucun cout pour les leads identifies mais non recommandes (l&apos;agent decide qu&apos;ils ne matchent pas assez l&apos;ICP).
            </P>
            <Callout kind="info">
              Le pricing parait elegant mais attention : si l&apos;agent recommande 5 000 leads dans le mois et que seuls 200 sont contactes, vous avez paye 5 000 USD pour rien. Le bon reflexe : <strong>capper le volume mensuel via configuration</strong> au max que vos SDRs peuvent reellement traiter.
            </Callout>

            <H3>Les 5 prerequis non-negociables</H3>
            <UL>
              <li><strong>1. CRM clean a 80%+</strong> : pas plus de 20% de doublons, pas plus de 30% de fiches avec champs critiques vides. Activez Data Agent 30 jours avant.</li>
              <li><strong>2. ICP documente et code dans HubSpot</strong> : criteres firmographiques + comportementaux + signaux d&apos;achat formalises dans Breeze Intelligence ou en properties.</li>
              <li><strong>3. Sequences Sales Hub deja en place et testees</strong> : pas la peine de recommander des leads si vos sequences convertissent a 0.5%.</li>
              <li><strong>4. SDR capacity definie</strong> : combien de leads vos SDRs peuvent traiter par semaine ? Cappez l&apos;agent en consequence.</li>
              <li><strong>5. Feedback loop</strong> : process clair pour que les SDR marquent les leads recommandes comme &quot;bons&quot; ou &quot;mauvais&quot;. C&apos;est ce feedback qui ameliore l&apos;agent dans le temps.</li>
            </UL>

            <H3>Garde-fous critiques</H3>
            <UL>
              <li><strong>Cap mensuel de volume</strong> (par exemple : max 800 leads recommandes / mois).</li>
              <li><strong>Filtres d&apos;exclusion</strong> : pas d&apos;accounts deja clients, pas de tier ennemi, pas de regions hors target.</li>
              <li><strong>Filtres de qualite</strong> : minimum score ICP fit (par exemple 70/100), minimum 2 contacts identifies par account.</li>
              <li><strong>Review humaine hebdomadaire</strong> les 60 premiers jours : un SDR senior valide les recommandations avant outreach.</li>
              <li><strong>Audit Cards quotidien</strong> les 30 premiers jours pour comprendre les criteres reels de l&apos;agent et ajuster.</li>
            </UL>

            <H3>Quand Prospecting Agent ne sert a rien</H3>
            <UL>
              <li>TAM trop petit (&lt; 1 000 accounts cibles). Vous avez deja la liste, automatiser n&apos;ajoute rien.</li>
              <li>ICP non documente. L&apos;agent va deviner et vous payerez pour des suppositions.</li>
              <li>Cycle de vente court (transactionnel B2C-like). Les sequences automatiques classiques font le job.</li>
              <li>Pas de SDR pour traiter (ou un seul). Le ROI suppose au moins 3-4 SDR a feed.</li>
            </UL>

            {/* ===================== CHAPITRE 7 ===================== */}
            <H2 id="ch7">7. Content Agent + Loop Marketing : content remix industrialise</H2>
            <P>
              Content Agent est l&apos;agent le plus utilise cote Marketing. Combine a Loop Marketing (la nouvelle methodologie content d&apos;HubSpot lancee fin 2025), il transforme la maniere de produire du content B2B.
            </P>

            <H3>Loop Marketing : la nouvelle philosophie HubSpot</H3>
            <P>
              Loop Marketing remplace la vieille metaphore du funnel par celle d&apos;une <strong>boucle</strong> ou chaque action (content publie, deal cree, conversation support, churn) alimente la production de content suivante. Concretement :
            </P>
            <UL>
              <li><strong>Listen</strong> : Breeze ecoute en continu (calls, tickets, deals lost, social mentions, intent signals).</li>
              <li><strong>Decide</strong> : Loop Marketing decide les content gaps prioritaires (sujets demandes, objections frequentes, signaux concurrents).</li>
              <li><strong>Create</strong> : Content Agent + Breeze Assistant produisent le content prioritaire.</li>
              <li><strong>Distribute</strong> : Campaign Agent route sur les bons canaux (blog, LinkedIn, email, ABM).</li>
              <li><strong>Measure</strong> : Reports Agent mesure l&apos;impact sur le pipeline et boucle a Listen.</li>
            </UL>

            <H3>Ce que Content Agent fait bien</H3>
            <UL>
              <li><strong>Generer un draft de blog post</strong> long (1 500-3 000 mots) a partir d&apos;un brief, avec brand voice et SEO de base integres.</li>
              <li><strong>Remixer un asset</strong> en multiples formats : 1 article de blog = 5 posts LinkedIn + 1 email + 1 script video 90s + 1 podcast outline.</li>
              <li><strong>Generer des landing pages</strong> coherentes avec votre design system HubSpot.</li>
              <li><strong>Traduire</strong> dans 35 langues avec respect du ton.</li>
              <li><strong>Optimiser SEO</strong> avec suggestions de keywords, internal links, balises, schema.</li>
            </UL>

            <H3>Ce que Content Agent fait mal (et qu&apos;il faut completer)</H3>
            <UL>
              <li><strong>Thought leadership profond</strong> : Content Agent reste safe. Pour les articles d&apos;opinion ou de prise de position, complementer avec Claude Opus.</li>
              <li><strong>Articles ultra-techniques</strong> : pas assez precis pour de la doc dev ou des sujets pointus. Claude / Claude Code est meilleur.</li>
              <li><strong>Originalite stylistique</strong> : ecriture parfois generique meme avec brand voice. Toujours editer humainement avant publication.</li>
              <li><strong>Research approfondie</strong> : Content Agent ne fait pas de recherche web profonde. Combiner avec un agent de research (Claude + MCP web ou Perplexity).</li>
            </UL>

            <H3>La stack content optimale Ceres</H3>
            <Callout kind="tip">
              <strong>Pipeline content B2B 2026 :</strong><br/>
              1. <em>Loop Marketing</em> identifie les sujets prioritaires &rarr;<br/>
              2. <em>Claude Opus</em> ecrit le draft 1 (thought leadership) ou <em>Content Agent</em> ecrit le draft 1 (SEO classique) &rarr;<br/>
              3. <em>Breeze Assistant</em> applique la brand voice et optimise SEO &rarr;<br/>
              4. Editeur humain (10 min de review) &rarr;<br/>
              5. <em>Content Agent</em> remixe en 5 formats (blog, LinkedIn, email, video script, podcast) &rarr;<br/>
              6. <em>Campaign Agent</em> distribue &rarr;<br/>
              7. <em>Reports Agent</em> mesure le pipeline genere.
            </Callout>

            {/* ===================== CHAPITRE 8 ===================== */}
            <H2 id="ch8">8. Breeze Studio + Marketplace : votre agent custom no-code</H2>
            <P>
              Breeze Studio est le no-code agent builder d&apos;HubSpot. C&apos;est l&apos;equivalent HubSpot de ce que sont CrewAI, LangGraph ou Custom GPTs cote OpenAI : un environnement pour creer vos propres agents tailles a vos process.
            </P>

            <H3>Que peut-on builder dans Breeze Studio ?</H3>
            <UL>
              <li><strong>Assistants</strong> : repondent a des questions, generent du content (versions personnalisees de Breeze Assistant).</li>
              <li><strong>Agents</strong> : executent des taches structurees en utilisant vos donnees HubSpot + tools.</li>
            </UL>

            <H3>Anatomie d&apos;un agent Breeze Studio</H3>
            <UL>
              <li><strong>Name &amp; description</strong> : a quoi sert cet agent ?</li>
              <li><strong>Trigger</strong> : quand declencher (form fill, workflow, manual, schedule).</li>
              <li><strong>Instructions</strong> : le system prompt principal. Ton, garde-fous, formatage.</li>
              <li><strong>Knowledge</strong> : sources de verite (KB, fichiers, URLs).</li>
              <li><strong>Tools</strong> : ce que l&apos;agent peut faire (create contact, update deal, send email, query CRM, call external API, etc.).</li>
              <li><strong>Model</strong> : GPT-5 par defaut, options Claude / autres selon updates.</li>
              <li><strong>Evaluation</strong> : suite de tests pour valider que l&apos;agent fait ce qu&apos;il doit faire.</li>
            </UL>

            <H3>5 exemples d&apos;agents custom rentables</H3>

            <H4>1. Inbound Triage Agent</H4>
            <P>
              Trigger : nouveau form fill demo. Tools : enrich contact (Data Agent API), score ICP, check existing account, route to right SDR. Output : contact enrichi + task creee pour SDR + notification Slack.
            </P>

            <H4>2. Deal Risk Agent</H4>
            <P>
              Trigger : deal stage = &quot;Proposition envoyee&quot; depuis &gt; 14 jours sans activite. Tools : analyse l&apos;historique, check intent signals, suggere prochaine action. Output : note dans le deal + task au AE.
            </P>

            <H4>3. Customer Health Agent</H4>
            <P>
              Trigger : weekly schedule. Tools : aggregate tickets, NPS, product usage (via integration), payment status. Output : health score updated, churn risk flag, CSM notification si risque.
            </P>

            <H4>4. Pricing Q&amp;A Agent</H4>
            <P>
              Trigger : detection du mot &quot;prix&quot; / &quot;pricing&quot; dans un email inbound. Tools : check approval matrix, identifier le bon tarif selon segment, generer un PDF devis depuis template. Output : devis attache au deal, ready to send par AE.
            </P>

            <H4>5. Competitor Mention Agent</H4>
            <P>
              Trigger : detection mention concurrent dans un thread email ou call. Tools : pull battle card depuis KB, suggest reponse, log into &quot;Competitive Intel&quot; report. Output : message Slack au sales enablement + briefing AE.
            </P>

            <H3>Breeze Marketplace : 30+ agents pre-built</H3>
            <P>
              Marketplace agrege des agents construits par des editeurs tiers et certifies HubSpot. Quelques exemples de juin 2026 :
            </P>
            <UL>
              <li><strong>Clay Enrichment Agent</strong> : enrichissement avance multi-source.</li>
              <li><strong>Apollo Outreach Agent</strong> : sequences cross-channel.</li>
              <li><strong>Lemlist Cold Email Agent</strong> : copywriting cold email + sending.</li>
              <li><strong>Ringover Voice Agent</strong> : capture + log + summarize d&apos;appels.</li>
              <li><strong>Outreach Pipeline Agent</strong> : insights pipeline cross-CRM.</li>
              <li><strong>Notion Sync Agent</strong> : sync bi-directionnel pages Notion &lt;-&gt; objects HubSpot.</li>
              <li><strong>Linear Ticket Agent</strong> : convert ticket HubSpot en issue Linear.</li>
              <li><strong>Slack Routing Agent</strong> : routing intelligent de notifications cross-channels.</li>
              <li><strong>Stripe Reconciliation Agent</strong> : sync invoices / payments &lt;-&gt; deals.</li>
              <li><strong>OpenAI Translate Agent</strong> : traductions premium ultra-localisees.</li>
            </UL>

            <Callout kind="tip" title="Conseil Ceres">
              Avant de coder un agent custom dans Breeze Studio, <strong>cherchez d&apos;abord dans le Marketplace</strong>. 70% des cas d&apos;usage standards ont deja un agent pret a installer.
            </Callout>

            {/* ===================== CHAPITRE 9 ===================== */}
            <H2 id="ch9">9. HubSpot MCP server : Claude / ChatGPT branches sur votre CRM</H2>
            <P>
              Le HubSpot MCP server est probablement la nouveaute la plus structurante de 2026. Il permet a n&apos;importe quel LLM compatible MCP (Claude, ChatGPT, Cursor, Perplexity, Vercel AI SDK, agents customs) de lire et ecrire dans HubSpot via un protocole securise.
            </P>

            <H3>Pourquoi c&apos;est different de Breeze</H3>
            <UL>
              <li><strong>Breeze</strong> : l&apos;IA s&apos;execute <em>dans</em> HubSpot, avec des modeles imposes (GPT-5 ou stack proprietaire).</li>
              <li><strong>MCP server</strong> : l&apos;IA s&apos;execute <em>hors</em> HubSpot (Claude Desktop, ChatGPT, votre propre app) mais lit/ecrit en temps reel dans HubSpot. Vous choisissez le modele.</li>
            </UL>
            <P>
              Concretement : avec MCP, vous pouvez demander a Claude dans votre Claude Desktop &quot;Donne-moi un brief sur le contact Jean Dupont chez Acme&quot; et Claude va lire HubSpot, recuperer la fiche, les deals, les emails, les meetings, et te repondre. Avec Breeze, ce meme prompt serait limite a ce que Breeze Assistant comprend.
            </P>

            <H3>Architecture en 4 composants</H3>
            <UL>
              <li><strong>Le MCP server HubSpot</strong> : un serveur npm (@hubspot/mcp-server) que vous lancez localement ou hostez en remote.</li>
              <li><strong>Un private app token HubSpot</strong> avec les scopes adequats (Contacts read/write, Deals read/write, etc.).</li>
              <li><strong>Un client MCP</strong> : Claude Desktop, Claude Code, ChatGPT (via plugin), Cursor, Vercel AI SDK...</li>
              <li><strong>Une config locale</strong> qui indique au client MCP comment se connecter au server.</li>
            </UL>

            <H3>Installation pour Claude Desktop (5 minutes)</H3>

            <H4>1. Creer un Private App dans HubSpot</H4>
            <UL>
              <li>Settings &gt; Integrations &gt; Private Apps &gt; Create a private app.</li>
              <li>Nommer &quot;MCP - Claude Desktop&quot;.</li>
              <li>Scopes minimum : crm.objects.contacts.read, crm.objects.contacts.write, crm.objects.deals.read, crm.objects.deals.write, crm.objects.companies.read, crm.objects.tickets.read.</li>
              <li>Copier l&apos;access token (commence par &quot;pat-eu1-...&quot;).</li>
            </UL>

            <H4>2. Installer le MCP server</H4>
            <Code>{`npm install -g @hubspot/mcp-server`}</Code>

            <H4>3. Configurer Claude Desktop</H4>
            <P>Editer <code className="bg-[#F5F5F5] px-1.5 py-0.5 rounded text-[12px]">~/Library/Application Support/Claude/claude_desktop_config.json</code> :</P>
            <Code>{`{
  "mcpServers": {
    "hubspot": {
      "command": "npx",
      "args": ["-y", "@hubspot/mcp-server"],
      "env": {
        "HUBSPOT_ACCESS_TOKEN": "pat-eu1-xxxxxxxxxxxx"
      }
    }
  }
}`}</Code>

            <H4>4. Redemarrer Claude Desktop et tester</H4>
            <P>
              Dans une nouvelle conversation Claude, ecrivez : <em>&quot;Liste les 5 derniers deals crees dans HubSpot&quot;</em>. Vous devriez voir Claude appeler les outils MCP et retourner les deals.
            </P>

            <H3>Scopes recommandes (production)</H3>
            <Table
              headers={["Scope", "Usage", "Risque si fuite"]}
              rows={[
                ["crm.objects.contacts.read", "Lecture des contacts", "Faible (donnees PII)"],
                ["crm.objects.contacts.write", "Modification contacts", "Moyen (alterer la base)"],
                ["crm.objects.deals.read", "Lecture deals + pipeline", "Faible"],
                ["crm.objects.deals.write", "Modifier stage / amount", "Moyen (fausser le forecast)"],
                ["crm.objects.companies.read", "Lecture companies", "Faible"],
                ["crm.objects.tickets.read", "Lecture tickets", "Faible"],
                ["crm.objects.tickets.write", "Modifier tickets", "Moyen"],
                ["sales-email-read", "Lire emails commerciaux", "Eleve (PII conversations)"],
                ["files", "Acces fichiers HubSpot", "Eleve (PDFs sensibles)"],
                ["automation", "Trigger workflows", "Eleve (impact business large)"],
              ]}
            />

            <Callout kind="warn" title="Securite OAuth 2.1">
              N&apos;activez que les scopes vraiment necessaires a votre cas d&apos;usage. Faites tourner les tokens tous les 90 jours. Pour les deploiements equipe, preferez l&apos;installation remote du MCP server (sur Vercel par exemple) avec auth utilisateur OAuth 2.1, plutot que des tokens locaux par personne.
            </Callout>

            <H3>Remote MCP server pour les equipes</H3>
            <P>
              Pour deployer en equipe (10+ personnes), hostez le MCP server sur Vercel / Render / Fly.io et exposez-le via HTTPS. Chaque utilisateur s&apos;authentifie via OAuth 2.1 et ses propres permissions HubSpot s&apos;appliquent. Cela permet :
            </P>
            <UL>
              <li>Centralisation des logs et audit.</li>
              <li>Rotation des tokens centralisee.</li>
              <li>Respect des roles et permissions HubSpot par utilisateur.</li>
              <li>Mise a jour du server sans redeploiement client.</li>
              <li>Possibilite d&apos;ajouter des tools custom (proxy vers d&apos;autres MCP servers de votre stack).</li>
            </UL>

            {/* ===================== CHAPITRE 10 ===================== */}
            <H2 id="ch10">10. 15 cas d&apos;usage Claude + HubSpot avec prompts</H2>
            <P>
              Une fois le MCP server installe, voici les 15 cas d&apos;usage qui generent le plus de valeur. Tous testes chez Ceres ou chez nos clients. Les prompts sont prets a coller dans Claude (avec MCP HubSpot connecte).
            </P>

            <H3>Cas 1 - Meeting Prep en 30 secondes</H3>
            <Code>{`Je vois Jean Dupont (CTO chez Acme Corp) demain a 14h. Donne-moi un brief structure :
1. Contexte de l'entreprise (3 bullets : industry, taille, fundraising, stack tech si dispo)
2. Historique avec nous : derniers emails, meetings, deals (resume)
3. Stade du deal en cours et next steps committes
4. Points sensibles ou objections deja entendues
5. 3 questions strategiques a poser

Sources : HubSpot CRM uniquement, ne rien inventer.`}</Code>

            <H3>Cas 2 - Deal Review hebdo</H3>
            <Code>{`Genere mon deal review du vendredi. Pour chaque deal en stage > Demo donnee avec close date dans les 60 prochains jours :
- Deal name, montant, close date, AE
- Probabilite (basee sur l'historique)
- Derniere activite (date + type)
- Risque identifie (silence > 14j, prix non discute, absence multi-stakeholders, etc.)
- Recommandation : push / nurture / disqualifier

Format : table markdown triee par montant.`}</Code>

            <H3>Cas 3 - Forecast Review</H3>
            <Code>{`Donne-moi un forecast Q2 (juin-aout 2026) base sur le pipeline actuel :
- Committed (won + > 80% probability) : montant + nombre de deals
- Most likely (50-80% probability) : montant + nombre
- Best case (< 50% mais > 25%) : montant + nombre
- Compare au quota Q2 (1.2M EUR)
- Indique les 5 deals les plus risques qui plomberaient le forecast s'ils slipent
- Indique les 5 deals les plus impactants si on les acceleer`}</Code>

            <H3>Cas 4 - Pipeline Hygiene Audit</H3>
            <Code>{`Audit pipeline hygiene cette semaine :
- Deals stagnant > 30 jours sans activite (liste + AE)
- Deals avec close date passee non updated (liste)
- Deals > 100k EUR sans multi-threading (< 2 contacts associes)
- Deals avec champs obligatoires vides (next step, budget confirme)
- Doublons potentiels (meme account, meme stage)

Pour chaque categorie : nombre + 5 exemples + recommandation.`}</Code>

            <H3>Cas 5 - ICP Analysis</H3>
            <Code>{`Analyse mes 30 derniers deals closed-won des 6 derniers mois et donne-moi un profil ICP raffine :
- Industries dominantes (top 3 + %)
- Taille moyenne (employees, revenue)
- Job titles des acheteurs (top 5)
- Source d'acquisition (top 3)
- Cycle de vente median
- Average deal size

Compare avec mon ICP actuel documente dans HubSpot (propriete custom "icp_profile" sur companies).
Suggere les ajustements ICP a faire.`}</Code>

            <H3>Cas 6 - Ticket Triage Avance</H3>
            <Code>{`Pour les tickets ouverts depuis > 24h :
- Classifie chaque ticket par categorie (bug, feature request, billing, onboarding, churn risk)
- Priorise (P0/P1/P2) basee sur : MRR du client, sentiment, anciennete
- Suggere une action pour chacun
- Identifie les patterns (3 sujets qui reviennent le plus = probleme produit)`}</Code>

            <H3>Cas 7 - Account Plan Generation</H3>
            <Code>{`Genere un account plan pour TotalEnergies :
1. Etat du compte : MRR, contrats, contacts cles, derniere interaction
2. Carte des stakeholders identifies (decision makers, influencers, blockers, champions)
3. White space analysis : produits / services non encore vendus
4. Risques identifies (churn, downgrade, dissatisfaction)
5. Opportunites a 6 mois (3 specifiques avec amount estime)
6. Plan d'action 30j (3 actions max, owner, deadline)`}</Code>

            <H3>Cas 8 - Lead Enrichment</H3>
            <Code>{`Pour ces 20 contacts ajoutes ce matin (liste avec emails) :
- Verifier si ils existent deja
- Si nouvelle entree : enrichir avec linkedin role, company size, industry, recent funding
- Score ICP fit 0-100 base sur nos criteres (B2B SaaS scale-up, > 50 employees, France/Europe)
- Suggerer routing : SDR (score > 70), Marketing nurture (40-70), DQL (< 40)
- Mettre a jour les fiches dans HubSpot avec les scores et le routing`}</Code>

            <H3>Cas 9 - Dashboard Custom</H3>
            <Code>{`Cree un dashboard "Marketing-Sales Alignment" dans HubSpot :
- Rapport 1 : MQL -> SQL conversion par source (table)
- Rapport 2 : Temps moyen MQL -> SQL par source (bar chart)
- Rapport 3 : Pipeline genere par campagne marketing (bar chart)
- Rapport 4 : Cout par MQL vs cout par SQL par source (table)
- Rapport 5 : SLA marketing -> sales respect (% MQL contactes sous 24h)

Donne-moi le brief structure, je validerai avant que tu crees.`}</Code>

            <H3>Cas 10 - Renewal Risk Detection</H3>
            <Code>{`Pour tous les contrats arrivant en renewal dans les 90 prochains jours :
- MRR, renewal date, CSM owner
- Health score (combine NPS + ticket count + usage si dispo)
- Signaux de risque (sentiment tickets, baisse d'usage, changement decision maker)
- Niveau de risque : Green / Yellow / Red
- Recommandation : QBR a programmer / renouvellement automatique / save plan a deployer

Format : table triee par MRR descendant + flag visuel par risque.`}</Code>

            <H3>Cas 11 - Email Sequence Generation</H3>
            <Code>{`Genere une sequence Sales Hub "Outbound Tier 1 - CTO SaaS scale-ups" :
- 5 etapes sur 18 jours
- Variation channels : email (3), LinkedIn message (1), LinkedIn comment + email (1)
- Ton : direct, anti-pitch, valeur d'abord
- Reference 1 signal d'achat par etape (funding, hiring, news)
- Last email : breakup avec valeur (article ou template)

Format : pour chaque etape, donne subject, body, day from start, type (email/linkedin).
Cree ensuite la sequence directement dans HubSpot.`}</Code>

            <H3>Cas 12 - Workflow Audit</H3>
            <Code>{`Audit nos workflows actifs :
- Liste les workflows declenches > 100x ce mois
- Pour chaque : taux de completion vs taux d'echec
- Detecte les workflows redondants (meme trigger, actions similaires)
- Detecte les workflows orphelins (declenches mais sans output observable)
- Detecte les workflows risques (envoient email a la base entiere sans filtre)

Pour les top 3 problemes : suggere une refactorisation precise.`}</Code>

            <H3>Cas 13 - Battle Card Auto</H3>
            <Code>{`Tous les deals lost ces 3 derniers mois avec raison = "Concurrence : Salesforce" :
- Liste deal name + amount + ICP fit
- Extrais les objections recurrentes citees dans les notes ou emails
- Genere une battle card Ceres vs Salesforce updatee avec :
  * 3 points faibles concrets observes
  * 3 arguments differenciants prouves
  * 5 talking points pour les prochains pitchs

Cree une note dans le KB HubSpot avec cette battle card.`}</Code>

            <H3>Cas 14 - Onboarding Custom</H3>
            <Code>{`Pour le nouveau client Acme (deal closed la semaine derniere) :
- Cree un projet onboarding 30 jours dans HubSpot
- Tasks pour le CSM : KO call (jour 1), tech setup (jour 3-5), training session (jour 8), 30j checkpoint
- Sequence email automatique : welcome, weekly check-in, milestone celebration
- Notification Slack au CSM a chaque etape
- Dashboard de health onboarding (login frequency, feature usage, NPS)

Setup le tout dans HubSpot et donne-moi le summary.`}</Code>

            <H3>Cas 15 - Quarterly Business Review preparation</H3>
            <Code>{`Genere le QBR pour Beedeez (notre meilleur client) :
- Section 1 : usage et adoption (top features used, growth vs last quarter, users actifs)
- Section 2 : ROI delivere (deals influences par notre produit, time saved estime)
- Section 3 : tickets / sentiment (volume, sentiment global, top 3 painpoints)
- Section 4 : roadmap impact (features livrees ce trimestre qui les concernent)
- Section 5 : opportunites d'expansion (white space, upsell potentials, refs)

Format : structure de slides 10 max, output en markdown que je passerai dans Slides.`}</Code>

            <Callout kind="tip" title="Combinaison MCP + Claude Code">
              Pour aller plus loin : combinez MCP HubSpot avec Claude Code. Vous pouvez ecrire des scripts qui appellent HubSpot, font des transformations complexes (multi-source, pandas, viz), et reinjectent les resultats dans HubSpot. Voir notre <Link href="/guide-claude-marketing" className="underline" style={{ color: ACCENT }}>Guide Claude Marketing</Link> pour le detail.
            </Callout>

            {/* ===================== CHAPITRE 11 ===================== */}
            <H2 id="ch11">11. Spring 2026 : AEO, Smart Deal Progression, Audit Cards</H2>
            <P>
              Le Spring Spotlight 2026 (15 avril 2026) a marque l&apos;arrivee de trois fonctionnalites structurantes qu&apos;il faut maitriser : AEO HubSpot, Smart Deal Progression, et Audit Cards.
            </P>

            <H3>HubSpot AEO : optimiser pour les LLMs</H3>
            <P>
              AEO (Answer Engine Optimization) est la reponse d&apos;HubSpot a une realite : 30 a 40% des recherches B2B passent deja par Claude, ChatGPT ou Perplexity en 2026, et ce chiffre grimpe a 60% sur certains verticaux tech. HubSpot AEO permet de :
            </P>
            <UL>
              <li><strong>Auditer votre presence</strong> dans les reponses LLM (Claude, ChatGPT, Gemini, Perplexity) sur vos mots cles cibles.</li>
              <li><strong>Identifier les content gaps</strong> : sujets ou les LLM ne vous citent pas alors qu&apos;ils citent des concurrents.</li>
              <li><strong>Optimiser vos pages</strong> pour etre cite (schema.org, FAQ structurees, donnees factuelles, signaux d&apos;autorite).</li>
              <li><strong>Monitorer dans le temps</strong> votre share of voice dans les LLMs.</li>
              <li><strong>Generer un llms.txt</strong> automatiquement avec vos contenus prioritaires.</li>
            </UL>
            <Callout kind="info" title="Ce que ca change concretement">
              Pour la premiere fois, HubSpot integre nativement les LLMs comme un channel de discovery au meme titre que Google. Si vous etes en B2B SaaS / Services et que votre cible utilise massivement Claude / ChatGPT, activez AEO en priorite : c&apos;est probablement la fonctionnalite avec le plus gros impact en 6 mois.
            </Callout>

            <H3>Smart Deal Progression</H3>
            <P>
              Smart Deal Progression detecte automatiquement les signaux qui justifient un changement de stage et avance les deals dans le pipeline sans intervention manuelle. Exemples :
            </P>
            <UL>
              <li>Reception d&apos;un document signe (NDA, proposal signed) =&gt; deal avance en &quot;Negotiation&quot;.</li>
              <li>Detection multi-stakeholder (3+ contacts engages depuis 14 jours) =&gt; deal avance en &quot;Multi-thread&quot;.</li>
              <li>Demo donnee (calendar event &quot;Demo&quot; complete + notes loggees) =&gt; deal avance en &quot;Demo done&quot;.</li>
              <li>Devis envoye et ouvert =&gt; deal avance en &quot;Proposal sent&quot;.</li>
            </UL>
            <P>
              Chaque progression genere une <strong>Audit Card</strong> (voir ci-dessous) qui montre les signaux ayant declenche le changement. L&apos;humain peut toujours revoquer la progression.
            </P>

            <H3>Audit Cards : la tracabilite IA</H3>
            <P>
              Les Audit Cards sont la reponse d&apos;HubSpot au probleme #1 de l&apos;IA en entreprise : la <strong>black box</strong>. Chaque action IA (Breeze Assistant, Agent, Smart Deal Progression) genere une card horodatee qui montre :
            </P>
            <UL>
              <li>Quelle action a ete prise (update field, send email, change stage, etc.).</li>
              <li>Quel agent / assistant l&apos;a prise.</li>
              <li>Quelles donnees ont alimente la decision (sources citees).</li>
              <li>Quelle confidence l&apos;agent avait.</li>
              <li>Quand (timestamp).</li>
              <li>Option de revoquer / annuler.</li>
            </UL>
            <P>
              Les Audit Cards sont visibles sur les fiches contacts, deals, tickets, et dans un dashboard global <em>Settings &gt; AI &gt; Audit log</em>. Conservation : 12 mois minimum (extensible avec Enterprise).
            </P>

            <H3>Run Agent workflow action</H3>
            <P>
              Nouvelle action disponible dans les workflows : <strong>Run a Breeze Agent</strong>. Elle permet de declencher un agent depuis un workflow et de reinjecter son output dans la suite du workflow. Exemples :
            </P>
            <UL>
              <li>Workflow declenche par form fill =&gt; Run Lead Score Agent =&gt; if score &gt; 70 then route to AE, else nurture.</li>
              <li>Workflow declenche par ticket cree =&gt; Run Ticket Triage Agent =&gt; route au bon team.</li>
              <li>Workflow weekly =&gt; Run Pipeline Hygiene Agent =&gt; envoyer le rapport au VP Sales.</li>
            </UL>
            <Callout kind="warn">
              En juin 2026, &quot;Run Agent workflow action&quot; est en <strong>private beta</strong>. Si vous etes Enterprise, demandez l&apos;acces a votre CSM. Cela ouvre des cas d&apos;usage agentic deja tres puissants.
            </Callout>

            <H3>GPT-5 par defaut + Free Data Enrichment</H3>
            <P>
              Deux changements silencieux mais importants :
            </P>
            <UL>
              <li>Depuis le 12 janvier 2026, <strong>GPT-5 est le modele par defaut dans Breeze Studio</strong>. Avant c&apos;etait GPT-4.1. Cela impacte la qualite (mieux) et le cout (un peu plus, mais pris en charge par HubSpot). Les agents pre-built (Customer, Prospecting, Data) restent sur leur stack proprietaire.</li>
              <li>Depuis Spring 2026, <strong>l&apos;enrichissement Data Agent est gratuit</strong> pour les champs standards (name, job title, company, industry, location). Les champs premium (intent, technographie, news) restent payants en credits Intelligence.</li>
            </UL>

            {/* ===================== CHAPITRE 12 ===================== */}
            <H2 id="ch12">12. Gouvernance, securite, ROI + plan 90 jours</H2>
            <P>
              Le dernier chapitre est le plus important pour les decideurs. Activer Breeze et brancher Claude est facile. Garder le tout sous controle, demontrer le ROI et embarquer les equipes : c&apos;est la vraie difficulte.
            </P>

            <H3>RGPD et HubSpot AI : les points cles</H3>
            <UL>
              <li>HubSpot est <strong>Data Processor</strong> pour les donnees clients. Vos DPA existantes couvrent l&apos;usage IA.</li>
              <li>Les <strong>models LLM utilises par Breeze ne s&apos;entrainent pas</strong> sur vos donnees (clause contractuelle).</li>
              <li><strong>Aucun transfert hors UE</strong> garanti pour les comptes EU (region eu1) - les requetes LLM passent par infrastructure HubSpot EU.</li>
              <li><strong>Logs des actions IA</strong> conserves 12 mois minimum (Audit Cards) - permet de demontrer l&apos;explicabilite.</li>
              <li><strong>Droit a l&apos;effacement</strong> : effacer un contact efface aussi les Audit Cards le concernant.</li>
              <li>Pour Claude / ChatGPT externes via MCP : ce sont vos contrats Anthropic / OpenAI qui s&apos;appliquent. <strong>Verifiez le no-train et la residence des donnees</strong> sur ces contrats.</li>
            </UL>

            <H3>Gouvernance des agents : les 8 regles Ceres</H3>
            <UL>
              <li><strong>1. Toujours commencer en shadow</strong> : l&apos;agent suggere, l&apos;humain decide, 2 a 4 semaines avant le mode autonome.</li>
              <li><strong>2. Capper les volumes</strong> sur tout agent payant a l&apos;outcome (Customer Agent, Prospecting Agent).</li>
              <li><strong>3. Definir une matrice d&apos;escalation</strong> claire : quand l&apos;agent ne sait pas, qui prend le relais ?</li>
              <li><strong>4. Audit Cards quotidiens</strong> les 30 premiers jours, hebdo ensuite.</li>
              <li><strong>5. Feedback loop systematique</strong> : les humains marquent &quot;bon&quot; / &quot;mauvais&quot; sur les outputs agents. Sans feedback, pas d&apos;amelioration.</li>
              <li><strong>6. Brand voice unique</strong> partout (Breeze, Content Agent, sequences). Sinon vous perdez de la coherence.</li>
              <li><strong>7. Garde-fous explicites</strong> : sujets sensibles (legal, prix custom, PII tiers) declarees comme &quot;always escalate&quot;.</li>
              <li><strong>8. Revue trimestrielle</strong> : performance, cout, ROI, alignement strategique de chaque agent.</li>
            </UL>

            <H3>Calculer le ROI d&apos;un agent : la formule</H3>
            <Callout kind="tip" title="Formule Ceres">
              <strong>ROI agent / mois</strong> =<br/>
              (Heures economisees x cout horaire charge) - (Cout agent + cout setup amorti + cout review)<br/><br/>
              Exemple Customer Agent :<br/>
              - 1 000 conversations resolues x 15 min = 250h economisees<br/>
              - 250h x 35 EUR/h (charge support) = 8 750 EUR de valeur<br/>
              - Cout agent : 1 000 x 0.50 = 500 EUR<br/>
              - Cout setup amorti sur 12 mois : 200 EUR/mois<br/>
              - Cout review hebdo (1h x 4 sem) : 4h x 50 = 200 EUR<br/>
              <strong>ROI net = 8 750 - 900 = 7 850 EUR / mois</strong> (ratio 8.7x)
            </Callout>

            <H3>Plan 90 jours d&apos;adoption</H3>

            <H4>Jours 0-30 : Foundation</H4>
            <UL>
              <li><strong>Semaine 1</strong> : Audit etat des lieux (data quality, KB, ICP, brand voice). Choix des 3-5 agents prioritaires.</li>
              <li><strong>Semaine 2</strong> : Activer Breeze Assistant pour toute l&apos;equipe. Former 1h par persona (Sales, Marketing, CS, Ops) sur les top prompts.</li>
              <li><strong>Semaine 3</strong> : Nettoyage CRM (Data Agent). Mise a jour KB pour le top 30 articles.</li>
              <li><strong>Semaine 4</strong> : Activation Customer Agent en mode shadow sur chat uniquement.</li>
            </UL>

            <H4>Jours 30-60 : Acceleration</H4>
            <UL>
              <li><strong>Semaine 5-6</strong> : Customer Agent en autonome sur chat + email. Audit Cards quotidien. KB Agent active.</li>
              <li><strong>Semaine 7</strong> : Pipeline Hygiene Agent + Meeting Prep Agent actives. Formation equipe Sales.</li>
              <li><strong>Semaine 8</strong> : HubSpot MCP server installe pour 5-10 power users (RevOps, Sales Ops, top AE). Premiers prompts Claude testes.</li>
            </UL>

            <H4>Jours 60-90 : Industrialisation</H4>
            <UL>
              <li><strong>Semaine 9-10</strong> : Content Agent + Loop Marketing en production. Lead Score Agent active. Premier dashboard ROI presente au CODIR.</li>
              <li><strong>Semaine 11</strong> : Si CRM clean, activer Prospecting Agent en mode capped + shadow. Forecast Agent.</li>
              <li><strong>Semaine 12</strong> : 1er agent custom dans Breeze Studio (cas d&apos;usage specifique a votre business). Bilan 90j et plan T+1.</li>
            </UL>

            <H3>Les 5 erreurs a eviter</H3>
            <UL>
              <li><strong>1. Tout activer en meme temps</strong> : impossible de mesurer le ROI ou de corriger les derives.</li>
              <li><strong>2. Sauter le nettoyage CRM</strong> : tous les agents qui se nourrissent du CRM seront mediocres.</li>
              <li><strong>3. Negliger la formation</strong> : Breeze Assistant a 0 ROI si les equipes ne le declenchent jamais.</li>
              <li><strong>4. Pas de Brand Voice configuree</strong> : tout sonne IA generique, perte d&apos;identite.</li>
              <li><strong>5. Pas de monitoring couts</strong> : avec l&apos;outcome pricing, un cap mal calibre peut couter cher.</li>
            </UL>

            <H3>Aller plus loin avec Ceres</H3>
            <P>
              Si vous voulez deployer HubSpot AI en mode &quot;tout est cadre, ROI prouvable, equipes embarquees&quot;, c&apos;est exactement notre metier. <Link href="/audit-revops" className="underline" style={{ color: ACCENT }}>Audit RevOps</Link> pour partir d&apos;un diagnostic, ou <Link href="/contact" className="underline" style={{ color: ACCENT }}>contactez-nous</Link> pour un cadrage IA + HubSpot avec une feuille de route 90 jours.
            </P>

            {/* Footer CTA */}
            <div className="mt-20 rounded-2xl p-6 md:p-10" style={{ background: `linear-gradient(135deg, ${ACCENT}10, ${ACCENT_2}10)`, border: `1px solid ${ACCENT}30` }}>
              <p className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: ACCENT }}>Vous avez termine le guide</p>
              <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
                Pret a deployer Breeze, Claude et MCP dans votre HubSpot ?
              </h2>
              <p className="text-[13px] text-[#555] leading-[1.7] mb-5">
                On accompagne les equipes RevOps et CRO de scale-ups B2B sur la mise en production complete : audit, choix des agents prioritaires, deploiement, formation, monitoring ROI. Premiere conversation gratuite (30 min).
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-[13px] font-medium transition-opacity hover:opacity-90" style={{ background: ACCENT }}>
                  Reserver un appel
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                </Link>
                <Link href="/guide-hubspot-ia" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                  Telecharger le guide PDF
                </Link>
              </div>
            </div>

            {/* Other guides */}
            <div className="mt-10">
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-3">Autres guides</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Link href="/guide-hubspot-ultime" className="rounded-xl border border-[#F2F2F2] bg-white p-3 hover:border-[#E5E5E5] transition-colors">
                  <p className="text-[12px] font-semibold text-[#111] mb-1">Le Guide HubSpot Ultime</p>
                  <p className="text-[11px] text-[#777]">80 pages, tout HubSpot</p>
                </Link>
                <Link href="/guide-mcp-revops" className="rounded-xl border border-[#F2F2F2] bg-white p-3 hover:border-[#E5E5E5] transition-colors">
                  <p className="text-[12px] font-semibold text-[#111] mb-1">Le Guide MCP pour le RevOps</p>
                  <p className="text-[11px] text-[#777]">65 pages, MCP cross-stack</p>
                </Link>
                <Link href="/guide-claude-marketing" className="rounded-xl border border-[#F2F2F2] bg-white p-3 hover:border-[#E5E5E5] transition-colors">
                  <p className="text-[12px] font-semibold text-[#111] mb-1">Guide Claude &amp; Claude Code</p>
                  <p className="text-[11px] text-[#777]">55 pages, Claude pour B2B</p>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
