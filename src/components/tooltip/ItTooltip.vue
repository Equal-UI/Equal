<template>
  <div class="it-tooltip">
    <div
      ref="trigger"
      class="it-tooltip-trigger"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <slot :fixed-classes="{ root: variant.innerSlot }"></slot>
    </div>

    <transition :name="transition">
      <div
        v-show="show"
        ref="popover"
        class="it-tooltip-popper"
        :class="[placement && `it-tooltip--${placement.split('-')[0]}`]"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
      >
        <div class="it-tooltip-content">
          <slot name="content">
            <div>{{ content }}</div>
          </slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted } from 'vue'
import { usePopover } from '@/hooks'
import { Components, Positions } from '@/models/enums'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { ITTooltipOptions } from '@/types/components/components'
import { useVariants } from '@/hooks/useVariants'

export default defineComponent({
  name: 'it-tooltip',
  props: {
    ...getVariantPropsWithClassesList<ITTooltipOptions>(),
    content: [String, Number],
    disabled: Boolean,
    hoverable: Boolean,
    placement: {
      type: String,
      default: Positions.T,
      validator: (value: Positions) => Object.values(Positions).includes(value),
    },
    permanent: Boolean,
    autoposition: { type: Boolean, default: true },
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
      setPopoverPosition,
    } = usePopover(props)

    const variant = computed(() =>
      useVariants<ITTooltipOptions>(Components.ITTooltip, props),
    )

    onMounted(() => {
      if (permanent.value) {
        showPopover()
      }

      ;(trigger.value as unknown as HTMLElement)?.addEventListener(
        'focusin',
        handleMouseEnter,
      )
      ;(trigger.value as unknown as HTMLElement)?.addEventListener(
        'focusout',
        handleMouseLeave,
      )
    })

    onBeforeUnmount(() => {
      ;(trigger.value as unknown as HTMLElement)?.removeEventListener(
        'focusin',
        handleMouseEnter,
      )
      ;(trigger.value as unknown as HTMLElement)?.removeEventListener(
        'focusout',
        handleMouseLeave,
      )
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
      setPopoverPosition,
      variant,
    }
  },
})
</script>
