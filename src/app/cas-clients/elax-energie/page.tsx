"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cas client Elax Energie : audit HubSpot, remise a plat et RevOps",
  description: "Comment Ceres a audite, nettoye et restructure le HubSpot d\u2019Elax Energie pour en faire un vrai outil de pilotage commercial.",
  author: { "@type": "Organization", name: "Ceres" },
  datePublished: "2026-03-18",
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
};

const sections = [
  { id: "contexte", title: "Le contexte" },
  { id: "audit", title: "L\u2019audit HubSpot" },
  { id: "diagnostic", title: "Le diagnostic" },
  { id: "remise-a-plat", title: "La remise a plat" },
  { id: "pipeline", title: "Pipeline et processus" },
  { id: "automatisation", title: "Automatisation" },
  { id: "reporting", title: "Reporting et dashboards" },
  { id: "revops", title: "La couche RevOps" },
  { id: "resultats", title: "Les resultats" },
  { id: "temoignage", title: "Retour client" },
];

const auditScores = [
  { category: "Qualite des donnees", before: 22, after: 78, max: 100, color: "#FF7A59" },
  { category: "Pipeline et processus", before: 15, after: 82, max: 100, color: "#4B5EFC" },
  { category: "Automatisation", before: 8, after: 72, max: 100, color: "#6D00CC" },
  { category: "Reporting", before: 10, after: 85, max: 100, color: "#22C55E" },
  { category: "Alignement equipes", before: 18, after: 75, max: 100, color: "#6C5CE7" },
  { category: "Stack et integrations", before: 30, after: 80, max: 100, color: "#D4A27F" },
];

