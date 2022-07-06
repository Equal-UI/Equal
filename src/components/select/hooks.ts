import { ref, onBeforeUpdate, nextTick, computed, watch } from 'vue'
import { EDirections } from '@/models/enums'
import { TEmit } from '@/types'
import { TOption, TSelect, TSelectProps } from '@/components/select/types'
import { getArrayIndexByDirection } from './helpers'
import { CLASS_SELECTED_OPTION } from './constants'

export const useSelect = (props: TSelectProps, emit: TEmit): TSelect => {
  const indexFocusedOption = ref(-1)
  const optionsRefs = ref<HTMLElement[]>([])
  const selectListRef = ref<HTMLElement | undefined>(undefined)
  const selectedOptionIndex = ref<number | number[]>(
    props.multiselect ? [] : -1,
  )
  const show = ref(false)

  watch(
    () => props.multiselect,
    (newVal) => {
      selectedOptionIndex.value = newVal ? [] : -1
    },
  )

  // onBeforeUpdate(() => (optionsRefs.value = []))

  // const scrollToSelectedOption = () => {
  //   const selectedOption: HTMLElement | null =
  //     optionsRefs.value[selectedOptionIndex.value]

  //   if (selectListRef.value !== undefined)
  //     selectListRef.value.scrollTop = selectedOption?.offsetTop
  // }

  const getOptionName = (option: TOption) =>
    typeof option === 'object' ? option.name : option

  const getOptionValue = (option: TOption) =>
    typeof option === 'object' ? option[props.trackBy] : option

  const setOptionRef = (el: HTMLElement, i: number) => {
    if (el) {
      optionsRefs.value[i] = el
    }
  }

  const setSelectListRef = (dropdown: HTMLElement) => {
    if (dropdown) {
      selectListRef.value = dropdown
    }
  }

  const setOpen = (state = false) => (show.value = state)

  const toggleDropdown = () => {
    if (props.disabled) {
      setOpen(false)
      return
    } else if (show.value) {
      setOpen(false)
    } else {
      unfocusOption()
      setOpen(true)
      // await nextTick()
      // if (props.modelValue) scrollToSelectedOption()
    }
  }

  const selectOption = (optionIndex: number) => {
    const option = props.options[optionIndex]
    if (!option) {
      return
    }
    if (props.multiselect && Array.isArray(selectedOptionIndex.value)) {
      if (selectedOptionIndex.value.includes(optionIndex)) {
        selectedOptionIndex.value = selectedOptionIndex.value.filter(
          (el) => el !== optionIndex,
        )
      } else {
        selectedOptionIndex.value = [...selectedOptionIndex.value, optionIndex]
      }
      emit(
        'update:modelValue',
        selectedOptionIndex.value.map((el) => props.options[el]),
      )
      return
    }
    selectedOptionIndex.value = optionIndex
    emit('update:modelValue', props.options[selectedOptionIndex.value])
  }

  const unfocusOption = () => {
    if (indexFocusedOption.value === -1) return
    indexFocusedOption.value = -1
  }

  const handleKey = async (direction: EDirections) => {
    if (!show.value || !props.options.length) return
    indexFocusedOption.value = getArrayIndexByDirection({
      direction,
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
    selectOption(indexFocusedOption.value)
    setOpen(false)
  }

  const wrappedValue = computed(() => {
    let result: TOption | TOption[] = props.multiselect
      ? [{ name: '', [props.trackBy]: '' }]
      : { name: '', [props.trackBy]: '' }

    if (!props.modelValue) {
      return result
    }
    if (
      Array.isArray(props.modelValue) &&
      typeof props.modelValue[0] === 'object'
    ) {
      return props.modelValue as TOption[]
    }

    if (
      !Array.isArray(props.modelValue) &&
      typeof props.modelValue === 'object'
    ) {
      return props.modelValue as TOption
    }

    if (!props.multiselect) {
      result.name = props.modelValue
      result[props.trackBy] = props.modelValue
    }
    if (props.multiselect) {
      result = (
        Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]
      ).map((el) => ({ name: el, [props.trackBy]: el }))
    }

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
    setSelectListRef,
    handleKey,
  }
}
