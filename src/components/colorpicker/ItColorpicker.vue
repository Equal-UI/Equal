<template>
  <div aria-label="Color picker" class="it-colorpicker">
    <div class="it-colorpicker-saturation-wrap">
      <saturation
        v-model="colors"
        :hue="hue"
        :tooltip="showTooltip"
        @change="colorChange"
      ></saturation>
    </div>
    <div class="it-colorpicker-controls">
      <div class="it-colorpicker-sliders">
        <div class="it-colorpicker-hue-wrap">
          <hue
            :hue="hue"
            :class="{ 'it-colorpicker-bottom': disableAlpha }"
            @change="changeHue"
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

import saturation from './subcomponents/Saturation.vue'
import hue from './subcomponents/Hue.vue'
import alpha from './subcomponents/Alpha.vue'
import { colorpicker } from './hooks'
import { AnyColor, Colord } from 'colord'

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
      type: [Object, String] as PropType<AnyColor | Colord>,
    },
  },
  setup(props, { emit }) {
    const { colors, colorChange, changeHue, hue } = colorpicker(props, emit)

    return {
      colors,
      colorChange,
      changeHue,
      hue,
    }
  },
})
</script>
