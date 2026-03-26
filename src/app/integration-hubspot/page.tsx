"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const whyIntegrate = [
  { title: "Eliminer la double saisie", desc: "Vos commerciaux perdent 5 heures par semaine a copier des donnees d\u2019un outil a l\u2019autre. Une integration HubSpot correcte elimine 100% de la saisie manuelle entre vos systemes.", color: "#FF7A59" },
  { title: "Avoir une source unique de verite", desc: "Quand chaque outil a sa propre version des donnees, personne ne fait confiance aux chiffres. Integrer HubSpot avec votre stack cree une single source of truth pour toutes vos equipes.", color: "#4B5EFC" },
  { title: "Automatiser les workflows cross-outils", desc: "Un lead qualifie dans Clay doit arriver dans HubSpot, declencher une sequence Lemlist et notifier le commercial sur Slack. Sans integration, c\u2019est du manuel. Avec, c\u2019est instantane.", color: "#6D00CC" },
  { title: "Enrichir automatiquement vos donnees", desc: "Les donnees de vos contacts et entreprises s\u2019enrichissent automatiquement via Clay, Clearbit, Apollo ou LinkedIn. Plus besoin de rechercher manuellement les informations manquantes.", color: "#22C55E" },
  { title: "Mesurer l\u2019attribution de bout en bout", desc: "Du premier clic publicitaire au deal signe, en passant par chaque interaction. L\u2019integration HubSpot avec vos outils marketing permet une attribution multi-touch reelle.", color: "#6C5CE7" },
  { title: "Scaler sans ajouter de ressources", desc: "Les integrations permettent de gerer 10x plus de volume avec la meme equipe. Ce qui prenait une personne a temps plein se fait desormais en zero clic.", color: "#D4A27F" },
];

const popularIntegrations = [
  { name: "Salesforce", desc: "Sync bi-directionnelle contacts, entreprises, deals. Salesforce pour Sales, HubSpot pour Marketing. Les deux CRM cohabitent sans conflit.", favicon: "salesforce.com", color: "#00A1E0" },
  { name: "Slack", desc: "Notifications de deals, alertes de qualification, rapports automatises dans vos channels. Chaque equipe recoit l\u2019info pertinente au bon moment.", favicon: "slack.com", color: "#4A154B" },
  { name: "Make (ex-Integromat)", desc: "L\u2019iPaaS le plus puissant pour des scenarios complexes. Multi-etapes, conditions, boucles, gestion d\u2019erreurs. Notre outil de reference pour connecter HubSpot.", favicon: "make.com", color: "#6D00CC" },
  { name: "Lemlist", desc: "Sequences outbound synchronisees avec HubSpot. Les reponses remontent dans le CRM, les contacts sont tagges automatiquement, le pipeline se remplit tout seul.", favicon: "lemlist.com", color: "#4B5EFC" },
  { name: "Claap", desc: "Les resumes de calls video atterrissent directement dans la fiche contact HubSpot. Chaque reunion est tracee, analysee et exploitable par toute l\u2019equipe.", favicon: "claap.io", color: "#FF7A59" },
  { name: "Clay", desc: "Enrichissement massif de contacts et entreprises. Clay pousse les donnees enrichies directement dans HubSpot : technos, funding, decision makers, signaux d\u2019achat.", favicon: "clay.com", color: "#22C55E" },
  { name: "ERP (SAP, Sage, Odoo)", desc: "Synchronisation devis, factures, commandes entre HubSpot et votre ERP. Le commerce et la finance parlent le meme langage, sans ressaisie.", favicon: "sap.com", color: "#D4A27F" },
];

