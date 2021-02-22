<template>
  <div class="it-alpha">
    <div class="it-alpha-checkboard-wrap">
      <checkboard></checkboard>
    </div>
    <div class="it-alpha-gradient" :style="{ background: gradientColor }"></div>
    <div
      class="it-alpha-container"
      ref="container"
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
  name: 'Alpha',
  props: {
    modelValue: Object,
  },
  components: {
    checkboard,
  },
  setup(props, { emit }) {
    const {
      colors,
      container,
      handleChange,
      handleMouseDown,
      handleMouseUp,
    } = alpha(props, emit)

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

<style>
.it-alpha {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.it-alpha-checkboard-wrap {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
  border-radius: 0 0 4px 4px;
}
.it-alpha-gradient {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  border-radius: 0 0 4px 4px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 5%);
}
.it-alpha-container {
  cursor: pointer;
  position: relative;
  z-index: 2;
  height: 100%;
  margin: 0 6px;
}
.it-alpha-pointer {
  z-index: 2;
  position: absolute;
  height: 100%;
}
.it-alpha-picker {
  height: 100%;
  cursor: ew-resize;
  /* margin-top: 1px; */
  width: 12px;
  border-radius: 2px;

  /* height: 8px; */
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.12);
  /* background: #fff; */
  border: 2px solid #fff;
  transform: translate(-50%, -7%);
}
</style>
