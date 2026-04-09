"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const whyCards = [
  { title: "L\u2019IA est la, mais personne ne l\u2019utilise", desc: "Vos equipes ont entendu parler de ChatGPT, Claude, les LLMs. Mais au quotidien, personne n\u2019a change sa facon de travailler. L\u2019outil existe, l\u2019adoption ne suit pas.", color: "#EF4444" },
  { title: "Le copier-coller ne suffit pas", desc: "Copier un texte dans Claude et attendre une reponse, tout le monde sait faire. Mais connecter Claude a votre CRM, automatiser un workflow, creer un agent : ca demande une methode.", color: "#FF7A59" },
  { title: "Chaque metier a ses cas d\u2019usage", desc: "Un commercial n\u2019utilise pas Claude comme un marketeur. Un CSM n\u2019a pas les memes besoins qu\u2019un ops. La formation doit etre specifique au metier, pas generique.", color: "#F59E0B" },
  { title: "Claude Code change la donne", desc: "La plupart des formations IA s\u2019arretent au prompt. Claude Code permet d\u2019aller beaucoup plus loin : lire le CRM, generer des rapports, creer des outils. C\u2019est une competence a part entiere.", color: "#4B5EFC" },
  { title: "Le ROI est immediat", desc: "Des le lendemain de la formation, chaque participant peut gagner 30 min a 2h par jour. Sur une equipe de 10 personnes, c\u2019est l\u2019equivalent d\u2019un ETP en productivite recuperee.", color: "#6D00CC" },
  { title: "L\u2019avantage concurrentiel est temporaire", desc: "Aujourd\u2019hui, savoir utiliser Claude est un avantage. Dans 12 mois, ce sera un prerequis. Les equipes qui se forment maintenant prennent de l\u2019avance.", color: "#22C55E" },
];

const programmes = [
  {
    title: "Formation Sales",
    color: "#6D00CC",
    duration: "0.5 jour",
    audience: "Pour : commerciaux, SDR, AE, managers sales",
    items: [
      "Preparer un call en 2 minutes avec Claude (briefing prospect automatique)",
      "Rediger des emails de prospection personnalises a grande echelle",
      "Generer des propositions commerciales en PDF dans votre charte",
      "Resumer et analyser un call commercial (objections, next steps, sentiment)",
      "Mettre a jour le CRM automatiquement apres chaque interaction",
      "Creer ses propres prompts et templates adaptes a son cycle de vente",
    ],
    livrable: "Chaque commercial repart avec 10+ prompts prouves et 3 workflows prets a utiliser.",
  },
  {
    title: "Formation Marketing",
    color: "#FF7A59",
    duration: "0.5 jour",
    audience: "Pour : responsables marketing, content managers, growth",
    items: [
      "Produire des articles de blog dans votre ton de voix avec Claude",
      "Decliner du contenu par persona, canal et langue",
      "Analyser les performances des campagnes et generer des insights",
      "Creer des sequences email personnalisees a grande echelle",
      "Utiliser Claude Code pour automatiser le reporting marketing",
      "Connecter Claude a vos outils marketing via MCP",
    ],
    livrable: "Chaque participant repart avec sa charte editoriale IA et 5 workflows Make + Claude.",
  },
  {
    title: "Formation Ops & Claude Code",
    color: "#22C55E",
    duration: "1 jour",
    audience: "Pour : ops, managers, fondateurs, equipes techniques",
    items: [
      "Installer et configurer Claude Code",
      "Connecter Claude a votre CRM via MCP (HubSpot, Salesforce)",
      "Creer un agent d\u2019enrichissement automatique",
      "Automatiser le reporting hebdomadaire",
      "Construire des outils internes (calculateurs, dashboards, formulaires)",
      "Deployer et superviser des agents IA en production",
      "Mettre en place la gouvernance et les controles",
    ],
    livrable: "Chaque participant repart avec Claude Code configure, 2 agents en production et la documentation complete.",
  },
];

