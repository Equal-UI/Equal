import { Ref, ComputedRef } from 'vue'
import { EDirections } from '@/models/enums'

export type TOption =
  | string
  | number
  | {
      [trackBy: string]: string | number
      name: string | number
    }

export type TSelectProps = {
  multiselect: boolean
  modelValue: TOption | null
  disabled: boolean
  options: TOption[]
  trackBy: string
}

export type TSelect = {
  wrappedValue: ComputedRef<TOption | TOption[]>
  getOptionName: (option: TOption) => string | number
  getOptionValue: (option: TOption) => string | number
  setOptionRef: (el: HTMLElement, i: number) => void
  indexFocusedOption: Ref<number>
  optionsRefs: Ref<HTMLElement[]>
  show: Ref<boolean>
  handleEnterKey: () => void
  setOpen: (state: boolean) => void
  toggleDropdown: () => void
  selectOption: (optionIndex: number) => void
  setSelectListRef: (dropdown: HTMLElement) => void
  handleKey: (type: EDirections) => void
}
