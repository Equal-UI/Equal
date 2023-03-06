<template>
  <div v-clickoutside="hidePopover">
    <span ref="trigger" @click="showPopover">
      <slot></slot>
    </span>

    <TooltipBody
      :ref="
        (el) => {
          if (el) popover = el.$el
        }
      "
      :show="show && !$props.disabled"
      v-bind="$props"
    >
      <slot name="content"></slot>
    </TooltipBody>
  </div>
</template>

<script lang="ts">
import TooltipBody from '@/components/tooltip/TooltipBody.vue'
import { defineComponent } from 'vue'
import { usePopover } from '@/hooks'
import { clickOutside } from '@/directives'
import { Components, Positions } from '@/models/enums'

export default defineComponent({
  name: Components.ITPopover,
  components: { TooltipBody },
  directives: {
    clickoutside: clickOutside,
  },
  props: {
    disabled: Boolean,
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
      hidePopover,
      showPopover,
      setPopoverPosition,
    }
  },
})
</script>
