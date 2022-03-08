<template>
  <transition name="fade">
    <div v-show="visible" :class="variant.root">
      <div v-if="showIcon">
        <it-icon
          :box="iconbox"
          :round="iconboxRounded"
          :fixed-classes="{ root: variant.icon, box: variant.iconbox }"
          :name="iconType"
        />
      </div>
      <div>
        <p :class="variant.title">{{ title }}</p>
        <p v-if="!defaultSlot && body" :class="variant.body">{{ body }}</p>
        <p v-if="defaultSlot" :class="variant.body">
          <slot />
        </p>
      </div>
      <it-icon
        v-if="closable"
        name="clear"
        :class="variant.closeIcon"
        @click="clickCross"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent, SetupContext } from 'vue'
import { Colors, Components } from '@/models/enums'
import { useCheckSlot } from '@/hooks'
import { useVariants } from '@/hooks/useVariants'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { ICON_NAME_BY_COLOR } from '@/components/alert/constants'
import { ITAlertOptions } from '@/types/components/components'

export default defineComponent({
  name: Components.ITAlert,
  props: {
    ...getVariantPropsWithClassesList<ITAlertOptions>(),
    showIcon: { type: Boolean, default: true },
    closable: { type: Boolean, default: false },
    iconbox: { type: Boolean, default: false },
    iconboxRounded: { type: Boolean, default: false },
    visible: { type: Boolean, default: true },
    title: { type: String, default: null },
    icon: { type: String, default: null },
    body: { type: String, default: null },
  },
  emits: ['on-close'],
  setup(props, { emit, slots }) {
    const variant = useVariants<ITAlertOptions>(Components.ITAlert, props)

    const defaultSlot = useCheckSlot(slots, 'default')
    const clickCross = () => emit('on-close')

    const iconType = computed(
      () => props.icon || ICON_NAME_BY_COLOR[Colors.PRIMARY],
    )

    return {
      defaultSlot,
      clickCross,
      iconType,
      variant,
    }
  },
})
</script>
