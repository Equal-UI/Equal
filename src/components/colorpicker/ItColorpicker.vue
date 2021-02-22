<template>
  <div aria-label="Color picker" class="it-colorpicker">
    <div class="it-colorpicker-saturation-wrap">
      <saturation
        :tooltip="showTooltip"
        v-model="colors"
        @change="colorChange"
      ></saturation>
    </div>
    <div class="it-colorpicker-controls">
      <div class="it-colorpicker-sliders">
        <div class="it-colorpicker-hue-wrap">
          <hue v-model="colors" @change="colorChange"></hue>
        </div>
        <div class="it-colorpicker-alpha-wrap" v-if="!disableAlpha">
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
import checkboard from './subcomponents/Checkboard.vue'
import {colorpicker} from './hooks'

export default defineComponent({
  name: 'it-colorpicker',
  components: {
    saturation,
    hue,
    alpha,
    checkboard,
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

<style>
.it-colorpicker {
  position: relative;
  width: 200px;
  box-sizing: initial;
  background: #fff;
  border-radius: 4px;
}
.it-colorpicker-saturation-wrap {
  width: 100%;
  padding-bottom: 75%;
  position: relative;
}
.it-colorpicker-controls {
  display: flex;
}
.it-colorpicker-sliders {
  flex: 1;
}
.it-colorpicker-hue-wrap {
  position: relative;
  height: 24px;
}
.it-colorpicker-alpha-wrap {
  position: relative;
  height: 24px;
}
.it-colorpicker-color-wrap {
  width: 24px;
  height: 24px;
  position: relative;
  margin-left: 4px;
  border-radius: 3px;
}
.it-colorpicker-active-color {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 2px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15),
    inset 0 0 4px rgba(0, 0, 0, 0.25);
  z-index: 2;
}
.it-colorpicker-color-wrap .it-checkerboard {
  background-size: auto;
}
.it-colorpicker-field {
  display: flex;
}
.it-colorpicker-field .it-input__input {
  width: 90%;
  padding: 4px 0 3px 10%;
  border: none;
  box-shadow: inset 0 0 0 1px #ccc;
  font-size: 10px;
}
.it-colorpicker-field .it-input__label {
  display: block;
  text-align: center;
  font-size: 11px;
  color: #222;
  text-transform: capitalize;
}
.it-colorpicker__disable-alpha .it-colorpicker-color-wrap {
  height: 10px;
}
</style>