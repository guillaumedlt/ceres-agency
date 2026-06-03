import { MetadataRoute } from "next";
import { terms as glossaryTerms } from "./glossaire/terms-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ceres.agency";
  const now = new Date();
  // Date buckets : evite tout-a-la-meme-seconde (deprecie par Google)
  const recent = new Date("2026-05-26"); // pages livrees ce mois
  const fresh = new Date("2026-04-13"); // contenu retravaille recemment
  const stable = new Date("2026-02-15"); // pages anciennes stabilisees
  const legal = new Date("2025-09-01"); // pages legales rarement modifiees

  // Blog slugs
  const blogSlugs = [
    "emelia-test-outil-cold-emailing",
    "tracking-conversions-hubspot-guide-complet",
    "comparatif-outils-generation-leads-enrichissement",
    "account-based-marketing-guide",
    "integration-hubspot-whatsapp",
    "hublead-linkedin-hubspot",
    "marketing-automation-7-workflows-hubspot",
    "meilleures-pratiques-sequences-hubspot",
    "gerer-mrr-revenu-recurrent-hubspot",
    "9-actions-commerciales-automatiser-hubspot",
    "skag-single-keyword-ad-group-google-ads",
    "cimetieres-startups-modeles-saas-b2b",
    "marketing-saas-b2b-15-questions-strategiques",
    "tracker-soumissions-formulaire-hubspot-google-analytics-google-tag-manager",
    "hubspot-cms-fondamentaux-site-internet-performant",
    "hubspot-vs-pipedrive-comparatif-prix-fonctionnalites",
    "integration-hubspot-calendly",
    "tofu-mofu-bofu-strategie-inbound",
    "cest-quoi-acquisition-marketing",
    "crm-pme-2026",
    "meilleur-crm-b2b-france",
    "hubspot-tarifs-prix-2026",
    "hubspot-vs-salesforce-comparatif",
    "lead-scoring-guide-complet",
    "kpi-commerciaux-indicateurs-vente",
    "ia-processus-commercial-vente-b2b",
    "migration-crm-guide-complet",
    "aligner-marketing-sales-revops",
    "data-quality-crm-audit-nettoyage",
    "onboarding-hubspot-30-premiers-jours",
    "claude-vs-chatgpt-equipes-commerciales",
    "lemlist-test-complet-outil-prospection",
    "top-agences-revops-france",
    "revops-manager-fiche-poste-salaire-competences",
    "revops-vs-sales-ops-marketing-ops",
    "stack-technologique-revops-2026",
    "audit-revops-checklist-complete",
    "revops-10-quick-wins-30-jours",
    "forecasting-commercial-methodes-outils",
    "sla-marketing-sales-template",
    "revops-startups-par-ou-commencer",
    "metriques-revops-indicateurs-performance",
    "structurer-equipe-revops",
    "geo-optimiser-site-llm",
    "sellsy-vs-hubspot",
    "brevo-vs-hubspot",
    "facturation-electronique-crm-2026",
    "intent-data-signaux-achat-b2b",
    "sales-enablement-guide",
    "customer-success-revops",
    "crm-ia-intelligence-artificielle",
    "marketing-ops-definition",
    "zapier-vs-make-vs-n8n-revops",
    "inbound-marketing-b2b-revops",
    "onboarding-client-b2b-churn",
    "ia-scoring-predictif-lead-scoring",
    "revops-facturation-crm-erp",
    "apparaitre-reponses-claude-chatgpt",
    "hubspot-ia-fonctionnalites",
    "cold-email-b2b-templates",
    "hubspot-vs-dynamics-365-comparatif",
    "hubspot-vs-zoho-comparatif",
    "clay-enrichissement-donnees-b2b-guide",
    "process-data-ia-ordre-revops",
    "mcp-connecter-claude-crm-outils",
    "claude-code-equipes-non-techniques",
    "agents-ia-deployes-clients-b2b",
    "data-cleaning-checklist-avant-ia",
    "claude-reporting-automatise-revops",
    "metriques-ia-revops-kpi",
    "ia-remplace-quoi-equipe-commerciale",
    "prompt-engineering-equipes-commerciales",
    "roi-ia-b2b-calculer",
    "ia-customer-success-detection-churn",
    "crm-startup-quel-choisir",
    "automatiser-prospection-b2b-ia",
    "hubspot-gratuit-limites-quand-passer-pro",
    "pipeline-commercial-structurer-hubspot",
    "ia-redaction-contenu-marketing-b2b",
    "donnees-crm-rgpd-conformite",
    "workflows-hubspot-indispensables-b2b",
    "externaliser-revops-avantages-inconvenients",
    "ia-analyse-calls-commerciaux",
    "segmentation-crm-b2b-methode",
    "dashboard-commercial-hubspot-guide",
    "onboarding-commercial-reduire-ramp-up",
    "enrichissement-leads-b2b-automatique",
    "attribution-marketing-multi-touch",
    "ia-prevision-ventes-forecasting",
    "connecter-crm-erp-integration",
    "nrr-net-revenue-retention-guide",
    "sequence-email-prospection-b2b",
    "ia-generation-leads-b2b",
    "crm-adoption-equipe-commerciale",
    "ia-email-personnalise-scale",
    "gouvernance-donnees-crm-guide",
    "revops-saas-metriques-essentielles",
    "ia-qualification-leads-automatique",
    "migration-crm-sans-perdre-donnees",
    "ia-b2b-par-ou-commencer",
    "agence-ia-monaco-quanta",
    "tutoriel-hubspot-mcp-server-setup",
    "top-mcp-servers-revops-2026",
    "mcp-vs-zapier-vs-make-revops",
    "recruter-revops-manager-6-etapes",
    "anthropic-stainless-acquisition-revops",
    "roi-revops-calculer-defendre-board",
    "forecast-accuracy-35-vers-88-framework",
    "gtm-motion-plg-sales-led-hybrid",
    "revenue-waterfall-scale-up",
    "erreur-1-revops-outil-avant-process",
    "agentforce-vs-breeze-vs-attio-ai",
    "revops-externalise-vs-internalise-cro",
    "pipeline-hygiene-12-automations-crm",
    "meddic-vs-meddpicc-vs-bant-qualification",
    "customer-success-ops-nouvelle-frontiere",
  ];

  // Case study slugs
  const casClientsSlugs = [
    "beedeez", "totalenergies", "alan", "kameleoon", "dougs",
    "hipay", "ringover", "elax-energie", "edenred", "tennaxia",
    "opendatasoft", "societe-de-gestion", "iroko",
  ];

  return [
    // Home
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },

    // Services
    { url: `${base}/audit-revops`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/revops-part-time`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agence-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agents-ia`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Solutions par taille
    { url: `${base}/revops-startup`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/revops-pme`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/revops-scaleup`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/revops-grand-groupe`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Pages cles
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cas-clients`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Ressources
    { url: `${base}/revops`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/guides`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/glossaire`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Guides
    { url: `${base}/guide-revops-ultime`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guide-revops-ultime/contenu`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/guide-ia-commercial`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guide-ia-commercial/contenu`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/guide-outbound-b2b`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guide-outbound-b2b/contenu`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/guide-migration-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guide-migration-crm/contenu`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/guide-data-quality-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guide-data-quality-crm/contenu`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/guide-claude-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guide-claude-marketing/contenu`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/guide-mcp-revops`, lastModified: recent, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guide-mcp-revops/contenu`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/guide-hubspot-ultime`, lastModified: recent, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/guide-hubspot-ultime/contenu`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },

    // SEO pages
    { url: `${base}/agence-hubspot-paris`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/consultant-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/migration-salesforce-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/migration-dynamics-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/consultant-revops`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/integration-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/audit-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // SEO pages - Prio 1
    { url: `${base}/agence-revops`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agence-revops-paris`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/crm-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/onboarding-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    // SEO pages - Prio 2
    { url: `${base}/hubspot-vs-salesforce`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/migration-pipedrive-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/migration-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/automatisation-commerciale`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/lead-scoring-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/agence-attio`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agence-hubspot-lyon`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/agence-hubspot-bordeaux`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/agence-hubspot-nantes`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/agence-hubspot-marseille`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/agence-hubspot-toulouse`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // SEO pages - Prio 3
    { url: `${base}/hubspot-marketing-hub`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hubspot-sales-hub`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hubspot-operations-hub`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/formation-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/agent-ia-commercial`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/externaliser-revops`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Methode & Fondation Data
    { url: `${base}/methode`, lastModified: recent, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/fondation-data`, lastModified: stable, changeFrequency: "monthly", priority: 0.9 },

    // Tarifs
    { url: `${base}/tarifs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Sectorielles
    { url: `${base}/revops-saas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/revops-fintech`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/crm-immobilier`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/revops-healthtech`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/revops-industrie`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Comparaisons
    { url: `${base}/hubspot-vs-monday-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hubspot-vs-folk`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hubspot-vs-axonaut`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hubspot-vs-notion-crm`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hubspot-vs-attio`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/hubspot-vs-pipedrive`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/attio-vs-pipedrive`, lastModified: recent, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/salesforce-vs-attio`, lastModified: recent, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/salesforce-vs-pipedrive`, lastModified: recent, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/claude-vs-chatgpt-vs-gemini-b2b`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Guides choix prestataires
    { url: `${base}/comment-choisir-agence-revops`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/comment-choisir-consultant-revops`, lastModified: stable, changeFrequency: "monthly", priority: 0.8 },

    // Fiches metier
    { url: `${base}/metier/sales-ops-manager`, lastModified: recent, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/metier/crm-manager`, lastModified: recent, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/metier/revops-director`, lastModified: recent, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/metier/cro-chief-revenue-officer`, lastModified: recent, changeFrequency: "monthly", priority: 0.7 },

    // Framework et calculateurs
    { url: `${base}/framework-score-revops`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/outils/calculateur-cac-payback`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/outils/calculateur-ltv-cac`, lastModified: recent, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/outils/calculateur-pipeline-coverage`, lastModified: recent, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/outils/quiz-maturite-revops`, lastModified: recent, changeFrequency: "monthly", priority: 0.9 },

    // Claude pages
    { url: `${base}/agence-claude`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/formation-claude`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/deployer-claude-entreprise`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/claude-business`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Outils directory
    { url: `${base}/outils`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Legal
    { url: `${base}/mentions-legales`, lastModified: legal, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/politique-confidentialite`, lastModified: legal, changeFrequency: "yearly", priority: 0.3 },

    // Blog articles
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: slug.includes("hubspot-tarifs") || slug.includes("top-agences") || slug.includes("audit-revops-checklist") ? 0.8 : 0.6,
    })),

    // Glossaire (pages individuelles par terme)
    ...glossaryTerms.map((t) => ({
      url: `${base}/glossaire/${t.slug}`,
      lastModified: recent,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),

    // Cas clients
    ...casClientsSlugs.map((slug) => ({
      url: `${base}/cas-clients/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
