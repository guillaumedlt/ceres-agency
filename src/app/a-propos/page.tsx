import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://ceres.agency/a-propos#aboutpage",
      name: "A propos de Ceres",
      description: "Ceres est une agence RevOps & IA basee a Paris. On structure, automatise et optimise les operations commerciales des entreprises B2B.",
      url: "https://ceres.agency/a-propos",
      inLanguage: "fr-FR",
      isPartOf: { "@id": "https://ceres.agency/#website" },
      about: { "@id": "https://ceres.agency/#organization" },
      mainEntity: { "@id": "https://ceres.agency/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" },
        { "@type": "ListItem", position: 2, name: "A propos", item: "https://ceres.agency/a-propos" },
      ],
    },
  ],
};

const team = [
  { name: "Guillaume Delachet", role: "Co-fondateur", initials: "GD", desc: "Ex-Growth chez des scale-ups B2B. Expert HubSpot, Clay et Claude. Obsede par l\u2019alignement marketing-sales et les systemes qui scalent.", linkedin: "https://www.linkedin.com/in/delachetguillaume/" },
  { name: "Simon Toussaint", role: "Co-fondateur", initials: "ST", desc: "Background Sales et Revenue Operations. Specialiste Salesforce et HubSpot. Construit des process commerciaux qui tiennent sous pression.", linkedin: "https://www.linkedin.com/in/simontoussaint/" },
  { name: "Bruno Teixeira", role: "Partner", initials: "BT", desc: "Expert CRM et integrations complexes. A migre plus de 20 CRM dans sa carriere. Les projets TotalEnergies et HiPay, c\u2019est lui.", linkedin: "https://www.linkedin.com/in/brunolt1/" },
  { name: "Stephane Morel", role: "COO", initials: "SM", desc: "Operations et delivery. S\u2019assure que chaque projet est livre dans les temps, dans le budget, avec le niveau de qualite attendu.", linkedin: "https://www.linkedin.com/in/stephane-morel-revops/" },
];

const values = [
  { title: "Resultats, pas de slides", desc: "On ne vend pas des decks PowerPoint. On deploie des systemes qui generent du pipeline et du revenue. Si ca ne marche pas, on corrige. On est juges sur les resultats, pas sur les livrables.", color: "#FF7A59" },
  { title: "Honnetete radicale", desc: "Si votre CRM est un desastre, on vous le dit. Si HubSpot n\u2019est pas le bon choix pour vous, on vous le dit aussi. On prefere perdre un deal que recommander quelque chose qui ne marche pas.", color: "#4B5EFC" },
  { title: "Pragmatisme", desc: "On ne sur-ingenierie pas. La bonne solution, c\u2019est la plus simple qui resout le probleme. 3 workflows bien configures valent mieux que 30 workflows que personne ne comprend.", color: "#22C55E" },
  { title: "Transparence totale", desc: "Slack partage, acces a tout, reporting hebdomadaire. Vous savez exactement ce qu\u2019on fait, combien de temps ca prend et pourquoi. Pas de boite noire.", color: "#6D00CC" },
];

const milestones = [
  { year: "2017", event: "Debut de l\u2019aventure", detail: "Guillaume et Simon commencent a accompagner des startups et scale-ups B2B sur leurs operations commerciales et leur CRM. Les premices de Ceres." },
  { year: "2019", event: "100 premiers clients", detail: "En 2 ans, plus de 100 entreprises accompagnees sur HubSpot, Salesforce et Pipedrive. L\u2019expertise se construit projet apres projet." },
  { year: "2021", event: "Structuration et partenariats", detail: "Partenariat officiel HubSpot. Bruno et Stephane rejoignent l\u2019equipe. Les projets de migration complexes commencent (TotalEnergies, HiPay)." },
  { year: "2023", event: "200+ clients, expansion de l\u2019offre", detail: "L\u2019offre s\u2019elargit : RevOps Part-Time, audits, migrations, tracking marketing. Partenariats Lemlist, Attio, Clay." },
  { year: "2025", event: "Virage IA et agents autonomes", detail: "Integration de Claude et des serveurs MCP dans l\u2019offre. L\u2019IA devient un pilier de l\u2019agence. Deploiement d\u2019agents IA chez Beedeez, Iroko, societes de gestion." },
  { year: "2026", event: "250+ clients, 13 cas clients publies", detail: "Ceres est l\u2019une des agences RevOps & IA les plus actives en France. La preuve par les resultats." },
];

