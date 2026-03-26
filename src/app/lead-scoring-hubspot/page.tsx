"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

/* ─── DATA ─── */

const definitionPoints = [
  { title: "Prioriser les leads a fort potentiel", desc: "Sans scoring, vos commerciaux traitent les leads dans l\u2019ordre d\u2019arrivee ou au feeling. Le resultat : du temps perdu sur des leads non qualifies et des leads chauds qui refroidissent. Le scoring attribue un score objectif a chaque lead pour que les commerciaux se concentrent sur les plus prometteurs.", color: "#FF7A59" },
  { title: "Aligner marketing et ventes", desc: "Le scoring cree un langage commun entre marketing et ventes. Un MQL (Marketing Qualified Lead) n\u2019est plus un concept flou : c\u2019est un lead qui a atteint un score precis, base sur des criteres valides par les deux equipes. Fini les \"leads pourris du marketing\" et les \"commerciaux qui ne rappellent pas\".", color: "#4B5EFC" },
  { title: "Mesurer l\u2019efficacite des canaux", desc: "Le scoring permet d\u2019identifier quels canaux generent les leads avec les meilleurs scores (et donc les meilleures conversions). Un webinar genere des leads a 60 points en moyenne ? Un ebook a 25 points ? Vous savez ou investir votre budget marketing.", color: "#22C55E" },
];

const fitCriteria = [
  { critere: "Taille d\u2019entreprise", description: "Les entreprises de 50-500 employes convertissent 3x mieux que les TPE ou les grands groupes ? Attribuez +15 points pour cette tranche, +5 pour les autres.", points: "+5 a +20", color: "#FF7A59" },
  { critere: "Secteur d\u2019activite", description: "Votre ICP est dans le SaaS B2B, la fintech et le e-commerce ? +15 points pour ces secteurs. Industrie et administration ? +0 ou -5.", points: "+0 a +15", color: "#4B5EFC" },
  { critere: "Poste / Seniority", description: "Un VP Sales ou un CEO a plus de pouvoir de decision qu\u2019un stagiaire. Attribuez des points selon le role : decision-maker (+20), influenceur (+10), utilisateur (+5), hors cible (-10).", points: "-10 a +20", color: "#6D00CC" },
  { critere: "Chiffre d\u2019affaires", description: "Si votre panier moyen est de 15 000 EUR/an, les entreprises avec moins de 500 000 EUR de CA sont probablement hors budget. Scorez selon la capacite d\u2019achat.", points: "+0 a +15", color: "#22C55E" },
  { critere: "Zone geographique", description: "Vous operez en France et en Europe francophone ? +10 pour la France, +5 pour la Belgique/Suisse, +0 pour le reste. Si vous n\u2019intervenez pas en dehors de l\u2019Europe, -20 pour les US/Asie.", points: "-20 a +10", color: "#6C5CE7" },
  { critere: "Stack technologique", description: "Si vous vendez une integration HubSpot, les entreprises qui utilisent deja HubSpot sont votre coeur de cible (+20). Celles sur Salesforce sont un second cercle (+10). Celles sans CRM sont en phase de consideration (+5).", points: "+0 a +20", color: "#D4A27F" },
];

