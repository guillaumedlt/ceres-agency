import Connector from "@/components/marketing/Connector";
import type { Metadata } from "next";
import Badge from "@/components/marketing/Badge";

export const metadata: Metadata = {
  title: "Agence Attio — Setup, Migration & Optimisation CRM | Ceres",
  description: "Agence Attio en France. Configuration, migration, personnalisation et optimisation du CRM AI-native pour startups et scale-ups B2B. Partenaire officiel.",
  keywords: ["agence attio","attio crm","attio france","attio vs hubspot","crm startup","crm ia","attio migration","attio configuration","attio integration","crm moderne","crm ai-native","alternative hubspot","alternative salesforce","attio partenaire"],
};

const whyAttio = [
  { title: "CRM AI-native", desc: "Attio est construit autour de l\u2019IA depuis le premier jour. Enrichissement automatique, scoring, r\u00e9sum\u00e9s de calls, recherche de prospects. L\u2019IA n\u2019est pas un add-on, c\u2019est le coeur du produit.", color: "#111" },
  { title: "UX moderne", desc: "L\u2019interface la plus fluide du march\u00e9. Comparable \u00e0 Notion ou Linear. Vos \u00e9quipes l\u2019adoptent en quelques heures, pas en quelques mois.", color: "#4B5EFC" },
  { title: "Objets custom illimit\u00e9s", desc: "Deals, partenariats, investisseurs, \u00e9v\u00e9nements. Cr\u00e9ez n\u2019importe quel objet en quelques clics. Le CRM s\u2019adapte \u00e0 vos process, pas l\u2019inverse.", color: "#6C5CE7" },
  { title: "API-first", desc: "API REST moderne, bien document\u00e9e, avec webhooks et SDK. Int\u00e9grez Attio dans votre stack en quelques heures, pas en quelques semaines.", color: "#22C55E" },
  { title: "3-5x moins cher", desc: "\u00c0 partir de 0\u20ac pour 3 users. Plans Pro \u00e0 environ 86\u20ac/user/mois. Le co\u00fbt total est 3 \u00e0 5 fois inf\u00e9rieur \u00e0 HubSpot ou Salesforce.", color: "#FF7A59" },
  { title: "Setup en jours, pas en mois", desc: "Configuration compl\u00e8te en 1 \u00e0 4 semaines contre 4 \u00e0 12 semaines pour HubSpot. Premier pipeline fonctionnel en moins d\u2019une journ\u00e9e.", color: "#D4A27F" },
];

const aiFeatures = [
  { title: "Enrichissement automatique", desc: "Attio enrichit automatiquement vos fiches contacts et entreprises d\u00e8s la connexion email : poste, taille entreprise, secteur, levée de fonds, profils sociaux. Pas de credits \u00e0 acheter.", color: "#4B5EFC" },
  { title: "Call Intelligence", desc: "Enregistrement, transcription et analyse des appels en temps r\u00e9el. D\u00e9tection automatique des signaux d\u2019achat, des blockers et des next steps pendant le call.", color: "#22C55E" },
  { title: "Research Agent", desc: "Un agent IA qui r\u00e9alise des recherches approfondies sur vos prospects : analyse concurrentielle, identification des d\u00e9cisionnaires, qualification, scoring contextuel.", color: "#6D00CC" },
  { title: "Ask Attio", desc: "Interface en langage naturel pour interroger votre CRM. \u00abMontre-moi les deals de plus de 50K\u20ac stagn\u00e9s depuis 30 jours\u00bb. Pas de filtre complexe \u00e0 configurer.", color: "#FF7A59" },
  { title: "AI Attributes", desc: "Cr\u00e9ez des champs qui se remplissent automatiquement par l\u2019IA. R\u00e9sum\u00e9 d\u2019une conversation, cat\u00e9gorisation, extraction d\u2019information. L\u2019IA transforme vos donn\u00e9es non structur\u00e9es en donn\u00e9es exploit\u00e0bles.", color: "#6C5CE7" },
  { title: "Relationship Intelligence", desc: "Attio analyse automatiquement vos emails et calendrier pour cartographier vos relations. Qui parle \u00e0 qui, depuis quand, avec quelle fr\u00e9quence. Aucune saisie manuelle.", color: "#D4A27F" },
];

