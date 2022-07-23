<template>
  <div
    :class="variant.alphaCheckboard"
    :style="{
      background:
        'linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)',
      'box-shadow': 'inset 0 0 0 1px #00000052',
    }"
  ></div>
  <div
    ref="container"
    :class="variant.hueWrap"
    role="slider"
    :aria-valuenow="hue"
    aria-valuemin="0"
    aria-valuemax="360"
    @mousedown="handleMouseDown"
    @touchmove="handleChange"
    @touchstart="handleChange"
  >
    <div
      :class="variant.huePointer"
      :style="{ left: pointerLeft, 'background-color': cursorColor }"
      role="presentation"
    ></div>
  </div>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITColorpickerOptions } from '@/types/components/components'
import { computed, defineComponent } from 'vue'
import { hue } from '../hooks/hue'

export default defineComponent({
  name: 'hue',
  emits: ['change'],
  props: {
    ...getVariantPropsWithClassesList<ITColorpickerOptions>(),
    hue: { type: Number, default: 0 },
  },
  setup(props, { emit }) {
    const variant = computed(() =>
      useVariants<ITColorpickerOptions>(Components.ITColorpicker, props),
    )

    const { container, colors, pullDirection, handleChange, handleMouseDown } =
      hue(props, emit)

    const pointerLeft = computed(() => {
      if (props.hue === 360 && pullDirection.value === 'right') {
        return '100%'
      }
      return (props.hue * 100) / 360 + '%'
    })

    const cursorColor = computed(() => `hsl(${props.hue}, 100%, 50%)`)

    return {
      container,
      colors,
      handleChange,
      handleMouseDown,
      cursorColor,
      pointerLeft,
      variant,
    }
  },
})
</script>
