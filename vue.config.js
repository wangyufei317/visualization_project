const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "src/styles/common/style.scss"'
      },
      scss: {
        additionalData: '@import "src/styles/common/style.scss";'
      }
    }
  }
})
