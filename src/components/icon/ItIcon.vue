<template>
  <i
    class="material-icons"
    :class="[
      variant.root,
      {
        [variant.box]: box,
        'rounded-full': box && round,
        'material-icons-outlined': outlined,
      },
    ]"
  >
    <slot>{{ name ? name : '' }}</slot>
  </i>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { computed, defineComponent } from 'vue'
import { ITIconOptions } from '@/types/components/components'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'

export default defineComponent({
  name: Components.ITIcon,
  props: {
    ...getVariantPropsWithClassesList<ITIconOptions>(),
    name: { type: String, required: true },
    outlined: { type: Boolean, default: false },
    box: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
  },
  setup(props) {
    const variant = computed(() =>
      useVariants<ITIconOptions>(Components.ITIcon, props),
    )

    return {
      variant,
    }
  },
})
</script>
