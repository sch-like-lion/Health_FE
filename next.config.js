const path = require("path")

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
