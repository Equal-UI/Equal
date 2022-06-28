import { usePopover } from '@/hooks/usePopover'
import { createApp, Directive, unref, ref, watch } from 'vue'
import TooltipBody from '@/components/tooltip/TooltipBody.vue'
import { EqualUIConfiguration } from '@/types/variant'
import { Positions } from '@/models/enums/Positions'

export const tooltip = (theme: EqualUIConfiguration): Directive => ({
  created(elem, binding) {
    const {
      show,
      popover,
      trigger,
      placement,
      handleMouseEnter,
      handleMouseLeave,
      setPopoverPosition,
      permanent,
      disabled,
    } = usePopover({})

    const mountEl = document.createElement('div')
    const myTooltip = createApp(TooltipBody)

    placement.value = unref(binding.value.position) || placement.value

    myTooltip.provide('placement', placement)
    myTooltip.provide('config', theme)
    myTooltip.provide('show', show)
    myTooltip.provide('content', binding.value.content)

    // if (binding.value?.position) {
    //   placement.value = unref(binding.value.position)
    // }

    // if (binding.value?.permanent) {
    //   permanent.value = unref(binding.value?.permanent)
    // }

    watch(
      ref(binding.value.disabled),
      (val) => {
        disabled.value = unref(val)
      },
      { immediate: true },
    )

    watch(
      ref(binding.value.permanent),
      (val) => {
        permanent.value = !!unref(val)
      },
      { immediate: true },
    )
    watch(ref(binding.value.content), setPopoverPosition)
    watch(ref(binding.value.position), (val: Positions) => {
      if (!val) {
        return
      }
      placement.value = unref(val)
      setPopoverPosition()
    })

    // mount tooltip El
    const comp = myTooltip.mount(mountEl)
    document.body.appendChild(mountEl)

    // set $refs
    trigger.value = elem
    popover.value = comp.$el

    elem.myTooltip = myTooltip
    elem.mountEl = mountEl

    elem.handleMouseEnter = handleMouseEnter
    elem.handleMouseLeave = handleMouseLeave

    elem.setPopoverPosition = setPopoverPosition

    elem.addEventListener('mouseenter', elem.handleMouseEnter)
    elem.addEventListener('mouseleave', elem.handleMouseLeave)
    elem.addEventListener('focus', elem.handleMouseEnter)
    elem.addEventListener('blur', elem.handleMouseLeave)
  },
  updated(elem) {},
  unmounted(elem) {
    elem.removeEventListener('mouseenter', elem.handleMouseEnter)
    elem.removeEventListener('mouseleave', elem.handleMouseLeave)
    elem.removeEventListener('focus', elem.handleMouseEnter)
    elem.removeEventListener('blur', elem.handleMouseLeave)

    elem.myTooltip.unmount()
    elem.mountEl.parentNode.removeChild(elem.mountEl)
  },
})
