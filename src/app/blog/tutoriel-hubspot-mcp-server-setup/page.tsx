"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Badge from "@/components/marketing/Badge";
import Connector from "@/components/marketing/Connector";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tutoriel HubSpot MCP server : setup pas-a-pas en 30 min",
  description: "Tutoriel pratique pour configurer le HubSpot MCP server officiel (GA avril 2026). OAuth, scopes, integration Claude Desktop, premiers prompts, troubleshooting.",
  author: { "@type": "Person", name: "Guillaume Delachet", url: "https://ceres.agency" },
  publisher: { "@type": "Organization", name: "Ceres", url: "https://ceres.agency" },
  datePublished: "2026-06-01",
  dateModified: "2026-06-01",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://ceres.agency/blog/tutoriel-hubspot-mcp-server-setup" },
  articleSection: "IA & Automatisation",
  wordCount: 2400,
  inLanguage: "fr",
};

const sections = [
  { id: "contexte", title: "Contexte : MCP server HubSpot GA" },
  { id: "prerequis", title: "Prerequis" },
  { id: "etape-1", title: "1. Activer MCP cote HubSpot" },
  { id: "etape-2", title: "2. Generer le client OAuth" },
  { id: "etape-3", title: "3. Configurer Claude Desktop" },
  { id: "etape-4", title: "4. Premiere connexion" },
  { id: "etape-5", title: "5. Premiers prompts" },
  { id: "troubleshooting", title: "Troubleshooting" },
];

const relatedArticles = [
  { title: "MCP : connecter Claude a votre CRM et vos outils", slug: "mcp-connecter-claude-crm-outils", category: "IA & Automatisation", color: "#6D00CC" },
  { title: "Le guide MCP pour le RevOps", slug: "../guide-mcp-revops", category: "Guide", color: "#FF7A59" },
  { title: "Claude Code pour les equipes non-techniques", slug: "claude-code-equipes-non-techniques", category: "IA & Automatisation", color: "#4B5EFC" },
];

