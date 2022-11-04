/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  headers:[{"key": "Access-Control-Allow-Origin","value": "*"}],
}

module.exports = nextConfig
