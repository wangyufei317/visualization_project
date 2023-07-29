<template>
  <ContentBox
    class="go-content-charts"
    :class="{scoped: !getCharts}"
    title="组件"
    :depth="1"
    :backIcon="false"
  ></ContentBox>
</template>

<script setup lang="ts">
import { ContentBox } from '../ContentBox'
import { useAsideHook } from './hooks/useAside.hook'

const { getCharts, BarChartIcon, themeColor, selectOptions, selectValue, clickItemHandle, menuOptions } = useAsideHook()

</script>

<style>

</style>
