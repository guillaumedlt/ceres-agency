import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ceres.agency";
  const now = new Date();

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
    // SEO pages - Prio 3
    { url: `${base}/hubspot-marketing-hub`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hubspot-sales-hub`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/hubspot-operations-hub`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/formation-hubspot`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/agent-ia-commercial`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/externaliser-revops`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Legal
    { url: `${base}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/politique-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },

    // Blog articles
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: slug.includes("hubspot-tarifs") || slug.includes("top-agences") || slug.includes("audit-revops-checklist") ? 0.8 : 0.6,
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
