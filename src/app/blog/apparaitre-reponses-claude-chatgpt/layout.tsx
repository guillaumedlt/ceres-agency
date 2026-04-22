import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comment apparaitre dans les reponses de Claude et ChatGPT",
  description:
    "10 actions concretes pour etre cite par Claude, ChatGPT et Perplexity : structured data, FAQ JSON-LD, E-E-A-T et schema Organization.",
  openGraph: {
    title: "Comment apparaitre dans les reponses de Claude et ChatGPT",
    description:
      "10 actions concretes pour etre cite par Claude, ChatGPT et Perplexity : structured data, FAQ JSON-LD, E-E-A-T et schema Organization.",
    url: "https://ceres.agency/blog/apparaitre-reponses-claude-chatgpt",
    type: "article",
  },
  alternates: {
    canonical: "https://ceres.agency/blog/apparaitre-reponses-claude-chatgpt",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
