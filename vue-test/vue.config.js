const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" /* 設置打包的路徑 */ ? "./" : "/",
  transpileDependencies: true,
  filenameHashing: false /* 關閉打包後的檔名雜湊值 */,
  outputDir: "dist" /* 打包生成的文件目錄，預設是 dist */,
  pages: {
    index: {
      entry: `src/main.js`,
      template: `public/index.html`,
      filename:
        "index.html" /* 自定義的文件名，輸出在文件目錄，預設是 index.html */,
      title: "Index Page",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
    list: {
      entry: `./src/list.js`,
      template: `src/pages/list.html`,
      filename: `list.html`,
      title: "list",
    },
    product: {
      entry: `src/product.js`,
      template: `src/pages/product.html`,
      filename: `product.html`,
      title: "product",
    },
  },
  configureWebpack: {
    externals: {
      /* 防止 webpack 打包進專案中 */ jquery: "$",
    },
    optimization: {
      /* 禁用代碼壓縮 */ minimize: false,
    },
    devtool: "eval-source-map", // 不生成源映射文件
  },
  css: {
    sourceMap: true, //在開發環境中啟用來源映射
  },
});
