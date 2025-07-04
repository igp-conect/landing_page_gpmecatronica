import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://portal.ifro.edu.br/**")],
  },
};

export default nextConfig;
