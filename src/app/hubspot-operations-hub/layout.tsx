import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HubSpot Operations Hub : guide et deploiement | Ceres",
  description:
    "Guide complet HubSpot Operations Hub : data sync, data quality, programmable automation, datasets, custom code. Plans, prix et deploiement RevOps par Ceres.",
  keywords: [
    "hubspot operations hub",
    "operations hub hubspot",
    "hubspot ops",
    "hubspot data sync",
    "hubspot data quality",
    "hubspot programmable automation",
    "operations hub prix",
    "hubspot revops",
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
