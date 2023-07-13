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
import { NConfigProvider, ThemeCommonVars, GlobalThemeOverrides } from 'naive-ui'
import { useDarkThemeHook, useCode, useThemeOverridesHook } from '@/hooks'
import { Evt, BaseEventName } from '@/events'
import { ref } from 'vue'
console.log(BaseEventName)
// 暗黑主题
const darkTheme = useDarkThemeHook()
// 主题配置
const overridesTheme = ref<GlobalThemeOverrides>(useThemeOverridesHook())
// 代码主题
const hljsTheme = useCode()

// 事件注册
Evt.Base.useOnMount(BaseEventName.ChangeTheme, (newTheme?: ThemeCommonVars) => {
  console.log(12121)
  overridesTheme.value = useThemeOverridesHook(newTheme)
})
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
