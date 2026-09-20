import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // RecipeCard renders images at quality 85; Next only allows the
    // default (75) unless every quality actually used is listed here.
    qualities: [75, 85],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edamam-product-images.s3.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      // The local Supabase stack (`npm run db:start`) serves the same
      // bucket from here.
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "55321",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    // The optimizer refuses private IPs as an SSRF guard, which would
    // block the local bucket above. Development only; production images
    // all come from public hosts.
    dangerouslyAllowLocalIP: process.env.NODE_ENV === "development",
  },

  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
