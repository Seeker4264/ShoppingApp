/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: process.env.LOCAL_PROTOCOL,
                hostname: process.env.LOCAL_HOSTNAME,
                port: process.env.LOCAL_PORT,
                pathname: process.env.LOCAL_PATHNAME,
            },
        ],
    },
};

export default nextConfig;
