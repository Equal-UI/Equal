import TooltipBody from '@/components/tooltip/TooltipBody.vue'
import { usePopover } from '@/hooks/usePopover'
import { Positions } from '@/models/enums/Positions'
import { EqualUIConfiguration } from '@/types/variant'
import { autoUpdate } from '@floating-ui/dom'
import { createApp, Directive, h, reactive, ref, unref, watch } from 'vue'

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
      permanent,
      disabled,
    } = usePopover({})

    const mountEl = document.createElement('div')

    // https://github.com/vuejs/core/issues/4874#issuecomment-959008724
    const myTooltip = createApp({
      render: () =>
        h(
          TooltipBody,
          reactive({
            placement,
            show,
            content: binding.value.content,
          }),
        ),
    })
    myTooltip.provide('config', theme)

    placement.value = unref(binding.value.position) || placement.value

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

    if (binding.value.autoUpdate) {
      const cleanup = autoUpdate(trigger.value, popover.value, () => {
        setPopoverPosition()
      })

      elem.cleanup = cleanup || (() => {})
    }

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

    elem.cleanup && elem.cleanup()
    elem.myTooltip.unmount()
    elem.mountEl.parentNode.removeChild(elem.mountEl)
  },
})
