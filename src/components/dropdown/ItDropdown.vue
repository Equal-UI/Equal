<template>
  <div v-clickoutside="hidePopover" class="it-dropdown" v-on="listeners">
    <div ref="trigger" class="it-dropdown-trigger">
      <slot></slot>
    </div>

    <transition :name="transition">
      <div
        v-show="show"
        ref="popover"
        class="it-dropdown-slot"
        :class="[placement && `it-dropdown-slot--${placementSide}`]"
      >
        <slot name="menu"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Positions } from '@/models/enums'
import { usePopover } from '@/hooks'
import { clickOutside } from '@/directives'

export default defineComponent({
  name: 'it-dropdown',
  directives: {
    clickoutside: clickOutside,
  },
  props: {
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
      handleMouseEnter,
      handleMouseLeave,
      hidePopover,
      showPopover,
    } = usePopover(props)

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
    const placementSide = computed(() => placement.value.split('-')[0])
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
      placementSide,
      listeners,
      show,
      hidePopover,
      placement,
      popover,
      trigger,
    }
  },
})
</script>
