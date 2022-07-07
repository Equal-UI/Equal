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
      emit('change', {
        h: colors.value.toHsv().h,
        s: colors.value.toHsv().s,
        v: colors.value.toHsv().v,
        a,
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
    handleMouseUp,
  }
}
