<template>
  <div class="it-progress-wrapper">
    <div
      class="it-progress-bar"
      :class="[infinite && 'it-progress-bar--infinite']"
    >
      <div
        class="it-progress-line"
        :style="!infinite && { width: `${progress}%` }"
      >
        <!-- <it-tooltip
          :class="[variant.controller, 'absolute right-0']"
          ref="tooltipRef"
          :content="progress + '%'"
          permanent
        > -->
        <div
          ref="controller"
          class="absolute right-0 h-full w-px"
          v-tooltip="tooltipValue"
        ></div>
        <!-- </it-tooltip> -->
        <!-- <span
          v-if="showTooltip && !infinite"
          class="it-progress-tooltip"
          :class="[`it-progress-tooltip--${tooltip}`]"
          v-html="`${progress}%`"
        /> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRef } from 'vue'
import { Components, Positions } from '@/models/enums'
import { useVariants } from '@/hooks/useVariants'
import { ITProgressBarOptions } from '@/types/components/components'
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
      useVariants<ITProgressBarOptions>(Components.ITProgressbar, props),
    )

    const disabledTooltip = computed(() => {
      return props.infinite || !props.showTooltip
    })

    const tooltipValue = {
      position: toRef(props, 'tooltip'),
      content: toRef(props, 'progress'),
      disabled: disabledTooltip,
      permanent: !disabledTooltip.value,
      autoUpdate: true,
    }

    return { variant, tooltipValue }
  },
})
</script>

<style>
@keyframes infinite-load {
  0% {
    width: 20%;
    margin-left: -20%;
  }

  100% {
    width: 40%;
    margin-left: 100%;
  }
}

.inf-load {
}
</style>
