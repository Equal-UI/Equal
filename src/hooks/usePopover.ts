import { ref, nextTick, computed, toRef, watch } from 'vue'
import { Positions } from '@/models/enums'
import { Ref } from 'vue'

// REFACTOR HOOK

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
  const autoPosition = ref(props.autoposition)

  // Template Refs
  const popover = ref(props.popoverEl ?? null)
  const trigger = ref(props.triggerEl ?? null)

  watch(permanent, (value) => {
    if (value) {
      show.value = true
      if (trigger.value) {
        setTimeout(() => {
          setPopoverPosition()
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

  const position = {
    x: 0,
    y: 0,
  }

  function handleMouseEnter(e: Event) {
    if (disabled.value) {
      return
    }
    if (
      (e.target as HTMLElement).isSameNode(popover.value! as HTMLElement) &&
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
      }, 200)
    }
  }

  function hidePopover() {
    show.value = false
  }

  function showPopover() {
    if (!show.value && !disabled.value) {
      show.value = true
      setPopoverPosition()
    }
  }

  async function setPopoverPosition() {
    await nextTick()
    const popoverTemp = popover.value! as HTMLElement
    const triggerTemp = trigger.value! as HTMLElement

    if (!popoverTemp) {
      return
    }

    const triggerTempGBCR = triggerTemp.getBoundingClientRect().toJSON()
    const popoverTempGBCR = popoverTemp.getBoundingClientRect()

    if (autoPosition.value) {
      // preferred position direction
      const preferredPos = props.placement as Positions
      const predefPositions = [
        ...new Set([
          preferredPos,
          Positions.T,
          Positions.B,
          Positions.R,
          Positions.L,
          ...Object.values(Positions),
        ]),
      ]

      for (const pos of predefPositions) {
        const posSide = pos.split('-')[0]

        const PosIsVertical = [Positions.T, Positions.B].includes(
          posSide as Positions,
        )

        let searchPredicate = triggerTempGBCR[posSide as keyof DOMRect]

        if (posSide === Positions.B) {
          searchPredicate =
            window.innerHeight - triggerTempGBCR[posSide as keyof DOMRect]
        }

        if (posSide === Positions.R) {
          searchPredicate =
            window.innerWidth - triggerTempGBCR[posSide as keyof DOMRect]
        }

        if (
          searchPredicate >=
          popoverTempGBCR[PosIsVertical ? 'height' : 'width'] + 24
        ) {
          placement.value = pos
          break
        }
      }
    }

    const topPos = triggerTempGBCR.top + window.scrollY
    const leftPos = triggerTempGBCR.left + window.scrollX

    switch (placement.value) {
      case Positions.T:
        position.x =
          leftPos - popoverTemp.offsetWidth / 2 + triggerTemp.offsetWidth / 2
        position.y = topPos - popoverTemp.offsetHeight
        break
      case Positions.TL:
        position.x = leftPos
        position.y = topPos - popoverTemp.offsetHeight
        break
      case Positions.TR:
        position.x = leftPos + triggerTemp.offsetWidth - popoverTemp.offsetWidth
        position.y = topPos - popoverTemp.offsetHeight
        break
      case Positions.L:
        position.x = leftPos - popoverTemp.offsetWidth
        position.y =
          topPos + triggerTemp.offsetHeight / 2 - popoverTemp.offsetHeight / 2
        break
      case Positions.LT:
        position.x = leftPos - popoverTemp.offsetWidth
        position.y = topPos
        break
      case Positions.LB:
        position.x = leftPos - popoverTemp.offsetWidth
        position.y =
          topPos + triggerTemp.offsetHeight - popoverTemp.offsetHeight
        break
      case Positions.R:
        position.x = leftPos + triggerTemp.offsetWidth
        position.y =
          topPos + triggerTemp.offsetHeight / 2 - popoverTemp.offsetHeight / 2
        break
      case Positions.RT:
        position.x = leftPos + triggerTemp.offsetWidth
        position.y = topPos
        break
      case Positions.RB:
        position.x = leftPos + triggerTemp.offsetWidth
        position.y =
          topPos + triggerTemp.offsetHeight - popoverTemp.offsetHeight
        break
      case Positions.B:
        position.x =
          leftPos - popoverTemp.offsetWidth / 2 + triggerTemp.offsetWidth / 2
        position.y = topPos + triggerTemp.offsetHeight
        break
      case Positions.BL:
        position.x = leftPos
        position.y = topPos + triggerTemp.offsetHeight
        break
      case Positions.BR:
        position.x = leftPos + triggerTemp.offsetWidth - popoverTemp.offsetWidth
        position.y = topPos + triggerTemp.offsetHeight
        break
      default:
        position.x =
          leftPos - popoverTemp.offsetWidth / 2 + triggerTemp.offsetWidth / 2
        position.y = topPos - popoverTemp.offsetHeight
        break
    }

    popoverTemp.style.top = `${position.y}px`
    popoverTemp.style.left = `${position.x}px`
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
    position,
    permanent,
    handleMouseEnter,
    handleMouseLeave,
    hidePopover,
    showPopover,
    setPopoverPosition,
  }
}