const vsHubspot = [
  { criteria: "Setup", attio: "1-4 semaines", hubspot: "4-12 semaines", winner: "attio" },
  { criteria: "Prix (10 users)", attio: "290-860\u20ac/mois", hubspot: "900-1 790\u20ac/mois", winner: "attio" },
  { criteria: "UX / Adoption", attio: "Excellent", hubspot: "Bon", winner: "attio" },
  { criteria: "Objets custom", attio: "Illimit\u00e9s", hubspot: "Limit\u00e9s (Enterprise)", winner: "attio" },
  { criteria: "IA native", attio: "Coeur du produit", hubspot: "Add-on (Breeze)", winner: "attio" },
  { criteria: "API", attio: "Moderne, REST", hubspot: "Compl\u00e8te, REST", winner: "draw" },
  { criteria: "Marketing automation", attio: "Basique", hubspot: "Excellent", winner: "hubspot" },
  { criteria: "Int\u00e9grations natives", attio: "~50", hubspot: "1 500+", winner: "hubspot" },
  { criteria: "Support FR", attio: "Anglais uniquement", hubspot: "Fran\u00e7ais", winner: "hubspot" },
  { criteria: "Ecosystem / communaut\u00e9", attio: "En croissance", hubspot: "Tr\u00e8s mature", winner: "hubspot" },
];

const interventions = [
  { title: "Setup from scratch", desc: "On configure Attio selon vos process m\u00e9tier. Pipeline, objets custom, attributs IA, int\u00e9grations.", items: ["Cadrage process avec vos \u00e9quipes","Configuration pipeline et objets custom","Attributs IA et automatisations","Int\u00e9grations stack (Slack, Make, email)","Formation \u00e9quipes"], color: "#111", duration: "1-2 sem" },
  { title: "Migration depuis un autre CRM", desc: "Vous quittez HubSpot, Salesforce ou Pipedrive. On migre tout vers Attio.", items: ["Audit donn\u00e9es existantes","Mapping objets et propri\u00e9t\u00e9s","Migration contacts, entreprises, deals","Reconstruction des automatisations","P\u00e9riode de double-run"], color: "#4B5EFC", duration: "2-4 sem" },
  { title: "Int\u00e9grations custom", desc: "Attio connect\u00e9 \u00e0 votre stack via API, Make, ou d\u00e9veloppement custom.", items: ["Architecture int\u00e9grations","Connecteurs API sur-mesure","Workflows Make / n8n","Webhooks et syncs","Documentation technique"], color: "#6C5CE7", duration: "1-3 sem" },
  { title: "Optimisation et accompagnement", desc: "Votre Attio est d\u00e9j\u00e0 en place mais sous-exploit\u00e9. On optimise.", items: ["Audit de l\u2019instance","Configuration des attributs IA","Nouveaux objets et vues","Dashboards et reporting","Support continu"], color: "#22C55E", duration: "Mensuel" },
];

const forWho = [
  { segment: "Startups (5-50)", desc: "Vous cherchez un CRM moderne qui s\u2019adapte \u00e0 vos process sans vous forcer dans un moule. Attio est fait pour vous.", color: "#22C55E", href: "/revops-startup" },
  { segment: "Scale-ups tech", desc: "Vous grandissez vite et votre CRM doit suivre. Les objets custom et l\u2019API d\u2019Attio scalent avec vous.", color: "#6C5CE7", href: "/revops-scaleup" },
  { segment: "Equipes PLG", desc: "Product-Led Growth et donn\u00e9es produit dans le CRM. Attio int\u00e8gre nativement les donn\u00e9es d\u2019usage.", color: "#4B5EFC", href: "" },
  { segment: "Fonds et VCs", desc: "Attio est utilis\u00e9 par Seedcamp, Union Square Ventures. Pipeline deals, suivi portfolio, relationship mapping.", color: "#D4A27F", href: "" },
];