const engagementCriteria = [
  { critere: "Visite page pricing", description: "Le signal d\u2019intention le plus fort. Un lead qui visite votre page de tarifs evalue activement votre solution. C\u2019est le moment ou le commercial doit intervenir.", points: "+20", color: "#FF7A59" },
  { critere: "Demande de demo / contact", description: "Le lead leve la main et demande a parler a un commercial. C\u2019est le signal d\u2019achat le plus explicite. Score maximum.", points: "+30", color: "#EF4444" },
  { critere: "Telechargement de contenu", description: "Un ebook ou un guide telecharge montre de l\u2019interet pour le sujet. Scorez differemment selon le contenu : guide generique (+5), cas client specifique (+10), comparatif (+15).", points: "+5 a +15", color: "#4B5EFC" },
  { critere: "Ouverture d\u2019emails", description: "Ouvrir un email montre un minimum d\u2019interet. Mais ne surpondez pas : un email ouvert par curiosite ne vaut pas une visite sur la page pricing. Utile en accumulation.", points: "+1 a +3", color: "#6D00CC" },
  { critere: "Clic dans un email", description: "Plus fort que l\u2019ouverture. Le lead a lu le contenu et a clique pour en savoir plus. Scorez selon la destination du clic (blog +3, pricing +10, demo +15).", points: "+3 a +15", color: "#22C55E" },
  { critere: "Visite repetee du site", description: "Un lead qui revient 3-4 fois sur votre site en une semaine est en phase de consideration active. L\u2019accumulation de visites est un signal fort, meme si chaque visite individuelle est faible.", points: "+2 par visite", color: "#6C5CE7" },
  { critere: "Participation a un webinar", description: "Un webinar de 45 min montre un engagement serieux. Scorez differemment la simple inscription (+5) et la participation effective (+15). Bonus si le lead pose des questions (+5).", points: "+5 a +20", color: "#D4A27F" },
  { critere: "Interaction avec un chatbot", description: "Un lead qui interagit avec votre chatbot (ou agent IA) et repond aux questions de qualification a un niveau d\u2019engagement eleve. Scorez selon la profondeur de la conversation.", points: "+5 a +15", color: "#F59E0B" },
  { critere: "Inactivite (score negatif)", description: "Un lead qui n\u2019a eu aucune interaction depuis 30 jours perd des points. Apres 60 jours, le score baisse significativement. Cela evite d\u2019avoir des leads avec des scores eleves mais qui ne sont plus engages.", points: "-5 a -20", color: "#EF4444" },
];

const configSteps = [
  { num: "01", title: "Definir votre ICP (Ideal Customer Profile)", desc: "Avant de configurer quoi que ce soit dans HubSpot, vous devez definir clairement votre client ideal. Analysez vos 20 meilleurs clients : quelle taille, quel secteur, quel poste de l\u2019acheteur, quel cycle de vente, quel panier moyen ? Ces patterns definissent les criteres de fit scoring.", details: ["Analyser les 20 meilleurs deals des 12 derniers mois", "Identifier les patterns communs (taille, secteur, poste)", "Definir les criteres eliminatoires (hors cible = score negatif)", "Valider avec les equipes Sales et Marketing", "Documenter l\u2019ICP dans un document partage"], color: "#FF7A59" },
  { num: "02", title: "Creer les proprietes de scoring dans HubSpot", desc: "Dans HubSpot, allez dans Parametres > Proprietes > Contact. Creez une propriete \"HubSpot Score\" (type Score, disponible nativement en Pro+). Vous pouvez creer plusieurs scores : un score de fit (demographique) et un score d\u2019engagement (comportemental). Enterprise permet aussi le predictive scoring.", details: ["Propriete \"HubSpot Score\" pour le score global", "Propriete custom \"Fit Score\" pour le scoring demographique", "Propriete custom \"Engagement Score\" pour le comportemental", "Definir les seuils : MQL (50+), SQL (80+), Hot (100+)", "Configurer le score decay (perte de points sur inactivite)"], color: "#4B5EFC" },
  { num: "03", title: "Configurer le scoring demographique (fit)", desc: "Dans les parametres de la propriete Score, ajoutez les criteres positifs et negatifs. Pour chaque critere, definissez la propriete HubSpot associee, les valeurs et les points. Commencez simple : 4-6 criteres de fit suffisent. Vous affinerez apres les premiers resultats.", details: ["Taille d\u2019entreprise (Number of Employees) : plages de points", "Secteur (Industry) : +15 pour ICP, +5 pour adjacent, +0 pour hors cible", "Poste (Job Title) : decision-maker +20, influenceur +10", "Pays (Country) : +10 pour les marches cibles", "Chiffre d\u2019affaires (Annual Revenue) : plages de points", "Criteres eliminatoires : concurrent -50, etudiant -30"], color: "#6D00CC" },
  { num: "04", title: "Configurer le scoring comportemental (engagement)", desc: "Ajoutez les criteres d\u2019engagement bases sur les interactions du lead avec vos contenus, emails et pages. HubSpot permet de scorer sur les vues de pages, les soumissions de formulaires, les ouvertures/clics d\u2019emails, et les evenements custom.", details: ["Visite page pricing : +20 points", "Soumission formulaire contact/demo : +30 points", "Telechargement contenu : +5 a +15 selon le type", "Ouverture email : +2 points", "Clic email : +5 points", "Participation webinar : +15 points", "Inactivite 30 jours : -10 points"], color: "#22C55E" },
  { num: "05", title: "Creer les workflows de transition", desc: "Le scoring seul ne suffit pas. Creez des workflows qui se declenchent quand un lead atteint un seuil. Quand le score depasse 50 : lifecycle stage passe a MQL, notification au commercial, attribution au bon owner. Quand il depasse 80 : passe a SQL, tache de call creee.", details: ["Workflow MQL : score >= 50, passe a MQL, notifie le commercial", "Workflow SQL : score >= 80, passe a SQL, cree tache d\u2019appel", "Workflow Hot Lead : score >= 100, alerte immediate (email + Slack)", "Workflow disqualification : score < 0, passe a Non-Qualified", "Workflow nurturing : score 20-49, entre dans sequence de nurturing"], color: "#6C5CE7" },
  { num: "06", title: "Tester, mesurer, ajuster", desc: "Le scoring est un systeme vivant. Apres 30 jours, analysez les resultats : les MQL se convertissent-ils en SQL ? Les SQL se convertissent-ils en deals ? Si le taux de conversion MQL-SQL est inferieur a 20%, vos seuils sont trop bas ou vos criteres pas assez discriminants. Ajustez tous les trimestres.", details: ["Mesurer le taux de conversion MQL vers SQL (cible : 25-40%)", "Mesurer le taux de conversion SQL vers Deal (cible : 40-60%)", "Identifier les criteres les plus predictifs", "Ajuster les points (monter les criteres qui predisent la conversion)", "Supprimer les criteres qui ne discriminent pas", "Revue trimestrielle avec Sales et Marketing"], color: "#D4A27F" },
];

