<template>
  <div class="it-progress-wrapper">
    <div
      class="it-progress-bar"
      :class="[infinite && 'it-progress-bar--infinite']"
      :style="{ height: `${height}px` }"
    >
      <div
        class="it-progress-line"
        :style="!infinite && { width: `${progress}%` }"
      >
        <span
          v-if="showTooltip && !infinite"
          class="it-progress-tooltip"
          :class="[`it-progress-tooltip--${tooltip}`]"
          v-html="`${progress}%`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Components, Positions } from '@/models/enums'
import { useVariants } from '@/hooks/useVariants'
import {
  ITProgressBarOptions,
  ITRadioOptions,
} from '@/types/components/components'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'

export default defineComponent({
  name: Components.ITProgressbar,
  props: {
    ...getVariantPropsWithClassesList<ITProgressBarOptions>(),
    infinite: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Number,
      default: 0,
      validator: (val: number) => val >= 0 && val <= 100,
    },
    height: { type: Number, default: 7, validator: (val: number) => val > 0 },
    tooltip: {
      default: Positions.T,
      validator: (val: Positions) => [Positions.T, Positions.B].includes(val),
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const variant = computed(() =>
      useVariants<ITRadioOptions>(Components.ITRadio, props),
    )
    return { variant }
  },
})
</script>
