module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ["@ui/react"],
  experimental: {
    externalDir: true,
    appDir:true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'w0.peakpx.com',
        port: '',
        pathname: '/wallpaper/240/37/**',
      },
      {
        protocol: 'https',
        hostname: 'www.themoviedb.org',
        port: '',
        pathname: '/t/p/w220_and_h330_face/**',
      },

    ],
  },
};
