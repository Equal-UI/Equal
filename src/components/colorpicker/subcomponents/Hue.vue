<template>
  <div :class="['it-hue', 'it-hue--horizontal']">
    <div
      class="it-hue-container"
      role="slider"
      :aria-valuenow="colors.hsl.h"
      aria-valuemin="0"
      aria-valuemax="360"
      ref="container"
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
  name: 'Hue',
  props: {
    modelValue: Object,
  },
  setup(props, { emit }) {
    const {
      container,
      colors,
      pullDirection,
      handleChange,
      handleMouseDown,
    } = hue(props, emit)

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

<style>
.it-hue {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 5%);
}
.it-hue--horizontal {
  background: linear-gradient(
    to right,
    #f00 0%,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00 100%
  );
}
.it-hue-container {
  cursor: pointer;
  margin: 0 6px;
  position: relative;
  height: 100%;
}
.it-hue-pointer {
  z-index: 2;
  height: 100%;
  position: absolute;
}
.it-hue-picker {
  height: 100%;
  cursor: ew-resize;
  width: 12px;
  border-radius: 2px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12);
  border: 2px solid #fff;
  transform: translate(-50%, -8%);
}
</style>
