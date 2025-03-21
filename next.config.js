/** @type {import('next').NextConfig} */
const nextConfig = {
    // env: {
    //     MONGO_URI: process.env.MONGO_URI,
    //     NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    //   },

    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }, // or change to 'no-referrer'
            ],
          },
        ];
      },
}

module.exports = nextConfig
