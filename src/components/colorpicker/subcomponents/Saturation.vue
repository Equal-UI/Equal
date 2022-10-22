<template>
  <div
    ref="container"
    :class="variant.saturationRoot"
    :style="{ background: bgColor, 'margin-bottom': '-1px' }"
    @mousedown="handleMouseDown"
    @touchmove="handleChange"
    @touchstart="handleChange"
    @touchend="handleMouseUp"
  >
    <div
      :class="variant.saturationRoot"
      :style="{
        background:
          'linear-gradient(to top, #000, rgba(0, 0, 0, 0)), linear-gradient(to right, #fff, rgba(255, 255, 255, 0))',
        'box-shadow': 'inset 0 0 0 1px #00000052',
      }"
    ></div>
    <div
      v-show="showTooltip"
      :class="variant.tooltip"
      :style="{
        top: pointerTop - 60 + '%',
        left: pointerLeft - 13 + '%',
        'background-color': colors.toHex(),
      }"
    ></div>
    <div
      :class="variant.saturationPointer"
      tabindex="0"
      @keydown.left.prevent="toKeyHandler('left', $event)"
      @keydown.right.prevent="toKeyHandler('right', $event)"
      @keydown.up.prevent="toKeyHandler('up', $event)"
      @keydown.down.prevent="toKeyHandler('down', $event)"
      :style="{
        top: pointerTop + '%',
        left: pointerLeft + '%',
        'background-color': colors.toHex(),
      }"
    ></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { saturation } from '../hooks/saturation'
import { Colord } from 'colord'
import { useVariants } from '@/hooks/useVariants'
import { ITColorpickerOptions } from '@/types/components/components'
import { Components } from '@/models/enums/Components'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'

export default defineComponent({
  name: 'saturation',
  props: {
    ...getVariantPropsWithClassesList<ITColorpickerOptions>(),
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
      toKeyHandler,
      pointerTop,
      pointerLeft,
    } = saturation(props, emit)

    const variant = computed(() =>
      useVariants<ITColorpickerOptions>(Components.ITColorpicker, props),
    )

    const bgColor = computed(() => `hsl(${props.hue}, 100%, 50%)`)

    return {
      showTooltip,
      colors,
      container,
      bgColor,
      pointerTop,
      pointerLeft,
      handleChange,
      toKeyHandler,
      handleMouseDown,
      handleMouseUp,
      variant,
    }
  },
})
</script>
