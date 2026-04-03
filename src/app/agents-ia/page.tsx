"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const auditCategories = [
  { title: "Remplacable a 100%", desc: "Cout d\u2019erreur faible, volume eleve, standardisable. L\u2019IA le fait mieux, plus vite, sans variance. Exemples : enrichissement de fiches, scheduling, relances standards, reporting.", color: "#22C55E" },
  { title: "Partiellement remplacable", desc: "L\u2019IA fait 80% du travail, l\u2019humain finalise. Exemples : emails de prospection (IA redige, humain valide), segmentation (IA propose, humain ajuste), scoring (IA calcule, humain priorise).", color: "#4B5EFC" },
  { title: "Assistable", desc: "L\u2019IA prepare le contexte, l\u2019humain execute avec un meilleur jugement. Exemples : preparation de calls (briefing IA), discovery (IA identifie les angles), proposition commerciale (IA structure, humain personnalise).", color: "#6D00CC" },
  { title: "Non remplacable", desc: "Le jugement humain cree une valeur disproportionnee. L\u2019IA n\u2019intervient pas. Exemples : negociation complexe, relation C-level, gestion de crise, construction de confiance.", color: "#FF7A59" },
];

const silos = [
  {
    name: "Marketing",
    color: "#FF7A59",
    tasks: [
      { level: "Remplacable", items: "Reporting, attribution, A/B testing analysis" },
      { level: "Partiellement", items: "Segmentation, nurturing, personnalisation" },
      { level: "Assistable", items: "Strategie de contenu, positionnement" },
      { level: "Non remplacable", items: "Branding, vision marque, creative direction" },
    ],
  },
  {
    name: "Sales",
    color: "#6D00CC",
    tasks: [
      { level: "Remplacable", items: "Enrichissement, scheduling, relances standards, data entry" },
      { level: "Partiellement", items: "Emails de prospection, preparation de calls, scoring" },
      { level: "Assistable", items: "Discovery, negociation, proposition commerciale" },
      { level: "Non remplacable", items: "Relation C-level, closing complexe, confiance" },
    ],
  },
  {
    name: "CS",
    color: "#22C55E",
    tasks: [
      { level: "Remplacable", items: "Renouvellements simples, reporting, alertes" },
      { level: "Partiellement", items: "Health scoring, detection de churn, onboarding" },
      { level: "Assistable", items: "Plans d\u2019expansion, comptes strategiques" },
      { level: "Non remplacable", items: "Gestion de crise, relation long terme" },
    ],
  },
  {
    name: "Finance",
    color: "#4B5EFC",
    tasks: [
      { level: "Remplacable", items: "Reconciliation, reporting automatise, audits" },
      { level: "Partiellement", items: "Previsions de revenus, analyse pipeline" },
      { level: "Assistable", items: "Analyse strategique, budgeting" },
      { level: "Non remplacable", items: "Decisions d\u2019investissement, negociation contrats" },
    ],
  },
];

const levelColors: Record<string, string> = {
  "Remplacable": "#22C55E",
  "Partiellement": "#4B5EFC",
  "Assistable": "#6D00CC",
  "Non remplacable": "#FF7A59",
};

const agents = [
  { title: "Enrichissement automatique", desc: "Chaque lead entrant est enrichi en 30 secondes : entreprise, secteur, taille, seniorite, actualites. Le commercial ouvre une fiche prete.", color: "#22C55E", result: "15 min \u2192 2 min par lead" },
  { title: "Scoring predictif", desc: "L\u2019IA analyse des dizaines de signaux et produit un score dynamique par lead et par deal. Plus precis que des regles statiques. Le score evolue a chaque interaction.", color: "#6D00CC", result: "Precision forecast : +60%" },
  { title: "Analyse de calls", desc: "Apres chaque call : resume structure, objections identifiees, next steps, sentiment du prospect. Mise a jour CRM automatique. Les managers n\u2019ecoutent plus 2h de calls par jour.", color: "#4B5EFC", result: "2h/jour de review \u2192 0" },
  { title: "Reporting automatise", desc: "Chaque lundi, un rapport complet genere automatiquement. Pipeline, KPIs, alertes, tendances. Zero copier-coller, zero slide manuelle.", color: "#FF7A59", result: "3h/semaine \u2192 0" },
  { title: "Detection du churn", desc: "Surveillance des signaux faibles en continu : baisse d\u2019utilisation, tickets en hausse, absence de contact. Alerte 45 jours avant le risque, pas 10 jours.", color: "#6C5CE7", result: "Detection : J-10 \u2192 J-45" },
  { title: "Sequences outbound IA", desc: "Emails de prospection personnalises par persona, secteur et signaux detectes. L\u2019IA redige, l\u2019equipe valide et envoie. Personnalisation a grande echelle.", color: "#D4A27F", result: "Taux de reponse : 3% \u2192 11%" },
];

