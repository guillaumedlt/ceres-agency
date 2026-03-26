import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment aligner marketing et sales en 30 jours avec le RevOps",
  description:
    "Plan d'action en 4 semaines pour aligner vos equipes marketing et sales. SLA, lead scoring, dashboards partages et feedback loops. Methode RevOps concrete.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
