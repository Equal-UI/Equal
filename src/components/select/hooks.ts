import { ref, onBeforeUpdate, nextTick, computed } from 'vue'
import { EDirections } from '@/models/enums'
import { TEmit } from '@/types'
import { TOption, TSelect, TSelectProps } from '@/components/select/types'
import { getArrayIndexByDuration } from './helpers'
import { CLASS_SELECTED_OPTION } from './constants'

export const useSelect = (props: TSelectProps, emit: TEmit): TSelect => {
  const indexFocusedOption = ref(-1)
  const optionsRefs = ref<HTMLElement[]>([])
  const show = ref(false)

  onBeforeUpdate(() => (optionsRefs.value = []))

  const scrollToSelectedOption = () => {
    console.log('scrollToSelectedOption')
  }

  const getOptionName = (option: TOption) =>
    typeof option === 'object' ? option.name : option

  const getOptionValue = (option: TOption) =>
    typeof option === 'object' ? option[props.trackBy] : option

  const setOptionRef = (el: HTMLElement, i: number) => {
    if (el) {
      optionsRefs.value[i] = el
    }
  }

  const setOpen = (state = false) => (show.value = state)

  const toggleDropdown = async () => {
    if (props.disabled) {
      setOpen(false)
      return
    } else if (show.value) {
      setOpen(false)
    } else {
      unfocusOption()
      setOpen(true)
      await nextTick()
      if (props.modelValue) scrollToSelectedOption()
    }
  }

  const selectOption = (value: TOption) => {
    emit('update:modelValue', value)
  }

  const unfocusOption = () => {
    if (indexFocusedOption.value === -1) return
    indexFocusedOption.value = -1
  }

  const handleKey = async (duration: EDirections) => {
    if (!show.value || !props.options.length) return
    indexFocusedOption.value = getArrayIndexByDuration({
      duration,
      array: props.options as [],
      curIndex: indexFocusedOption.value,
    })
    await nextTick()
    const selectedEl = optionsRefs.value.find((r) =>
      r.className.includes(CLASS_SELECTED_OPTION),
    )
    selectedEl?.scrollIntoView({ block: 'nearest', inline: 'start' })
  }

  const handleEnterKey = () => {
    if (!show.value || indexFocusedOption.value === -1) {
      toggleDropdown()
      return
    }
    selectOption(props.options[indexFocusedOption.value])
    setOpen(false)
  }

  const wrappedValue = computed(() => {
    const result: TOption = { name: '', [props.trackBy]: '' }

    if (props.modelValue === null) {
      return result
    }

    if (typeof props.modelValue === 'object') {
      return props.modelValue as TOption
    }

    result.name = props.modelValue
    result[props.trackBy] = props.modelValue

    return result
  })

  return {
    wrappedValue,
    getOptionValue,
    getOptionName,
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
