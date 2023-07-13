<template>
  <div>
    <n-color-picker
      v-model:value="primaryColor"
    />
    <div>
      <n-button>Default</n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button strong secondary type="primary"> Primary </n-button>
      <n-button tertiary type="primary"> Primary </n-button>
      <n-button quaternary type="primary"> Primary </n-button>
      <n-button type="primary" ghost> Primary </n-button>
    </div>
    <div>
      <p v-for="color in generateColors" :key="color" :style="{color}">{{ color }}</p>
    </div>
  </div>
</template>

<script  setup lang="ts">
import { ref, watch } from 'vue'
import { generate } from '@ant-design/colors'
import { Evt, BaseEventName } from '@/events'

const primaryColor = ref('#52c41a')
const generateColors = ref<string[]>([])

const changeTheme = () => {
  generateColors.value = generate(primaryColor.value)
  const commonObj = {
    primaryColor: generateColors.value[5],
    primaryColorHover: generateColors.value[4],
    primaryColorSuppl: generateColors.value[4],
    primaryColorPressed: generateColors.value[6]
  }
  Evt.Base.emit(BaseEventName.ChangeTheme, commonObj)
}

watch(primaryColor, changeTheme)

</script>
