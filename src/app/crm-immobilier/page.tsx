"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const painPoints = [
  { title: "Contacts acheteurs et vendeurs melanges", desc: "Acheteurs, vendeurs, locataires, proprietaires : tout est dans le meme pipe. Impossible de segmenter, de cibler les relances ou de savoir qui cherche quoi. Le CRM est une liste de contacts, pas un outil de travail.", color: "#EF4444" },
  { title: "Suivi des visites manuel", desc: "Les visites sont notees dans un carnet, un fichier Excel ou un message WhatsApp. Aucune trace dans le CRM. Impossible de savoir combien de visites un bien a recu, quels retours ont ete faits, ou quel agent a gere quoi.", color: "#F97316" },
  { title: "Pas de pipeline mandats structure", desc: "Le processus de signature de mandat n&apos;est pas formalise dans le CRM. Prospection, estimation, negociation, signature : chaque etape devrait etre un deal stage. A la place, c&apos;est un suivi informel qui depend de la memoire de l&apos;agent.", color: "#4B5EFC" },
  { title: "Relances oubliees", desc: "Un acheteur a visite un bien il y a 3 semaines. Pas de nouvelle. L&apos;agent a oublie. Le prospect est parti chez un concurrent. Sans workflow de relance automatique, chaque oubli est un mandat ou une vente perdue.", color: "#6C5CE7" },
  { title: "Reporting mensuel a la main", desc: "Chaque mois, le directeur d&apos;agence compile les chiffres a la main. Nombre de mandats, visites, compromis, ventes. Ca prend une demi-journee et le resultat est approximatif. Pas de dashboard en temps reel.", color: "#EAB308" },
  { title: "Pas de scoring des leads", desc: "Tous les leads entrants sont traites de la meme maniere. Le primo-accedant avec un budget confirme et le curieux qui navigue les annonces recoivent la meme attention. Les agents perdent du temps sur des contacts non qualifies.", color: "#22C55E" },
];

const aiUseCases = [
  { title: "Matching automatique acheteur/bien", desc: "L&apos;IA croise les criteres de recherche de chaque acheteur avec les biens en portefeuille. Budget, localisation, surface, nombre de pieces. Chaque nouveau mandat est automatiquement propose aux acheteurs correspondants.", icon: "M", color: "#EF4444" },
  { title: "Relances contextualisees", desc: "Apres une visite, l&apos;IA declenche une sequence de relance adaptee : retour de visite a J+1, proposition de biens similaires a J+7, relance douce a J+21. Le contenu s&apos;adapte au comportement du prospect.", icon: "R", color: "#F97316" },
  { title: "Scoring des leads entrants", desc: "Chaque lead recoit un score base sur son comportement : nombre de biens consultes, budget renseigne, delai de projet, zone geographique. Les agents se concentrent sur les leads les plus chauds en priorite.", icon: "S", color: "#4B5EFC" },
  { title: "Reporting automatise", desc: "Les dashboards sont generes en temps reel : mandats en cours, visites de la semaine, taux de transformation, chiffre d&apos;affaires par agent. Le directeur d&apos;agence pilote sans compiler de fichier.", icon: "D", color: "#22C55E" },
];

const stackTools = [
  {
    name: "CRM",
    color: "#FF7A59",
    tools: ["HubSpot", "Salesforce"],
    role: "Contacts, mandats, pipeline de vente",
  },
  {
    name: "Portails immobiliers",
    color: "#6D00CC",
    tools: ["SeLoger", "Bien'ici", "LeBonCoin"],
    role: "Diffusion annonces, leads entrants",
  },
  {
    name: "Outils metier",
    color: "#22C55E",
    tools: ["Apimo", "Hektor", "Netty"],
    role: "Gestion mandats, estimations, visites",
  },
  {
    name: "Communication",
    color: "#4B5EFC",
    tools: ["Mailchimp", "WhatsApp Business", "Calendly"],
    role: "Relances, prise de RDV, newsletters",
  },
];

