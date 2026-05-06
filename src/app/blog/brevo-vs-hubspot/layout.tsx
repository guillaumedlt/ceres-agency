import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brevo vs HubSpot : marketing automation comparatif 2026",
  description:
    "Comparaison Brevo (ex-Sendinblue) vs HubSpot en 2026 : emailing, automation, CRM, chat, SMS, prix. 15 criteres compares.",
  openGraph: {
    title: "Brevo vs HubSpot : marketing automation comparatif 2026",
    description:
      "Comparaison Brevo (ex-Sendinblue) vs HubSpot en 2026 : emailing, automation, CRM, chat, SMS, prix. 15 criteres compares.",
    url: "https://ceres.agency/blog/brevo-vs-hubspot",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/brevo-vs-hubspot",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
