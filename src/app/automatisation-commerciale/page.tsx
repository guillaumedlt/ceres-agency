"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── DATA ─── */

const definitionPoints = [
  { title: "Eliminer les taches repetitives", desc: "Un commercial passe en moyenne 65% de son temps sur des taches non-commerciales : saisie de donnees, relances manuelles, creation de rapports, recherche d\u2019informations. L\u2019automatisation cible ces taches pour redonner du temps de vente pur.", color: "#FF7A59" },
  { title: "Standardiser les processus", desc: "Sans automatisation, chaque commercial a sa propre methode de qualification, de relance, de reporting. Le resultat : des donnees inconsistantes, des leads qui tombent dans les trous, et un pipeline impossible a piloter. L\u2019automatisation cree un processus commun sans rigidite.", color: "#4B5EFC" },
  { title: "Accelerer le cycle de vente", desc: "Chaque jour de retard dans une relance, une qualification ou un envoi de devis est un jour ou le prospect se refroidit. L\u2019automatisation garantit que chaque action se declenche au bon moment, sans delai humain.", color: "#22C55E" },
];

const tachesAutomatiser = [
  { num: "01", title: "Attribution des leads", desc: "Des qu\u2019un lead entre dans le CRM (formulaire, import, enrichissement), il est automatiquement attribue au bon commercial selon des regles predefinies : territoire, taille d\u2019entreprise, source, langue. Fini le dispatching manuel, les leads oublies et les conflits de territoire. Temps de reponse : de 24h a moins de 5 minutes.", impact: "Temps de reponse divise par 50", color: "#FF7A59" },
  { num: "02", title: "Relances automatiques", desc: "Un prospect ne repond pas apres un appel ? Un email de relance part automatiquement J+2, J+5, J+10. Le contenu est personnalise selon le contexte (secteur, taille, derniere interaction). Le commercial n\u2019a plus besoin de se souvenir de relancer : le systeme gere les sequences et le commercial intervient uniquement quand le prospect repond.", impact: "Taux de reponse +35%", color: "#F59E0B" },
  { num: "03", title: "Notifications et alertes", desc: "Un prospect visite la page pricing ? Le commercial recoit une notification instantanee. Un deal est bloque depuis 14 jours dans un stage ? Le manager est alerte. Un contrat arrive a echeance dans 30 jours ? L\u2019account manager est prevenu. Les bonnes informations arrivent aux bonnes personnes au bon moment.", impact: "Zero opportunite manquee", color: "#4B5EFC" },
  { num: "04", title: "Lead scoring automatique", desc: "Chaque interaction (visite site, ouverture email, telechargement, formulaire) et chaque attribut demographique (taille, secteur, poste) ajoute ou retire des points au score du lead. Quand le score atteint le seuil, le lead passe automatiquement en MQL et est attribue a un commercial. Plus de qualification subjective.", impact: "Taux de conversion MQL-SQL +40%", color: "#6D00CC" },
  { num: "05", title: "Reporting automatise", desc: "Les rapports quotidiens, hebdomadaires et mensuels sont generes et envoyes automatiquement par email aux managers. Pipeline velocity, taux de conversion par stage, activite par commercial, forecast : tout est calcule en temps reel. Fini les vendredis apres-midi a compiler des chiffres dans Excel.", impact: "5h/semaine de reporting eliminee", color: "#6C5CE7" },
  { num: "06", title: "Enrichissement de donnees", desc: "Quand un nouveau contact est cree avec juste un email, son profil est automatiquement enrichi : nom de l\u2019entreprise, taille, secteur, chiffre d\u2019affaires, profil LinkedIn. Les outils d\u2019enrichissement (Clearbit, Apollo, Dropcontact) alimentent HubSpot sans intervention humaine. Les commerciaux arrivent en rendez-vous avec un dossier complet.", impact: "Donnees completes a 95%", color: "#22C55E" },
  { num: "07", title: "Onboarding client", desc: "Un deal est marque comme gagne ? Le workflow d\u2019onboarding se declenche automatiquement : email de bienvenue, creation du ticket onboarding, assignation du CSM, planification du kick-off, envoi des documents. Le client est pris en charge en moins d\u2019une heure, sans action manuelle.", impact: "Time-to-onboard divise par 3", color: "#D4A27F" },
  { num: "08", title: "Generation et envoi de devis", desc: "Le commercial remplit les lignes produit dans le deal, et le devis est genere automatiquement avec le bon template, les bonnes conditions, les bons tarifs. Envoi en un clic avec signature electronique integree. Plus de devis faits a la main dans Word avec des erreurs de prix.", impact: "Temps de creation devis : 2 min vs 45 min", color: "#FF7A59" },
  { num: "09", title: "Lead nurturing", desc: "Les leads qui ne sont pas prets a acheter entrent dans des sequences de nurturing automatisees : contenu educatif, case studies, invitations webinar. Le contenu s\u2019adapte au secteur, au poste et au stade du parcours. Quand le lead revient sur le site et interagit, le scoring remonte et le commercial est alerte.", impact: "30% des MQL issus du nurturing", color: "#4B5EFC" },
  { num: "10", title: "Forecasting et pipeline management", desc: "Les probabilites de closing sont calculees automatiquement en fonction du stage, de l\u2019anciennete du deal, du score du contact et de l\u2019historique de l\u2019equipe. Le forecast est mis a jour en temps reel. Les deals a risque (bloquees, sans activite recente) sont identifies et signales automatiquement.", impact: "Precision du forecast +25%", color: "#6D00CC" },
];

