"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";

/* ---- DATA ---- */

type Pillar = "S" | "C" | "O" | "R" | "E";

const pillars: Record<Pillar, { letter: Pillar; name: string; color: string; desc: string }> = {
  S: { letter: "S", name: "Strategie revenue", color: "#FF7A59", desc: "ICP, positionnement, pricing, plan revenue" },
  C: { letter: "C", name: "CRM et data", color: "#4B5EFC", desc: "Single source of truth, qualite, integrations" },
  O: { letter: "O", name: "Operations et process", color: "#22C55E", desc: "Lead routing, stage criteria, workflows" },
  R: { letter: "R", name: "Reporting et KPIs", color: "#6D00CC", desc: "Dashboards, forecast, alertes" },
  E: { letter: "E", name: "Equipes alignees", color: "#D4A27F", desc: "SLA, rituels, formation, gouvernance" },
};

const questions: { pillar: Pillar; text: string }[] = [
  { pillar: "S", text: "Notre ICP est-il documente avec criteres firmographiques et comportementaux ?" },
  { pillar: "S", text: "Avons-nous un plan revenue trimestriel chiffre par segment et par equipe ?" },
  { pillar: "S", text: "Le pricing et le packaging sont-ils valides avec data win/loss reelles ?" },
  { pillar: "C", text: "Le CRM est-il single source of truth (vs 5 Excel paralleles) ?" },
  { pillar: "C", text: "La data quality est-elle mesuree et auditee mensuellement ?" },
  { pillar: "C", text: "Les integrations critiques (marketing, billing, support) fonctionnent sans saisie manuelle ?" },
  { pillar: "O", text: "Les leads sont-ils routes automatiquement avec SLA mesure (< 5 min) ?" },
  { pillar: "O", text: "Les stage criteria pipeline sont-ils documentes et appliques uniformement ?" },
  { pillar: "O", text: "Les workflows critiques (lifecycle, scoring, alerts) sont-ils versionnes et monitores ?" },
  { pillar: "R", text: "Chaque equipe (Sales, Marketing, CS) a-t-elle son dashboard cible avec KPIs definis ?" },
  { pillar: "R", text: "Le forecast revenue est-il calcule (vs devine) avec accuracy > 75% a 90 jours ?" },
  { pillar: "R", text: "Les alertes anomalies (drop conversion, pipeline coverage) declenchent automatiquement ?" },
  { pillar: "E", text: "Un SLA Marketing-Sales explicite est-il signe et tracke mensuellement ?" },
  { pillar: "E", text: "Les rituels (weekly pipeline, monthly business review) sont-ils tenus et productifs ?" },
  { pillar: "E", text: "Les equipes savent-elles utiliser les outils a 80% de leur capacite (pas 20%) ?" },
];

const ratings = [
  { value: 0, label: "Absent", desc: "Rien en place, pas de tentative" },
  { value: 1, label: "Embryonnaire", desc: "Ad hoc, non documente" },
  { value: 2, label: "Partiel", desc: "Documente mais inegal" },
  { value: 3, label: "Mature", desc: "Documente, applique, mesure" },
  { value: 4, label: "Best-in-class", desc: "Mature + automatise + benchmarke" },
];

