"use client";

const clients = [
  { name: "TotalEnergies", domain: "totalenergies.com" },
  { name: "Alan", domain: "alan.com" },
  { name: "Edenred", domain: "edenred.com" },
  { name: "Ringover", domain: "ringover.com" },
  { name: "Dougs", domain: "dougs.fr" },
  { name: "Beedeez", domain: "beedeez.com" },
  { name: "Kameleoon", domain: "kameleoon.com" },
  { name: "Spendesk", domain: "spendesk.com" },
  { name: "Payfit", domain: "payfit.com" },
  { name: "Manpower", domain: "manpower.fr" },
  { name: "Iroko", domain: "iroko.eu" },
  { name: "Opendatasoft", domain: "opendatasoft.com" },
];

const partners = [
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Lemlist", domain: "lemlist.com" },
  { name: "Claude", domain: "claude.ai" },
  { name: "Clay", domain: "clay.com" },
  { name: "Attio", domain: "attio.com" },
  { name: "Make", domain: "make.com" },
  { name: "Claap", domain: "claap.io" },
  { name: "Notion", domain: "notion.so" },
];

function Page({ children, bg = "white" }: { children: React.ReactNode; bg?: string }) {
  return (
    <div
      className="w-[297mm] h-[210mm] mx-auto relative overflow-hidden flex flex-col"
      style={{ background: bg, pageBreakAfter: "always", pageBreakInside: "avoid" }}
    >
      {children}
    </div>
  );
}

function Logo() {
  return <span className="text-[22px] font-bold tracking-[-0.03em]">ceres</span>;
}

