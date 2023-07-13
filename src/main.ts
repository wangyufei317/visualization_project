import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from '@/store'
import { setupNaive } from '@/plugins'
import { setHtmlTheme } from '@/utils'

async function appInit () {
  const app = createApp(App)

  // 注册全局常用 naive-ui 组件
  setupNaive(app)

  // 挂载状态管理
  setupStore(app)

  // 挂载路由
  app.use(router)
  // 路由准备就绪后挂载APP实例
  await router.isReady()

  // Store 准备就绪后处理主题色
  setHtmlTheme()

  // 挂载到页面
  app.mount('#app', true)

  // 挂载到 window
  window.$vue = app
}

appInit().then(() => {
  // 捕获全局错误
  window.addEventListener('unhandledrejection', event => {
    console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`)
  })
})
