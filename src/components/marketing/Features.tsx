"use client";

import { useState } from "react";
import Badge from "./Badge";

type Problem = { title: string; desc: string; icons: string[]; cat: string };

const problems: Problem[] = [
  // Mon CRM ne marche pas
  { title: "Ecart forecast vs reel", desc: "Vos previsions ne collent jamais au reel. Le board perd confiance et chaque QBR est un exercice de rattrapage.", icons: ["hubspot.com", "salesforce.com"], cat: "crm" },
  { title: "CRM rempli n'importe comment", desc: "Chaque commercial a sa facon de remplir le CRM. Les donnees sont inexploitables pour le management.", icons: ["hubspot.com", "salesforce.com"], cat: "crm" },
  { title: "Deals fantomes dans le pipe", desc: "Des opportunites ouvertes depuis 6 mois sans activite. Ca gonfle le pipeline artificiellement et fausse toutes les previsions.", icons: ["hubspot.com", "salesforce.com"], cat: "crm" },
  { title: "MQL vs SQL : personne n'est d'accord", desc: "Marketing et Sales n'ont pas la meme definition d'un lead qualifie. Les SLA ne sont pas respectes, les leads refroidissent.", icons: ["hubspot.com", "slack.com"], cat: "crm" },
  { title: "Lead routing au doigt mouille", desc: "Les leads sont assignes manuellement. Pas de round-robin, pas de regles, pas de SLA. Les meilleurs leads tombent chez le mauvais commercial.", icons: ["hubspot.com", "salesforce.com"], cat: "crm" },
  { title: "Aucune visibilite sur le cycle de vente", desc: "Combien de temps un deal met de discovery a closing ? Personne ne peut repondre. Impossible d'optimiser ce qu'on ne mesure pas.", icons: ["hubspot.com", "salesforce.com"], cat: "crm" },

  // Mes donnees sont sales
  { title: "40% de votre base est obsolete", desc: "Contacts qui ont change de poste, emails invalides, champs vides. La degradation est naturelle : 30% par an. Sans maintenance, votre CRM se degrade mecaniquement.", icons: ["hubspot.com", "salesforce.com"], cat: "data" },
  { title: "Doublons partout", desc: "15 a 25% de doublons en moyenne. Meme contact cree par 3 commerciaux differents. Pipeline gonfle, reportings fausses, experiences client deplorables.", icons: ["hubspot.com", "salesforce.com"], cat: "data" },
  { title: "Aucune source unique de verite", desc: "Le MRR dit un chiffre dans le CRM, un autre dans Stripe, un autre dans le fichier Excel du DAF. Personne ne sait quel est le bon.", icons: ["hubspot.com", "notion.so"], cat: "data" },
  { title: "Conventions differentes par equipe", desc: "'France', 'FR', 'fra', 'FRANCE' dans le meme champ. 'PDG', 'CEO', 'DG' pour le meme poste. Impossible de filtrer, trier ou automatiser.", icons: ["hubspot.com", "slack.com"], cat: "data" },
  { title: "Champs vides, segmentation impossible", desc: "Un contact sans industrie est exclu de toute segmentation. Un deal sans montant fausse le forecast. Les champs vides ne sont pas neutres, ils sont toxiques.", icons: ["hubspot.com", "make.com"], cat: "data" },
  { title: "Pas de gouvernance", desc: "On nettoie la base une fois par an. 3 mois plus tard, c'est reparti. Le nettoyage sans gouvernance, c'est un regime sans changement d'habitudes.", icons: ["hubspot.com", "make.com"], cat: "data" },

  // Mon equipe perd du temps
  { title: "3h de reporting chaque lundi", desc: "Les managers copient-collent des chiffres dans des slides au lieu de coacher leurs equipes. Le reporting devrait etre automatique.", icons: ["notion.so", "hubspot.com"], cat: "ops" },
  { title: "Outils completement deconnectes", desc: "CRM, Slack, outil de prospection, Notion, outil de calls : rien ne se parle. Vos equipes jonglent entre 8 onglets.", icons: ["make.com", "slack.com", "hubspot.com"], cat: "ops" },
  { title: "Enrichissement a la main", desc: "Vos commerciaux passent 15 min par prospect a chercher des infos sur LinkedIn. A grande echelle, c'est des centaines d'heures perdues par mois.", icons: ["hubspot.com", "slack.com"], cat: "ops" },
  { title: "Pas de structure unifiee", desc: "Marketing, Sales et CS fonctionnent chacun avec leurs process, leurs outils, leurs metriques. Aucune vision transverse, chaque silo avance seul.", icons: ["hubspot.com", "slack.com"], cat: "ops" },
  { title: "Process non documentes", desc: "Quand un commercial quitte l'entreprise, son process part avec lui. Rien n'est formalise, rien n'est reproductible, rien n'est scalable.", icons: ["hubspot.com", "notion.so"], cat: "ops" },
  { title: "Donnees dupliquees entre les outils", desc: "Les memes infos sont copiees dans 4 outils differents. Ca cree du bruit, des erreurs et personne ne sait quelle version est la bonne.", icons: ["make.com", "hubspot.com", "notion.so"], cat: "ops" },

  // L'IA pourrait aider
  { title: "L'IA ? Pas commence", desc: "Vous savez que l'IA peut aider mais personne n'a le temps ni le setup pour s'y mettre. Pendant ce temps, vos concurrents avancent.", icons: ["claude.ai", "make.com"], cat: "ia" },
  { title: "L'IA n'est pas connectee au CRM", desc: "Vous utilisez l'IA en copier-coller. Elle n'a pas acces a vos contacts, vos deals, vos donnees. Elle ne peut rien faire d'intelligent sans contexte.", icons: ["claude.ai", "hubspot.com"], cat: "ia" },
  { title: "Scoring inexistant", desc: "Aucun modele de scoring sur vos leads. Du stagiaire au C-level, tout le monde est traite pareil. L'IA pourrait scorer en temps reel.", icons: ["claude.ai", "hubspot.com"], cat: "ia" },
  { title: "Calls jamais analyses", desc: "Des centaines d'heures de calls commerciaux sans en extraire un seul pattern. L'IA pourrait resumer, detecter les objections et alimenter le CRM.", icons: ["claude.ai", "hubspot.com"], cat: "ia" },
  { title: "Reporting manuel alors que l'IA le fait", desc: "Vos managers passent des heures a compiler des rapports. L'IA peut generer un reporting complet chaque lundi matin en 30 secondes.", icons: ["claude.ai", "hubspot.com"], cat: "ia" },
  { title: "Detection de churn a l'aveugle", desc: "Vous detectez le churn quand le client a deja un pied dehors. L'IA peut alerter 45 jours avant en surveillant les signaux faibles.", icons: ["claude.ai", "hubspot.com"], cat: "ia" },
];

