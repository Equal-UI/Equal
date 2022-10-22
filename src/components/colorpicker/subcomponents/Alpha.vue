<template>
  <div :class="variant.alphaCheckboard" :style="bgStyle"></div>
  <div
    :class="variant.alphaCheckboard"
    :style="{ background: gradientColor }"
  ></div>
  <div
    ref="container"
    :class="variant.alphaWrap"
    @mousedown="handleMouseDown"
    @touchmove="handleChange"
    @touchstart="handleChange"
  >
    <div
      tabindex="0"
      @keydown.left.prevent="toKeyHandler('left', $event)"
      @keydown.right.prevent="toKeyHandler('right', $event)"
      :class="variant.huePointer"
      :style="{ left: colors.toRgb().a * 100 + '%' }"
    ></div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive, ref } from 'vue'
import { alpha } from '../hooks/alpha'
import { Colord } from 'colord'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { ITColorpickerOptions } from '@/types/components/components'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'

export default defineComponent({
  name: 'alpha',
  emits: ['change'],
  props: {
    ...getVariantPropsWithClassesList<ITColorpickerOptions>(),
    modelValue: { type: Object as PropType<Colord>, required: true },
  },
  setup(props, { emit }) {
    const variant = computed(() =>
      useVariants<ITColorpickerOptions>(Components.ITColorpicker, props),
    )

    const {
      colors,
      container,
      toKeyHandler,
      handleChange,
      handleMouseDown,
      handleMouseUp,
    } = alpha(props, emit)

    const gradientColor = computed(() => {
      const { r, g, b } = colors.value.toRgb()
      const rgbStr = [r, g, b].join(',')
      return (
        'linear-gradient(to right, rgba(' +
        rgbStr +
        ', 0) 0%, rgba(' +
        rgbStr +
        ', 1) 100%)'
      )
    })

    const bgStyle = reactive({
      'background-size': 'contain',
      'background-color': 'white',
      'background-image':
        'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')',
      'box-shadow': 'inset 0 0 0 1px #00000052',
    })

    return {
      colors,
      gradientColor,
      container,
      handleChange,
      handleMouseDown,
      handleMouseUp,
      toKeyHandler,
      bgStyle,
      variant,
    }
  },
})
</script>
