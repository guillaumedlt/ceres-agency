"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const painPoints = [
  { title: "CRM et ERP deconnectes", desc: "Le commercial cree un devis dans le CRM. Le bureau d&apos;etudes travaille dans l&apos;ERP. La production ne voit rien. Les donnees clients, les devis et les commandes vivent dans des systemes qui ne se parlent pas. Chaque ressaisie est un risque d&apos;erreur.", color: "#EF4444" },
  { title: "Devis manuels et chronophages", desc: "Chaque devis est un exercice artisanal. Le commercial doit consulter les prix, verifier les stocks, calculer les delais de fabrication. Un devis qui devrait prendre 30 minutes en prend 3 heures. Et la moitie contient des erreurs.", color: "#F97316" },
  { title: "Cycle de vente technique et long", desc: "Entre le premier contact et la commande, il y a des etudes techniques, des prototypes, des validations qualite, des homologations. Le CRM n&apos;a pas de deal stages pour ces etapes. Les deals disparaissent dans un trou noir.", color: "#4B5EFC" },
  { title: "Multi-sites sans visibilite globale", desc: "Chaque site a ses clients, ses commerciaux, ses process. Le siege n&apos;a aucune visibilite consolidee. Impossible de savoir si un client a Paris commande aussi a Lyon. Pas de synergie, pas de cross-sell.", color: "#6C5CE7" },
  { title: "Carnet de commandes opaque", desc: "Le carnet de commandes est dans l&apos;ERP, mais le pipeline commercial est dans le CRM. Impossible de voir la continuite entre les deux. Le CODIR navigue a vue entre ce qui est signe et ce qui est en production.", color: "#EAB308" },
  { title: "Donnees produit non liees au CRM", desc: "Les references produit, les specifications techniques, les certifications sont dans un systeme a part. Le commercial ne peut pas acceder aux fiches techniques depuis le CRM. L&apos;information est silotee.", color: "#22C55E" },
];

const aiUseCases = [
  { title: "Generation de devis automatique", desc: "L&apos;IA pre-remplit le devis a partir de la demande client : references produit, quantites, prix unitaires, delais de fabrication estimes. Le commercial verifie et ajuste au lieu de construire de zero. Le temps de devis passe de 3h a 30 minutes.", icon: "D", color: "#EF4444" },
  { title: "Scoring des appels d&apos;offres", desc: "L&apos;IA analyse chaque appel d&apos;offres entrant : secteur, volume, specifications techniques, historique avec le donneur d&apos;ordre. Un score de probabilite et de rentabilite est attribue. Les equipes se concentrent sur les AO a fort potentiel.", icon: "S", color: "#F97316" },
  { title: "Alertes renouvellement", desc: "Pour les contrats cadre et les commandes recurrentes, l&apos;IA detecte les echeances 60 jours avant. Le commercial recoit une alerte avec l&apos;historique de commandes, les conditions negociees et les signaux de risque.", icon: "A", color: "#4B5EFC" },
  { title: "Reporting carnet de commandes", desc: "Un dashboard unifie qui reconcilie le pipeline CRM et le carnet de commandes ERP. En cours de negociation, commande confirmee, en production, livre. Le CODIR a une vue complete du flux commercial a industriel.", icon: "R", color: "#22C55E" },
];

const stackTools = [
  {
    name: "CRM",
    color: "#FF7A59",
    tools: ["HubSpot", "Salesforce"],
    role: "Pipeline commercial, contacts, devis",
  },
  {
    name: "ERP",
    color: "#6D00CC",
    tools: ["SAP", "Sage X3", "Odoo", "Cegid"],
    role: "Production, stocks, commandes, facturation",
  },
  {
    name: "CAO / PLM",
    color: "#22C55E",
    tools: ["SolidWorks", "Catia", "Windchill"],
    role: "Specifications techniques, fiches produit",
  },
  {
    name: "Collaboration",
    color: "#4B5EFC",
    tools: ["Teams", "SharePoint", "DocuSign"],
    role: "Documents, signatures, communication interne",
  },
];

