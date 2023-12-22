/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    runtime: 'edge',
    unstable_allowDynamic: [
        // use a glob to allow anything in the function-bind 3rd party module
        '/node_modules/function-bind/**',
    ],
}

module.exports = nextConfig
