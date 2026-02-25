import type { NextConfig } from "next";
import nextPwa from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {},
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "**",
      },
    ],
  },
};

const withPwa = nextPwa({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  dest: "public",
  fallbacks: {},
  workboxOptions: {
    disableDevLogs: true,
  },
});

export default withPwa({ ...(nextConfig as any) });
