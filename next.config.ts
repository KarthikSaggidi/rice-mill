import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.preview.c39.airoapp.ai"],
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
