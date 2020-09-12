<template>
  <div class="it-progress-wrapper">
    <div class="it-progress-bar" :style="{
      height: height+'px'
      }">
      <div
        class="it-progress-line"
        :class="[
        infinite && 'it-progress-line--infinite'
      ]"
        :style="{
        width: infinite ? '' :  (progress + '%')
      }"
      >
        <it-tooltip
          v-if="!infinite"
          v-show="showTooltip"
          :style="{float: 'right', height: '100%'}"
          :permanent="!infinite"
          ref="tooltipRef"
          :placement="tooltip"
          :content="progress+'%'"
        >&nbsp;</it-tooltip>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue'
import { Positions } from '../../models'
import Tooltip from '../tooltip/ItTooltip.vue'

export default defineComponent({
  name: 'it-progressbar',
  props: {
    infinite: Boolean,
    progress: {
      type: Number,
      default: 0,
      validator: (val: number) => val >= 0 && val <= 100
    },
    height: { type: Number, default: 7, validator: (val: Number) => val > 0 },
    tooltip: {
      default: Positions.T,
      validator: (val: Positions) => [Positions.T, Positions.B].includes(val)
    },
    showTooltip: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const tooltipRef = ref<typeof Tooltip | null>(null)
    watch(
      () => props.tooltip,
      () => {
        if (!props.infinite) {
          tooltipRef.value!.setPopoverPosition()
        }
      }
    )

    watch(
      () => props.progress,
      () => {
        if (!props.infinite) {
          const ittt = setInterval(() => {
            tooltipRef.value!.setPopoverPosition()
          }, 20)
          setTimeout(() => {
            clearInterval(ittt)
          }, 200)
        }
      }
    )

    return {
      tooltipRef
    }
  }
})
</script>