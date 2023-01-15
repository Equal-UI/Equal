<template>
  <Transition v-bind="variant.transitions?.[placementTransition]">
    <div v-show="show" :class="variant.root">
      <div :class="variant.body">
        <slot>
          <div>{{ content }}</div>
        </slot>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components, Positions } from '@/models/enums'
import { ITTooltipOptions } from '@/types/components/components'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  props: {
    ...getVariantPropsWithClassesList<ITTooltipOptions>(),
    hoverable: Boolean,
    placement: {
      type: String,
      default: Positions.T,
      validator: (value: Positions) => Object.values(Positions).includes(value),
    },
    permanent: Boolean,
    content: [String, Number],
    show: Boolean,
  },
  setup(props) {
    const variant = computed(() =>
      useVariants<ITTooltipOptions>(Components.ITTooltip, props),
    )
    const placementTransition = computed(() => {
      const [first, ...rest] = props.placement
      return ['fadeTo', first.toUpperCase(), ...rest].join('')
    })

    return { variant, placementTransition }
  },
})
</script>
