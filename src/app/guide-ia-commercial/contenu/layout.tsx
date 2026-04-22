import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide IA Commercial : contenu complet des 9 chapitres",
  description:
    "Contenu complet du Guide IA Commercial : 9 chapitres avec 25 prompts IA pour la prospection, la qualification, le closing et le suivi client en B2B SaaS.",
  alternates: {
    canonical: "https://ceres.agency/guide-ia-commercial/contenu",
  },
  openGraph: {
    title: "Guide IA Commercial : contenu complet des 9 chapitres",
    description: "Contenu complet du Guide IA Commercial : 9 chapitres avec 25 prompts IA pour la prospection, la qualification, le closing et le suivi client en B2B SaaS.",
    url: "https://ceres.agency/guide-ia-commercial/contenu",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
