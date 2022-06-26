<template>
  <div
    :class="[
      variant.root,
      { invisible: !show, '!scale-100 opacity-100': show, ...posClasses },
    ]"
  >
    <div :class="variant.body">
      <slot name="content">
        <div>{{ content }}</div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, Ref, ref } from 'vue'
import { Components, Positions } from '@/models/enums'
import { useVariants } from '@/hooks/useVariants'
import { ITTooltipOptions } from '@/types/components/components'

export default defineComponent({
  props: {
    disabled: Boolean,
    hoverable: Boolean,
    // placement: {
    //   type: String,
    //   default: Positions.T,
    //   validator: (value: Positions) => Object.values(Positions).includes(value),
    // },
    permanent: Boolean,
    autoposition: { type: Boolean, default: true },
  },
  setup() {
    const content = inject<Ref<string>>('content', ref(''))
    const placement = inject<Ref<Positions>>(
      'placement',
      ref<Positions>(Positions.T),
    )

    const show = inject<Ref<boolean>>('show', ref(false))
    const variant = computed(
      () => useVariants<ITTooltipOptions>(Components.ITTooltip), // TODO: props from directive
    )

    const posClasses = computed(() => {
      const pos = placement.value
      return {
        '-mt-3 origin-bottom': pos === Positions.T,
        'mt-3 origin-top': pos === Positions.B,
        '-ml-3 origin-right': pos === Positions.L,
        'ml-3 origin-left': pos === Positions.R,
      }
    })

    return { show, content, posClasses, variant }
  },
})
</script>