const clients = [
  { name: "Flatfile", desc: "Data migration, $94.8M Series B" },
  { name: "Modal", desc: "AI/ML platform, $23M Series A" },
  { name: "Replicate", desc: "AI platform" },
  { name: "Granola", desc: "Meeting intelligence" },
  { name: "Customer.io", desc: "Marketing automation" },
  { name: "Railway", desc: "PLG cloud platform" },
  { name: "Snackpass", desc: "SaaS, $95.6M Series B" },
  { name: "Conduit", desc: "Web3, $44M Series A" },
];

const faqItems = [
  { q: "Vous \u00eates partenaire officiel Attio ?", a: "Oui. On travaille avec Attio depuis 2024. On conna\u00eet la plateforme en profondeur, de la configuration des objets custom aux int\u00e9grations API avanc\u00e9es." },
  { q: "Attio peut remplacer HubSpot ?", a: "Pour le CRM et la gestion commerciale, oui. Si vous avez besoin de marketing automation avanc\u00e9e (workflows, landing pages, nurturing), HubSpot reste sup\u00e9rieur. On peut aussi connecter Attio + un outil marketing d\u00e9di\u00e9." },
  { q: "Combien co\u00fbte une impl\u00e9mentation Attio ?", a: "Au forfait, apr\u00e8s cadrage. Un setup complet se fait en 1-2 semaines, ce qui rend le co\u00fbt nettement inf\u00e9rieur \u00e0 une impl\u00e9mentation HubSpot ou Salesforce. L\u2019appel de cadrage est gratuit." },
  { q: "On peut migrer de Salesforce vers Attio ?", a: "Oui. On g\u00e8re le mapping des objets, la migration des donn\u00e9es et la reconstruction des automatisations. P\u00e9riode de double-run incluse." },
  { q: "Est-ce qu\u2019Attio est assez mature pour une entreprise de 100+ personnes ?", a: "Attio grandit vite (5 000+ clients, $116M lev\u00e9s) mais il est encore principalement adapt\u00e9 aux \u00e9quipes de 5 \u00e0 50 personnes. Au-del\u00e0 de 50 users avec des besoins marketing et service avanc\u00e9s, HubSpot est souvent plus adapt\u00e9." },
  { q: "Et les int\u00e9grations avec notre stack ?", a: "Attio s\u2019int\u00e8gre nativement avec Gmail, Outlook, Slack, Zapier et Make. Pour les int\u00e9grations plus pouss\u00e9es, on utilise l\u2019API REST ou des connecteurs custom." },
  { q: "Attio fonctionne en fran\u00e7ais ?", a: "L\u2019interface est en anglais uniquement. Pour les \u00e9quipes francophones habitu\u00e9es aux outils tech (Notion, Linear, Slack), ce n\u2019est g\u00e9n\u00e9ralement pas un frein." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Agence Attio", provider: { "@type": "Organization", name: "Ceres" }, description: "Agence Attio en France. Configuration, migration et optimisation du CRM AI-native pour startups et scale-ups B2B.", serviceType: "Attio CRM Consulting" },
  { "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
]};

export default function AgenceAttioPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "15%", width: 340, height: 340, borderRadius: "50%", background: "#111", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "50%", width: 320, height: 320, borderRadius: "50%", background: "#6C5CE7", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "65%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "80%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Hero */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Service</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">Agence Attio</h1>
          <p className="text-[17px] text-[#666] max-w-[540px] mx-auto leading-[1.7] mb-4">On configure, migre et optimise votre Attio. Le CRM AI-native construit pour les equipes GTM modernes.</p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.google.com/s2/favicons?domain=attio.com&sz=64" alt="Attio" width={22} height={22} className="rounded-sm" />
            <span className="text-[13px] text-[#999]">Partenaire Attio &middot; CRM AI-native &middot; $116M leves</span>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#E5E5E5] bg-white text-[13px] text-[#111] font-medium hover:border-[#CCC] hover:shadow-sm transition-all">
            <span className="w-2 h-2 rounded-sm bg-[#111]" />Discuter de mon projet
          </a>
        </section>
        <Connector />

        {/* What is Attio */}
        <section className="mb-0">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Attio en bref</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Le CRM de la nouvelle generation</h2>
              <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                <p>Attio est un CRM AI-native fonde par d&apos;anciens membres de Stripe et Intercom. Lance en 2023, il a deja convaincu plus de 5 000 entreprises, leve $116M (dont $52M en Series B menes par Google Ventures) et affiche une croissance ARR de 4x.</p>
                <p>Sa philosophie : un CRM qui s&apos;adapte a vos process, pas l&apos;inverse. Objets custom illimites, IA integree dans chaque couche, interface comparable a Notion ou Linear. C&apos;est le CRM que les equipes tech adoptent spontanement.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "5 000+", desc: "Clients dans le monde", color: "#111" },
                { label: "$116M", desc: "Leves (Series B)", color: "#4B5EFC" },
                { label: "4x", desc: "Croissance ARR", color: "#22C55E" },
                { label: "4.7/5", desc: "Note G2", color: "#FF7A59" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-[#F2F2F2] p-3 text-center">
                  <p className="text-[20px] font-bold" style={{ color: stat.color }}>{stat.label}</p>
                  <p className="text-[10px] text-[#999] mt-0.5">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Why Attio */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pourquoi Attio</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">6 raisons de choisir Attio</h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">Un CRM moderne, flexible et AI-first pour les equipes qui bougent vite.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyAttio.map((item) => (
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

        {/* AI Features */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">IA native</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">L&apos;IA au coeur du CRM</h2>
              <p className="text-[13px] text-white/40">Attio ne rajoute pas l&apos;IA par-dessus. Elle est dans chaque couche du produit.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aiFeatures.map((feature) => (
                <div key={feature.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: feature.color }} />
                    <h3 className="text-[14px] font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.65]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Attio vs HubSpot */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="text-center mb-8">
              <div className="mb-4"><Badge>Comparatif</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Attio vs HubSpot : le comparatif honnete</h2>
              <p className="text-[13px] text-[#999] mt-2">On deploie les deux. Voici notre avis objectif.</p>
            </div>
            <div className="rounded-xl border border-[#F2F2F2] overflow-hidden">
              <div className="grid grid-cols-4 bg-[#FAFAFA] border-b border-[#F2F2F2]">
                <div className="p-3 text-[10px] font-semibold text-[#999] uppercase">Critere</div>
                <div className="p-3 text-[10px] font-semibold text-[#999] uppercase flex items-center gap-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.google.com/s2/favicons?domain=attio.com&sz=32" alt="Attio" className="w-3 h-3" />Attio
                </div>
                <div className="p-3 text-[10px] font-semibold text-[#999] uppercase flex items-center gap-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=32" alt="HubSpot" className="w-3 h-3" />HubSpot
                </div>
                <div className="p-3 text-[10px] font-semibold text-[#999] uppercase">Avantage</div>
              </div>
              {vsHubspot.map((row) => (
                <div key={row.criteria} className="grid grid-cols-4 border-b border-[#F2F2F2] last:border-0">
                  <div className="p-3 text-[12px] font-medium text-[#111]">{row.criteria}</div>
                  <div className={`p-3 text-[12px] ${row.winner === "attio" ? "text-[#111] font-semibold" : "text-[#999]"}`}>{row.attio}</div>
                  <div className={`p-3 text-[12px] ${row.winner === "hubspot" ? "text-[#111] font-semibold" : "text-[#999]"}`}>{row.hubspot}</div>
                  <div className="p-3">
                    {row.winner === "attio" && <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#111] text-white font-medium">Attio</span>}
                    {row.winner === "hubspot" && <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FF7A59] text-white font-medium">HubSpot</span>}
                    {row.winner === "draw" && <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F2F2F2] text-[#999] font-medium">Egal</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2] p-4">
              <p className="text-[12px] font-semibold text-[#111] mb-2">Notre recommandation</p>
              <p className="text-[12px] text-[#777] leading-[1.65]">Attio est ideal pour les startups et scale-ups tech de 5 a 50 personnes qui veulent un CRM moderne, flexible et rapide a deployer. Au-dela de 50 personnes ou si vous avez besoin de marketing automation avancee, HubSpot reste le meilleur choix. On accompagne les deux, on choisit avec vous.</p>
            </div>
          </div>
        </section>
        <Connector />

        {/* For who */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pour qui</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Attio est fait pour vous si</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {forWho.map((item) => (
              <div key={item.segment} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{item.segment}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* They use Attio */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="text-center mb-6">
              <div className="mb-4"><Badge>Clients Attio</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Ils utilisent Attio</h2>
              <p className="text-[13px] text-[#999] mt-2">Les startups les plus ambitieuses construisent leur GTM sur Attio.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {clients.map((c) => (
                <div key={c.name} className="rounded-xl border border-[#F2F2F2] p-3 text-center">
                  <p className="text-[13px] font-semibold text-[#111]">{c.name}</p>
                  <p className="text-[10px] text-[#999] mt-0.5">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Interventions */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Nos interventions</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Comment on vous accompagne</h2>
              <p className="text-[13px] text-white/40">Du setup initial a l&apos;optimisation continue.</p>
            </div>
            <div className="space-y-3">
              {interventions.map((item) => (
                <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <h3 className="text-[14px] font-semibold text-white">{item.title}</h3>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded" style={{ backgroundColor: item.color + "20", color: item.color === "#111" ? "#999" : item.color }}>{item.duration}</span>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.6] mb-3">{item.desc}</p>
                  <ul className="space-y-1.5">
                    {item.items.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-white/30">
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-white/20"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Pricing */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="text-center mb-8">
              <div className="mb-4"><Badge>Pricing Attio</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Les plans Attio en 2026</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { plan: "Free", price: "0\u20ac", desc: "3 users inclus", features: ["CRM de base","Enrichissement auto","Email & calendrier","Objets custom"], color: "#999", highlight: false },
                { plan: "Plus", price: "~36\u20ac/user/mois", desc: "Collaboration", features: ["Tout Free +","Collaboration avancee","Automatisations de base","Support email"], color: "#4B5EFC", highlight: false },
                { plan: "Pro", price: "~86\u20ac/user/mois", desc: "Le plus populaire", features: ["Tout Plus +","Automatisations avancees","Attributs IA","Support prioritaire"], color: "#111", highlight: true },
                { plan: "Enterprise", price: "Sur devis", desc: "Grandes equipes", features: ["Tout Pro +","SSO SAML","Permissions granulaires","Success manager dedie"], color: "#6C5CE7", highlight: false },
              ].map((p) => (
                <div key={p.plan} className={`rounded-xl p-4 ${p.highlight ? "bg-[#111] text-white border-2 border-[#111]" : "border border-[#F2F2F2]"}`}>
                  <p className={`text-[10px] font-semibold uppercase tracking-wider mb-1 ${p.highlight ? "text-white/40" : "text-[#999]"}`}>{p.plan}</p>
                  <p className={`text-[20px] font-bold mb-0.5 ${p.highlight ? "text-white" : ""}`} style={p.highlight ? {} : { color: p.color }}>{p.price}</p>
                  <p className={`text-[11px] mb-4 ${p.highlight ? "text-white/40" : "text-[#999]"}`}>{p.desc}</p>
                  <ul className="space-y-1.5">
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-center gap-2 text-[11px] ${p.highlight ? "text-white/50" : "text-[#777]"}`}>
                        <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className={`shrink-0 ${p.highlight ? "text-[#22C55E]" : "text-[#CCC]"}`}><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* FAQ */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8"><div className="mb-4"><Badge>FAQ</Badge></div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes</h2></div>
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

        {/* CTA */}
        <section id="contact">
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Un projet Attio ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[420px] mx-auto">Setup, migration ou optimisation. On cadre ca en 30 min.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un appel
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
