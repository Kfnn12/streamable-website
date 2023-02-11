/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "https://s4.anilist.co",
      "s4.anilist.co",
      "cors.consumet.stream",
      "artworks.thetvdb.com",
    ],
  },
  distDir: "dist",
};

module.exports = nextConfig;