const deploymentSteps = [
  { num: "01", title: "Audit des processus actuels", desc: "On cartographie vos processus commerciaux tels qu\u2019ils sont aujourd\u2019hui : de la generation de leads a la signature, en passant par la qualification, le nurturing et le reporting. On identifie les goulots d\u2019etranglement, les taches manuelles repetitives et les etapes ou des leads sont perdus.", color: "#FF7A59" },
  { num: "02", title: "Design des automatisations", desc: "On definit ensemble quelles automatisations deployer en priorite (impact vs complexite). Chaque automatisation est documentee : declencheur, conditions, actions, notifications, mesure de succes. On commence par les quick wins (attribution, relances, notifications) avant d\u2019attaquer les workflows complexes.", color: "#4B5EFC" },
  { num: "03", title: "Configuration et tests", desc: "Construction des workflows dans HubSpot (ou Make/n8n pour les cas cross-application). Chaque workflow est teste avec des donnees reelles avant mise en production. On verifie chaque branche, chaque condition, chaque email. Pas de mise en prod sans validation complete.", color: "#6D00CC" },
  { num: "04", title: "Deploiement progressif", desc: "On deploie les automatisations par vagues : d\u2019abord sur une equipe pilote, puis on etend. Chaque vague est evaluee (adoption, resultats, bugs) avant de passer a la suivante. Cela permet de corriger rapidement et d\u2019adapter les workflows aux retours terrain.", color: "#22C55E" },
  { num: "05", title: "Mesure et optimisation", desc: "Chaque automatisation est monitoree : nombre de declenchements, taux de conversion, temps gagne, erreurs. On optimise en continu : ajustement des seuils de scoring, modification des sequences de relance, ajout de nouvelles branches. L\u2019automatisation n\u2019est jamais \"terminee\".", color: "#6C5CE7" },
];

const toolsComparison = [
  { critere: "Cas d\u2019usage principal", hubspot: "Automatisations CRM internes (attribution, scoring, nurturing, notifications)", make: "Orchestration cross-applications (CRM + ERP + enrichissement + facturation)" },
  { critere: "Interface", hubspot: "Visuelle, drag-and-drop, integree au CRM", make: "Visuelle, plus technique, scenarios multi-etapes" },
  { critere: "Declencheurs", hubspot: "Evenements CRM (creation, modification, propriete, formulaire)", make: "Webhooks, API, crons, evenements de n\u2019importe quelle application" },
  { critere: "Actions", hubspot: "Emails, taches, proprietes, associations, notifications, code custom", make: "Appels API, transformations de donnees, iterations, routeurs, filtres avances" },
  { critere: "Code custom", hubspot: "Custom coded actions (JavaScript/Python) dans les workflows", make: "Modules HTTP, JavaScript, gestion d\u2019erreurs avancee" },
  { critere: "Complexite", hubspot: "Faible a moyenne (configurable par les ops)", make: "Moyenne a elevee (competences techniques necessaires)" },
  { critere: "Prix", hubspot: "Inclus dans les licences Pro/Enterprise", make: "A partir de 9 EUR/mois (Core), 16 EUR/mois (Pro)" },
  { critere: "Quand l\u2019utiliser", hubspot: "Pour tout ce qui touche au CRM et au parcours client", make: "Pour connecter des outils externes ou des logiques cross-application complexes" },
];

