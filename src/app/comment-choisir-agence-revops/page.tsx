"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";
import TrustStrip from "@/components/marketing/TrustStrip";
import StickyBottomCTA from "@/components/marketing/StickyBottomCTA";

const faqs = [
  { q: "Combien coute une agence RevOps en France en 2026 ?", a: "Trois fourchettes selon le modele. Audit RevOps : 5 a 15k EUR forfait. Implementation : 25 a 80k EUR selon scope. RevOps externalise mensualise : 4 500 a 12 000 EUR/mois selon le volume. Au-dela de 20k EUR/mois, c'est souvent surdimensionne pour une PME ou scale-up moyenne." },
  { q: "Combien de temps dure une mission RevOps ?", a: "Audit : 72h a 1 mois. Implementation : 4 a 8 semaines. RevOps externalise : continu, sans engagement long. Une transformation RevOps complete (Audit + Build + Run) dure typiquement 3 a 6 mois avant que vous puissiez evaluer le ROI." },
  { q: "Quelles certifications doit avoir une agence RevOps ?", a: "Au minimum : HubSpot Solutions Partner (Platinum, Diamond ou Elite selon la taille). Salesforce Consulting Partner si vous utilisez Salesforce. Anthropic Partner si l'agence se positionne IA. Mais les certifications ne disent pas tout : les case studies chiffres comptent plus." },
  { q: "Comment savoir si une agence est vraiment specialisee RevOps ?", a: "Trois tests rapides. (1) Demandez 3 cas clients avec metriques precises (NRR avant/apres, forecast accuracy, pipeline coverage). (2) Demandez la composition de l'equipe : combien de consultants seniors vs juniors. (3) Demandez leur process methodologique : si la reponse est floue, ils improvisent." },
  { q: "Faut-il une agence boutique ou une grosse structure ?", a: "Pour PME et scale-ups (< 300 personnes) : boutique specialisee. Plus reactif, seniors sur le projet, meilleur prix. Pour enterprises 500+ : grosse structure type Accenture, Deloitte, ou Big 4 si vous avez besoin de compliance corporate et de scalabilite multi-pays." },
  { q: "Que faire si l'agence ne livre pas les resultats promis ?", a: "Avoir un contrat avec des KPIs precis et des paliers de paiement lies aux livrables. Si echec, exigez un audit independant des livrables avant de payer la derniere tranche. Et ecartez les agences qui refusent ces clauses." },
];

const jsonLd = { "@context": "https://schema.org", "@graph": [
  { "@type": "HowTo", name: "Comment choisir une agence RevOps en 2026", description: "12 criteres pour choisir une agence RevOps en France : expertise, methodologie, certifications, budget, equipe.", totalTime: "PT2H", step: [
    { "@type": "HowToStep", position: 1, name: "Definir vos objectifs RevOps", text: "Audit ? Build ? Run continu ? Selon le besoin, le profil d'agence change radicalement." },
    { "@type": "HowToStep", position: 2, name: "Verifier les certifications cles", text: "HubSpot, Salesforce, Anthropic. Au moins une certification Platinum/Diamond/Elite si CRM-focused." },
    { "@type": "HowToStep", position: 3, name: "Demander 3 cas clients avec metriques", text: "NRR, forecast accuracy, pipeline coverage avant/apres. Sans chiffres, c'est du marketing." },
    { "@type": "HowToStep", position: 4, name: "Tester la methodologie", text: "Demandez le processus. Si c'est flou, ils improvisent au cas par cas." },
    { "@type": "HowToStep", position: 5, name: "Verifier l'equipe assignee", text: "Senior vs junior. Demandez de rencontrer les personnes qui travailleront sur votre compte." },
  ] },
  { "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" }, { "@type": "ListItem", position: 2, name: "Comment choisir une agence RevOps", item: "https://ceres.agency/comment-choisir-agence-revops" }] },
]};

