import { ref, onBeforeUpdate, nextTick, computed, watch } from 'vue'
import { EDirections } from '@/models/enums'
import { TEmit } from '@/types'
import { TOption, TSelect, TSelectProps } from '@/components/select/types'
import { getArrayIndexByDirection } from './helpers'

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

  // watch(
  //   () => props.modelValue,
  //   (newVal) => {
  //     selectedOptionIndex.value = props.options.indexOf(
  //       newVal.value || wrappedValue.value[props.trackBy],
  //     )
  //   },
  // )

  // onBeforeUpdate(() => (optionsRefs.value = []))

  const scrollToSelectedOption = () => {
    const selectedEl = optionsRefs.value.find(
      (r) => r.dataset.focused === 'true',
    )
    console.log(selectedEl)
    selectedEl?.scrollIntoView({ block: 'nearest', inline: 'start' })
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

  const setSelectListRef = (dropdown: HTMLElement) => {
    if (dropdown) {
      selectListRef.value = dropdown
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

      if (!props.multiselect) {
        await nextTick()
        scrollToSelectedOption()
      }
    }
  }

  const remove = (index: number) => {
    selectedOptionIndex.value = selectedOptionIndex.value.filter(
      (el, i) => i !== index,
    )
    emit(
      'update:modelValue',
      selectedOptionIndex.value.map((el) => props.options[el]),
    )
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
    indexFocusedOption.value = optionIndex
    emit('update:modelValue', props.options[selectedOptionIndex.value])
  }

  const unfocusOption = () => {
    if (
      indexFocusedOption.value === -1 ||
      indexFocusedOption.value === selectedOptionIndex.value
    )
      return
    if (!props.multiselect) {
      indexFocusedOption.value = selectedOptionIndex.value as number
    }
  }

  const handleKey = async (direction: EDirections) => {
    if (!show.value || !props.options.length) return
    indexFocusedOption.value = getArrayIndexByDirection({
      direction,
      array: props.options as [],
      curIndex: indexFocusedOption.value,
    })
    await nextTick()
    const selectedEl = optionsRefs.value.find(
      (r) => r.dataset.focused === 'true',
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
      ? []
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
    selectedOptionIndex,
    optionsRefs,
    show,
    handleEnterKey,
    remove,
    setOpen,
    toggleDropdown,
    selectOption,
    setSelectListRef,
    handleKey,
  }
}