export default function PresentationPage() {
  return (
    <div className="bg-[#F5F5F5] min-h-screen" style={{ WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}>
      <style>{`
        @media print {
          body { margin: 0; padding: 0; background: white; }
          @page { size: A4 landscape; margin: 0; }
          .no-print { display: none !important; }
        }
        @media screen {
          .page-container { margin-bottom: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
        }
      `}</style>

      {/* Print button */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button onClick={() => window.print()} className="px-4 py-2 rounded-lg bg-[#111] text-white text-[13px] font-medium hover:bg-[#222] transition-colors shadow-lg">
          Exporter en PDF
        </button>
      </div>

      {/* ====== SLIDE 1: Cover ====== */}
      <Page bg="#111">
        <div className="flex-1 flex flex-col justify-center items-center text-center px-20">
          <div className="text-white text-[48px] font-bold tracking-[-0.04em] mb-4">ceres</div>
          <div className="w-16 h-[2px] bg-[#FF7A59] mb-6" />
          <p className="text-white/60 text-[20px] leading-[1.5] max-w-[500px]">
            Agence RevOps &amp; IA pour entreprises B2B
          </p>
          <div className="flex items-center gap-8 mt-12 text-white/30 text-[13px]">
            <span>250+ clients</span>
            <span>9 ans d&apos;experience</span>
            <span>Partenaire HubSpot</span>
          </div>
        </div>
        <div className="px-16 pb-8 flex justify-between items-center text-white/20 text-[10px]">
          <span>ceres.agency</span>
          <span>Confidentiel</span>
        </div>
      </Page>

      {/* ====== SLIDE 2: Qui sommes-nous ====== */}
      <Page>
        <div className="px-16 pt-12 pb-8 flex-1">
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <span className="text-[10px] text-[#CCC] uppercase tracking-widest">A propos</span>
          </div>

          <h2 className="text-[32px] font-bold text-[#111] tracking-[-0.03em] mb-2">Qui sommes-nous</h2>
          <p className="text-[14px] text-[#777] max-w-[600px] leading-[1.7] mb-10">
            Ceres est une agence specialisee en Revenue Operations et Intelligence Artificielle. On structure, automatise et optimise les operations commerciales des entreprises B2B.
          </p>

          <div className="grid grid-cols-4 gap-6 mb-10">
            {[
              { value: "250+", label: "Clients accompagnes", color: "#FF7A59" },
              { value: "9 ans", label: "D'experience", color: "#4B5EFC" },
              { value: "120K+", label: "Contacts migres", color: "#22C55E" },
              { value: "13", label: "Cas clients documentes", color: "#6C5CE7" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-[#F2F2F2] p-5 text-center">
                <div className="text-[28px] font-bold" style={{ color: s.color }}>{s.value}</div>
                <div className="text-[11px] text-[#999] mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "Guillaume Delachet", role: "Co-fondateur", initials: "GD" },
              { name: "Simon Toussaint", role: "Co-fondateur", initials: "ST" },
              { name: "Bruno Teixeira", role: "Partner", initials: "BT" },
              { name: "Stephane Morel", role: "COO", initials: "SM" },
            ].map((t) => (
              <div key={t.name} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white text-[11px] font-bold">{t.initials}</div>
                <div>
                  <p className="text-[12px] font-semibold text-[#111]">{t.name}</p>
                  <p className="text-[10px] text-[#999]">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-16 pb-6 text-[9px] text-[#CCC]">ceres.agency | Confidentiel</div>
      </Page>

      {/* ====== SLIDE 3: Nos clients ====== */}
      <Page>
        <div className="px-16 pt-12 pb-8 flex-1">
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <span className="text-[10px] text-[#CCC] uppercase tracking-widest">References</span>
          </div>

          <h2 className="text-[32px] font-bold text-[#111] tracking-[-0.03em] mb-2">Ils nous font confiance</h2>
          <p className="text-[14px] text-[#777] max-w-[500px] leading-[1.7] mb-12">
            Startups, scale-ups et grands groupes. De 15 a 100 000+ personnes.
          </p>

          <div className="grid grid-cols-4 gap-x-10 gap-y-8">
            {clients.map((c) => (
              <div key={c.name} className="flex items-center gap-3">
                <img src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=64`} alt={c.name} className="w-8 h-8 rounded-lg" />
                <span className="text-[14px] font-medium text-[#111]">{c.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-16 pb-6 text-[9px] text-[#CCC]">ceres.agency | Confidentiel</div>
      </Page>

      {/* ====== SLIDE 4: Nos services ====== */}
      <Page>
        <div className="px-16 pt-12 pb-8 flex-1">
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <span className="text-[10px] text-[#CCC] uppercase tracking-widest">Services</span>
          </div>

          <h2 className="text-[32px] font-bold text-[#111] tracking-[-0.03em] mb-10">Nos services</h2>

          <div className="grid grid-cols-2 gap-5">
            {[
              { title: "Audit RevOps", desc: "Diagnostic complet de votre CRM, vos processus et votre stack. Rapport actionnable avec score de maturite et plan d'action a 90 jours.", features: ["Framework 80 points", "Score de maturite RevOps", "Plan d'action priorise"], color: "#FF7A59" },
              { title: "RevOps Part-Time", desc: "Un consultant RevOps & IA dedie, integre a votre equipe 2-3 jours par semaine. L'expertise sans le recrutement.", features: ["Channel Slack dedie", "Iterations hebdomadaires", "Deploiement IA continu"], color: "#4B5EFC" },
              { title: "Agence HubSpot", desc: "Setup, migration et optimisation de votre HubSpot. De Salesforce ou Dynamics vers HubSpot, sans perte de donnees.", features: ["Operationnel en 4 semaines", "Zero perte de donnees", "Formation equipe incluse"], color: "#FF7A59" },
              { title: "Agents IA", desc: "On connecte Claude a votre stack via MCP. Qualification, enrichissement, resumes de calls, scoring predictif.", features: ["Agents connectes au CRM", "Serveur MCP deploye", "Resultats en 2 semaines"], color: "#6D00CC" },
            ].map((s) => (
              <div key={s.title} className="rounded-xl border border-[#F0F0F0] p-6">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-3 h-3 rounded-sm" style={{ background: s.color }} />
                  <h3 className="text-[16px] font-bold text-[#111]">{s.title}</h3>
                </div>
                <p className="text-[11px] text-[#777] leading-[1.6] mb-4">{s.desc}</p>
                <div className="space-y-1.5">
                  {s.features.map((f) => (
                    <p key={f} className="text-[10px] text-[#555] flex items-center gap-2">
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M13.3 4.3L6 11.6L2.7 8.3" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {f}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-16 pb-6 text-[9px] text-[#CCC]">ceres.agency | Confidentiel</div>
      </Page>

      {/* ====== SLIDE 5: Cas clients highlights ====== */}
      <Page>
        <div className="px-16 pt-12 pb-8 flex-1">
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <span className="text-[10px] text-[#CCC] uppercase tracking-widest">Cas clients</span>
          </div>

          <h2 className="text-[32px] font-bold text-[#111] tracking-[-0.03em] mb-10">Resultats concrets</h2>

          <div className="grid grid-cols-3 gap-5">
            {[
              { client: "TotalEnergies", domain: "totalenergies.com", project: "Migration Dynamics vers HubSpot + unification multi-instances", results: ["45K+ contacts migres", "0 perte de donnees", "22 semaines"], tag: "Migration CRM" },
              { client: "Beedeez", domain: "beedeez.com", project: "RevOps complet + deploiement IA (Claude, MCP, Lemlist, Clay, Claap)", results: ["+45% pipeline genere", "-60% temps admin", "3x taux de reponse"], tag: "RevOps + IA" },
              { client: "Alan", domain: "alan.com", project: "Tracking marketing multi-touch et attribution dans HubSpot", results: ["100% leads traces", "+35% ROI mesurable", "6 modeles attribution"], tag: "Tracking" },
              { client: "Ringover", domain: "ringover.com", project: "RevOps Part-Time sur 12 mois avec deploiement IA progressif", results: ["+65% pipeline", "88% forecast accuracy", "40+ workflows"], tag: "RevOps Part-Time" },
              { client: "Dougs", domain: "dougs.fr", project: "Migration Salesforce vers HubSpot CRM + Marketing Hub", results: ["-45% cout CRM", "30K contacts migres", "16 semaines"], tag: "Migration" },
              { client: "HiPay", domain: "hipay.com", project: "Double migration Pardot + Salesforce vers HubSpot", results: ["-50% cout stack", "0 downtime", "20 semaines"], tag: "Double migration" },
            ].map((c) => (
              <div key={c.client} className="rounded-xl border border-[#F0F0F0] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <img src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=32`} alt={c.client} className="w-5 h-5 rounded" />
                  <span className="text-[13px] font-bold text-[#111]">{c.client}</span>
                  <span className="ml-auto text-[8px] px-1.5 py-0.5 rounded bg-[#F5F5F5] text-[#999]">{c.tag}</span>
                </div>
                <p className="text-[10px] text-[#777] leading-[1.5] mb-3">{c.project}</p>
                <div className="space-y-1">
                  {c.results.map((r) => (
                    <p key={r} className="text-[11px] font-semibold text-[#22C55E]">{r}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-16 pb-6 text-[9px] text-[#CCC]">ceres.agency | Confidentiel</div>
      </Page>

      {/* ====== SLIDE 6: Stack & Partenaires ====== */}
      <Page>
        <div className="px-16 pt-12 pb-8 flex-1">
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <span className="text-[10px] text-[#CCC] uppercase tracking-widest">Ecosysteme</span>
          </div>

          <h2 className="text-[32px] font-bold text-[#111] tracking-[-0.03em] mb-2">Notre ecosysteme</h2>
          <p className="text-[14px] text-[#777] max-w-[500px] leading-[1.7] mb-10">
            Partenaires officiels des meilleurs outils du marche.
          </p>

          <div className="grid grid-cols-4 gap-6 mb-12">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center gap-3 rounded-xl border border-[#F0F0F0] p-4">
                <img src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=64`} alt={p.name} className="w-8 h-8 rounded-lg" />
                <span className="text-[14px] font-medium text-[#111]">{p.name}</span>
              </div>
            ))}
          </div>

          <h3 className="text-[16px] font-bold text-[#111] mb-4">Pour qui</h3>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Startups", range: "5-50 pers.", color: "#22C55E" },
              { label: "PME", range: "50-200 pers.", color: "#4B5EFC" },
              { label: "Scale-ups", range: "200-1 000 pers.", color: "#6C5CE7" },
              { label: "Grands Groupes", range: "1 000+ pers.", color: "#FF7A59" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-[#F0F0F0] p-4 text-center">
                <div className="w-3 h-3 rounded-sm mx-auto mb-2" style={{ background: s.color }} />
                <p className="text-[14px] font-bold text-[#111]">{s.label}</p>
                <p className="text-[11px] text-[#999]">{s.range}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-16 pb-6 text-[9px] text-[#CCC]">ceres.agency | Confidentiel</div>
      </Page>

      {/* ====== SLIDE 7: Comment on travaille ====== */}
      <Page>
        <div className="px-16 pt-12 pb-8 flex-1">
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <span className="text-[10px] text-[#CCC] uppercase tracking-widest">Methodologie</span>
          </div>

          <h2 className="text-[32px] font-bold text-[#111] tracking-[-0.03em] mb-10">Comment on travaille</h2>

          <div className="grid grid-cols-3 gap-8">
            {[
              { step: "01", title: "Diagnostic", desc: "On audite votre CRM, vos processus et votre stack avec notre framework 80 points. Vous recevez un rapport avec un score de maturite et un plan d'action priorise.", time: "1-2 semaines", color: "#FF7A59" },
              { step: "02", title: "Build", desc: "On deploie les fondations : pipeline, scoring, workflows, dashboards, integrations. Chaque brique est documentee et testee avant mise en production.", time: "4-8 semaines", color: "#4B5EFC" },
              { step: "03", title: "Accompagnement", desc: "On reste a vos cotes pour iterer, optimiser et deployer l'IA progressivement. Rituels hebdomadaires, Slack dedie, reporting mensuel.", time: "Continu", color: "#22C55E" },
            ].map((s) => (
              <div key={s.step} className="border-t-[3px] pt-6" style={{ borderColor: s.color }}>
                <div className="text-[36px] font-bold text-[#F0F0F0] mb-2">{s.step}</div>
                <h3 className="text-[18px] font-bold text-[#111] mb-3">{s.title}</h3>
                <p className="text-[11px] text-[#777] leading-[1.7] mb-4">{s.desc}</p>
                <span className="text-[10px] px-2 py-1 rounded bg-[#F5F5F5] text-[#999]">{s.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="px-16 pb-6 text-[9px] text-[#CCC]">ceres.agency | Confidentiel</div>
      </Page>

      {/* ====== SLIDE 8: Temoignages ====== */}
      <Page>
        <div className="px-16 pt-12 pb-8 flex-1">
          <div className="flex items-center justify-between mb-10">
            <Logo />
            <span className="text-[10px] text-[#CCC] uppercase tracking-widest">Temoignages</span>
          </div>

          <h2 className="text-[32px] font-bold text-[#111] tracking-[-0.03em] mb-10">Ce qu&apos;ils disent</h2>

          <div className="grid grid-cols-2 gap-6">
            {[
              { quote: "Ceres a completement transforme notre facon de travailler. Le combo HubSpot + Claude + MCP est incroyable. L'equipe est ultra reactive, ils comprennent nos enjeux business, pas juste la technique.", author: "Hamza", role: "Head of Sales", company: "Beedeez" },
              { quote: "Ce qui nous a rassures, c'est qu'ils comprennent les enjeux business, pas juste la technique. On parle revenue, pas seulement CRM. Le meilleur investissement de l'annee.", author: "Ludovic R.", role: "VP Sales", company: "Ringover" },
              { quote: "Projet de migration complexe, zero perte de donnees, dans les delais. Aujourd'hui, on a enfin une source de verite unique pour tout le groupe. C'est un avant/apres.", author: "Laisa L.", role: "CRM Manager", company: "TotalEnergies" },
              { quote: "On a compare avec 3 agences. Ceres etait la seule a proposer un diagnostic avant de vendre. Ca a fait la difference. On a gagne 6 mois de structuration.", author: "Antoine C.", role: "Head of Sales", company: "Iroko" },
            ].map((t) => (
              <div key={t.author} className="rounded-xl border border-[#F0F0F0] p-6">
                <p className="text-[12px] text-[#555] leading-[1.7] mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center text-white text-[9px] font-bold">
                    {t.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-[#111]">{t.author}</p>
                    <p className="text-[9px] text-[#999]">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-16 pb-6 text-[9px] text-[#CCC]">ceres.agency | Confidentiel</div>
      </Page>

      {/* ====== SLIDE 9: Contact / CTA ====== */}
      <Page bg="#111">
        <div className="flex-1 flex flex-col justify-center items-center text-center px-20">
          <div className="text-white text-[48px] font-bold tracking-[-0.04em] mb-6">Travaillons ensemble</div>
          <div className="w-16 h-[2px] bg-[#FF7A59] mb-8" />
          <p className="text-white/50 text-[16px] leading-[1.7] max-w-[480px] mb-10">
            Reservez un appel decouverte de 30 minutes. On analyse votre situation et on vous dit si on peut vous aider.
          </p>

          <div className="grid grid-cols-2 gap-12 text-left">
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Contact</p>
              <p className="text-white text-[15px] font-semibold mb-1">Guillaume Delachet</p>
              <p className="text-white/50 text-[13px]">Co-fondateur, Ceres</p>
              <p className="text-white/40 text-[12px] mt-3">guillaume@ceres.agency</p>
              <p className="text-white/40 text-[12px]">ceres.agency/contact</p>
            </div>
            <div>
              <p className="text-white/30 text-[10px] uppercase tracking-widest mb-3">Adresse</p>
              <p className="text-white/50 text-[13px]">Ceres Growth Marketing</p>
              <p className="text-white/40 text-[12px] mt-1">128 rue La Boetie</p>
              <p className="text-white/40 text-[12px]">75008 Paris, France</p>
              <p className="text-[#FF7A59] text-[12px] mt-3">ceres.agency</p>
            </div>
          </div>
        </div>
        <div className="px-16 pb-8 flex justify-between items-center text-white/15 text-[10px]">
          <span>ceres.agency</span>
          <span>Confidentiel</span>
        </div>
      </Page>
    </div>
  );
}
