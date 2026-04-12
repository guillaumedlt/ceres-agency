"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const painPoints = [
  { title: "MRR qui ne colle pas entre outils", desc: "Le MRR dans HubSpot dit un chiffre, Stripe un autre, le fichier Finance un troisieme. Personne ne sait quel est le vrai MRR. Chaque comite de direction commence par un debat sur les chiffres au lieu de prendre des decisions.", color: "#EF4444" },
  { title: "Churn non detecte a temps", desc: "Un client decroche pendant 3 semaines avant de churner. Usage en baisse, tickets en hausse, pas de reponse au CSM. Les signaux etaient la, mais personne ne les agregait. Le churn se constate au lieu de se prevenir.", color: "#F97316" },
  { title: "Onboarding manuel et non reproductible", desc: "Chaque CSM fait son onboarding differemment. Pas de template, pas de suivi des etapes, pas de mesure du time-to-value. Les nouveaux clients mettent 3 semaines au lieu de 5 jours a etre operationnels.", color: "#4B5EFC" },
  { title: "Scoring sur des regles de 2019", desc: "Le lead scoring repose sur des criteres definis il y a 5 ans. Taille d&apos;entreprise + titre = score. Aucune prise en compte du comportement produit, des signaux d&apos;usage, de l&apos;intent. Les SDR perdent du temps sur des leads froids.", color: "#6C5CE7" },
  { title: "Pas de visibilite NRR", desc: "Le Net Revenue Retention est le KPI le plus important d&apos;un SaaS. Pourtant, personne ne le mesure en temps reel. L&apos;expansion, la contraction et le churn sont dans 3 outils differents. Impossible de piloter ce qu&apos;on ne mesure pas.", color: "#EAB308" },
  { title: "Forecast a la louche", desc: "Le forecast repose sur le gut feeling des AE. Pas de donnees historiques exploitables, pas de win rate par segment, pas de velocity par deal stage. Le board demande de la predictibilite, l&apos;equipe livre des estimations.", color: "#22C55E" },
];

const aiUseCases = [
  { title: "Scoring predictif des trials", desc: "L&apos;IA analyse le comportement produit pendant la periode d&apos;essai : features utilisees, frequence de connexion, nombre d&apos;utilisateurs invites. Chaque trial recoit un score de conversion en temps reel. Les sales se concentrent sur les trials a forte probabilite.", icon: "S", color: "#EF4444" },
  { title: "Detection churn J-45", desc: "45 jours avant l&apos;echeance, l&apos;IA croise usage produit, tickets support, engagement emails et activite CRM. Les comptes a risque sont flagges automatiquement. Le CSM recoit une alerte avec les actions recommandees.", icon: "C", color: "#F97316" },
  { title: "Reporting MRR automatise", desc: "Chaque matin, le MRR est reconcilie automatiquement entre le CRM, le billing et la comptabilite. New MRR, expansion, contraction, churn : tout est ventile. Le CFO a son dashboard a jour sans intervention manuelle.", icon: "R", color: "#4B5EFC" },
  { title: "Enrichissement des signups", desc: "A chaque nouveau signup, l&apos;IA enrichit la fiche : taille d&apos;entreprise, secteur, stack technique, levees de fonds recentes. Le lead arrive qualifie dans le CRM avant meme que le SDR ne decroche son telephone.", icon: "E", color: "#22C55E" },
];

const stackTools = [
  {
    name: "CRM",
    color: "#FF7A59",
    tools: ["HubSpot", "Salesforce", "Pipedrive"],
    role: "Source de verite pipeline et contacts",
  },
  {
    name: "Billing",
    color: "#6D00CC",
    tools: ["Stripe", "Chargebee", "Paddle"],
    role: "MRR, abonnements, invoicing",
  },
  {
    name: "Support & CS",
    color: "#22C55E",
    tools: ["Intercom", "Zendesk", "Vitally"],
    role: "Tickets, NPS, health score",
  },
  {
    name: "Product Analytics",
    color: "#4B5EFC",
    tools: ["Segment", "Amplitude", "Mixpanel"],
    role: "Usage produit, activation, retention",
  },
];

