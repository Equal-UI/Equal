<template>
  <div
    :class="[
      variant.root,
      {
        [variant.vertical]: vertical,
      },
    ]"
    role="separator"
  ></div>
</template>

<script lang="ts">
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums/Components'
import { ITDividerOptions } from '@/types/components/components'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: Components.ITDivider,
  props: {
    ...getVariantPropsWithClassesList<ITDividerOptions>(),
    vertical: { type: Boolean },
  },
  setup(props) {
    const variant = computed(() =>
      useVariants<ITDividerOptions>(Components.ITDivider, props),
    )

    return { variant }
  },
})
</script>
