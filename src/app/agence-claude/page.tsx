"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const whyClaude = [
  { title: "Qualite de raisonnement", desc: "Claude raisonne mieux sur les donnees structurees : pipelines, tableaux, CRM. La ou d\u2019autres LLMs hallucinent sur les chiffres, Claude produit des analyses fiables et exploitables.", color: "#D4A27F" },
  { title: "Fenetre de contexte de 200K tokens", desc: "Vous pouvez donner a Claude votre pipeline entier, vos 50 derniers deals, vos transcriptions de calls. Il ne perd pas le fil. C\u2019est la difference entre un assistant qui comprend le contexte et un qui repond au hasard.", color: "#D4A27F" },
  { title: "Claude Code", desc: "Un environnement ou Claude ne repond pas, il agit. Il lit vos fichiers, execute du code, se connecte a vos outils. La difference entre un consultant qui donne des conseils et un qui fait le travail.", color: "#6D00CC" },
  { title: "MCP (Model Context Protocol)", desc: "Le standard cree par Anthropic pour connecter Claude a vos outils : HubSpot, Slack, Notion, Google Calendar, Gmail. Pas de Zapier entre les deux. Une connexion directe, en temps reel.", color: "#4B5EFC" },
  { title: "Ton professionnel", desc: "Pas de \u2018Certainly!\u2019 ou de formulations corporate creuses. Claude ecrit comme un humain competent. C\u2019est crucial pour les emails, les rapports et les propositions commerciales generees par l\u2019IA.", color: "#22C55E" },
  { title: "Securite et controle", desc: "Anthropic est le leader en IA responsable. Les donnees ne sont pas utilisees pour l\u2019entrainement. Les agents n\u2019accedent qu\u2019aux donnees autorisees. Vous gardez le controle.", color: "#FF7A59" },
];

const useCases = [
  { title: "Enrichissement de leads", desc: "Chaque lead entrant est enrichi en 30 secondes. Brief contextuel dans la fiche CRM.", result: "15 min \u2192 2 min" },
  { title: "Propositions commerciales", desc: "Claude genere des propositions personnalisees en PDF, dans votre charte, avec les bonnes donnees.", result: "3h \u2192 30 min" },
  { title: "Resumes de calls", desc: "Apres chaque appel, resume structure + objections + next steps injectes dans le CRM.", result: "15 min/call \u2192 0" },
  { title: "Scoring predictif", desc: "Score dynamique par lead et par deal, base sur des dizaines de signaux contextuels.", result: "Forecast +60%" },
  { title: "Reporting automatise", desc: "Rapport hebdo genere et distribue automatiquement chaque lundi.", result: "3h/sem \u2192 0" },
  { title: "Detection du churn", desc: "Surveillance des signaux faibles en continu. Alerte 45 jours avant.", result: "J-10 \u2192 J-45" },
  { title: "Sequences outbound", desc: "Emails personnalises par persona, secteur et signaux detectes.", result: "Reponse 3% \u2192 11%" },
  { title: "Gestion documentaire", desc: "Lecture, extraction et classement automatique de documents. Factures, contrats, devis.", result: "Heures \u2192 minutes" },
];

const claudeCodeCards = [
  { title: "Il lit votre CRM", desc: "Via MCP, Claude Code se connecte a HubSpot, Salesforce, Pipedrive. Il accede a vos contacts, deals, proprietes en temps reel. Il peut analyser votre pipeline entier en quelques secondes.", color: "#4B5EFC" },
  { title: "Il execute des actions", desc: "Enrichir des fiches, mettre a jour des proprietes, generer des rapports, creer des dashboards. Claude Code ne suggere pas, il fait.", color: "#6D00CC" },
  { title: "Il cree des outils sur mesure", desc: "Un calculateur de ROI, un formulaire de qualification, un dashboard custom. Ce qui prenait 2 semaines de dev prend 2 heures avec Claude Code.", color: "#22C55E" },
];

const steps = [
  { num: "01", title: "Diagnostic", desc: "On identifie les taches chronophages par departement et les 3 quick wins Claude les plus impactants.", time: "1 semaine" },
  { num: "02", title: "Fondation Data", desc: "On nettoie votre base CRM et on connecte Claude via MCP. Sans donnees propres, Claude ne peut rien faire d\u2019intelligent.", time: "2-4 semaines" },
  { num: "03", title: "Deploiement", desc: "On configure et deploie le premier agent Claude en production. Resultats mesures vs baseline.", time: "1-2 semaines" },
  { num: "04", title: "Iteration", desc: "On ajoute des agents, on optimise, on forme les equipes. L\u2019avantage se compose.", time: "Continu" },
];

const formations = [
  { title: "Pour les commerciaux", desc: "Utiliser Claude pour preparer les calls, rediger des emails personnalises, generer des propositions, analyser les objections. 0.5 jour.", color: "#FF7A59" },
  { title: "Pour les marketeurs", desc: "Utiliser Claude pour produire du contenu a grande echelle, analyser les campagnes, segmenter, personnaliser. 0.5 jour.", color: "#6C5CE7" },
  { title: "Pour les ops et managers", desc: "Utiliser Claude Code pour automatiser le reporting, creer des dashboards, nettoyer la data, deployer des agents. 1 jour.", color: "#4B5EFC" },
];

