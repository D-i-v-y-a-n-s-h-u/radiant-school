/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All imagery is served locally from /public — no remote patterns needed.
    unoptimized: true,
  },
};

export default nextConfig;
