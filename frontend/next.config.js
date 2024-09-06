/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, //
    // output: 'export', // use for tauri only
    output: 'standalone', // use for docker

    images: {
        // domains: ['localhost'],
        formats: ['image/webp'],
    },
    async rewrites() {
        return [
        {
            source: '/api/:path*',
            destination: 'http://localhost:3000/api/:path*',
        },
        ]
    },
}

module.exports = nextConfig