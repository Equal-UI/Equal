<template>
  <div :class="variant.root">
    <span v-if="labelTop || labelTopSlotExist" :class="variant.label">
      <slot name="label-top" :props="props">
        {{ labelTop }}
      </slot>
    </span>

    <div
      ref="trigger"
      v-clickoutside="outsideHandler"
      :tabindex="disabled ? undefined : 0"
      :class="[variant.input, { [variant.inputDisabled]: disabled }]"
      @click="toggleDropdown"
      @keydown.tab="() => setOpen(false)"
      @keydown.down.stop.prevent="handleKey(EDirections.DOWN)"
      @keydown.up.stop.prevent="handleKey(EDirections.UP)"
      @keydown.esc.stop.prevent="() => setOpen(false)"
      @keydown.enter.stop.prevent="handleEnterKey"
      @keydown.space.stop.prevent="handleEnterKey"
    >
      <span
        v-if="!multiselect && wrappedValue[trackBy]"
        :class="[variant.selected]"
      >
        <slot name="selected-option" :props="props">
          {{ wrappedValue.name }}
        </slot>
      </span>
      <span
        v-else-if="multiselect && wrappedValue.length > 0"
        :class="[variant.selected]"
      >
        <slot name="selected-option" :props="props">
          <it-tag
            variant="primary"
            closable
            filled
            v-for="(val, i) in wrappedValue"
            @close="remove(i)"
            :key="val[trackBy]"
            >{{ val.name }}</it-tag
          >
        </slot>
      </span>

      <span v-else :class="variant.placeholder">
        <slot name="placeholder" :props="props">
          {{ placeholder }}
        </slot>
      </span>

      <slot name="icon" :props="props">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="variant.inputIcon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 9l4-4 4 4m0 6l-4 4-4-4"
          />
        </svg>
      </slot>
    </div>

    <transition name="drop-bottom">
      <div v-if="show" ref="dropdown" :class="variant.dropdown">
        <ul
          :class="variant.list"
          :ref="(dropdown) => setSelectListRef(dropdown)"
        >
          <li
            v-for="(option, optionIndex) in options"
            :key="optionIndex"
            :ref="(el) => setOptionRef(el, optionIndex)"
            class="it-select-option"
            :class="indexFocusedOption === optionIndex && CLASS_SELECTED_OPTION"
            @click="selectOption(optionIndex)"
          >
            <slot name="option" :props="props" :option="option">
              {{ getOptionName(option) }}
              <transition name="fade-right">
                <span
                  v-if="wrappedValue[trackBy] === getOptionValue(option)"
                  class="it-select-option-check"
                />
              </transition>
            </slot>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { Components, Positions } from '@/models/enums'
import { clickOutside } from '@/directives'
import { useSelect } from '@/components/select/hooks'
import { TEmit } from '@/types'
import { TProps } from '@/types/global'
import {
  ALLOWED_POSITION,
  CLASS_SELECTED_OPTION,
} from '@/components/select/constants'
import { TSelectProps } from './types'
import { EDirections } from '@/models/enums'
import { useCheckSlot } from '@/hooks'
import { getVariantPropsWithClassesList } from '@/helpers/getVariantProps'
import { ITSelectOptions } from '@/types/components/components'
import { useVariants } from '@/hooks/useVariants'

export default defineComponent({
  name: Components.ITSelect,
  directives: {
    clickoutside: clickOutside,
  },
  props: {
    ...getVariantPropsWithClassesList<ITSelectOptions>(),
    placement: {
      type: String,
      default: Positions.B,
      validator: (value: Positions) => ALLOWED_POSITION.includes(value),
    },
    disabled: { type: Boolean, default: false },
    divided: { type: Boolean, default: false },
    trackBy: { type: String, default: 'value' },
    labelTop: { type: String, default: null },
    placeholder: { type: String, default: 'Select option' },
    options: { type: Array, default: () => [] },
    multiselect: Boolean,
    modelValue: { type: [String, Number, Object], default: null },
  },
  emits: ['update:modelValue'],
  setup(props: TProps, { emit, slots }) {
    const variant = computed(() =>
      useVariants<ITSelectOptions>(Components.ITSelect, props),
    )

    const labelTopSlotExist = useCheckSlot(slots, 'label-top') !== null

    const {
      wrappedValue,
      getOptionName,
      getOptionValue,
      setOptionRef,
      indexFocusedOption,
      optionsRefs,
      show,
      handleEnterKey,
      setOpen,
      setSelectListRef,
      toggleDropdown,
      selectOption,
      handleKey,
      remove,
    } = useSelect(props as TSelectProps, emit as TEmit)

    const dropdown = ref<HTMLElement>()

    function outsideHandler(e: Event) {
      if (!show.value) {
        return
      }
      if (dropdown.value?.contains(e.target as Node) && props.multiselect) {
        return
      }
      setOpen(false)
    }

    return {
      labelTopSlotExist,
      CLASS_SELECTED_OPTION,
      wrappedValue,
      getOptionName,
      getOptionValue,
      setOptionRef,
      indexFocusedOption,
      optionsRefs,
      show,
      handleEnterKey,
      setOpen,
      setSelectListRef,
      toggleDropdown,
      selectOption,
      handleKey,
      props,
      EDirections,
      outsideHandler,
      dropdown,
      variant,
      remove,
    }
  },
})
</script>
