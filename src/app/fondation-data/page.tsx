"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const whyFondation = [
  { title: "40% de votre base est obsolete", desc: "Contacts qui ont change de poste, emails invalides, champs vides. La degradation est naturelle : 30% par an. Sans maintenance active, votre CRM se degrade mecaniquement.", color: "#EF4444" },
  { title: "L\u2019IA multiplie par zero sans donnees propres", desc: "Un scoring IA entraine sur des donnees incoherentes produit des scores incoherents. Un enrichissement automatique sur une base avec 25% de doublons cree plus de confusion. La qualite de la donnee determine le resultat de l\u2019IA.", color: "#F97316" },
  { title: "Aucune source unique de verite", desc: "Le MRR dit un chiffre dans le CRM, un autre dans l\u2019outil de facturation, un autre dans le fichier Excel du DAF. Sans reconciliation, personne ne fait confiance aux chiffres.", color: "#4B5EFC" },
  { title: "Conventions differentes par equipe", desc: "\u2018France\u2019, \u2018FR\u2019, \u2018fra\u2019, \u2018FRANCE\u2019 dans le meme champ. \u2018PDG\u2019, \u2018CEO\u2019, \u2018DG\u2019 pour le meme poste. Chaque silo a ses propres conventions. Impossible de filtrer, segmenter ou automatiser.", color: "#6C5CE7" },
  { title: "Champs vides = contacts invisibles", desc: "Un contact sans industrie est exclu de toute segmentation. Un deal sans montant fausse le forecast. Les champs vides ne sont pas neutres pour l\u2019IA, ils sont toxiques.", color: "#EAB308" },
  { title: "Le nettoyage ponctuel ne suffit pas", desc: "On nettoie la base une fois par an. 3 mois plus tard, c\u2019est reparti. Le nettoyage sans gouvernance, c\u2019est un regime sans changement d\u2019habitudes. Il faut un systeme permanent.", color: "#22C55E" },
];

const chantiers = [
  { title: "Deduplication", desc: "Analyse des contacts par fuzzy matching multi-criteres : nom, email, domaine, entreprise, poste. Score de confiance 0-100 pour chaque paire detectee. 3 niveaux : fusionner (> 90%), verifier (50-90%), ignorer (< 50%). Aucune fusion automatique sans votre validation.", color: "#EF4444", icon: "D" },
  { title: "Standardisation", desc: "Conversion de chaque champ en format exploitable par une machine. Pays en ISO 3166, telephones en E.164, industries en liste fermee, deal stages en enums avec criteres de passage. Ce qui permet a l\u2019IA de segmenter, filtrer et automatiser.", color: "#F97316", icon: "S" },
  { title: "Enrichissement", desc: "Les champs vides sont completes via l\u2019IA : taille d\u2019entreprise, secteur, technos utilisees, seniorite, langue. Chaque fiche devient exploitable pour le scoring et la segmentation. Enrichissement automatique a la creation de chaque nouveau contact.", color: "#22C55E", icon: "E" },
  { title: "Gouvernance", desc: "Champs obligatoires sur les formulaires. Validation rules en temps reel. Workflows de standardisation automatique a la creation. Audit mensuel automatise. Alertes sur les anomalies. La base ne se re-degrade plus.", color: "#4B5EFC", icon: "G" },
];

const silos = [
  {
    name: "Marketing",
    color: "#FF7A59",
    kpis: ["Cout d\u2019acquisition client (CAC)", "Taux de conversion MQL \u2192 SQL", "Attribution par canal", "Pipeline genere par le marketing"],
  },
  {
    name: "Sales",
    color: "#6D00CC",
    kpis: ["Taux de conversion par etape", "Duree du cycle de vente", "Win rate par segment", "Forecast accuracy"],
  },
  {
    name: "CS",
    color: "#22C55E",
    kpis: ["Net Revenue Retention", "Taux de churn", "Time to value", "Health score moyen"],
  },
  {
    name: "Finance",
    color: "#4B5EFC",
    kpis: ["MRR/ARR reconcilie", "CAC payback period", "LTV/CAC ratio", "Revenue par employe"],
  },
];

