<template>
  <label :class="variant.root">
    <input
      :class="variant.input"
      :disabled="disabled"
      type="radio"
      :checked="isChecked"
      :value="modelValue"
      v-bind="$attrs"
      @change="check"
    />
    <span :class="variant.border">
      <span
        :class="[
          variant.circle,
          {
            [variant.activeCircle]: isChecked,
          },
        ]"
      ></span>
    </span>
    <span
      v-if="label || subLabel || $slots.default || $slots.sublabel"
      :class="variant.labelGroup"
    >
      <span v-if="label || $slots.default" :class="variant.label">
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
import { ITRadioOptions } from '@/types/components/components'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: Components.ITRadio,
  inheritAttrs: false,
  props: {
    ...getVariantPropsWithClassesList<ITRadioOptions>(),
    label: { type: String },
    subLabel: { type: String },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    modelValue: {},
    value: {},
  },
  setup(props, { emit }) {
    const variant = computed(() => {
      const customProps = {
        ...props,
        variant: props.disabled ? [props.variant, 'disabled'] : props.variant,
      }
      return useVariants<ITRadioOptions>(
        Components.ITRadio,
        <VariantJSWithClassesListProps<ITRadioOptions>>customProps,
      )
    })

    function check() {
      if (props.disabled) {
        return
      }
      emit('update:modelValue', props.value)
    }

    const isChecked = computed(() => props.modelValue === props.value)

    return { check, isChecked, variant }
  },
})
</script>
