/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    async rewrites() {
            return [
                {
                    destination: 'http://dev.linkgem.co.kr/api/:path*',
                    source: '/api/:path*',
                },
            ];
        
    },
};

module.exports = nextConfig;
