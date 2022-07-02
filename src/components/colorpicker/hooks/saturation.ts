import { clamp } from '@/helpers/clamp'
import { Colord, HsvaColor } from 'colord'
import { computed, ref } from 'vue'

export const saturation = (
  props: { [key: string]: any },
  emit: (name: string, prop: any) => void,
) => {
  const showTooltip = ref(false)
  const colors = computed<Colord>(() => props.modelValue)
  const container = ref<HTMLElement | null>(null)

  function handleChange(e: MouseEvent & TouchEvent, skip: boolean) {
    !skip && e.preventDefault()
    if (!container.value) {
      return
    }

    if (props.tooltip && !showTooltip.value) {
      showTooltip.value = true
    }

    const { clientWidth, clientHeight } = container.value!

    const xOffset =
      container.value!.getBoundingClientRect().left + window.pageXOffset
    const yOffset =
      container.value!.getBoundingClientRect().top + window.pageYOffset
    const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0)
    const pageY = e.pageY || (e.touches ? e.touches[0].pageY : 0)
    const left = clamp(pageX - xOffset, 0, clientWidth)
    const top = clamp(pageY - yOffset, 0, clientHeight)
    const saturation = (left / clientWidth) * 100
    const bright = clamp((-(top / clientHeight) + 1) * 100, 0.001, 100)

    const { h, a } = colors.value.toHsv()
    emit('change', {
      h,
      s: saturation,
      v: bright,
      a,
    })
  }

  function handleMouseDown() {
    window.addEventListener('mousemove', handleChange)
    window.addEventListener('mouseup', handleChange)
    window.addEventListener('touchstart', handleChange)
    window.addEventListener('mouseup', handleMouseUp)
  }
  function handleMouseUp() {
    unbindEventListeners()
    showTooltip.value = false
  }
  function unbindEventListeners() {
    window.removeEventListener('mousemove', handleChange)
    window.removeEventListener('mouseup', handleChange)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  return {
    showTooltip,
    colors,
    container,
    handleChange,
    handleMouseDown,
    handleMouseUp,
  }
}
