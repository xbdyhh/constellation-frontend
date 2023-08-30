/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
}

module.exports = {
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://rpc.itn-1.nibiru.fi/:path*'
      }
    ]
  }
}

module.exports = nextConfig
