import { use } from 'echarts/core'
import { EchartsRenderer } from '@/settings/chartThemes'
import { CanvasRenderer, SVGRenderer } from 'echarts/renderers'
import { inject, type Ref } from 'vue'
import { SCALE_KEY } from '@/views/preview/hooks/useScale.hook'

use([CanvasRenderer, SVGRenderer])

type InitOptions = {
    renderer: EchartsRenderer
    devicePixelRatio?: number
}

// 给当前echarts组件设置初始值
export function useCanvasInitOptions(option: any, themeSetting: any) {
    const renderer = option.renderer || themeSetting.renderer || 'canvas'
    const initOptions: InitOptions = { renderer }
    const scaleRef = inject<Ref<{ width: number; height: number }>>(SCALE_KEY) || { value: { width: 1, height: 1 } }
    if (renderer === 'canvas') {
        initOptions.devicePixelRatio = Math.ceil(
            Math.max(window.devicePixelRatio, scaleRef.value.width, scaleRef.value.height)
        )
    }
    return initOptions
}