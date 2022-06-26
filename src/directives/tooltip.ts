import { usePopover } from '@/hooks/usePopover'
import {
  createApp,
  Directive,
  getCurrentInstance,
  inject,
  ref,
  watch,
} from 'vue'
import TooltipBody from '@/components/tooltip/TooltipBody.vue'
import { EqualUIConfiguration } from '@/types/variant'

// let startedSource = false

export const tooltip = (theme: EqualUIConfiguration): Directive => ({
  mounted(elem, binding) {
    const {
      show,
      popover,
      trigger,
      placement,
      handleMouseEnter,
      handleMouseLeave,
      setPopoverPosition,
    } = usePopover({})

    const mountEl = document.createElement('div')
    const myTooltip = createApp(TooltipBody)

    myTooltip.provide('config', theme)
    myTooltip.provide('show', show)
    myTooltip.provide('content', binding.value.content)
    myTooltip.provide('placement', placement)

    if (binding.value?.position) {
      placement.value = binding.value.position
    }

    watch(binding.value.content, setPopoverPosition)

    // mount tooltip El
    const comp = myTooltip.mount(mountEl)
    document.body.appendChild(mountEl)

    // set $refs
    popover.value = comp.$el
    trigger.value = elem

    elem.myTooltip = myTooltip
    elem.mountEl = mountEl

    elem.handleMouseEnter = handleMouseEnter
    elem.handleMouseLeave = handleMouseLeave

    elem.addEventListener('mouseenter', elem.handleMouseEnter)
    elem.addEventListener('mouseleave', elem.handleMouseLeave)
    elem.addEventListener('focus', elem.handleMouseEnter)
    elem.addEventListener('blur', elem.handleMouseLeave)
  },
  unmounted(elem) {
    elem.removeEventListener('mouseenter', elem.handleMouseEnter)
    elem.removeEventListener('mouseleave', elem.handleMouseLeave)
    elem.removeEventListener('focus', elem.handleMouseEnter)
    elem.removeEventListener('blur', elem.handleMouseLeave)

    elem.myTooltip.unmount()
    elem.mountEl.parentNode.removeChild(elem.mountEl)
  },
})
