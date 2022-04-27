<template>
  <div class="it-button-group">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITButtonGroupOptions } from '@/types/components/components'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'it-button-group',
  props: {
    ...getVariantPropsWithClassesList<ITButtonGroupOptions>(),
    vertical: { type: Boolean },
  },
  setup(props) {
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.vertical ? 'vertical' : 'horizontal',
      }
      return useVariants<ITButtonGroupOptions>(
        Components.ITButtonGroup,
        <VariantJSWithClassesListProps<ITButtonGroupOptions>>(
          (<unknown>customProps)
        ),
      )
    })

    return { variant }
  },
})
</script>
