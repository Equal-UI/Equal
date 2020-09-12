<template>
  <div class="it-dropdown" v-on="listeners" v-clickoutside="hidePopover">
    <div class="it-dropdown-trigger" ref="trigger">
      <slot></slot>
    </div>

    <transition :name="transition">
      <div
        class="it-dropdown-slot"
        :class="[placement && `it-dropdown-slot--${placementSide}`]"
        ref="popover"
        v-show="show"
      >
        <slot name="menu"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, watchEffect, watch } from 'vue'
import { Positions } from '../../models'
import usePopover from '../../api/usePopover'
import clickoutside from '../../directives/clickOutside'

export default defineComponent({
  name: 'it-dropdown',
  directives: { clickoutside },
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
          Positions.TR
        ].includes(value)
    },
    clickable: Boolean
  },
  setup(props) {
    const {
      show,
      placement,
      disabled,
      clickable,
      visionTimer,
      popover,
      trigger,
      permanent,
      position,
      handleMouseEnter,
      handleMouseLeave,
      hidePopover,
      showPopover,
      setPopoverPosition
    } = usePopover(props)

    function toggleDropdown() {
      if (disabled) {
        return
      }
      if (show) {
        hidePopover()
      } else {
        showPopover()
      }
    }

    const transition = computed(() => `drop-${placement.value}`)
    const placementSide = computed(() => placement.value.split('-')[0])
    const listeners = computed(() => {
      const hvrbl = props.clickable
        ? {
            click: toggleDropdown
          }
        : {
            mouseenter: handleMouseEnter,
            mouseleave: handleMouseLeave
          }
      return {
        ...hvrbl
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
      trigger
    }
  }
})

// get listeners() {
// const hvrbl = this.clickable
//   ? {
//       click: this.toggleDropdown
//     }
//   : {
//       mouseenter: this.handleMouseEnter,
//       mouseleave: this.handleMouseLeave
//     }
// return {
//   ...hvrbl
// }
// }
</script>