const delegationLevels = [
  { level: "Rouge", label: "Humain seul", desc: "L\u2019IA n\u2019intervient pas. Le jugement humain est la seule source de valeur.", color: "#EF4444" },
  { level: "Orange", label: "L\u2019IA prepare, l\u2019humain execute", desc: "L\u2019IA rassemble le contexte, structure les donnees, propose des options. L\u2019humain decide et agit.", color: "#F97316" },
  { level: "Jaune", label: "L\u2019IA execute, l\u2019humain valide", desc: "L\u2019IA fait le travail de bout en bout. L\u2019humain revoit le resultat avant publication ou action.", color: "#EAB308" },
  { level: "Vert", label: "L\u2019IA autonome", desc: "L\u2019IA execute sans intervention humaine. Monitoring et alertes en cas d\u2019anomalie.", color: "#22C55E" },
];

const timeline = [
  { num: "S1", title: "Audit des silos", desc: "On identifie les taches remplacables, assistables et protegees. On priorise par ROI." },
  { num: "S2", title: "Configuration", desc: "L\u2019IA est connectee a votre CRM et vos outils. Premier agent configure et teste." },
  { num: "S3", title: "Production", desc: "Le premier agent tourne en conditions reelles. Resultats mesures vs baseline." },
  { num: "M2+", title: "Iteration", desc: "Nouveaux agents deployes. Optimisation continue. Formation des equipes." },
];

