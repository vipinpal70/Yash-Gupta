import type { NextConfig } from "next";

// The site pivoted from a multi-page structure to a single-page landing
// design (see README). These routes no longer have their own content —
// send visitors to the closest matching section on the homepage instead
// of leaving stale/broken pages live.
const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
      { source: "/programs", destination: "/#mentorship", permanent: false },
      { source: "/resources", destination: "/#tools", permanent: false },
      { source: "/community", destination: "/#5x", permanent: false },
    ];
  },
};

export default nextConfig;
