<template>
    <div id="jsMonacoEditor" :ref="editRef"></div>
</template>
<script lang="ts" setup>
import * as monaco from 'monaco-editor'
import { editor } from 'monaco-editor/esm/vs/editor/editor.api.d'
import { onMounted, PropType, reactive, ref } from 'vue'
import { ChartCategoryEnum, chartDefaultOptionByType } from '.'
import { debounce } from 'lodash';

const props = defineProps({
    chartType: {
        type: String as PropType<ChartCategoryEnum>,
        required: true,
        default: ChartCategoryEnum.BAR
    },
    code: {
        type: String,
        default: '',
        required: true
    }
})

const codeChangeEmit = defineEmits(['codeChange'])
let monacoEditor = reactive<{
    value: null | editor.IStandaloneCodeEditor
}>({
    value: null
})
const editRef = ref()

/**
 * 初始化编辑器
 * https://www.cnblogs.com/linmt/p/16881332.html
 */
const init = () => {
    if (monacoEditor.value) {
        return
    }
    monacoEditor.value = monaco.editor.create(editRef.value, {
        theme: 'vs', // 主题
        value: props.code || chartDefaultOptionByType[props.chartType].toString(),
        language: 'javascript',
        folding: true, // 是否折叠
        foldingHighlight: true, // 折叠等高线
        foldingStrategy: 'indentation', // 折叠方式  auto | indentation
        showFoldingControls: 'always', // 是否一直显示折叠 always | mouseover
        disableLayerHinting: true, // 等宽优化
        emptySelectionClipboard: false, // 空选择剪切板
        selectionClipboard: false, // 选择剪切板
        automaticLayout: true, // 自动布局
        codeLens: false, // 代码镜头
        scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
        colorDecorators: true, // 颜色装饰器
        accessibilitySupport: 'off', // 辅助功能支持  "auto" | "off" | "on"
        lineNumbers: 'on', // 行号 取值： "on" | "off" | "relative" | "interval" | function
        lineNumbersMinChars: 5, // 行号最小字符   number
        readOnly: false, // 是否只读  取值 true | false
        minimap: {
          enabled: true // 是否启用预览图
        } // 预览图设置
    })

    // 防抖
    const changeValueFn = debounce(() => {
        changeValue();
    })
    monacoEditor.value.onDidChangeModelContent(e => {
        changeValueFn();
    })
}
const changeValue = () => {
    codeChangeEmit('codeChange', monacoEditor.value?.getValue())
}

onMounted(() => {
    init();
})
</script>