const sections = [
  { id: "introduction", title: "Le contexte 2026" },
  { id: "criteres", title: "Les 12 criteres" },
  { id: "questions", title: "Questions a poser" },
  { id: "pieges", title: "Pieges a eviter" },
  { id: "budget", title: "Budget realiste" },
  { id: "verdict", title: "Notre verdict" },
  { id: "faq", title: "FAQ" },
];

const criteres = [
  { num: "01", title: "Specialisation reelle RevOps", desc: "Differencier les agences vraiment RevOps des agences digital marketing repositionnees. Demandez quelle proportion du CA vient du RevOps (vs SEO, dev, etc.)." },
  { num: "02", title: "Cas clients chiffres", desc: "3 references avec metriques precises. Si l'agence dit \"nous avons aide X\" sans chiffres, c'est insuffisant. Exigez NRR, forecast accuracy, pipeline coverage." },
  { num: "03", title: "Certifications CRM", desc: "HubSpot Solutions Partner (Platinum minimum), Salesforce Partner, Anthropic Partner si IA. Verifiez sur les directories officiels, pas juste les claims marketing." },
  { num: "04", title: "Methodologie documentee", desc: "Une agence serieuse a une methode publique (phases, livrables par phase, KPIs validation). Cere les utilise: Audit / Design / Build / Run." },
  { num: "05", title: "Profil de l'equipe assignee", desc: "Senior vs junior. Combien de consultants seniors travailleront effectivement sur votre projet ? Demandez les CVs et rencontrez-les avant signature." },
  { num: "06", title: "Modele d'engagement", desc: "Forfait audit, scope fixed-price ou retainer mensualise. Chacun a ses cas d'usage. Mefiez-vous des \"T&M open\" sans plafond." },
  { num: "07", title: "Transferabilite des livrables", desc: "Vous devez pouvoir maintenir la stack sans l'agence dans 12-18 mois. Pas de captivite. Documentation, runbooks et formation sont des livrables explicites." },
  { num: "08", title: "Independance editeur", desc: "L'agence revend-elle des licenses ? Touche-t-elle des commissions HubSpot/Salesforce ? Si oui, son conseil est biaise. Preferez l'independance totale." },
  { num: "09", title: "Stack maitrise", desc: "Liste des outils sur lesquels l'agence a fait > 10 projets : HubSpot, Salesforce, Pipedrive, Attio, Clay, Lemlist, Make/n8n, BigQuery, etc." },
  { num: "10", title: "Approche IA pragmatique", desc: "L'IA est-elle vendue comme la solution magique ou comme un levier dans une approche RevOps plus large ? Mefiez-vous des positionnements \"100% IA\"." },
  { num: "11", title: "Reactivite et gouvernance", desc: "SLA de reponse, frequence des rituels (weekly, biweekly), reporting mensuel. Une agence serieuse a un cadre clair." },
  { num: "12", title: "Localisation et culture", desc: "France ou internationale ? Les fuseaux et la maitrise du francais comptent pour les PME. Pour les enterprises multi-pays, multi-langues est un plus." },
];

const pieges = [
  { title: "L'agence \"tout-en-un\" qui fait tout mal", desc: "Une agence qui fait SEO + Ads + RevOps + dev + design n'est specialiste de rien. Le RevOps demande une vraie expertise verticale." },
  { title: "Les certifications sans cas clients", desc: "100 certifications HubSpot ne valent pas 3 case studies chiffres avec des entreprises de votre taille." },
  { title: "La revente de licenses deguisee", desc: "Quand l'agence vous recommande systematiquement HubSpot, demandez-vous combien elle touche en commission. Cela peut biaiser le conseil." },
  { title: "Le scope flou avec clauses 'sur devis'", desc: "Plus de 50% des projets RevOps explosent en cout faute de scope precis. Exigez un scope chiffre, des livrables nommes, des paliers de paiement." },
  { title: "L'absence de transfert de competences", desc: "Si l'agence ne forme pas vos equipes, vous serez captif. Apres 18 mois, vous depenserez 2x plus que prevu." },
];

