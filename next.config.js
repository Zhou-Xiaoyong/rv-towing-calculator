/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 安全配置：配置允许加载图片的域名
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // 安全配置：启用 React Strict Mode
  // 生产环境配置
  ...(process.env.NODE_ENV === 'production' && {
    poweredByHeader: false, // 移除 X-Powered-By header
  }),
};

module.exports = nextConfig;