const deroulement = [
  { title: "Avant : cadrage", desc: "Un appel de 30 minutes pour comprendre votre stack, vos cas d\u2019usage et le niveau de vos equipes. On adapte le programme." },
  { title: "Pendant : 100% pratique", desc: "Pas de slides. On travaille sur vos vrais donnees, vos vrais outils, vos vrais cas d\u2019usage. Chaque participant construit ses propres prompts et workflows." },
  { title: "Apres : documentation", desc: "PDF complet avec tous les prompts, workflows et configurations. Video Loom de recap. Channel Slack pendant 2 semaines pour les questions." },
  { title: "Format", desc: "En presentiel (Paris) ou a distance (Zoom). De 2 a 15 participants. Inter-entreprise ou intra-entreprise." },
];

const beforeAfter = [
  { label: "Temps de preparation d\u2019un call", before: "15 min", after: "2 min" },
  { label: "Redaction d\u2019un email personnalise", before: "10 min", after: "45 sec" },
  { label: "Generation d\u2019une proposition PDF", before: "3h", after: "30 min" },
  { label: "Reporting hebdomadaire", before: "3h", after: "automatique" },
  { label: "Recherche prospect", before: "30 min", after: "30 sec" },
];

const faqItems = [
  { q: "A qui s\u2019adresse la formation ?", a: "A toute equipe B2B qui veut utiliser Claude dans son quotidien. Sales, marketing, CS, ops, direction. Pas besoin de competences techniques." },
  { q: "Il faut des prerequis techniques ?", a: "Non pour les formations Sales et Marketing. Pour la formation Ops & Claude Code, une familiarite avec les outils SaaS (CRM, Make, etc.) est un plus mais pas obligatoire." },
  { q: "C\u2019est en presentiel ou a distance ?", a: "Les deux. Presentiel a Paris ou dans vos locaux. A distance en visio. Meme programme, meme qualite." },
  { q: "Combien de participants max ?", a: "15 par session. Au-dela, on dedouble. L\u2019important c\u2019est que chaque participant ait le temps de pratiquer sur ses propres cas." },
  { q: "On travaille sur nos vrais donnees ?", a: "Oui. C\u2019est le principe. On se connecte a votre CRM, on utilise vos vrais contacts, vos vrais deals. C\u2019est comme ca que les prompts et workflows sont directement utilisables le lendemain." },
  { q: "Quel est le prix ?", a: "Formation Sales ou Marketing (0.5 jour) : a partir de 1 500 EUR HT. Formation Ops & Claude Code (1 jour) : a partir de 2 500 EUR HT. Tarif degressif pour plusieurs sessions." },
  { q: "Qu\u2019est-ce qu\u2019on recoit apres ?", a: "PDF avec tous les prompts et workflows, video Loom de recap, acces a un channel Slack pendant 2 semaines pour poser des questions, support par email pendant 1 mois." },
  { q: "Peut-on combiner formation + deploiement ?", a: "Oui. Beaucoup de clients commencent par la formation pour monter en competence, puis enchainent avec un deploiement d\u2019agents IA. La formation devient le kickoff du projet." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Formation Claude et Claude Code pour equipes B2B",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Formation pratique Claude et Claude Code pour les equipes marketing, sales et CS. Prompts, workflows, MCP, agents. 0.5 a 1 jour. A partir de 1 500 EUR HT.",
      serviceType: "Training",
      areaServed: "FR",
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

export default function FormationClaudePage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="mb-8 text-[12px] text-[#999]" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link></li>
            <li>/</li>
            <li className="text-[#111] font-medium">Formation Claude</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Formation</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Formation Claude et Claude Code pour equipes B2B
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Pas de theorie generique sur l&apos;IA. Une formation pratique, appliquee a votre metier, avec des cas d&apos;usage que vous utilisez des le lendemain. Chaque participant repart avec ses propres prompts, workflows et agents configures.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            De 0.5 jour a 1 jour selon le programme. En presentiel ou a distance. Pour les equipes marketing, sales, CS et ops.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#D4A27F] tracking-[-0.02em]">3</div>
              <p className="text-[11px] text-[#999]">programmes adaptes</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">0.5-1</div>
              <p className="text-[11px] text-[#999]">jour</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">100%</div>
              <p className="text-[11px] text-[#999]">pratique</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Reserver une formation
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Pourquoi former les equipes a Claude ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Le constat</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Pourquoi former les equipes a Claude</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyCards.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{item.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 3. Les 3 programmes ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Programmes</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Un programme par metier</h2>
            </div>
            <div className="space-y-4">
              {programmes.map((prog) => (
                <div key={prog.title} className="rounded-xl bg-white/5 border border-white/10 p-6" style={{ borderLeftWidth: 3, borderLeftColor: prog.color }}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[16px] font-semibold text-white">{prog.title}</h3>
                    <span className="text-[12px] font-medium text-white/40">{prog.duration}</span>
                  </div>
                  <p className="text-[12px] text-white/40 mb-4">{prog.audience}</p>
                  <ul className="space-y-2 mb-4">
                    {prog.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12px] text-white/60">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5" style={{ color: prog.color }}><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-lg bg-white/5 border border-white/10 p-3">
                    <p className="text-[12px] text-white/50 leading-[1.6]">{prog.livrable}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 4. Comment ca se passe ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Format</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Le deroulement</h2>
          </div>
          <div className="space-y-3">
            {deroulement.map((item, i) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#FAFAFA] border border-[#E8E8E8] flex items-center justify-center text-[12px] font-bold text-[#999] shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#111] mb-1">{item.title}</h3>
                    <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 5. Ce qui change apres la formation ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Resultats</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">L&apos;impact mesure chez nos clients</h2>
          </div>
          <div className="space-y-3 mb-6">
            {beforeAfter.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[13px] font-semibold text-[#111]">{item.label}</h3>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-[16px] font-bold text-[#EF4444]">{item.before}</div>
                      <p className="text-[10px] text-[#999]">Avant</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#999]"><path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div>
                      <div className="text-[16px] font-bold text-[#22C55E]">{item.after}</div>
                      <p className="text-[10px] text-[#999]">Apres</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-8">
            <p className="text-[13px] text-[#555] leading-[1.75] text-center max-w-[600px] mx-auto">
              La formation ne cree pas de dependance. Elle cree de l&apos;autonomie. L&apos;objectif est que vos equipes maitrisent Claude dans leur quotidien sans avoir besoin de nous.
            </p>
          </div>
        </section>
        <Connector />

        {/* ───── 6. Et apres la formation ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>La suite</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Et apres la formation</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/agents-ia" className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3 h-3 rounded-sm bg-[#6D00CC]" />
                <h3 className="text-[14px] font-semibold text-[#111]">Deploiement IA</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Si vous voulez aller plus loin : on deploie des agents IA connectes a votre CRM, silo par silo.</p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5EFC]">
                Decouvrir les agents IA
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
            <Link href="/revops-part-time" className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3 h-3 rounded-sm bg-[#4B5EFC]" />
                <h3 className="text-[14px] font-semibold text-[#111]">Accompagnement continu</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Un expert RevOps & IA integre a votre equipe chaque mois pour iterer et ajouter des briques.</p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5EFC]">
                Decouvrir le RevOps Part-Time
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
          </div>
        </section>
        <Connector />

        {/* ───── 7. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur la formation Claude</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
              {faqItems.map((f, i) => (
                <div key={i} className="border-b border-[#F2F2F2] py-4">
                  <h3 className="text-[13px] font-semibold text-[#111] mb-1.5">{f.q}</h3>
                  <p className="text-[12px] text-[#777] leading-[1.6]">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 8. CTA ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a former vos equipes a Claude ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On cadre le programme en 30 minutes. Devis au forfait sous 48h.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Reserver une formation
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
