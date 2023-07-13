// import { resolve } from 'path'
// function pathResolve (dir) {
//   return resolve(process.cwd(), '.', dir)
// }

const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  // base: '/',
  // resolve: {
  //   alias: [
  //     {
  //       find: '@',
  //       replacement: path.resolve(__dirname, 'src')
  //     }
  //   ]
  // },
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
