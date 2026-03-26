"use client";

import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const problems = [
  { title: "CRM chaos", desc: "Les contacts sont dans la tete du fondateur, dans un Google Sheet et dans un CRM a moitie rempli. Personne ne sait ou en est un deal." },
  { title: "Zero processus", desc: "Chaque commercial fait a sa maniere. Pas de pipeline clair, pas d&apos;etapes definies, pas de suivi structure." },
  { title: "Excel partout", desc: "Le forecast est un fichier Excel envoye par email le vendredi. Les dashboards n&apos;existent pas." },
  { title: "Le fondateur fait tout", desc: "Le CEO fait la prospection, le closing, le suivi client et le reporting. Ca ne scale pas." },
  { title: "Aucune visibilite", desc: "Impossible de repondre a des questions simples : combien de leads ce mois ? Quel taux de conversion ? Quel cycle de vente ?" },
];

const apports = [
  { title: "Audit rapide (48h)", desc: "On analyse votre situation actuelle, vos outils, vos process et vos donnees en 48 heures. Un diagnostic clair, pas un rapport de 50 pages.", color: "#4B5EFC" },
  { title: "CRM setup en 2 semaines", desc: "HubSpot configure avec vos pipelines, proprietes, vues et automatisations de base. Pret a utiliser, pas juste installe.", color: "#FF7A59" },
  { title: "Scoring basique", desc: "Un lead scoring simple mais efficace pour prioriser les leads chauds. Pas besoin de 10 000 contacts pour commencer.", color: "#6D00CC" },
  { title: "Premier dashboard", desc: "Un tableau de bord avec les 5 metriques qui comptent vraiment : leads, pipeline, conversion, cycle, revenue.", color: "#22C55E" },
  { title: "Fondations qui tiennent", desc: "Des process documentes et une stack pensee pour scaler. Quand vous passerez de 10 a 50 personnes, tout tiendra.", color: "#D4A27F" },
];

const stackTools = [
  { name: "HubSpot Free/Starter", role: "CRM et pipeline", cost: "0-45 EUR/mois" },
  { name: "Clay (credits)", role: "Enrichissement de donnees", cost: "0-150 EUR/mois" },
  { name: "Lemlist Starter", role: "Sequences outbound", cost: "59 EUR/mois" },
  { name: "Notion", role: "Documentation et playbooks", cost: "0 EUR/mois" },
  { name: "Slack", role: "Communication interne", cost: "0 EUR/mois" },
];

const erreurs = [
  { title: "Sur-outiller trop tot", desc: "Acheter Salesforce, 6flows, ZoomInfo et Gong quand on a 3 commerciaux. La stack ideale d&apos;une startup, c&apos;est 3-4 outils, pas 15. Chaque outil ajoute de la complexite. Commencez lean." },
  { title: "Pas de process avant les outils", desc: "Un CRM sans processus de vente defini, c&apos;est un tableur glorifie. Definissez d&apos;abord vos etapes de vente, vos criteres de qualification, vos regles de handoff. Ensuite seulement, configurez les outils." },
  { title: "Recruter un RevOps trop tot", desc: "Un Head of RevOps a 70K EUR avant d&apos;avoir 20 commerciaux, c&apos;est un luxe. Externalisez d&apos;abord pour poser les fondations. Recrutez quand le volume justifie un poste a temps plein." },
];