const approach = [
  { num: "01", title: "Cartographie de votre stack", desc: "On liste tous vos outils, identifie les flux de donnees existants (manuels ou automatises) et repere les trous. Chaque outil est evalue : garder, remplacer ou connecter.", duration: "Semaine 1", color: "#FF7A59" },
  { num: "02", title: "Architecture des flux", desc: "On dessine l\u2019architecture cible : quelles donnees transitent entre quels outils, dans quel sens, a quelle frequence, avec quelles regles de gestion. Tout est documente.", duration: "Semaine 1-2", color: "#4B5EFC" },
  { num: "03", title: "Deploiement des integrations", desc: "On configure chaque integration : API native, connecteur Make/Zapier, webhook ou developpement custom. Chaque flux est teste avec des donnees reelles avant mise en production.", duration: "Semaine 2-4", color: "#6C5CE7" },
  { num: "04", title: "Tests et monitoring", desc: "Chaque integration est testee en conditions reelles. On met en place des alertes en cas d\u2019erreur, des logs pour le suivi et une documentation pour votre equipe.", duration: "Semaine 4-5", color: "#22C55E" },
  { num: "05", title: "Formation et documentation", desc: "Vos equipes comprennent comment les integrations fonctionnent, comment les monitorer et qui contacter en cas de probleme. Documentation complete livree.", duration: "Semaine 5-6", color: "#D4A27F" },
];

const casClients = [
  {
    name: "Edenred",
    desc: "Integration HubSpot-Salesforce bi-directionnelle pour aligner Marketing (HubSpot) et Sales (Salesforce). Les MQL generes dans HubSpot sont pousses automatiquement dans Salesforce avec tout le contexte marketing.",
    metrics: [
      { label: "Contacts synchronises", value: "120K+" },
      { label: "Temps de handoff", value: "-95%" },
      { label: "Attribution", value: "100%" },
    ],
    color: "#FF7A59",
    link: "/cas-clients/edenred",
  },
  {
    name: "Beedeez",
    desc: "Deploiement d\u2019un serveur MCP connectant Claude a HubSpot. Les agents IA accedent directement au CRM pour qualifier les leads, enrichir les fiches et generer des resumes de deals automatiquement.",
    metrics: [
      { label: "Fiches enrichies / jour", value: "200+" },
      { label: "Temps qualification", value: "-80%" },
      { label: "Precision scoring", value: "92%" },
    ],
    color: "#6D00CC",
    link: "/cas-clients/beedeez",
  },
];

const ipaasComparison = [
  { criteria: "Complexite des scenarios", make: "Avance (boucles, conditions, sous-scenarios)", zapier: "Basique a moyen", n8n: "Avance (self-hosted)" },
  { criteria: "Prix", make: "Moderee (a l\u2019operation)", zapier: "Eleve (au zap)", n8n: "Gratuit (self-hosted) ou cloud" },
  { criteria: "Connecteurs HubSpot", make: "Complet (tous les objets)", zapier: "Complet", n8n: "Partiel (communaute)" },
  { criteria: "Gestion d\u2019erreurs", make: "Excellente (retry, fallback)", zapier: "Basique", n8n: "Bonne (configurable)" },
  { criteria: "Courbe d\u2019apprentissage", make: "Moderee", zapier: "Facile", n8n: "Technique" },
  { criteria: "Notre recommandation", make: "Premier choix", zapier: "Pour les cas simples", n8n: "Pour les equipes tech" },
];

