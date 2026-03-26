import Link from "next/link";
import Badge from "./Badge";

const segments = [
  {
    title: "Startups en scale",
    range: "5-50 personnes",
    needs: ["Structurer le CRM avant que ça devienne ingérable", "Poser les fondations RevOps dès maintenant", "Déployer l'IA pour compenser le manque de ressources"],
    color: "#22C55E",
    href: "/revops-startup",
  },
  {
    title: "PME en croissance",
    range: "50-200 personnes",
    needs: ["Aligner Sales, Marketing et CS qui fonctionnent en silos", "Automatiser le reporting et les tâches manuelles", "Connecter les outils et fiabiliser la donnée"],
    color: "#4B5EFC",
    href: "/revops-pme",
  },
  {
    title: "Scale-ups",
    range: "200-1 000 personnes",
    needs: ["Professionnaliser le revenue engine à l'échelle", "Déployer des agents IA et du scoring prédictif", "Mettre en place un RevOps Part-Time dédié"],
    color: "#6C5CE7",
    href: "/revops-scaleup",
  },
  {
    title: "Grands Groupes",
    range: "1 000+ personnes",
    needs: ["Refondre l'architecture CRM multi-équipes", "Migrations complexes Dynamics ou Salesforce", "Unification multi-instances et conformité RGPD"],
    color: "#FF7A59",
    href: "/revops-grand-groupe",
  },
];

export default function ForWho() {
  return (
    <section className="relative z-20">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
          <div className="mb-8">
            <div className="mb-4"><Badge>Pour qui ?</Badge></div>
            <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] leading-[1.2] tracking-[-0.02em] mb-2">
              On s&apos;adapte a votre stade
            </h2>
            <p className="text-[13px] text-[#999]">Que vous soyez 5 ou 10 000, on calibre l&apos;intervention a vos enjeux.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {segments.map((s) => (
              <Link key={s.title} href={s.href} className="rounded-xl border border-[#F2F2F2] p-5 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all group">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: s.color }} />
                  <div>
                    <h3 className="text-[14px] font-semibold text-[#111] leading-tight">{s.title}</h3>
                    <p className="text-[11px] text-[#999]">{s.range}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  {s.needs.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-[12px] text-[#666]">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-0.5 text-[#22C55E]"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {n}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#4B5EFC] group-hover:gap-2.5 transition-all">
                  En savoir plus
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden md:block mx-auto w-px h-10 bg-[#E0E0E0]" />
      </div>
    </section>
  );
}
