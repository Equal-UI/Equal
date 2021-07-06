<template>
  <div v-clickoutside="hidePopover" class="it-tooltip">
    <span ref="trigger" class="it-tooltip-trigger" @click="showPopover">
      <slot></slot>
    </span>

    <transition :name="transition">
      <div
        v-show="show && !disabled"
        ref="popover"
        class="it-tooltip-popper"
        :class="[placement && `it-tooltip--${placement}`]"
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
import { usePopover } from '@/hooks'
import { clickOutside } from '@/directives'
import { Positions } from '@/models/enums'

export default defineComponent({
  name: 'it-popover',
  directives: {
    clickoutside: clickOutside,
  },
  props: {
    disabled: Boolean,
    borderless: Boolean,
    placement: {
      type: String,
      default: Positions.T,
      validator: (value: Positions) =>
        [Positions.B, Positions.L, Positions.R, Positions.T].includes(value),
    },
    autoposition: { type: Boolean, default: true },
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
