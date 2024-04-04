const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'legekrogen.webmcdm.dk', // if your website has no www, drop it
      },
    ],
  },
}
module.exports = nextConfig
