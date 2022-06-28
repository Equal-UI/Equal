import { Positions } from '@/models/enums/Positions'
import { Colord } from 'colord'
import { computed, ref } from 'vue'

export const hue = (
  props: { [key: string]: any },
  emit: (name: string, prop: any) => void,
) => {
  const oldHue = ref(0)
  const pullDirection = ref<Positions>(Positions.R)
  const container = ref<HTMLElement | null>(null)
  const colors = computed(() => {
    const h = props.hue
    if (h - oldHue.value > 0) pullDirection.value = Positions.R
    if (h - oldHue.value < 0) pullDirection.value = Positions.L
    oldHue.value = h

    return props.hue
  })
  function handleChange(e: TouchEvent & MouseEvent, skip: any) {
    !skip && e.preventDefault()

    if (!container.value) {
      return
    }
    const containerWidth = container.value!.clientWidth

    const xOffset =
      container.value!.getBoundingClientRect().left + window.pageXOffset
    const pageX = e.pageX || (e.touches ? e.touches[0].pageX : 0)
    const left = pageX - xOffset

    // tslint:disable-next-line: one-variable-per-declaration
    let h, percent

    if (left < 0) {
      h = 0
    } else if (left > containerWidth) {
      h = 360
    } else {
      percent = (left * 100) / containerWidth
      h = (360 * percent) / 100
    }

    if (props.hue !== h) {
      emit('change', h)
    }
  }
  function handleMouseDown(e) {
    handleChange(e, true)
    window.addEventListener('mousemove', handleChange)
    window.addEventListener('mouseup', handleMouseUp)
  }
  function handleMouseUp(e) {
    unbindEventListeners()
  }
  function unbindEventListeners() {
    window.removeEventListener('mousemove', handleChange)
    window.removeEventListener('mouseup', handleMouseUp)
  }

  return {
    container,
    colors,
    pullDirection,
    handleChange,
    handleMouseDown,
  }
}
