import Badge from "./Badge";

const steps = [
  {
    num: "01",
    title: "Data clean + KPIs",
    desc: "On nettoie votre base, unifie vos flux de donnees et definit les KPIs par silo. La fondation sur laquelle tout repose. Sans ca, l'IA multiplie par zero.",
    duration: "4-6 semaines",
  },
  {
    num: "02",
    title: "L'IA optimise chaque silo",
    desc: "Marketing, Sales, CS, Finance : l'IA enrichit, score, automatise et detecte les signaux silo par silo. Elle orchestre ce que les equipes n'ont pas le temps de faire.",
    duration: "4-8 semaines",
  },
  {
    num: "03",
    title: "Iteration et expansion",
    desc: "On mesure les resultats, on ajuste les modeles, on ajoute des briques. Chaque iteration rend le systeme plus intelligent. L'avantage se compose avec le temps.",
    duration: "Continu",
  },
];

export default function HowItWorks() {
  return (
    <section id="methode" className="relative z-20 py-3 md:py-0">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
          <div className="mb-8">
            <div className="mb-4"><Badge>Méthode</Badge></div>
            <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] leading-[1.2] tracking-[-0.02em] mb-2">
              L&apos;IA au service du RevOps
            </h2>
            <p className="text-[13px] text-[#999]">Donnees propres, KPIs alignes, IA qui orchestre. Chaque etape renforce la suivante.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {steps.map((s, i) => (
              <div key={s.num} className="rounded-xl border border-[#F2F2F2] p-5 relative">
                {/* Step number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[24px] font-semibold text-[#F0F0F0]">{s.num}</span>
                  <span className="text-[10px] font-medium text-[#999] bg-[#F5F5F5] px-2 py-0.5 rounded">{s.duration}</span>
                </div>
                <h3 className="text-[15px] font-semibold text-[#111] mb-2">{s.title}</h3>
                <p className="text-[12px] text-[#777] leading-[1.65]">{s.desc}</p>
                {/* Arrow connector */}
                {i < 2 && (
                  <div className="hidden md:block absolute -right-[14px] top-1/2 -translate-y-1/2 z-10 text-[#DDD]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 2L8 5L2 8" fill="currentColor" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:block mx-auto w-px h-10 bg-[#E0E0E0]" />
      </div>
    </section>
  );
}