const interpretations = [
  { range: [0, 7], label: "Immature", color: "#EF4444", desc: "Plusieurs piliers en deficit critique. Chantiers structurants de 3 a 6 mois necessaires.", action: "Audit RevOps complet recommande." },
  { range: [8, 12], label: "Inegale", color: "#F59E0B", desc: "Fondations posees mais inegales. Certains piliers matures, d'autres en retrait.", action: "Optimisation ciblee en 60-90 jours." },
  { range: [13, 16], label: "Avancee", color: "#22C55E", desc: "Les 5 piliers tiennent. L'enjeu : iteration et detection des fines failles.", action: "Sprint d'optimisation continue." },
  { range: [17, 20], label: "Best-in-class", color: "#6D00CC", desc: "Moins de 5 % des scale-ups y arrivent. Avantage competitif.", action: "Maintenance + innovation IA / MCP." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Quiz",
      name: "Quiz Maturite RevOps - Framework SCORE",
      description: "Quiz interactif d'auto-evaluation de la maturite RevOps base sur le framework SCORE de Ceres. 15 questions, score sur 20.",
      url: "https://ceres.agency/outils/quiz-maturite-revops",
      educationalLevel: "Professional",
      learningResourceType: "Self-assessment",
      author: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "Combien de temps prend le quiz ?", acceptedAnswer: { "@type": "Answer", text: "Entre 5 et 10 minutes pour les 15 questions. Mieux fait en groupe avec un representant de Sales/Marketing/CS/RevOps pour avoir des reponses honnetes." } },
        { "@type": "Question", name: "Comment est calcule le score ?", acceptedAnswer: { "@type": "Answer", text: "Chaque question est notee de 0 a 4. On calcule la moyenne par pilier (sur 4), puis on additionne les 5 piliers pour obtenir un score sur 20. Un score de 13+/20 indique une maturite avancee." } },
        { "@type": "Question", name: "Le resultat est-il fiable ?", acceptedAnswer: { "@type": "Answer", text: "C'est une auto-evaluation, donc subjective. Mais le framework SCORE est utilise par Ceres sur 250+ missions reelles, donc les comparaisons aux benchmarks sont calibrees. Pour un diagnostic objectif, l'audit RevOps de 72h reste la reference." } },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://ceres.agency" },
        { "@type": "ListItem", position: 2, name: "Outils", item: "https://ceres.agency/outils" },
        { "@type": "ListItem", position: 3, name: "Quiz Maturite RevOps", item: "https://ceres.agency/outils/quiz-maturite-revops" },
      ],
    },
  ],
};

