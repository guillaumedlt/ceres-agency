import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zapier vs Make vs n8n : quel outil d\u2019automatisation pour le RevOps",
  description:
    "Comparatif detaille Zapier vs Make vs n8n pour le RevOps : prix, UX, integrations HubSpot, API, self-hosting, scenarios concrets (lead routing, enrichissement, reporting, sync CRM). Table 15 criteres.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
