<template>
  <div class="it-select">
    <span v-if="labelTop" class="it-input-label">
      <slot name="label-top" :data="dataForSlots">
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
        @keydown.down.stop.prevent="handleKey('down')"
        @keydown.up.stop.prevent="handleKey('up')"
        @keydown.esc.stop.prevent="() => setOpen(false)"
        @keydown.enter.stop.prevent="handleEnterKey"
      >
        <span v-if="modelValue" class="it-select-selected">
          <slot name="selectedOption" :data="dataForSlots">
            {{ modelValue }}
          </slot>
        </span>

        <span v-else class="it-select-placeholder">
          <slot name="placeholder" :data="dataForSlots">
            {{ placeholder }}
          </slot>
        </span>

        <slot name="icon" :data="dataForSlots">
          <i
            class="it-select-arrow material-icons"
            :class="show && 'it-select-arrow--active'"
          >
            unfold_more
          </i>
        </slot>
      </div>

      <transition name="drop-bottom">
        <div v-show="show" class="it-select-dropdown" :class="dropdownClasses">
          <ul class="it-select-list">
            <li
              v-for="(option, i) in options"
              :key="i"
              :ref="(el) => setOptionRef.bind(null, [el, i])"
              class="it-select-option"
              :class="indexFocusedOption === i && 'it-select-option--focused'"
              @click="selectOption(index ? option[index] : option)"
            >
              <slot name="option">
                {{ index ? option[index] : option }}
              </slot>
              <transition name="fade-right">
                <span
                  v-if="modelValue === (index ? option[index] : option)"
                  class="it-select-option-check"
                ></span>
              </transition>
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
import { ALLOWED_POSITION } from '@/components/select/constants'

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
    index: { type: String, default: null },
    labelTop: { type: String, default: null },
    placeholder: { type: String, default: 'Select' },
    options: { type: Array, default: [] },
    modelValue: { type: [String, Number], default: null },
  },
  emits: ['update:modelValue'],
  setup(props: TProps, { emit }) {
    const {
      setOptionRef,
      indexFocusedOption,
      optionsRefs,
      show,
      handleEnterKey,
      setOpen,
      toggleDropdown,
      selectOption,
      handleKey,
    } = useSelect(props, emit as TEmit)

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

    const dataForSlots = computed(() => ({
      placement: props.placement,
      disabled: props.disabled,
      placeholder: props.placeholder,
      value: props.modelValue,
      labelTop: props.labelTop,
    }))

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
      selectionClasses,
      dropdownClasses,
      dataForSlots,
    }
  },
})
</script>
