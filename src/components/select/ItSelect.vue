<template>
  <div class="it-select">
    <span v-if="labelTop || labelTopSlotExist" class="it-input-label">
      <slot name="label-top" :props="props">
        {{ labelTop }}
      </slot>
    </span>

    <div class="it-select-inner">
      <div
        ref="trigger"
        v-clickoutside="() => setOpen(false)"
        :tabindex="disabled ? -1 : 0"
        class="it-select-selection"
        :class="selectionClasses"
        @click="toggleDropdown"
        @keydown.tab="() => setOpen(false)"
        @keydown.down.stop.prevent="handleKey(EDirections.DOWN)"
        @keydown.up.stop.prevent="handleKey(EDirections.UP)"
        @keydown.esc.stop.prevent="() => setOpen(false)"
        @keydown.enter.stop.prevent="handleEnterKey"
      >
        <span v-if="wrappedValue[trackBy]" class="it-select-selected">
          <slot name="selected-option" :props="props">
            {{ wrappedValue.name }}
          </slot>
        </span>

        <span v-else class="it-select-placeholder">
          <slot name="placeholder" :props="props">
            {{ placeholder }}
          </slot>
        </span>

        <slot name="icon" :props="props">
          <i
            class="it-select-arrow material-icons"
            :class="show && 'it-select-arrow--active'"
          >
            unfold_more
          </i>
        </slot>
      </div>

      <transition name="drop-bottom">
        <div v-if="show" class="it-select-dropdown" :class="dropdownClasses">
          <ul class="it-select-list">
            <li
              v-for="(option, i) in options"
              :key="i"
              :ref="(el) => setOptionRef(el, i)"
              class="it-select-option"
              :class="indexFocusedOption === i && CLASS_SELECTED_OPTION"
              @click="selectOption(option)"
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
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Positions } from '@/models/enums'
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

export default defineComponent({
  name: 'it-select',
  directives: {
    clickoutside: clickOutside,
  },
  props: {
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
    modelValue: { type: [String, Number, Object], default: null },
  },
  emits: ['update:modelValue'],
  setup(props: TProps, { emit, slots }) {
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
      toggleDropdown,
      selectOption,
      handleKey,
    } = useSelect(props as TSelectProps, emit as TEmit)

    const selectionClasses = computed(() => ({
      'it-select-selection--disabled': props.disabled,
      'it-select-selection--active': show.value,
    }))

    const dropdownClasses = computed(() => ({
      [props.placement
        ? `it-select-dropdown--${props.placement}`
        : `it-select-dropdown--${Positions.B}`]: true,
      'it-select-dropdown--divided': props.divided,
    }))

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
      toggleDropdown,
      selectOption,
      handleKey,
      selectionClasses,
      dropdownClasses,
      props,
      EDirections,
    }
  },
})
</script>
