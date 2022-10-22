import { clamp } from '@/helpers/clamp'
import { Positions } from '@/models/enums/Positions'
import { computed, ref } from 'vue'

export const alpha = (
  props: { [key: string]: any },
  emit: (name: string, prop: any) => void,
) => {
  const colors = computed(() => props.modelValue)
  const container = ref<HTMLElement | null>(null)

  function handleChange(e: TouchEvent & MouseEvent, skip) {
    !skip && e.preventDefault()
    if (!container.value) {
      return
    }
    const containerWidth = container.value!.clientWidth

    const xOffset =
      container.value!.getBoundingClientRect().left + window.pageXOffset
    const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0)
    const left = pageX - xOffset

    let a
    if (left < 0) {
      a = 0
    } else if (left > containerWidth) {
      a = 1
    } else {
      a = Math.round((left * 100) / containerWidth) / 100
    }

    if (colors.value.a !== a) {
      const HSValue = colors.value.toHsv()
      emit('change', {
        h: HSValue.h,
        s: HSValue.s,
        v: HSValue.v,
        a,
      })
    }
  }

  function toKeyHandler(side: Positions.L | Positions.R, e: KeyboardEvent) {
    let newAlpha = colors.value.toHsv().a
    const amount = e.shiftKey ? 0.075 : 0.025
    switch (side) {
      case Positions.L:
        newAlpha -= amount
        break
      case Positions.R:
        newAlpha += amount
        break
      default:
        return
    }

    const clampedValue = clamp(newAlpha, 0, 1)
    if (colors.value.a !== clampedValue) {
      const HSValue = colors.value.toHsv()
      emit('change', {
        h: HSValue.h,
        s: HSValue.s,
        v: HSValue.v,
        a: clampedValue,
      })
    }
  }

  function handleMouseDown(e: MouseEvent & TouchEvent) {
    handleChange(e, true)
    window.addEventListener('mousemove', handleChange)
    window.addEventListener('mouseup', handleMouseUp)
  }
  function handleMouseUp() {
    unbindEventListeners()
  }
  function unbindEventListeners() {
    window.removeEventListener('mousemove', handleChange)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  return {
    colors,
    container,
    handleChange,
    handleMouseDown,
    toKeyHandler,
    handleMouseUp,
  }
}