const iaAutomatisation = [
  { title: "Agents IA de qualification", desc: "Des agents conversationnels (bases sur Claude ou GPT) qui qualifient les leads entrants en temps reel. Le prospect remplit un formulaire, l\u2019agent IA engage une conversation, pose les bonnes questions de qualification (budget, timeline, decision-maker) et cree un deal dans HubSpot avec toutes les informations. Le commercial recoit un lead qualifie et prepare.", color: "#FF7A59" },
  { title: "Resume de rendez-vous automatise", desc: "L\u2019IA ecoute vos calls de decouverte (via Gong, Fireflies ou HubSpot Conversation Intelligence), extrait les informations cles (besoins, objections, next steps, budget mentionne) et met a jour automatiquement les proprietes du deal dans HubSpot. Le commercial n\u2019a plus besoin de remplir manuellement le CRM apres chaque call.", color: "#4B5EFC" },
  { title: "Scoring predictif", desc: "Au lieu de regles statiques (\"si secteur = SaaS alors +10 points\"), l\u2019IA analyse les patterns des deals gagnes et perdus pour predire la probabilite de conversion de chaque lead. Le modele s\u2019ameliore en continu avec les nouvelles donnees. Plus precis, plus objectif, plus reactif que le scoring rule-based.", color: "#6D00CC" },
  { title: "Generation de contenu commercial", desc: "L\u2019IA genere des emails de prospection personnalises en analysant le profil du prospect, son entreprise et ses interactions. Chaque email est unique et contextuel, pas un template avec des tokens. Les taux d\u2019ouverture et de reponse augmentent significativement par rapport aux sequences classiques.", color: "#22C55E" },
  { title: "Analyse predictive du pipeline", desc: "L\u2019IA identifie les deals a risque avant qu\u2019ils ne soient perdus : signaux faibles (baisse d\u2019engagement, delais anormaux, absence de multi-threading). Elle recommande des actions correctrices (relancer le champion, impliquer un executive sponsor, proposer un POC). Le manager intervient au bon moment.", color: "#6C5CE7" },
];

const caseStudies = [
  { client: "Scale-up SaaS B2B", sector: "45 commerciaux, 3 pays", challenge: "Les commerciaux passaient 3h/jour sur des taches non-commerciales : saisie CRM, reporting, qualification manuelle. Le pipeline n\u2019etait pas fiable car les donnees etaient incompletes.", results: ["+35% de temps de vente pure", "Attribution leads en moins de 2 min (vs 24h)", "Reporting automatise : 5h/semaine economisees", "Forecast precision +30%"], color: "#FF7A59" },
  { client: "ESN / Cabinet de conseil", sector: "80 consultants, 15 commerciaux", challenge: "Les leads entrants n\u2019etaient pas qualifies ni distribues rapidement. Les relances etaient aleatoires. Le scoring etait inexistant. Beaucoup de leads chauds etaient perdus.", results: ["Lead scoring deploye en 3 semaines", "Sequences de relance automatisees", "Taux de conversion MQL-SQL +45%", "Zero lead perdu"], color: "#4B5EFC" },
  { client: "Editeur de logiciel", sector: "Modele PLG + Sales-assisted", challenge: "Des milliers de signups freemium mais pas de processus pour identifier et engager les comptes a potentiel. Les commerciaux contactaient des leads froids au hasard.", results: ["Scoring produit + demographique deploye", "Agent IA de qualification pre-demo", "Pipeline qualifie multiplie par 2.5", "CAC divise par 2"], color: "#6D00CC" },
];

