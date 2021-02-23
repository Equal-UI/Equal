<template>
  <span class="it-badge" :class="[square && 'it-badge--square']">
    <slot />
    <span
      v-show="show"
      class="it-badge-body"
      :class="[
        $slots.default && `it-badge-body--corner-${position}`,
        point && 'it-badge-body--point',
        square && 'it-badge-body--square',
        `it-badge-body--${type}`,
      ]"
      >{{ contentValue }}</span
    >
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Colors, Positions } from '@/models/enums'

export default defineComponent({
  name: 'it-badge',
  props: {
    type: {
      type: String,
      default: Colors.DANGER,
      validator: (value: Colors) =>
        [
          Colors.PRIMARY,
          Colors.SUCCESS,
          Colors.DANGER,
          Colors.WARNING,
        ].includes(value),
    },
    value: { type: [String, Number] },
    position: {
      type: String,
      default: Positions.TR,
      validator: (value: Positions) =>
        [Positions.TL, Positions.TR, Positions.BL, Positions.BR].includes(
          value,
        ),
    },
    show: { type: Boolean, default: true },
    point: { type: Boolean },
    square: { type: Boolean },
    maxValue: { type: Number },
  },
  setup(props) {
    const contentValue = computed(() => {
      if (props.point) {
        return
      }
      return props.value! > props.maxValue! ? `${props.maxValue}+` : props.value
    })

    return { contentValue }
  },
})
</script>