const faqItems = [
  { q: "HubSpot est-il adapte a l&apos;immobilier ?", a: "Oui. Avec des objets custom (biens, mandats, visites) et des pipelines adaptes, HubSpot devient un vrai CRM immobilier. Plus flexible qu&apos;un logiciel metier, avec l&apos;automatisation en plus." },
  { q: "Comment gerer les biens et les contacts dans le meme CRM ?", a: "On cree un objet custom &apos;Bien&apos; lie aux contacts acheteurs et vendeurs. Chaque bien a ses caracteristiques, son statut, son historique de visites. Les associations permettent de croiser automatiquement." },
  { q: "Est-ce qu&apos;on peut connecter les portails immobiliers ?", a: "Oui. Les leads SeLoger, LeBonCoin et Bien&apos;ici arrivent automatiquement dans le CRM avec le bien concerne. L&apos;attribution et le scoring se font en temps reel." },
  { q: "Combien de temps pour mettre en place le CRM immobilier ?", a: "4 a 6 semaines pour une agence standard. On configure les objets, les pipelines, les automatisations et les dashboards. Formation de l&apos;equipe incluse." },
  { q: "Est-ce que ca remplace notre logiciel immobilier actuel ?", a: "Non necessairement. On peut connecter HubSpot a votre outil metier existant (Apimo, Hektor, Netty). Le CRM gere la relation client et l&apos;automatisation, l&apos;outil metier gere les specificites immobilieres." },
  { q: "Quel budget prevoir ?", a: "A partir de 3 000 EUR pour une agence mono-site. Le budget varie selon le nombre d&apos;agences, le volume de mandats et les integrations necessaires. Cadrage gratuit en 30 minutes." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "CRM immobilier sur HubSpot",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "CRM immobilier sur HubSpot. Gestion contacts acheteurs/vendeurs, pipeline mandats, suivi visites, relances automatisees.",
      serviceType: "CRM Immobilier",
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

export default function CrmImmobilierPage() {
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
            <li className="text-[#111] font-medium">CRM Immobilier</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Immobilier</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            CRM immobilier : HubSpot pour l&apos;immobilier
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Contacts acheteurs et vendeurs, pipeline mandats, suivi visites, relances automatisees. Un CRM qui travaille pour vos agents, pas l&apos;inverse.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            Les agences qui performent ont un systeme. Les autres ont des fichiers Excel, des post-it et de la bonne volonte.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">+40%</div>
              <p className="text-[11px] text-[#999]">taux de relance</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">-60%</div>
              <p className="text-[11px] text-[#999]">temps admin</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">4-6 sem</div>
              <p className="text-[11px] text-[#999]">deploiement</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Structurer mon agence
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Les problematiques immobilier ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Le constat</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les problematiques specifiques de l&apos;immobilier</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">L&apos;immobilier est un metier de relation et de timing. Sans systeme, les opportunites passent entre les mailles du filet.</p>
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

        {/* ───── 3. Ce que l'IA change dans l'immobilier ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">IA appliquee</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Ce que l&apos;IA change dans l&apos;immobilier</h2>
              <p className="text-[13px] text-white/40">L&apos;IA ne remplace pas l&apos;agent. Elle lui evite les taches repetitives pour qu&apos;il se concentre sur la relation et la negociation.</p>
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

        {/* ───── 4. La stack immobilier type ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Stack</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">La stack immobilier type qu&apos;on connecte</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">CRM, portails, outils metier et communication : on connecte l&apos;ensemble pour que chaque lead soit traite, chaque visite soit tracee.</p>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Une approche pensee pour l&apos;immobilier</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">On connait les specificites du metier. On adapte le CRM a vos process, pas l&apos;inverse.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/methode" className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3 h-3 rounded-sm bg-[#6D00CC]" />
                <h3 className="text-[14px] font-semibold text-[#111]">Notre methode</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Diagnostic de votre agence, configuration du CRM, formation des agents. Une methode eprouvee en 4 phases.</p>
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
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Votre base contacts est un actif. On la nettoie, on la structure et on met en place la gouvernance pour qu&apos;elle reste exploitable.</p>
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
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur le CRM immobilier</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a structurer votre agence ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On audite votre organisation en 30 minutes. Diagnostic gratuit, devis sous 48h.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Structurer mon agence
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
