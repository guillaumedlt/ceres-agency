"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const whyLeave = [
  { title: "Complexite inutile", desc: "Dynamics 365 necessite des developpeurs certifies pour la moindre modification. Ajouter un champ, creer un workflow, changer une vue : tout passe par du code ou un consultant Microsoft a 1 500 EUR/jour.", color: "#EF4444" },
  { title: "Cout cache explosif", desc: "La licence Dynamics semble abordable, mais ajoutez les modules, les connecteurs Power Platform, les developpements custom et la maintenance. Le TCO reel depasse souvent 3x le prix affiche.", color: "#F97316" },
  { title: "Adoption catastrophique", desc: "Interface datee, navigation peu intuitive, trop de clics pour une action simple. Le taux d\u2019adoption reel de Dynamics tourne autour de 35% dans les equipes commerciales.", color: "#EAB308" },
  { title: "Silos entre equipes", desc: "Marketing utilise Dynamics Marketing, Sales utilise Dynamics Sales, CS utilise un autre module. Trois interfaces differentes, trois logiques differentes, zero alignement.", color: "#8B5CF6" },
  { title: "Reporting limite", desc: "Les dashboards natifs de Dynamics sont rigides. Pour un reporting correct, il faut Power BI, ce qui ajoute un outil, une licence et une competence supplementaires.", color: "#6366F1" },
  { title: "Pas d\u2019IA native utile", desc: "Copilot dans Dynamics reste superficiel. HubSpot integre Breeze nativement dans chaque Hub avec des cas d\u2019usage concrets : scoring, resume, redaction, forecasting.", color: "#EC4899" },
];

const comparison = [
  { criteria: "Interface utilisateur", dynamics: "Complexe, courbe d\u2019apprentissage longue", hubspot: "Intuitive, adoption en quelques jours" },
  { criteria: "Cout moyen / utilisateur / an", dynamics: "1 500 - 3 000 EUR (avec modules)", hubspot: "800 - 1 500 EUR (tout inclus)" },
  { criteria: "Personnalisation", dynamics: "Code C# / JavaScript necessaire", hubspot: "No-code, drag & drop" },
  { criteria: "Automatisations", dynamics: "Power Automate (complexe)", hubspot: "Workflows visuels natifs" },
  { criteria: "Reporting", dynamics: "Power BI requis", hubspot: "Dashboards natifs + custom reports" },
  { criteria: "Marketing integre", dynamics: "Module separe (Dynamics Marketing)", hubspot: "Marketing Hub integre nativement" },
  { criteria: "IA", dynamics: "Copilot (basique)", hubspot: "Breeze IA dans chaque Hub" },
  { criteria: "Integrabilite", dynamics: "Ecosysteme Microsoft principalement", hubspot: "1 500+ integrations natives" },
  { criteria: "Temps de deploiement", dynamics: "3 a 6 mois minimum", hubspot: "2 a 6 semaines" },
  { criteria: "Support", dynamics: "Via partenaire Microsoft", hubspot: "Support direct + communaute active" },
];

const methodology = [
  { num: "01", title: "Audit Dynamics", desc: "On cartographie votre instance Dynamics : objets, champs personnalises, workflows, integrations, volumes de donnees. On identifie ce qu\u2019il faut migrer, ce qu\u2019il faut abandonner et ce qu\u2019il faut restructurer.", duration: "Semaine 1", color: "#FF7A59" },
  { num: "02", title: "Mapping & Architecture", desc: "On dessine l\u2019architecture cible dans HubSpot. Chaque objet Dynamics est mappe vers son equivalent HubSpot. Les champs sont rationalises, les doublons elimines, les proprietes inutiles supprimees.", duration: "Semaine 2", color: "#4B5EFC" },
  { num: "03", title: "Migration des donnees", desc: "Migration par lots avec verification a chaque etape. Contacts, entreprises, deals, tickets, historique d\u2019activites, pieces jointes. Chaque lot est valide avant de passer au suivant.", duration: "Semaine 3-4", color: "#6C5CE7" },
  { num: "04", title: "Configuration HubSpot", desc: "Pipelines, vues, automatisations, lead scoring, dashboards. HubSpot est configure selon vos process, pas l\u2019inverse. Les workflows Dynamics sont reconstruits en natif HubSpot.", duration: "Semaine 4-5", color: "#6D00CC" },
  { num: "05", title: "Double-run securise", desc: "Pendant 1 a 2 semaines, les deux systemes fonctionnent en parallele. Vos equipes utilisent HubSpot pour le quotidien pendant que Dynamics reste accessible en lecture. Zero risque.", duration: "Semaine 5-6", color: "#D4A27F" },
  { num: "06", title: "Formation & Go Live", desc: "Formation adaptee a chaque profil (Sales, Marketing, CS, Management). Documentation des process. Coupure definitive de Dynamics. Support post-migration pendant 30 jours.", duration: "Semaine 6-8", color: "#22C55E" },
];

