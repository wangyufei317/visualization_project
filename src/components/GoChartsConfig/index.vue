<template>
    <div id="jsMonacoEditor" ref="main"></div>
</template>
<script lang="ts" setup>
import * as monaco from 'monaco-editor'
import { PropType, reactive } from 'vue'
import { ChartCategoryEnum, chartDefaultOptionByType } from '.'

defineProps({
    chartType: {
        type: String as PropType<ChartCategoryEnum>,
        required: true,
        default: ChartCategoryEnum.BAR
    },
    code: {
        type: String,
        default: chartDefaultOptionByType[ChartCategoryEnum.BAR]
    }
})

const codeChangeEmit = defineEmits(['codeChange'])
const monacoEditor = reactive({
    value: null
})

/**
 * 初始化编辑器
 */
const init = () => {
    if (monacoEditor.value) {
        return
    }
    monacoEditor.value = monaco.editor.create
}
</script>