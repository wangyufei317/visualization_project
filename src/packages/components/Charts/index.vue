<template>
    <div :ref="chartRef" style="width: 100%; height: 100%;"></div>
</template>
<script setup lang="ts">
    import * as echarts from 'echarts'
    import { ref, onMounted, PropType } from 'vue'
    import { ChartCategoryEnum } from '.'
    import merge from 'lodash/merge'
    import Config from './config'
    import { useCanvasInitOptions } from '@/hooks/useCanvasInitOptions.hook'

    const props = defineProps({
        themeSetting: {
            type: Object,
            required: true
        },
        themeColor: {
            type: Object,
            required: true
        },
        chartType: {
            type: String as PropType<ChartCategoryEnum>,
            default: ChartCategoryEnum.BAR,
            required: true,
        },
        chartConfig: {
            type: Object as PropType<Config>,
            required: true
        }
    })

    const chartRef = ref()

    const initChart = (option: any) => {
        const myChart = echarts.init(chartRef.value)
        myChart.setOption(option)
    }
    onMounted(() => {
        const initOptions = useCanvasInitOptions(props.chartConfig.option, props.themeSetting)
        const option = merge({}, props.chartConfig.option, props.themeSetting)
        initChart(option)
    })

</script>