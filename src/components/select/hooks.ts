import { ref, onBeforeUpdate, nextTick } from 'vue'
import { EKeys } from '@/components/select/enums'
import { TEmit } from '@/types'

export const useSelect = (props: any, emit: TEmit) => {
  const indexFocusedOption = ref(-1)
  const optionsRefs = ref<HTMLElement[]>([])
  const show = ref(false)

  onBeforeUpdate(() => {
    optionsRefs.value = []
  })

  const setOptionRef = (el: HTMLElement, i: number) => {
    if (el) {
      optionsRefs.value[i] = el
    }
  }

  const setOpen = (state = false) => (show.value = state)

  const toggleDropdown = () => {
    if (props.disabled) {
      setOpen(false)
      return
    }
    if (show.value) setOpen(false)
    else {
      unfocusOption()
      setOpen(true)
    }
  }

  const selectOption = (value: string | number) => {
    emit('update:modelValue', value)
  }

  const unfocusOption = () => {
    if (indexFocusedOption.value === -1) return
    indexFocusedOption.value = -1
  }

  const handleKey = async (type: EKeys) => {
    if (!show.value || !props.options.length) return
    if (type === EKeys.UP) {
      indexFocusedOption.value =
        indexFocusedOption.value <= 0
          ? props.options.length - 1
          : indexFocusedOption.value - 1
    } else if (type === EKeys.DOWN) {
      indexFocusedOption.value =
        indexFocusedOption.value === props.options.length - 1
          ? 0
          : indexFocusedOption.value + 1
    }
    await nextTick()
    const selectedEl = optionsRefs.value.find((r) =>
      r.className.includes('focused'),
    )
    selectedEl?.scrollIntoView({ block: 'nearest', inline: 'start' })
  }

  const handleEnterKey = () => {
    if (!show.value || indexFocusedOption.value === -1) {
      toggleDropdown()
      return
    }
    const option = props.options[indexFocusedOption.value]
    selectOption(props.index ? option[props.index] : option)
    setOpen(false)
  }

  return {
    setOptionRef,
    indexFocusedOption,
    optionsRefs,
    show,
    handleEnterKey,
    setOpen,
    toggleDropdown,
    selectOption,
    handleKey,
  }
}
