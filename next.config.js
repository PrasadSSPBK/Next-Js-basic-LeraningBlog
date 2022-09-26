/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash:true,
   images: {
    domains: ['media.istockphoto.com'],
  
}

module.exports = nextConfig