const predictifVsRules = [
  { critere: "Fonctionnement", rulesBased: "Regles statiques definies manuellement (si secteur = SaaS alors +10)", predictif: "Modele ML qui apprend des deals gagnes/perdus pour predire la conversion" },
  { critere: "Configuration", rulesBased: "Manuelle : 4-8h de setup initial", predictif: "Automatique : HubSpot analyse vos donnees existantes" },
  { critere: "Precision", rulesBased: "Bonne si les regles sont bien calibrees (revue trimestrielle)", predictif: "Superieure si vous avez assez de donnees (200+ deals clos)" },
  { critere: "Transparence", rulesBased: "Totale : vous savez exactement pourquoi un lead a ce score", predictif: "Partielle : le modele indique les facteurs mais pas la logique exacte" },
  { critere: "Maintenance", rulesBased: "Revue trimestrielle necessaire pour ajuster les ponderations", predictif: "Auto-apprentissage, s\u2019ameliore avec le temps" },
  { critere: "Pre-requis", rulesBased: "Aucun (fonctionne meme avec peu de donnees)", predictif: "200+ deals clos (gagnes ET perdus) pour un modele fiable" },
  { critere: "Disponibilite HubSpot", rulesBased: "Pro et Enterprise", predictif: "Enterprise uniquement" },
  { critere: "Notre recommandation", rulesBased: "Commencez par la. Simple, transparent, efficace.", predictif: "Ajoutez-le quand vous avez assez de donnees. Les deux se completent." },
];

