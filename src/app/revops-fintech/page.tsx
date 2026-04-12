"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const painPoints = [
  { title: "Compliance et donnees fragmentees", desc: "Les donnees clients sont reparties entre le CRM, le core banking et les outils de compliance. Aucune vue unifiee. Les equipes commerciales n&apos;ont pas acces au statut KYC, les compliance officers n&apos;ont pas la visibilite pipeline.", color: "#EF4444" },
  { title: "Pipeline multi-produits ingerable", desc: "Credit, assurance, investissement, paiement : chaque produit a son cycle, ses decideurs, ses criteres. Un pipeline unique ne peut pas representer cette complexite. Les deals se perdent entre les lignes de produits.", color: "#F97316" },
  { title: "Cycles de vente longs et opaques", desc: "6 a 12 mois pour closer un deal enterprise en fintech. Entre le premier contact et la signature, des dizaines d&apos;interactions non tracees. Impossible de savoir ou en est reellement un deal sans appeler l&apos;AE.", color: "#4B5EFC" },
  { title: "KYC et data quality incoherents", desc: "Les fiches clients ont des informations contradictoires entre le CRM et le systeme KYC. Noms differents, adresses obsoletes, statuts non mis a jour. En cas d&apos;audit, c&apos;est un risque reglementaire direct.", color: "#6C5CE7" },
  { title: "Reporting regulateur manuel", desc: "Chaque trimestre, l&apos;equipe passe 2 semaines a compiler les donnees pour le regulateur. Extraction CSV, croisement manuel, verification. Un processus qui devrait etre automatise depuis longtemps.", color: "#EAB308" },
  { title: "Integration bancaire complexe", desc: "Le CRM ne parle pas au core banking. Les API sont la, mais personne ne les a connectees proprement. Les donnees transactionnelles restent dans un silo, inaccessibles pour les equipes commerciales.", color: "#22C55E" },
];

const aiUseCases = [
  { title: "Qualification automatique par profil risque", desc: "L&apos;IA analyse chaque lead entrant : taille, secteur, juridiction, historique. Un score de risque est attribue automatiquement. Les deals a haut risque regulatoire sont flagges avant que le commercial n&apos;investisse du temps.", icon: "Q", color: "#EF4444" },
  { title: "Enrichissement compliance-ready", desc: "Chaque nouveau contact est enrichi avec les donnees necessaires a la compliance : beneficiaires effectifs, PEP, sanctions, structure juridique. La fiche arrive complete dans le CRM, prete pour le KYC.", icon: "E", color: "#F97316" },
  { title: "Reporting regulateur automatise", desc: "Les rapports regulateurs sont generes automatiquement a partir des donnees CRM et transactionnelles. Formats conformes, donnees reconciliees, piste d&apos;audit complete. Ce qui prenait 2 semaines prend 2 heures.", icon: "R", color: "#4B5EFC" },
  { title: "Detection de signaux fraude", desc: "L&apos;IA surveille en continu les patterns inhabituels : montants atypiques, frequences anormales, changements de comportement. Les alertes sont remontees dans le CRM avec le contexte complet pour investigation.", icon: "D", color: "#22C55E" },
];

const stackTools = [
  {
    name: "CRM",
    color: "#FF7A59",
    tools: ["HubSpot", "Salesforce"],
    role: "Source de verite commerciale et pipeline",
  },
  {
    name: "Core Banking / Payments",
    color: "#6D00CC",
    tools: ["Stripe", "Marqeta", "Solarisbank"],
    role: "Transactions, comptes, operations",
  },
  {
    name: "Compliance & KYC",
    color: "#22C55E",
    tools: ["ComplyAdvantage", "Onfido", "Sumsub"],
    role: "Verification identite, screening, monitoring",
  },
  {
    name: "Data & Analytics",
    color: "#4B5EFC",
    tools: ["Segment", "Looker", "dbt"],
    role: "Unification donnees, reporting, modelisation",
  },
];

