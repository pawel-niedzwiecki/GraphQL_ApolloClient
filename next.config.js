const removeImports = require("next-remove-imports")();

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,

    images: {
      domains: ["rickandmortyapi.com"],
      formats: ["image/avif", "image/webp"],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },
  };

  return removeImports({
    ...nextConfig,
  });
};