const erreursCourantes = [
  { title: "Trop de criteres", desc: "Un scoring avec 30 criteres est ingeraable et indechiffrable. Commencez avec 5-8 criteres de fit et 5-8 criteres d\u2019engagement. Chaque critere doit avoir un impact significatif sur la conversion. Si un critere ne discrimine pas, supprimez-le.", solution: "5-8 criteres par dimension, chacun avec un impact mesurable", color: "#EF4444" },
  { title: "Seuils trop bas", desc: "Si tous vos leads sont MQL, aucun ne l\u2019est reellement. Un seuil MQL a 20 points est souvent trop bas : un lead qui a juste ouvert 2 emails et travaille dans le bon secteur est deja MQL. Montez les seuils pour que MQL signifie reellement \"pret a etre contacte\".", solution: "MQL a 50+, SQL a 80+. Revisez si le taux de conversion MQL-SQL est < 20%", color: "#F59E0B" },
  { title: "Pas de score decay", desc: "Un lead qui a eu un score de 90 il y a 6 mois mais n\u2019a rien fait depuis n\u2019est plus un lead chaud. Sans score decay (perte de points sur inactivite), votre pipeline est rempli de leads \"historiquement\" qualifies mais reellement froids. Implementez un decay de -5 points tous les 30 jours d\u2019inactivite.", solution: "Decay : -5 points/30 jours d\u2019inactivite, -15 points/60 jours", color: "#4B5EFC" },
  { title: "Scoring non aligne avec Sales", desc: "Si les commerciaux ne font pas confiance au scoring, ils l\u2019ignorent. Le scoring doit etre co-construit avec les equipes commerciales, pas impose par le marketing. Les criteres et les seuils doivent etre valides par les deux equipes, et ajustes ensemble.", solution: "Co-construction Sales + Marketing. Revue trimestrielle conjointe", color: "#6D00CC" },
  { title: "Surponderer l\u2019engagement email", desc: "Un lead qui ouvre tous vos emails mais qui est stagiaire dans une TPE n\u2019est pas qualifie. L\u2019ouverture d\u2019email est un signal faible. Ne lui donnez pas plus de 2-3 points. Privilegiez les signaux d\u2019intention forte : visite pricing (+20), demande de demo (+30), telechargement comparatif (+15).", solution: "Ouverture email : max 2-3 points. Visite pricing : 20+ points", color: "#6C5CE7" },
  { title: "Ne pas scorer negativement", desc: "Un concurrent qui visite votre site pour de la veille, un etudiant qui telecharge vos ebooks, un freelance hors cible : ces leads doivent avoir un score negatif. Sans scoring negatif, vous polluez votre pipeline avec des leads qui ne convertiront jamais.", solution: "Concurrent : -50. Etudiant : -30. Email personnel : -10", color: "#22C55E" },
  { title: "Pas de workflow de transition", desc: "Le scoring sans workflow est inutile. Si le score d\u2019un lead passe a 80 mais que rien ne se passe (pas de notification, pas de changement de lifecycle stage, pas de tache), le scoring ne sert a rien. Chaque seuil doit declencher une action.", solution: "Workflow par seuil : MQL (50+), SQL (80+), Hot (100+)", color: "#D4A27F" },
];

const resultats = [
  { metrique: "Taux de conversion MQL vers SQL", avant: "12%", apres: "35%", evolution: "+192%", color: "#FF7A59" },
  { metrique: "Temps de reponse aux leads qualifies", avant: "18h", apres: "2h", evolution: "-89%", color: "#4B5EFC" },
  { metrique: "Deals generes par mois", avant: "22", apres: "38", evolution: "+73%", color: "#22C55E" },
  { metrique: "Taux de conversion SQL vers Deal", avant: "28%", apres: "42%", evolution: "+50%", color: "#6D00CC" },
  { metrique: "Temps de qualification par lead", avant: "25 min", apres: "5 min", evolution: "-80%", color: "#6C5CE7" },
  { metrique: "Pipeline qualifie mensuel", avant: "180 000 EUR", apres: "420 000 EUR", evolution: "+133%", color: "#D4A27F" },
];