const clients = [
  { name: "Iroko", domain: "iroko.eu" },
  { name: "Ringover", domain: "ringover.com" },
  { name: "TotalEnergies", domain: "totalenergies.com" },
  { name: "Alan", domain: "alan.com" },
  { name: "Dougs", domain: "dougs.fr" },
  { name: "Edenred", domain: "edenred.com" },
  { name: "Beedeez", domain: "beedeez.com" },
  { name: "Kameleoon", domain: "kameleoon.com" },
  { name: "Spendesk", domain: "spendesk.com" },
  { name: "Payfit", domain: "payfit.com" },
  { name: "Manpower", domain: "manpower.fr" },
  { name: "Opendatasoft", domain: "opendatasoft.com" },
];

const tools = [
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Claude", domain: "claude.ai" },
  { name: "Clay", domain: "clay.com" },
  { name: "Make", domain: "make.com" },
  { name: "Lemlist", domain: "lemlist.com" },
  { name: "Attio", domain: "attio.com" },
  { name: "Claap", domain: "claap.io" },
  { name: "Notion", domain: "notion.so" },
  { name: "Slack", domain: "slack.com" },
  { name: "n8n", domain: "n8n.io" },
  { name: "Dropcontact", domain: "dropcontact.com" },
  { name: "Salesforce", domain: "salesforce.com" },
];

