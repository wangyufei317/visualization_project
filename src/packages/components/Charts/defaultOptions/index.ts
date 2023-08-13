import barOption from './bar.json'
import gaugeOption from './gauge.json'
import lineOption from './line.json'
import pieOption from './pie.json'
import radarOption from './radar.json'
import scatterOption from './scatter.json'
import moreOption from './more.json'
import { ChartCategoryEnum } from '..'

const options = {
    [ChartCategoryEnum.BAR]: barOption,
    [ChartCategoryEnum.GAUGE]: gaugeOption,
    [ChartCategoryEnum.LINE]: lineOption,
    [ChartCategoryEnum.PIE]: pieOption,
    [ChartCategoryEnum.RADAR]: radarOption,
    [ChartCategoryEnum.SCATTER]: scatterOption,
    [ChartCategoryEnum.MORE]: moreOption
}
export default options


