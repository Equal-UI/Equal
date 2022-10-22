import { clamp } from '@/helpers/clamp'
import { Colord } from 'colord'
import { computed, ref } from 'vue'

export const saturation = (
  props: { [key: string]: any },
  emit: (name: string, prop: any) => void,
) => {
  const showTooltip = ref(false)
  const colors = computed<Colord>(() => props.modelValue)
  const container = ref<HTMLElement | null>(null)

  const pointerTop = computed(() => -colors.value.toHsv().v + 100)
  const pointerLeft = computed(() => colors.value.toHsv().s)

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

  function toKeyHandler(
    side: 'up' | 'right' | 'down' | 'left',
    e: KeyboardEvent,
  ) {
    const { h, s, v, a } = colors.value.toHsv()
    const amount = e.shiftKey ? 15 : 5
    let newS = s
    let newV = v
    switch (side) {
      case 'up':
        newV += amount
        break
      case 'down':
        newV -= amount
        break
      case 'left':
        newS -= amount
        break
      case 'right':
        newS += amount
        break

      default:
        return
        break
    }
    emit('change', {
      h,
      s: clamp(newS, 0, 100),
      v: clamp(newV, 0.001, 100),
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
    pointerTop,
    pointerLeft,
    handleChange,
    handleMouseDown,
    handleMouseUp,
    toKeyHandler,
  }
}