const faqItems = [
  { q: "Comment connectez-vous le CRM a l&apos;ERP ?", a: "Via API native ou middleware (Workato, Make). On synchronise les devis, les commandes et les fiches client dans les deux sens. Le commercial voit le statut de production, l&apos;ERP recoit les nouvelles commandes automatiquement." },
  { q: "Est-ce que HubSpot est adapte a l&apos;industrie ?", a: "Oui. Avec des objets custom (references produit, devis techniques, sites) et des pipelines multi-etapes qui integrent les phases techniques, HubSpot couvre les besoins des industriels PME et ETI." },
  { q: "On a plusieurs sites, comment gerer ca ?", a: "On configure des equipes par site avec des vues filtrees. Le siege a une vue consolidee, chaque site a sa vue locale. Les clients multi-sites sont identifies automatiquement pour le cross-sell." },
  { q: "Combien de temps pour deployer le RevOps industrie ?", a: "6 a 10 semaines selon le nombre de sites et la complexite de l&apos;integration ERP. On commence par un audit de 2 semaines qui cartographie vos flux commerciaux et industriels." },
  { q: "Est-ce que les devis techniques sont geres dans le CRM ?", a: "Oui. On configure un module devis avec les references produit, les prix, les quantites et les conditions. Le devis peut etre genere en PDF depuis le CRM et synchronise avec l&apos;ERP a la commande." },
  { q: "Quel budget prevoir ?", a: "A partir de 5 000 EUR pour un site unique. Le budget augmente avec le nombre de sites et la complexite de l&apos;integration ERP. Cadrage gratuit en 30 minutes." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RevOps pour l'industrie et manufacturing",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "RevOps specialise industrie. Pipeline devis/commandes, CRM connecte ERP, cycle de vente technique, multi-sites.",
      serviceType: "Revenue Operations Industrie",
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

export default function RevOpsIndustriePage() {
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
            <li className="text-[#111] font-medium">RevOps Industrie</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Industrie</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            RevOps pour l&apos;industrie et manufacturing
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Pipeline devis/commandes, CRM connecte a l&apos;ERP, cycle de vente technique, multi-sites. On structure les operations commerciales qui alimentent la production.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            L&apos;industrie ne peut plus se permettre d&apos;avoir un CRM et un ERP qui vivent dans des mondes paralleles. On connecte les deux.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">-70%</div>
              <p className="text-[11px] text-[#999]">temps de devis</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">100%</div>
              <p className="text-[11px] text-[#999]">visibilite carnet</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">6-10 sem</div>
              <p className="text-[11px] text-[#999]">deploiement</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Connecter mon CRM a mon ERP
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Les problematiques industrie ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Le constat</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les problematiques specifiques de l&apos;industrie</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">L&apos;industrie a ses propres contraintes : cycles techniques, multi-sites, integration ERP. Un CRM generique ne couvre pas ces besoins.</p>
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

        {/* ───── 3. Ce que l'IA change dans l'industrie ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">IA appliquee</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Ce que l&apos;IA change dans l&apos;industrie</h2>
              <p className="text-[13px] text-white/40">L&apos;IA connecte le commercial a l&apos;industriel. Devis, scoring, renouvellements et reporting : tout est automatise.</p>
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

        {/* ───── 4. La stack industrie type ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Stack</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">La stack industrie type qu&apos;on connecte</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">CRM, ERP, CAO et outils collaboratifs : on cree le pont entre le commerce et la production.</p>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Une methode adaptee a l&apos;industrie</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">On comprend les contraintes industrielles. On configure un CRM qui s&apos;integre a votre ERP, pas qui le remplace.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/methode" className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3 h-3 rounded-sm bg-[#6D00CC]" />
                <h3 className="text-[14px] font-semibold text-[#111]">Notre methode</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Diagnostic, architecture, deploiement, iteration. Adaptee aux environnements industriels multi-sites et multi-systemes.</p>
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
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Avant de connecter CRM et ERP, on s&apos;assure que les donnees sont propres des deux cotes. Sinon, on synchronise des erreurs.</p>
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
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur le RevOps industrie</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a connecter votre CRM a votre ERP ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On audite votre flux commercial-industriel en 30 minutes. Diagnostic gratuit, plan d&apos;action sous 48h.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Connecter mon CRM a mon ERP
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
