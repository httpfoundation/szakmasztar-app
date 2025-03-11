/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextConfig } from "next";
import nextPwa from "@ducanh2912/next-pwa";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
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

