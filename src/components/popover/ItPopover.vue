<template>
  <div class="it-tooltip" v-clickoutside="hidePopover">
    <span class="it-tooltip-trigger" @click="showPopover" ref="trigger">
      <slot></slot>
    </span>

    <transition :name="transition">
      <div
        class="it-tooltip-popper"
        :class="[placement && `it-tooltip--${placement}`]"
        v-show="show && !disabled"
        ref="popover"
      >
        <div
          class="it-tooltip-content"
          :class="{
            'it-tooltip-content--borderless': borderless,
          }"
        >
          <slot name="content"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import usePopover from '@/api/usePopover'
import clickoutside from '@/directives/clickOutside'
import { Positions } from '@/models'

export default defineComponent({
  name: 'it-popover',
  directives: { clickoutside },
  props: {
    disabled: Boolean,
    borderless: Boolean,
    placement: {
      type: String,
      default: Positions.T,
      validator: (value: Positions) =>
        [Positions.B, Positions.L, Positions.R, Positions.T].includes(value),
    },
  },
  setup(props) {
    const {
      show,
      placement,
      disabled,
      clickable,
      transition,
      popover,
      trigger,
      position,
      hidePopover,
      showPopover,
      setPopoverPosition,
    } = usePopover(props)

    return {
      show,
      placement,
      disabled,
      clickable,
      transition,
      popover,
      trigger,
      position,
      hidePopover,
      showPopover,
      setPopoverPosition,
    }
  },
})
</script>
