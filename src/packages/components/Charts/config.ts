import { PublicConfigClass } from '@/packages/public/index'
import { CreateComponentType } from '../../index.d'
import { ChartCommonConfig, ChartCategoryEnum } from './index';
import { ConfigType } from '@/packages/index.d'
import DefaultOptions from './defaultOptions'
import cloneDeep from 'lodash/cloneDeep'


export default class Config extends PublicConfigClass implements CreateComponentType {
    public key: string
    public chartConfig: ConfigType
    // 配置项
    public option: Object

    constructor (chartType: ChartCategoryEnum) {
        super()
        this.chartConfig = cloneDeep(ChartCommonConfig(chartType))
        this.key = this.chartConfig.key
        this.option = DefaultOptions[chartType]
    }
}