const faqItems = [
  { q: "Combien d\u2019integrations HubSpot peut-on mettre en place ?", a: "Il n\u2019y a pas de limite. HubSpot propose 1 500+ integrations natives et son API est ouverte. Avec Make ou des webhooks, vous pouvez connecter n\u2019importe quel outil. La question n\u2019est pas combien mais lesquelles sont prioritaires pour votre business." },
  { q: "Quelle est la difference entre une integration native et une integration via Make ?", a: "Une integration native est un connecteur pre-construit dans la marketplace HubSpot. C\u2019est simple a activer mais souvent limite en personnalisation. Une integration via Make permet des scenarios complexes avec des conditions, des transformations de donnees et des multi-etapes. On utilise Make quand le natif ne suffit pas." },
  { q: "Peut-on connecter HubSpot a notre ERP ?", a: "Oui. On connecte regulierement HubSpot avec SAP, Sage, Odoo, NetSuite et d\u2019autres ERP. La sync couvre generalement les devis, factures, commandes et fiches clients. L\u2019approche depend de l\u2019ERP : API directe, connecteur Make ou middleware custom." },
  { q: "Combien coute une integration HubSpot ?", a: "Ca depend de la complexite. Une integration simple (Slack, Lemlist) prend 2-3 heures. Une integration complexe (Salesforce bi-directionnelle, ERP) peut prendre 2-4 semaines. On cadre le budget lors de l\u2019appel gratuit de 30 minutes." },
  { q: "Que se passe-t-il si une integration tombe en panne ?", a: "On met en place des alertes automatiques (email, Slack) en cas d\u2019erreur. Les scenarios Make incluent des mecanismes de retry et de fallback. Pour les integrations critiques, on configure un monitoring continu avec notifications en temps reel." },
  { q: "On peut integrer l\u2019IA avec HubSpot ?", a: "Oui, c\u2019est meme notre specialite. On deploie des serveurs MCP qui connectent Claude directement a HubSpot. Les agents IA lisent et ecrivent dans votre CRM : qualification, enrichissement, scoring, resume de deals. C\u2019est la prochaine generation d\u2019integration." },
  { q: "Make ou Zapier pour HubSpot ?", a: "Make dans 90% des cas. Plus puissant, moins cher a l\u2019echelle, meilleure gestion d\u2019erreurs. Zapier est pertinent pour des cas tres simples ou quand votre equipe l\u2019utilise deja. On detaille la comparaison plus haut dans la page." },
  { q: "Nos donnees sont-elles securisees ?", a: "Oui. Toutes les integrations utilisent des connexions chiffrees (HTTPS, OAuth 2.0). Les donnees transitent sans etre stockees dans les outils intermediaires. On respecte les normes RGPD et on documente chaque flux de donnees." },
  { q: "Combien de temps pour mettre en place une integration HubSpot-Salesforce ?", a: "Entre 3 et 6 semaines pour une sync bi-directionnelle complete. Ca inclut le mapping des objets, la configuration des regles de sync, la deduplication, les tests et la documentation. C\u2019est notre integration la plus demandee." },
  { q: "On peut garder nos outils actuels ?", a: "Oui, c\u2019est justement l\u2019objectif. L\u2019integration HubSpot ne remplace pas vos outils, elle les connecte. Chaque equipe garde ses outils preferes, mais les donnees circulent automatiquement entre tous les systemes." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Integration HubSpot",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Integration HubSpot avec Salesforce, Slack, Make, Lemlist, Clay, ERP. API, iPaaS, webhooks. Connectez tous vos outils a votre CRM.",
      serviceType: "CRM Integration",
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

export default function IntegrationHubSpotPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="mb-8 text-[12px] text-[#999]" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/agence-hubspot" className="hover:text-[#111] transition-colors">Agence HubSpot</Link></li>
            <li>/</li>
            <li className="text-[#111] font-medium">Integration</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Integration</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Integration HubSpot : connectez vos outils a votre CRM
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Salesforce, Slack, Make, Lemlist, Clay, ERP. On connecte HubSpot a l&apos;ensemble de votre stack pour que vos donnees circulent automatiquement entre tous vos outils.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            L&apos;integration HubSpot est la cle d&apos;un CRM qui fonctionne vraiment. Sans connecter vos outils, HubSpot n&apos;est qu&apos;un silo de plus. Avec les bonnes integrations, c&apos;est le centre nevralgique de vos operations.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">500+</div>
              <p className="text-[11px] text-[#999]">integrations deployees</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">0</div>
              <p className="text-[11px] text-[#999]">saisie manuelle</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">100%</div>
              <p className="text-[11px] text-[#999]">donnees synchronisees</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Connecter mes outils
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Pourquoi integrer ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pourquoi</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Pourquoi integrer HubSpot avec vos outils</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Un CRM isole est un CRM sous-exploite. Voici ce que l&apos;integration HubSpot change concretement dans vos operations quotidiennes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyIntegrate.map((item) => (
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

        {/* ───── 3. Integrations populaires ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Les incontournables</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Les integrations HubSpot les plus demandees</h2>
              <p className="text-[13px] text-white/40">On deploie ces integrations chaque semaine. Voici les plus populaires et ce qu&apos;elles changent.</p>
            </div>
            <div className="space-y-3">
              {popularIntegrations.map((integ) => (
                <div key={integ.name} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://www.google.com/s2/favicons?domain=${integ.favicon}&sz=64`} alt={integ.name} width={20} height={20} className="rounded-sm" />
                    <h3 className="text-[14px] font-semibold text-white">{integ.name}</h3>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.65]">{integ.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 4. Notre approche ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Methodologie</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Notre approche pour integrer HubSpot</h2>
              <p className="text-[13px] text-[#999] mt-2">Pas de connecteur pose a la va-vite. Chaque integration est pensee, documentee et monitoree.</p>
            </div>
            <div className="space-y-3">
              {approach.map((step) => (
                <div key={step.num} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAFA]">
                  <span className="text-[12px] font-bold px-2.5 py-1 rounded" style={{ backgroundColor: step.color + "15", color: step.color }}>{step.num}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-[13px] font-semibold text-[#111]">{step.title}</h3>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#F0F0F0] text-[#999]">{step.duration}</span>
                    </div>
                    <p className="text-[12px] text-[#777] leading-[1.6]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 5. Cas clients ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Cas clients</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Integrations HubSpot en action</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {casClients.map((c) => (
              <div key={c.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: c.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{c.name}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{c.desc}</p>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="text-center p-2 rounded-lg bg-[#FAFAFA]">
                      <div className="text-[16px] font-bold" style={{ color: c.color }}>{m.value}</div>
                      <p className="text-[10px] text-[#999]">{m.label}</p>
                    </div>
                  ))}
                </div>
                <Link href={c.link} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5EFC] hover:text-[#3B4EEC] transition-colors">
                  Voir le cas client
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 6. Comparatif iPaaS ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>iPaaS</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Make vs Zapier vs n8n : quel outil pour integrer HubSpot ?</h2>
              <p className="text-[13px] text-[#999] mt-2">Les trois plateformes permettent de connecter HubSpot a vos outils. Voici comment choisir.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4 w-[25%]">Critere</th>
                    <th className="text-[12px] font-semibold text-[#6D00CC] pb-3 pr-4 w-[25%]">Make</th>
                    <th className="text-[12px] font-semibold text-[#FF7A59] pb-3 pr-4 w-[25%]">Zapier</th>
                    <th className="text-[12px] font-semibold text-[#22C55E] pb-3 w-[25%]">n8n</th>
                  </tr>
                </thead>
                <tbody>
                  {ipaasComparison.map((row) => (
                    <tr key={row.criteria} className="border-b border-[#F5F5F5]">
                      <td className="text-[12px] font-medium text-[#111] py-3 pr-4">{row.criteria}</td>
                      <td className="text-[11px] text-[#555] py-3 pr-4">{row.make}</td>
                      <td className="text-[11px] text-[#777] py-3 pr-4">{row.zapier}</td>
                      <td className="text-[11px] text-[#777] py-3">{row.n8n}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-[#999] leading-[1.6] mt-6">Notre recommandation par defaut est Make pour sa puissance, son rapport qualite-prix et sa gestion d&apos;erreurs superieure. Pour les cas simples (notification Slack, sync basique), Zapier suffit. Pour les equipes techniques qui veulent du self-hosted, n8n est une excellente option.</p>
          </div>
        </section>
        <Connector />

        {/* ───── 7. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur l&apos;integration HubSpot</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Des outils a connecter a HubSpot ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On cartographie votre stack et on propose les integrations prioritaires en 30 minutes. Appel gratuit.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Connecter mes outils
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
