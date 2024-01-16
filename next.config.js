// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTwin = require('./withTwin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const removeImports = require('next-remove-imports')();

/** @type {import("next").NextConfig} */
const nextConfig = withTwin({
    skipTrailingSlashRedirect: true,
    reactStrictMode: false,
    swcMinify: true,
    images: {
        unoptimized: true
    }
});

module.exports = removeImports(nextConfig);
