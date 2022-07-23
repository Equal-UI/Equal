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
      <!-- TODO: fix close -->
      <!-- <it-icon
        v-if="closable"
        name="clear"
        :class="variant.closeIcon"
        @click="clickCross"
      /> -->
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { Colors, Components } from '@/models/enums'
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
