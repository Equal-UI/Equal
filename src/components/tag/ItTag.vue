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
    <button variant="tagClose" v-if="closable" name="clear" @click.stop="close">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :class="variant.closeBtn"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="3"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Components } from '@/models/enums'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { ITTagOptions } from '@/types/components/components'

export default defineComponent({
  name: Components.ITTag,
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