const faqItems = [
  { q: "Pourquoi Claude et pas ChatGPT ?", a: "Raisonnement superieur sur donnees structurees, MCP pour connexion native aux outils, Claude Code pour l\u2019execution, ton professionnel, securite Anthropic. Pour les operations B2B, Claude est le modele le plus fiable et le plus adapte." },
  { q: "C\u2019est quoi Claude Code ?", a: "Environnement d\u2019execution de Claude. Il lit les fichiers, execute du code, se connecte aux outils via MCP. Pas un chatbot, un assistant qui agit." },
  { q: "C\u2019est quoi MCP ?", a: "Model Context Protocol, standard d\u2019Anthropic pour connecter Claude a des outils externes. HubSpot, Slack, Notion, Gmail, Google Calendar. Une connexion directe, sans intermediaire." },
  { q: "Combien ca coute d\u2019utiliser Claude ?", a: "API Claude : 50-200 EUR/mois selon le volume. Pas de licence enterprise. C\u2019est le cout d\u2019un dejeuner d\u2019equipe par mois." },
  { q: "Et si un meilleur modele sort demain ?", a: "La methodologie est agnostique. On utilise Claude aujourd\u2019hui parce que c\u2019est le meilleur pour le B2B. Si ca change, on migre. Vos process et vos agents restent." },
  { q: "C\u2019est securise ?", a: "Anthropic ne reutilise pas vos donnees pour l\u2019entrainement. Les agents n\u2019accedent qu\u2019aux donnees autorisees. Acces en lecture seule par defaut." },
  { q: "On a besoin de competences tech ?", a: "Non. On deploie et configure. Votre equipe utilise les resultats dans ses outils habituels." },
  { q: "Ca marche avec quel CRM ?", a: "HubSpot, Salesforce, Pipedrive. MCP est agnostique, on peut connecter Claude a la plupart des outils B2B." },
  { q: "Quelle est la difference avec votre offre Deploiement IA ?", a: "L\u2019offre Deploiement IA est tool-agnostic. L\u2019offre Agence Claude est specifiquement centree sur Claude et Claude Code. Meme methode, stack specifique." },
  { q: "Comment demarrer ?", a: "Un appel de 30 minutes pour identifier les 3 premiers quick wins Claude. Gratuit, sans engagement." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Agence Claude",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Deploiement de Claude et Claude Code pour les entreprises B2B. Enrichissement, scoring, reporting, agents IA connectes a votre CRM. 250+ clients accompagnes.",
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

export default function AgenceClaudePage() {
  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="mb-8 text-[12px] text-[#999]" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link></li>
            <li>/</li>
            <li className="text-[#111] font-medium">Agence Claude</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Agence Claude</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            L&apos;agence qui deploie Claude dans vos operations B2B
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-4">
            On ne fait pas de l&apos;IA generique. On deploie Claude et Claude Code dans vos operations commerciales parce que c&apos;est le modele le plus fiable pour le B2B. Enrichissement, scoring, reporting, agents autonomes, connectes a votre CRM.
          </p>
          <p className="text-[14px] text-[#999] max-w-[500px] mx-auto leading-[1.6] mb-8">
            250+ entreprises accompagnees. La premiere agence en France specialisee sur Claude pour les operations revenue.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#D4A27F] tracking-[-0.02em]">250+</div>
              <p className="text-[11px] text-[#999]">clients</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#6D00CC] tracking-[-0.02em]">50+</div>
              <p className="text-[11px] text-[#999]">cas d&apos;usage Claude</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">2 sem</div>
              <p className="text-[11px] text-[#999]">premier agent en prod</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Deployer Claude dans mes ops
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Pourquoi Claude et pas un autre LLM ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Pourquoi Claude</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Ce qui fait la difference pour les ops B2B</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whyClaude.map((item) => (
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

        {/* ───── 3. Ce qu'on fait avec Claude chez nos clients ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">En production</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Pas des demos. Des resultats.</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {useCases.map((uc) => (
                <div key={uc.title} className="rounded-xl bg-white/5 border border-white/10 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-[14px] font-semibold text-white">{uc.title}</h3>
                    <span className="text-[11px] font-medium text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded">{uc.result}</span>
                  </div>
                  <p className="text-[12px] text-white/40 leading-[1.65]">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 4. Claude Code : l'arme secrete ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Claude Code</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Le pont entre l&apos;IA et vos outils</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Claude Code est ce qui transforme Claude d&apos;un chatbot en coworker. Il ne repond pas a des prompts, il agit dans votre environnement.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {claudeCodeCards.map((card) => (
              <div key={card.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: card.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{card.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 5. Notre methode de deploiement ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Methode</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">Comment on deploie Claude chez vous</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[12px] font-bold bg-[#111]/5 text-[#111]">{step.num}</div>
                    <h3 className="text-[14px] font-semibold text-[#111]">{step.title}</h3>
                  </div>
                  <span className="text-[11px] font-medium text-[#4B5EFC]">{step.time}</span>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 6. Formation Claude pour les equipes ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Formation</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-2">On forme vos equipes a utiliser Claude au quotidien</h2>
            <p className="text-[13px] text-[#999] max-w-[520px] mx-auto">Pas une formation generique IA. Une formation specifique Claude et Claude Code, appliquee au metier de chaque equipe.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {formations.map((f) => (
              <div key={f.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: f.color }} />
                  <h3 className="text-[14px] font-semibold text-[#111]">{f.title}</h3>
                </div>
                <p className="text-[12px] text-[#777] leading-[1.65]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <Connector />

        {/* ───── 7. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes sur Claude et notre accompagnement</h2>
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

        {/* ───── 8. CTA ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-8 md:p-12 text-center">
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-3">Pret a deployer Claude dans vos operations ?</h2>
            <p className="text-[14px] text-white/40 mb-6 max-w-[460px] mx-auto">Un appel de 30 minutes pour identifier vos 3 premiers quick wins Claude. Gratuit, sans engagement.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Deployer Claude dans mes ops
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
