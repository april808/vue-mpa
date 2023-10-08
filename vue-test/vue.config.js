const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  filenameHashing: false /* 關閉打包後的檔名雜湊值 */,
  outputDir: "dist" /* 打包生成的文件目錄，預設是 dist */,
  pages: {
    index: {
      entry: "src/main.js",
      filename:
        "test.html" /* 自定義的文件名，輸出在文件目錄，預設是 index.html */,
    },
  },
});
