import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RevOps pour SaaS B2B : structurez votre revenue engine | Ceres",
  description:
    "RevOps specialise pour les SaaS B2B. Pipeline ARR/MRR, scoring, churn prediction, onboarding automatise. 100+ SaaS accompagnes.",
  keywords: [
    "revops saas",
    "revops saas b2b",
    "revenue operations saas",
    "crm saas",
    "pipeline saas",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