const faqItems = [
  { q: "C\u2019est quoi le lead scoring dans HubSpot ?", a: "Le lead scoring est un systeme qui attribue automatiquement un score numerique a chaque contact dans HubSpot, base sur ses attributs demographiques (taille d\u2019entreprise, secteur, poste) et ses interactions comportementales (visites, telechargements, emails). Ce score permet de prioriser les leads les plus susceptibles de convertir." },
  { q: "Faut-il HubSpot Enterprise pour le scoring ?", a: "Non. Le scoring rule-based (regles manuelles) est disponible des HubSpot Pro (Sales ou Marketing). Le predictive scoring (IA) est reserve a Enterprise. Pour la plupart des entreprises, le scoring rule-based en Pro est largement suffisant pour demarrer." },
  { q: "Combien de temps faut-il pour mettre en place le scoring ?", a: "La configuration initiale prend 1-2 jours (definition ICP, creation des criteres, configuration dans HubSpot, creation des workflows). L\u2019optimisation est continue : premiere revue a 30 jours, puis trimestrielle. Comptez 3-6 mois pour un systeme mature et bien calibre." },
  { q: "Combien de leads faut-il pour que le scoring soit utile ?", a: "Le scoring rule-based fonctionne meme avec peu de leads (100+). Le scoring predictif necessite 200+ deals clos (gagnes ET perdus) pour que le modele ML soit fiable. Si vous avez moins de 200 deals, commencez par le rule-based." },
  { q: "Comment definir les seuils MQL et SQL ?", a: "Commencez avec MQL = 50 points et SQL = 80 points. Apres 30 jours, mesurez le taux de conversion MQL vers SQL. S\u2019il est superieur a 40%, vos seuils sont peut-etre trop eleves. S\u2019il est inferieur a 20%, ils sont trop bas. Ajustez jusqu\u2019a atteindre 25-35% de conversion MQL-SQL." },
  { q: "Le scoring fonctionne-t-il pour le B2B long cycle ?", a: "C\u2019est meme la ou il est le plus impactant. Sur des cycles de 3-12 mois, le scoring permet de suivre la maturation des leads dans le temps, d\u2019identifier les moments de reengagement, et de prioriser les leads qui entrent en phase active de consideration." },
  { q: "Peut-on avoir plusieurs scores dans HubSpot ?", a: "Oui. Vous pouvez creer un score de fit (demographique) et un score d\u2019engagement (comportemental) separement, puis les combiner. En Enterprise, vous pouvez creer jusqu\u2019a 25 proprietes de scoring. Cela permet des logiques comme : \"MQL uniquement si fit > 30 ET engagement > 20\"." },
  { q: "Le scoring doit-il etre gere par le marketing ou les ventes ?", a: "Les deux. Le scoring est un contrat entre Marketing et Sales. Marketing definit les criteres d\u2019engagement (interactions avec le contenu). Sales definit les criteres de fit (profil client ideal). Les seuils sont valides conjointement. La revue trimestrielle est conjointe." },
  { q: "Comment eviter les faux positifs (leads avec un score eleve mais non qualifies) ?", a: "Trois leviers : 1) Equilibrer fit et engagement (un score eleve uniquement sur l\u2019engagement sans fit est un faux positif). 2) Implementer le score decay (perte de points sur inactivite). 3) Scorer negativement les profils hors cible (concurrents, etudiants, freelances)." },
  { q: "Le scoring predictif HubSpot est-il fiable ?", a: "Oui, a condition d\u2019avoir assez de donnees (200+ deals clos). Le modele analyse des centaines de variables pour predire la probabilite de conversion. Il est generalement plus precis que le scoring rule-based car il detecte des patterns invisibles a l\u2019humain. Les deux approches se completent." },
  { q: "Combien coute la mise en place du scoring avec Ceres ?", a: "La mise en place complete (definition ICP, configuration scoring, workflows de transition, formation, documentation) coute entre 3 000 et 6 000 EUR. L\u2019optimisation trimestrielle est facturee en complement (500-1 000 EUR par session)." },
  { q: "Peut-on scorer des entreprises (account scoring) en plus des contacts ?", a: "Oui. HubSpot permet de creer des proprietes de scoring sur les objets Company. L\u2019account scoring est particulierement utile en ABM (Account-Based Marketing) : vous scorez l\u2019entreprise globalement et les contacts individuellement. Un deal avec un compte a score eleve et un contact a score eleve est prioritaire." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "Service", name: "Lead Scoring HubSpot", provider: { "@type": "Organization", name: "Ceres" }, description: "Mise en place et optimisation du lead scoring dans HubSpot. Scoring demographique, comportemental, predictif. Configuration pas a pas, workflows de transition, resultats mesures.", serviceType: "CRM Consulting", areaServed: { "@type": "Country", name: "France" } },
  { "@type": "FAQPage", mainEntity: faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
]};

