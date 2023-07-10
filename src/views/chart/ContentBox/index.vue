<template>
  <div class="go-content-box" :class="[`bg-depth${depth}`, flex && 'flex']">
    <div v-if="showTop" class="top go-mt-0 go-flex-no-wrap">
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  depth: { // 背景深度
    type: Number,
    default: 1
  },
  flex: {
    type: Boolean,
    default: false
  },
  showTop: {
    type: Boolean,
    default: true
  },
  showBottom: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.go-content-box{
  height: calc(100vh - #{$--header-height});
  margin: 1px;
  margin-bottom: 0;
  &.bg-depth0 {
    @include fetch-bg-color('background-color1');

    .bottom,
    .top {
      @include fetch-bg-color('background-color1');
    }
  }
}
</style>
