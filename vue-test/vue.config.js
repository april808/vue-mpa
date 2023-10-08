const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath:
    process.env.NODE_ENV === "production" /* 設置打包的路徑 */ ? "./" : "/",
  transpileDependencies: true,
  filenameHashing: false /* 關閉打包後的檔名雜湊值 */,
  outputDir: "dist" /* 打包生成的文件目錄，預設是 dist */,
  pages: {
    index: {
      entry: "src/main.js",
      filename:
        "index.html" /* 自定義的文件名，輸出在文件目錄，預設是 index.html */,
    },
  },
  configureWebpack: {
    externals: {/* 防止 webpack 打包進專案中 */
      jquery: "$",
    },
  },
});
