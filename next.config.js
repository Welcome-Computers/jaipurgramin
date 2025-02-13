// @ts-check
/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  distDir: 'build',
  // output: 'export', // export | standalone
  generateEtags: true,
  compress: true,
  cleanDistDir: true,
  optimizeFonts: true,
  reactStrictMode: false,
  swcMinify: false,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  experimental: {
    typedRoutes: true,
    serverActions: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['nattynatty.com', 's3.amazonaws.com', 'dev-nattyhattyassets.s3.amazonaws.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nattyhatty.com",
      },
    ],
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    // removeConsole: {
    //   exclude: ['error', 'info'],
    // },
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  eslint: {
    /** Only run ESLint on these directories with `next lint` and `next build`. */
    dirs: ['src'],
    /** Do not run ESLint during production builds (`next build`). */
    ignoreDuringBuilds: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg|ttf|woff|woff2)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      ],
    });
    config.module.rules.push({
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    });
    return config;
  },
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'bottom-right',
    // autoPrerender: true,
  },
};

module.exports = nextConfig;
