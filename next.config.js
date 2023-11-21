const withTwin = require("./withTwin");

/** @type {import("next").NextConfig} */
const nextConfig = withTwin({
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
