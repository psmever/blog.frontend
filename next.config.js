const withTwin = require('./withTwin');
const removeImports = require('next-remove-imports')();

/** @type {import("next").NextConfig} */
const nextConfig = withTwin({
    output: 'export',
    reactStrictMode: false,
    swcMinify: true,
    images: {
        unoptimized: true
    }
});

// const nextConfig = {
//     output: "export",
//     reactStrictMode: true,
//     swcMinify: true,
//     images: {
//         unoptimized: true,
//     },
// };

module.exports = removeImports(nextConfig);
