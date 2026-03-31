/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.google.com" },
    ],
  },
  async redirects() {
    return [
      // Existing
      { source: "/tools-stack", destination: "/outils", permanent: true },
      { source: "/guide-revops", destination: "/revops", permanent: true },
      { source: "/outils/attio", destination: "/agence-attio", permanent: true },

      // Old blog articles → new equivalents
      { source: "/blog/aircall-solution-telephonie-hubspot-que-choisir", destination: "/blog/integration-hubspot-whatsapp", permanent: true },
      { source: "/blog/structurer-les-commissions-entre-les-equipes-commerciales-et-marketing", destination: "/blog/sla-marketing-sales-template", permanent: true },
      { source: "/blog/tracking-des-conversions-avec-hubspot-le-guide-complet-pour-bien-suivre-vos-conversions-dans-hubspot-automatiquement", destination: "/blog/tracking-conversions-hubspot-guide-complet", permanent: true },
      { source: "/blog/nps-avec-hubspot", destination: "/blog/customer-success-revops", permanent: true },
      { source: "/blog/optimiser-revops-croissance-durable", destination: "/blog/revops-10-quick-wins-30-jours", permanent: true },
      { source: "/blog/migration-sellsy-vers-hubspot", destination: "/blog/sellsy-vs-hubspot", permanent: true },
      { source: "/blog/marketing-automation-les-7-workflows-incontournables-a-mettre-en-place-sur-hubspot", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },
      { source: "/blog/account-based-marketing", destination: "/blog/account-based-marketing-guide", permanent: true },
      { source: "/blog/comparatif-outils-generation-lead-enrichissement-donnees", destination: "/blog/comparatif-outils-generation-leads-enrichissement", permanent: true },
      { source: "/blog/guide-hubspot-2025", destination: "/blog/hubspot-tarifs-prix-2026", permanent: true },
      { source: "/blog/migration-microsoft-dynamics-vers-hubspot", destination: "/migration-dynamics-hubspot", permanent: true },
      { source: "/blog/migration-monday-vers-hubspot", destination: "/blog/migration-crm-guide-complet", permanent: true },
      { source: "/blog/introduction-au-net-promoter-score-nps", destination: "/blog/customer-success-revops", permanent: true },
      { source: "/blog/developper-connecteur-maison-api-hubspot", destination: "/integration-hubspot", permanent: true },
      { source: "/blog/test-campagne-google-performance-max-b2b", destination: "/blog", permanent: true },
      { source: "/blog/hubspot-x-zoom-lintegration-quil-vous-faut-pour-les-webinaires-et-videoconferences", destination: "/blog/integration-hubspot-calendly", permanent: true },
      { source: "/blog/7-piliers-organisation-revops-performante", destination: "/blog/structurer-equipe-revops", permanent: true },
      { source: "/blog/9-actions-commerciales-a-automatiser-avec-hubspot", destination: "/blog/9-actions-commerciales-automatiser-hubspot", permanent: true },
      { source: "/blog/comment-gerer-votre-revenu-recurrent-mrr-dans-hubspot", destination: "/blog/gerer-mrr-revenu-recurrent-hubspot", permanent: true },
      { source: "/blog/cimetieres-des-startups-modeles-saas-b2b", destination: "/blog/cimetieres-startups-modeles-saas-b2b", permanent: true },
      { source: "/blog/comment-mesurer-le-roi-de-votre-strategie-revops", destination: "/blog/metriques-revops-indicateurs-performance", permanent: true },
      { source: "/blog/comment-calculer-roi-crm", destination: "/blog/metriques-revops-indicateurs-performance", permanent: true },
      { source: "/blog/optimisez-votre-workflow-de-nurturing-hubspot-avec-une-structure-avanc%C3%A9e", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },
      { source: "/blog/comment-implanter-le-lead-scoring-guide-hubspot", destination: "/blog/lead-scoring-guide-complet", permanent: true },
      { source: "/blog/10-astuces-incontournables-pour-optimiser-les-workflows-de-marketing-automation-sur-hubspot", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },
      { source: "/blog/comment-peut-on-mettre-en-place-une-structure-revops-et-pourquoi-est-il-important-de-sy-interesser", destination: "/revops", permanent: true },
      { source: "/blog/implementez-votre-modele-de-lead-scoring-sur-hubspot", destination: "/blog/lead-scoring-guide-complet", permanent: true },
      { source: "/blog/erreurs-courantes-workflow-hubspot", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },
      { source: "/blog/configurer-aircall-avec-hubspot", destination: "/blog/integration-hubspot-whatsapp", permanent: true },
      { source: "/blog/salesforce-vs-pipedrive", destination: "/blog/hubspot-vs-salesforce-comparatif", permanent: true },
      { source: "/blog/clay-vs-clearbit-vs-apollo", destination: "/blog/comparatif-outils-generation-leads-enrichissement", permanent: true },
      { source: "/blog/integration-hubspot-salesforce-best-practices-et-introduction-au-connecteur", destination: "/blog/hubspot-vs-salesforce-comparatif", permanent: true },
      { source: "/blog/hubspot-vs-monday-crm", destination: "/blog/meilleur-crm-b2b-france", permanent: true },
      { source: "/blog/hubspot-vs-dynamics-365", destination: "/migration-dynamics-hubspot", permanent: true },
      { source: "/blog/attio-vs-hubspot-vs-folk", destination: "/agence-attio", permanent: true },
      { source: "/blog/emelia-notre-test-de-loutil-de-cold-emailing", destination: "/blog/emelia-test-outil-cold-emailing", permanent: true },
      { source: "/blog/marketing-automation-comment-generer-des-leads-a-faible-cout-en-b2b", destination: "/blog/inbound-marketing-b2b-revops", permanent: true },
      { source: "/blog/revops-vs-sales-ops-vs-marketing-ops-les-differences-cles", destination: "/blog/revops-vs-sales-ops-marketing-ops", permanent: true },
      { source: "/blog/fuite-chez-google-un-apercu-du-fonctionnement-de-lalgorithme-google", destination: "/blog/geo-optimiser-site-llm", permanent: true },
      { source: "/blog/landing-page-b2b-courte-ou-pas", destination: "/blog", permanent: true },
      { source: "/blog/le-single-keyword-ad-group-skag-pour-google-ads-bonne-idee-ou-pas", destination: "/blog/skag-single-keyword-ad-group-google-ads", permanent: true },
      { source: "/blog/hubspot-le-tableau-de-bord-id%C3%A9al-pour-suivre-vos-ventes", destination: "/blog/kpi-commerciaux-indicateurs-vente", permanent: true },
      { source: "/blog/comprendre-les-canaux-dacquisition-definition-types-et-rentabilite", destination: "/blog/cest-quoi-acquisition-marketing", permanent: true },
      { source: "/blog/hubspot-cms-les-fondamentaux-pour-une-creer-un-site-internet-performant", destination: "/blog/hubspot-cms-fondamentaux-site-internet-performant", permanent: true },
      { source: "/blog/synchronisation-des-objets-customs-entre-hubspot-et-salesforce", destination: "/blog/hubspot-vs-salesforce-comparatif", permanent: true },
      { source: "/blog/optimiser-seo-hubspot", destination: "/blog/geo-optimiser-site-llm", permanent: true },
      { source: "/blog/implementation-hubspot-essentiels-demarrage", destination: "/blog/onboarding-hubspot-30-premiers-jours", permanent: true },
      { source: "/blog/marketing-dun-saas-b2b-15-questions-strategiques-inevitables-1-de-3", destination: "/blog/marketing-saas-b2b-15-questions-strategiques", permanent: true },
      { source: "/blog/les-sieges-hubspot-nouveau-pricing-nouveau-format", destination: "/blog/hubspot-tarifs-prix-2026", permanent: true },
      { source: "/blog/cest-quoi-de-lacquisition-en-marketing", destination: "/blog/cest-quoi-acquisition-marketing", permanent: true },
      { source: "/blog/comment-recruter-et-structurer-une-equipe-revops", destination: "/blog/structurer-equipe-revops", permanent: true },
      { source: "/blog/hubspot-vs-pipedrive", destination: "/blog/hubspot-vs-pipedrive-comparatif-prix-fonctionnalites", permanent: true },
      { source: "/blog/hubspot-vs-zoho", destination: "/blog/meilleur-crm-b2b-france", permanent: true },
      { source: "/blog/tout-savoir-sur-la-sandbox-lancee-par-hubspot", destination: "/blog/onboarding-hubspot-30-premiers-jours", permanent: true },
      { source: "/blog/meilleures-pratique-sequence-hubspot", destination: "/blog/meilleures-pratiques-sequences-hubspot", permanent: true },
      { source: "/blog/revops-faut-il-creer-une-equipe-dediee-ou-integrer-aux-equipes-existantes-", destination: "/blog/structurer-equipe-revops", permanent: true },
      { source: "/blog/parametrer-integration-jira-hubspot", destination: "/integration-hubspot", permanent: true },
      { source: "/blog/pandadoc-hubspot-comment-simplifier-la-vie-de-vos-sales", destination: "/integration-hubspot", permanent: true },

      // Old /resources/ and /agency/ pages
      { source: "/resources/nos-outils", destination: "/outils", permanent: true },
      { source: "/agency/team", destination: "/a-propos", permanent: true },
      { source: "/agency/methodology", destination: "/a-propos", permanent: true },

      // Old /faq-revops/ pages
      { source: "/faq-revops/migration-crm", destination: "/migration-crm", permanent: true },
      { source: "/faq-revops/formation-equipes", destination: "/formation-hubspot", permanent: true },
      { source: "/faq-revops/duree-projet-revops", destination: "/revops", permanent: true },
      { source: "/faq-revops/outils-automation", destination: "/blog/zapier-vs-make-vs-n8n-revops", permanent: true },
      { source: "/faq-revops/support-technique", destination: "/contact", permanent: true },
      { source: "/faq-revops/connexion-outils-existants", destination: "/integration-hubspot", permanent: true },
      { source: "/faq-revops/crm-hubspot-salesforce", destination: "/blog/hubspot-vs-salesforce-comparatif", permanent: true },
      { source: "/faq-revops/services-agence-revops", destination: "/agence-revops", permanent: true },
      { source: "/faq-revops/deroulement-projet-revops", destination: "/revops", permanent: true },
      { source: "/faq-revops/roi-revops", destination: "/blog/metriques-revops-indicateurs-performance", permanent: true },
      { source: "/faq-revops/urgence-probleme-production", destination: "/contact", permanent: true },
      { source: "/faq-revops/resultats-mesurables-revops", destination: "/blog/metriques-revops-indicateurs-performance", permanent: true },
      { source: "/faq-revops/integration-outils-existants", destination: "/integration-hubspot", permanent: true },
      { source: "/faq-revops/facturation-paiement", destination: "/contact", permanent: true },
      { source: "/faq-revops/methode-collaboration", destination: "/a-propos", permanent: true },
      { source: "/faq-revops/temps-implication-equipe", destination: "/revops", permanent: true },
      { source: "/faq-revops/secteurs-activite-revops", destination: "/agence-revops", permanent: true },

      // Old /expertises/ pages
      { source: "/expertises/revops/audit-revops", destination: "/audit-revops", permanent: true },
      { source: "/expertises/crm/mise-en-place", destination: "/agence-hubspot", permanent: true },
      { source: "/expertises/integration/integration-crm", destination: "/integration-hubspot", permanent: true },
      { source: "/expertises/crm/workflows-nurturing", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },
      { source: "/expertises/crm/marketing-automation", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },
      { source: "/expertises/crm/segmentation-scoring", destination: "/lead-scoring-hubspot", permanent: true },
      { source: "/expertises/service/strategie-retention", destination: "/blog/customer-success-revops", permanent: true },
      { source: "/expertises/acquisition/creation-icp-ciblage", destination: "/blog/account-based-marketing-guide", permanent: true },
      { source: "/expertises/acquisition/publicite-b2b", destination: "/blog", permanent: true },
      { source: "/expertises/acquisition/prospection-outbound", destination: "/blog/lemlist-test-complet-outil-prospection", permanent: true },
      { source: "/expertises/revops/integration-synchronisation-outils", destination: "/integration-hubspot", permanent: true },

      // Old /lp/ pages
      { source: "/lp/agence-revops", destination: "/agence-revops", permanent: true },
      { source: "/lp/agence-service-ops", destination: "/revops-part-time", permanent: true },
      { source: "/lp/agence-bolt", destination: "/agents-ia", permanent: true },
      { source: "/lp/agence-n8n", destination: "/blog/zapier-vs-make-vs-n8n-revops", permanent: true },
      { source: "/lp/agence-lemlist", destination: "/blog/lemlist-test-complet-outil-prospection", permanent: true },
      { source: "/lp/agence-sales-ops", destination: "/revops-part-time", permanent: true },
      { source: "/lp/growth", destination: "/", permanent: true },

      // Old /lp/ pages (additional)
      { source: "/lp/agence-hubspot", destination: "/agence-hubspot", permanent: true },

      // Old /sectors/ pages
      { source: "/sectors/pme", destination: "/revops-pme", permanent: true },
      { source: "/sectors/startup", destination: "/revops-startup", permanent: true },
      { source: "/sectors/grand-groupe", destination: "/revops-grand-groupe", permanent: true },

      // Old /fr/ pages
      { source: "/fr/avis-clients/toyota", destination: "/cas-clients", permanent: true },
      { source: "/fr/blog/les-sieges-hubspot-nouveau-pricing-nouveau-format", destination: "/blog/hubspot-tarifs-prix-2026", permanent: true },

      // Old /hubspot/ pages
      { source: "/hubspot/migration-salesforce-hubspot", destination: "/migration-salesforce-hubspot", permanent: true },

      // Old blog articles (batch 2)
      { source: "/blog/9-trucs-appris-suite-a-limplantation-et-la-gestion-de-quatre-crm-differents", destination: "/blog/migration-crm-guide-complet", permanent: true },
      { source: "/blog/reseaux-sociaux-pourquoi-payer-pour-un-clic", destination: "/blog", permanent: true },
      { source: "/blog/hubspot-facebook-ads-connection-des-audiences", destination: "/blog", permanent: true },
      { source: "/blog/marketing-b2b-outbound-quels-outils-sont-adaptes", destination: "/blog/comparatif-outils-generation-leads-enrichissement", permanent: true },
      { source: "/blog/hubspot-linkedin-ads-comment-generer-des-leads", destination: "/blog", permanent: true },
      { source: "/blog/le-test-les-objets-custom-hubspot", destination: "/blog/onboarding-hubspot-30-premiers-jours", permanent: true },
      { source: "/blog/automatisation-optimisation-service-ops-hubspot", destination: "/blog/9-actions-commerciales-automatiser-hubspot", permanent: true },
      { source: "/blog/les-workflows-hubspot-essentiels-pour-closer-plus-plus-rapidement", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },
      { source: "/blog/hubspot-comparatif-des-integrations-de-gestion-devenements-et-webinaire", destination: "/integration-hubspot", permanent: true },
      { source: "/blog/guide-implementation-hubspot", destination: "/blog/onboarding-hubspot-30-premiers-jours", permanent: true },

      // Old misc pages
      { source: "/lovable-help", destination: "/", permanent: true },
      { source: "/diagnostic", destination: "/audit-revops", permanent: true },
      { source: "/inbound-marketing/seo", destination: "/blog/geo-optimiser-site-llm", permanent: true },
      { source: "/meilleures-agences-revops", destination: "/blog/top-agences-revops-france", permanent: true },
      { source: "/agence-lovable", destination: "/agents-ia", permanent: true },
      { source: "/agence-cargo", destination: "/outils", permanent: true },
      { source: "/comment-choisir-consultant-revops", destination: "/consultant-revops", permanent: true },
      { source: "/glossaire-revops", destination: "/glossaire", permanent: true },
      { source: "/service-support-ops", destination: "/revops-part-time", permanent: true },
      { source: "/qu-est-ce-que-le-revops", destination: "/revops", permanent: true },
      { source: "/acquisition-outbound", destination: "/blog/lemlist-test-complet-outil-prospection", permanent: true },
      { source: "/cas-clients/toyota", destination: "/cas-clients", permanent: true },
      { source: "/mini-guide-revops", destination: "/guide-revops-ultime", permanent: true },
      { source: "/sitemap", destination: "/sitemap.xml", permanent: true },

      // Batch 3 - index.html and misc
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/fr", destination: "/", permanent: true },
      { source: "/fr/:path*", destination: "/:path*", permanent: true },
      { source: "/agence-salesforce", destination: "/migration-salesforce-hubspot", permanent: true },
      { source: "/revops-explained", destination: "/revops", permanent: true },
      { source: "/cas-clients/metron-zuora", destination: "/cas-clients", permanent: true },
      { source: "/lp/agence-attio", destination: "/agence-attio", permanent: true },
      { source: "/resources/tools-stack", destination: "/outils", permanent: true },
      { source: "/hubspot/integration-custom", destination: "/integration-hubspot", permanent: true },

      // Batch 3 - old blog articles
      { source: "/blog/choisir-agence-hubspot", destination: "/agence-hubspot", permanent: true },
      { source: "/blog/raccourcir-cycle-vente-b2b", destination: "/blog/kpi-commerciaux-indicateurs-vente", permanent: true },
      { source: "/blog/lead-nurturing-guide", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },
      { source: "/blog/ia-hubspot", destination: "/blog/hubspot-ia-fonctionnalites", permanent: true },
      { source: "/blog/cout-migration-crm-estimation", destination: "/blog/migration-crm-guide-complet", permanent: true },
      { source: "/blog/ab-test-hubspot-marketing", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },

      // Batch 3 - old faq-revops
      { source: "/faq-revops/accompagnement-post-projet", destination: "/contact", permanent: true },
      { source: "/faq-revops/premier-contact-audit", destination: "/audit-revops", permanent: true },
      { source: "/faq-revops/garantie-resultats", destination: "/revops", permanent: true },
      { source: "/faq-revops/difference-revops-salesops", destination: "/blog/revops-vs-sales-ops-marketing-ops", permanent: true },

      // Batch 3 - old expertises
      { source: "/expertises/service/architecture-outils-support", destination: "/revops-part-time", permanent: true },

      // Batch 4 - Soft 404s
      { source: "/components/tabs", destination: "/", permanent: true },
      { source: "/hubspot/marketing-ops", destination: "/blog/marketing-ops-definition", permanent: true },
      { source: "/dashboards-reporting", destination: "/blog/kpi-commerciaux-indicateurs-vente", permanent: true },
      { source: "/backoffice", destination: "/", permanent: true },
      { source: "/avis-clients/:slug*", destination: "/cas-clients", permanent: true },
      { source: "/services/acquisition", destination: "/blog/inbound-marketing-b2b-revops", permanent: true },
      { source: "/outils/hubspot", destination: "/agence-hubspot", permanent: true },
      { source: "/guides/implementation-hubspot", destination: "/blog/onboarding-hubspot-30-premiers-jours", permanent: true },
      { source: "/integrateur-connecteurs-hubspot", destination: "/integration-hubspot", permanent: true },
      { source: "/hubspot/integration-aircall", destination: "/blog/integration-hubspot-whatsapp", permanent: true },

      // Batch 5 - remaining duplicates
      { source: "/blog/comment-savoir-dou-viennent-vos-conversions-telephoniques", destination: "/blog/tracking-conversions-hubspot-guide-complet", permanent: true },

      // Batch 6 - "Sans objet" pages: old blog → nearest equivalent
      { source: "/blog/account-based-marketing-abm-guide-revops", destination: "/blog/account-based-marketing-guide", permanent: true },
      { source: "/blog/agents-ia-revops-dust-clay-hubspot-guide", destination: "/agents-ia", permanent: true },
      { source: "/blog/clay-enrichissement-donnees-b2b-guide", destination: "/blog/comparatif-outils-generation-leads-enrichissement", permanent: true },
      { source: "/blog/cold-email-b2b-templates", destination: "/blog/lemlist-test-complet-outil-prospection", permanent: true },
      { source: "/blog/crm-migration-guide-complet", destination: "/blog/migration-crm-guide-complet", permanent: true },
      { source: "/blog/hubspot-vs-dynamics-365-comparatif", destination: "/migration-dynamics-hubspot", permanent: true },
      { source: "/blog/hubspot-vs-zoho-comparatif", destination: "/blog/meilleur-crm-b2b-france", permanent: true },
      { source: "/blog/marketing-automation-b2b-guide-revops", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },
      { source: "/blog/metriques-revops-par-departement", destination: "/blog/metriques-revops-indicateurs-performance", permanent: true },
      { source: "/blog/pipeline-forecasting-revops-2026", destination: "/blog/forecasting-commercial-methodes-outils", permanent: true },
      { source: "/blog/revops-reporting-dashboards-guide", destination: "/blog/kpi-commerciaux-indicateurs-vente", permanent: true },
      { source: "/blog/sales-enablement-b2b-guide-revops", destination: "/blog/sales-enablement-guide", permanent: true },
      { source: "/blog/salesforce-vs-pipedrive-comparatif", destination: "/blog/hubspot-vs-salesforce-comparatif", permanent: true },
      { source: "/blog/test-agents-hubspot-recherche-entreprise", destination: "/blog/hubspot-ia-fonctionnalites", permanent: true },
      { source: "/blog/test-agents-hubspot-transmission-vente-csm", destination: "/blog/hubspot-ia-fonctionnalites", permanent: true },

      // Batch 6 - old cas-clients variants
      { source: "/cas-clients/alan-stack-marketing", destination: "/cas-clients/alan", permanent: true },
      { source: "/cas-clients/beedeez-integration-clay-hubspot", destination: "/cas-clients/beedeez", permanent: true },
      { source: "/cas-clients/iroko-transformation-digitale", destination: "/cas-clients/iroko", permanent: true },
      { source: "/cas-clients/spendesk-migration-crm", destination: "/cas-clients", permanent: true },

      // Batch 6 - old misc pages
      { source: "/agence-hubspot-bordeaux", destination: "/agence-hubspot", permanent: true },
      { source: "/agence-hubspot-marseille", destination: "/agence-hubspot", permanent: true },
      { source: "/agence-hubspot-nantes", destination: "/agence-hubspot", permanent: true },
      { source: "/agence-hubspot-toulouse", destination: "/agence-hubspot", permanent: true },
      { source: "/cro-part-time", destination: "/revops-part-time", permanent: true },
      { source: "/data-enrichissement", destination: "/blog/comparatif-outils-generation-leads-enrichissement", permanent: true },
      { source: "/definition-du-revops", destination: "/revops", permanent: true },
      { source: "/expertises", destination: "/agence-revops", permanent: true },
      { source: "/expertises/strategy/diagnostic-go-to-market", destination: "/audit-revops", permanent: true },
      { source: "/expertises/strategy/plan-revops-trimestriel", destination: "/revops-part-time", permanent: true },
      { source: "/integrations", destination: "/integration-hubspot", permanent: true },
      { source: "/lead-scoring-explained", destination: "/lead-scoring-hubspot", permanent: true },
      { source: "/marketing-automation", destination: "/blog/marketing-automation-7-workflows-hubspot", permanent: true },
      { source: "/sales-ops-automation", destination: "/automatisation-commerciale", permanent: true },
      { source: "/sectors/scaleup", destination: "/revops-scaleup", permanent: true },
      { source: "/projet-evernex", destination: "/cas-clients", permanent: true },
      { source: "/outils/generique", destination: "/outils", permanent: true },
      { source: "/outils/odoo", destination: "/outils", permanent: true },
      { source: "/resources/outils/dashboard-template", destination: "/outils", permanent: true },
      { source: "/resources/outils/formatage-telephone", destination: "/outils", permanent: true },
      { source: "/resources/outils/lead-scoring-simple", destination: "/outils", permanent: true },
      { source: "/lp/guide-revops", destination: "/guide-revops-ultime", permanent: true },

      // Batch 6 - /guide/ pages
      { source: "/guide/qu-est-ce-que-le-lead-scoring", destination: "/lead-scoring-hubspot", permanent: true },
      { source: "/guide/qu-est-ce-que-le-marketing-ops", destination: "/blog/marketing-ops-definition", permanent: true },
      { source: "/guide/qu-est-ce-que-le-sales-ops", destination: "/blog/revops-vs-sales-ops-marketing-ops", permanent: true },
      { source: "/guide/qu-est-ce-que-le-service-ops", destination: "/blog/customer-success-revops", permanent: true },

      // Batch 6 - /faq-revops/ catch-all (covers all remaining variants)
      { source: "/faq-revops/:slug*", destination: "/revops", permanent: true },
    ];
  },
};

export default nextConfig;
