<template>
  <div class="it-alpha">
    <div class="it-alpha-checkboard-wrap">
      <checkboard></checkboard>
    </div>
    <div class="it-alpha-gradient" :style="{ background: gradientColor }"></div>
    <div
      ref="container"
      class="it-alpha-container"
      @mousedown="handleMouseDown"
      @touchmove="handleChange"
      @touchstart="handleChange"
    >
      <div class="it-alpha-pointer" :style="{ left: colors.a * 100 + '%' }">
        <div class="it-alpha-picker"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import checkboard from './Checkboard.vue'
import { alpha } from '../hooks'

export default defineComponent({
  name: 'alpha',
  components: {
    checkboard,
  },
  props: {
    modelValue: Object,
  },
  setup(props, { emit }) {
    const { colors, container, handleChange, handleMouseDown, handleMouseUp } =
      alpha(props, emit)

    const gradientColor = computed(() => {
      const { r, g, b } = colors.value.rgba
      const rgbStr = [r, g, b].join(',')
      return (
        'linear-gradient(to right, rgba(' +
        rgbStr +
        ', 0) 0%, rgba(' +
        rgbStr +
        ', 1) 100%)'
      )
    })

    return {
      colors,
      gradientColor,
      container,
      handleChange,
      handleMouseDown,
      handleMouseUp,
    }
  },
})
</script>
