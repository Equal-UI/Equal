<template>
  <div
    class="it-saturation"
    :style="{ background: bgColor }"
    ref="container"
    @mousedown="handleMouseDown"
    @touchmove="handleChange"
    @touchstart="handleChange"
    @touchend="handleMouseUp"
  >
    <div class="it-saturation--white"></div>
    <div class="it-saturation--black"></div>
    <transition name="drop-top">
      <div
        class="it-color-tooltip"
        v-show="showTooltip"
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
import { IColorData } from '../types'
import { saturation } from '../hooks'

export default defineComponent({
  name: 'Saturation',
  props: {
    modelValue: { type: Object as PropType<IColorData>, required: true },
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

<style>
.it-saturation,
.it-saturation--white,
.it-saturation--black {
  border-radius: 4px 4px 0 0;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.it-saturation {
  border-bottom: 7px solid black;
}

.it-color-tooltip {
  width: 50px;
  height: 50px;
  position: absolute;
  box-shadow: 0px 0px 0px 0.6px rgba(0, 0, 0, 0.15),
    0px 1.5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border: 3px solid #fff;
}

.it-saturation--white {
  background: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 5%);
}
.it-saturation--black {
  background: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
}
.it-saturation-pointer {
  position: absolute;
}
.it-saturation-circle {
  cursor: head;
  width: 10px;
  height: 10px;
  box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0, 0, 0, 0.3),
    0 0 1px 2px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
</style>