const faqItems = [
  { q: "Quand est-ce qu&apos;une startup doit commencer le RevOps ?", a: "Des que vous avez plus de 2 personnes qui touchent au cycle de vente (fondateur + 1 commercial, ou fondateur + SDR). C&apos;est le moment ou les process informels ne suffisent plus et ou vous commencez a perdre des deals par manque de suivi." },
  { q: "Quel budget prevoir pour le RevOps en startup ?", a: "La stack outils coute entre 0 et 200 EUR/mois avec HubSpot Free/Starter. Pour l&apos;accompagnement Ceres, notre pack startup est concu pour etre accessible. On parle de quelques milliers d&apos;euros, pas de dizaines de milliers." },
  { q: "HubSpot Free suffit-il pour une startup ?", a: "Oui, pour demarrer. HubSpot Free couvre le CRM, le pipeline basique et le suivi des contacts. On bascule sur Starter quand vous avez besoin d&apos;automatisations, de sequences ou de reporting avance. En general, ca arrive vers 10-15 deals par mois." },
  { q: "Combien de temps pour voir les premiers resultats ?", a: "2 semaines pour le setup CRM. 1 mois pour les premiers dashboards fiables. 3 mois pour un processus commercial structure et mesurable. Le ROI est visible des le premier mois grace a la visibilite sur le pipeline." },
  { q: "On n&apos;a que 5 commerciaux, c&apos;est trop tot ?", a: "Non, c&apos;est le moment ideal. A 5 commerciaux, les mauvaises habitudes se prennent vite et sont dures a corriger ensuite. Poser les fondations maintenant, c&apos;est s&apos;eviter 6 mois de nettoyage quand vous serez 20." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "RevOps pour Startups",
      provider: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
      description: "Accompagnement RevOps pour startups de 5 a 50 personnes. Audit, setup CRM HubSpot, structuration des operations commerciales.",
      serviceType: "Revenue Operations pour Startups",
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

export default function RevOpsStartupPage() {
  return (
    <div className="relative pt-[100px] pb-16 overflow-x-hidden">
      {/* Blobs */}
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "18%", width: 320, height: 320, borderRadius: "50%", background: "#4B5EFC", opacity: 0.16, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "35%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.16, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "5%", top: "55%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "5%", top: "72%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.15, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "85%", width: 320, height: 320, borderRadius: "50%", background: "#D4A27F", opacity: 0.15, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">

        {/* Breadcrumb */}
        <nav className="mb-8 text-[12px] text-[#999]" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link></li>
            <li>/</li>
            <li><Link href="/revops" className="hover:text-[#111] transition-colors">RevOps</Link></li>
            <li>/</li>
            <li className="text-[#111] font-medium">Startups</li>
          </ol>
        </nav>

        {/* ───── 1. Hero ───── */}
        <section className="text-center mb-20">
          <div className="mb-4"><Badge>Startups 5-50 personnes</Badge></div>
          <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">
            RevOps pour Startups : structurez avant de scaler
          </h1>
          <p className="text-[17px] text-[#666] max-w-[560px] mx-auto leading-[1.7] mb-8">
            Les startups qui scalent ne sont pas celles qui vendent le plus. Ce sont celles qui ont pose les fondations operationnelles au bon moment.
          </p>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#4B5EFC] tracking-[-0.02em]">250+</div>
              <p className="text-[11px] text-[#999]">clients accompagnes</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#FF7A59] tracking-[-0.02em]">60%</div>
              <p className="text-[11px] text-[#999]">sont des startups</p>
            </div>
            <div className="w-px h-10 bg-[#E8E8E8]" />
            <div className="text-center">
              <div className="text-[28px] font-bold text-[#22C55E] tracking-[-0.02em]">2 sem</div>
              <p className="text-[11px] text-[#999]">pour etre operationnel</p>
            </div>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
            <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
            Diagnostiquer mon RevOps
          </Link>
        </section>
        <Connector />

        {/* ───── 2. Problemes sans RevOps ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Le constat</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Les problemes des startups sans RevOps</h2>
              <p className="text-[13px] text-[#999] mt-2">On les voit chaque semaine. Ce n&apos;est pas un jugement, c&apos;est un diagnostic.</p>
            </div>
            <div className="space-y-3">
              {problems.map((p) => (
                <div key={p.title} className="flex items-start gap-3 p-4 rounded-xl bg-[#FAFAFA]">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-[#EF4444]">
                    <path d="M8 3v6M8 11.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <div>
                    <h3 className="text-[13px] font-semibold text-[#111] mb-0.5">{p.title}</h3>
                    <p className="text-[12px] text-[#777] leading-[1.6]">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 3. Ce que Ceres apporte ───── */}
        <section>
          <div className="text-center mb-10">
            <div className="mb-4"><Badge>Notre approche</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Ce que Ceres apporte a une startup</h2>
            <p className="text-[13px] text-[#999] mt-2 max-w-[480px] mx-auto">Pas de consulting theorique. Des livrables concrets, en quelques semaines.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {apports.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
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

        {/* ───── 4. Offre startup ───── */}
        <section>
          <div className="rounded-2xl bg-[#111] p-6 md:p-10">
            <div className="mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Pack Starter</span>
              <h2 className="text-[24px] sm:text-[30px] font-semibold text-white tracking-[-0.02em] mb-2">Notre offre startup</h2>
              <p className="text-[13px] text-white/40">Concue pour les equipes de 5 a 50 personnes. Tarif accessible, resultats concrets.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <div className="w-3 h-3 rounded-sm mb-3 bg-[#4B5EFC]" />
                <h3 className="text-[13px] font-semibold text-white mb-1.5">Audit RevOps</h3>
                <p className="text-[11px] text-white/40 leading-[1.6]">Analyse complete de votre stack, vos process et vos donnees. Diagnostic en 48h avec plan d&apos;action priorise.</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <div className="w-3 h-3 rounded-sm mb-3 bg-[#FF7A59]" />
                <h3 className="text-[13px] font-semibold text-white mb-1.5">Setup HubSpot</h3>
                <p className="text-[11px] text-white/40 leading-[1.6]">Configuration complete du CRM : pipelines, proprietes, automatisations, dashboards. Operationnel en 2 semaines.</p>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <div className="w-3 h-3 rounded-sm mb-3 bg-[#22C55E]" />
                <h3 className="text-[13px] font-semibold text-white mb-1.5">3 mois d&apos;accompagnement</h3>
                <p className="text-[11px] text-white/40 leading-[1.6]">Suivi hebdomadaire, ajustements, formation des equipes, optimisation continue. On reste jusqu&apos;a ce que ca tourne.</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[12px] text-white/50">Audit + Setup + 3 mois de suivi. Un tarif fixe, pas de surprise.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                <span className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />
                Demander un devis
              </Link>
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 5. Stack recommandee ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>Stack technique</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">La stack recommandee pour une startup</h2>
              <p className="text-[13px] text-[#999] mt-2">Budget total : 0 a 200 EUR/mois. Pas besoin de plus pour demarrer.</p>
            </div>
            <div className="space-y-2">
              {stackTools.map((tool) => (
                <div key={tool.name} className="flex items-center justify-between p-3.5 rounded-lg bg-[#FAFAFA]">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-sm bg-[#4B5EFC]" />
                    <div>
                      <span className="text-[13px] font-semibold text-[#111]">{tool.name}</span>
                      <span className="text-[11px] text-[#999] ml-2">{tool.role}</span>
                    </div>
                  </div>
                  <span className="text-[12px] font-medium text-[#4B5EFC]">{tool.cost}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3.5 rounded-lg bg-[#F0F4FF] border border-[#D9E2FF]">
              <p className="text-[12px] text-[#4B5EFC] leading-[1.6]">
                On vous aide a choisir les bons outils et a les configurer. Pas de sur-equipement : chaque outil doit avoir un role clair et mesurable.
              </p>
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 6. Cas clients startups ───── */}
        <section>
          <div className="text-center mb-8">
            <div className="mb-4"><Badge>Cas clients</Badge></div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em]">Des startups qui ont structure leur RevOps</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-3 h-3 rounded-sm bg-[#4B5EFC]" />
                <h3 className="text-[15px] font-semibold text-[#111]">Beedeez</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-4">
                Startup EdTech en croissance. HubSpot desorganise, pas de process outbound, zero visibilite sur le pipeline. Ceres a restructure le CRM, deploye les sequences Lemlist et mis en place un reporting hebdomadaire automatise.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-[18px] font-bold text-[#4B5EFC]">+45%</div>
                  <p className="text-[10px] text-[#999]">pipeline en 3 mois</p>
                </div>
                <div className="w-px h-8 bg-[#E8E8E8]" />
                <div className="text-center">
                  <div className="text-[18px] font-bold text-[#22C55E]">2x</div>
                  <p className="text-[10px] text-[#999]">meetings outbound</p>
                </div>
              </div>
              <Link href="/cas-clients/beedeez" className="text-[12px] font-medium text-[#4B5EFC] hover:underline">
                Lire le cas complet
              </Link>
            </div>
            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-3 h-3 rounded-sm bg-[#FF7A59]" />
                <h3 className="text-[15px] font-semibold text-[#111]">Elax Energie</h3>
              </div>
              <p className="text-[12px] text-[#777] leading-[1.65] mb-4">
                Startup CleanTech. CRM a moitie rempli, pas de pipeline structure, reporting inexistant. Audit complet, remise a plat du HubSpot, creation des dashboards de pilotage et formation de l&apos;equipe commerciale.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-[18px] font-bold text-[#FF7A59]">92%</div>
                  <p className="text-[10px] text-[#999]">data quality CRM</p>
                </div>
                <div className="w-px h-8 bg-[#E8E8E8]" />
                <div className="text-center">
                  <div className="text-[18px] font-bold text-[#22C55E]">-4h</div>
                  <p className="text-[10px] text-[#999]">reporting / semaine</p>
                </div>
              </div>
              <Link href="/cas-clients/elax-energie" className="text-[12px] font-medium text-[#FF7A59] hover:underline">
                Lire le cas complet
              </Link>
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 7. Erreurs a eviter ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-6">
              <div className="mb-4"><Badge>A eviter</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Les 3 erreurs RevOps des startups</h2>
            </div>
            <div className="space-y-4">
              {erreurs.map((e, i) => (
                <div key={e.title} className="flex items-start gap-4 p-4 rounded-xl bg-[#FAFAFA]">
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-[#FEE2E2] flex items-center justify-center text-[13px] font-bold text-[#EF4444]">{i + 1}</span>
                  <div>
                    <h3 className="text-[13px] font-semibold text-[#111] mb-1">{e.title}</h3>
                    <p className="text-[12px] text-[#777] leading-[1.65]">{e.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Connector />

        {/* ───── 8. FAQ ───── */}
        <section>
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
            <div className="mb-8">
              <div className="mb-4"><Badge>FAQ</Badge></div>
              <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Questions frequentes</h2>
            </div>
            <div className="space-y-0 divide-y divide-[#F2F2F2]">
              {faqItems.map((f, i) => (
                <div key={i} className="py-4">
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
            <h2 className="text-[24px] sm:text-[30px] font-semibold text-[#111] tracking-[-0.02em] mb-3">
              Votre startup merite des fondations solides
            </h2>
            <p className="text-[14px] text-[#999] mb-6 max-w-[480px] mx-auto">
              30 minutes pour comprendre ou vous en etes et ce qu&apos;on peut mettre en place. Sans engagement.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
              <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
              Reserver un appel decouverte
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