export default function AProposPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "50%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "72%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        {/* Header */}
        <section className="text-center mb-14">
          <nav className="mb-6 flex items-center justify-center gap-2 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
            <span className="text-[#666]">A propos</span>
          </nav>
          <div className="mb-4"><Badge>L&apos;agence</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            On structure les revenue engines des entreprises B2B
          </h1>
          <p className="text-[17px] text-[#666] max-w-[520px] mx-auto leading-[1.7]">
            Ceres est une agence RevOps et IA basee a Paris. On accompagne les entreprises de 15 a 500+ personnes pour aligner leurs equipes, deployer les bons outils et accelerer leur croissance commerciale.
          </p>
        </section>

        {/* Notre histoire */}
        <section className="mb-14">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <h2 className="text-[20px] font-semibold text-[#111] mb-4">Notre histoire</h2>
            <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
              <p>Ceres est nee d&apos;un constat simple, fait apres 9 ans d&apos;experience dans l&apos;ecosysteme B2B : la grande majorite des entreprises investissent dans un CRM, des outils marketing et des logiciels de vente, mais n&apos;ont personne pour faire fonctionner tout ca ensemble. Le CRM est a moitie rempli, le marketing et les sales ne se parlent pas, et le reporting se fait sur un fichier Excel le vendredi.</p>
              <p>Guillaume et Simon ont fonde Ceres apres avoir vecu ce probleme de l&apos;interieur pendant des annees, d&apos;abord cote startup puis cote scale-up, en accompagnant des centaines d&apos;entreprises. Leur conviction : ce qui manque, ce n&apos;est pas un outil de plus, c&apos;est quelqu&apos;un pour connecter les outils, aligner les equipes et creer des process qui tiennent.</p>
              <p>Aujourd&apos;hui, Ceres a accompagne plus de 250 entreprises, de la startup a 15 personnes au grand groupe comme TotalEnergies. Notre approche combine le RevOps (processus, donnees, outils) et l&apos;IA (Claude, agents MCP, automatisation intelligente) pour creer des revenue engines previsibles et scalables.</p>
            </div>
          </div>
        </section>
        <Connector />

        {/* Timeline */}
        <section className="mb-14">
          <h2 className="text-[15px] font-semibold text-[#111] mb-5">Les etapes cles</h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-lg bg-[#111] flex items-center justify-center text-white text-[10px] font-bold shrink-0">{m.year}</div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-[#E8E8E8] my-1" />}
                </div>
                <div className="pb-6">
                  <p className="text-[13px] font-semibold text-[#111] mb-0.5">{m.event}</p>
                  <p className="text-[12px] text-[#777] leading-[1.6]">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* Equipe */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <Badge>Equipe</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Les personnes derriere Ceres</h2>
            <p className="text-[14px] text-[#666] mt-2">Une equipe senior et complementaire. Pas de juniors, pas de stagiaires sur vos projets.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {team.map((t) => (
              <div key={t.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#111] flex items-center justify-center text-white text-[14px] font-bold">{t.initials}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-semibold text-[#111]">{t.name}</p>
                    <p className="text-[11px] text-[#FF7A59] font-medium">{t.role}</p>
                  </div>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${t.name}`}
                    className="shrink-0 w-8 h-8 rounded-lg border border-[#F0F0F0] flex items-center justify-center text-[#999] hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </a>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[12px] text-[#999] text-center mt-4">Et d&apos;autres talents qui nous rejoignent au fil des projets.</p>
        </section>
        <Connector />

        {/* Valeurs */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <Badge>Valeurs</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Comment on travaille</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="w-2 h-2 rounded-sm mb-3" style={{ background: v.color }} />
                <h3 className="text-[14px] font-semibold text-[#111] mb-2">{v.title}</h3>
                <p className="text-[12px] text-[#777] leading-[1.65]">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* Clients */}
        <section className="mb-14">
          <div className="text-center mb-6">
            <Badge>Clients</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Ils nous font confiance</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {clients.map((c) => (
              <div key={c.name} className="flex items-center gap-2 text-[#999]">
                <img src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=32`} alt={c.name} className="w-5 h-5 grayscale opacity-60" />
                <span className="text-[13px] font-medium">{c.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/cas-clients" className="text-[12px] text-[#4B5EFC] font-medium hover:underline">Voir tous les cas clients</Link>
          </div>
        </section>
        <Connector />

        {/* Stack */}
        <section className="mb-14">
          <div className="text-center mb-6">
            <Badge>Expertise</Badge>
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-[#111] tracking-[-0.02em] mt-4">Les outils qu&apos;on maitrise</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {tools.map((t) => (
              <div key={t.name} className="flex items-center gap-2 rounded-xl border border-[#F2F2F2] px-3 py-2 bg-white">
                <img src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=32`} alt={t.name} className="w-4 h-4" />
                <span className="text-[12px] font-medium text-[#111]">{t.name}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            {[
              { label: "Partenaire HubSpot", color: "#FF7A59" },
              { label: "Partenaire Lemlist", color: "#6C5CE7" },
              { label: "Partenaire Attio", color: "#4B5EFC" },
              { label: "Partenaire Clay", color: "#22C55E" },
              { label: "Experts Claude & IA", color: "#6D00CC" },
            ].map((p) => (
              <div key={p.label} className="flex items-center gap-1.5 text-[11px] text-[#999]">
                <span className="w-2 h-2 rounded-sm" style={{ background: p.color }} />
                {p.label}
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* Ce qu'on fait / ne fait pas */}
        <section className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#DCFCE7] bg-[#F0FDF4] p-5">
              <p className="text-[12px] font-semibold text-[#22C55E] mb-3">Ce qu&apos;on fait</p>
              {[
                "Audits CRM et RevOps actionnable",
                "Migrations CRM (Salesforce, Dynamics, Pipedrive vers HubSpot)",
                "Setup et optimisation HubSpot",
                "Accompagnement RevOps continu (Part-Time)",
                "Deploiement d\u2019agents IA (Claude, MCP, Make)",
                "Tracking marketing et attribution",
                "Formation et adoption des equipes",
              ].map((i) => (
                <p key={i} className="text-[12px] text-[#555] mb-1.5 flex items-start gap-2">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#22C55E] shrink-0 mt-0.5"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {i}
                </p>
              ))}
            </div>
            <div className="rounded-2xl border border-[#F2F2F2] bg-[#FAFAFA] p-5">
              <p className="text-[12px] font-semibold text-[#999] mb-3">Ce qu&apos;on ne fait pas</p>
              {[
                "Du dev web ou du design (on est ops, pas agence web)",
                "De la publicite (Google Ads, Meta Ads)",
                "De la creation de contenu (redaction, video)",
                "Du consulting strategique sans execution",
                "Des projets de plus de 6 mois sans resultats",
              ].map((i) => (
                <p key={i} className="text-[12px] text-[#999] mb-1.5 flex items-start gap-2">
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="text-[#CCC] shrink-0 mt-0.5"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  {i}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10 text-center">
            <h2 className="text-[20px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Envie de travailler ensemble ?</h2>
            <p className="text-[14px] text-white/50 mb-6 max-w-[420px] mx-auto leading-[1.7]">30 minutes pour comprendre votre situation et voir comment on peut vous aider.</p>
            <div className="flex items-center justify-center gap-3">
              <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF7A59] text-white text-[13px] font-medium hover:bg-[#E86D4F] transition-colors">
                <span className="w-2 h-2 rounded-full bg-white/30 animate-pulse" />Nous contacter
              </a>
              <Link href="/cas-clients" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 text-white text-[13px] font-medium hover:bg-white/5 transition-colors">
                Voir les cas clients
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
