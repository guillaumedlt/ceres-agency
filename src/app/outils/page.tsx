"use client";

import { useState } from "react";
import Badge from "@/components/marketing/Badge";
import Link from "next/link";

/* ─── CATEGORIES ─── */
const categories = [
  { key: "all", label: "Tous les outils", color: "#111" },
  { key: "crm", label: "CRM", color: "#4B5EFC" },
  { key: "enrichissement", label: "Enrichissement & Data", color: "#22C55E" },
  { key: "outbound", label: "Outbound & Cold Email", color: "#6C5CE7" },
  { key: "automatisation", label: "Automatisation & iPaaS", color: "#6D00CC" },
  { key: "ia", label: "IA & LLM", color: "#D4A27F" },
  { key: "productivite", label: "Productivit\u00e9 & Collaboration", color: "#FF7A59" },
  { key: "analytics", label: "Analytics & Reporting", color: "#4B5EFC" },
  { key: "communication", label: "Communication & Calls", color: "#22C55E" },
  { key: "design", label: "Design & Contenu", color: "#6C5CE7" },
  { key: "dev", label: "Dev & Infrastructure", color: "#111" },
  { key: "ai-sdr", label: "AI SDR & Agents", color: "#6D00CC" },
  { key: "sales-intelligence", label: "Sales Intelligence & Intent", color: "#FF7A59" },
  { key: "customer-success", label: "Customer Success", color: "#22C55E" },
  { key: "proposals", label: "Proposals & Contracts", color: "#4B5EFC" },
  { key: "linkedin", label: "LinkedIn Tools", color: "#0A66C2" },
  { key: "deliverability", label: "Email Deliverability", color: "#EF4444" },
  { key: "conversational", label: "Conversational & Chatbots", color: "#6C5CE7" },
];

type Tool = {
  name: string;
  domain: string;
  price: string;
  avis: string;
  description: string;
  category: string;
  ceres?: boolean;
};

