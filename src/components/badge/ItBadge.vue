<template>
  <span class="it-badge" :class="rootClasses">
    <slot />
    <span v-if="show" class="it-badge-body" :class="bodyClasses">
      {{ contentValue }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Colors, Positions } from '@/models/enums'
import { ALLOWED_COLORS, ALLOWED_POSITIONS } from '@/components/badge/constants'

export default defineComponent({
  name: 'it-badge',
  props: {
    type: {
      type: String,
      default: Colors.DANGER,
      validator: (value: Colors) => ALLOWED_COLORS.includes(value),
    },
    position: {
      type: String,
      default: Positions.TR,
      validator: (value: Positions) => ALLOWED_POSITIONS.includes(value),
    },
    value: { type: [String, Number], default: null },
    maxValue: { type: Number, default: null },
    show: { type: Boolean, default: true },
    point: { type: Boolean },
    square: { type: Boolean },
  },
  setup(props, { slots }) {
    const contentValue = computed(() => {
      if (props.point || !props.value) return
      return props.maxValue !== null
        ? Number(props.value) > props.maxValue
          ? `${props.maxValue}+`
          : props.value
        : props.value
    })

    const rootClasses = computed(() => ({
      'it-badge--square': props.square,
    }))

    const bodyClasses = computed(() => ({
      ...(slots.default
        ? { [`it-badge-body--corner-${props.position}`]: true }
        : null),
      'it-badge-body--square': props.square,
      'it-badge-body--point': props.point,
      [`it-badge-body--${props.type}`]: true,
    }))

    return { contentValue, rootClasses, bodyClasses }
  },
})
</script>
