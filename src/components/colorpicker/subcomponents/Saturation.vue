<template>
  <div
    ref="container"
    class="it-saturation"
    :style="{ background: bgColor }"
    @mousedown="handleMouseDown"
    @touchmove="handleChange"
    @touchstart="handleChange"
    @touchend="handleMouseUp"
  >
    <div class="it-saturation--white"></div>
    <div class="it-saturation--black"></div>
    <transition name="drop-top">
      <div
        v-show="showTooltip"
        class="it-color-tooltip"
        :style="{
          top: pointerTop - 60 + '%',
          left: pointerLeft - 14 + '%',
          'background-color': colors.hex,
        }"
      ></div>
    </transition>
    <div
      class="it-saturation-pointer"
      :style="{ top: pointerTop + '%', left: pointerLeft + '%' }"
    >
      <div
        class="it-saturation-circle"
        :style="{ 'background-color': colors.hex }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { TColorData } from '../types'
import { saturation } from '../hooks'

export default defineComponent({
  name: 'saturation',
  props: {
    modelValue: { type: Object as PropType<TColorData>, required: true },
    tooltip: Boolean,
  },
  setup(props, { emit }) {
    const {
      showTooltip,
      colors,
      container,
      handleChange,
      handleMouseDown,
      handleMouseUp,
    } = saturation(props, emit)

    const bgColor = computed(() => `hsl(${colors.value.hsv.h}, 100%, 50%)`)
    const pointerTop = computed(() => -(colors.value.hsv.v * 100) + 100)
    const pointerLeft = computed(() => colors.value.hsv.s * 100)

    return {
      showTooltip,
      colors,
      container,
      bgColor,
      pointerTop,
      pointerLeft,
      handleChange,
      handleMouseDown,
      handleMouseUp,
    }
  },
})
</script>