const deliverables = [
  { title: "Base CRM propre", desc: "Doublons fusionnes, champs standardises, contacts obsoletes archives. Chaque fiche est exploitable.", color: "#FF7A59" },
  { title: "Flux de donnees unifies", desc: "Cartographie de votre stack avec les connexions verifiees. Source unique de verite identifiee et configuree.", color: "#4B5EFC" },
  { title: "Enrichissement IA en place", desc: "Chaque nouveau contact est enrichi automatiquement a la creation. Les fiches existantes sont completees.", color: "#6C5CE7" },
  { title: "Gouvernance operationnelle", desc: "Champs obligatoires, validation rules, workflows de standardisation, audit mensuel automatise.", color: "#22C55E" },
  { title: "Dashboards KPIs par silo", desc: "4 dashboards operationnels configures dans votre CRM. Un par silo. Les KPIs sont definis et mesures.", color: "#EAB308" },
  { title: "Documentation et formation", desc: "Documentation complete du nouveau systeme. Session de formation de 0.5 jour avec vos equipes.", color: "#D4A27F" },
];

const faqItems = [
  { q: "Combien de temps dure la Fondation Data ?", a: "4 a 6 semaines selon la taille de votre base et le nombre d\u2019outils connectes. On commence par un diagnostic de 1 semaine, puis le nettoyage et la mise en place de la gouvernance." },
  { q: "Ca fonctionne avec quel CRM ?", a: "HubSpot, Salesforce, Pipedrive. On s\u2019adapte a votre CRM existant. Pas besoin de migrer." },
  { q: "Est-ce qu\u2019on a besoin de licences supplementaires ?", a: "Non. On utilise l\u2019IA pour l\u2019enrichissement et l\u2019analyse, sans licence supplementaire a votre charge. Si vous avez deja Apollo ou un outil d\u2019enrichissement, on l\u2019utilise." },
  { q: "Qu\u2019est-ce qui se passe si on ne fait pas la Fondation Data avant de deployer l\u2019IA ?", a: "L\u2019IA produit des resultats incoherents. Scoring faux, segmentation approximative, enrichissement qui cree des doublons. C\u2019est comme construire un etage sur des fondations bancales." },
  { q: "Est-ce que la base se re-degrade apres ?", a: "Pas avec la gouvernance en place. On configure des champs obligatoires, des workflows de standardisation automatique, et un audit mensuel automatise. La base reste propre." },
  { q: "Combien de doublons trouve-t-on en general ?", a: "Entre 15% et 25% de la base. Sur 10 000 contacts, ca fait 1 500 a 2 500 doublons. Certains sont evidents, d\u2019autres sont des doublons caches (meme personne, orthographe differente)." },
  { q: "Est-ce que vous supprimez des contacts ?", a: "Jamais sans validation. On identifie, on flagge, on recommande. Chaque fusion ou archivage est valide par votre equipe. Zero action destructive en automatique." },
  { q: "C\u2019est quoi la difference avec un simple nettoyage de base ?", a: "Un nettoyage ponctuel nettoie. La Fondation Data nettoie + standardise + enrichit + met en place la gouvernance + definit les KPIs. C\u2019est un systeme complet, pas une action ponctuelle." },
  { q: "Est-ce que les equipes doivent etre impliquees ?", a: "Un representant par silo pour les interviews initiales (30 min chacun). Puis une session de formation de 0.5 jour a la livraison. Le gros du travail est fait par notre equipe." },
  { q: "Quel est le prix de la Fondation Data ?", a: "A partir de 3 000 EUR pour une PME avec un CRM standard. Le tarif depend de la taille de la base, du nombre d\u2019outils et de la complexite. On cadre le budget lors d\u2019un appel de 30 minutes." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Fondation Data",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Nettoyage CRM, deduplication, standardisation, enrichissement IA et gouvernance des donnees. Definition des KPIs par silo. Le prerequis a toute initiative IA. A partir de 3 000 EUR.",
      serviceType: "Data Foundation",
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

export default function FondationDataPage() {
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
            <li className="text-[#111] font-medium">Fondation Data</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Fondation Data</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Fondation Data : des donnees propres, des KPIs alignes, une base prete pour l&apos;IA
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            On nettoie votre base CRM, unifie les flux de donnees entre vos outils et definit les KPIs par silo. C&apos;est la fondation sur laquelle l&apos;IA peut operer. Sans ca, rien ne tient.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            40% des donnees CRM sont obsoletes en moyenne. 15 a 25% de doublons. Des conventions differentes par equipe. La Fondation Data resout ces problemes en 4 a 6 semaines.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">4</div>
              <p className="text-[11px] text-[#999]">chantiers data</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">30</div>
              <p className="text-[11px] text-[#999]">points de controle</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">4-6 sem</div>
              <p className="text-[11px] text-[#999]">delai</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Lancer ma Fondation Data
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Pourquoi la Fondation Data est un prerequis ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Le constat</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Pourquoi la Fondation Data est un prerequis</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Deployer l&apos;IA sur des donnees degradees, c&apos;est multiplier les erreurs par la vitesse. Voici les signaux qui montrent que votre base a besoin d&apos;une fondation.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyFondation.map((item) => (
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

        {/* ───── 3. Les 4 chantiers de la Fondation Data ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Notre methode</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">4 chantiers. Dans cet ordre.</h2>
              <p className="text-[13px] text-white/40">Chaque chantier conditionne le suivant. On ne peut pas enrichir sans avoir dedoublonne. On ne peut pas gouverner sans avoir standardise.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {chantiers.map((cat) => (
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

        {/* ───── 4. Les KPIs qu'on definit par silo ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>KPIs</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Definir ce qu&apos;on mesure avant de mesurer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {silos.map((silo) => (
              <div key={silo.name} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: silo.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{silo.name}</h3>
                </div>
                <ul className="space-y-1.5">
                  {silo.kpis.map((kpi) => (
                    <li key={kpi} className="flex items-center gap-2 text-[12px] text-[#777]">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0" style={{ color: silo.color }}><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {kpi}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-[#999] text-center max-w-[560px] mx-auto">Ces KPIs sont configures dans votre CRM avec des dashboards operationnels. Chaque equipe sait ce qu&apos;elle mesure et comment elle performe.</p>
        </section>
        <Connector />

        {/* ───── 5. Ce qui change concretement ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Resultats</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Avant et apres la Fondation Data</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] text-center">
              <h3 className="text-[13px] font-semibold text-[#111] mb-3">Contacts exploitables</h3>
              <div className="flex items-center justify-center gap-3">
                <div>
                  <div className="text-[22px] font-bold text-[#EF4444]">~40%</div>
                  <p className="text-[10px] text-[#999]">Avant</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#999]"><path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <div className="text-[22px] font-bold text-[#22C55E]">~85%</div>
                  <p className="text-[10px] text-[#999]">Apres</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] text-center">
              <h3 className="text-[13px] font-semibold text-[#111] mb-3">Doublons</h3>
              <div className="flex items-center justify-center gap-3">
                <div>
                  <div className="text-[22px] font-bold text-[#EF4444]">15-25%</div>
                  <p className="text-[10px] text-[#999]">Avant</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#999]"><path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <div className="text-[22px] font-bold text-[#22C55E]">&lt; 3%</div>
                  <p className="text-[10px] text-[#999]">Apres</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] text-center">
              <h3 className="text-[13px] font-semibold text-[#111] mb-3">Temps de reporting</h3>
              <div className="flex items-center justify-center gap-3">
                <div>
                  <div className="text-[22px] font-bold text-[#EF4444]">3h/sem</div>
                  <p className="text-[10px] text-[#999]">Avant</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#999]"><path d="M4 8h8M9 5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <div>
                  <div className="text-[22px] font-bold text-[#22C55E]">30 min</div>
                  <p className="text-[10px] text-[#999]">Apres</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-8">
            <p className="text-[13px] text-[#555] leading-[1.75] text-center max-w-[600px] mx-auto">
              L&apos;IA est un coefficient multiplicateur. Fondation a 8/10 x IA = 80. Fondation a 2/10 x IA = 20. Le meme outil, le meme budget, des resultats radicalement differents. La Fondation Data fait passer votre multiplicande de 2 a 8.
            </p>
          </div>
        </section>
        <Connector />

        {/* ───── 6. Les livrables ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Livrables</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ce que vous recevez</h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">Chaque Fondation Data produit 6 livrables concrets et actionnables.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {deliverables.map((d) => (
              <div key={d.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: d.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{d.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 7. Et apres la Fondation Data ? ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>La suite</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">La Fondation Data ouvre la porte a l&apos;IA</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Une fois la base propre et les KPIs definis, voici les deux etapes suivantes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/agents-ia" className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3 h-3 rounded-sm bg-[#6D00CC]" />
                <h3 className="text-[14px] font-semibold text-[#111]">Deploiement IA</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Une fois la base propre, on deploie des agents IA silo par silo : scoring, enrichissement continu, reporting automatise, detection de churn.</p>
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
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Un expert RevOps & IA integre a votre equipe chaque mois. Iteration, nouvelles briques, formation, veille technologique.</p>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5EFC]">
                Decouvrir le RevOps Part-Time
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
            </Link>
          </div>
        </section>
        <Connector />

        {/* ───── 8. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur la Fondation Data</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a poser les fondations ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On cadre le perimetre en 30 minutes. Diagnostic gratuit, devis au forfait sous 48h.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Lancer ma Fondation Data
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
