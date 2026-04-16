import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot Marketing Hub : guide et deploiement | Ceres",
  description:
    "Guide HubSpot Marketing Hub : fonctionnalites, plans Starter/Pro/Enterprise, prix et deploiement. Emails, workflows, landing pages et ads.",
  keywords: [
    "hubspot marketing hub",
    "marketing hub hubspot",
    "hubspot marketing",
    "hubspot email marketing",
    "hubspot marketing automation",
    "marketing hub prix",
    "hubspot landing pages",
    "hubspot workflows",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
