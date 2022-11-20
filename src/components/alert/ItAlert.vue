<template>
  <transition name="fade">
    <div v-show="visible" :class="variant.root">
      <slot name="icon" />
      <div>
        <p :class="variant.title">{{ title }}</p>
        <p v-if="!defaultSlot && body" :class="variant.body">{{ body }}</p>
        <p v-if="defaultSlot" :class="variant.body">
          <slot />
        </p>
      </div>

      <button v-if="closable" :class="variant.closeIcon" @click="clickCross">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Components } from '@/models/enums'
import { useCheckSlot } from '@/hooks'
import { useVariants } from '@/hooks/useVariants'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { ITAlertOptions } from '@/types/components/components'

export default defineComponent({
  name: Components.ITAlert,
  props: {
    ...getVariantPropsWithClassesList<ITAlertOptions>(),
    closable: { type: Boolean, default: false },
    visible: { type: Boolean, default: true },
    title: { type: String, default: null },
    body: { type: String, default: null },
  },
  emits: ['on-close'],
  setup(props, { emit, slots }) {
    const variant = useVariants<ITAlertOptions>(Components.ITAlert, props)

    const defaultSlot = useCheckSlot(slots, 'default')
    const clickCross = () => emit('on-close')

    return {
      defaultSlot,
      clickCross,
      variant,
    }
  },
})
</script>
