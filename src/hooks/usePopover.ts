import { ref, nextTick, computed, toRef } from 'vue'
import { Positions } from '@/models/enums'
import { Ref } from 'vue'

// REFACTOR HOOK

export const usePopover = (props: any) => {
  const show = ref(false)
  const placement: Ref<Positions> = ref<Positions>(
    props.placement || Positions.T,
  )
  const disabled = toRef(props, 'disabled') || ref(false)
  const clickable = toRef(props, 'hoverable') || ref(false)
  const transition = computed(() => `fade-${placement.value.split('-')[0]}`)
  const visionTimer = ref<NodeJS.Timeout | null>(null)
  const permanent = ref(false || props.permanent)
  const autoPosition = ref(props.autoposition)

  // Template Refs
  const popover = ref(null)
  const trigger = ref(null)

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

      const triggerTempGBCR = triggerTemp.getBoundingClientRect().toJSON()
      const popoverTempGBCR = popoverTemp.getBoundingClientRect()

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

    switch (placement.value) {
      case 'top':
        position.x =
          triggerTemp.offsetLeft -
          popoverTemp.offsetWidth / 2 +
          triggerTemp.offsetWidth / 2
        position.y = triggerTemp.offsetTop - popoverTemp.offsetHeight
        break
      case 'top-left':
        position.x = triggerTemp.offsetLeft
        position.y = triggerTemp.offsetTop - popoverTemp.offsetHeight
        break
      case 'top-right':
        position.x =
          triggerTemp.offsetLeft +
          triggerTemp.offsetWidth -
          popoverTemp.offsetWidth
        position.y = triggerTemp.offsetTop - popoverTemp.offsetHeight
        break
      case 'left':
        position.x = triggerTemp.offsetLeft - popoverTemp.offsetWidth
        position.y =
          triggerTemp.offsetTop +
          triggerTemp.offsetHeight / 2 -
          popoverTemp.offsetHeight / 2
        break
      case 'left-top':
        position.x = triggerTemp.offsetLeft - popoverTemp.offsetWidth
        position.y = triggerTemp.offsetTop
        break
      case 'left-bottom':
        position.x = triggerTemp.offsetLeft - popoverTemp.offsetWidth
        position.y =
          triggerTemp.offsetTop +
          triggerTemp.offsetHeight -
          popoverTemp.offsetHeight
        break
      case 'right':
        position.x = triggerTemp.offsetLeft + triggerTemp.offsetWidth
        position.y =
          triggerTemp.offsetTop +
          triggerTemp.offsetHeight / 2 -
          popoverTemp.offsetHeight / 2
        break
      case 'right-top':
        position.x = triggerTemp.offsetLeft + triggerTemp.offsetWidth
        position.y = triggerTemp.offsetTop
        break
      case 'right-bottom':
        position.x = triggerTemp.offsetLeft + triggerTemp.offsetWidth
        position.y =
          triggerTemp.offsetTop +
          triggerTemp.offsetHeight -
          popoverTemp.offsetHeight
        break
      case 'bottom':
        position.x =
          triggerTemp.offsetLeft -
          popoverTemp.offsetWidth / 2 +
          triggerTemp.offsetWidth / 2
        position.y = triggerTemp.offsetTop + triggerTemp.offsetHeight
        break
      case 'bottom-left':
        position.x = triggerTemp.offsetLeft
        position.y = triggerTemp.offsetTop + triggerTemp.offsetHeight
        break
      case 'bottom-right':
        position.x =
          triggerTemp.offsetLeft +
          triggerTemp.offsetWidth -
          popoverTemp.offsetWidth
        position.y = triggerTemp.offsetTop + triggerTemp.offsetHeight
        break
      default:
        position.x =
          triggerTemp.offsetLeft -
          popoverTemp.offsetWidth / 2 +
          triggerTemp.offsetWidth / 2
        position.y = triggerTemp.offsetTop - popoverTemp.offsetHeight
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
