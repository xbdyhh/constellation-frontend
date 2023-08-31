/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // ↓追加
  async headers() {
    return [
      {
        "source": "https://rpc.itn-1.nibiru.fi/:path*",
        "headers": [
          { "key": "Access-Control-Allow-Credentials", "value": "true" },
          { "key": "Access-Control-Allow-Origin", "value": "*" },
          { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
        ]
      }
    ]
  },
}

module.exports = nextConfig