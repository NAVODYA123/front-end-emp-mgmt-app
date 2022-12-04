/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'build',
  // headers:[{"key": "Access-Control-Allow-Origin","value": "*"}],
}

module.exports = nextConfig
