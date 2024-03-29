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
      :class="variant.input"
      @click="toggleDropdown"
      @keydown.tab="() => setOpen(false)"
      @keydown.down.stop.prevent="handleKey(EDirections.DOWN)"
      @keydown.up.stop.prevent="handleKey(EDirections.UP)"
      @keydown.esc.stop.prevent="() => setOpen(false)"
      @keydown.enter.stop.prevent="handleEnterKey"
      @keydown.space.stop.prevent="handleEnterKey"
    >
      <slot name="icon" :props="props"></slot>
      <div
        v-if="!multiselect && wrappedValue[trackBy]"
        :class="[variant.selected]"
      >
        <slot name="selected-option" :props="props">
          {{ wrappedValue.name }}
        </slot>
      </div>
      <div
        v-else-if="multiselect && wrappedValue.length > 0"
        :class="[variant.selected]"
      >
        <slot name="selected-option" :props="props">
          <it-tag
            :variant="tagVariant"
            :closable="!disabled"
            filled
            v-for="(val, i) in wrappedValue"
            @close="remove(i)"
            :key="val[trackBy]"
          >
            {{ val.name }}
          </it-tag>
        </slot>
      </div>

      <span v-else :class="variant.placeholder">
        <slot name="placeholder" :props="props">
          {{ placeholder }}
        </slot>
      </span>

      <div>
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
      </div>
    </div>

    <Transition v-bind="variant.transitions?.fade">
      <span v-if="message" :class="variant.message">{{ message }}</span>
    </Transition>

    <Transition v-bind="variant.transitions?.fade">
      <div v-if="show" ref="dropdown" :class="variant.dropdown">
        <slot name="dropdown-header"></slot>
        <ul
          :class="variant.list"
          :ref="(dropdown) => setSelectListRef(dropdown)"
        >
          <li
            v-for="(option, optionIndex) in options"
            :key="optionIndex"
            :data-focused="indexFocusedOption === optionIndex"
            :ref="(el) => setOptionRef(el, optionIndex)"
            :class="[
              {
                [variant.focusedHovered]: indexFocusedOption === optionIndex,
                [variant.optionSelected]:
                  indexFocusedOption === optionIndex ||
                  (Array.isArray(wrappedValue) && wrappedValue)
                    ? (wrappedValue.length
                        ? wrappedValue
                        : [wrappedValue]
                      ).find((el) => el[trackBy] === getOptionValue(option))
                    : wrappedValue[trackBy] === getOptionValue(option),
              },
              variant.option,
            ]"
            @click="selectOption(optionIndex)"
          >
            <slot name="option" :props="props" :option="option">
              {{ getOptionName(option) }}
            </slot>
          </li>
        </ul>
        <slot name="dropdown-footer"></slot>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch, nextTick } from 'vue'
import { Components, Positions } from '@/models/enums'
import { clickOutside } from '@/directives'
import { useSelect } from '@/components/select/hooks'
import { TEmit } from '@/types'
import ItTag from '@/components/tag'
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
import {
  computePosition,
  offset,
  shift,
  Placement,
  flip,
} from '@floating-ui/dom'

export default defineComponent({
  name: Components.ITSelect,
  directives: {
    clickoutside: clickOutside,
  },
  components: { ItTag },
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
    tagVariant: { type: String, default: 'primary' },
    message: String,
    labelTop: { type: String, default: null },
    placeholder: { type: String, default: 'Select option' },
    options: { type: Array, default: () => [] },
    multiselect: Boolean,
    modelValue: { type: [String, Number, Object], default: null },
  },
  emits: ['update:modelValue'],
  setup(props: TProps, { emit, slots }) {
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.disabled ? [props.variant, 'disabled'] : props.variant,
      }
      return useVariants<ITSelectOptions>(Components.ITSelect, customProps)
    })

    const labelTopSlotExist = useCheckSlot(slots, 'label-top') !== null

    const {
      wrappedValue,
      getOptionName,
      getOptionValue,
      setOptionRef,
      indexFocusedOption,
      optionsRefs,
      show,
      selectedOptionIndex,
      handleEnterKey,
      setOpen,
      setSelectListRef,
      toggleDropdown,
      selectOption,
      handleKey,
      remove,
    } = useSelect(props as TSelectProps, emit as TEmit)

    const trigger = ref<HTMLElement>()
    const dropdown = ref<HTMLElement>()

    watch(show, async (newValue) => {
      if (newValue) {
        await nextTick()
        if (trigger.value && dropdown.value) {
          const {
            x,
            y,
            placement: extPlacement,
          } = await computePosition(trigger.value, dropdown.value, {
            middleware: [offset(6), flip(), shift()], // todo: move offset to prop
            placement: 'bottom',
          })

          Object.assign(dropdown.value.style, {
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
          })
        }
      }
    })

    onMounted(() => {
      if (!props.multiselect) {
        indexFocusedOption.value = props.options.indexOf(
          wrappedValue.value || wrappedValue.value[props.trackBy],
        )
      }
    })

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
      trigger,
    }
  },
})
</script>