const faqItems = [
  { q: "Comment gerez-vous les contraintes reglementaires fintech ?", a: "On configure le CRM pour que les donnees sensibles soient cloisonnees, les acces controles et les pistes d&apos;audit actives. Chaque modification est tracable. On travaille avec vos equipes compliance pour valider l&apos;architecture." },
  { q: "Est-ce que le CRM peut se connecter au core banking ?", a: "Oui. Via API ou middleware (Workato, Make, Tray.io). On synchronise les donnees transactionnelles pertinentes dans le CRM sans exposer les donnees sensibles. L&apos;architecture est validee avec votre DSI." },
  { q: "On a plusieurs produits financiers, comment gerer les pipelines ?", a: "On cree un pipeline par ligne de produit avec des objets custom lies. Chaque deal est rattache a un produit, un profil risque et un statut reglementaire. Les reports croisent les pipelines automatiquement." },
  { q: "Combien de temps pour deployer le RevOps fintech ?", a: "6 a 10 semaines selon la complexite reglementaire et le nombre d&apos;integrations. On commence par un audit de 2 semaines qui cartographie votre stack et vos obligations." },
  { q: "Est-ce que vous avez deja travaille avec des fintechs regulees ?", a: "Oui. On accompagne des fintechs soumises a l&apos;ACPR, l&apos;AMF et aux regulateurs europeens. On connait les contraintes de reporting, de traitement des donnees et de segregation des acces." },
  { q: "Quel budget prevoir ?", a: "A partir de 5 000 EUR pour un audit + socle RevOps fintech. La complexite reglementaire et le nombre d&apos;integrations impactent le budget. Cadrage gratuit en 30 minutes." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RevOps pour Fintech",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "RevOps specialise fintech. Compliance, KYC, pipeline deals complexes, multi-produits. Data quality critique pour la reglementation.",
      serviceType: "Revenue Operations Fintech",
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

export default function RevOpsFintechPage() {
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
            <li className="text-[#111] font-medium">RevOps Fintech</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Fintech</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            RevOps pour Fintech
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Compliance, KYC, pipeline multi-produits, cycles longs. Votre CRM doit gerer la complexite reglementaire sans freiner la croissance commerciale.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            Les fintechs qui performent ont un CRM qui parle le meme langage que la compliance. On connecte les deux mondes.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">100%</div>
              <p className="text-[11px] text-[#999]">compliance-ready</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">-80%</div>
              <p className="text-[11px] text-[#999]">temps reporting</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">6-10 sem</div>
              <p className="text-[11px] text-[#999]">deploiement</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Auditer mon CRM fintech
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Les problematiques fintech ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Le constat</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les problematiques specifiques des fintechs</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Entre la pression commerciale et les exigences reglementaires, le CRM d&apos;une fintech doit gerer une complexite que les outils generiques ignorent.</p>
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

        {/* ───── 3. Ce que l'IA change dans la fintech ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">IA appliquee</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Ce que l&apos;IA change dans la fintech</h2>
              <p className="text-[13px] text-white/40">L&apos;IA automatise les taches a faible valeur ajoutee et renforce la conformite sans ralentir le commerce.</p>
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

        {/* ───── 4. La stack fintech type ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Stack</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">La stack fintech type qu&apos;on connecte</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">CRM, core banking, compliance et analytics : on connecte les briques pour creer une vue unifiee et conforme.</p>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Une methode adaptee aux contraintes fintech</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">On travaille main dans la main avec vos equipes compliance et tech pour deployer un CRM qui respecte vos obligations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/methode" className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3 h-3 rounded-sm bg-[#6D00CC]" />
                <h3 className="text-[14px] font-semibold text-[#111]">Notre methode</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Diagnostic, architecture, deploiement, iteration. Une methode structuree, adaptee aux environnements regules.</p>
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
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">En fintech, la data quality n&apos;est pas un nice-to-have. C&apos;est une obligation reglementaire. On pose les fondations propres.</p>
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
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur le RevOps fintech</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a structurer votre CRM fintech ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On audite votre stack et vos contraintes reglementaires en 30 minutes. Diagnostic gratuit.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Auditer mon CRM fintech
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
