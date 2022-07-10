<template>
  <div class="it-tooltip">
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
      :placement="placement"
      :show="show"
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

    watch(
      () => props.placement,
      (newVal) => {
        placement.value = newVal as Positions
      },
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
