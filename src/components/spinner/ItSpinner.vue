<template>
  <div :class="variant.root" role="status"></div>
</template>

<script lang="ts">
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITSpinnerOptions } from '@/types/components/components'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: Components.ITSpinner,
  props: { ...getVariantPropsWithClassesList<ITSpinnerOptions>() },
  setup(props) {
    const variant = computed(() =>
      useVariants<ITSpinnerOptions>(
        Components.ITSpinner,
        <VariantJSWithClassesListProps<ITSpinnerOptions>>props,
      ),
    )

    return { variant }
  },
})
</script>
