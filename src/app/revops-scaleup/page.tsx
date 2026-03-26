"use client";

import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import Link from "next/link";

const challenges = [
  { title: "Scaling commercial", desc: "Passer de 10 a 50 commerciaux sans que les process s&apos;effondrent. Onboarding, territories, quotas.", color: "#4B5EFC" },
  { title: "Multi-BU & international", desc: "Plusieurs business units, plusieurs pays, plusieurs pipelines. Et un seul CRM qui doit tout supporter.", color: "#FF7A59" },
  { title: "Data quality a l&apos;echelle", desc: "Plus vous grandissez, plus vos donnees se degradent. Doublons, champs vides, conventions non respectees.", color: "#6D00CC" },
  { title: "Forecast critique", desc: "Le board veut des previsions fiables. Mais avec 40 reps et 3 pipelines, le forecast est un cauchemar.", color: "#22C55E" },
  { title: "Tech stack qui explose", desc: "HubSpot, Salesforce, Clay, Outreach, Looker, Make... 15+ outils, zero gouvernance.", color: "#D4A27F" },
  { title: "Process non documentes", desc: "Les process existent dans la tete de 3 personnes. Rien n&apos;est scalable, rien n&apos;est transmissible.", color: "#6C5CE7" },
];

const offerings = [
  { title: "Restructuration complete", desc: "On reprend votre architecture RevOps de zero. Pipeline, lifecycle, lead routing, SLAs, reporting.", color: "#4B5EFC" },
  { title: "Migration CRM complexe", desc: "Salesforce vers HubSpot, multi-instance vers single source of truth. Sans perdre un deal.", color: "#FF7A59" },
  { title: "IA & agents pour scaler", desc: "Agents Claude connectes via MCP pour qualifier, enrichir, scorer et router sans multiplier les effectifs.", color: "#6D00CC" },
  { title: "Dashboards avances", desc: "Reporting multi-BU, unit economics, cohortes, attribution. Pas des vanity metrics.", color: "#22C55E" },
  { title: "Forecasting predictif", desc: "Modeles de prevision bases sur vos donnees historiques. Plus de gut feeling, plus de surprises au board.", color: "#6C5CE7" },
  { title: "RevOps Part-Time senior", desc: "Un ops senior dedie a temps partiel pour piloter votre roadmap RevOps en continu.", color: "#D4A27F" },
];

const stack = [
  { name: "HubSpot Enterprise", role: "CRM & marketing automation", budget: "1 200 - 4 000" },
  { name: "Clay", role: "Enrichissement & workflows data", budget: "200 - 800" },
  { name: "Claude / MCP", role: "IA generative, agents autonomes", budget: "100 - 500" },
  { name: "Make", role: "Orchestration & automatisation", budget: "100 - 400" },
  { name: "Claap", role: "Coaching commercial video", budget: "100 - 300" },
  { name: "Looker Studio", role: "Dashboards & reporting avance", budget: "Gratuit - 300" },
];

const clients = [
  { name: "Alan", desc: "Restructuration pipeline multi-pays et deploiement agents IA pour le scoring.", color: "#4B5EFC" },
  { name: "Ringover", desc: "Migration CRM et unification de 3 pipelines en une architecture scalable.", color: "#FF7A59" },
  { name: "Dougs", desc: "Automatisation du lead routing et mise en place du forecasting predictif.", color: "#6D00CC" },
  { name: "HiPay", desc: "Deploiement RevOps Part-Time senior et refonte complete du reporting.", color: "#22C55E" },
];

const iaAdvantages = [
  { title: "Enrichissement automatique", desc: "Chaque lead enrichi en temps reel : firmographie, technographie, intent data. Zero saisie manuelle.", color: "#4B5EFC" },
  { title: "Scoring predictif", desc: "Modeles de scoring bases sur vos donnees de conversion reelles. Plus de MQL arbitraires.", color: "#FF7A59" },
  { title: "Agents autonomes", desc: "Qualification, relance, resume de calls, mise a jour CRM. L&apos;IA execute, vos reps vendent.", color: "#6D00CC" },
  { title: "200h gagnees par mois", desc: "C&apos;est le temps moyen economise par nos clients scale-up grace a l&apos;automatisation IA.", color: "#22C55E" },
];

