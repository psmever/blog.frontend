// eslint-disable-next-line @typescript-eslint/no-var-requires
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

// const nextConfig = {
//     output: "export",
//     reactStrictMode: true,
//     swcMinify: true,
//     images: {
//         unoptimized: true,
//     },
// };

module.exports = nextConfig;
