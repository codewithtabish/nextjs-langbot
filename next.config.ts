/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ Allow ALL external domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",   // <- this allows any domain
      },
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
