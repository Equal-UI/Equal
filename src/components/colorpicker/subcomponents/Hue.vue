<template>
  <div class="it-hue it-hue--horizontal">
    <div
      ref="container"
      class="it-hue-container"
      role="slider"
      :aria-valuenow="colors.hsl.h"
      aria-valuemin="0"
      aria-valuemax="360"
      @mousedown="handleMouseDown"
      @touchmove="handleChange"
      @touchstart="handleChange"
    >
      <div
        class="it-hue-pointer"
        :style="{ left: pointerLeft }"
        role="presentation"
      >
        <div
          class="it-hue-picker"
          :style="{ 'background-color': cursorColor }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { hue } from '../hooks'

export default defineComponent({
  name: 'hue',
  props: {
    modelValue: Object,
  },
  setup(props, { emit }) {
    const { container, colors, pullDirection, handleChange, handleMouseDown } =
      hue(props, emit)

    const pointerLeft = computed(() => {
      if (colors.value.hsl.h === 0 && pullDirection.value === 'right') {
        return '100%'
      }
      return (colors.value.hsl.h * 100) / 360 + '%'
    })

    const cursorColor = computed(() => `hsl(${colors.value.hsv.h}, 100%, 50%)`)

    return {
      container,
      colors,
      handleChange,
      handleMouseDown,
      cursorColor,
      pointerLeft,
    }
  },
})
</script>
