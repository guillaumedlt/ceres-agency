"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const painPoints = [
  { title: "Cycles de vente de 6 a 18 mois", desc: "Un dispositif medical ou un logiciel de sante ne se vend pas en 2 semaines. Entre la demo, l&apos;evaluation clinique, la validation achats et la mise en conformite, le cycle s&apos;etire. Le CRM doit tracker chaque etape sans perdre le fil.", color: "#EF4444" },
  { title: "Multi-decideurs : medecin, acheteur, DSI", desc: "Le medecin valide l&apos;usage clinique. L&apos;acheteur negocie le budget. La DSI valide l&apos;integration technique. Trois profils, trois langages, trois timelines. Le CRM doit mapper les decideurs et suivre l&apos;avancee de chacun.", color: "#F97316" },
  { title: "RGPD sante et donnees sensibles", desc: "Les donnees de sante sont soumises a des contraintes specifiques : hebergement HDS, consentement explicite, droit a l&apos;oubli renforce. Le CRM doit etre configure pour respecter ces obligations sans freiner le commerce.", color: "#4B5EFC" },
  { title: "Pipeline avec etapes regulatoires", desc: "Marquage CE, autorisation ANSM, evaluation HAS, negociation CEPS : le pipeline commercial integre des etapes reglementaires. Sans deal stages dedies, les deals stagnent sans que personne ne sache pourquoi.", color: "#6C5CE7" },
  { title: "Pas de visibilite sur les KOL", desc: "Les Key Opinion Leaders sont essentiels dans la healthtech. Qui sont-ils, quel est leur niveau d&apos;engagement, quelles publications ont-ils, quels congres frequentent-ils. Le CRM ne capture rien de tout ca.", color: "#EAB308" },
  { title: "Reporting inadapte au secteur sante", desc: "Les KPIs standard (pipeline, conversion, revenue) ne suffisent pas. Il faut mesurer le taux de validation clinique, le delai reglementaire moyen, le cout d&apos;acquisition par canal sante. Les dashboards generiques ne repondent pas.", color: "#22C55E" },
];

const aiUseCases = [
  { title: "Mapping des decideurs automatique", desc: "L&apos;IA identifie et cartographie les decideurs de chaque compte : profil clinique, profil achats, profil IT. Chaque contact est positionne dans l&apos;organigramme decisionnel. Les commerciaux savent a qui parler et dans quel ordre.", icon: "M", color: "#EF4444" },
  { title: "Scoring par stade regulatoire", desc: "L&apos;IA ajuste le score de chaque deal en fonction de son avancee reglementaire. Un produit avec marquage CE obtenu pese plus qu&apos;un produit en cours d&apos;evaluation. Le forecast reflete la realite reglementaire, pas seulement commerciale.", icon: "S", color: "#F97316" },
  { title: "Alertes cycle long", desc: "Quand un deal stagne plus de 30 jours sur une etape, l&apos;IA alerte le commercial avec le contexte : dernier contact, derniere action, prochaine etape reglementaire prevue. Les deals ne tombent plus dans l&apos;oubli.", icon: "A", color: "#4B5EFC" },
  { title: "Reporting adapte sante", desc: "Des dashboards specifiques healthtech : pipeline par stade reglementaire, taux de validation clinique, delai moyen marquage CE, couverture KOL par segment. Des metriques qui ont du sens pour votre CODIR.", icon: "R", color: "#22C55E" },
];

const stackTools = [
  {
    name: "CRM",
    color: "#FF7A59",
    tools: ["HubSpot", "Salesforce Health Cloud"],
    role: "Pipeline, decideurs, comptes hopitaliers",
  },
  {
    name: "Reglementaire",
    color: "#6D00CC",
    tools: ["MasterControl", "Greenlight Guru", "Veeva Vault"],
    role: "Documentation CE, FDA, qualite",
  },
  {
    name: "Donnees cliniques",
    color: "#22C55E",
    tools: ["Medidata", "Veeva CRM", "IQVIA"],
    role: "Essais cliniques, KOL, publications",
  },
  {
    name: "Communication",
    color: "#4B5EFC",
    tools: ["Mailchimp", "Livestorm", "Calendly"],
    role: "Webinaires cliniques, prise de RDV, nurturing",
  },
];

