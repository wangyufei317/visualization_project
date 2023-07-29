// 默认主题详细配置
import themeJson from './global.theme.json'

// 默认主题详细配置
export type EchartsRenderer = 'svg' | 'canvas';

type ThemeJsonType = typeof themeJson
export interface GlobalThemeJsonType extends Partial<ThemeJsonType> {
    dataset?: any,
    renderer?: EchartsRenderer,
    [T:string]: any
  }
