/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['i.ibb.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
  experimental: {
    optimizeCss: false
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource'
    })
    return config
  },
  assetPrefix: '/',
  basePath: '',
  async rewrites() {
    return [
      {
        source: '/assets/:path*',
        destination: '/src/assets/:path*',
      },
    ]
  }
}

module.exports = nextConfig