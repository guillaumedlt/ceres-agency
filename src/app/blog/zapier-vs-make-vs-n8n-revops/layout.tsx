import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zapier vs Make vs n8n : comparatif automatisation RevOps",
  description:
    "Comparatif Zapier vs Make vs n8n pour le RevOps : prix, UX, integrations HubSpot, API, self-hosting et scenarios concrets.",
  openGraph: {
    title: "Zapier vs Make vs n8n : comparatif automatisation RevOps",
    description:
      "Comparatif Zapier vs Make vs n8n pour le RevOps : prix, UX, integrations HubSpot, API, self-hosting et scenarios concrets.",
    url: "https://ceres.agency/blog/zapier-vs-make-vs-n8n-revops",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/zapier-vs-make-vs-n8n-revops",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
