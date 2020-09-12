<template>
  <div class="it-tooltip">
    <span
      class="it-tooltip__trigger"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      ref="trigger"
    >
      <slot></slot>
    </span>

    <transition :name="transition">
      <div
        class="it-tooltip__popper"
        :class="[
          placement && `it-tooltip--${placement}`
        ]"
        v-show="show"
        ref="popover"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div class="it-tooltip__content">
          <slot name="content">
            <div>{{content}}</div>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import usePopover from '../../api/usePopover'

export default defineComponent({
  name: 'it-tooltip',
  props: {
    content: [String, Number],
    disabled: Boolean,
    hoverable: Boolean,
    transition: String,
    placement: String,
    permanent: Boolean
  },
  setup(props) {
    const {
      show,
      placement,
      disabled,
      clickable,
      transition,
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

    onMounted(()=> {
      if (permanent.value) {
        showPopover()
      }
    })

    return {
      show,
      placement,
      disabled,
      clickable,
      transition,
      visionTimer,
      popover,
      trigger,
      position,
      handleMouseEnter,
      handleMouseLeave,
      hidePopover,
      showPopover,
      setPopoverPosition
    }
  }
})
</script>
