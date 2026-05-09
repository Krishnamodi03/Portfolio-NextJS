import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  experimental: {
    optimizePackageImports: ["@react-three/fiber", "@react-three/drei", "framer-motion"],
  },
};

export default nextConfig;