const tabs = [
  { key: "crm", label: "Mon CRM ne marche pas" },
  { key: "data", label: "Mes donnees sont sales" },
  { key: "ops", label: "Mon equipe perd du temps" },
  { key: "ia", label: "L'IA pourrait aider" },
];

export default function Features() {
  const [selected, setSelected] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState("crm");
  const count = selected.length;
  const visible = problems.filter((p) => p.cat === activeTab);

  return (
    <section id="services" className="relative z-20 py-3 md:py-0">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <div className="mb-4"><Badge>Ça vous parle ?</Badge></div>
              <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] leading-[1.2] tracking-[-0.02em] mb-1">
                Sélectionnez vos 3 problèmes
              </h2>
              <p className="text-[13px] text-[#999]">On construit votre plan d&apos;action autour.</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <div className="flex gap-1">
                {[0, 1, 2].map((n) => (
                  <div key={n} className={"w-2 h-2 rounded-full transition-colors " + (n < count ? "bg-[#111]" : "bg-[#E5E5E5]")} />
                ))}
              </div>
              <span className="text-[12px] text-[#999]">{count}/3</span>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-5">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => { setActiveTab(tab.key); }}
                className={"px-3 py-1.5 rounded-md text-[12px] font-medium border cursor-pointer " +
                  (activeTab === tab.key
                    ? "border-[#111] bg-[#111] text-white"
                    : "border-[#F0F0F0] text-[#999] hover:border-[#DDD]")}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {visible.map((p) => {
              const isSel = selected.includes(p.title);
              const isDis = count >= 3 && !isSel;
              return (
                <button
                  key={p.title}
                  type="button"
                  onClick={() => {
                    if (isDis) return;
                    setSelected((prev) =>
                      prev.includes(p.title)
                        ? prev.filter((t) => t !== p.title)
                        : prev.length < 3 ? [...prev, p.title] : prev
                    );
                  }}
                  className={
                    "rounded-xl border p-4 text-left cursor-pointer transition-all " +
                    (isSel ? "border-[#111] bg-[#FAFAFA] ring-1 ring-[#111]" : "border-[#F2F2F2] hover:border-[#E0E0E0]") +
                    (isDis ? " !opacity-30 !cursor-not-allowed" : "")
                  }
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div className={"w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 " +
                      (isSel ? "bg-[#111] border-[#111]" : "border-[#DDD]")}>
                      {isSel && (
                        <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div className="flex gap-1">
                      {p.icons.map((d, j) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={`${d}-${j}`} src={`https://www.google.com/s2/favicons?domain=${d}&sz=64`} alt={d.replace('.com','').replace('.io','').replace('.ai','')} width={14} height={14} className="rounded-sm rounded" loading="lazy" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-[13px] font-semibold text-[#111] mb-1 leading-tight">{p.title}</h3>
                  <p className="text-[11px] text-[#999] leading-[1.5]">{p.desc}</p>
                </button>
              );
            })}
          </div>

          {/* Bottom */}
          <div className="mt-6 pt-5 border-t border-[#F2F2F2] flex items-center justify-between">
            <p className="text-[12px] text-[#999]">
              {count === 0 && "Choisissez dans les 3 catégories"}
              {count === 1 && "Encore 2..."}
              {count === 2 && "Plus qu'un !"}
              {count === 3 && "Parfait, on peut en parler"}
            </p>
            <a
              href="#contact"
              className={"px-4 py-1.5 rounded-md text-[13px] font-medium " +
                (count === 3
                  ? "bg-[#111] text-white hover:bg-[#222]"
                  : "bg-[#F5F5F5] text-[#CCC] pointer-events-none")}
            >
              {count === 3 ? "On en discute →" : `${count}/3 sélectionnés`}
            </a>
          </div>
        </div>

        <div className="hidden md:block mx-auto w-px h-10 bg-[#E0E0E0]" />

        {/* SEO: all problems rendered hidden for crawlers */}
        <div className="sr-only" aria-hidden="true">
          {problems.map((p) => (
            <div key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
