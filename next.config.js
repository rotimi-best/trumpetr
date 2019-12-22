const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const withCSS = require("@zeit/next-css");
const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config
  }
}

module.exports = withPlugins([
  withCSS,
  [withPWA, {
    pwa: {
      dest: 'public'
    },
    experimental: {
      publicDirectory: true
    }
  }]
], nextConfig)
