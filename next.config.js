const withTwin = require("./withTwin");

/** @type {import("next").NextConfig} */
const nextConfig = withTwin({
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
});

module.exports = nextConfig;
