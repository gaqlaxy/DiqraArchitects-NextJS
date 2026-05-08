/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/Home",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.diqraarchitects.com",
      },
      {
        protocol: "https",
        hostname: "diqraarchitects.com",
      },
      {
        protocol: "https",
        hostname: "website-data-pluckwalk.s3-ap-south-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "cdn.cosmos.so",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