export default function HubspotMcpTutorielPage() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("contexte");

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      setProgress(Math.min(100, (h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)) * 100));
      const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean);
      for (let i = els.length - 1; i >= 0; i--) {
        const el = els[i];
        if (el && el.getBoundingClientRect().top <= 160) { setActiveSection(sections[i].id); break; }
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative pt-[80px] md:pt-[100px] pb-16 overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 h-[2px] z-50"><div className="h-full bg-[#FF7A59] transition-all duration-150" style={{ width: `${progress}%` }} /></div>
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "2%", top: "6%", width: 300, height: 300, borderRadius: "50%", background: "#FF7A59", opacity: 0.10, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ right: "3%", top: "30%", width: 280, height: 280, borderRadius: "50%", background: "#6D00CC", opacity: 0.08, filter: "blur(70px)" }} />
      <div className="hidden lg:block absolute pointer-events-none" style={{ left: "4%", top: "60%", width: 260, height: 260, borderRadius: "50%", background: "#4B5EFC", opacity: 0.08, filter: "blur(70px)" }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6">
        <div className="flex gap-10">
          <aside className="hidden lg:block w-[200px] shrink-0"><div className="sticky top-28">
            <p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Sommaire</p>
            <nav className="space-y-1">{sections.map((s) => (<a key={s.id} href={`#${s.id}`} className={`block text-[11px] py-1.5 pl-3 border-l-2 transition-all ${activeSection === s.id ? "border-[#FF7A59] text-[#111] font-medium" : "border-transparent text-[#999] hover:text-[#666] hover:border-[#DDD]"}`}>{s.title}</a>))}</nav>
          </div></aside>

          <div className="flex-1 min-w-0 max-w-[700px]">
            <nav className="mb-8 flex items-center gap-2 text-[12px] text-[#999]"><Link href="/" className="hover:text-[#111] transition-colors">Accueil</Link><span>/</span><Link href="/blog" className="hover:text-[#111] transition-colors">Blog</Link><span>/</span><span className="text-[#666]">Tutoriel HubSpot MCP server</span></nav>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-5"><Badge>IA &amp; Automatisation</Badge><span className="text-[11px] text-[#CCC]">12 min de lecture</span></div>
              <h1 className="text-[32px] sm:text-[44px] font-semibold text-[#111] leading-[1.1] tracking-[-0.03em] mb-5">Tutoriel HubSpot MCP server : setup en 30 minutes</h1>
              <p className="text-[17px] text-[#666] leading-[1.7] mb-4">Le HubSpot MCP server officiel est passe en GA le 13 avril 2026. Voici le tutoriel pas-a-pas pour le configurer en 30 minutes et envoyer ton premier prompt Claude qui lit ton CRM.</p>
              <p className="text-[13px] text-[#999]">Par <span className="text-[#111] font-medium">Guillaume Delachet</span> &middot; 1er juin 2026</p>
            </header>

            <article>
              <section id="contexte" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Contexte : pourquoi tu veux ce tuto maintenant</h2>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Depuis le 13 avril 2026, HubSpot heberge un serveur MCP officiel a <code className="text-[#6D00CC]">mcp.hubspot.com</code>. Plus besoin de wrapper, plus besoin de Zapier intermediaire : tout client MCP-compatible (Claude Desktop, ChatGPT Apps SDK, Cursor, Vercel AI SDK...) peut directement lire et ecrire ton CRM HubSpot via OAuth 2.1.</p>
                  <p>Et c&apos;est le moment ou les RevOps Managers commencent a vouloir tester. Sans tutoriel pratique, beaucoup tatonnent : OAuth, scopes, choix client, premier prompt. Cet article passe en revue le setup complet pour un usage Claude Desktop, le plus rapide a configurer.</p>
                </div>
                <div className="mt-6 rounded-xl bg-[#111] p-5"><p className="text-[13px] text-white/60 leading-[1.75]">Si tu veux le pourquoi strategique (architecture MCP, comparatif vs API, cas d&apos;usage RevOps), va voir notre <Link href="/guide-mcp-revops" className="text-white underline hover:text-white/80">guide MCP pour le RevOps</Link> de 65 pages. Cet article-ci est focus <strong className="text-white">execution</strong>.</p></div>
              </div></section>
              <Connector />

              <section id="prerequis" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Prerequis</h2>
                <ul className="list-disc pl-5 space-y-2 text-[13px] text-[#555] leading-[1.75]">
                  <li><strong>HubSpot</strong> : compte Pro ou Enterprise (le MCP server n&apos;est pas disponible sur Starter/Free)</li>
                  <li><strong>Permissions admin</strong> sur ton portail HubSpot (necessaire pour generer le client OAuth)</li>
                  <li><strong>Claude Desktop</strong> installe (Mac, Windows, Linux) avec un compte Claude Pro ou Team</li>
                  <li>Un editeur de texte pour modifier le fichier de config Claude Desktop</li>
                  <li>30 minutes devant toi (compte 45 si premiere fois)</li>
                </ul>
              </div></section>
              <Connector />

              <section id="etape-1" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">01</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Activer MCP cote HubSpot</h2></div>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Dans HubSpot, va dans <strong>Settings &raquo; Integrations &raquo; MCP server</strong>. Si tu ne vois pas cette section, ton compte n&apos;est probablement pas Pro/Enterprise ou la feature n&apos;est pas encore deployee sur ton portail (deploiement progressif Q2 2026).</p>
                  <p>Clique <strong>&laquo; Enable MCP server &raquo;</strong>. Tu vois apparaitre l&apos;URL de ton serveur :</p>
                </div>
                <pre className="bg-[#0A0A0A] text-[#E5E7EB] rounded-lg p-4 text-[11px] leading-[1.55] overflow-x-auto mt-4"><code>{`https://mcp.hubspot.com/v1/{your-portal-id}`}</code></pre>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mt-4">
                  <p>Garde ce portal ID sous la main, tu en auras besoin a l&apos;etape 3.</p>
                </div>
              </div></section>
              <Connector />

              <section id="etape-2" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">02</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Generer un client OAuth</h2></div>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Toujours dans Settings, va dans <strong>Integrations &raquo; Private apps</strong> puis <strong>Create a private app</strong>. Nomme-la &laquo; Claude MCP - {`{your-name}`} &raquo;.</p>
                  <p>Onglet <strong>Scopes</strong> : pour debuter en lecture-seule (recommande), coche :</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li><code className="text-[#6D00CC]">crm.objects.contacts.read</code></li>
                    <li><code className="text-[#6D00CC]">crm.objects.companies.read</code></li>
                    <li><code className="text-[#6D00CC]">crm.objects.deals.read</code></li>
                    <li><code className="text-[#6D00CC]">crm.schemas.contacts.read</code> + companies/deals (schemas)</li>
                  </ul>
                  <p>Tu pourras ajouter <code className="text-[#6D00CC]">.write</code> et <code className="text-[#6D00CC]">crm.objects.tickets.read</code>, <code className="text-[#6D00CC]">crm.objects.engagements.read</code> plus tard quand tu seras a l&apos;aise.</p>
                  <p>Clique <strong>Create app</strong>. Copie le <strong>token d&apos;acces</strong> qui s&apos;affiche. Tu ne le reverras pas une fois la page fermee.</p>
                </div>
                <div className="mt-6 rounded-xl border-l-[3px] border-[#EF4444] bg-[#FAFAFA] p-4"><p className="text-[12px] text-[#777] leading-[1.65]"><strong>Securite :</strong> ce token donne acces a ton CRM. Ne le commit jamais dans Git, ne le partage pas. Stocke-le dans un password manager. Revoque-le immediatement si compromis (Private apps &raquo; Manage).</p></div>
              </div></section>
              <Connector />

              <section id="etape-3" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">03</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Configurer Claude Desktop</h2></div>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Localise le fichier de config Claude Desktop selon ton OS :</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>Mac</strong> : <code className="text-[#6D00CC]">~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
                    <li><strong>Windows</strong> : <code className="text-[#6D00CC]">%APPDATA%\Claude\claude_desktop_config.json</code></li>
                    <li><strong>Linux</strong> : <code className="text-[#6D00CC]">~/.config/Claude/claude_desktop_config.json</code></li>
                  </ul>
                  <p>Ouvre le fichier dans ton editeur (s&apos;il n&apos;existe pas, cree-le) et ajoute :</p>
                </div>
                <pre className="bg-[#0A0A0A] text-[#E5E7EB] rounded-lg p-4 text-[11px] leading-[1.55] overflow-x-auto mt-4"><code>{`{
  "mcpServers": {
    "hubspot": {
      "url": "https://mcp.hubspot.com/v1/{YOUR_PORTAL_ID}",
      "headers": {
        "Authorization": "Bearer {YOUR_PRIVATE_APP_TOKEN}"
      }
    }
  }
}`}</code></pre>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mt-4">
                  <p>Remplace <code className="text-[#6D00CC]">{`{YOUR_PORTAL_ID}`}</code> par l&apos;ID de l&apos;etape 1 et <code className="text-[#6D00CC]">{`{YOUR_PRIVATE_APP_TOKEN}`}</code> par le token de l&apos;etape 2.</p>
                  <p>Sauvegarde le fichier puis <strong>quitte completement Claude Desktop</strong> (Cmd+Q sur Mac, pas juste fermer la fenetre) et relance-le.</p>
                </div>
              </div></section>
              <Connector />

              <section id="etape-4" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">04</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">Premiere connexion et verification</h2></div>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75]">
                  <p>Au premier lancement apres modification du config, Claude Desktop affiche une icone d&apos;outil (cle a molette) dans le coin inferieur droit de la zone de chat. Clique dessus.</p>
                  <p>Tu dois voir <strong>hubspot</strong> dans la liste des MCP servers connectes. Si oui : c&apos;est gagne. Si non : voir le troubleshooting plus bas.</p>
                  <p>Pour tester rapidement, demande a Claude :</p>
                </div>
                <pre className="bg-[#0A0A0A] text-[#E5E7EB] rounded-lg p-4 text-[11px] leading-[1.55] overflow-x-auto mt-4"><code>{`Donne-moi les 5 derniers contacts crees dans HubSpot,
avec leur email, leur entreprise et leur date de creation.`}</code></pre>
                <div className="space-y-4 text-[13px] text-[#555] leading-[1.75] mt-4">
                  <p>Claude va t&apos;afficher un prompt de confirmation &laquo; HubSpot wants to query your contacts &raquo;. Accepte. Tu vois le resultat reel de ton CRM dans la conversation. Premier &laquo; wow moment &raquo;.</p>
                </div>
              </div></section>
              <Connector />

              <section id="etape-5" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <div className="flex items-start gap-4 mb-5"><div className="text-[40px] font-bold text-[#F2F2F2] leading-none select-none">05</div><h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em]">5 premiers prompts utiles RevOps</h2></div>
                <p className="text-[13px] text-[#555] leading-[1.75] mb-5">Voici 5 prompts qui marchent bien des le J1 et te montreront la puissance reelle :</p>
                <div className="space-y-4">
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">1. Pipeline coverage du Q en cours</p>
                    <pre className="text-[11px] text-[#555] leading-[1.6] whitespace-pre-wrap font-mono">{`Quels deals dans le pipeline (stage != Closed Won/Lost)
ont une close_date dans le Q en cours ? Total, par owner,
par stage. Calcule le coverage vs un objectif de 1M EUR.`}</pre>
                  </div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">2. Deals fantomes</p>
                    <pre className="text-[11px] text-[#555] leading-[1.6] whitespace-pre-wrap font-mono">{`Liste les deals ouverts sans activite (engagement) depuis 14 jours.
Format : Nom du deal, owner, montant, derniere activite, age.
Sort par montant decroissant.`}</pre>
                  </div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">3. Brief avant un meeting</p>
                    <pre className="text-[11px] text-[#555] leading-[1.6] whitespace-pre-wrap font-mono">{`Brief contextuel sur le contact pierre.dupont@example.com :
historique deals, derniers emails recus/envoyes, notes,
et company info. 200 mots max, format puces.`}</pre>
                  </div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">4. Qualite data</p>
                    <pre className="text-[11px] text-[#555] leading-[1.6] whitespace-pre-wrap font-mono">{`Combien de contacts ont un email sans nom, ou un nom sans email,
ou pas d'industry renseigne ? Donne le top 10 des problemes
de qualite data sur les contacts crees ces 30 derniers jours.`}</pre>
                  </div>
                  <div className="rounded-xl border border-[#F2F2F2] bg-[#FAFAFA] p-4">
                    <p className="text-[12px] font-semibold text-[#111] mb-2">5. Comparatif segments</p>
                    <pre className="text-[11px] text-[#555] leading-[1.6] whitespace-pre-wrap font-mono">{`Compare les deals fermes won des 90 derniers jours vs ceux
fermes lost : taille company moyenne, cycle de vente,
nombre d'engagements, source. Trouve les 3 patterns gagnants.`}</pre>
                  </div>
                </div>
              </div></section>
              <Connector />

              <section id="troubleshooting" className="mb-8"><div className="rounded-2xl border border-[#E8E8E8] bg-white p-5 md:p-8 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.08)]">
                <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#111] tracking-[-0.02em] mb-5">Troubleshooting : les 4 problemes classiques</h2>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Claude ne voit pas le serveur HubSpot</p><p className="text-[12px] text-[#777] leading-[1.65]">Verifie que tu as bien <strong>quitte completement</strong> Claude Desktop (Cmd+Q / Alt+F4) avant relance. Verifie le JSON du config file avec un linter (jsonlint.com) pour t&apos;assurer qu&apos;il est valide.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Erreur 401 Unauthorized</p><p className="text-[12px] text-[#777] leading-[1.65]">Le token est invalide ou expire. Regenere une private app dans HubSpot et remplace le token dans le config.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Erreur 403 Forbidden</p><p className="text-[12px] text-[#777] leading-[1.65]">Le scope demande n&apos;est pas dans ta private app. Verifie les scopes coches a l&apos;etape 2 et ajoute ceux dont tu as besoin.</p></div>
                  <div className="rounded-xl border-l-[3px] border-[#F59E0B] bg-[#FAFAFA] p-4"><p className="text-[12px] font-semibold text-[#111] mb-1">Rate limit (429)</p><p className="text-[12px] text-[#777] leading-[1.65]">Le MCP server applique les rate limits HubSpot API v3 (100 req/10s). Si tu itererais sur 1000 contacts, batch-les via des queries plus larges (filters) plutot que en boucle.</p></div>
                </div>
              </div></section>
              <Connector />

              <section className="mb-8"><div className="rounded-2xl p-8 md:p-12 text-center" style={{ background: "linear-gradient(135deg, #FF7A59, #E8533F)" }}>
                <h2 className="text-[24px] sm:text-[28px] font-semibold text-white tracking-[-0.02em] mb-3">Besoin d&apos;aide pour deployer MCP en prod ?</h2>
                <p className="text-[14px] text-white/70 mb-6 max-w-[460px] mx-auto">30 min avec Guillaume pour cadrer ton deploiement MCP : scopes, securite, gouvernance, premiers cas d&apos;usage.</p>
                <a href="https://meetings.hubspot.com/guillaume104?uuid=4a9f5cd8-627d-46b1-907c-fff636378ab9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#111] text-[13px] font-medium hover:bg-white/90 transition-colors"><span className="w-2 h-2 rounded-sm bg-[#22C55E]" />Reserver un creneau</a>
              </div></section>
              <Connector />

              <section><p className="text-[11px] font-semibold text-[#999] uppercase tracking-wider mb-4">Continuer la lecture</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">{relatedArticles.map((r) => (<Link key={r.slug} href={r.slug.startsWith("..") ? r.slug.replace("../", "/") : `/blog/${r.slug}`} className="block rounded-xl border border-[#F2F2F2] p-4 hover:border-[#DDD] hover:shadow-[0_4px_12px_-4px_rgba(0,0,0,0.06)] transition-all"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-sm" style={{ background: r.color }} /><span className="text-[10px] uppercase tracking-wider text-[#999] font-semibold">{r.category}</span></div><h3 className="text-[12px] font-semibold text-[#111] leading-[1.4]">{r.title}</h3></Link>))}</div>
              </section>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
