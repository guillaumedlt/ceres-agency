import type { Metadata } from "next";

export const metadata: Metadata = { title: "Presentation Ceres", robots: "noindex" };

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