/* ─── CHECKMARK SVG ─── */
const Check = () => (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#22C55E]">
    <path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ─── PAGE ─── */

export default function LeadScoringHubSpotPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* ── HERO ── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Lead Scoring</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            Lead Scoring HubSpot : guide complet pour qualifier vos leads efficacement
          </h1>
          <p className="text-[17px] text-[#666] max-w-[620px] mx-auto leading-[1.7] mb-4">
            Arretez de traiter tous vos leads de la meme maniere. Le lead scoring HubSpot identifie automatiquement les leads prets a acheter pour que vos commerciaux se concentrent sur les bonnes opportunites.
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.google.com/s2/favicons?domain=hubspot.com&sz=64" alt="HubSpot" width={22} height={22} className="rounded-sm" />
            <span className="text-[11px] text-[#999]">Configuration pas a pas + resultats mesures chez nos clients</span>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Mettre en place mon scoring
          </Link>
        </section>
        <Connector />

        {/* ── DEFINITION ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Definition</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">C&apos;est quoi le lead scoring ?</h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">Le lead scoring est un systeme qui attribue automatiquement un score numerique a chaque lead en fonction de son profil et de ses interactions. Plus le score est eleve, plus le lead est pret a acheter.</p>
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
            <p className="text-[12px] text-[#777] leading-[1.65]"><span className="font-semibold text-[#111]">Un chiffre :</span> les entreprises avec un lead scoring en place convertissent en moyenne 30% plus de leads en clients. Non pas parce qu&apos;elles generent plus de leads, mais parce qu&apos;elles concentrent leurs efforts sur les bons leads au bon moment.</p>
          </div>
        </section>
        <Connector />

        {/* ── LES 2 DIMENSIONS ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Les 2 dimensions</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Fit + Engagement : les deux dimensions du scoring</h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">Un bon scoring combine deux dimensions : le fit (\"est-ce le bon profil ?\") et l&apos;engagement (\"est-il pret a acheter ?\"). Les deux sont necessaires.</p>
          </div>

          {/* Fit */}
          <div className="mb-6">
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <h3 className="text-[16px] font-semibold text-[#111] mb-1">Dimension 1 : le Fit (scoring demographique)</h3>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-5">Le fit mesure a quel point le lead correspond a votre client ideal (ICP). C&apos;est un scoring statique base sur les attributs du contact et de son entreprise. Un lead avec un fit eleve a les bonnes caracteristiques pour devenir client, independamment de son niveau d&apos;engagement actuel.</p>
              <div className="space-y-2">
                {fitCriteria.map((c) => (
                  <div key={c.critere} className="flex items-start gap-3 p-3 rounded-xl bg-[#F9F9F9]">
                    <div className="w-2.5 h-2.5 rounded-sm mt-1 shrink-0" style={{ backgroundColor: c.color }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h4 className="text-[13px] font-semibold text-[#111]">{c.critere}</h4>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded shrink-0" style={{ backgroundColor: c.color + "15", color: c.color }}>{c.points}</span>
                      </div>
                      <p className="text-[11px] text-[#777] leading-[1.6]">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Engagement */}
          <div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <h3 className="text-[16px] font-semibold text-[#111] mb-1">Dimension 2 : l&apos;Engagement (scoring comportemental)</h3>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-5">L&apos;engagement mesure le niveau d&apos;interaction du lead avec votre contenu, votre site et vos communications. C&apos;est un scoring dynamique qui evolue en temps reel. Un lead tres engage montre des signaux d&apos;intention d&apos;achat.</p>
              <div className="space-y-2">
                {engagementCriteria.map((c) => (
                  <div key={c.critere} className="flex items-start gap-3 p-3 rounded-xl bg-[#F9F9F9]">
                    <div className="w-2.5 h-2.5 rounded-sm mt-1 shrink-0" style={{ backgroundColor: c.color }} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h4 className="text-[13px] font-semibold text-[#111]">{c.critere}</h4>
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded shrink-0" style={{ backgroundColor: c.color + "15", color: c.color }}>{c.points}</span>
                      </div>
                      <p className="text-[11px] text-[#777] leading-[1.6]">{c.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── CONFIGURATION STEP BY STEP ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Configuration</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Comment configurer le lead scoring dans HubSpot</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">6 etapes pour un scoring fonctionnel. De la definition de l&apos;ICP a la mesure des resultats.</p>
          </div>
          <div className="space-y-3">
            {configSteps.map((step) => (
              <div key={step.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: step.color + "15", color: step.color }}>{step.num}</span>
                  <h3 className="text-[15px] font-semibold text-[#111]">{step.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-4">{step.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[11px] text-[#666]">
                      <span className="mt-0.5"><Check /></span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── PREDICTIF VS RULE-BASED ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Comparatif</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Scoring predictif vs rule-based : lequel choisir ?</h2>
              <p className="text-[13px] text-white/40">HubSpot propose les deux approches. Elles ne s&apos;opposent pas, elles se completent.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[25%]">Critere</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 pr-4 w-[37.5%]">Rule-based (Pro+)</th>
                    <th className="text-[12px] font-semibold text-white/60 pb-3 w-[37.5%]">Predictif / IA (Enterprise)</th>
                  </tr>
                </thead>
                <tbody>
                  {predictifVsRules.map((row, i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="text-[12px] font-medium text-white/80 py-3 pr-4">{row.critere}</td>
                      <td className="text-[11px] text-white/40 py-3 pr-4">{row.rulesBased}</td>
                      <td className="text-[11px] text-[#22C55E]/80 py-3">{row.predictif}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Connector />

        {/* ── ERREURS COURANTES ── */}
        <section className="mb-0">
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Erreurs courantes</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les 7 erreurs qui sabotent votre lead scoring</h2>
            <p className="text-[13px] text-[#999] max-w-[560px] mx-auto">Nous voyons ces erreurs chez 80% des entreprises qui ont mis en place un scoring. Voici comment les eviter.</p>
          </div>
          <div className="space-y-3">
            {erreursCourantes.map((e) => (
              <div key={e.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: e.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{e.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65] mb-3">{e.desc}</p>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F9F9F9]">
                  <Check />
                  <span className="text-[11px] font-medium text-[#111]">{e.solution}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ── NOS RESULTATS ── */}
        <section className="mb-0">
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Impact du scoring sur la conversion</h2>
              <p className="text-[13px] text-white/40">Moyennes constatees chez nos clients, 90 jours apres la mise en place du scoring dans HubSpot.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {resultats.map((r) => (
                <div key={r.metrique} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <p className="text-[11px] text-white/40 mb-2">{r.metrique}</p>
                  <div className="flex items-end gap-3 mb-1">
                    <div>
                      <p className="text-[10px] text-white/30">Avant</p>
                      <p className="text-[18px] font-bold text-white/40">{r.avant}</p>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mb-1"><path d="M6 4l4 4-4 4" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <div>
                      <p className="text-[10px] text-white/30">Apres</p>
                      <p className="text-[18px] font-bold text-white">{r.apres}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded" style={{ backgroundColor: r.color + "20", color: r.color }}>{r.evolution}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ── FAQ ── */}
        <section className="mb-0">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur le lead scoring HubSpot</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a qualifier vos leads plus efficacement ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">On met en place votre lead scoring HubSpot en 1-2 semaines. Definition ICP, configuration, workflows de transition, formation. Appel de cadrage gratuit.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Planifier mon appel de cadrage
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