/* ─── TOOLS DATA ─── */
const tools: Tool[] = [
  // CRM (15)
  { name: "HubSpot", domain: "hubspot.com", price: "Freemium / $$$$", avis: "Incontournable", description: "Le CRM all-in-one de r\u00e9f\u00e9rence pour le mid-market. Marketing, Sales, Service, CMS, Ops Hub.", category: "crm", ceres: true },
  { name: "Salesforce", domain: "salesforce.com", price: "$$$$", avis: "Excellent", description: "Le leader enterprise. Infinite customization, AppExchange, Einstein AI.", category: "crm" },
  { name: "Attio", domain: "attio.com", price: "Freemium / $$", avis: "A tester", description: "Le CRM moderne API-first. UX Notion-inspired, flexible, rapide.", category: "crm", ceres: true },
  { name: "Pipedrive", domain: "pipedrive.com", price: "$$", avis: "Bon", description: "Le meilleur pipeline visuel. Simple, abordable, id\u00e9al pour les petites \u00e9quipes sales.", category: "crm" },
  { name: "Folk", domain: "folk.app", price: "$$", avis: "Bon", description: "CRM fran\u00e7ais, LinkedIn-natif, setup en 20 min. Parfait pour les agences.", category: "crm" },
  { name: "Zoho CRM", domain: "zoho.com", price: "Freemium / $$$", avis: "Bon", description: "Rapport qualit\u00e9/prix imbattable. Suite compl\u00e8te \u00e0 prix PME.", category: "crm" },
  { name: "Monday CRM", domain: "monday.com", price: "$$", avis: "Bon", description: "CRM visuel pour les \u00e9quipes qui veulent du Kanban.", category: "crm" },
  { name: "Freshsales", domain: "freshworks.com", price: "Freemium / $$", avis: "Bon", description: "CRM avec IA int\u00e9gr\u00e9e, bon pour les startups.", category: "crm" },
  { name: "Close", domain: "close.com", price: "$$", avis: "Bon", description: "CRM pour les \u00e9quipes outbound. Calling int\u00e9gr\u00e9.", category: "crm" },
  { name: "noCRM", domain: "nocrm.io", price: "$$", avis: "Niche", description: "Anti-CRM pour les commerciaux qui d\u00e9testent la saisie.", category: "crm" },
  { name: "Copper", domain: "copper.dev", price: "$$", avis: "Niche", description: "CRM natif Google Workspace.", category: "crm" },
  { name: "Odoo", domain: "odoo.com", price: "Freemium / $$", avis: "Bon", description: "CRM + ERP open source. 80+ modules.", category: "crm" },
  { name: "Sellsy", domain: "sellsy.com", price: "$$", avis: "Bon", description: "CRM + facturation fran\u00e7ais.", category: "crm" },
  { name: "Axonaut", domain: "axonaut.com", price: "$$", avis: "Niche", description: "CRM PME fran\u00e7ais avec compta int\u00e9gr\u00e9e.", category: "crm" },
  { name: "Notion (CRM)", domain: "notion.so", price: "Freemium", avis: "A tester", description: "Pas un vrai CRM mais certains l\u2019utilisent comme tel. Limit\u00e9.", category: "crm" },

  // Enrichissement & Data (12)
  { name: "Clay", domain: "clay.com", price: "$$$", avis: "Incontournable", description: "Waterfall enrichment, 75+ providers, AI columns. La Rolls de l\u2019enrichissement.", category: "enrichissement", ceres: true },
  { name: "Apollo", domain: "apollo.io", price: "Freemium / $$$", avis: "Excellent", description: "275M+ contacts, enrichissement + outbound int\u00e9gr\u00e9.", category: "enrichissement" },
  { name: "Dropcontact", domain: "dropcontact.com", price: "$$", avis: "Excellent", description: "Enrichissement RGPD fran\u00e7ais. Algorithmique, pas de base.", category: "enrichissement", ceres: true },
  { name: "Clearbit", domain: "clearbit.com", price: "$$$", avis: "Bon", description: "Enrichissement entreprise en temps r\u00e9el. Rachet\u00e9 par HubSpot.", category: "enrichissement" },
  { name: "Lusha", domain: "lusha.com", price: "$$", avis: "Bon", description: "Emails et t\u00e9l\u00e9phones depuis LinkedIn. Simple.", category: "enrichissement" },
  { name: "Kaspr", domain: "kaspr.io", price: "$$", avis: "Bon", description: "Extension LinkedIn pour trouver les emails. Fran\u00e7ais.", category: "enrichissement" },
  { name: "ZoomInfo", domain: "zoominfo.com", price: "$$$$", avis: "Excellent", description: "La r\u00e9f\u00e9rence enterprise. 100M+ contacts. Cher.", category: "enrichissement" },
  { name: "Cognism", domain: "cognism.com", price: "$$$", avis: "Bon", description: "Enrichissement European-first. RGPD compliant.", category: "enrichissement" },
  { name: "Societeinfo", domain: "societeinfo.com", price: "$$", avis: "Niche", description: "Donn\u00e9es entreprises fran\u00e7aises. Parfait pour le march\u00e9 FR.", category: "enrichissement" },
  { name: "Captain Data", domain: "captaindata.co", price: "$$", avis: "Bon", description: "Scraping et enrichissement automatis\u00e9. Fran\u00e7ais.", category: "enrichissement" },
  { name: "PhantomBuster", domain: "phantombuster.com", price: "$$", avis: "Bon", description: "Scraping LinkedIn et web. No-code.", category: "enrichissement" },
  { name: "Snov.io", domain: "snov.io", price: "Freemium / $$", avis: "Bon", description: "Email finder + v\u00e9rification + CRM l\u00e9ger.", category: "enrichissement" },

  // Outbound & Cold Email (10)
  { name: "Lemlist", domain: "lemlist.com", price: "$$ / $$$", avis: "Incontournable", description: "Le meilleur pour la personnalisation. AI enrichment, multicanal, Lemwarm.", category: "outbound", ceres: true },
  { name: "Instantly", domain: "instantly.ai", price: "$$", avis: "Excellent", description: "Volume d\u2019envoi illimit\u00e9 \u00e0 petit prix. Email only.", category: "outbound" },
  { name: "Emelia", domain: "emelia.io", price: "$", avis: "Bon", description: "Cold email simple et pas cher. Fran\u00e7ais. Warm-up inclus.", category: "outbound" },
  { name: "La Growth Machine", domain: "lagrowthmachine.com", price: "$$ / $$$", avis: "Bon", description: "Multicanal LinkedIn + email + Twitter.", category: "outbound" },
  { name: "Woodpecker", domain: "woodpecker.co", price: "$$", avis: "Bon", description: "Cold email pour les agences.", category: "outbound" },
  { name: "Mailshake", domain: "mailshake.com", price: "$$", avis: "Bon", description: "Cold email + dialer int\u00e9gr\u00e9.", category: "outbound" },
  { name: "Outreach", domain: "outreach.io", price: "$$$$", avis: "Excellent", description: "La r\u00e9f\u00e9rence enterprise. Revenue intelligence.", category: "outbound" },
  { name: "Salesloft", domain: "salesloft.com", price: "$$$$", avis: "Excellent", description: "Concurrent Outreach. Multi-canal enterprise.", category: "outbound" },
  { name: "Waalaxy", domain: "waalaxy.com", price: "Freemium / $$", avis: "Bon", description: "Automatisation LinkedIn. Fran\u00e7ais.", category: "outbound" },
  { name: "Reply.io", domain: "reply.io", price: "$$", avis: "Bon", description: "Multicanal avec IA int\u00e9gr\u00e9e.", category: "outbound" },

  // Automatisation & iPaaS (8)
  { name: "Make", domain: "make.com", price: "Freemium / $$", avis: "Incontournable", description: "Le meilleur rapport puissance/prix. 1500+ apps.", category: "automatisation", ceres: true },
  { name: "Zapier", domain: "zapier.com", price: "Freemium / $$$", avis: "Excellent", description: "Le plus connu. 6000+ apps. Plus cher que Make.", category: "automatisation" },
  { name: "n8n", domain: "n8n.io", price: "Freemium / $$", avis: "Excellent", description: "Open source, self-hosted possible. Puissant.", category: "automatisation" },
  { name: "Tray.io", domain: "tray.io", price: "$$$$", avis: "Bon", description: "iPaaS enterprise. Complex workflows.", category: "automatisation" },
  { name: "Workato", domain: "workato.com", price: "$$$$", avis: "Bon", description: "iPaaS enterprise + AI. Gartner leader.", category: "automatisation" },
  { name: "Bardeen", domain: "bardeen.ai", price: "Freemium", avis: "A tester", description: "Automatisation dans le navigateur. No-code.", category: "automatisation" },
  { name: "Pipedream", domain: "pipedream.com", price: "Freemium", avis: "A tester", description: "Workflows code-first. Developers.", category: "automatisation" },
  { name: "Power Automate", domain: "microsoft.com", price: "$$", avis: "Bon", description: "Automatisation Microsoft ecosystem.", category: "automatisation" },

  // IA & LLM (12)
  { name: "Claude", domain: "claude.ai", price: "Freemium / $$$", avis: "Incontournable", description: "Meilleur raisonnement. 200K context. MCP. Claude Code.", category: "ia", ceres: true },
  { name: "ChatGPT", domain: "chatgpt.com", price: "Freemium / $$$", avis: "Excellent", description: "Le plus connu. GPT-4o, plugins, Code Interpreter.", category: "ia" },
  { name: "Gemini", domain: "gemini.google.com", price: "Freemium / $$", avis: "Bon", description: "Google AI. Multimodal, int\u00e9gration Google.", category: "ia" },
  { name: "Perplexity", domain: "perplexity.ai", price: "Freemium / $$", avis: "Excellent", description: "Recherche IA avec sources. Remplace Google pour la recherche.", category: "ia" },
  { name: "Mistral", domain: "mistral.ai", price: "Freemium / $$", avis: "Bon", description: "IA fran\u00e7aise. Open source. Bon rapport qualit\u00e9/prix.", category: "ia" },
  { name: "Jasper", domain: "jasper.ai", price: "$$$", avis: "Bon", description: "IA sp\u00e9cialis\u00e9e content marketing.", category: "ia" },
  { name: "Copy.ai", domain: "copy.ai", price: "Freemium / $$", avis: "Bon", description: "IA copywriting et workflows.", category: "ia" },
  { name: "Wispr", domain: "wispr.flow", price: "$$", avis: "A tester", description: "Dict\u00e9e IA. Parlez, l\u2019IA \u00e9crit.", category: "ia" },
  { name: "Otter.ai", domain: "otter.ai", price: "Freemium / $$", avis: "Bon", description: "Transcription IA des meetings.", category: "ia" },
  { name: "Fireflies.ai", domain: "fireflies.ai", price: "Freemium / $$", avis: "Bon", description: "Transcription + r\u00e9sum\u00e9 + action items.", category: "ia" },
  { name: "Cursor", domain: "cursor.com", price: "Freemium / $$", avis: "Excellent", description: "IDE avec IA int\u00e9gr\u00e9e. Coding 10x.", category: "ia" },
  { name: "v0", domain: "v0.dev", price: "Freemium", avis: "A tester", description: "G\u00e9n\u00e9rateur d\u2019UI par Vercel.", category: "ia" },

  // Productivite & Collaboration (12)
  { name: "Notion", domain: "notion.so", price: "Freemium / $$", avis: "Incontournable", description: "Docs, wikis, bases de donn\u00e9es, projets. Tout-en-un.", category: "productivite", ceres: true },
  { name: "Slack", domain: "slack.com", price: "Freemium / $$$", avis: "Incontournable", description: "Communication d\u2019\u00e9quipe. Channels, int\u00e9grations, workflows.", category: "productivite", ceres: true },
  { name: "Linear", domain: "linear.app", price: "Freemium / $$", avis: "Excellent", description: "Gestion de projet pour les \u00e9quipes tech. Ultra rapide.", category: "productivite" },
  { name: "Granola", domain: "granola.so", price: "Freemium", avis: "A tester", description: "Notes de meeting IA. Transcrit et structure automatiquement.", category: "productivite" },
  { name: "Loom", domain: "loom.com", price: "Freemium / $$", avis: "Excellent", description: "Vid\u00e9os asynchrones. Parfait pour les demos et le support.", category: "productivite" },
  { name: "Superhuman", domain: "superhuman.com", price: "$$$", avis: "Bon", description: "Email client ultra rapide. $30/mois.", category: "productivite" },
  { name: "Cron", domain: "cron.com", price: "Freemium", avis: "Bon", description: "Calendrier moderne. Rachet\u00e9 par Notion.", category: "productivite" },
  { name: "Figma", domain: "figma.com", price: "Freemium / $$$", avis: "Incontournable", description: "Design collaboratif. Standard de l\u2019industrie.", category: "productivite" },
  { name: "Miro", domain: "miro.com", price: "Freemium / $$", avis: "Bon", description: "Tableau blanc collaboratif.", category: "productivite" },
  { name: "Airtable", domain: "airtable.com", price: "Freemium / $$$", avis: "Bon", description: "Spreadsheet + database. No-code.", category: "productivite" },
  { name: "ClickUp", domain: "clickup.com", price: "Freemium / $$", avis: "Bon", description: "Gestion de projet tout-en-un.", category: "productivite" },
  { name: "Calendly", domain: "calendly.com", price: "Freemium / $$", avis: "Bon", description: "Prise de RDV automatis\u00e9e.", category: "productivite" },

  // Analytics & Reporting (8)
  { name: "Looker Studio", domain: "lookerstudio.google.com", price: "Gratuit", avis: "Excellent", description: "BI gratuit de Google. Connect\u00e9 \u00e0 tout.", category: "analytics" },
  { name: "Metabase", domain: "metabase.com", price: "Freemium / $$", avis: "Excellent", description: "BI open source. Self-hosted possible.", category: "analytics" },
  { name: "Mixpanel", domain: "mixpanel.com", price: "Freemium / $$$", avis: "Bon", description: "Analytics produit. Events, funnels, cohorts.", category: "analytics" },
  { name: "Amplitude", domain: "amplitude.com", price: "Freemium / $$$", avis: "Bon", description: "Analytics produit enterprise.", category: "analytics" },
  { name: "Datadog", domain: "datadoghq.com", price: "$$$", avis: "Bon", description: "Monitoring et observabilit\u00e9.", category: "analytics" },
  { name: "Segment", domain: "segment.com", price: "$$$", avis: "Bon", description: "Customer Data Platform. Unifier les donn\u00e9es.", category: "analytics" },
  { name: "Plausible", domain: "plausible.io", price: "$$", avis: "Bon", description: "Analytics RGPD. Alternative Google Analytics.", category: "analytics" },
  { name: "PostHog", domain: "posthog.com", price: "Freemium / $$", avis: "Excellent", description: "Product analytics open source. Feature flags, session replay.", category: "analytics" },

  // Communication & Calls (8)
  { name: "Claap", domain: "claap.io", price: "$$", avis: "Excellent", description: "Enregistrement et intelligence des calls. Fran\u00e7ais.", category: "communication", ceres: true },
  { name: "Gong", domain: "gong.io", price: "$$$$", avis: "Excellent", description: "Revenue intelligence. Analyse des calls enterprise.", category: "communication" },
  { name: "Modjo", domain: "modjo.ai", price: "$$$", avis: "Bon", description: "Intelligence commerciale. Fran\u00e7ais. Concurrent Gong.", category: "communication" },
  { name: "Ringover", domain: "ringover.com", price: "$$", avis: "Bon", description: "T\u00e9l\u00e9phonie cloud + VoIP. Fran\u00e7ais.", category: "communication" },
  { name: "Aircall", domain: "aircall.com", price: "$$$", avis: "Bon", description: "T\u00e9l\u00e9phonie cloud. Int\u00e9gration CRM.", category: "communication" },
  { name: "Zoom", domain: "zoom.us", price: "Freemium / $$", avis: "Incontournable", description: "Visioconf\u00e9rence. Standard.", category: "communication" },
  { name: "Google Meet", domain: "meet.google.com", price: "Gratuit", avis: "Bon", description: "Visio Google. Simple, int\u00e9gr\u00e9.", category: "communication" },
  { name: "Krisp", domain: "krisp.ai", price: "Freemium / $$", avis: "A tester", description: "Suppression du bruit IA pour les calls.", category: "communication" },

  // Design & Contenu (8)
  { name: "Canva", domain: "canva.com", price: "Freemium / $$", avis: "Excellent", description: "Design no-code. Templates, IA g\u00e9n\u00e9rative.", category: "design" },
  { name: "Pitch", domain: "pitch.com", price: "Freemium / $$", avis: "Bon", description: "Pr\u00e9sentations collaboratives. Alternative Slides.", category: "design" },
  { name: "Descript", domain: "descript.com", price: "Freemium / $$", avis: "Excellent", description: "\u00c9dition vid\u00e9o/audio par IA. Transcription + editing.", category: "design" },
  { name: "Riverside", domain: "riverside.fm", price: "$$", avis: "Bon", description: "Enregistrement podcast/vid\u00e9o haute qualit\u00e9.", category: "design" },
  { name: "Midjourney", domain: "midjourney.com", price: "$$", avis: "Excellent", description: "G\u00e9n\u00e9ration d\u2019images IA. Le meilleur visuellement.", category: "design" },
  { name: "Runway", domain: "runwayml.com", price: "$$", avis: "A tester", description: "G\u00e9n\u00e9ration vid\u00e9o IA.", category: "design" },
  { name: "ElevenLabs", domain: "elevenlabs.io", price: "Freemium / $$", avis: "Excellent", description: "Voix IA ultra r\u00e9alistes.", category: "design" },
  { name: "Typeform", domain: "typeform.com", price: "Freemium / $$", avis: "Bon", description: "Formulaires interactifs. UX premium.", category: "design" },

  // Dev & Infrastructure (7)
  { name: "Vercel", domain: "vercel.com", price: "Freemium / $$", avis: "Incontournable", description: "D\u00e9ploiement frontend. Next.js natif.", category: "dev" },
  { name: "Supabase", domain: "supabase.com", price: "Freemium / $$", avis: "Excellent", description: "Backend-as-a-Service. PostgreSQL + auth + storage.", category: "dev" },
  { name: "GitHub", domain: "github.com", price: "Freemium / $$", avis: "Incontournable", description: "H\u00e9bergement code. Standard.", category: "dev" },
  { name: "Resend", domain: "resend.com", price: "Freemium / $$", avis: "Bon", description: "API email pour les devs. Par le cr\u00e9ateur de React Email.", category: "dev" },
  { name: "Stripe", domain: "stripe.com", price: "Pay-per-use", avis: "Incontournable", description: "Paiements en ligne. API developer-first.", category: "dev" },
  { name: "Railway", domain: "railway.app", price: "Freemium / $$", avis: "Bon", description: "D\u00e9ploiement infra simplifi\u00e9.", category: "dev" },
  { name: "Neon", domain: "neon.tech", price: "Freemium / $$", avis: "A tester", description: "PostgreSQL serverless.", category: "dev" },

  // CRM (ajouts)
  { name: "GetCargo", domain: "getcargo.ai", price: "$$$", avis: "A tester", description: "Orchestration revenue IA. Alternative Clay avec agents multi-sources. YC S23.", category: "crm" },
  { name: "Breakcold", domain: "breakcold.com", price: "$$", avis: "A tester", description: "Social selling CRM. Pipeline + LinkedIn + Twitter en un seul outil.", category: "crm" },

  // Enrichissement & Data (ajouts)
  { name: "Datagma", domain: "datagma.com", price: "$$", avis: "Bon", description: "Enrichissement B2B temps r\u00e9el. Emails, t\u00e9l\u00e9phones, donn\u00e9es entreprise.", category: "enrichissement" },
  { name: "Surfe", domain: "surfe.com", price: "Freemium / $$", avis: "Bon", description: "Extension LinkedIn qui sync avec HubSpot/Salesforce/Pipedrive en 1 clic.", category: "enrichissement" },
  { name: "Hublead", domain: "hublead.io", price: "$$", avis: "Bon", description: "Connecter LinkedIn \u00e0 HubSpot. Import, enrichissement, sync.", category: "enrichissement" },
  { name: "UserGems", domain: "usergems.com", price: "$$$", avis: "Excellent", description: "Track job changes de vos champions. Signal selling.", category: "enrichissement" },
  { name: "BuiltWith", domain: "builtwith.com", price: "$$ / $$$", avis: "Bon", description: "D\u00e9tecter la stack technologique de n\u2019importe quel site.", category: "enrichissement" },

  // Outbound & Cold Email (ajouts)
  { name: "Smartlead", domain: "smartlead.ai", price: "$$", avis: "Bon", description: "Cold email \u00e0 volume. Bo\u00eetes email illimit\u00e9es. Alternative Instantly.", category: "outbound" },
  { name: "Outplay", domain: "outplay.com", price: "$$", avis: "Bon", description: "Sales engagement multicanal. Alternative Outreach abordable.", category: "outbound" },
  { name: "Sendspark", domain: "sendspark.com", price: "$$", avis: "A tester", description: "Vid\u00e9o prospection personnalis\u00e9e. Alternative Loom pour l\u2019outbound.", category: "outbound" },
  { name: "Vidyard", domain: "vidyard.com", price: "Freemium / $$", avis: "Bon", description: "Vid\u00e9o selling. Tracking des vues.", category: "outbound" },

  // AI SDR & Agents (nouvelle cat\u00e9gorie)
  { name: "11x", domain: "11x.ai", price: "$$$$", avis: "A tester", description: "AI SDR autonome. Alice prospecte, qualifie et book des meetings.", category: "ai-sdr" },
  { name: "AiSDR", domain: "aisdr.com", price: "$$$", avis: "A tester", description: "SDR IA qui \u00e9crit et envoie des emails personnalis\u00e9s automatiquement.", category: "ai-sdr" },
  { name: "Artisan", domain: "artisan.co", price: "$$$", avis: "A tester", description: "Ava, la collaboratrice IA qui g\u00e8re tout l\u2019outbound.", category: "ai-sdr" },
  { name: "Jason AI", domain: "jason.ai", price: "$$", avis: "A tester", description: "Assistant IA pour la prospection par Reply.io.", category: "ai-sdr" },
  { name: "Regie.ai", domain: "regie.ai", price: "$$$", avis: "Bon", description: "Plateforme de prospection IA g\u00e9n\u00e9rative.", category: "ai-sdr" },
  { name: "Amplemarket", domain: "amplemarket.com", price: "$$$", avis: "Bon", description: "Full-stack IA : base B2B massive + intent + warm-up int\u00e9gr\u00e9.", category: "ai-sdr" },
  { name: "Coldreach AI", domain: "coldreach.ai", price: "$$$", avis: "A tester", description: "Outbound research-first, taux de r\u00e9ponse 10x l\u2019industrie.", category: "ai-sdr" },
  { name: "Salesforge", domain: "salesforge.ai", price: "$$", avis: "A tester", description: "Outbound IA : writing + infra email + sequencing en un lieu.", category: "ai-sdr" },
  { name: "Persana AI", domain: "persana.ai", price: "$$", avis: "A tester", description: "Automation prospection B2B avec 700M contacts, 75+ sources data.", category: "ai-sdr" },

  // Automatisation (ajouts)
  { name: "Activepieces", domain: "activepieces.com", price: "Freemium", avis: "A tester", description: "Alternative Make open source. Self-hosted possible.", category: "automatisation" },

  // IA & LLM (ajouts)
  { name: "Lovable", domain: "lovable.dev", price: "Freemium / $$", avis: "A tester", description: "G\u00e9n\u00e9rateur d\u2019apps full-stack par IA. Alternative v0.", category: "ia" },
  { name: "Bolt", domain: "bolt.new", price: "Freemium / $$", avis: "A tester", description: "Codage IA dans le navigateur. Full-stack instant.", category: "ia" },
  { name: "Windsurf", domain: "codeium.com", price: "Freemium / $$", avis: "Bon", description: "IDE IA. Alternative Cursor.", category: "ia" },
  { name: "Groq", domain: "groq.com", price: "Freemium", avis: "A tester", description: "Inf\u00e9rence LLM ultra rapide. Hardware custom.", category: "ia" },
  { name: "Writer", domain: "writer.com", price: "$$$", avis: "Bon", description: "IA enterprise pour le contenu. Gouvernance et brand voice.", category: "ia" },
  { name: "Writesonic", domain: "writesonic.com", price: "Freemium / $$", avis: "Bon", description: "IA marketing. Blog, ads, landing pages.", category: "ia" },

  // Sales Intelligence & Intent (nouvelle cat\u00e9gorie)
  { name: "Warmly", domain: "warmly.ai", price: "$$$", avis: "Excellent", description: "Identifie les visiteurs de votre site en temps r\u00e9el. Signal selling.", category: "sales-intelligence" },
  { name: "Koala", domain: "getkoala.com", price: "Freemium / $$", avis: "A tester", description: "Intent signals + visitor identification. PLG-focused.", category: "sales-intelligence" },
  { name: "RB2B", domain: "rb2b.com", price: "Freemium", avis: "A tester", description: "Identifie les visiteurs B2B de votre site. Gratuit pour commencer.", category: "sales-intelligence" },
  { name: "Common Room", domain: "commonroom.io", price: "$$$", avis: "Bon", description: "Intelligence communautaire. Signals sociaux + produit.", category: "sales-intelligence" },
  { name: "6sense", domain: "6sense.com", price: "$$$$", avis: "Excellent", description: "ABM + intent data enterprise. La r\u00e9f\u00e9rence.", category: "sales-intelligence" },
  { name: "Demandbase", domain: "demandbase.com", price: "$$$$", avis: "Bon", description: "ABM platform. Intent + advertising + analytics.", category: "sales-intelligence" },
  { name: "Bombora", domain: "bombora.com", price: "$$$", avis: "Bon", description: "Intent data B2B. Coop\u00e9rative de donn\u00e9es.", category: "sales-intelligence" },
  { name: "Keyplay", domain: "keyplay.io", price: "$$$", avis: "Bon", description: "Scoring ICP avec IA pour prioriser comptes ABM.", category: "sales-intelligence" },
  { name: "Factors.ai", domain: "factors.ai", price: "$$$", avis: "Bon", description: "Attribution marketing + activation ABM signal-driven.", category: "sales-intelligence" },

  // Customer Success (nouvelle cat\u00e9gorie)
  { name: "Vitally", domain: "vitally.io", price: "$$$", avis: "Excellent", description: "Customer success platform. Health scoring, playbooks, analytics.", category: "customer-success" },
  { name: "ChurnZero", domain: "churnzero.com", price: "$$$", avis: "Bon", description: "Pr\u00e9vention du churn. Usage tracking, automation.", category: "customer-success" },
  { name: "Gainsight", domain: "gainsight.com", price: "$$$$", avis: "Excellent", description: "La r\u00e9f\u00e9rence enterprise customer success.", category: "customer-success" },
  { name: "Planhat", domain: "planhat.com", price: "$$$", avis: "Bon", description: "Customer platform. Revenue, usage, health.", category: "customer-success" },
  { name: "Custify", domain: "custify.com", price: "$$", avis: "Bon", description: "Alternative l\u00e9g\u00e8re \u00e0 Gainsight pour PME SaaS.", category: "customer-success" },
  { name: "Totango", domain: "totango.com", price: "$$$", avis: "Bon", description: "CS + Catalyst + Unison AI plateforme unifi\u00e9e.", category: "customer-success" },

  // Proposals & Contracts (nouvelle cat\u00e9gorie)
  { name: "PandaDoc", domain: "pandadoc.com", price: "Freemium / $$", avis: "Excellent", description: "Propositions, devis et contrats. E-signature int\u00e9gr\u00e9e.", category: "proposals" },
  { name: "Qwilr", domain: "qwilr.com", price: "$$", avis: "Bon", description: "Propositions commerciales interactives et trackables.", category: "proposals" },
  { name: "GetAccept", domain: "getaccept.com", price: "$$", avis: "Bon", description: "Digital sales room. Propositions + e-sign + vid\u00e9o.", category: "proposals" },
  { name: "DocuSign", domain: "docusign.com", price: "$$ / $$$", avis: "Incontournable", description: "Signature \u00e9lectronique. Le standard mondial.", category: "proposals" },
  { name: "Trumpet", domain: "trumpet.com", price: "$$", avis: "A tester", description: "Digital sales rooms. #1 G2 2026. En forte croissance.", category: "proposals" },
  { name: "Proposify", domain: "proposify.com", price: "$$", avis: "Bon", description: "Gestion propositions avec templates et analytics.", category: "proposals" },
  { name: "DealHub", domain: "dealhub.io", price: "$$$", avis: "Bon", description: "CPQ + CLM + billing unifi\u00e9. Leader Gartner 2025.", category: "proposals" },
  { name: "Dock", domain: "dock.us", price: "$$$", avis: "Bon", description: "Espaces client partag\u00e9s pour g\u00e9rer le cycle de vente.", category: "proposals" },

  // LinkedIn Tools (nouvelle cat\u00e9gorie)
  { name: "Taplio", domain: "taplio.com", price: "$$", avis: "Bon", description: "Outil LinkedIn pour cr\u00e9er, programmer et analyser ses posts.", category: "linkedin" },
  { name: "Shield", domain: "shieldapp.ai", price: "$$", avis: "Bon", description: "Analytics LinkedIn. Mesurer la performance de vos posts.", category: "linkedin" },
  { name: "Aware", domain: "useaware.co", price: "$$", avis: "A tester", description: "LinkedIn analytics pour les \u00e9quipes. Employee advocacy.", category: "linkedin" },
  { name: "Evaboot", domain: "evaboot.com", price: "$$", avis: "Bon", description: "Scraping LinkedIn Sales Navigator + nettoyage donn\u00e9es.", category: "linkedin" },
  { name: "Expandi", domain: "expandi.io", price: "$$", avis: "Bon", description: "Automatisation LinkedIn cloud-based s\u00e9curis\u00e9e.", category: "linkedin" },
  { name: "La Growth Machine", domain: "lagrowthmachine.com", price: "$$ / $$$", avis: "Bon", description: "Prospection multicanal : LinkedIn + email + X + calls.", category: "linkedin" },

  // Email Deliverability (nouvelle cat\u00e9gorie)
  { name: "Mailreach", domain: "mailreach.co", price: "$$", avis: "Excellent", description: "Warm-up email. Int\u00e9gr\u00e9 dans Lemlist. Le meilleur du march\u00e9.", category: "deliverability" },
  { name: "GlockApps", domain: "glockapps.com", price: "$$", avis: "Bon", description: "Test de d\u00e9livrabilit\u00e9. Inbox placement testing.", category: "deliverability" },
  { name: "Mail-tester", domain: "mail-tester.com", price: "Gratuit", avis: "Bon", description: "Testez votre score de spam gratuitement.", category: "deliverability" },
  { name: "Folderly", domain: "folderly.com", price: "$$", avis: "A tester", description: "D\u00e9livrabilit\u00e9 email IA.", category: "deliverability" },
  { name: "Mailtrap", domain: "mailtrap.io", price: "Freemium / $$", avis: "Bon", description: "Test email pr\u00e9-envoi en environnement sandbox.", category: "deliverability" },

  // Conversational & Chatbots (nouvelle cat\u00e9gorie)
  { name: "Intercom", domain: "intercom.com", price: "$$ / $$$", avis: "Excellent", description: "Chat, bots, help center. Fin AI int\u00e9gr\u00e9.", category: "conversational" },
  { name: "Qualified", domain: "qualified.com", price: "$$$$", avis: "Bon", description: "Pipeline generation via chat. ABM conversationnel.", category: "conversational" },
  { name: "Drift", domain: "salesloft.com", price: "$$$", avis: "Bon", description: "Conversational marketing. Rachet\u00e9 par Salesloft.", category: "conversational" },
  { name: "Crisp", domain: "crisp.chat", price: "Freemium / $$", avis: "Bon", description: "Chat, chatbot, CRM l\u00e9ger. Fran\u00e7ais.", category: "conversational" },
  { name: "HubSpot Chatbot", domain: "hubspot.com", price: "Freemium", avis: "Bon", description: "Chatbot natif HubSpot. Gratuit avec le CRM.", category: "conversational" },
  { name: "Tidio", domain: "tidio.com", price: "$$", avis: "Bon", description: "Chatbot IA pour PME. Version Drift abordable.", category: "conversational" },

  // Data Infrastructure (ajouts Dev)
  { name: "Fivetran", domain: "fivetran.com", price: "$$$", avis: "Excellent", description: "ELT automatis\u00e9. 300+ connecteurs.", category: "dev" },
  { name: "Hightouch", domain: "hightouch.com", price: "$$ / $$$", avis: "Bon", description: "Reverse ETL. Sync donn\u00e9es vers vos outils business.", category: "dev" },
  { name: "Census", domain: "census.app", price: "$$ / $$$", avis: "Bon", description: "Reverse ETL. Data activation. Rachet\u00e9 par Fivetran.", category: "dev" },
  { name: "dbt", domain: "getdbt.com", price: "Freemium / $$", avis: "Excellent", description: "Transformation de donn\u00e9es. Standard data engineering.", category: "dev" },
  { name: "Snowflake", domain: "snowflake.com", price: "$$$", avis: "Excellent", description: "Data warehouse cloud. Le standard enterprise.", category: "dev" },
  { name: "Airbyte", domain: "airbyte.com", price: "Freemium", avis: "Bon", description: "600+ connecteurs. Framework open-source pour workflows data.", category: "dev" },
];