const faqItems = [
  { q: "Quelle difference entre RevOps generique et RevOps SaaS ?", a: "Un SaaS a des metriques specifiques : MRR, ARR, NRR, churn rate, expansion revenue, CAC payback. Le RevOps SaaS structure les operations autour de ces metriques recurentes, pas autour d&apos;un pipeline transactionnel classique." },
  { q: "On est sur HubSpot, c&apos;est compatible ?", a: "Oui. HubSpot est notre CRM principal. On configure les objets custom (subscriptions, MRR), les pipelines, le scoring et les dashboards directement dans HubSpot. Salesforce et Pipedrive sont aussi supportes." },
  { q: "Combien de temps pour voir les premiers resultats ?", a: "Les dashboards MRR et le scoring sont operationnels en 4 a 6 semaines. La detection de churn et l&apos;enrichissement automatique en 6 a 8 semaines. Le ROI est mesurable des le premier mois." },
  { q: "Est-ce qu&apos;il faut connecter Stripe au CRM ?", a: "C&apos;est fortement recommande. Sans la connexion billing-CRM, le MRR reste une donnee manuelle. On configure la synchronisation bidirectionnelle pour que chaque deal, upgrade ou churn soit reflete en temps reel." },
  { q: "On a deja un scoring en place, pourquoi changer ?", a: "Si votre scoring ne prend pas en compte le comportement produit (features utilisees, frequence, invitations), il rate 60% du signal. Le scoring IA combine donnees CRM + usage produit + intent pour un score predictif, pas descriptif." },
  { q: "Quel est le budget a prevoir ?", a: "A partir de 4 000 EUR pour un audit + mise en place du socle RevOps SaaS. Le budget depend du nombre d&apos;outils a connecter et de la complexite de votre modele de pricing. Cadrage gratuit en 30 minutes." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RevOps pour SaaS B2B",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "RevOps specialise pour les SaaS B2B. Pipeline ARR/MRR, scoring predictif, churn prediction, onboarding automatise. Structure complete du revenue engine.",
      serviceType: "Revenue Operations SaaS",
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

export default function RevOpsSaaSPage() {
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
            <li className="text-[#111] font-medium">RevOps SaaS B2B</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>SaaS B2B</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            RevOps pour SaaS B2B
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            Votre revenue engine est specifique. MRR, churn, expansion, onboarding, NRR. On structure les operations qui font scaler un SaaS.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            Les SaaS B2B qui scalent ont un point commun : des operations structurees autour de metriques recurentes, pas des process improvises au fil de la croissance.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">100+</div>
              <p className="text-[11px] text-[#999]">SaaS accompagnes</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">-35%</div>
              <p className="text-[11px] text-[#999]">churn moyen</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">4-6 sem</div>
              <p className="text-[11px] text-[#999]">mise en place</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Structurer mon revenue engine
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Les problematiques SaaS ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Le constat</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Les problematiques specifiques des SaaS B2B</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Un SaaS ne vend pas un produit une fois. Il vend un abonnement, un usage, une relation. Les operations doivent refleter cette realite.</p>
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

        {/* ───── 3. Ce que l'IA change dans le SaaS ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">IA appliquee</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Ce que l&apos;IA change dans le SaaS B2B</h2>
              <p className="text-[13px] text-white/40">L&apos;IA ne remplace pas vos equipes. Elle leur donne les signaux qu&apos;elles n&apos;ont pas le temps d&apos;agreger manuellement.</p>
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

        {/* ───── 4. La stack SaaS type ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Stack</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">La stack SaaS type qu&apos;on connecte</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Chaque outil a un role precis dans le revenue engine. On les connecte pour creer une source unique de verite.</p>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Une methode pensee pour les SaaS</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">On ne plaque pas un framework generique. On adapte notre methode aux specificites de votre modele recurent.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/methode" className="block rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)] hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-3 h-3 rounded-sm bg-[#6D00CC]" />
                <h3 className="text-[14px] font-semibold text-[#111]">Notre methode</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Diagnostic, architecture, deploiement, iteration. 4 phases pour passer d&apos;un CRM sous-exploite a un revenue engine operationnel.</p>
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
              <p className="text-[12px] text-[#777] leading-[1.65] mb-3">Avant d&apos;automatiser, on nettoie. Deduplication, standardisation, enrichissement et gouvernance de votre base CRM.</p>
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
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur le RevOps SaaS</h2>
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Pret a structurer votre revenue engine ?</h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[460px] mx-auto">On audite votre stack SaaS en 30 minutes. Diagnostic gratuit, plan d&apos;action sous 48h.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Auditer mon stack SaaS
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
