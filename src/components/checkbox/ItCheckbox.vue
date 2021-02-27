<template>
  <label class="it-checkbox-wrapper">
    <span
      class="it-checkbox-check-wrapper"
      :class="[pulse && !disabled && 'pulse']"
    >
      <input
        type="checkbox"
        v-bind="$attrs"
        class="it-checkbox-input"
        :disabled="disabled"
        @change="toggle"
      />
      <span
        class="it-checkbox"
        :class="[
          `it-checkbox--${type}`,
          modelValue && `it-checkbox--${type}--checked`,
          disabled && 'it-checkbox--disabled',
        ]"
      >
        <it-icon style="font-size: 16px" :name="icon" />
      </span>
    </span>
    <span class="it-checkbox-label-group">
      <span
        v-if="label && !$slots.default"
        class="it-checkbox-label"
        :class="[
          lineThrough && modelValue && 'it-checkbox-label--linethrough',
          disabled && 'it-checkbox-label--disabled',
        ]"
        >{{ label }}</span
      >
      <span
        v-if="subLabel && !$slots.sublabel"
        class="it-checkbox-label it-checkbox-label--sub"
        :class="[disabled && 'it-checkbox-label--disabled']"
        >{{ subLabel }}</span
      >

      <span
        v-if="$slots.default"
        class="it-checkbox-label"
        :class="[
          lineThrough && modelValue && 'it-checkbox-label--linethrough',
          disabled && 'it-checkbox-label--disabled',
        ]"
      >
        <slot></slot>
      </span>
      <span
        v-if="$slots.sublabel"
        class="it-checkbox-label it-checkbox-label--sub"
        :class="[disabled && 'it-checkbox-label--disabled']"
      >
        <slot name="sublabel"></slot>
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Colors } from '@/models/enums'

export default defineComponent({
  name: 'it-checkbox',
  inheritAttrs: false,
  props: {
    type: {
      default: Colors.PRIMARY,
      type: String,
      validator: (value: Colors) =>
        [
          Colors.PRIMARY,
          Colors.SUCCESS,
          Colors.DANGER,
          Colors.WARNING,
          Colors.BLACK,
          Colors.NEUTRAL,
        ].includes(value),
    },
    label: { type: String },
    subLabel: { type: String },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    lineThrough: { type: Boolean },
    icon: { type: String, default: 'check' },
    color: { type: String },
    modelValue: {},
  },
  setup(props, { emit }) {
    function toggle() {
      if (props.disabled) {
        return
      }
      const newValue = !props.modelValue
      emit('update:modelValue', newValue)
    }
    return { toggle }
  },
})
</script>
