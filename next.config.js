/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "placehold.co" }],
  },
  // experimental: {
  //   serverComponentsExternalPackages: [
  //     "@react-email/components",
  //     "@react-email/render",
  //     "@react-email/tailwind",
  //   ],
  // },
};

module.exports = nextConfig;
