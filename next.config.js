/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir 设置为 true，表示将应用程序的文件结构从默认的 /pages 目录更改为 /src 目录。
    appDir: true,
    // 表示将 mongoose 库作为外部依赖引入到服务器端组件中。
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    // 表示你的应用程序将从这个域名下加载图片。
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    // 表示启用顶级 await，这是 JavaScript 中的一个实验性特性。
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

module.exports = nextConfig;
