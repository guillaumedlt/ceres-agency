import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides RevOps, CRM et IA : playbooks et templates gratuits",
  description:
    "Guides RevOps, CRM et IA gratuits : playbooks, templates et frameworks actionables pour structurer vos operations commerciales et marketing en B2B SaaS.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
