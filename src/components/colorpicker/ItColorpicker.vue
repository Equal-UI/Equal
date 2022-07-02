<template>
  <div aria-label="Color picker" :class="variant.root">
    <div :class="variant.saturationWrap">
      <saturation
        v-model="colors"
        :hue="hue"
        :tooltip="showTooltip"
        @change="colorChange"
      ></saturation>
    </div>

    <div :class="variant.sliderWrap">
      <hue :hue="hue" @change="changeHue"></hue>
    </div>
    <div v-if="!disableAlpha" :class="variant.sliderWrap">
      <alpha v-model="colors" @change="colorChange"></alpha>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

import saturation from './subcomponents/Saturation.vue'
import hue from './subcomponents/Hue.vue'
import alpha from './subcomponents/Alpha.vue'
import { colorpicker } from './hooks'
import { AnyColor, Colord } from 'colord'
import { Components } from '@/models/enums'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { ITColorpickerOptions } from '@/types/components/components'
import { useVariants } from '@/hooks/useVariants'

export default defineComponent({
  name: Components.ITColorpicker,
  components: {
    saturation,
    hue,
    alpha,
  },
  props: {
    ...getVariantPropsWithClassesList<ITColorpickerOptions>(),
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
    const variant = computed(() =>
      useVariants<ITColorpickerOptions>(Components.ITColorpicker, props),
    )
    const { colors, colorChange, changeHue, hue } = colorpicker(props, emit)

    return {
      colors,
      colorChange,
      changeHue,
      hue,
      variant,
    }
  },
})
</script>
