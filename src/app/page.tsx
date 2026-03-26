import type { Metadata } from "next";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Hero from "@/components/marketing/Hero";
import LogoCloud from "@/components/marketing/LogoCloud";
import Features from "@/components/marketing/Features";
import Services from "@/components/marketing/Services";
import HowItWorks from "@/components/marketing/HowItWorks";
import Testimonials from "@/components/marketing/Testimonials";
import Stats from "@/components/marketing/Stats";
import ForWho from "@/components/marketing/ForWho";
import Team from "@/components/marketing/Team";
import FAQ from "@/components/marketing/FAQ";
import CTA from "@/components/marketing/CTA";

export const metadata: Metadata = {
  title: "Ceres | Agence RevOps & IA pour entreprises B2B",
  description:
    "Ceres structure, automatise et optimise vos operations commerciales. Audit RevOps, migration HubSpot, agents IA. 250+ clients accompagnes en France.",
};


export default function LandingPage() {
  return (
    <main className="relative">
      <Hero />
      <LogoCloud />
      <Features />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <ForWho />
      <Team />

      {/* Cas clients */}
      <section className="relative z-20 py-3 md:py-0">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="mb-3"><Badge>Cas clients</Badge></div>
                <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] leading-[1.2] tracking-[-0.02em]">Ils nous font confiance</h2>
              </div>
              <Link href="/cas-clients" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#E5E5E5] text-[12px] font-medium text-[#666] hover:border-[#CCC] hover:text-[#111] transition-all">
                Voir les 13 cas clients
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { client: "TotalEnergies", desc: "Migration Dynamics vers HubSpot et unification multi-instances pour un grand groupe international.", result: "45K+ contacts migres", href: "/cas-clients/totalenergies", domain: "totalenergies.com", tag: "Migration CRM", tagColor: "#4B5EFC" },
                { client: "Beedeez", desc: "Structuration RevOps complete et deploiement IA avec Claude, MCP, Lemlist, Claap et Clay.", result: "+45% pipeline genere", href: "/cas-clients/beedeez", domain: "beedeez.com", tag: "RevOps + IA", tagColor: "#6D00CC" },
                { client: "Alan", desc: "Mise en place du tracking marketing multi-touch et de l\u2019attribution dans HubSpot.", result: "100% leads traces", href: "/cas-clients/alan", domain: "alan.com", tag: "Tracking", tagColor: "#6C5CE7" },
              ].map((c) => (
                <Link key={c.client} href={c.href} className="rounded-xl border border-[#F2F2F2] p-5 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <img src={`https://www.google.com/s2/favicons?domain=${c.domain}&sz=32`} alt={c.client} className="w-5 h-5" />
                      <p className="text-[13px] font-semibold text-[#111]">{c.client}</p>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded font-medium text-white" style={{ background: c.tagColor }}>{c.tag}</span>
                  </div>
                  <p className="text-[12px] text-[#777] leading-[1.6] mb-3">{c.desc}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[13px] font-bold text-[#22C55E]">{c.result}</p>
                    <span className="text-[11px] text-[#4B5EFC] font-medium opacity-0 group-hover:opacity-100 transition-opacity">Lire →</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-5 sm:hidden text-center">
              <Link href="/cas-clients" className="text-[12px] text-[#4B5EFC] font-medium hover:underline">Voir tous les cas clients →</Link>
            </div>
          </div>
          <div className="hidden md:block mx-auto w-px h-10 bg-[#E0E0E0]" />
        </div>
      </section>

      {/* Ressources */}
      <section className="relative z-20 py-3 md:py-0">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6 md:p-10 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
            <div className="mb-6">
              <div className="mb-3"><Badge>Ressources</Badge></div>
              <h2 className="text-[22px] sm:text-[28px] font-semibold text-[#111] leading-[1.2] tracking-[-0.02em] mb-2">Apprenez le RevOps</h2>
              <p className="text-[13px] text-[#999]">Guides, articles et outils gratuits pour structurer vos operations commerciales.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { title: "Guide RevOps Ultime", desc: "62 pages de frameworks, templates et checklists. Le playbook qu\u2019on utilise chez Ceres.", href: "/guide-revops-ultime", color: "#FF7A59", tag: "Guide" },
                { title: "Guide IA Commercial", desc: "42 pages, 25 prompts prouves et 3 workflows Make prets a importer.", href: "/guide-ia-commercial", color: "#6D00CC", tag: "Guide" },
                { title: "Blog", desc: "43+ articles sur le RevOps, le CRM, l\u2019outbound et l\u2019IA. Contenu actionnable.", href: "/blog", color: "#4B5EFC", tag: "43+ articles" },
                { title: "Glossaire RevOps", desc: "80+ termes du RevOps, CRM, Marketing et IA expliques simplement.", href: "/glossaire", color: "#22C55E", tag: "80+ termes" },
              ].map((r) => (
                <Link key={r.title} href={r.href} className="rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-2.5 h-2.5 rounded-sm" style={{ background: r.color }} />
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#F5F5F5] text-[#999] font-medium">{r.tag}</span>
                  </div>
                  <p className="text-[13px] font-semibold text-[#111] group-hover:text-[#4B5EFC] transition-colors mb-1.5">{r.title}</p>
                  <p className="text-[10px] text-[#999] leading-[1.5]">{r.desc}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block mx-auto w-px h-10 bg-[#E0E0E0]" />
        </div>
      </section>

      <FAQ />
      <CTA />
    </main>
  );
}
