import { ConfigType, PackagesCategoryEnum,  ChartFrameEnum } from '@/packages/index.d'

export enum ChartCategoryEnum {
    BAR = 'Bar',
    PIE = 'Pie',
    LINE = 'Line',
    SCATTER = 'Scatter',
    RADAR = 'Radar',
    GAUGE = 'Gauge',
    MORE = 'More'
}

export const ChartCategoryEnumName: {
    [key: string]: string
} = {
    BAR: '柱状图',
    PIE: '饼图',
    LINE: '折线图',
    SCATTER: '散点图',
    RADAR: '雷达图',
    GAUGE: '仪表盘',
    MORE: '更多'
}

export const ChartCommonConfig = (chartType: ChartCategoryEnum): ConfigType => {
    const title = ChartCategoryEnumName[chartType.toString().toUpperCase()]
    return {
        key: `${chartType}Common`,
        chartKey: `V${chartType}Common`,
        conKey: `VC${chartType}Common`,
        title,
        category: chartType,
        categoryName: title,
        package: PackagesCategoryEnum.CHARTS,
        chartFrame: ChartFrameEnum.ECHARTS,
        image: `${chartType.toString().toLowerCase()}.png`
    }
}
