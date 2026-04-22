import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Claude vs ChatGPT vs Gemini pour le B2B | Ceres",
  description: "Comparatif Claude, ChatGPT et Gemini pour les operations B2B : raisonnement, contexte, execution, prix et cas d'usage. Le verdict honnete.",
  keywords: ["claude vs chatgpt", "claude vs gemini", "comparatif ia b2b", "meilleure ia entreprise", "claude vs chatgpt vs gemini"],
  alternates: {
    canonical: "https://ceres.agency/claude-vs-chatgpt-vs-gemini-b2b",
  },
  openGraph: {
    title: "Claude vs ChatGPT vs Gemini pour le B2B | Ceres",
    description: "Comparatif Claude, ChatGPT et Gemini pour les operations B2B : raisonnement, contexte, execution, prix et cas d'usage. Le verdict honnete.",
    url: "https://ceres.agency/claude-vs-chatgpt-vs-gemini-b2b",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