const faqItems = [
  { q: "C\u2019est quoi l\u2019automatisation commerciale exactement ?", a: "C\u2019est l\u2019utilisation de technologies (workflows CRM, iPaaS, IA) pour eliminer les taches manuelles repetitives du processus de vente : attribution de leads, relances, scoring, reporting, enrichissement de donnees. L\u2019objectif est de redonner du temps de vente pur aux commerciaux." },
  { q: "Combien de temps faut-il pour deployer l\u2019automatisation ?", a: "Les premiers quick wins (attribution, relances, notifications) sont deployables en 1-2 semaines. Un systeme complet (scoring + nurturing + reporting + enrichissement) prend 4-8 semaines. On deploie par vagues pour ne pas submerger les equipes." },
  { q: "Faut-il HubSpot Enterprise pour automatiser ?", a: "Non. HubSpot Sales Hub Pro offre deja des workflows puissants, des sequences, et du reporting automatise. L\u2019Enterprise ajoute le predictive scoring, les custom objects, et les custom coded actions. Pour la plupart des equipes, Pro suffit pour demarrer." },
  { q: "L\u2019automatisation va-t-elle remplacer mes commerciaux ?", a: "Non. L\u2019automatisation elimine les taches repetitives (saisie, relances, reporting) pour que vos commerciaux se concentrent sur ce qu\u2019ils font le mieux : la relation humaine, la decouverte, la negociation. Un commercial automatise vend plus, pas moins." },
  { q: "Quelle est la difference entre workflows HubSpot et Make/n8n ?", a: "Les workflows HubSpot gerent les automatisations internes au CRM (attribution, scoring, nurturing). Make/n8n gerent les orchestrations cross-applications (CRM + ERP + enrichissement + facturation). Idealement, on utilise les deux de maniere complementaire." },
  { q: "Comment mesurer le ROI de l\u2019automatisation ?", a: "On mesure le temps economise (heures/semaine de taches eliminees), le taux de conversion (avant/apres), le temps de reponse aux leads, la precision du forecast et le pipeline genere. En moyenne, nos clients constatent un ROI en moins de 3 mois." },
  { q: "L\u2019IA est-elle vraiment utile dans le processus commercial ?", a: "Oui, pour des cas precis : qualification automatique des leads entrants, scoring predictif, resume de rendez-vous, generation d\u2019emails personnalises, identification de deals a risque. L\u2019IA ne remplace pas le commercial mais l\u2019augmente significativement." },
  { q: "Combien coute un projet d\u2019automatisation commerciale ?", a: "De 5 000 a 15 000 EUR selon le perimetre. Quick wins (attribution + relances + notifications) : 5 000-7 000 EUR. Systeme complet (scoring + nurturing + reporting + enrichissement + IA) : 10 000-15 000 EUR. Forfait fixe, pas de regie." },
  { q: "Peut-on automatiser sans CRM ?", a: "Techniquement oui (avec Make, Zapier, des scripts). Mais le CRM est le socle de l\u2019automatisation commerciale car il centralise les donnees clients. Automatiser sans CRM, c\u2019est automatiser du chaos. On recommande toujours de structurer le CRM d\u2019abord." },
  { q: "L\u2019automatisation fonctionne-t-elle pour les ventes complexes / long cycle ?", a: "C\u2019est meme la ou elle est la plus impactante. Sur des cycles de 3-12 mois, les relances automatiques, le nurturing, les alertes de reengagement et le scoring sont critiques pour ne pas perdre des deals qui murissent lentement." },
  { q: "Comment eviter que les automatisations deviennent un spaghetti ?", a: "Documentation systematique (chaque workflow est documente), naming conventions, revue trimestrielle des workflows actifs, mesure du taux de declenchement. On supprime les workflows qui ne se declenchent plus. La gouvernance est cle." },
  { q: "Peut-on automatiser le cold outbound ?", a: "Oui, avec des sequences HubSpot (emails + taches d\u2019appel) et des outils d\u2019enrichissement (Apollo, Dropcontact). Mais l\u2019automatisation du cold outbound doit etre couplee a de la personnalisation (IA ou manuelle) pour etre efficace. Les spray-and-pray automatises ne fonctionnent plus." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Automatisation commerciale", provider: { "@type": "Organization", name: "Ceres" }, description: "Deploiement d\u2019automatisations commerciales : attribution leads, relances, scoring, reporting, enrichissement, nurturing. HubSpot workflows, Make, agents IA.", serviceType: "Sales Automation", areaServed: { "@type": "Country", name: "France" } },
  { "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
]};

/* ─── CHECKMARK SVG ─── */
const Check = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
    <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── PAGE ─── */

export default function AutomatisationCommercialePage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── HERO ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Automatisation</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Automatisation commerciale : liberez vos commerciaux des taches repetitives
          </h1>
          <p className="text-[17px] text-[#666] max-w-[620px] mx-auto leading-[1.7] mb-4">
            Vos commerciaux passent 65% de leur temps sur des taches non-commerciales. Attribution, relances, scoring, reporting : on automatise tout ce qui peut l&apos;etre pour qu&apos;ils se concentrent sur la vente.
          </p>
          <p className="text-[13px] text-[#999] mb-8">HubSpot workflows + Make/n8n + agents IA. Deploiement en 2-8 semaines.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Auditer mes processus
          </Link>
        </section>
        <Connector />

        {/* ── DEFINITION ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Definition</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">C&apos;est quoi l&apos;automatisation commerciale ?</h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">L&apos;automatisation commerciale consiste a utiliser la technologie pour eliminer les taches manuelles repetitives du processus de vente, sans deshumaniser la relation client.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {definitionPoints.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: p.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{p.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <p className="text-[12px] text-[#777] leading-[1.65]"><span className="font-semibold text-[#111]">Important :</span> l&apos;automatisation commerciale n&apos;est pas de l&apos;automatisation marketing (nurturing, emails de masse). C&apos;est l&apos;automatisation des taches du commercial : attribution, relance, saisie, reporting, qualification. Les deux sont complementaires mais distinctes.</p>
          </div>
        </section>
        <Connector />

        {/* ── LES 10 TACHES A AUTOMATISER ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Les 10 priorites</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les 10 taches a automatiser en priorite</h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">Par ordre d&apos;impact. Chaque automatisation inclut le declencheur, les conditions, les actions et l&apos;impact mesure chez nos clients.</p>
          </div>
          <div className="space-y-3">
            {tachesAutomatiser.map((t) => (
              <div key={t.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: t.color + "15", color: t.color }}>{t.num}</span>
                  <h3 className="text-[15px] font-semibold text-[#111]">{t.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-3">{t.desc}</p>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F9F9F9]">
                  <Check />
                  <span className="text-[11px] font-medium text-[#111]">Impact mesure : {t.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── COMMENT ON DEPLOIE ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Methodologie</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Comment on deploie l&apos;automatisation</h2>
              <p className="text-[13px] text-white/40">5 etapes, 2 a 8 semaines. On commence par les quick wins, on mesure, on etend.</p>
            </div>
            <div className="space-y-3">
              {deploymentSteps.map((step) => (
                <div key={step.num} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/10 text-white/60">{step.num}</span>
                    <h3 className="text-[14px] font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.65]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── HUBSPOT WORKFLOWS VS MAKE/N8N ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Outils</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">HubSpot Workflows vs Make/n8n : quand utiliser quoi ?</h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">Les deux ne s&apos;opposent pas, ils se completent. HubSpot pour le CRM, Make/n8n pour l&apos;orchestration cross-applications.</p>
          </div>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#E8E8E8]">
                    <th className="text-[12px] font-semibold text-[#111] pb-3 pr-4 w-[25%]">Critere</th>
                    <th className="text-[12px] font-semibold text-[#FF7A59] pb-3 pr-4 w-[37.5%]">HubSpot Workflows</th>
                    <th className="text-[12px] font-semibold text-[#9B59B6] pb-3 w-[37.5%]">Make / n8n</th>
                  </tr>
                </thead>
                <tbody>
                  {toolsComparison.map((row, i) => (
                    <tr key={i} className="border-b border-[#F2F2F2]">
                      <td className="text-[12px] font-medium text-[#111] py-3 pr-4">{row.critere}</td>
                      <td className="text-[11px] text-[#777] py-3 pr-4">{row.hubspot}</td>
                      <td className="text-[11px] text-[#777] py-3">{row.make}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-[#F9F9F9]">
              <p className="text-[12px] text-[#777] leading-[1.65]"><span className="font-semibold text-[#111]">Notre recommandation :</span> commencez par les workflows HubSpot pour tout ce qui est interne au CRM (90% des cas). Ajoutez Make/n8n uniquement quand vous avez besoin de connecter des outils externes (ERP, facturation, enrichissement multi-sources). n8n est preferable a Make si vous voulez heberger vos donnees en Europe.</p>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── IA ET AUTOMATISATION ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>IA + Automatisation</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">IA et automatisation commerciale : les cas d&apos;usage concrets</h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">L&apos;IA (Claude, GPT, Breeze) ajoute une couche d&apos;intelligence aux automatisations. Voici les cas d&apos;usage que nous deployons en 2026.</p>
          </div>
          <div className="space-y-3">
            {iaAutomatisation.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
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

        {/* ── CAS CLIENTS ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Resultats</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Cas clients : automatisation en action</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Des resultats concrets, mesures avant et apres le deploiement des automatisations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-1">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: cs.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{cs.client}</h3>
                </div>
                <p className="text-[11px] text-[#999] mb-3">{cs.sector}</p>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{cs.challenge}</p>
                <ul className="space-y-1.5">
                  {cs.results.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-[11px] text-[#666]">
                      <Check />{r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── FAQ ── */}
        <section className="mb-0">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur l&apos;automatisation commerciale</h2>
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

        {/* ── CTA ── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a automatiser vos processus commerciaux ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">Audit gratuit de 30 min : on identifie les taches a automatiser en priorite et on estime le ROI. Sans engagement.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Planifier mon audit gratuit
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