const faqItems = [
  { q: "C\u2019est quoi un agent IA concretement ?", a: "Un programme qui execute une tache automatiquement : lire des donnees dans votre CRM, les analyser, prendre une decision et ecrire le resultat. Pas un chatbot. Un assistant qui agit dans vos outils." },
  { q: "Combien de temps pour deployer le premier agent ?", a: "1 a 2 semaines pour un agent simple (enrichissement, reporting). 2 a 3 semaines pour un agent complexe (scoring, qualification multi-criteres). L\u2019audit des silos prend 1 semaine." },
  { q: "Est-ce que ca remplace les equipes ?", a: "Non. Ca recentre les equipes sur ce qui cree de la valeur. L\u2019IA prend les taches repetitives (recherche, reporting, data entry). Les humains gardent la relation, la negociation, le jugement." },
  { q: "Comment on mesure le ROI ?", a: "Chaque agent a des KPIs definis : temps gagne, precision amelioree, volume traite. On mesure vs baseline a M+1 et M+3. Pas de vanity metrics." },
  { q: "Ca marche avec quel CRM ?", a: "HubSpot, Salesforce, Pipedrive. L\u2019IA est agnostique au CRM. On se connecte via les APIs existantes." },
  { q: "On a besoin de competences tech en interne ?", a: "Non. On deploie, configure et maintient. Votre equipe utilise les resultats dans les outils qu\u2019elle connait deja." },
  { q: "C\u2019est securise ?", a: "Oui. Les agents n\u2019accedent qu\u2019aux donnees autorisees. Acces en lecture seule par defaut. Les actions destructives necessitent une validation humaine." },
  { q: "Quel est le cout ?", a: "Ca depend du nombre d\u2019agents et de la complexite. Typiquement entre 2 000 et 5 000 EUR pour le premier agent en production. Le cout de l\u2019IA en elle-meme est de 50 a 200 EUR/mois." },
  { q: "Et si l\u2019outil IA change demain ?", a: "La methodologie est agnostique. On utilise le meilleur modele disponible a un instant T. Si un meilleur modele sort dans 6 mois, on migre. Vos process et vos agents restent, seul le moteur change." },
  { q: "Est-ce qu\u2019il faut d\u2019abord faire la Fondation Data ?", a: "Fortement recommande. L\u2019IA sur des donnees sales produit des resultats sales. On peut deployer un agent simple en parallele du nettoyage, mais le scoring et l\u2019enrichissement avance necessitent une base propre." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Deploiement IA pour RevOps",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Deploiement d\u2019agents IA silo par silo dans les operations commerciales. Audit des taches remplacables, scoring, enrichissement, reporting automatise. De la donnee propre a l\u2019intelligence operationnelle.",
      serviceType: "AI Deployment",
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

export default function AgentsIAPage() {
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
            <li className="text-[#111] font-medium">Deploiement IA</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Deploiement IA</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Deploiement IA : optimiser chaque silo de votre revenue engine
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            On audite vos operations silo par silo, on identifie ce que l&apos;IA peut remplacer, assister ou optimiser, et on deploie les agents qui creent de la valeur. Pas de la tech pour la tech. De l&apos;impact business mesurable.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            Le prerequis : une Fondation Data propre. L&apos;IA est un multiplicateur, elle amplifie ce qui existe. Donnees propres = resultats puissants. Donnees sales = bruit a grande echelle.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">4</div>
              <p className="text-[11px] text-[#999]">silos audites</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">5+</div>
              <p className="text-[11px] text-[#999]">agents deployables</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">2 sem</div>
              <p className="text-[11px] text-[#999]">premier agent en prod</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Deployer l&apos;IA dans mes operations
          </Link>
        </section>
        <Connector />

        {/* ───── 2. L'audit par silo ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>L&apos;audit</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Tache par tache, silo par silo</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Avant de deployer quoi que ce soit, on classe chaque activite de votre cycle revenue dans 4 categories. Ca donne une map globale de ce qui peut etre automatise, assiste ou protege.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {auditCategories.map((cat) => (
              <div key={cat.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: cat.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{cat.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 3. La matrice par silo (dark) ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">La map</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Ce que l&apos;IA peut faire dans chaque silo</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {silos.map((silo) => (
                <div key={silo.name} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: silo.color }} />
                    <h3 className="text-[14px] font-semibold text-white">{silo.name}</h3>
                  </div>
                  <div className="space-y-2.5">
                    {silo.tasks.map((task) => (
                      <div key={task.level} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-sm mt-1 shrink-0" style={{ backgroundColor: levelColors[task.level] }} />
                        <div>
                          <span className="text-[11px] font-medium text-white/60">{task.level}</span>
                          <p className="text-[11px] text-white/40 leading-[1.5]">{task.items}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 4. Les agents qu'on deploie ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Les agents</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Un agent par besoin, connecte a votre CRM</h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">Chaque agent est une brique autonome. On deploie le plus impactant d&apos;abord, on mesure, on itere.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {agents.map((a) => (
              <div key={a.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: a.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{a.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-3">{a.desc}</p>
                <span className="inline-flex items-center text-[11px] font-medium text-[#22C55E] bg-[#F0FDF4] px-2.5 py-1 rounded-md">{a.result}</span>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 5. Le modele de delegation ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Le modele</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Quand l&apos;IA agit seule et quand l&apos;humain decide</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {delegationLevels.map((d) => (
              <div key={d.level} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: d.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{d.label}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{d.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-8">
            <p className="text-[13px] text-[#555] leading-[1.75] text-center max-w-[600px] mx-auto">
              Une tache passe au niveau superieur apres 50+ occurrences avec un taux d&apos;erreur acceptable. Concret, mesurable, auditable.
            </p>
          </div>
        </section>
        <Connector />

        {/* ───── 6. Comment ca se passe ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>Timeline</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Premier agent en production en 2 semaines</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {timeline.map((s, i) => (
                <div key={s.num} className="relative rounded-xl border border-[#F2F2F2] p-4">
                  <span className="text-[18px] font-bold text-[#6D00CC]">{s.num}</span>
                  <h3 className="text-[13px] font-semibold text-[#111] mt-2 mb-1">{s.title}</h3>
                  <p className="text-[11px] text-[#777] leading-[1.5]">{s.desc}</p>
                  {i < 3 && <div className="hidden md:block absolute -right-[9px] top-1/2 -translate-y-1/2 z-10 text-[#DDD]"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M2 1L6 4L2 7" fill="currentColor" /></svg></div>}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 7. Le prerequis : la Fondation Data ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Prerequis</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">L&apos;IA multiplie ce que vous avez construit</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Le deploiement IA necessite une base CRM propre, des KPIs alignes et des process documentes. Si ce n&apos;est pas encore le cas, on commence par la.</p>
          </div>
          <Link href="/fondation-data" className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all max-w-[500px] mx-auto">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-3 h-3 rounded-sm bg-[#FF7A59]" />
              <h3 className="text-[14px] font-semibold text-[#111]">Fondation Data</h3>
            </div>
            <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Nettoyage CRM, deduplication, standardisation, enrichissement et gouvernance des donnees. Le socle sur lequel l&apos;IA peut operer.</p>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5EFC]">
              Decouvrir la Fondation Data
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </Link>
        </section>
        <Connector />

        {/* ───── 8. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes</h2>
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

        {/* ───── 9. CTA ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a deployer l&apos;IA dans vos operations ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On identifie vos premiers agents IA en 30 minutes. Audit gratuit, sans engagement.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Deployer l&apos;IA dans mes operations
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
