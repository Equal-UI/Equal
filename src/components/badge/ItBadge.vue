<template>
  <span :class="variant.root">
    <slot />
    <Transition v-bind="variant.transitions?.scale">
      <span
        v-if="show"
        :class="[
          variant.body,
          {
            [variant[position]]: $slots.default,
            [variant.point]: point,
            [variant.square]: square,
          },
        ]"
      >
        <slot name="content">{{ contentValue }}</slot>
      </span>
    </Transition>
  </span>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Components, Positions } from '@/models/enums'
import { ALLOWED_POSITIONS } from '@/components/badge/constants'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { ITBadgeOptions } from '@/types/components/components'
import { useVariants } from '@/hooks/useVariants'

export default defineComponent({
  name: Components.ITBadge,
  props: {
    ...getVariantPropsWithClassesList<ITBadgeOptions>(),
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
  setup(props) {
    const variant = computed(() =>
      useVariants<ITBadgeOptions>(Components.ITBadge, props),
    )

    const contentValue = computed(() => {
      if (props.point || !props.value) return
      return props.maxValue !== null
        ? Number(props.value) > props.maxValue
          ? `${props.maxValue}+`
          : props.value
        : props.value
    })

    return { contentValue, variant }
  },
})
</script>
