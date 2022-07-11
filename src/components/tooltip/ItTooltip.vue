<template>
  <div>
    <div
      ref="trigger"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <slot :fixed-classes="{ root: variant.innerSlot }"></slot>
    </div>

    <TooltipBody
      :ref="
        (el) => {
          if (el) popover = el.$el
        }
      "
      :content="content"
      :show="show"
      v-bind="$props"
    >
      <slot name="content"></slot>
    </TooltipBody>
  </div>
</template>

<script lang="ts">
import TooltipBody from '@/components/tooltip/TooltipBody.vue'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { usePopover } from '@/hooks'
import { useVariants } from '@/hooks/useVariants'
import { Components, Positions } from '@/models/enums'
import { ITTooltipOptions } from '@/types/components/components'
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  watch,
} from 'vue'

export default defineComponent({
  name: Components.ITTooltip,
  components: { TooltipBody },
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
      handleMouseEnter,
      handleMouseLeave,
      hidePopover,
      showPopover,
      setPopoverPosition,
    } = usePopover(props)

    const variant = computed(() =>
      useVariants<ITTooltipOptions>(Components.ITTooltip, props),
    )

    watch(
      () => props.placement,
      (newVal) => {
        placement.value = newVal as Positions
      },
    )

    onMounted(() => {
      ;(trigger.value as HTMLElement)?.addEventListener(
        'focusin',
        handleMouseEnter,
      )
      ;(trigger.value as HTMLElement)?.addEventListener(
        'focusout',
        handleMouseLeave,
      )
    })

    onBeforeUnmount(() => {
      ;(trigger.value as HTMLElement)?.removeEventListener(
        'focusin',
        handleMouseEnter,
      )
      ;(trigger.value as HTMLElement)?.removeEventListener(
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
