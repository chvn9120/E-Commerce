/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production"
const nextConfig = {
    reactStrictMode: false, //
    // output: 'export', // use for tauri & zalo
    output: 'standalone', // use for docker

    images: {
        // domains: ['localhost'],
        formats: ['image/webp'],
    },
    // basePath: isProd ? "/zapps/<APP_ID>" : undefined,
}

module.exports = nextConfig