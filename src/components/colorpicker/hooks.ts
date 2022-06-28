import { computed, ref } from 'vue'
import { colord } from 'colord'

export const colorpicker = (
  props: { [key: string]: any },
  emit: (name: string, prop: any) => void,
) => {
  const val = ref(colord(props.value))
  const colors = computed({
    get: () => {
      return val.value
    },
    set: (newVal) => {
      val.value = newVal
      emit('change', newVal)
    },
  })

  const hue = ref(colord(props.value).toHsl().h)

  function colorChange(data?: any) {
    colors.value = colord({
      ...(data ? data : colors.value.toHsv()),
      h: hue.value,
    })
  }

  function changeHue(val: number) {
    hue.value = val
    if (colors.value.toHsv().s !== 0) {
      colorChange()
    }
  }

  return {
    val,
    colors,
    hue,
    colorChange,
    changeHue,
  }
}
