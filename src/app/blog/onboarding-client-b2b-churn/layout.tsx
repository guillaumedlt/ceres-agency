import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onboarding client B2B : reduire le churn des les 30 premiers jours",
  description:
    "Les 7 etapes d\u2019un onboarding client B2B reussi : kick-off, setup, formation, adoption, quick win, review et handoff. Automatiser avec HubSpot, mesurer le time-to-value, reduire le churn.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
