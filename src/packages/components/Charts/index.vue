<template>
    <div :ref="chartRef" style="width: 100%; height: 100%;"></div>
</template>
<script setup lang="ts">
    import * as echarts from 'echarts'
    import { ref, onMounted, PropType } from 'vue'
    import { ChartCategoryEnum } from './index.d'

    const chartRef = ref()

    const initChart = () => {
        const myChart = echarts.init(chartRef.value)
        myChart.setOption()
    }
    onMounted(() => initChart())

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
            type: Object as PropType<config>,
            required: true
        }
    })
</script>