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
          top: pointerTop - 55 + '%',
          left: pointerLeft - 13 + '%',
          'background-color': colors.toHex(),
        }"
      ></div>
    </transition>
    <div
      class="it-saturation-pointer"
      :style="{ top: pointerTop + '%', left: pointerLeft + '%' }"
    >
      <div
        class="it-saturation-circle"
        :style="{ 'background-color': colors.toHex() }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { saturation } from '../hooks/saturation'
import { Colord } from 'colord'

export default defineComponent({
  name: 'saturation',
  props: {
    modelValue: { type: Object as PropType<Colord>, required: true },
    tooltip: Boolean,
    hue: { type: Number },
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

    const bgColor = computed(() => `hsl(${props.hue}, 100%, 50%)`)
    const pointerTop = computed(() => -colors.value.toHsv().v + 100)
    const pointerLeft = computed(() => colors.value.toHsv().s)

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