const whatWeMigrate = [
  { title: "Contacts & Entreprises", desc: "Toutes les fiches contacts et comptes avec l\u2019historique complet des interactions, notes, emails et appels.", count: "100%", color: "#FF7A59" },
  { title: "Deals & Opportunites", desc: "Pipeline complet avec montants, etapes, dates de fermeture, probabilites et historique des mouvements entre stages.", count: "100%", color: "#4B5EFC" },
  { title: "Activites & Historique", desc: "Emails, appels, reunions, notes, taches. Tout l\u2019historique d\u2019activite est preserve et associe aux bons enregistrements.", count: "100%", color: "#6C5CE7" },
  { title: "Workflows & Automatisations", desc: "Les workflows Dynamics sont analyses, optimises et reconstruits nativement dans HubSpot. Pas de copie a l\u2019identique, on ameliore.", count: "Optimise", color: "#6D00CC" },
  { title: "Rapports & Dashboards", desc: "Les KPIs suivis dans Dynamics/Power BI sont recrees dans les dashboards HubSpot avec les memes metriques, en mieux.", count: "Ameliore", color: "#D4A27F" },
  { title: "Pieces jointes", desc: "Documents, devis, contrats attaches aux deals et contacts. Tout est migre et re-associe dans HubSpot.", count: "100%", color: "#22C55E" },
];