export default function QuizMaturiteRevopsPage() {
  const [step, setStep] = useState<"intro" | "quiz" | "results">("intro");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [currentQ, setCurrentQ] = useState(0);

  const allAnswered = Object.keys(answers).length === questions.length;

  const pillarScores = useMemo(() => {
    const scores: Record<Pillar, { sum: number; count: number; avg: number }> = {
      S: { sum: 0, count: 0, avg: 0 },
      C: { sum: 0, count: 0, avg: 0 },
      O: { sum: 0, count: 0, avg: 0 },
      R: { sum: 0, count: 0, avg: 0 },
      E: { sum: 0, count: 0, avg: 0 },
    };
    questions.forEach((q, i) => {
      if (answers[i] !== undefined) {
        scores[q.pillar].sum += answers[i];
        scores[q.pillar].count += 1;
      }
    });
    (Object.keys(scores) as Pillar[]).forEach((p) => {
      scores[p].avg = scores[p].count > 0 ? scores[p].sum / scores[p].count : 0;
    });
    return scores;
  }, [answers]);

  const totalScore = useMemo(() => {
    return (Object.keys(pillarScores) as Pillar[]).reduce((acc, p) => acc + pillarScores[p].avg, 0);
  }, [pillarScores]);

  const interpretation = useMemo(() => {
    const score = Math.round(totalScore * 10) / 10;
    return interpretations.find((i) => score >= i.range[0] && score <= i.range[1]) || interpretations[0];
  }, [totalScore]);

  const weakestPillar = useMemo(() => {
    const entries = (Object.keys(pillarScores) as Pillar[]).map((p) => ({ p, avg: pillarScores[p].avg }));
    entries.sort((a, b) => a.avg - b.avg);
    return entries[0]?.p;
  }, [pillarScores]);

  function selectAnswer(qIndex: number, value: number) {
    setAnswers((prev) => ({ ...prev, [qIndex]: value }));
    if (qIndex < questions.length - 1) {
      setTimeout(() => setCurrentQ(qIndex + 1), 300);
    }
  }

  function startQuiz() {
    setStep("quiz");
    setAnswers({});
    setCurrentQ(0);
  }

  function showResults() {
    setStep("results");
  }

  function restart() {
    setStep("intro");
    setAnswers({});
    setCurrentQ(0);
  }

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "10%", width: 320, height: 320, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "40%", width: 300, height: 300, borderRadius: "50%", background: "#22C55E", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "70%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.07, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[900px] mx-auto px-6">
        <nav className="mb-6 flex items-center gap-2 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span>
          <Link href="/outils" className="hover:text-[#111] transition-colors">Outils</Link><span>/</span>
          <span className="text-[#666]">Quiz Maturite RevOps</span>
        </nav>

        {/* INTRO */}
        {step === "intro" && (
          <>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Badge>Quiz gratuit</Badge>
                <span className="text-[12px] text-[#999]">5-10 min</span>
              </div>
              <h1 className="text-[36px] sm:text-[52px] font-semibold text-[#111] leading-[1.08] tracking-[-0.03em] mb-5">
                Quel est votre niveau de maturite RevOps ?
              </h1>
              <p className="text-[18px] text-[#666] max-w-[640px] mx-auto leading-[1.7] mb-8">
                Auto-evaluez votre revenue engine sur les 5 piliers du framework SCORE. 15 questions, score sur 20, recommandations personnalisees instantanees.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[600px] mx-auto mb-10">
                {[
                  { v: "15", l: "questions" },
                  { v: "5", l: "piliers SCORE" },
                  { v: "/20", l: "score detaille" },
                  { v: "0 EUR", l: "gratuit" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <div className="text-[22px] font-bold text-[#111] tracking-[-0.02em]">{s.v}</div>
                    <div className="text-[11px] text-[#999] mt-1">{s.l}</div>
                  </div>
                ))}
              </div>

              <button onClick={startQuiz} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#FF7A59] text-white text-[14px] font-medium hover:bg-[#E86D4F] transition-colors shadow-[0_4px_12px_-4px_rgba(255,122,89,0.4)]">
                Demarrer le quiz
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
              <p className="text-[12px] text-[#999] mt-4">Aucune inscription. Resultats instantanes.</p>
            </div>

            <section className="mb-12">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[18px] font-semibold text-[#111] mb-5">Les 5 piliers SCORE evalues</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {(Object.values(pillars)).map((p) => (
                    <div key={p.letter} className="rounded-xl border border-[#F2F2F2] p-4">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold mb-3" style={{ background: p.color }}>{p.letter}</div>
                      <p className="text-[12px] font-semibold text-[#111] mb-1 leading-tight">{p.name}</p>
                      <p className="text-[11px] text-[#777] leading-[1.5]">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mb-12">
              <div className="rounded-2xl bg-[#111] p-6 md:p-8">
                <h2 className="text-[18px] font-semibold text-white mb-3">A faire en groupe ideal</h2>
                <p className="text-[13px] text-white/70 leading-[1.7]">Pour des reponses honnetes, fais le quiz avec un representant Sales + Marketing + CS + RevOps autour de la table. Les desaccords entre vous sont les insights les plus precieux. Si tu es seul, prends 10 min, sois honnete avec toi-meme. Le mensonge ne change pas la realite, juste le score.</p>
              </div>
            </section>
          </>
        )}

        {/* QUIZ */}
        {step === "quiz" && (
          <>
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[12px] text-[#999] font-mono">Question {currentQ + 1} / {questions.length}</p>
                <p className="text-[12px] text-[#999]">Pilier <span className="font-semibold" style={{ color: pillars[questions[currentQ].pillar].color }}>{pillars[questions[currentQ].pillar].letter}</span> - {pillars[questions[currentQ].pillar].name}</p>
              </div>
              <div className="w-full h-1.5 bg-[#F2F2F2] rounded-full overflow-hidden">
                <div className="h-full bg-[#FF7A59] transition-all duration-300" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
              </div>
            </div>

            <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)] mb-6">
              <h2 className="text-[20px] md:text-[24px] font-semibold text-[#111] leading-[1.25] mb-8">
                {questions[currentQ].text}
              </h2>
              <div className="space-y-2.5">
                {ratings.map((r) => (
                  <button
                    key={r.value}
                    onClick={() => selectAnswer(currentQ, r.value)}
                    className={`w-full flex items-center justify-between gap-4 px-5 py-4 rounded-xl border text-left transition-all ${
                      answers[currentQ] === r.value
                        ? "border-[#FF7A59] bg-[#FFF4EF] shadow-[0_2px_8px_-2px_rgba(255,122,89,0.25)]"
                        : "border-[#E8E8E8] hover:border-[#FF7A59]/40 hover:bg-[#FFFAFA]"
                    }`}
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-[14px] shrink-0 ${answers[currentQ] === r.value ? "bg-[#FF7A59] text-white" : "bg-[#FAFAFA] text-[#666]"}`}>{r.value}</div>
                      <div className="min-w-0">
                        <p className="text-[13px] font-semibold text-[#111] mb-0.5">{r.label}</p>
                        <p className="text-[11px] text-[#777]">{r.desc}</p>
                      </div>
                    </div>
                    {answers[currentQ] === r.value && (
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#FF7A59]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                disabled={currentQ === 0}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] text-[#666] hover:text-[#111] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Precedent
              </button>

              {currentQ < questions.length - 1 ? (
                <button
                  onClick={() => setCurrentQ(currentQ + 1)}
                  disabled={answers[currentQ] === undefined}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#111] text-white text-[13px] font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#333] transition-colors"
                >
                  Suivant
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              ) : (
                <button
                  onClick={showResults}
                  disabled={!allAnswered}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF7A59] text-white text-[13px] font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#E86D4F] transition-colors"
                >
                  Voir mes resultats
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              )}
            </div>

            <p className="text-center text-[11px] text-[#999] mt-8">Le quiz est sauvegarde tant que tu ne recharges pas la page. Tu peux revenir en arriere a tout moment.</p>
          </>
        )}

        {/* RESULTS */}
        {step === "results" && (
          <>
            <div className="text-center mb-10">
              <div className="mb-4"><Badge>Resultats</Badge></div>
              <h1 className="text-[28px] sm:text-[36px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-3">Votre maturite RevOps</h1>
              <p className="text-[15px] text-[#666]">Score base sur le framework SCORE de Ceres</p>
            </div>

            <section className="mb-8">
              <div className="rounded-2xl border-2 p-8 md:p-10 text-center" style={{ borderColor: interpretation.color, background: `${interpretation.color}05` }}>
                <p className="text-[11px] uppercase tracking-wider text-[#999] font-semibold mb-3">Votre score global</p>
                <div className="flex items-baseline justify-center gap-2 mb-3">
                  <div className="text-[72px] font-bold leading-none tracking-[-0.03em]" style={{ color: interpretation.color }}>{totalScore.toFixed(1)}</div>
                  <div className="text-[24px] text-[#999] font-medium">/ 20</div>
                </div>
                <p className="text-[16px] font-semibold mb-2" style={{ color: interpretation.color }}>{interpretation.label}</p>
                <p className="text-[13px] text-[#666] leading-[1.65] max-w-[440px] mx-auto mb-4">{interpretation.desc}</p>
                <p className="text-[12px] text-[#111] font-medium">{interpretation.action}</p>
              </div>
            </section>

            <section className="mb-8">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[18px] font-semibold text-[#111] mb-5">Score detaille par pilier</h2>
                <div className="space-y-4">
                  {(Object.keys(pillarScores) as Pillar[]).map((p) => {
                    const pillar = pillars[p];
                    const avg = pillarScores[p].avg;
                    const pct = (avg / 4) * 100;
                    return (
                      <div key={p}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-[12px]" style={{ background: pillar.color }}>{pillar.letter}</div>
                            <p className="text-[13px] font-semibold text-[#111]">{pillar.name}</p>
                          </div>
                          <p className="text-[14px] font-bold text-[#111]">{avg.toFixed(1)} <span className="text-[11px] text-[#999] font-normal">/ 4</span></p>
                        </div>
                        <div className="w-full h-2 bg-[#F2F2F2] rounded-full overflow-hidden">
                          <div className="h-full transition-all duration-500" style={{ width: `${pct}%`, background: pillar.color }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {weakestPillar && (
              <section className="mb-8">
                <div className="rounded-2xl bg-[#111] p-6 md:p-8">
                  <p className="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-2">Priorite #1 a addresser</p>
                  <h2 className="text-[20px] sm:text-[24px] font-semibold text-white mb-3">
                    {pillars[weakestPillar].name} ({pillarScores[weakestPillar].avg.toFixed(1)} / 4)
                  </h2>
                  <p className="text-[13px] text-white/70 leading-[1.75] mb-4">
                    {pillars[weakestPillar].desc}. C&apos;est le pilier le plus faible. Le reflexe naturel d&apos;ameliorer le plus fort est faux : on doit pousser le plus faible en premier pour debloquer la croissance globale.
                  </p>
                  <Link href="/framework-score-revops" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white hover:underline">
                    Comprendre le framework SCORE en detail
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </section>
            )}

            <section className="mb-8">
              <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[18px] font-semibold text-[#111] mb-4">Recommandations personnalisees</h2>
                <div className="space-y-3">
                  {(Object.keys(pillarScores) as Pillar[])
                    .map((p) => ({ p, avg: pillarScores[p].avg }))
                    .sort((a, b) => a.avg - b.avg)
                    .slice(0, 3)
                    .map(({ p, avg }) => {
                      const pillar = pillars[p];
                      const reco = avg < 2
                        ? "Chantier structurant a lancer en S1. Audit du pilier + plan d'action 30 jours."
                        : avg < 3
                        ? "Optimisation ciblee a planifier ce trimestre. Quick wins identifiables."
                        : "Niveau mature : iterer sur des leviers fins (automation, IA, benchmark).";
                      return (
                        <div key={p} className="rounded-xl border-l-[3px] p-4" style={{ borderColor: pillar.color, background: `${pillar.color}08` }}>
                          <p className="text-[13px] font-semibold text-[#111] mb-1">{pillar.letter} — {pillar.name} ({avg.toFixed(1)} / 4)</p>
                          <p className="text-[12px] text-[#666] leading-[1.65]">{reco}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[22px] sm:text-[26px] font-semibold text-white tracking-[-0.02em] mb-3">Discuter de ces resultats ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour interpreter votre score et prioriser les 2-3 chantiers prioritaires. Sans engagement.</p>
                <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors">
                  <span className="w-2 h-2 rounded-sm bg-[#22C55E]" />
                  Reserver un creneau direct
                </a>
              </div>
            </section>

            <section className="mb-8 text-center">
              <button onClick={restart} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E8E8E8] text-[13px] text-[#666] hover:text-[#111] hover:border-[#DDD] transition-colors">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M2 8a6 6 0 1011-3.5M2 4v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Recommencer le quiz
              </button>
            </section>

            <section>
              <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4 text-center">Pour aller plus loin</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Link href="/framework-score-revops" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all">
                  <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#FF7A59]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Framework</span></div>
                  <h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">Le framework SCORE en detail</h3>
                </Link>
                <Link href="/audit-revops" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all">
                  <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#4B5EFC]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Service</span></div>
                  <h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">Audit RevOps 72h avec SCORE</h3>
                </Link>
                <Link href="/methode" className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] transition-all">
                  <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm bg-[#22C55E]" /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">Methode</span></div>
                  <h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">Notre methode en 4 phases</h3>
                </Link>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