const faqItems = [
  { q: "A partir de quelle taille une scale-up a besoin de RevOps structure ?", a: "Des que vous depassez 15-20 commerciaux ou que vous operez sur plusieurs marches. A ce stade, les process informels ne tiennent plus et la data se degrade rapidement." },
  { q: "Combien de temps dure un projet de restructuration ?", a: "Entre 3 et 6 mois pour une refonte complete. Les premiers quick wins sont visibles des la semaine 2. On travaille par sprints de 2 semaines avec des livrables concrets." },
  { q: "Vous travaillez avec Salesforce ou uniquement HubSpot ?", a: "Les deux. On accompagne aussi les migrations Salesforce vers HubSpot, qui sont notre specialite. On connait les deux ecosystemes en profondeur." },
  { q: "Comment gerez-vous le multi-BU ?", a: "Architecture CRM compartimentee avec des regles de gouvernance claires. Chaque BU a sa vue, ses pipelines et ses reportings, mais la direction a une vue consolidee." },
  { q: "Quel budget prevoir pour la stack tech ?", a: "Entre 2 000 et 10 000 EUR par mois selon la taille et les outils. On optimise votre stack existante avant d&apos;ajouter de nouveaux outils." },
  { q: "Quelle difference avec un cabinet de conseil classique ?", a: "On execute. Pas de slides, pas de recommandations theoriques. On est dans votre CRM, dans votre Slack, et on livre chaque semaine." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RevOps pour Scale-ups",
      provider: { "@type": "Organization", name: "Ceres" },
      description: "Accompagnement RevOps sur-mesure pour les scale-ups de 200 a 1000 personnes. Restructuration, migration CRM, IA et forecasting predictif.",
      serviceType: "Revenue Operations Consulting",
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

export default function RevOpsScaleupPage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "15%", width: 340, height: 340, borderRadius: "50%", background: "#4B5EFC", opacity: 0.16, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.16, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "50%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "65%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "80%", width: 320, height: 320, borderRadius: "50%", background: "#D4A27F", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "4%", top: "92%", width: 300, height: 300, borderRadius: "50%", background: "#6C5CE7", opacity: 0.14, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="mb-8 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#666] transition-colors">Accueil</Link>
          <span className="mx-1.5">/</span>
          <Link href="/revops" className="hover:text-[#666] transition-colors">RevOps</Link>
          <span className="mx-1.5">/</span>
          <span className="text-[#111]">Scale-ups</span>
        </nav>

        {/* Hero */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Scale-ups 200-1000 personnes</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            RevOps pour Scale-ups : professionnalisez votre revenue engine
          </h1>
          <p className="text-[17px] text-[#666] max-w-[580px] mx-auto leading-[1.7] mb-8">
            Vous grandissez vite. Vos process, votre CRM et vos outils doivent suivre. On structure votre revenue engine pour scaler sans friction.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { value: "200h", label: "gagnees / mois avec l&apos;IA" },
              { value: "+50", label: "scale-ups accompagnees" },
              { value: "3 mois", label: "pour une refonte complete" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">{s.value}</div>
                <p className="text-[11px] text-[#999] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />
            Discuter de votre projet scale-up
          </Link>
        </section>
        <Connector />

        {/* Defis specifiques */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Les defis</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Les defis specifiques des scale-ups</h2>
              <p className="text-[13px] text-[#777] mt-2 leading-[1.6]">
                Quand on passe de 50 a 500 personnes, tout ce qui fonctionnait &quot;a la main&quot; s&apos;effondre. Voici ce qu&apos;on voit chez toutes les scale-ups qu&apos;on accompagne.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {challenges.map((item) => (
                <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                    <h3 className="text-[13px] font-semibold text-[#111]">{item.title}</h3>
                  </div>
                  <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Ce que Ceres apporte */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Notre approche</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Ce que Ceres apporte aux scale-ups</h2>
            <p className="text-[13px] text-[#777] mt-2 leading-[1.6] max-w-[520px] mx-auto">
              Une expertise RevOps & IA pensee pour les organisations complexes. On ne fait pas du consulting : on execute et on livre.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offerings.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-6 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[15px] font-semibold text-[#111]">{item.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* Offre scale-up - dark section */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Notre offre</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Notre offre scale-up</h2>
              <p className="text-[13px] text-white/40">4 formats adaptes a vos enjeux de croissance rapide.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "Projets sur-mesure", desc: "Refonte complete de votre architecture RevOps. Audit, roadmap, execution sur 3 a 6 mois avec des sprints de 2 semaines.", color: "#4B5EFC" },
                { title: "RevOps Part-Time senior", desc: "Un expert senior dedie a votre organisation. Il pilote la roadmap, execute dans vos outils et forme vos equipes.", color: "#FF7A59" },
                { title: "Migrations complexes", desc: "Salesforce vers HubSpot, multi-instance vers architecture unifiee. Zero perte de donnees, zero downtime.", color: "#6D00CC" },
                { title: "Deploiement IA", desc: "Agents Claude, serveurs MCP, scoring predictif, enrichissement automatique. L&apos;IA au service de votre revenue engine.", color: "#22C55E" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="w-3 h-3 rounded-sm mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[13px] font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-[11px] text-white/40 leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Stack recommandee */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Stack technique</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Stack recommandee pour scale-ups</h2>
              <p className="text-[13px] text-[#777] mt-2 leading-[1.6]">
                Budget total : entre 2 000 et 10 000 EUR/mois selon la taille et la maturite. On optimise avant d&apos;ajouter.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {stack.map((tool) => (
                <div key={tool.name} className="rounded-xl border border-[#F2F2F2] p-4">
                  <h3 className="text-[13px] font-semibold text-[#111] mb-1">{tool.name}</h3>
                  <p className="text-[11px] text-[#777] leading-[1.5] mb-2">{tool.role}</p>
                  <span className="text-[10px] font-medium text-[#4B5EFC] bg-[#4B5EFC]/8 px-2 py-0.5 rounded">{tool.budget} EUR/mois</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Cas clients */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="text-center mb-8">
              <div className="mb-4"><Badge>Cas clients</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Ils nous font confiance</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {clients.map((client) => (
                <div key={client.name} className="rounded-xl border border-[#F2F2F2] p-4 text-center">
                  <div className="w-8 h-8 rounded-lg mx-auto mb-3 flex items-center justify-center" style={{ backgroundColor: `${client.color}15` }}>
                    <span className="text-[14px] font-bold" style={{ color: client.color }}>{client.name[0]}</span>
                  </div>
                  <h3 className="text-[13px] font-semibold text-[#111] mb-1">{client.name}</h3>
                  <p className="text-[10px] text-[#777] leading-[1.5]">{client.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* Avantage IA */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Avantage IA</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">L&apos;avantage IA pour les scale-ups</h2>
              <p className="text-[13px] text-white/40">L&apos;IA n&apos;est pas un gadget. C&apos;est ce qui vous permet de scaler vos operations sans multiplier vos effectifs ops par 3.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {iaAdvantages.map((item) => (
                <div key={item.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="w-3 h-3 rounded-sm mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[13px] font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-[11px] text-white/40 leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* FAQ */}
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

        {/* CTA */}
        <section id="contact">
          <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Pret a structurer votre croissance ?
            </h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">
              30 minutes pour comprendre vos enjeux scale-up et definir le bon format d&apos;accompagnement. Audit, projet ou ops dedie.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Reserver un appel strategique
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
