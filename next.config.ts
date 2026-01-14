import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/aida-public/**",
      },
    ],
  },
  experimental: {
    turbo: {
      root: "/home/ad_shaf/Projects/shafstudio/physio-phyx",
    },
  },
};

export default nextConfig;
