<template>
  <label :class="variant.root">
    <span>
      <input
        type="checkbox"
        v-bind="$attrs"
        class="peer absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
        :disabled="disabled"
        @change="toggle"
        :checked="modelValue"
      />
      <span :class="variant.checkbox">
        <div
          :class="[
            variant.checkIcon,
            { [variant.checkIconActive]: modelValue },
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </span>
    </span>
    <span
      v-if="label || subLabel || $slots.default || $slots.sublabel"
      :class="variant.labelGroup"
    >
      <span
        v-if="label || $slots.default"
        :class="[
          variant.label,
          { [variant.lineThrough]: lineThrough && modelValue },
        ]"
      >
        <slot>{{ label }}</slot>
      </span>
      <span v-if="subLabel || $slots.sublabel" :class="variant.subLabel">
        <slot name="sublabel">{{ subLabel }}</slot>
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import {
  getVariantPropsWithClassesList,
  VariantJSWithClassesListProps,
} from '@/helpers/getVariantProps'
import { useVariants } from '@/hooks/useVariants'
import { Components } from '@/models/enums'
import { ITCheckboxOptions } from '@/types/components/components'
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: Components.ITCheckbox,
  inheritAttrs: false,
  props: {
    ...getVariantPropsWithClassesList<ITCheckboxOptions>(),
    label: { type: String },
    subLabel: { type: String },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    lineThrough: { type: Boolean },
    modelValue: {},
  },
  setup(props, { emit }) {
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.disabled ? [props.variant, 'disabled'] : props.variant,
      }
      return useVariants<ITCheckboxOptions>(
        Components.ITCheckbox,
        <VariantJSWithClassesListProps<ITCheckboxOptions>>customProps,
      )
    })
    function toggle() {
      if (props.disabled) {
        return
      }
      const newValue = !props.modelValue
      emit('update:modelValue', newValue)
    }
    return { toggle, variant }
  },
})
</script>
