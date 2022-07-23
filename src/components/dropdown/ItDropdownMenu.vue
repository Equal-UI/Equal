<template>
  <div :class="variant.menu">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITDropdownOptions } from '@/types/components/components'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'it-dropdown-menu',
  props: { ...getVariantPropsWithClassesList<ITDropdownOptions>() },
  setup(props) {
    const variant = computed(() =>
      useVariants<ITDropdownOptions>(Components.ITDropdown, props),
    )

    return { variant }
  },
})
</script>
