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
};

export default nextConfig;