/* ─── HELPERS ─── */
function getCategoryColor(key: string): string {
  return categories.find((c) => c.key === key)?.color ?? "#111";
}

function getCategoryLabel(key: string): string {
  return categories.find((c) => c.key === key)?.label ?? key;
}

function getAvisColor(avis: string): string {
  switch (avis) {
    case "Incontournable": return "#4B5EFC";
    case "Excellent": return "#22C55E";
    case "Bon": return "#666";
    case "A tester": return "#D4A27F";
    case "Niche": return "#6C5CE7";
    default: return "#666";
  }
}

function getPriceBg(price: string): string {
  if (price === "Gratuit") return "#ECFDF5";
  if (price.includes("$$$$")) return "#FEF2F2";
  if (price.includes("$$$")) return "#FFF7ED";
  if (price.includes("$$")) return "#F0F9FF";
  return "#F5F3FF";
}

function getPriceText(price: string): string {
  if (price === "Gratuit") return "#047857";
  if (price.includes("$$$$")) return "#B91C1C";
  if (price.includes("$$$")) return "#C2410C";
  if (price.includes("$$")) return "#0369A1";
  return "#6D28D9";
}

/* ─── RECOMMENDED STACKS ─── */
const stacks = [
  {
    size: "Startup (1-10 pers.)",
    tools: "HubSpot Free + Lemlist + Clay + Make + Notion + Slack + Claude",
    budget: "~200\u20ac/mois",
  },
  {
    size: "Scale-up (10-50 pers.)",
    tools: "HubSpot Pro + Lemlist + Clay + Make + Notion + Slack + Claap + Claude + Dropcontact",
    budget: "~1 500\u20ac/mois",
  },
  {
    size: "Mid-market (50-200 pers.)",
    tools: "HubSpot Enterprise + Clay + Make + Notion + Slack + Claap + Gong + Segment + Claude",
    budget: "~5 000\u20ac/mois",
  },
  {
    size: "Enterprise (200+ pers.)",
    tools: "Salesforce + Outreach + ZoomInfo + Workato + Gong + Segment + Datadog + Claude",
    budget: "~15 000\u20ac+/mois",
  },
];

