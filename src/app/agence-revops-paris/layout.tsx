import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultants RevOps a Paris 8e | Ateliers sur site | Ceres",
  description:
    "Consultants RevOps bases a Paris 8e. On se deplace dans vos locaux pour aligner Marketing, Sales et CS. Expertise scale-ups parisiennes, Station F, ecosysteme SaaS. Audit 87 points + agents IA.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