const faqItems = [
  { q: "Comment gerez-vous les contraintes RGPD sante ?", a: "On configure le CRM avec des champs cloisonnes, des niveaux d&apos;acces par role, des consentements traces et un hebergement HDS si necessaire. Chaque configuration est validee avec votre DPO." },
  { q: "Est-ce que HubSpot est adapte a la healthtech ?", a: "Oui. Avec des objets custom (etablissements, decideurs cliniques, stades reglementaires) et des pipelines adaptes, HubSpot couvre les besoins des healthtech de la startup au scale-up." },
  { q: "Comment gerer les cycles de vente de 12+ mois ?", a: "On configure des deal stages qui refletent votre realite : evaluation clinique, validation achats, conformite, deploiement. Chaque etape a des criteres de passage et des alertes de stagnation." },
  { q: "Comment suivre les KOL dans le CRM ?", a: "On cree un objet custom KOL avec les publications, les congres, le niveau d&apos;engagement et les interactions. Chaque KOL est lie aux comptes et aux deals concernes. Le suivi est automatise." },
  { q: "Combien de temps pour deployer le RevOps healthtech ?", a: "8 a 12 semaines selon la complexite reglementaire et le nombre de lignes de produits. On commence par un audit qui cartographie votre cycle de vente complet." },
  { q: "Quel budget prevoir ?", a: "A partir de 5 000 EUR pour une startup healthtech. Le budget depend de la complexite de votre cycle reglementaire et du nombre d&apos;integrations. Cadrage gratuit en 30 minutes." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RevOps pour Healthtech et medtech",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "RevOps specialise sante et medtech. Cycles de vente longs, multi-decideurs, compliance RGPD sante, pipeline complexe.",
      serviceType: "Revenue Operations Healthtech",
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

export default function RevOpsHealthtechPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="mb-8 text-[12px] text-[#999]" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/revops" className="hover:text-[#111] transition-colors">RevOps</Link></li>
            <li>/</li>
            <li className="text-[#111] font-medium">RevOps Healthtech</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Healthtech</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            RevOps pour Healthtech et medtech
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Cycles longs, multi-decideurs, contraintes reglementaires. Votre pipeline est different. Vos operations doivent l&apos;etre aussi.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            Les healthtech qui scalent ont un CRM qui integre la complexite reglementaire dans le pipeline, pas a cote. On structure ca.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">6-18</div>
              <p className="text-[11px] text-[#999]">mois de cycle</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">3-5</div>
              <p className="text-[11px] text-[#999]">decideurs par deal</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">8-12 sem</div>
              <p className="text-[11px] text-[#999]">deploiement</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Structurer mon pipeline healthtech
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Les problematiques healthtech ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Le constat</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les problematiques specifiques de la healthtech</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Vendre dans la sante, c&apos;est gerer la complexite clinique, reglementaire et commerciale en meme temps. Le CRM generique ne suit pas.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {painPoints.map((item) => (
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

        {/* ───── 3. Ce que l'IA change dans la healthtech ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">IA appliquee</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Ce que l&apos;IA change dans la healthtech</h2>
              <p className="text-[13px] text-white/40">L&apos;IA donne de la visibilite sur des cycles longs et aide a naviguer la complexite multi-decideurs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {aiUseCases.map((cat) => (
                <div key={cat.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-bold" style={{ backgroundColor: cat.color + "20", color: cat.color }}>{cat.icon}</div>
                      <h3 className="text-[14px] font-semibold text-white">{cat.title}</h3>
                    </div>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.65]">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 4. La stack healthtech type ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Stack</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">La stack healthtech type qu&apos;on connecte</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">CRM, outils reglementaires, donnees cliniques et communication : on unifie les briques pour une vue complete du cycle de vente.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {stackTools.map((stack) => (
              <div key={stack.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: stack.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{stack.name}</h3>
                </div>
                <p className="text-[12px] text-[#999] mb-2">{stack.role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {stack.tools.map((tool) => (
                    <span key={tool} className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#F5F5F5] text-[11px] text-[#555] font-medium">{tool}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 5. Notre approche ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Approche</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Une methode adaptee aux cycles longs</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">On comprend que votre cycle de vente n&apos;est pas lineaire. On configure un CRM qui reflete cette complexite.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/methode" className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3 h-3 rounded-sm bg-[#6D00CC]" />
                <h3 className="text-[14px] font-semibold text-[#111]">Notre methode</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Diagnostic, architecture, deploiement, iteration. Adaptee aux contraintes reglementaires et aux cycles longs de la sante.</p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5EFC]">
                Decouvrir la methode
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
            <Link href="/fondation-data" className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3 h-3 rounded-sm bg-[#4B5EFC]" />
                <h3 className="text-[14px] font-semibold text-[#111]">Fondation Data</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">En healthtech, la qualite des donnees impacte directement la conformite. On pose des fondations propres et conformes RGPD sante.</p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5EFC]">
                Decouvrir la Fondation Data
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
          </div>
        </section>
        <Connector />

        {/* ───── 6. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur le RevOps healthtech</h2>
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

        {/* ───── 7. CTA ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a structurer votre pipeline healthtech ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On audite votre cycle de vente et vos contraintes reglementaires en 30 minutes. Diagnostic gratuit.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Auditer mon pipeline healthtech
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