const faqItems = [
  { q: "Combien de temps dure une migration Dynamics vers HubSpot ?", a: "Entre 4 et 8 semaines selon le volume de donnees et la complexite de votre instance Dynamics. Pour une PME avec 10 000 contacts, comptez 4-5 semaines. Pour un grand compte avec 50 000+ contacts et des integrations complexes, 6-8 semaines." },
  { q: "Est-ce qu\u2019on perd des donnees pendant la migration ?", a: "Non. Notre methodologie par lots avec verification systematique garantit zero perte de donnees. Chaque lot est valide avant de passer au suivant. Le cas TotalEnergies (45 000 contacts) a ete migre avec 0% de perte." },
  { q: "Quel est le cout d\u2019une migration Dynamics vers HubSpot ?", a: "Le cout depend du volume de donnees, du nombre d\u2019integrations a reconstruire et de la complexite de vos workflows. On cadre tout ca lors d\u2019un appel gratuit de 30 minutes. Le budget moyen se situe entre 8 000 et 25 000 EUR." },
  { q: "Faut-il arreter Dynamics pendant la migration ?", a: "Non. On fonctionne en double-run pendant 1 a 2 semaines. Vos equipes commencent a utiliser HubSpot pendant que Dynamics reste accessible en lecture seule. La transition est progressive et sans interruption." },
  { q: "Peut-on migrer les workflows Power Automate ?", a: "Oui, mais on ne fait pas un copier-coller. On analyse chaque workflow, on identifie ceux qui sont reellement utilises, et on les reconstruit nativement dans HubSpot en les optimisant. Souvent, 3 workflows Dynamics deviennent 1 workflow HubSpot." },
  { q: "Et nos integrations avec les autres outils Microsoft ?", a: "HubSpot s\u2019integre nativement avec Outlook, Teams, SharePoint et Office 365. Pour les integrations specifiques (ERP Microsoft, Power BI), on met en place des connecteurs via Make ou l\u2019API HubSpot." },
  { q: "Nos commerciaux vont-ils retrouver leurs reperes ?", a: "HubSpot est beaucoup plus intuitif que Dynamics. La formation prend 2 a 3 heures par profil. Le taux d\u2019adoption post-migration depasse systematiquement 90%, contre 35% en moyenne sur Dynamics." },
  { q: "Que se passe-t-il apres la migration ?", a: "On reste disponible pendant 30 jours post go-live pour le support. Si vous souhaitez un accompagnement continu (optimisation, nouveaux workflows, IA), on propose du RevOps Part-Time mensuel." },
  { q: "On a des objets custom dans Dynamics, c\u2019est migrable ?", a: "Oui. HubSpot permet de creer des objets personnalises. On mappe vos objets custom Dynamics vers des custom objects HubSpot ou vers les objets standards si c\u2019est plus pertinent." },
  { q: "Pourquoi choisir Ceres plutot qu\u2019un partenaire Microsoft ?", a: "Un partenaire Microsoft va vous proposer de rester sur Dynamics. Nous, on est agnostiques et specialises en migration CRM. On a migre +100 instances, dont des grands comptes comme TotalEnergies. On connait les pieges et on sait les eviter." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Migration Dynamics vers HubSpot",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Migration complete de Microsoft Dynamics 365 vers HubSpot. Contacts, deals, workflows, integrations. Zero perte de donnees.",
      serviceType: "CRM Migration",
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

export default function MigrationDynamicsHubSpotPage() {
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
            <li className="text-[#111] font-medium">Migration Dynamics</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Migration CRM</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Migration Dynamics 365 vers HubSpot
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Quittez Microsoft Dynamics sans perdre une seule donnee. On migre vos contacts, deals, workflows et historique complet vers HubSpot en 4 a 8 semaines.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            La migration Dynamics HubSpot est notre specialite. Plus de 100 migrations CRM realisees, dont des grands comptes avec 45 000+ contacts. Methodologie eprouvee, zero interruption d&apos;activite.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">45K</div>
              <p className="text-[11px] text-[#999]">contacts migres (TotalEnergies)</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">0%</div>
              <p className="text-[11px] text-[#999]">perte de donnees</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">4-8 sem</div>
              <p className="text-[11px] text-[#999]">duree moyenne</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Planifier ma migration
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Pourquoi quitter Dynamics ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Le constat</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Pourquoi les entreprises quittent Dynamics 365</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Dynamics est puissant sur le papier. En pratique, c&apos;est une autre histoire. Voici ce qu&apos;on entend chaque semaine de la part d&apos;entreprises qui veulent migrer de Dynamics vers HubSpot.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyLeave.map((item) => (
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

        {/* ───── 3. Tableau comparatif ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Comparatif</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Dynamics 365 vs HubSpot : comparaison detaillee</h2>
              <p className="text-[13px] text-[#999] mt-2">Point par point, voici pourquoi la migration Dynamics HubSpot a du sens pour la majorite des entreprises.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4 w-[25%]">Critere</th>
                    <th className="text-[12px] font-semibold text-[#999] pb-3 pr-4 w-[37.5%]">Dynamics 365</th>
                    <th className="text-[12px] font-semibold text-[#FF7A59] pb-3 w-[37.5%]">HubSpot</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.criteria} className="border-b border-[#F5F5F5]">
                      <td className="text-[12px] font-medium text-[#111] py-3 pr-4">{row.criteria}</td>
                      <td className="text-[11px] text-[#999] py-3 pr-4">{row.dynamics}</td>
                      <td className="text-[11px] text-[#555] py-3">{row.hubspot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 4. Methodologie ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Methodologie</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">6 etapes pour une migration Dynamics HubSpot reussie</h2>
              <p className="text-[13px] text-white/40">Notre processus eprouve sur +100 migrations CRM. Chaque etape est validee avant de passer a la suivante.</p>
            </div>
            <div className="space-y-3">
              {methodology.map((step) => (
                <div key={step.num} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: step.color + "20", color: step.color }}>{step.num}</span>
                    <h3 className="text-[14px] font-semibold text-white">{step.title}</h3>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/10 text-white/50 ml-auto">{step.duration}</span>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.65]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 5. Ce qu'on migre ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Perimetre</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ce qu&apos;on migre de Dynamics vers HubSpot</h2>
            <p className="text-[13px] text-[#999] max-w-[480px] mx-auto">Tout votre patrimoine de donnees est preserve. Rien n&apos;est laisse dans Dynamics.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whatWeMigrate.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <h3 className="text-[14px] font-semibold text-[#111]">{item.title}</h3>
                  </div>
                  <span className="text-[11px] font-bold" style={{ color: item.color }}>{item.count}</span>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 6. Cas client TotalEnergies ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Cas client</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">TotalEnergies : 45 000 contacts migres, 0 perte</h2>
              <p className="text-[13px] text-[#999] mt-2">Migration complete de Microsoft Dynamics 365 vers HubSpot pour une business unit de TotalEnergies. Le projet le plus ambitieux de notre portfolio.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-4 rounded-xl bg-[#FAFAFA]">
                <div className="text-[24px] font-bold text-[#FF7A59] tracking-[-0.02em]">45 000</div>
                <p className="text-[11px] text-[#999]">contacts migres</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-[#FAFAFA]">
                <div className="text-[24px] font-bold text-[#22C55E] tracking-[-0.02em]">0%</div>
                <p className="text-[11px] text-[#999]">perte de donnees</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-[#FAFAFA]">
                <div className="text-[24px] font-bold text-[#4B5EFC] tracking-[-0.02em]">6 sem</div>
                <p className="text-[11px] text-[#999]">duree du projet</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-[#FAFAFA]">
                <div className="text-[24px] font-bold text-[#6C5CE7] tracking-[-0.02em]">95%</div>
                <p className="text-[11px] text-[#999]">adoption J+30</p>
              </div>
            </div>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA]">
                <div className="w-2 h-2 rounded-sm bg-[#FF7A59] mt-1 shrink-0" />
                <div>
                  <h4 className="text-[13px] font-semibold text-[#111] mb-0.5">Contexte</h4>
                  <p className="text-[12px] text-[#777] leading-[1.6]">Business unit avec 45 000 contacts, 12 000 entreprises et 8 000 deals dans Dynamics 365. Workflows Power Automate complexes, integrations avec SAP et des outils internes.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA]">
                <div className="w-2 h-2 rounded-sm bg-[#4B5EFC] mt-1 shrink-0" />
                <div>
                  <h4 className="text-[13px] font-semibold text-[#111] mb-0.5">Approche</h4>
                  <p className="text-[12px] text-[#777] leading-[1.6]">Migration par lots de 5 000 contacts avec verification automatisee a chaque etape. Double-run de 2 semaines. Formation de 120 utilisateurs en 3 sessions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA]">
                <div className="w-2 h-2 rounded-sm bg-[#22C55E] mt-1 shrink-0" />
                <div>
                  <h4 className="text-[13px] font-semibold text-[#111] mb-0.5">Resultat</h4>
                  <p className="text-[12px] text-[#777] leading-[1.6]">Zero perte de donnees. Adoption a 95% en 30 jours (vs 35% sur Dynamics). Cout annuel CRM reduit de 40%. 25 workflows automatises des le premier mois.</p>
                </div>
              </div>
            </div>
            <Link href="/cas-clients/totalenergies" className="inline-flex items-center gap-2 text-[12px] font-medium text-[#4B5EFC] hover:text-[#3B4EEC] transition-colors">
              Lire le cas client complet
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </section>
        <Connector />

        {/* ───── 7. Timeline & Budget ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Planning</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Timeline et budget d&apos;une migration Dynamics HubSpot</h2>
              <p className="text-[13px] text-[#999] mt-2">Chaque migration est differente. Voici les grandes lignes selon la taille de votre instance.</p>
            </div>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4">Taille</th>
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4">Contacts</th>
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4">Duree</th>
                    <th className="text-[12px] font-semibold text-[#111] pb-3">Budget indicatif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#F5F5F5]">
                    <td className="text-[12px] text-[#555] py-3 pr-4">PME</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">Jusqu&apos;a 10 000</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">4-5 semaines</td>
                    <td className="text-[12px] font-medium text-[#111] py-3">8 000 - 15 000 EUR</td>
                  </tr>
                  <tr className="border-b border-[#F5F5F5]">
                    <td className="text-[12px] text-[#555] py-3 pr-4">ETI</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">10 000 - 50 000</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">5-7 semaines</td>
                    <td className="text-[12px] font-medium text-[#111] py-3">15 000 - 25 000 EUR</td>
                  </tr>
                  <tr>
                    <td className="text-[12px] text-[#555] py-3 pr-4">Grand Groupe</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">50 000+</td>
                    <td className="text-[12px] text-[#777] py-3 pr-4">6-8 semaines</td>
                    <td className="text-[12px] font-medium text-[#111] py-3">25 000 - 40 000 EUR</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[12px] text-[#999] leading-[1.6]">Ces budgets incluent l&apos;audit Dynamics, le mapping, la migration des donnees, la configuration HubSpot, la formation et 30 jours de support post go-live. L&apos;appel de cadrage est gratuit et sans engagement.</p>
          </div>
        </section>
        <Connector />

        {/* ───── 8. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur la migration Dynamics vers HubSpot</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a quitter Dynamics 365 ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On cadre votre migration Dynamics vers HubSpot en 30 minutes. Audit gratuit, planning et budget estimes.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Planifier ma migration
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
