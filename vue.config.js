// import { resolve } from 'path'
// function pathResolve (dir) {
//   return resolve(process.cwd(), '.', dir)
// }

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // base: '/',
  // resolve: {
  //   alias: [
  //     {
  //       find: '@',
  //       replacement: pathResolve('src')
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
