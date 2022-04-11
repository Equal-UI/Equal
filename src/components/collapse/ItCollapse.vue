<template>
  <div :class="variant.root">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITCollapseOptions } from '@/types/components/components'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: Components.ITCollapse,
  props: { ...getVariantPropsWithClassesList<ITCollapseOptions>() },
  setup(props) {
    const variant = computed(() => {
      return useVariants<ITCollapseOptions>(
        Components.ITCollapse,
        <VariantJSWithClassesListProps<ITCollapseOptions>>props,
      )
    })

    return { variant }
  },
})
</script>
