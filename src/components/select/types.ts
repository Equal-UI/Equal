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
  modelValue: TOption | null
  disabled: boolean
  options: TOption[]
  trackBy: string
}

export type TSelect = {
  wrappedValue: ComputedRef<TOption>
  getOptionName: (option: TOption) => string | number
  getOptionValue: (option: TOption) => string | number
  setOptionRef: (el: HTMLElement, i: number) => void
  indexFocusedOption: Ref<number>
  optionsRefs: Ref<HTMLElement[]>
  show: Ref<boolean>
  handleEnterKey: () => void
  setOpen: (state: boolean) => void
  toggleDropdown: () => void
  selectOption: (value: TOption) => void
  handleKey: (type: EDirections) => void
}
