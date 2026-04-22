import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SLA marketing-sales : template complet et mise en place",
  description:
    "Guide pour creer un SLA marketing-sales : template, engagements reciproques, tracking HubSpot et revision trimestrielle.",
  openGraph: {
    title: "SLA marketing-sales : template complet et mise en place",
    description:
      "Guide pour creer un SLA marketing-sales : template, engagements reciproques, tracking HubSpot et revision trimestrielle.",
    url: "https://ceres.agency/blog/sla-marketing-sales-template",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/sla-marketing-sales-template",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