/* ─── JSON-LD ─── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Les meilleurs outils RevOps, CRM, IA et Sales en 2026",
  description: "Annuaire complet de 170+ outils pour les \u00e9quipes commerciales et marketing B2B.",
  numberOfItems: tools.length,
  itemListElement: tools.map((tool, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: tool.name,
    url: `https://${tool.domain}`,
    description: tool.description,
  })),
};

/* ─── PAGE ─── */
export default function OutilsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = tools.filter((t) => {
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === "all" || t.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="pt-[80px] md:pt-[100px] pb-20">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-[13px] text-[#999]">
            <Link href="/" className="hover:text-[#111] transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-[#111]">Outils</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pb-12">
          <Badge>Annuaire 2026</Badge>
          <h1 className="mt-4 text-[36px] sm:text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-[#111]">
            Les meilleurs outils
            <br />
            <span className="text-[#4B5EFC]">RevOps, CRM, IA et Sales</span>
          </h1>
          <p className="mt-5 text-[17px] md:text-[19px] text-[#555] max-w-2xl leading-relaxed">
            {tools.length}+ outils not{"\u00e9"}s et class{"\u00e9"}s pour les {"\u00e9"}quipes commerciales
            et marketing B2B. CRM, enrichissement, outbound, automatisation, IA,
            productivit{"\u00e9"}, analytics et plus.
          </p>
        </section>

        {/* Search + Filters */}
        <section className="max-w-6xl mx-auto px-6 pb-8">
          {/* Search bar */}
          <div className="relative mb-6">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#999]"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Rechercher un outil..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#E5E5E5] bg-white text-[15px] text-[#111] placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-[#4B5EFC]/20 focus:border-[#4B5EFC] transition-all"
            />
          </div>

          {/* Category filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
            {categories.map((cat) => {
              const count =
                cat.key === "all"
                  ? tools.length
                  : tools.filter((t) => t.category === cat.key).length;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className="flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-all whitespace-nowrap"
                  style={{
                    backgroundColor:
                      activeCategory === cat.key ? cat.color : "#F5F5F5",
                    color: activeCategory === cat.key ? "#fff" : "#555",
                  }}
                >
                  {cat.label}
                  <span
                    className="text-[11px] opacity-70 ml-0.5"
                    style={{
                      color: activeCategory === cat.key ? "#fff" : "#999",
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Results count */}
        <section className="max-w-6xl mx-auto px-6 pb-4">
          <p className="text-[14px] text-[#999]">
            {filtered.length} outil{filtered.length > 1 ? "s" : ""}{" "}
            {activeCategory !== "all" && (
              <>
                dans{" "}
                <span style={{ color: getCategoryColor(activeCategory) }}>
                  {getCategoryLabel(activeCategory)}
                </span>
              </>
            )}
            {search && (
              <>
                {" "}
                pour &laquo;&nbsp;{search}&nbsp;&raquo;
              </>
            )}
          </p>
        </section>

        {/* Tools Grid */}
        <section className="max-w-6xl mx-auto px-6 pb-16">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[17px] text-[#999]">
                Aucun outil ne correspond {"\u00e0"} votre recherche.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-[15px] text-[#4B5EFC] hover:underline"
              >
                R{"\u00e9"}initialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((tool) => (
                <a
                  key={tool.name + tool.category}
                  href={`https://${tool.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col gap-3 p-5 rounded-2xl border border-[#E5E5E5] bg-white hover:border-[#D0D0D0] hover:shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-200"
                >
                  {/* Ceres badge */}
                  {tool.ceres && (
                    <span className="absolute top-4 right-4 flex items-center gap-1.5 text-[11px] font-medium text-[#FF7A59]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59]" />
                      Utilis{"\u00e9"} par Ceres
                    </span>
                  )}

                  {/* Header row: favicon + name */}
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${tool.domain}&sz=32`}
                      alt={tool.name}
                      width={28}
                      height={28}
                      className="rounded-md"
                      loading="lazy"
                    />
                    <h3 className="text-[16px] font-semibold text-[#111] group-hover:text-[#4B5EFC] transition-colors">
                      {tool.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[14px] text-[#555] leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>

                  {/* Tags row */}
                  <div className="flex items-center gap-2 flex-wrap mt-auto pt-1">
                    {/* Category */}
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium"
                      style={{
                        backgroundColor: getCategoryColor(tool.category) + "12",
                        color: getCategoryColor(tool.category),
                      }}
                    >
                      {getCategoryLabel(tool.category)}
                    </span>

                    {/* Price */}
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-medium"
                      style={{
                        backgroundColor: getPriceBg(tool.price),
                        color: getPriceText(tool.price),
                      }}
                    >
                      {tool.price}
                    </span>

                    {/* Avis */}
                    <span
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-semibold"
                      style={{
                        backgroundColor: getAvisColor(tool.avis) + "14",
                        color: getAvisColor(tool.avis),
                      }}
                    >
                      {tool.avis}
                    </span>
                  </div>

                  {/* External link icon */}
                  <svg
                    className="absolute bottom-5 right-5 text-[#CCC] group-hover:text-[#4B5EFC] transition-colors"
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </section>

        {/* Recommended Stack Section */}
        <section className="bg-[#111] py-20">
          <div className="max-w-6xl mx-auto px-6">
            <Badge>La stack Ceres</Badge>
            <h2 className="mt-4 text-[32px] sm:text-[40px] font-bold text-white leading-tight">
              La stack que Ceres recommande
            </h2>
            <p className="mt-3 text-[17px] text-[#999] max-w-xl">
              Notre s{"\u00e9"}lection des meilleurs outils par taille d&apos;entreprise.
              Test{"\u00e9"}s et approuv{"\u00e9"}s par notre {"\u00e9"}quipe.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {stacks.map((s) => (
                <div
                  key={s.size}
                  className="p-6 rounded-2xl border border-[#333] bg-[#1A1A1A]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-[18px] font-semibold text-white">
                      {s.size}
                    </h3>
                    <span className="text-[14px] font-medium text-[#4B5EFC]">
                      {s.budget}
                    </span>
                  </div>
                  <p className="text-[14px] text-[#BBB] leading-relaxed">
                    {s.tools}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-[17px] text-[#999] mb-6">
                Besoin d&apos;aide pour choisir et int{"\u00e9"}grer vos outils ?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#4B5EFC] text-white text-[15px] font-medium hover:bg-[#3A4DEB] transition-colors"
              >
                Discuter avec un expert Ceres
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
