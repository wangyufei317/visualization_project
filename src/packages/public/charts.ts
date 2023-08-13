import merge from 'lodash/merge'
import pick from 'lodash/pick'
import { globalThemeJson } from '@/settings/chartThemes/index'

/**
 * 合并 color 和全局配置项
 * @param option 配置
 * @param themeSetting 设置
 * @param includes 包含元素
 */
export const mergeTheme = <T, U>(option: T, themeSetting: U, includes: string[]) => {
    /**
     * pick(object, keys)
     * 从object中找出keys中包含的key-value
     */
    option = merge({}, pick(themeSetting, includes), option)
    return option
}

/**
 * ECharts option 统一前置处理
 */
export const echartOptionProfixHandle = (option: any, includes: string[]) => {
    option['backgroundColor'] = 'rgba(0,0,0,0)'
    return mergeTheme(option, globalThemeJson, includes)
}