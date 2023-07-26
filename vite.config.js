import { fileURLToPath, URL } from "node:url";
const { ProvidePlugin } = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: (config) => {
    config.devtool = "source-map";
    config.resolve.symlinks = false;
    config.resolve.fallback = {
      crypto: false, // crypto-browserify can be polyfilled here if needed
      stream: false, // stream-browserify can be polyfilled here if needed
      assert: false, // assert can be polyfilled here if needed
      os: false, // os-browserify can be polyfilled here if needed
      https: false, // https-browserify can be polyfilled here if needed
      http: false, // stream-http can be polyfilled here if needed
      url: false, // url can be polyfilled here if needed
      zlib: false, // browserify-zlib can be polyfilled here if needed
    };
    config.plugins.push(new ProvidePlugin({ Buffer: ["buffer", "Buffer"] }));
    config.plugins.push(new ProvidePlugin({ process: ["process/browser"] }));
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "disabled",
      })
    );
  },
});
