import { Positions } from '@/models/enums'
import {
  computePosition,
  offset,
  shift,
  Placement,
  flip,
} from '@floating-ui/dom'
import { computed, nextTick, ref, Ref, watch } from 'vue'

export const usePopover = (props: any) => {
  const show = ref(false)
  const placement: Ref<Positions> = ref<Positions>(
    props.placement || Positions.T,
  )
  const disabled = ref(false || props.disabled)
  const clickable = ref(false || props.hoverable)
  const transition = computed(() => `fade-${placement.value.split('-')[0]}`)
  const visionTimer = ref<NodeJS.Timeout | null>(null)
  const permanent = ref(false || props.permanent)
  // const autoPosition = ref(props.autoposition) apply shift + flip or not
  const elOffset = ref(props.offset || 8)

  // Template Refs
  const popover = ref(props.popoverEl ?? null)
  const trigger = ref(props.triggerEl ?? null)

  watch(permanent, (value) => {
    if (value) {
      if (trigger.value) {
        setTimeout(() => {
          setPopoverPosition()
          show.value = true
        }, 100)
      }
    }
  })

  watch(disabled, (value) => {
    if (value) {
      hidePopover()
    } else if (permanent) {
      showPopover()
    }
  })

  function handleMouseEnter(e: Event) {
    if (disabled.value) {
      return
    }

    if (
      (e.target as HTMLElement).isSameNode(popover.value as HTMLElement) &&
      !clickable.value
    ) {
      return
    }

    showPopover()
    clearTimeout(visionTimer.value!)
  }

  function handleMouseLeave() {
    if (!permanent.value) {
      visionTimer.value = setTimeout(() => {
        hidePopover()
      }, 150)
    }
  }

  function hidePopover() {
    show.value = false
  }

  function showPopover() {
    if (!show.value && !disabled.value) {
      setPopoverPosition()
      show.value = true
    }
  }

  async function setPopoverPosition() {
    await nextTick()
    const popoverTemp = popover.value as HTMLElement
    const triggerTemp = trigger.value as HTMLElement

    if (!popoverTemp || !triggerTemp) {
      return
    }

    const {
      x,
      y,
      placement: extPlacement,
    } = await computePosition(triggerTemp, popoverTemp, {
      middleware: [offset(elOffset.value), flip(), shift()],
      placement: placement.value as Placement,
    })

    Object.assign(popoverTemp.style, {
      position: 'absolute',
      left: `${x}px`,
      top: `${y}px`,
    })
  }

  return {
    show,
    placement,
    disabled,
    clickable,
    transition,
    visionTimer,
    popover,
    trigger,
    permanent,
    elOffset,
    handleMouseEnter,
    handleMouseLeave,
    hidePopover,
    showPopover,
    setPopoverPosition,
  }
}
