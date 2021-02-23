import { computed, ref } from 'vue'
import { _colorChange } from './helpers'
import { clamp } from '@/helpers/clamp'
import { ColorFormats } from 'tinycolor2'
import { Positions } from '@/models/enums'

export const colorpicker = (
  props: { [key: string]: any },
  emit: (name: string, prop: any) => void,
) => {
  const val = ref(_colorChange(props.value))
  const colors = computed({
    get: () => {
      return val.value
    },
    set: (newVal) => {
      val.value = newVal
      emit('change', newVal)
    },
  })

  function colorChange(data: any) {
    colors.value = _colorChange(data)
  }

  return {
    val,
    colors,
    colorChange,
  }
}

export const saturation = (
  props: { [key: string]: any },
  emit: (name: string, prop: any) => void,
) => {
  const showTooltip = ref(false)
  const colors = computed(() => props.modelValue)
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
    const saturation = left / clientWidth
    const bright = clamp(-(top / clientHeight) + 1, 0, 1)

    emit('change', {
      h: colors.value.hsv.h,
      s: saturation,
      v: bright,
      a: (colors.value.hsv as ColorFormats.HSVA).a,
      source: 'hsva',
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
        h: colors.value.hsl.h,
        s: colors.value.hsl.s,
        l: colors.value.hsl.l,
        a,
        source: 'rgba',
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

export const hue = (
  props: { [key: string]: any },
  emit: (name: string, prop: any) => void,
) => {
  const oldHue = ref(0)
  const pullDirection = ref('')
  const container = ref<HTMLElement | null>(null)
  const colors = computed(() => {
    const h = props.modelValue.hsl.h
    if (h !== 0 && h - oldHue.value > 0) pullDirection.value = Positions.R
    if (h !== 0 && h - oldHue.value < 0) pullDirection.value = Positions.L
    oldHue.value = h

    return props.modelValue
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

    if (colors.value.hsl.h !== h) {
      emit('change', {
        h,
        s: colors.value.hsl.s,
        l: colors.value.hsl.l,
        a: colors.value.hsl.a,
        source: 'hsl',
      })
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
