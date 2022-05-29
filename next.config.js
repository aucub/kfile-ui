/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_URL: 'http://localhost:3000',
        BASE_URL: 'http://localhost:8080'
    }
}

module.exports = nextConfig
