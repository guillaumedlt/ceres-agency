/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.google.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/tools-stack", destination: "/outils", permanent: true },
      { source: "/blog/comment-calculer-roi-crm", destination: "/blog/metriques-revops-indicateurs-performance", permanent: true },
      { source: "/guide-revops", destination: "/revops", permanent: true },
      { source: "/outils/attio", destination: "/agence-attio", permanent: true },
    ];
  },
};

export default nextConfig;
