<template>
  <div aria-label="Color picker" class="it-colorpicker">
    <div class="it-colorpicker-saturation-wrap">
      <saturation
        v-model="colors"
        :tooltip="showTooltip"
        @change="colorChange"
      ></saturation>
    </div>
    <div class="it-colorpicker-controls">
      <div class="it-colorpicker-sliders">
        <div class="it-colorpicker-hue-wrap">
          <hue
            v-model="colors"
            :class="{ 'it-colorpicker-bottom': disableAlpha }"
            @change="colorChange"
          ></hue>
        </div>
        <div v-if="!disableAlpha" class="it-colorpicker-alpha-wrap">
          <alpha v-model="colors" @change="colorChange"></alpha>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ColorInput } from 'tinycolor2'

import saturation from './subcomponents/Saturation.vue'
import hue from './subcomponents/Hue.vue'
import alpha from './subcomponents/Alpha.vue'
import { colorpicker } from './hooks'

export default defineComponent({
  name: 'it-colorpicker',
  components: {
    saturation,
    hue,
    alpha,
  },
  props: {
    disableAlpha: {
      type: Boolean,
      default: false,
    },
    showTooltip: {
      type: Boolean,
      default: false,
    },
    value: {
      default: '#000',
      type: [Object, String] as PropType<ColorInput>,
    },
  },
  setup(props, { emit }) {
    const { colors, colorChange } = colorpicker(props, emit)

    return {
      colors,
      colorChange,
    }
  },
})
</script>
