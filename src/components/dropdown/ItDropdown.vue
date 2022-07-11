<template>
  <div v-clickoutside="hidePopover" v-on="listeners">
    <div ref="trigger">
      <slot></slot>
    </div>

    <transition :name="transition">
      <div v-show="show" ref="popover" :class="variant.dropdown">
        <slot name="menu"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { clickOutside } from '@/directives'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { usePopover } from '@/hooks'
import { useVariants } from '@/hooks/useVariants'
import { Components, Positions } from '@/models/enums'
import { ITDropdownOptions } from '@/types/components/components'
import { computed, defineComponent, inject, onMounted, provide } from 'vue'

export default defineComponent({
  name: Components.ITDropdown,
  directives: {
    clickoutside: clickOutside,
  },
  props: {
    ...getVariantPropsWithClassesList<ITDropdownOptions>(),
    placement: {
      default: Positions.B,
      type: String,
      validator: (value: Positions) =>
        [
          Positions.B,
          Positions.BL,
          Positions.BR,
          Positions.L,
          Positions.LT,
          Positions.LB,
          Positions.R,
          Positions.RT,
          Positions.RB,
          Positions.T,
          Positions.TL,
          Positions.TR,
        ].includes(value),
    },
    clickable: Boolean,
  },
  setup(props) {
    const {
      show,
      placement,
      disabled,
      popover,
      trigger,
      elOffset,
      handleMouseEnter,
      handleMouseLeave,
      hidePopover,
      showPopover,
    } = usePopover(props)

    const variant = computed(() =>
      useVariants<ITDropdownOptions>(Components.ITDropdown, props),
    )

    const isNested = inject('isNested', false)
    provide('isNested', true)

    onMounted(() => {
      if (isNested) {
        elOffset.value = 1
        placement.value = Positions.R
      }
    })

    function toggleDropdown() {
      if (disabled.value) {
        return
      }

      if (show.value) {
        hidePopover()
      } else {
        showPopover()
      }
    }

    const transition = computed(() => `drop-${placement.value}`)
    const listeners = computed(() => {
      return props.clickable
        ? {
            click: toggleDropdown,
          }
        : {
            mouseenter: handleMouseEnter,
            mouseleave: handleMouseLeave,
          }
    })

    return {
      toggleDropdown,
      transition,
      listeners,
      show,
      hidePopover,
      placement,
      popover,
      trigger,
      variant,
    }
  },
})
</script>
