<template>
  <n-config-provider
    :theme="darkTheme"
    :hljs="hljsTheme"
    :theme-overrides="overridesTheme"
  >
    <router-view />
  </n-config-provider>
</template>
<script lang="ts" setup>
import { NConfigProvider, ThemeCommonVars, GlobalThemeOverrides, useLoadingBar } from 'naive-ui'
import { useDarkThemeHook, useCode, useThemeOverridesHook } from '@/hooks'
import { Evt, BaseEventName } from '@/events'
import { ref } from 'vue'
// 暗黑主题
const darkTheme = useDarkThemeHook()
// 主题配置
const overridesTheme = ref<GlobalThemeOverrides>(useThemeOverridesHook())
// 代码主题
const hljsTheme = useCode()

// 事件注册
Evt.Base.useOnMount(BaseEventName.ChangeTheme, (newTheme?: ThemeCommonVars) => {
  overridesTheme.value = useThemeOverridesHook(newTheme)
})

// loading挂载到全局
window['$loading'] = useLoadingBar()
window['$loading'].finish()
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
