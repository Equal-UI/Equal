<template>
  <label class="it-switch-wrapper">
    <span
      class="it-switch"
      :class="[
        `it-switch--${type}`,
        modelValue && `it-switch--${type}--checked`,
        disabled && `it-switch--${type}--disabled`,
        pulse && !disabled && 'pulse',
      ]"
    >
      <input
        type="checkbox"
        class="it-switch-input"
        :disabled="disabled"
        style="z-index: 10"
        v-bind="$attrs"
        @change="toggle"
      />
      <span class="it-switch-circle"></span>
    </span>
    <span class="it-switch-label-group">
      <span
        v-if="label && !$slots.default"
        class="it-switch-label"
        :class="[disabled && 'it-switch-label--disabled']"
        >{{ label }}</span
      >
      <span
        v-if="subLabel && !$slots.sublabel"
        class="it-switch-label it-switch-label--sub"
        :class="[disabled && 'it-switch-label--disabled']"
        >{{ subLabel }}</span
      >

      <span
        v-if="$slots.default"
        class="it-switch-label"
        :class="[disabled && 'it-switch-label--disabled']"
        ><slot></slot
      ></span>
      <span
        v-if="$slots.sublabel"
        class="it-switch-label it-switch-label--sub"
        :class="[disabled && 'it-switch-label--disabled']"
        ><slot name="sublabel"></slot
      ></span>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Colors } from '@/models/enums'

export default defineComponent({
  name: 'it-switch',
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
        ].includes(value),
    },
    label: { type: String },
    subLabel: { type: String },
    pulse: { type: Boolean },
    disabled: { type: Boolean },
    modelValue: { type: Boolean, default: false },
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