const questions = [
  "Montrez-moi 3 cas clients de notre taille avec metriques avant/apres",
  "Qui sont les consultants seniors qui travailleront sur notre projet ?",
  "Quelle est votre methodologie ? Decrivez les 4 phases et les livrables",
  "Touchez-vous des commissions des editeurs CRM que vous recommandez ?",
  "Comment vous assurez-vous que notre equipe est autonome dans 18 mois ?",
  "Quel est votre SLA de reponse et la frequence des rituels ?",
  "Quels sont vos KPIs de succes pour ce projet et comment les mesure-t-on ?",
  "Que se passe-t-il si on arrete la mission en milieu de projet ?",
];

const relatedArticles = [
  { title: "Notre methode RevOps en 4 phases", slug: "/methode", category: "Methode", color: "#FF7A59" },
  { title: "Top 10 agences RevOps en France 2026", slug: "/blog/top-agences-revops-france", category: "Comparatif", color: "#6D00CC" },
  { title: "Comment choisir un consultant RevOps", slug: "/comment-choisir-consultant-revops", category: "Guide", color: "#4B5EFC" },
];

export default function CommentChoisirAgenceRevOpsPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("introduction");
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      setProgress(Math.min(100, (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) { const el = els[i]; if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; } }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "55%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28"><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p><nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav></div></aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><span className="text-[#666]">Comment choisir une agence RevOps</span></nav>
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4"><Badge>Guide</Badge><span className="text-[12px] text-[#999]">Mai 2026</span><span className="text-[12px] text-[#999]">12 min</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-4">Comment choisir une agence RevOps en 2026 ?</h1>
              <p className="text-[17px] text-[#666] leading-[1.7]">12 criteres concrets, les pieges classiques, les questions a poser et le budget realiste. Le framework qu&apos;on aurait aime avoir quand on a choisi nos premiers prestataires.</p>
            </div>

            <article>
              <section id="introduction" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Le contexte 2026</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Le marche des agences RevOps en France a explose depuis 2023. Gartner attend 75% des entreprises B2B haute-croissance en mode RevOps formalise en 2026. Resultat : des dizaines d&apos;agences se sont positionnees sur ce mot-cle, avec des qualites tres inegales.</p>
                  <p>Beaucoup sont d&apos;anciennes agences digital marketing qui ont rebadge leur offre. Quelques-unes sont vraiment specialisees. Distinguer les deux n&apos;est pas simple sans une grille de lecture.</p>
                  <p>Ce guide donne 12 criteres concrets pour vous decider sans vous tromper. Et oui, on a un parti pris : on est nous-meme une agence RevOps. Mais on prefere perdre un deal qu&apos;avoir un client mal-fit, donc les criteres sont honnetes.</p>
                </div>
              </div></section>
              <Connector />

              <section id="criteres" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Les 12 criteres d&apos;evaluation</h2>
                <div className="space-y-3">
                  {criteres.map((c) => (
                    <div key={c.num} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all">
                      <div className="flex items-start gap-3">
                        <div className="text-[24px] font-bold text-[#F2F2F2] leading-none select-none shrink-0">{c.num}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[13px] font-semibold text-[#111] mb-1.5 leading-[1.3]">{c.title}</h3>
                          <p className="text-[12px] text-[#777] leading-[1.65]">{c.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div></section>
              <Connector />

              <section id="questions" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">8 questions a poser systematiquement</h2>
                <div className="space-y-2.5">
                  {questions.map((q, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                      <span className="font-mono text-[11px] text-[#FF7A59] font-bold shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <p className="text-[13px] text-[#111] leading-[1.5]">{q}</p>
                    </div>
                  ))}
                </div>
              </div></section>
              <Connector />

              <section id="pieges" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">5 pieges classiques a eviter</h2>
                <div className="space-y-3">
                  {pieges.map((p) => (
                    <div key={p.title} className="rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4">
                      <h3 className="text-[13px] font-semibold text-[#111] mb-1">{p.title}</h3>
                      <p className="text-[12px] text-[#777] leading-[1.65]">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div></section>
              <Connector />

              <section id="budget" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Budget realiste en France 2026</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-[12px] border border-[#E8E8E8]">
                    <thead className="bg-[#FAFAFA]"><tr><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Mission</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Fourchette</th><th className="text-left p-3 border-b border-[#E8E8E8] font-semibold text-[#111]">Duree</th></tr></thead>
                    <tbody className="text-[#555]">
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Audit RevOps</td><td className="p-3 border-b border-[#F2F2F2]">5 000 - 15 000 EUR forfait</td><td className="p-3 border-b border-[#F2F2F2]">72h - 1 mois</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">Implementation</td><td className="p-3 border-b border-[#F2F2F2]">25 000 - 80 000 EUR</td><td className="p-3 border-b border-[#F2F2F2]">4 - 8 semaines</td></tr>
                      <tr><td className="p-3 border-b border-[#F2F2F2] font-medium text-[#111]">RevOps externalise (mensualise)</td><td className="p-3 border-b border-[#F2F2F2]">4 500 - 12 000 EUR/mois</td><td className="p-3 border-b border-[#F2F2F2]">Continu, sans engagement</td></tr>
                      <tr><td className="p-3 font-medium text-[#111]">Migration CRM complete</td><td className="p-3">15 000 - 50 000 EUR</td><td className="p-3">6 - 12 semaines</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[12px] text-[#999] mt-4">Au-dela de 20k EUR/mois en RevOps externalise pour une PME, posez-vous des questions sur l&apos;adequation taille-prestation.</p>
              </div></section>
              <Connector />

              <section id="verdict" className="mb-8"><div className="rounded-2xl bg-[#111] p-5 md:p-8">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-white tracking-[-0.02em] mb-5">Notre verdict</h2>
                <div className="space-y-4 text-[13px] text-white/70 leading-[1.75]">
                  <p>Le piege #1 que nous voyons constamment : choisir une agence qui dit ce que vous voulez entendre, plutot que celle qui dit ce que vous devez entendre.</p>
                  <p>Une bonne agence RevOps va vous challenger des le premier call. Elle va vous dire si votre data est sale, si votre process est immature, si votre choix de CRM n&apos;est pas le bon. Si tout le monde est d&apos;accord avec vous au premier call, c&apos;est mauvais signe.</p>
                  <p>Le critere ultime : <strong className="text-white">l&apos;agence prefere-t-elle perdre votre deal que vous decevoir ?</strong> Si oui, signez. Si elle dit oui a tout, fuyez.</p>
                </div>
              </div></section>
              <Connector />

              <section id="faq" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">FAQ choix agence RevOps</h2>
                <div className="space-y-4">{faqs.map((f, i) => (<div key={i} className="border-l-[3px] border-[#FF7A59] pl-4"><p className="text-[13px] font-semibold text-[#111] mb-2">{f.q}</p><p className="text-[12px] text-[#555] leading-[1.7]">{f.a}</p></div>))}</div>
              </div></section>
              <Connector />

              <TrustStrip />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Vous evaluez Ceres ? On vous donne nos cas clients chiffres en 30 min.</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">NRR, forecast accuracy, pipeline coverage avant/apres sur 5 cas representatifs. Sans engagement.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                    Reserver 30 min avec Guillaume
                  </a>
                  <a href="https://meetings.hubspot.com/simon156" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white/10 text-white text-[13px] font-medium hover:bg-white/20 transition-colors">
                    Ou avec Simon
                  </a>
                </div>
              </div></section>
              <Connector />

              <section><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedArticles.map((r) => (<Link key={r.slug} href={r.slug} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3></Link>))}</div>
              </section>
            </article>
          </div>
        </div>
      </div>

      <StickyBottomCTA
        message="On vous donne nos cas clients chiffres en 30 min"
        ctaLabel="Reserver"
        ctaHref="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9"
        storageKey="comment-choisir-agence"
      />
    </div>
  );
}
