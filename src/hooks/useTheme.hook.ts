import { computed, toRefs } from 'vue'
import { useDesignStore } from '@/store/modules/designStore/designStore'
import { darkTheme, GlobalThemeOverrides, ThemeCommonVars } from 'naive-ui'
import { lighten, alpha } from '@/utils'
import { borderRadius } from '@/settings'

// 设置全局主题
export const useThemeOverridesHook = (baseCommon?: ThemeCommonVars): GlobalThemeOverrides => {
  const designStore = useDesignStore()
  const { getAppTheme } = toRefs(designStore)
  const theme = ((): GlobalThemeOverrides => {
    const commonObj = {
      common: baseCommon || {
        primaryColor: getAppTheme.value,
        primaryColorHover: lighten(alpha(getAppTheme.value), 0.1),
        primaryColorPressed: lighten(alpha(getAppTheme.value), 0.1),
        primaryColorSuppl: getAppTheme.value,
        borderRadius
      }
    }
    const darkObj = Object.assign({
      LoadingBar: {
        colorLoading: getAppTheme.value
      }
    }, commonObj)
    const lightObj = Object.assign({}, commonObj)

    return designStore.getDarkTheme ? darkObj : lightObj
  })()
  return theme
}

// 返回暗黑主题
export const useDarkThemeHook = () => {
  const designStore = useDesignStore()
  return computed(() => (designStore.getDarkTheme ? darkTheme : undefined))
}