export default function ElaxEnergieCaseStudy() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("contexte");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, pct));
      const sectionEls = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i];
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50">
        <div className="h-full bg-[#22C55E] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "8%", width: 320, height: 320, borderRadius: "50%", background: "#22C55E", opacity: 0.12, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "25%", width: 300, height: 300, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "45%", width: 280, height: 280, borderRadius: "50%", background: "#FF7A59", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "2%", top: "65%", width: 300, height: 300, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "3%", top: "82%", width: 280, height: 280, borderRadius: "50%", background: "#22C55E", opacity: 0.06, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0">
            <div className="sticky top-28">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-5 h-5 rounded bg-[#22C55E] flex items-center justify-center text-white text-[8px] font-bold">EE</div>
                <span className="text-[12px] font-semibold text-[#111]">Elax Energie</span>
              </div>
              <nav className="space-y-1">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#22C55E] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="flex-1 min-w-0 max-w-[750px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]">
              <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
              <Link href="/cas-clients" className="hover:text-[#111] transition-colors">Cas clients</Link><span>/</span>
              <span className="text-[#666]">Elax Energie</span>
            </nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <Badge>Cas client</Badge>
                <span className="text-[11px] text-[#CCC]">10 min</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#22C55E] flex items-center justify-center text-white text-[14px] font-bold">EE</div>
                <div>
                  <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.15] tracking-[-0.025em]">Elax Energie</h1>
                  <p className="text-[12px] text-[#999]">Energie renouvelable | PME | France</p>
                </div>
              </div>
              <p className="text-[16px] text-[#666] leading-[1.7] mb-6">
                Audit complet du HubSpot d&apos;Elax Energie, remise a plat de la configuration et mise en place d&apos;une couche RevOps pour transformer un CRM sous-exploite en outil de pilotage commercial.
              </p>

              <div className="rounded-2xl bg-[#111] p-5">
                <p className="text-[11px] font-semibold text-white/40 uppercase tracking-wider mb-3">Resultats</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: "17→76", label: "Score audit RevOps (/100)", color: "#22C55E" },
                    { value: "-75%", label: "Temps de saisie CRM", color: "#4B5EFC" },
                    { value: "+40%", label: "Adoption CRM equipe", color: "#6C5CE7" },
                    { value: "8 sem", label: "Projet complet", color: "#FF7A59" },
                  ].map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="text-[24px] font-bold" style={{ color: r.color }}>{r.value}</div>
                      <div className="text-[10px] text-white/40">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </header>

            <article>
              {/* Contexte */}
              <section id="contexte" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le contexte</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Elax Energie est une entreprise francaise specialisee dans les energies renouvelables. Leur equipe commerciale d&apos;une dizaine de personnes utilise HubSpot depuis 2 ans, mais le CRM avait ete configure rapidement au lancement sans accompagnement, et n&apos;avait jamais ete optimise depuis.</p>
                    <p>Resultat : le pipeline ne refletait pas la realite, les commerciaux ne remplissaient le CRM qu&apos;a contrecoeur, le reporting etait inexistant et la direction prenait ses decisions sur la base de fichiers Excel mis a jour le vendredi.</p>
                    <p>Elax a fait appel a Ceres pour un audit complet suivi d&apos;une remise a plat de leur HubSpot et de la mise en place des fondations RevOps.</p>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      { label: "Secteur", value: "Energie verte" },
                      { label: "Equipe commerciale", value: "10 personnes" },
                      { label: "CRM en place", value: "HubSpot Pro" },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl bg-[#FAFAFA] border border-[#F2F2F2]">
                        <div className="text-[14px] font-bold text-[#111]">{s.value}</div>
                        <div className="text-[10px] text-[#999] mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Audit */}
              <section id="audit" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">L&apos;audit HubSpot : notre framework 80 points</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On a commence par notre audit standard : 80 points de controle repartis en 8 categories. L&apos;audit prend 3 jours et produit un rapport detaille avec un score de maturite, les problemes identifies et un plan d&apos;action priorise.</p>
                  </div>

                  {/* Score gauge */}
                  <div className="mt-6 flex flex-col items-center">
                    <div className="relative w-[180px] h-[100px] mb-4">
                      <svg viewBox="0 0 180 100" className="w-full h-full">
                        {/* Background arc */}
                        <path d="M 10 90 A 80 80 0 0 1 170 90" fill="none" stroke="#F2F2F2" strokeWidth="12" strokeLinecap="round" />
                        {/* Score arc - 17/100 */}
                        <path d="M 10 90 A 80 80 0 0 1 170 90" fill="none" stroke="#EF4444" strokeWidth="12" strokeLinecap="round" strokeDasharray={`${17 * 2.51} 251`} />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
                        <span className="text-[28px] font-bold text-[#EF4444]">17</span>
                        <span className="text-[10px] text-[#999]">/100</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-sm bg-[#EF4444]" />
                      <span className="text-[12px] font-semibold text-[#EF4444]">Niveau : Debutant</span>
                    </div>
                    <p className="text-[11px] text-[#999] mt-1">Score initial lors de l&apos;audit</p>
                  </div>

                  {/* Score breakdown by category */}
                  <div className="mt-6 space-y-2.5">
                    {auditScores.map((s) => (
                      <div key={s.category}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[11px] text-[#777]">{s.category}</span>
                          <span className="text-[11px] font-semibold" style={{ color: s.color }}>{s.before}/100</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#F2F2F2]">
                          <div className="h-full rounded-full transition-all" style={{ width: `${s.before}%`, background: s.color, opacity: 0.5 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Diagnostic */}
              <section id="diagnostic" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Le diagnostic : ce qu&apos;on a trouve</h2>
                  <div className="space-y-3">
                    {[
                      { title: "Pipeline non structure", desc: "Un seul pipeline avec 3 stages generiques (\"Nouveau\", \"En cours\", \"Gagne\"). Aucun critere de passage, aucune probabilite, aucun champ obligatoire. Impossible de faire du forecast.", color: "#EF4444", severity: "Critique" },
                      { title: "42% de doublons dans la base", desc: "Les commerciaux creaient de nouvelles fiches au lieu de mettre a jour les existantes. 42% des contacts avaient au moins un doublon, certains en avaient 5.", color: "#EF4444", severity: "Critique" },
                      { title: "Proprietes inutilisees", desc: "Sur 95 proprietes custom, 60 n\u2019etaient jamais remplies. Les commerciaux ne savaient pas quels champs etaient importants. Resultat : du bruit partout et aucune donnee fiable.", color: "#FF7A59", severity: "Eleve" },
                      { title: "Zero automatisation", desc: "Aucun workflow en place. L\u2019attribution des leads etait manuelle, les notifications par email, les mises a jour de stage a la main. 2 heures de saisie CRM par commercial par jour.", color: "#FF7A59", severity: "Eleve" },
                      { title: "Aucun reporting", desc: "Pas un seul dashboard configure dans HubSpot. Le seul \"reporting\" etait un fichier Excel rempli le vendredi par le directeur commercial a partir de ce qu\u2019il voyait dans le CRM.", color: "#FF7A59", severity: "Eleve" },
                      { title: "Lifecycle stages non definis", desc: "Tous les contacts etaient en \"Lead\" peu importe ou ils en etaient dans le parcours. Pas de distinction entre un visiteur du site et un prospect en negociation.", color: "#F59E0B", severity: "Moyen" },
                      { title: "Integration email partielle", desc: "Seuls 3 commerciaux sur 10 avaient connecte leur boite email a HubSpot. 70% des echanges n\u2019etaient pas traces dans le CRM.", color: "#F59E0B", severity: "Moyen" },
                    ].map((d) => (
                      <div key={d.title} className="flex gap-3 items-start rounded-xl border border-[#F2F2F2] p-3">
                        <div className="shrink-0 mt-0.5">
                          <span className="text-[8px] px-1.5 py-0.5 rounded font-semibold text-white" style={{ background: d.color }}>{d.severity}</span>
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{d.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65]">{d.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Remise a plat */}
              <section id="remise-a-plat" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La remise a plat : nettoyage et restructuration</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Avant de construire quoi que ce soit, il fallait nettoyer. On a passe la premiere semaine exclusivement sur le nettoyage des donnees et la simplification du schema.</p>
                  </div>
                  <div className="mt-5 space-y-3">
                    {[
                      { step: "01", title: "Deduplication massive", desc: "Fusion de 42% de doublons (1 800+ contacts). On a utilise les regles de merge HubSpot + un script custom pour identifier les doublons par email, nom+entreprise et telephone. La fiche la plus complete l\u2019emporte, les activites sont fusionnees.", result: "4 200 contacts propres (vs 7 300 bruts)" },
                      { step: "02", title: "Nettoyage des proprietes", desc: "Suppression de 60 proprietes inutilisees. Conservation de 35 proprietes essentielles. Renommage et reorganisation en groupes logiques : informations de base, qualification, suivi commercial, donnees entreprise.", result: "35 proprietes claires vs 95 en desordre" },
                      { step: "03", title: "Standardisation des donnees", desc: "Normalisation des formats : noms en Title Case, numeros de telephone au format international, secteurs d\u2019activite dans un dropdown (vs champ texte libre), codes postaux verifies.", result: "100% des fiches au meme format" },
                      { step: "04", title: "Enrichissement", desc: "Enrichissement des fiches via Dropcontact : email professionnel verifie, telephone direct, poste exact, taille et CA de l\u2019entreprise. Taux de completude passe de 35% a 82%.", result: "Taux de completude : 35% vers 82%" },
                      { step: "05", title: "Connexion des emails", desc: "Session de setup avec chaque commercial pour connecter leur boite email (Google Workspace) a HubSpot. Configuration du tracking et de la synchronisation bidirectionnelle.", result: "10/10 boites connectees" },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] text-[11px] font-bold shrink-0">{s.step}</div>
                        <div className="flex-1">
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{s.title}</p>
                          <p className="text-[11px] text-[#777] leading-[1.65] mb-1.5">{s.desc}</p>
                          <p className="text-[10px] text-[#22C55E] font-medium">{s.result}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Pipeline */}
              <section id="pipeline" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Pipeline et processus de vente</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On a reconstruit le pipeline de zero, en partant du processus de vente reel d&apos;Elax et pas d&apos;un template generique.</p>
                  </div>

                  {/* Before/After pipeline */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-[#FEE2E2] bg-[#FEF2F2] p-4">
                      <p className="text-[11px] font-semibold text-[#EF4444] mb-3">Avant : 3 stages flous</p>
                      <div className="space-y-2">
                        {["Nouveau (0%)", "En cours (50%)", "Gagne (100%)"].map((s) => (
                          <div key={s} className="rounded-lg bg-white/80 p-2 text-[11px] text-[#999] text-center">{s}</div>
                        ))}
                      </div>
                      <p className="text-[9px] text-[#EF4444]/60 mt-2">Aucun critere, aucun champ obligatoire</p>
                    </div>
                    <div className="rounded-xl border border-[#DCFCE7] bg-[#F0FDF4] p-4">
                      <p className="text-[11px] font-semibold text-[#22C55E] mb-3">Apres : 7 stages avec criteres</p>
                      <div className="space-y-1.5">
                        {[
                          { name: "Prospect identifie", prob: "10%" },
                          { name: "Premier contact", prob: "20%" },
                          { name: "Besoin qualifie", prob: "30%" },
                          { name: "Visite technique", prob: "50%" },
                          { name: "Proposition envoyee", prob: "70%" },
                          { name: "Negociation", prob: "85%" },
                          { name: "Signe", prob: "100%" },
                        ].map((s) => (
                          <div key={s.name} className="flex items-center justify-between rounded-lg bg-white/80 p-2">
                            <span className="text-[11px] text-[#111] font-medium">{s.name}</span>
                            <span className="text-[10px] text-[#22C55E]">{s.prob}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-[9px] text-[#22C55E]/60 mt-2">Criteres objectifs + champs obligatoires par stage</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Chaque stage a des criteres de passage objectifs. Par exemple, pour passer de &ldquo;Besoin qualifie&rdquo; a &ldquo;Visite technique&rdquo;, le commercial doit avoir renseigne le type d&apos;installation, la surface, la puissance estimee et la date de visite prevue. Sans ces champs, le deal ne peut pas avancer.</p>
                    <p>On a aussi ajoute un pipeline secondaire &ldquo;Projets perdus&rdquo; avec les raisons de perte standardisees (prix, timing, concurrence, pas de besoin, projet annule). Ca alimente directement l&apos;analyse win/loss.</p>
                  </div>
                </div>
              </section>
              <Connector />

              {/* Automatisation */}
              <section id="automatisation" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Automatisation : de 0 a 12 workflows</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On est passe de zero workflow a 12 automatisations qui couvrent l&apos;essentiel du processus commercial.</p>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { title: "Attribution round-robin", desc: "Chaque nouveau lead est attribue automatiquement au commercial suivant dans la rotation. Temps de reaction passe de 24h a 15 min.", color: "#FF7A59" },
                      { title: "Mise a jour lifecycle stage", desc: "Quand un deal est cree, le contact passe automatiquement en SQL. Quand le deal est gagne, en Customer.", color: "#4B5EFC" },
                      { title: "Notification Slack nouveau deal", desc: "L\u2019equipe est notifiee sur Slack quand un nouveau deal est cree ou quand un deal change de stage.", color: "#6C5CE7" },
                      { title: "Relance automatique 7j", desc: "Si une proposition est envoyee et qu\u2019il n\u2019y a aucune activite pendant 7 jours, une tache de relance est creee automatiquement.", color: "#6D00CC" },
                      { title: "Alerte deal inactif", desc: "Si un deal n\u2019a aucune activite pendant 14 jours, le manager recoit une alerte. Ca evite les deals fantomes qui trainent dans le pipeline.", color: "#22C55E" },
                      { title: "Email post-signature", desc: "Email automatique d\u2019accueil quand un deal passe en \"Signe\" : remerciement, prochaines etapes, contact de l\u2019equipe projet.", color: "#D4A27F" },
                      { title: "Scoring automatique", desc: "Score base sur le type de projet (residentiel vs commercial vs industriel), la puissance, le budget et la source du lead.", color: "#FF7A59" },
                      { title: "Enrichissement auto", desc: "Quand un contact est cree avec un email professionnel, Dropcontact enrichit automatiquement la fiche (poste, telephone, taille entreprise).", color: "#4B5EFC" },
                      { title: "Tache post-visite", desc: "Apres une visite technique (stage mise a jour), une tache \"Envoyer la proposition\" est creee avec une deadline de 48h.", color: "#6C5CE7" },
                      { title: "Rappel reunion", desc: "24h avant un meeting planifie, le commercial recoit un rappel avec un resume de la fiche contact et du deal.", color: "#6D00CC" },
                      { title: "Archivage auto", desc: "Les deals perdus depuis plus de 6 mois sont archives automatiquement pour garder un pipeline propre.", color: "#22C55E" },
                      { title: "Rapport hebdo", desc: "Chaque lundi matin, un email automatique resume la semaine precedente : nouveaux deals, deals gagnes, deals perdus, pipeline total.", color: "#D4A27F" },
                    ].map((w) => (
                      <div key={w.title} className="flex gap-2 items-start rounded-xl border border-[#F2F2F2] p-3">
                        <div className="w-1.5 h-1.5 rounded-sm mt-2 shrink-0" style={{ background: w.color }} />
                        <div>
                          <p className="text-[11px] font-semibold text-[#111]">{w.title}</p>
                          <p className="text-[10px] text-[#999] leading-[1.5]">{w.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Reporting */}
              <section id="reporting" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">Reporting : du fichier Excel aux dashboards temps reel</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>On a cree 4 dashboards HubSpot qui remplacent le fichier Excel du vendredi :</p>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "Dashboard Pipeline", desc: "Pipeline par stage, valeur totale, nombre de deals, deals a risque (inactifs 14j+), forecast weighted. Vue par commercial et vue equipe.", widgets: "8 rapports" },
                      { title: "Dashboard Activite", desc: "Calls, emails, meetings par commercial par semaine. Comparaison avec les objectifs. Classement de l\u2019equipe.", widgets: "6 rapports" },
                      { title: "Dashboard Revenue", desc: "Deals gagnes par mois, valeur moyenne, cycle de vente moyen, taux de conversion par stage, win rate par source.", widgets: "7 rapports" },
                      { title: "Dashboard Qualite", desc: "Taux de completude des fiches, doublons detectes, contacts sans activite 90j, deals sans date de cloture. Le dashboard hygiene.", widgets: "5 rapports" },
                    ].map((d) => (
                      <div key={d.title} className="rounded-xl border border-[#F2F2F2] p-4">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-[13px] font-semibold text-[#111]">{d.title}</p>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] font-medium">{d.widgets}</span>
                        </div>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{d.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* RevOps */}
              <section id="revops" className="mb-8">
                <div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.06)]">
                  <h2 className="text-[17px] font-semibold text-[#111] mb-4">La couche RevOps : ce qui fait que ca tient</h2>
                  <div className="space-y-3 text-[13px] text-[#555] leading-[1.75]">
                    <p>Nettoyer et configurer un CRM, tout le monde peut le faire. Ce qui fait la difference, c&apos;est la couche RevOps qui garantit que le systeme reste propre et s&apos;ameliore dans le temps.</p>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { title: "SLA interne", desc: "Chaque commercial s\u2019engage a mettre a jour ses deals 2x par semaine et a renseigner les champs obligatoires. Le dashboard qualite rend la compliance visible." },
                      { title: "Revue pipeline hebdo", desc: "Meeting de 30 min chaque lundi : revue des deals par stage, identification des blocages, forecast de la semaine. Structure fixe, data-driven, pas de blabla." },
                      { title: "Definitions partagees", desc: "Document Notion avec les definitions de chaque stage, chaque propriete, chaque score. Plus d\u2019ambiguite sur ce que veut dire \"Besoin qualifie\"." },
                      { title: "Process de revue trimestrielle", desc: "Tous les 3 mois, on revoit le pipeline, le scoring et les workflows avec le directeur commercial pour ajuster selon l\u2019evolution du business." },
                    ].map((item) => (
                      <div key={item.title} className="rounded-xl border border-[#F2F2F2] p-3">
                        <p className="text-[12px] font-semibold text-[#111] mb-1">{item.title}</p>
                        <p className="text-[11px] text-[#777] leading-[1.6]">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Resultats */}
              <section id="resultats" className="mb-8">
                <div className="rounded-2xl bg-[#111] p-5 md:p-8">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-[12px] font-medium text-white/60 mb-4">Resultats</span>
                  <h2 className="text-[20px] font-semibold text-white mb-4">Avant / Apres : les scores d&apos;audit</h2>

                  <div className="space-y-3 mb-6">
                    {auditScores.map((s) => (
                      <div key={s.category}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[11px] text-white/50">{s.category}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-white/30">{s.before}</span>
                            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" className="opacity-20"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                            <span className="text-[11px] font-bold" style={{ color: s.color }}>{s.after}</span>
                          </div>
                        </div>
                        <div className="w-full h-2 rounded-full bg-white/5 relative">
                          <div className="absolute h-full rounded-full bg-white/10" style={{ width: `${s.before}%` }} />
                          <div className="absolute h-full rounded-full" style={{ width: `${s.after}%`, background: s.color }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl bg-white/5 p-4 flex items-center justify-between">
                    <span className="text-[13px] font-semibold text-white">Score global</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[16px] text-white/30">17/100</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="opacity-30"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                      <span className="text-[22px] font-bold text-[#22C55E]">76/100</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { value: "-75%", label: "Temps de saisie CRM", color: "#4B5EFC" },
                      { value: "+40%", label: "Adoption CRM", color: "#22C55E" },
                      { value: "0", label: "Fichier Excel", color: "#6C5CE7" },
                      { value: "12", label: "Workflows actifs", color: "#FF7A59" },
                    ].map((r) => (
                      <div key={r.label} className="rounded-xl bg-white/5 p-3 text-center">
                        <div className="text-[18px] font-bold" style={{ color: r.color }}>{r.value}</div>
                        <div className="text-[9px] text-white/40 mt-0.5">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <Connector />

              {/* Temoignage */}
              <section id="temoignage" className="mb-8">
                <div className="rounded-2xl border-2 border-[#22C55E]/20 bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(34,197,94,0.1)]">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] text-[14px] font-bold shrink-0">EA</div>
                    <div>
                      <p className="text-[15px] text-[#333] leading-[1.75] mb-4">
                        &ldquo;On savait que notre HubSpot etait mal utilise mais on ne savait pas par ou commencer. L&apos;audit de Ceres nous a ouvert les yeux : 17/100, ca fait mal. Mais en 8 semaines, ils ont tout remis a plat. Le pipeline est clair, les commerciaux remplissent le CRM sans qu&apos;on ait besoin de leur rappeler (parce que c&apos;est devenu utile pour eux), et moi j&apos;ai mes dashboards en temps reel. On ne revient plus jamais au fichier Excel du vendredi.&rdquo;
                      </p>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-[13px] font-semibold text-[#111]">Equipe Elax Energie</p>
                          <p className="text-[11px] text-[#999]">Direction Commerciale</p>
                        </div>
                        <img src="https://www.google.com/s2/favicons?domain=elax-energie.fr&sz=32" alt="Elax Energie" className="w-5 h-5 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>

            {/* CTA */}
            <section className="mt-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] p-6 md:p-10 text-center">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-3">Votre CRM a besoin d&apos;un audit ?</h2>
                <p className="text-[13px] text-[#999] mb-6 max-w-[420px] mx-auto">On audite votre HubSpot en 3 jours avec notre framework 80 points. Diagnostic, score de maturite et plan d&apos;action priorise.</p>
                <div className="flex items-center justify-center gap-3">
                  <a href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors">
                    <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Demander un audit
                  </a>
                  <Link href="/audit-revops" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E5E5E5] bg-white text-[#111] text-[13px] font-medium hover:border-[#CCC] transition-colors">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
