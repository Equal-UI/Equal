<template>
  <span
    :class="[
      variant.root,
      {
        [variant.filled]: filled,
      },
    ]"
  >
    <slot></slot>
    <it-icon
      :variants="{ tagClose: { root: variant.closeIcon } }"
      variant="tagClose"
      v-if="closable"
      name="clear"
      @click="close"
    />
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Components } from '@/models/enums'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { ITTagOptions } from '@/types/components/components'

export default defineComponent({
  name: 'it-tag',
  props: {
    ...getVariantPropsWithClassesList<ITTagOptions>(),
    closable: { type: Boolean },
    filled: { type: Boolean },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const variant = computed(() =>
      useVariants<ITTagOptions>(Components.ITTag, props),
    )

    function close() {
      if (!props.closable) {
        return
      }
      emit('close')
    }

    return { close, variant }
  },
})
</script>
